import template from './ChatList.hbs';
import styles from './chatList.module.scss';
import { ChatsInfo } from '../../api/ChatsApi';
import Block from '../../utils/Block';
import { Link } from '../Link';
import { Chat } from '../Chat';
import ChatsController from '../../controllers/ChatsController';
import { withStore } from '../../utils/Store';


interface ChatsListProps {
  chats: ChatsInfo[],
  isLoaded: boolean
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super({...props});
  }

  protected init() {
    this.children.link = new Link({
      label: "Профиль",
      styles: styles.search__profile,
      to: "/settings"
    }),

    this.children.chats = this.createChats(this.props);
  }

  protected componentDidUpdate(newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(newProps)
    return true
  }

  private createChats(props: ChatsListProps) {
    return props.chats.map(data=> {
      return new Chat({
        ...data,
        events: {
          click: ()=> {
            ChatsController.selectChat(data.id);
          }
        }
      })
    })
  }
  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      styles
    })
  }

}


const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

export const ChatsList  = withChats(ChatsListBase);
