import Block from "@utils/Block";
import template from "./loginCard.hbs";
import styles from "./loginCard.module.scss";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import ChatsController from "@controllers/ChatsController";
import store from "@utils/Store";
import router from "@utils/Router";

interface LoginCardProps {
  label: string;
  src: string;
  userId: number;
  toDelete?: {
    users: [number];
    chatId: number;
  };
  avatar: string
  addUser?: ()=> void
  deleteUser?: ()=> void
}

export class LoginCard extends Block<LoginCardProps> {
  constructor(props: LoginCardProps) {
    super(props);
  }

  init() {
    const chatId = window.location.pathname.split('/').pop()

    this.children.button = new Button({
      label: this.props.label,
      style: styles.button,
      events: {
        click: async () => {
          if (this.props.userId !== store.getState().user.id) {
            await this.addUserToChat(this.props.userId);
            router.go(`/messenger/${chatId}`)
          }
        },
      },
    });

    this.children.deleteButton = new Button({
      label: "Удалить",
      events: {
        click: async () => {
          await ChatsController.deleteUser(this.props.toDelete!);
          router.go(`/messenger/${chatId}`)
        },
      },
      style: styles.deleteButton,
    });

    this.children.avatar = new Avatar({
      avatar: this.props.avatar,
    });
  }


  private async addUserToChat(userId: number) {
    const chatId = window.location.pathname.split("/").pop();
    await ChatsController.addUserToChat(Number(chatId), userId);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
