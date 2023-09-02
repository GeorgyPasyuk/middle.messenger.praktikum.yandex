import Block from "@utils/Block";
import template from "./chatPage.hbs";
import styles from "./chatPage.module.scss";
import { Messenger } from "@components/Messenger";
import { ChatsList } from "@components/ChatList";
import store from "@utils/Store";
import ChatsController from "@controllers/ChatsController";

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  protected async init() {
    this.children.chatsList = new ChatsList({});
    this.children.messenger = new Messenger({});
    const chatId = Number(window.location.pathname.split("/").pop());

    try {
      const currentState = store.getState();
      if (!currentState.chats || !currentState.messages[chatId]) {
        ChatsController.fetchChats().finally(() => {
          const updatedState = store.getState();
          const chatsList = this.children.chatsList as Block;
          const messenger = this.children.messenger as Block;

          chatsList.setProps({
            chats: updatedState.chats,
          });

          messenger.setProps({
            //messages: updatedState.messages[chatId],
            userId: updatedState.user.id,
          });
        });
      }
    } catch (e) {}
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      chatId: Number(window.location.pathname.split("/").pop()),
      ...this.props,
      styles,
    });
  }
}
