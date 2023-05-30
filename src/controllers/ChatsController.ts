import API, { ChatsAPI } from '../api/ChatsApi';
import store from '../utils/Store';
import MessagesController from './MessagesController';




class ChatsController {
  private readonly api: ChatsAPI

  constructor() {
    this.api = API
  }

  async create(title: string) {
    await this.api.create(title)
    return this.fetchChats()

  }

  async fetchChats() {
    const chats = await this.api.read();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });

    const chatId = window.location.pathname.split('/').pop();

    const activeChat = Object.values(chats)
      .find(item => item.id === Number(chatId));


    store.set("activeChat", activeChat)
    store.set('chats', chats);
  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId])
  }

  async updateAvatar(data: FormData) {
    try {
      await this.api.updateAvatar(data)
    } catch (e) {
      console.error(e)
    }
  }

  async deleteUser(data: { users: [number]; chatId: number; }) {
    await this.api.deleteUser(data)
  }

  async getUsers(id: number) {
    return await this.api.getUsers(id)
  }

  async delete(id: number) {
    await this.api.delete(id)
    this.fetchChats()
    const chats = await this.api.read()
    store.set('chats', chats)
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }
}



const controller = new ChatsController()

// @ts-ignore
window.chatsController = controller


export default controller
