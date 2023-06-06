import template from './ChatList.hbs';
import styles from './chatList.module.scss';
import { ChatsInfo } from '../../api/ChatsApi';
import Block from '../../utils/Block';
import { Chat } from '../ChatItem';
import ChatsController from '../../controllers/ChatsController';
import store, { withStore } from '../../utils/Store';
import { Input } from '../Input';
import { chatsLink } from '../chatsLink';
import Router from '../../utils/Router';
import { Button } from '../Button';

interface ChatsListProps {
  chats: ChatsInfo[],
  isLoaded: boolean,
  userLogin: Array<string>
  connectedChats: number[]
  showChatInput: boolean
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super({...props});
  }

  protected async init() {
    this.props.connectedChats = []
    this.props.userLogin = []
    this.props.showChatInput = false


    this.children.input = new Input({
      placeholder: "Поиск",
      type: "text",
      name: 'find',
      style: styles.search__input,
      events: {
        keydown: (e)=> {
          if (e.keyCode == 13) {
              const input = this.children.input as Input
              input.setValue("")
            }
        },
      }
    })

    this.children.link = new chatsLink({
      label: "Профиль",
      to: "/settings"
    })

    this.children.chats = this.createChats(this.props);


    this.children.addChat = new Button({
      events: {
        click: ()=> {
          this.showModal()
        }
      },
      label: "Добавить чат",
      style: styles.add__button
    })

    this.children.chatInput = new Input({
      events: {
        keydown: (e: KeyboardEvent)=>{
          if (e.keyCode == 13) {
            const value = this.children.chatInput.getValue()
            ChatsListBase.createChat(value)
            this.children.chatInput.setValue("")
          }
        }
      },
      name: 'chatInput',
      type: 'text',
      placeholder: "Название чата",
      style: styles.chat__input
    })
  }

  protected componentDidUpdate(newProps: ChatsListProps) {
    this.children.chats = this.createChats(newProps)
    return true
  }

  private showModal() {
    const showChat = this.props.showChatInput
    this.setProps({
      ...this.props,
      showChatInput: !showChat
    })
  }

  private createChats(props: ChatsListProps) {
    return Object.values(props.chats).map(data => {
      const chatIndex = props.chats.findIndex((chat: Record<string, any>) => chat.id === data.id);
      const lastMessage = data.last_message || {};
      const user = lastMessage.user || {};

      return new Chat({
        ...data,
        last_message: ChatsListBase.formatItemMessage(props, chatIndex),
        userName: user.display_name || '',
        avatar: data.avatar || '',
        events: {
          click: async () => {
            store.set("activeChat", data);
            Router.go(`/messenger/${data.id}`);
          }
        }
      });
    });
  }



  private static formatItemMessage(props: ChatsListProps, index: number) {
    if (props.chats[index].last_message) {
      const originalMessage: string = props.chats[index].last_message!.content
      return originalMessage.length > 30 ?
          originalMessage.substring(0, 30) + '...' : originalMessage;
    } else {
      return ""
    }
  }

  private static async createChat(login: string) {
    await ChatsController.create(`${login}`)
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.props,
      styles,
    })
  }

}


const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

export const ChatsList  = withChats(ChatsListBase);
