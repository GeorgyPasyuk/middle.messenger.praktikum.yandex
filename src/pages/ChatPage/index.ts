import Block from '../../utils/Block';
import template from "./chatPage.hbs"
import styles from './chatPage.module.scss';
import { Messenger } from '../../components/Messenger';
import { ChatsList } from '../../components/ChatList';





interface ChatPageProps {
  selectedChat: number | undefined
}


export class ChatPage extends Block<ChatPageProps> {
  constructor(props: ChatPageProps) {
    super(props);
  }


  protected init() {
    this.children.chatsList = new ChatsList({ isLoaded: false });


    (this.children.chatsList as Block).setProps({
      isLoaded: true
    });


    this.children.messenger = new Messenger({});
  }


  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      styles
    });
  }
}


