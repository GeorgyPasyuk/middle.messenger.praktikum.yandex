import EventBus

export enum WSEvents {
  Connected = "connected",
  Error = "error",
  Message = "message",
  Close = "close"
}

export default class WS extends EventBus {
  private socket: WebSocket | null = null;
  private pingInterval: number = 0;

  constructor(private url: string) {
    super()
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error("Socket is not connected")
    }

    this.socket.send(JSON.stringify(data))
  }

}
