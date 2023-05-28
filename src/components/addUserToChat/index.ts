import Block from '../../utils/Block';
import template from './addUsers.hbs';
import styles from './addUsers.module.scss';
import { Input } from '../Input';
import { LoginCard } from '../LoginCard';
import searchController from '../../controllers/SearchController';
import store from '../../utils/Store';
import { Button } from '../Button';


interface addUserProps {
  userLogin: []
}

export class addUserModal extends Block<addUserProps> {
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
          store.set('modal', false)
        }
      }
    })
  }

  protected componentDidUpdate(): boolean{
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
