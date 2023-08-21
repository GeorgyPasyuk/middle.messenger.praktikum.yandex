import Block from "../../utils/Block";
import template from "./chatPage.hbs";
import styles from "./chatPage.module.scss";
import ChatsController from "../../controllers/ChatsController";
import { ChatsList } from "../../components/ChatList";

interface ChatPageProps {
  selectedChat: number | undefined;
}

export class StartPage extends Block<ChatPageProps> {
  constructor(props: ChatPageProps) {
    super(props);
  }

  protected init() {
    this.children.chatsList = new ChatsList({ isLoaded: false });

    ChatsController.fetchChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true,
      });
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}
