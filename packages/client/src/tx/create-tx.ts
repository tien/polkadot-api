import { Observable, combineLatest, mergeMap, of, take } from "rxjs"
import { BlockInfo, ChainHead$ } from "@polkadot-api/observable-client"
import {
  ChargeAssetTxPayment,
  ChargeTransactionPayment,
  CheckMortality,
} from "./signed-extensions/user"
import * as chainSignedExtensions from "./signed-extensions/chain"
import type { PolkadotSigner } from "@polkadot-api/polkadot-signer"
import { _void, Encoder } from "@polkadot-api/substrate-bindings"
import { empty } from "./signed-extensions/utils"
import { CustomSignedExtensionValues } from "./types"

type HintedSignedExtensions = Partial<{
  tip: bigint
  mortality: { mortal: false } | { mortal: true; period: number }
  asset: Uint8Array
  nonce: number
}>

const empty$ = of({
  value: empty,
  additionalSigned: empty,
})

const getCustomSignExt = <T extends Record<string, any>>(
  obj: T,
  key: string,
  encoder: Encoder<any>,
) => {
  if (!(key in obj)) return empty
  const x = obj[key] as any
  return x instanceof Uint8Array ? x : encoder(x)
}

const getEncodedSignExtFromCustom = (
  custom: CustomSignedExtensionValues,
  valueEnc: Encoder<any>,
  additionalSignedEnc: Encoder<any>,
) =>
  of({
    value: getCustomSignExt(custom, "value", valueEnc),
    additionalSigned: getCustomSignExt(
      custom,
      "additionalSigned",
      additionalSignedEnc,
    ),
  })

export const createTx: (
  chainHead: ChainHead$,
  signer: PolkadotSigner,
  callData: Uint8Array,
  atBlock: BlockInfo,
  customSignExt: Record<string, CustomSignedExtensionValues>,
  hinted?: HintedSignedExtensions,
) => Observable<Uint8Array> = (
  chainHead,
  signer,
  callData,
  atBlock,
  customSignedExtensions,
  hinted = {},
) =>
  chainHead.getRuntimeContext$(atBlock.hash).pipe(
    take(1),
    mergeMap((ctx) => {
      const signedExtensionsCtx = {
        lookupFn: ctx.lookup,
        chainHead: chainHead,
        callData: callData,
        at: atBlock.hash,
        from: signer.publicKey,
      }

      const mortality: Parameters<typeof CheckMortality>[0] = !hinted.mortality
        ? { period: 64, blockNumber: atBlock.number }
        : hinted.mortality.mortal
          ? { period: hinted.mortality.period, blockNumber: atBlock.number }
          : undefined // immortal

      return combineLatest(
        ctx.lookup.metadata.extrinsic.signedExtensions
          .map(({ identifier, type, additionalSigned }) => {
            if (identifier === "CheckMortality")
              return CheckMortality(mortality, signedExtensionsCtx)

            if (identifier === "ChargeTransactionPayment")
              return ChargeTransactionPayment(hinted.tip ?? 0n)

            if (identifier === "ChargeAssetTxPayment")
              return ChargeAssetTxPayment(hinted.tip ?? 0n, hinted.asset)

            if (identifier === "CheckNonce" && "nonce" in hinted)
              return chainSignedExtensions.getNonce(hinted.nonce!)

            const fn = chainSignedExtensions[identifier as "CheckGenesis"]
            const [valueEnc] = ctx.dynamicBuilder.buildDefinition(type)
            const [additionalSignedEnc] =
              ctx.dynamicBuilder.buildDefinition(additionalSigned)
            return fn
              ? fn(signedExtensionsCtx)
              : valueEnc === _void[0] && additionalSignedEnc === _void[0]
                ? empty$
                : identifier in customSignedExtensions
                  ? getEncodedSignExtFromCustom(
                      customSignedExtensions[identifier],
                      valueEnc,
                      additionalSignedEnc,
                    )
                  : null
          })
          .filter((x) => !!x),
      ).pipe(
        mergeMap((signedExtensions) =>
          signer.signTx(
            callData,
            Object.fromEntries(
              ctx.lookup.metadata.extrinsic.signedExtensions.map(
                ({ identifier }, idx) => [
                  identifier,
                  { identifier, ...signedExtensions[idx] },
                ],
              ),
            ),
            ctx.metadataRaw,
            atBlock.number,
          ),
        ),
      )
    }),
  )
