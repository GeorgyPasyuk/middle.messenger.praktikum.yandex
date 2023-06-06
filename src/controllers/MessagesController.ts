import store from '../utils/Store';
import WS, {WSEvents} from '../utils/WS';

export interface Message {
  chat_id: number,
  time: string,
  type: string,
  user_id: number,
  content: string,
  file?: {
    id: number,
    user_id: number,
    path: string,
    filename: string,
    content_type: string,
    content_size: number,
    upload_date: string
  }
}

class MessagesController {
  private sockets: Map<number, WS> = new Map()

  async connect(id: number, token: string) {
    if (this.sockets.has(id)) {
      return
    }

    const userId = store.getState().user.id;

    const ws = new WS(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`)

    this.sockets.set(id, ws)

    await ws.connect()

    this.subscribe(ws, id)
    this.fetchOldMessages(id)
  }

  sendMessage(id: number, message: string) {
    const socket = this.sockets.get(id)

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`)
    }

    socket.send({
      type: "message",
      content: message
    })
    storeSetMessage(id, message)
  }

  fetchOldMessages(id: number) {
    const socket = this.sockets.get(id)

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }
    socket.send({type: "get old", content: "0"})
  }

  closeAll() {
    Array.from(this.sockets.values()).forEach(socket => socket.close())
  }

  private onMessage(id: number, messages: Message | Message[]) {
    let messagesToAdd: Message[] = [];

    if(Array.isArray(messages)) {
      messagesToAdd = messages.reverse()
    } else {
      messagesToAdd.push(messages);
    }

    const currentMessages = (store.getState().messages || {})[id] || [];

    messagesToAdd = [...currentMessages, ...messagesToAdd];

    store.set(`messages.${id}`, messagesToAdd)

    if (messagesToAdd[(messagesToAdd.length - 1)]) {


      const last_message = messagesToAdd[messagesToAdd.length - 1].content

      storeSetMessage(id, last_message)
    }
  }

  private onClose(id: number) {
    this.sockets.delete(id);
  }

  private subscribe(transport: WS, id: number) {
    transport.on(WSEvents.Message, (message)=> this.onMessage(id, message))
    transport.on(WSEvents.Close, ()=> this.onClose(id))
  }

}


function storeSetMessage(id: number, message: string) {
  const chatIndex = store.getState().chats
    .findIndex((chat: Record<string, any>) => chat.id === id);
  if (chatIndex) {
    store.set(`chats.${chatIndex}.last_message.content`, message)
  }
}

const controller = new MessagesController()

// @ts-ignore
window.messagesController = controller

export default controller
