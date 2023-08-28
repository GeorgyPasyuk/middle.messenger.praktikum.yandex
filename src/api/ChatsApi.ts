import BaseAPI from "./BaseApi";
import { IChatsInfo } from "@shared/api/IChats";

export class ChatsAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  create(title: string): Promise<IChatsInfo> {
    return this.http.post("/", { title });
  }

  delete(id: number): Promise<unknown> {
    return this.http.delete("/", { chatId: id });
  }

  read(limit: number): Promise<IChatsInfo[]> {
    return this.http.get(`/?limit=${limit}`);
  }

  readByTitle(title: string): Promise<IChatsInfo> {
    return this.http.get(`/?title=${title}`);
  }

  async getNewMessages(id: number) {
    return await this.http.get(`/new/${id}`);
  }

  async getUsers(id: number): Promise<unknown> {
    if (!id) {
      return;
    }
    return await this.http.get(`/${id}/users`);
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.put("/users", { users, chatId: id });
  }

  deleteUser(data: { users: [number]; chatId: number }): Promise<unknown> {
    return this.http.delete("/users", data);
  }

  updateAvatar(data: FormData) {
    return this.http.put("/avatar", data);
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);
    return response.token;
  }

  update = undefined;
}

export default new ChatsAPI();
