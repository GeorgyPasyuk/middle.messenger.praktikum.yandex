import EventBus from "./EventBus";

export enum WSEvents {
  Connected = "connected",
  Error = "error",
  Message = "message",
  Close = "close",
}

export default class WS extends EventBus {
  private socket: WebSocket | null = null;
  private pingInterval: number = 0;

  constructor(private url: string) {
    super();
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error("Socket is not connected");
    }
    try {
      this.socket.send(JSON.stringify(data));
    } catch (e) {
    }
  }

  public connect(): Promise<void> {
    this.socket = new WebSocket(this.url);

    this.subscribe(this.socket);

    this.setupPing();

    return new Promise((resolve) => {
      this.on(WSEvents.Connected, () => {
        resolve();
      });
    });
  }

  public close() {
    this.socket?.close();
  }

  private setupPing() {
    this.pingInterval = window.setInterval(() => {
      this.send({ type: "ping" });
    }, 5000);

    this.on(WSEvents.Close, () => {
      clearInterval(this.pingInterval);

      this.pingInterval = 0;
    });
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener("open", () => {
      this.emit(WSEvents.Connected);
    });

    socket.addEventListener("close", () => {
      this.emit(WSEvents.Close);
    });

    socket.addEventListener("error", (e) => {
      this.emit(WSEvents.Error, e);
    });

    socket.addEventListener("message", (message) => {
      try {
        const data = JSON.parse(message.data);

        if (data.type && data.type === "pong") {
          return;
        }

        this.emit(WSEvents.Message, data);
      } catch (e) {
        console.error(e);
      }
    });
  }
}
