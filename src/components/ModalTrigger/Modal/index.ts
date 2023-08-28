import Block from "@utils/Block";
import template from "./modalTemplate.hbs";
import styles from "../modal.module.scss";
import { Button } from "../../Button";
import ChatsController from "@controllers/ChatsController";
import router from "@utils/Router";
import store from "@utils/Store";
import { AvatarInput } from "../../AvatarInput";
import { shallowEqual } from "@utils/shallowEqual";
import { addUserModal } from "@components/addUserToChat";

interface ModalProps {
  avatar: any | null;
}

export class Modal extends Block<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  protected init() {
    this.children.addUser = new Button({
      label: "Добавить пользователя",
      events: {
        click: async () => {
          this.children.addUserModal = new addUserModal({
            userLogin: [],
            usersInChat: [],
          });
        },
      },
      style: styles.modal__window,
    });




    this.children.deleteChat = new Button({
      label: "Удалить чат",
      events: {
        click: async () => {
          const chatId = window.location.pathname.split("/").pop();
          await ChatsController.delete(Number(chatId));
          router.go("/messenger");
        },
      },
      style: styles.modal__window__red,
    });

    this.children.avatar = new AvatarInput({
      name: "chatAvatar",
      events: {
        change: async (event: InputEvent) => {
          this.setProps({ avatar: event });
        },
      },
      style: styles.modal__avatar,
    });

    this.children.uploadAvatar = new Button({
      label: "Загрузить аватар чата",
      style: styles.modal__window,
    });
  }

  protected componentDidUpdate(
    oldProps: ModalProps,
    newProps: ModalProps
  ): boolean {
    if (!shallowEqual(oldProps.avatar, newProps.avatar)) {
      Modal.updateAvatar(newProps.avatar);
      return true;
    }
    return false;
  }

  private static async updateAvatar(event: any) {
    // const chat = store.getState().activeChat.title;

    const file = event.target!.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("chatId", store.getState().activeChat.id);
    await ChatsController.updateAvatar(formData);
    await ChatsController.fetchChats();
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
