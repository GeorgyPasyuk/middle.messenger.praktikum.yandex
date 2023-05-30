import Block from '../../utils/Block';
import template from './addUsers.hbs';
import styles from './addUsers.module.scss';
import { Input } from '../Input';
import { LoginCard } from '../LoginCard';
import searchController from '../../controllers/SearchController';
import store, { withStore } from '../../utils/Store';
import { Button } from '../Button';



interface addUserProps {
  userLogin: [],
  usersInChat?: []
}

class addUserModalDefautl extends Block<addUserProps> {
  constructor(props: addUserProps) {
    super(props);
  }

  protected init() {
    this.children.input = new Input({
      events: {
        keydown: (e: KeyboardEvent)=> {
          if (e.keyCode === 13) {
            this.getLogin()
            const input = this.children.input as Input
            input.setValue("")
          }
        }
      },
      name: 'userNameInput',
      type: 'text',
      style: styles.input
    })

    this.children.button = new Button({
      label: "Закрыть окно",
      events: {
        click: ()=> {
          store.set("modal", false)
        }
      }
    })
  }



  private async renderUsers(props: []) {
    //console.log(props);
     this.children.usersInChat = props.map((name: any )=> {
      if (name.id === store.getState().user.id) {
        return new LoginCard({
          label: name.login,
          src: name.avatar,
          userId: name.id,
        })
      }
      return new LoginCard({
        label: name.login,
        src: name.avatar,
        userId: name.id,
        toDelete: {users: [name.id], chatId: store.getState().selectedChat}
      })
    })
  }

  protected componentDidUpdate(_oldProps:addUserProps, newProps:addUserProps): boolean{
    if (newProps.usersInChat) {
      this.renderUsers(newProps.usersInChat)
    }

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
        src: name.avatar,
        userId: name.id
      })
    })
  }


  protected render(): DocumentFragment {

    return this.compile(template, { ...this.props, styles });
  }
}


const addUserWithStore = withStore(state => {
  return {
    usersInChat: state.usersInChat
  }
})

export const addUserModal = addUserWithStore(addUserModalDefautl)
