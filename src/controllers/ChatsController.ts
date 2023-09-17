import API, { ChatsAPI } from "../api/ChatsApi";
import store from "../utils/Store";
import MessagesController from "./MessagesController";

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title)
    await this.fetchChats()
  }

  async fetchChats() {
    const chats = await this.api.read(20);

    for (const chat of chats) {
      const token = await this.getToken(chat.id);
      await this.unreadCount(chat.id);
      await MessagesController.connect(chat.id, token);

      store.set("chats", chats);
      await this.getUsers(chat.id)
    }

    const chatId = Number(window.location.pathname.split("/").pop());

    const activeChat = chats.find((item) => item.id === chatId);

    store.set("activeChat", activeChat);
  }



  async unreadCount(id: number) {
    const unread = await this.api.getNewMessages(id);

    try {
      const chatIndex = store
        .getState()
        .chats.findIndex((chat: Record<string, any>) => chat.id === id);

      store.set(`chats.${chatIndex}.unread_count`, unread);
    } catch (e) {}
  }

  async addUserToChat(id: number, userId: number) {
    const users = await this.api.addUsers(id, [userId]);
    await this.getUsers(id)
    return users
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.updateAvatar(data);
    } catch (e) {
      console.error(e);
    }
  }

  async deleteUser(data: { users: [number]; chatId: number }) {
    await this.api.deleteUser(data);
  }

  async getUsers(id: number): Promise<unknown> {
    const usersInChat = await this.api.getUsers(id);
    try {
      const chatIndex = store
          .getState()
          .chats.findIndex((chat: Record<string, any>) => chat.id === id);
      store.set(`chats.${chatIndex}.usersInChat`, usersInChat);
    } catch (e) {}
    return usersInChat
  }

  async delete(id: number) {
    await this.api.delete(id);
    const chats = await this.api.read(20);
    store.set("chats", chats);
    await this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }
}

const controller = new ChatsController();

// @ts-ignore
window.chatsController = controller;

export default controller;
