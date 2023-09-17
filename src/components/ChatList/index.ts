import template from "./ChatList.hbs";
import styles from "./chatList.module.scss";
import Block from "@utils/Block";
import { ChatItem as ChatItem } from "@components/ChatItem";
import store, { withStore } from "@utils/Store";
import ChatsController from "@controllers/ChatsController";
import { Input } from "../Input";
import { chatsLink } from "../chatsLink";
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
    const chats = store.getState().chats;

    try {
      if (chats) {
        this.setProps({ ...this.props, chats: store.getState().chats });
      }
    } catch (e) {}

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
            this.createChat(value).then(() => {
              this.setProps({
                ...this.props,
                chats: store.getState().chats,
              });
            });

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
    console.log(newProps.lastMessage)
    if (
      !shallowEqual(oldProps.chats, newProps.chats) ||
      (newProps.lastMessage && newProps.chats.length > 0)
    ) {
      this.children.chats = this.initChats();
      return true;
    }

    if (!shallowEqual(oldProps.showChatInput, newProps.showChatInput)) {
      return true;
    }

    if (newProps.isLoaded) {
      this.children.chats = this.initChats();
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
      const chats: IChatsInfo[] = store.getState().chats || [];
      return chats.map((item) => {
        return new ChatItem({
          avatar: item.avatar,
          chatId: item.id,
          events: {
            click: () => {},
          },
          isSelected: false,
          last_message: item.last_message,
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

const withChats = withStore((state: IState) => {
  const chats = state.chats || [];

  if (state.activeChat) {
    return {
      lastMessage: state.activeChat.last_message ? state.activeChat.last_message.content : ''
    }
  }
  return {
    chats: [...chats],
  };
});

export const ChatsList = withChats(ChatsListBase as typeof Block);
