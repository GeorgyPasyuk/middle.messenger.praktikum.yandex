import Block from '../../utils/Block';
import template from './messanger.hbs';
import styles from './messanger.module.scss';
import { Time } from './Time';
import { Message } from './Message';
import { Button } from '../Button';
import { Input } from '../Input';

interface MessangerProps {
  profileName: string
  time: string | number
}


export class Messanger extends Block<MessangerProps> {
  constructor(props: MessangerProps) {
    super(props);
  }
  init() {
    this.children.time = new Time({
      time: "12:30"
    })

    this.children.messageTo = new Message({
      time: "21:00",
      message: "hi",
      myMsg: false
    })
    this.children.messageFrom = new Message({
      time: "21:00",
      message: "hi",
      myMsg: true
    })

    this.children.button = new Button({
      style: styles.footer__button,
      type: "button",
      label: "",
      events: {
        click: () => console.log("clicked")
      }
    })

    this.children.messangerInput = new Input({
      style: styles.footer__input,
      placeholder: "Сообщение",
      name: "messangerInput",
      type: "text",
      events: {
        keydown: () => {

        },
      }
    })


  }
  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
