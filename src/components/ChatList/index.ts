import template from "./ChatList.hbs";
import styles from "./chatList.module.scss";
import Block from "@utils/Block";
import { ChatItem } from "@components/ChatItem";
import ChatsController from "@controllers/ChatsController";
import store, { withStore } from "@utils/Store";
import { Input } from "../Input";
import { chatsLink } from "../chatsLink";
import Router from "@utils/Router";
import { Button } from "../Button";
import { IChatsInfo } from "@shared/api/IChats";
import { shallowEqual } from "@utils/shallowEqual";
import { IState } from "@shared/store/IState";

interface ChatsListProps {
  chats: IChatsInfo[];
  newChatName: string;
  showChatInput: boolean;
  isLoaded: boolean;
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    props.isLoaded = true;
    super({ ...props });
  }

  protected init() {
    this.props.showChatInput = false;

    this.children.input = new Input({
      placeholder: "Поиск",
      type: "text",
      name: "find",
      style: styles.search__input,
      events: {
        keydown: (e) => {
          if (e.key === "Enter") {
            const input = this.children.input as Input;
            input.setValue("");
          }
        },
      },
    });

    this.children.link = new chatsLink({
      label: "Профиль",
      to: "/settings",
    });

    this.children.chats = this.initChats();

    this.children.addChat = new Button({
      events: {
        click: () => {
          this.showModal();
        },
      },
      label: "Добавить чат",
      style: styles.add__button,
    });

    this.children.chatInput = new Input({
      events: {
        keydown: (e: KeyboardEvent) => {
          const value = this.children.chatInput.getValue();
          if (e.key === "Enter" && value) {
            this.setProps({ ...this.props, newChatName: value });
            this.children.chatInput.setValue("");
          }
        },
      },
      name: "chatInput",
      type: "text",
      placeholder: "Название чата",
      style: styles.chat__input,
    });
  }

  protected componentDidUpdate(
    oldProps: ChatsListProps,
    newProps: ChatsListProps
  ) {


    if (!shallowEqual(oldProps.chats.length, newProps.chats.length)) {
      this.children.chats = this.renderNewChats(newProps);
      return true;
    }

    if (!shallowEqual(oldProps.showChatInput, newProps.showChatInput)) {
      return true;
    }

    if (!shallowEqual(oldProps.newChatName, newProps.newChatName)) {
      ChatsListBase.createChat(newProps.newChatName);
      return true;
    }

    return false;
  }

  private showModal() {
    const showChat = this.props.showChatInput;
    this.setProps({
      ...this.props,
      showChatInput: !showChat,
    });
  }

  private initChats() {
    try {
      const chats: IChatsInfo = store.getState().chats;

      return Object.values(chats).map((item) => {
        return this.createChatItem(item);
      });
    } catch (e) {
      return new ChatItem({
        id: 0,
        title: "",
        unread_count: 0,
        last_message: "",
        userName: "Идет загрузка...",
        avatar: "",
        events: {
          click: () => {},
        },
      });
    }
  }

  private renderNewChats(props: ChatsListProps) {
    return Object.values(props.chats).map((item) => {
      return this.createChatItem(item);
    });
  }

  private createChatItem(chat: IChatsInfo) {
    const lastMessage = chat.last_message;
    const chatId = Number(window.location.pathname.split("/").pop());

    try {
      const user = lastMessage.user;

      return new ChatItem({
        ...chat,
        last_message: ChatsListBase.formatMessage(chat),
        userName: user.display_name || "",
        avatar: chat.avatar,
        events: {
          click: () => {
            if (chatId !== chat.id) {
              store.set("activeChat", chat);
              Router.go(`/messenger/${chat.id}`);
            }
          },
        },
      });
    } catch (e) {
      return new ChatItem({
        ...chat,
        last_message: "",
        userName: "",
        avatar: chat.avatar,
        events: {
          click: () => {
            if (chatId !== chat.id) {
              store.set("activeChat", chat);
              Router.go(`/messenger/${chat.id}`);
            }
          },
        },
      });
    }
  }

  private static formatMessage(chat: IChatsInfo) {
    if (chat.last_message) {
      const originalMessage: string = chat.last_message.content;
      return originalMessage.length > 30
        ? originalMessage.substring(0, 30) + "..."
        : originalMessage;
    } else {
      return "";
    }
  }

  private static async createChat(login: string) {
    await ChatsController.create(`${login}`);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}

const withChats = withStore((state: IState) => ({
  chats: [...(state.chats || [])],
}));

export const ChatsList = withChats(ChatsListBase as typeof Block);
