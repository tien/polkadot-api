interface FlatType {
  name: string
  type: "other"
}

interface DeepType {
  name: string
  type: "tuple"
  components: Array<Type>
}

type Type = DeepType | FlatType

interface FunctionAbi {
  name: string
  inputs: Array<Type>
  outputs: Array<Type>
  stateMutability: "pure" | "view" | "nonpayable" | "payable"
  type: "function"
}

interface EventAbi {
  anonymous: boolean
  name: string
  inputs: Array<Type & { indexed: boolean }>
  type: "event"
}

type CustomCodec = {
  base: string
  applyToVariableNames: string[]
  importFrom: string
  isDefaultExport?: boolean
}

export interface Config {
  abi: Array<FunctionAbi | EventAbi>
  functions?: Array<string>
  events?: Array<string>
  customCodecs?: Record<string, CustomCodec>
}

const idxToVarName = (idx: number): string => {
  const result: Array<number> = []
  do {
    result.push((idx % 25) + 97)
    idx = Math.floor(idx / 25)
  } while (idx)
  return String.fromCharCode(...result)
}

const normalizations: Record<string, string> = {
  string: "str",
  uint256: "uint",
  int256: "int",
}

const normalize = (input: string): string => normalizations[input] || input

export function processAbi({
  abi,
  functions,
  events,
  customCodecs = {},
}: Config) {
  const relevantFns = functions && new Set(functions)
  const relevantEvents = events && new Set(events)
  const relevantAbi = abi.filter(
    (f) =>
      (f.type === "function" && (!relevantFns || relevantFns.has(f.name))) ||
      (f.type === "event" && (!relevantEvents || relevantEvents.has(f.name))),
  )
  const getTupleCodec = (tuple: DeepType): string => {
    if (tuple.components.every((c) => c.name)) {
      const inner = tuple.components.map((x) => `${x.name}:${getCodec(x)}`)
      usedCodecs.add("Struct")
      return `Struct({${inner.join(",")}})`
    }
    return `Tuple(${tuple.components.map(getCodec).join(",")})`
  }

  const getVectorCodec = (type: string): string => {
    usedCodecs.add("Vector")
    let firstOpen = type.indexOf("[")
    let result = normalize(type.slice(0, type.indexOf("[")))
    usedCodecs.add(result)
    while (firstOpen > -1) {
      const closed = type.indexOf("]", firstOpen)
      if (closed === firstOpen + 1) {
        result = `Vector(${result})`
      } else {
        const len = type.slice(firstOpen + 1, closed)
        result = `Vector(${result},${len})`
      }
      firstOpen = type.indexOf("[", firstOpen + 1)
    }
    return result
  }
  const cache = new Map<string, { name: string; count: number }>()
  const usedCodecs = new Set<string>(["Tuple"])

  const toCache = (val: string): string => {
    const cached = cache.get(val)
    if (cached) {
      cached.count++
      return cached.name
    }
    const name = idxToVarName(cache.size)
    cache.set(val, { name, count: 1 })
    return name
  }

  const getCodec = (input: Type): string => {
    if (input.type === "tuple") return toCache(getTupleCodec(input))
    const type = normalize(input.type as string)
    if (type.endsWith("]")) {
      return toCache(getVectorCodec(type))
    }
    usedCodecs.add(type)
    return type
  }

  const getFunctionArgs = ({ inputs }: FunctionAbi) => {
    const codecs = inputs.map(getCodec)
    const names = codecs.map(
      (codec, idx) => `${inputs[idx].name || `arg${idx}`}: typeof ${codec}`,
    )
    return toCache(`[${codecs.join(", ")}] as [${names.join(", ")}]`)
  }

  const getOutput = (outputs: Type[]) => {
    if (outputs.length === 0) {
      return toCache("Tuple()")
    }

    if (outputs.length === 1) return toCache(`Tuple(${getCodec(outputs[0])})`)

    if (outputs.every((o) => o.name)) {
      usedCodecs.add("Struct")
      return toCache(
        `Struct({${outputs
          .map((o) => `${o.name}: ${getCodec(o)}`)
          .join(",")}})`,
      )
    }

    return toCache(`Tuple(${outputs.map(getCodec).join(",")})`)
  }

  const mutabilities: Record<FunctionAbi["stateMutability"], 0 | 1 | 2 | 3> = {
    pure: 0,
    view: 1,
    nonpayable: 2,
    payable: 3,
  }

  function processFunctionAbi(fn: FunctionAbi) {
    const inputs = getFunctionArgs(fn)
    const decoder = getOutput(fn.outputs)
    const mutability = mutabilities[fn.stateMutability]
    return { name: fn.name, inputs, decoder, mutability }
    // return `export const ${fn.name} = solidityFn("${fn.name}", ${inputs}, ${decoder}, ${mutability});`
  }

  function processEventAbi(ev: EventAbi) {
    const filters = toCache(
      `{${ev.inputs
        .filter((i) => i.indexed)
        .map((x) => `${x.name}: ${getCodec(x)}`)
        .join(", ")}}`,
    )

    const data = getOutput(ev.inputs.filter((i) => !i.indexed))

    return `export const ${ev.name} = solidityEvent(${filters}, ${data}${
      ev.anonymous ? "" : `, "${ev.name}"`
    });`
  }

  const applyCustomCodecs = ({ abi, customCodecs = {} }: Config): void => {
    if (Object.values(customCodecs).length === 0) return
    const custom = new Map<string, Map<string, string>>()

    Object.entries(customCodecs).forEach(([name, c]) => {
      const entry = custom.get(c.base) ?? new Map<string, string>()
      c.applyToVariableNames.forEach((vName) => {
        entry.set(vName, name)
      })
      custom.set(c.base, entry)
    })

    const overrideType = (input: Type) => {
      if (input.type === "tuple") {
        input.components.forEach(overrideType)
        return
      }
      if (input.type.endsWith("]")) {
        const actualName = input.type.slice(0, input.type.indexOf("["))
        if (custom.has(actualName) && custom.get(actualName)!.has(input.name)) {
          const renamed = custom.get(actualName)!.get(input.name)!
          ;(input as any).type =
            renamed + input.type.slice(input.type.indexOf("["))
        }
        return
      }
      if (custom.has(input.type) && custom.get(input.type)!.has(input.name)) {
        const renamed = custom.get(input.type)!.get(input.name)!
        ;(input as any).type = renamed
      }
    }

    abi.forEach((fn) => {
      fn.inputs.forEach(overrideType)
      if (fn.type === "function") fn.outputs.forEach(overrideType)
    })
  }
  applyCustomCodecs({ abi: relevantAbi, customCodecs })

  const preExportedFunctions = relevantAbi
    .filter((x): x is FunctionAbi => x.type === "function")
    .map(processFunctionAbi)

  const fnGroups = new Map<string, ReturnType<typeof processFunctionAbi>[]>()
  preExportedFunctions.forEach((x) => {
    const { name } = x
    const g = fnGroups.get(name) ?? []
    g.push(x)
    fnGroups.set(name, g)
  })

  let overloaded = false

  const exportedFunctions = [...fnGroups].map(([name, fns]) => {
    if (fns.length === 1) {
      const { inputs, decoder, mutability } = fns[0]
      return `export const ${name} = solidityFn("${name}", ${inputs}, ${decoder}, ${mutability});`
    }

    overloaded = true
    return `const ${name}Name = "${name}";
${fns
  .map(
    ({ inputs, decoder, mutability }, idx) =>
      `const ${name}${idx} = solidityFn(${name}Name, ${inputs}, ${decoder}, ${mutability});`,
  )
  .join("\n")}
export const ${name} = overloadedFn(${fns
      .map((_, idx) => `${name}${idx}`)
      .join(", ")});
`
  })

  const exportedEvents = relevantAbi
    .filter((x): x is EventAbi => x.type === "event")
    .map(processEventAbi)

  const usedCustom: string[] = []
  const mainImports: string[] = []
  usedCodecs.forEach((codec) => {
    if (customCodecs && customCodecs[codec]) {
      usedCustom.push(codec)
    } else {
      mainImports.push(codec)
    }
  })

  const bindingsImports = ["solidityFn", "solidityEvent"].filter((_, idx) =>
    idx === 0 ? exportedFunctions.length : exportedEvents.length,
  )
  if (overloaded) bindingsImports.push("overloadedFn")

  let result = `${[
    `import { ${bindingsImports.join(
      ", ",
    )} } from "@unstoppablejs/solidity-bindings";`,
    `import { ${mainImports.join(",")} } from "solidity-codecs";`,
  ]
    .concat(
      usedCustom.map((x) => {
        const custom = customCodecs[x]
        return custom.isDefaultExport
          ? `import ${x} from "${custom.importFrom}";`
          : `import { ${x} } from "${custom.importFrom}";`
      }),
    )
    .join("\n")}

${[...cache].map(([key, value]) => `const ${value.name} = ${key};`).join("\n")}

${exportedFunctions.join("\n")}

${exportedEvents.join("\n")}
`

  return result
}