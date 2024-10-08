import { chainHead } from "@/methods"
import type { ParsedJsonRpcEnhancer } from "@/parsed"

export const unpinHash: ParsedJsonRpcEnhancer = (base) => (onMsg) => {
  const { send: _send, disconnect } = base(onMsg)

  const send = (msg: { id?: string; method?: string; params?: Array<any> }) => {
    const { method, params, id, ...rest } = msg
    if (method == chainHead.unpin && params && Array.isArray(params[1])) {
      params[1].forEach((hash, idx) => {
        _send({
          ...rest,
          id: idx === 0 ? id : `${id}-patched-${idx}`,
          method,
          params: [params[0], hash],
        })
      })
    } else _send(msg)
  }

  return { send, disconnect }
}
