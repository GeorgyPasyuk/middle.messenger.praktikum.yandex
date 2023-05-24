import Block from '../../utils/Block';
import template from "./chatPage.hbs"
import styles from './chatPage.module.scss';
import { Messenger } from '../../components/Messenger';
import ChatsController from '../../controllers/ChatsController';
import { ChatsList } from '../../components/ChatList';




interface ChatPageProps {
  selectedChat: number | undefined
}

export class MessengerPage extends Block<ChatPageProps> {
  constructor(props: ChatPageProps) {
    super(props);
  }

  protected  init() {
    const chatId = window.location.pathname.split('/').pop();

    this.children.chatsList = new ChatsList({ isLoaded: false });

    ChatsController.fetchChats(); // Дождитесь загрузки чатов

    (this.children.chatsList as Block).setProps({
      isLoaded: true
    });

    console.log(chatId);
    if (chatId) {
       ChatsController.selectChat(Number(chatId)); // Дождитесь выбора чата
    }

    this.children.messenger = new Messenger({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      styles
    });
  }
}


