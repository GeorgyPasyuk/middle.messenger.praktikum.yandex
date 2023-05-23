import template from './ChatList.hbs';
import styles from './chatList.module.scss';
import { ChatsInfo } from '../../api/ChatsApi';
import Block from '../../utils/Block';
import { Chat } from '../ChatItem';
import ChatsController from '../../controllers/ChatsController';
import store, { withStore } from '../../utils/Store';
import { Input } from '../Input';
import chatsController from '../../controllers/ChatsController';
import { chatsLink } from '../chatsLink';
import searchController from '../../controllers/SearchController';
import { LoginCard } from '../LoginCard';
import Router from '../../utils/Router';



interface ChatsListProps {
  chats: ChatsInfo[],
  isLoaded: boolean,
  userLogin: Array<string>
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super({...props});
  }

  protected init() {
    this.props.userLogin = []
    this.children.input = new Input({
      placeholder: "Поиск",
      type: "text",
      name: 'find',
      style: styles.search__input,
      events: {
        keydown: (e)=> {
          if (e.keyCode == 13) {
              this.getLogin()
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
  }

  protected componentDidUpdate(newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(newProps)
    this.showLogins()

    return true
  }


  private async getLogin() {
    let name = this.children.input.getValue()
    const data = {
      "login": `${name}`
    }

    await searchController.getLogin(data)


    this.setProps({
      ...this.props,
      userLogin: store.getState().findedUsers
    })

    this.showLogins();
  }

  private showLogins(){
    this.children.users = this.props.userLogin.map((name: any )=> {
      return new LoginCard({
        label: name.login,
        events: {
          click: async ()=> {
            await this.addChat(name.login)
            this.setProps({
              ...this.props,
              userLogin: []
            })
          }
        }
      })
    })
  }


  private createChats(props: ChatsListProps) {
    return Object
      .values(props.chats)
      .map(data => {
      return new Chat({
        ...data,
        events: {
          click: ()=> {
            ChatsController.selectChat(data.id);
            store.set('selectedChat', data.id)
            //Router.go(`/messenger/${data.id}`)
          }
        }
      })
    })
  }

  private async addChat(login: string) {
    await chatsController.create(`${login}`)
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
