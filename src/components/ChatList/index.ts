import template from './ChatList.hbs';
import styles from './chatList.module.scss';
import { ChatsInfo } from '../../api/ChatsApi';
import Block from '../../utils/Block';
import { Chat } from '../Chat';
import ChatsController from '../../controllers/ChatsController';
import { withStore } from '../../utils/Store';
import { Input } from '../Input';
import chatsController from '../../controllers/ChatsController';
import { chatsLink } from '../chatsLink';
import searchController from '../../controllers/SearchController';
import { LoginCard } from '../LoginCard';



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
    this.children.input = new Input({
      placeholder: "Поиск",
      type: "text",
      name: 'find',
      style: styles.search__input,
      events: {
        keydown: (e)=> {
          if (e.keyCode == 13) {
              this.getLogin()
            }
        }
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
    if (newProps.userLogin) {
    this.showLogins(newProps)
    }
    return true
  }


  private async getLogin() {
    let name = this.children.input.getValue()
    const data = {
      "login": `${name}`
    }

    const responseData = await searchController.getLogin(data)
        if (Array.isArray(responseData)) {
          this.componentDidUpdate({
            ...this.props,
            userLogin: responseData
          })
          this.setProps({
            ...this.props,
            userLogin: responseData
          })
          this.showLogins(this.props);
        }
  }

  private showLogins(props: ChatsListProps){
    this.children.users = props.userLogin!.map((name: any )=> {
      return new LoginCard({
        label: name.login,
        events: {
          click: ()=> {
            this.addChat(name.login)
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
          }
        }
      })
    })
  }

  private async addChat(login: string) {
    chatsController.create(`${login}`)
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
