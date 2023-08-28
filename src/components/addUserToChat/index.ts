import Block from "@utils/Block";
import template from "./addUsers.hbs";
import styles from "./addUsers.module.scss";
import { Input } from "../Input";
import { LoginCard } from "../LoginCard";
import searchController from "@controllers/SearchController";
import store from "@utils/Store";
import { Button } from "../Button";
import ChatsController from "@controllers/ChatsController";
import {shallowEqual} from "@utils/shallowEqual";

interface addUserProps {
  userLogin?: [];
  usersInChat?: any;
}

export class addUserModal extends Block<addUserProps> {
  constructor(props: addUserProps) {
    super(props);
    this.getUsers();
  }

  protected init() {
    this.children.input = new Input({
      events: {
        keydown: (e: KeyboardEvent) => {
          if (e.code === "Enter") {
            this.getLogin();
            const input = this.children.input as Input;
            input.setValue("");
          }
        },
      },
      name: "userNameInput",
      type: "text",
      style: styles.input,
    });

    this.children.button = new Button({
      label: "Закрыть окно",
      events: {
        click: () => {
          this.hide();
        },
      },
    });

    this.renderUsers(this.props.usersInChat);
    this.showLogins();
  }

  private renderUsers(props: any) {
    this.children.usersInChat = props.map((user: any) => {
      if (user.id === store.getState().user.id) {
        return new LoginCard({
          label: user.login,
          src: user.avatar,
          userId: user.id,
          avatar: user.avatar,
        });
      }
      return new LoginCard({
        label: user.login,
        src: user.avatar,
        userId: user.id,
        avatar: user.avatar,
        toDelete: { users: [user.id], chatId: store.getState().selectedChat },
      });
    });
  }

  private async getUsers() {
    let chatId = Number(window.location.pathname.split("/").pop());
    let users = await ChatsController.getUsers(chatId);
    this.setProps({ ...this.props, usersInChat: users });
  }

  private async getLogin() {
    let name = this.children.input.getValue();
    const data = {
      login: `${name}`,
    };

    await searchController.getLogin(data);

    this.setProps({
      ...this.props,
      userLogin: store.getState(),
    });
    this.showLogins();
  }

  private showLogins() {
    if (!Array.isArray(this.props.userLogin)) {
      return;
    }
    this.children.users = this.props.userLogin.map((name: any) => {
      return new LoginCard({
        label: name.login,
        src: name.avatar,
        userId: name.id,
        avatar: name.avatar,
      });
    });
  }

  protected componentDidUpdate(
    oldProps: addUserProps,
    newProps: addUserProps
  ): boolean {
    if (!shallowEqual(oldProps.usersInChat, newProps.usersInChat)) {
      this.renderUsers(newProps.usersInChat)
      return true
    }
    return false
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
