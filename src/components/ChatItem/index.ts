import Block from '../../utils/Block';
import template from './Chat.hbs';
import styles from './chat.module.scss';
import { ChatsInfo } from '../../api/ChatsApi';
import { withStore } from '../../utils/Store';
import { Avatar } from '../Avatar';

interface ChatProps {
  id: number;
  title: string;
  unread_count: number;
  selectedChat: ChatsInfo
  last_message?: string;
  time?: any;
  events: {
    click: (e: Event) => void
  },
  avatar: string
}

export class ChatBase extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  init() {
    if (this.props.avatar) {
      this.children.chatAvatar = new Avatar({
        src: `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`
      })
    } else {
      this.children.chatAvatar = new Avatar({
        src: ``
      })
    }
  }


  protected render() {
    return this.compile(template, {
      ...this.props,
      selectedChat: this.props.id === this.props.selectedChat?.id,
      styles,
    });
  }
}

export const withSelectedChat = withStore(state => ({
    selectedChat: (state.chats || []).find(({id}) => id === state.selectedChat),
}));

export const Chat = withSelectedChat(ChatBase);
