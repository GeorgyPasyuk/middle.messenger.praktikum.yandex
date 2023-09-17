import Block from "@utils/Block";
import template from "./Chat.hbs";
import styles from "./chat.module.scss";
import { Avatar } from "../Avatar";
import store from "@utils/Store";
import { IChatsInfo } from "@shared/api/IChats";
import Router from "@utils/Router";
import { shallowEqual } from "@utils/shallowEqual";

interface ChatProps {
  events: {
    click: (e: Event) => void;
  };
  chatItem?: IChatsInfo;
  chatId: number;
  avatar: string | undefined;
  isSelected: boolean;
  last_message: any;
}

export class ChatItem extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  init() {
    try {
      const chats = store.getState().chats;
      const chat = chats.find(
        (item: IChatsInfo) => item.id === this.props.chatId
      );

      this.setProps({
        ...this.props,
        events: {
          click: () => {
            const urlId = Number(window.location.pathname.split("/").pop());
            if (this.props.chatId !== urlId) {
              store.set("activeChat", this.props.chatItem);
              Router.go(`/messenger/${this.props.chatId}`);
            }
          },
        },
        chatItem: chat,
      });
    } catch (e) {}

    this.createAvatar(this.props.chatItem!.avatar);
  }

  protected componentDidUpdate(
    oldProps: ChatProps,
    newProps: ChatProps
  ): boolean {
    if (!shallowEqual(oldProps.avatar, newProps.avatar)) {
      this.createAvatar(newProps.avatar);
      return true
    }

    return false;
  }

  protected createAvatar(avatar: string | undefined) {
    if (avatar) {
      this.children.chatAvatar = new Avatar({
        avatar: `${avatar}`,
      });
    } else {
      this.children.chatAvatar = new Avatar({});
    }
  }

  private formatMessage(message: string | undefined) {
    if (message) {
      return message.length > 10 ? message.substring(0, 10) + "..." : message;
    } else {
      return "";
    }
  }

  private formatTime(timeStamp: string | undefined) {
    if (timeStamp) {
      const date = new Date(timeStamp);
      return `${date.getHours()} : ${date.getMinutes()}`;
    } else {
      return "";
    }
  }

  protected render() {
    const lastMessage = this.formatMessage(
      this.props.chatItem?.last_message
        ? this.props.chatItem?.last_message.content
        : ""
    );
    const time = this.formatTime(
      this.props.chatItem?.last_message
        ? this.props.chatItem.last_message.time
        : ""
    );

    return this.compile(template, {
      ...this.props,
      title: this.props.chatItem?.title,
      userName: this.props.chatItem?.last_message
        ? this.props.chatItem?.last_message.user.first_name
        : "",
      last_message: lastMessage,
      time: time,
      unread_count: this.props.chatItem?.unread_count || "",
      isSelected:
        this.props.chatId === Number(window.location.pathname.split("/").pop()),
      styles,
    });
  }
}
