import Block from "@utils/Block";
import template from "./Chat.hbs";
import styles from "./chat.module.scss";
import { Avatar } from "../Avatar";

interface ChatProps {
  id: number;
  title: string;
  unread_count: Object;
  last_message: string;
  events: {
    click: (e: Event) => void;
  };
  userName: string;
  avatar: string;
  time?: any;
}

export class ChatItem extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  init() {
    this.createAvatar(this.props.avatar);
  }

  protected createAvatar(avatar: string) {
    if (avatar) {
      this.children.chatAvatar = new Avatar({
        avatar: `${this.props.avatar}`,
      });
    } else {
      this.children.chatAvatar = new Avatar({});
    }
  }

  protected render() {
    return this.compile(template, {
      ...this.props,
      selectedChat:
        Number(window.location.pathname.split("/").pop()) === this.props.id,
      styles,
    });
  }
}
