import Block from "@utils/Block";
import template from "./addUsers.hbs";
import styles from "./addUsers.module.scss";
import { Input } from "../Input";
import { LoginCard } from "../LoginCard";
import searchController from "@controllers/SearchController";
import store, { withStore } from "@utils/Store";
import { Button } from "../Button";
import { shallowEqual } from "@utils/shallowEqual";
import { IUser } from "@shared/api/IUser";
import { IState } from "@shared/store/IState";

interface addUserProps {
  foundUsers?: [];
  usersInChat?: any;
  isShown?: boolean;
}

class defaultAddUserModal extends Block<addUserProps> {
  constructor(props: addUserProps) {
    super(props);
  }

  protected init() {
    const chats = store.getState().chats;
    const chatId = Number(window.location.pathname.split("/").pop());
    if (chats) {
      let usersInChat;
      for (const key in chats) {
        if (chats[key].id === chatId) {
          usersInChat = chats[key].usersInChat;
        }
      }
      this.renderUsers(usersInChat);
    }

    this.children.input = new Input({
      events: {
        keydown: async (e: KeyboardEvent) => {
          if (e.code === "Enter") {
            await this.getLogin();
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
  }

  private renderUsers(props: any) {
    const chatId = Number(window.location.pathname.split("/").pop());

    if (props) {
      this.children.usersInChat = props.map((user: IUser) => {
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
          toDelete: { users: [user.id], chatId: chatId },
        });
      });
    }
  }

  private async getLogin() {
    let name = this.children.input.getValue();
    const data = {
      login: `${name}`,
    };
    const foundUsers = await searchController.getLogin(data);

    this.setProps({
      ...this.props,
      foundUsers: foundUsers,
      isShown: true,
    });
  }

  private showLogins() {
    if (!Array.isArray(this.props.foundUsers)) {
      return;
    }
    this.children.users = this.props.foundUsers.map((name: any) => {
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
    if (!shallowEqual(oldProps.foundUsers, newProps.foundUsers)) {
      this.showLogins();
      return true;
    }

    if (!shallowEqual(oldProps.usersInChat, newProps.usersInChat)) {
      this.renderUsers(newProps.usersInChat);
      return true;
    }

    return false;
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}

const withStoreAddUser = withStore((state: IState) => {
  return {
    usersInChat: state.activeChat ? state.activeChat.usersInChat : [],
  };
});

export const addUserModal = withStoreAddUser(
  defaultAddUserModal as typeof Block
);
