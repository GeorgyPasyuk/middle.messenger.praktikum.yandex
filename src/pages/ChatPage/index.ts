import Block from "@utils/Block";
import template from "./chatPage.hbs";
import styles from "./chatPage.module.scss";
import { Messenger } from "@components/Messenger";
import { ChatsList } from "@components/ChatList";

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  protected async init() {
    this.children.chatsList = new ChatsList({});

    this.children.messenger = new Messenger({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}
