import store from '../utils/Store';

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
  private sockets: Map<number, WSTransport> = new Map()
}
