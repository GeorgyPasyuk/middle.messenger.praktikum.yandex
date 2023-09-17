import Block from "@utils/Block";
import template from "./messenger.hbs";
import styles from "./messanger.module.scss";
import { Button } from "../Button";
import { Input } from "../Input";
import MessagesController from "@controllers/MessagesController";
import { Message as MessageData } from "@shared/controllers/IMessage";
import store, { withStore } from "@utils/Store";
import { TriggerModal } from "../ModalTrigger";
import { Modal } from "../ModalTrigger/Modal";

import { Avatar } from "../Avatar";
import { shallowEqual } from "@utils/shallowEqual";
import { IState } from "@shared/store/IState";
import { IUser } from "@shared/api/IUser";
import { IChatsInfo } from "@shared/api/IChats";
import { Message } from "@components/Message";

interface MessengerProps {
  messages: MessageData[];
  user: IUser;
  activeChat: IChatsInfo;
  chatName: string;
  chatAvatar: string;
}

let isShown = false;

class DefaultMessenger extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props);
  }

  init() {
    try {
      if (store.getState().activeChat) {
        const state = store.getState();
        this.setProps({
          activeChat: state.activeChat,
          chatName: state.activeChat.title,
          chatAvatar: state.activeChat.avatar,
          messages: state.messages[state.activeChat.id],
          user: state.user,
        });

        this.createMessages(this.props.messages);
      }
    } catch (e) {}

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
            MessagesController.sendMessage(this.props.activeChat.id, message);
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
              MessagesController.sendMessage(this.props.activeChat.id, message);
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
    let shouldUpdate = false;

    if (!shallowEqual(oldProps.chatAvatar, newProps.chatAvatar)) {
      this.children.chatAvatar = new Avatar({
        avatar: newProps.chatAvatar,
      });
      shouldUpdate = true;
    }

    if (newProps.messages) {
      this.createMessages(newProps.messages);
      shouldUpdate = true;
    }

    return shouldUpdate;
  }


  private createMessages(messagesToAdd: any) {
    const user = store.getState().user;
    if (Array.isArray(messagesToAdd)) {
      this.children.messages = messagesToAdd.map((data: MessageData) => {
        return new Message({
          ...data,
          name: user.display_name || "Anon",
          content: this.formatMessage(data.content) || "",
          myMsg: user.id === data.user_id,
        });
      });
    }
  }

  private formatMessage(content: string) {
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

  private formatTime() {
    return `${new Date().getHours()}:${
      (new Date().getMinutes() < 10 ? "0" : "") + new Date().getMinutes()
    }`;
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      time: this.formatTime(),
      isLoaded: true,
      styles,
    });
  }
}

const withStoreMessenger = withStore((state: IState) => {
  const chatId = window.location.pathname.split("/").pop();
  if (state.activeChat) {
    for (const key in state.messages) {
      if (state.messages.hasOwnProperty(key) && key === chatId) {
        return {
          messages: state.messages[key],
          activeChat: state.activeChat,
          chatName: state.activeChat.title,
          chatAvatar: state.activeChat.avatar,
          user: state.user,
        };
      }
    }
  }
});

export const Messenger = withStoreMessenger(DefaultMessenger as typeof Block);
