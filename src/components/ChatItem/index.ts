import Block from "@utils/Block";
import template from "./Chat.hbs";
import styles from "./chat.module.scss";
import { Avatar } from "../Avatar";
import store, { withStore } from "@utils/Store";
import { IState } from "@shared/store/IState";
import { IChatsInfo } from "@shared/api/IChats";
import Router from "@utils/Router";
// import { shallowEqual } from "@utils/shallowEqual";

interface ChatProps {
  events: {
    click: (e: Event) => void;
  };
  chatItem?: IChatsInfo;
  chatId: number;
  lastMessage: string | undefined;
  isSelected: boolean
}

class ChatItem extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  init() {
    try {
      const chats = store.getState().chats;
      const chat = chats.filter(
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
        chatItem: chat[0],
      });
    } catch (e) {}

    this.createAvatar(this.props.chatItem?.avatar);

  }

  protected componentDidUpdate(
    _oldProps: ChatProps,
    newProps: ChatProps
  ): boolean | undefined {
    if (newProps.lastMessage) {
      this.setProps({
        ...this.props,
        chatItem: newProps.chatItem,
        lastMessage: newProps.lastMessage,
      });
      return true
    }
    return false;
  }

  /*protected createChatItem (chatItem: IChatsInfo) {

  }*/

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
      this.props.chatItem?.last_message.content
    );
    const time = this.formatTime(this.props.chatItem?.last_message.time);
    return this.compile(template, {
      title: this.props.chatItem?.title,
      userName: this.props.chatItem?.last_message.user.first_name || "",
      last_message: lastMessage,
      time: time,
      unread_count: this.props.chatItem?.unread_count || "",
      selectedChat: this.props.isSelected,
      styles,
    });
  }
}

const ChatItemWithStoreTest = withStore((state: IState) => ({
  chat: state.activeChat,
}));

export const ChatItemWithStore = ChatItemWithStoreTest(
  ChatItem as typeof Block
);
