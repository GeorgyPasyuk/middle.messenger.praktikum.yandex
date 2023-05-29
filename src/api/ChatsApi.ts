import BaseAPI from './BaseApi';
import {User} from './AuthAPI';

export interface ChatsInfo {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: {
    user: User,
    time: string,
    content: string
  }
}

export class ChatsAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  create(title: string) {
    return this.http.post('/', {title})
  }

  delete(id: number): Promise<unknown> {
    return this.http.delete('/', { chatId: id })
  }

  read(): Promise<ChatsInfo[]> {
    return this.http.get('/');
  }

  getUsers(id: number): Promise<Array<User & { role: string }>> {
    return this.http.get(`/${id}/users`)
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.put('/users', {users, chatId: id})
  }

  updateAvatar(data: Record<string, string | number>) {
    return this.http.put("/avatar", data)
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{token: string}>(`/token/${id}`)

    return response.token
  }

  update = undefined
}

export default new ChatsAPI()
