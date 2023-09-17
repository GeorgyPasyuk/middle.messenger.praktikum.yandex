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

  protected init() {
    this.children.messenger = new Messenger({});
    this.children.chatsList = new ChatsList({
      chats: [],
      isLoaded: false,
      lastMessage: [],
      showChatInput: false,
    });

    const currentState = store.getState();
    if (!currentState.chats) {
      ChatsController.fetchChats().finally(() => {
        const state = store.getState();
        (this.children.messenger as Block).setProps({
          activeChat: state.activeChat,
        });
      });
    }
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      chatId: Number(window.location.pathname.split("/").pop()),
      ...this.props,
      styles,
    });
  }
}
