import Block from "@utils/Block";
import template from "./loginCard.hbs";
import styles from "./loginCard.module.scss";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import ChatsController from "@controllers/ChatsController";
import store from "@utils/Store";

interface LoginCardProps {
  label: string;
  src: string;
  userId: number;
  toDelete?: {
    users: [number];
    chatId: number;
  };
  avatar: string
}

export class LoginCard extends Block<LoginCardProps> {
  constructor(props: LoginCardProps) {
    super(props);
  }

  init() {
    this.children.button = new Button({
      label: this.props.label,
      style: styles.button,
      events: {
        click: async () => {
          await LoginCard.addUserToChat(this.props.userId);
        },
      },
    });

    this.children.deleteButton = new Button({
      label: "Удалить",
      events: {
        click: async () => {
          await ChatsController.deleteUser(this.props.toDelete!);
          store.set("modal", false);
        },
      },
      style: styles.deleteButton,
    });

    this.children.avatar = new Avatar({
      avatar: this.props.avatar,
    });
  }

  private static async addUserToChat(userId: number) {
    const chatId = window.location.pathname.split("/").pop();
    await ChatsController.addUserToChat(Number(chatId), userId);
    store.set("modal", false);
  }



  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
