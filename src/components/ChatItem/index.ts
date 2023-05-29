import Block from '../../utils/Block';
import template from './Chat.hbs';
import styles from './chat.module.scss';
import { ChatsInfo } from '../../api/ChatsApi';
import { withStore } from '../../utils/Store';

interface ChatProps {
  id: number;
  title: string;
  unread_count: number;
  selectedChat: ChatsInfo
  last_message?: string;
  time?: any;
  events: {
    click: (e: Event) => void
  }
}

export class ChatBase extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
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
    selectedChat: (state.chats || []).find(({id}) => id === state.selectedChat)
}));

export const Chat = withSelectedChat(ChatBase);