import API, { ChatsAPI } from "../api/ChatsApi";
import store from "../utils/Store";
import MessagesController from "./MessagesController";

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    const chat = await this.api.create(title);

    const token = await this.getToken(chat.id);

    await MessagesController.connect(chat.id, token);

    const chatId = window.location.pathname.split("/").pop();

    await this.getUsers(Number(chatId));


    await this.fetchChats();
  }

  async fetchChats() {
    const chats = await this.api.read(20);

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);

      await this.unreadCount(chat.id);

      await MessagesController.connect(chat.id, token);
    });

    const chatId = window.location.pathname.split("/").pop();

    await this.getUsers(Number(chatId));

    const activeChat = Object.values(chats).find(
      (item) => item.id === Number(chatId)
    );

    store.set("activeChat", activeChat);
    store.set("chats", chats);
  }

  async fetchChatByTitle(title: string) {
    const chat = await this.api.readByTitle(title);
    const token = await this.getToken(chat.id);
    await this.unreadCount(chat.id);
    await MessagesController.connect(chat.id, token);

    store.set(`chats.${chat.id}`, chat);

    return chat;
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

  addUserToChat(id: number, userId: number) {
    return this.api.addUsers(id, [userId]);
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
    if (!id) {
      return;
    }
    const usersInChat = await this.api.getUsers(id);
    store.set("activeChat.usersInChat", usersInChat);

    return usersInChat;
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

  selectChat(id: number) {
    store.set("selectedChat", id);
  }
}

const controller = new ChatsController();

// @ts-ignore
window.chatsController = controller;

export default controller;
