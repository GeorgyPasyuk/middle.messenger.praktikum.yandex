import Block from '../../utils/Block';
import template from './loginCard.hbs';
import styles from './loginCard.module.scss';
import { Button } from '../Button';
import { Avatar } from '../Avatar';
import ChatsController from '../../controllers/ChatsController';
import store from '../../utils/Store';

interface LoginCardProps {
  label: string,
  src: string,
  userId: number
}

export class LoginCard extends Block<LoginCardProps> {
  constructor(props: LoginCardProps) {
    super(props);
  }


  init() {
    this.children.button = new Button({
      label: this.props.label,
      style: styles.button,
      events: {
        click: ()=> {
          this.addUserToChat(this.props.userId)
          store.set('modal', false)
        }
      }
    })

    this.children.avatar = new Avatar({
      src: this.getLink(),
    })
  }

  private addUserToChat(userId: number) {
    const chatId = window.location.pathname.split('/').pop();
    ChatsController.addUserToChat(Number(chatId), userId)
  }

  private getLink() {
    if (this.props.src) {
    return `https://ya-praktikum.tech/api/v2/resources${this.props.src}`
    } else {
      return ""
    }
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}


