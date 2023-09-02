import template from "./ChatList.hbs";
import styles from "./chatList.module.scss";
import Block from "@utils/Block";
import { ChatItemWithStore as ChatItem } from "@components/ChatItem";
import ChatsController from "@controllers/ChatsController";
import store, { withStore } from "@utils/Store";
import { Input } from "../Input";
import { chatsLink } from "../chatsLink";
/*
import Router from "@utils/Router";
*/
import { Button } from "../Button";
import { IChatsInfo } from "@shared/api/IChats";
import { shallowEqual } from "@utils/shallowEqual";
import { IState } from "@shared/store/IState";

interface ChatsListProps {
  chats: IChatsInfo[];
  showChatInput: boolean;
  lastMessage: string[];
  isLoaded: boolean;
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    props.isLoaded = true;
    super({ ...props });
  }

  protected init() {
    if (store.getState().chats) {
      this.setProps({
        ...this.props,
        chats: store.getState().chats,
      });
    }

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
            this.createChat(value);
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
      this.children.chats = this.initChats();
      return true;
    }
    if (newProps.isLoaded) {
      this.children.chats = this.initChats();
    }
    return !shallowEqual(oldProps.showChatInput, newProps.showChatInput);
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
        return new ChatItem({
          chatId: item.id,
        });
      });
    } catch (e) {}
  }

  private async createChat(login: string) {
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
