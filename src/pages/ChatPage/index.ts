import Block from '../../utils/Block';
import template from "./chatPage.hbs"
import styles from './chatPage.module.scss';
import { Messenger } from '../../components/Messenger';
import ChatsController from '../../controllers/ChatsController';
import { ChatsList } from '../../components/ChatList';
import store from "../../utils/Store";




interface ChatPageProps {
  selectedChat: number | undefined
}



export class MessengerPage extends Block<ChatPageProps> {
  constructor(props: ChatPageProps) {
    super(props);
  }

  protected init() {

    this.children.chatsList = new ChatsList({ isLoaded: false });

    ChatsController.fetchChats();

    (this.children.chatsList as Block).setProps({
      isLoaded: true
    });

    /*if (chatId) {
        const chatId = window.location.pathname.split('/').pop();

      ChatsController.selectChat(Number(chatId));
    }*/
    this.children.messenger = new Messenger({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      styles
    });
  }
}


