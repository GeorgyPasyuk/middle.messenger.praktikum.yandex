import Block from "@utils/Block";
import template from "./messenger.hbs";
import styles from "./messanger.module.scss";
import { Message } from "../Message";
import { Button } from "../Button";
import { Input } from "../Input";
import MessagesController, {
  Message as MessageData,
} from "@controllers/MessagesController";
import store, { withStore } from "@utils/Store";
import { TriggerModal } from "../ModalTrigger";
import { Modal } from "../ModalTrigger/Modal";

import { Avatar } from "../Avatar";
import ChatsController from "@controllers/ChatsController";
import { shallowEqual } from "@utils/shallowEqual";

interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageData[];
  userId: number;
  time: string | number;
  userModal: boolean;
  usersInChat: Promise<object[]>;
  chatAvatar: string;
  chatName: string;
  isLoaded: boolean;
}

let isShown = false;

class DefaultMessenger extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props);
  }

  init() {
    if (!store.getState().chats) {
      ChatsController.fetchChats();
    }

    const chatId = Number(window.location.pathname.split("/").pop());

    if (chatId) {
      store.set("selectedChat", Number(chatId));
    }

    this.children.messages = this.createMessages(this.props);

    this.children.messages = this.createMessages(this.props);

    this.children.button = new Button({
      style: styles.footer__button,
      type: "button",
      label: "",
      events: {
        click: () => {
          const message = this.children.messengerInput.getValue();
          this.children.messengerInput.setValue("");
          this.children.messengerInput._element.focus();
          if (message) {
            MessagesController.sendMessage(this.props.selectedChat!, message);
          }
        },
      },
    });

    this.children.messengerInput = new Input({
      style: styles.footer__input,
      placeholder: "Сообщение",
      name: "message",
      type: "text",
      events: {
        keydown: (e: KeyboardEvent) => {
          if (e.code === "Enter") {
            const message = this.children.messengerInput.getValue();
            this.children.messengerInput.setValue("");
            if (message) {
              MessagesController.sendMessage(this.props.selectedChat!, message);
            }
          }
        },
      },
    });

    this.children.showModal = new TriggerModal({
      events: {
        click: () => {
          this.showModal();
        },
      },
    });

    this.children.modal = new Modal({ avatar: null });

    if (this.props.chatAvatar) {
      this.children.chatAvatar = new Avatar({
        avatar: `${this.props.chatAvatar}`,
      });
    } else {
      this.children.chatAvatar = new Avatar({});
    }
  }

  protected componentDidUpdate(
    oldProps: MessengerProps,
    newProps: MessengerProps
  ): boolean {
    if (!shallowEqual(oldProps.messages, newProps.messages)) {
      this.children.messages = this.createMessages(newProps);
      return true;
    }
    // console.log(oldProps.chatAvatar, newProps.chatAvatar)
    if (!shallowEqual(oldProps.chatAvatar, newProps.chatAvatar)) {
      this.children.chatAvatar = new Avatar({
        avatar: newProps.chatAvatar,
      });
      return true;
    }

    return false;
  }

  private createMessages(props: MessengerProps) {
    return props.messages.map((data) => {
      const userName = this.props.usersInChat;

      this.setLatestMessage(data.user_id, userName);

      return new Message({
        ...data,
        name: this.getUserNameById(data.user_id, userName) || "",
        content: DefaultMessenger.formatMessage(data.content) || "",
        myMsg: props.userId === data.user_id,
      });
    });
  }

  private getUserNameById(userId: number, users: any) {
    if (users) {
      const foundUser = users.find(
        (user: { id: number }) => user.id === userId
      );
      if (foundUser) {
        return foundUser.display_name || "";
      }
    }
    return "";
  }

  private async setLatestMessage(id: number, name: Promise<object[]>) {
    const chatIndex = store
      .getState()
      .chats.findIndex((chat: Record<string, any>) => chat.id === id);
    if (chatIndex > -1) {
      const userName = await name;
      store.set(`chats.${chatIndex}.last_message.user.display_name`, userName);
    }
  }

  private static formatMessage(content: string) {
    if (content) {
      return content
        .split("")
        .map((char, index) => ((index + 1) % 21 === 0 ? char + "\n" : char))
        .join("");
    }
  }

  private showModal() {
    if (!isShown) {
      this.children.modal.show();
      isShown = true;
    } else {
      this.children.modal.hide();
      isShown = false;
    }
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}

const withSelectedChatMessages = withStore((state) => {
  const chatId = Number(window.location.pathname.split("/").pop());
  if (!chatId || !state.activeChat) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
    };
  }
  {
    return {
      messages: (state.messages || {})[chatId] || [],
      selectedChat: state.activeChat.id,
      userId: state.user.id,
      userModal: state.modal,
      chatName: state.activeChat.title,
      chatAvatar: state.activeChat.avatar,
      usersInChat: state.activeChat.usersInChat,
      isLoaded: true,
      time: `${new Date().getHours()}:${
        (new Date().getMinutes() < 10 ? "0" : "") + new Date().getMinutes()
      }`,
    };
  }
});

export const Messenger = withSelectedChatMessages(DefaultMessenger as typeof Block);
