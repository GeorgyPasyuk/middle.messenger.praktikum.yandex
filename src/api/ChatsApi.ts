import BaseAPI from "./BaseApi";
import { IChatsInfo } from "@shared/api/IChats";

export class ChatsAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  create(title: string) {
    return this.http.post("/", { title });
  }

  delete(id: number): Promise<unknown> {
    return this.http.delete("/", { chatId: id });
  }

  read(): Promise<IChatsInfo[]> {
    return this.http.get("/?limit=20");
  }

  async getNewMessages(id: number) {
    return await this.http.get(`/new/${id}`);
  }

  getUsers(id: number): Promise<Array<unknown>> | undefined {
    if (!id) {
      return;
    }
    return this.http.get(`/${id}/users`);
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
