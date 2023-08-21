import Block from "@utils/Block";
import template from "./Chat.hbs";
import styles from "./chat.module.scss";
import { withStore } from "@utils/Store";
import { Avatar } from "../Avatar";
import { IChatsInfo } from "@shared/api/IChats";
import { shallowEqual } from "@utils/shallowEqual";

interface ChatProps {
  id: number;
  title: string;
  unread_count: Object;
  selectedChat: IChatsInfo;
  last_message: string;
  time?: any;
  events: {
    click: (e: Event) => void;
  };
  userName: string;
  avatar: string;
}

export class ChatBase extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  init() {
    this.createAvatar(this.props.avatar);
  }

  protected createAvatar(avatar: string) {
    if (avatar) {
      this.children.chatAvatar = new Avatar({
        src: `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`,
      });
    } else {
      this.children.chatAvatar = new Avatar({
        src: ``,
      });
    }
  }

  protected componentDidUpdate(
    oldProps: ChatProps,
    newProps: ChatProps
  ): boolean {
    if (shallowEqual(oldProps.selectedChat, newProps.selectedChat)) {
      this.createAvatar(newProps.selectedChat.avatar);
      return true;
    }
    // if (newProps.selectedChat) {
    // }
    return false;
  }

  protected render() {
    return this.compile(template, {
      ...this.props,
      selectedChat: this.props.id === this.props.selectedChat?.id,
      styles,
    });
  }
}

const withSelectedChat = withStore((state) => {
  return {
    selectedChat: (state.chats || []).find(
      ({ id }) => id === state.selectedChat
    ),
  };
});

export const Chat = withSelectedChat(ChatBase);
