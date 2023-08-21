import Block from "@utils/Block";
import template from "./chatPage.hbs";
import styles from "./chatPage.module.scss";
import { Messenger } from "@components/Messenger";
import { ChatsList } from "@components/ChatList";
import ChatsController from "@controllers/ChatsController";

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  protected async init() {
    this.children.chatsList = new ChatsList({ isLoaded: false });

    ChatsController.fetchChats().then(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true,
      });
    });

    this.children.messenger = new Messenger({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}
