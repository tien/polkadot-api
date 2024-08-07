// @ts-ignore
import { WebSocket } from "ws"
import { getInternalWsProvider } from "./ws-provider"
export type { JsonRpcProvider } from "@polkadot-api/json-rpc-provider"

class WS extends WebSocket {
  close() {
    ;(this as any).terminate()
  }
}

export const getWsProvider = getInternalWsProvider(WS as any)
