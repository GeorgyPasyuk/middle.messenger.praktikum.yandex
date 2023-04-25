import Block from '../../utils/Block';
import template from "./chatlist.hbs"
import styles from './chatList.module.scss';
import { Chat } from '../../components/Chat';




export class ChatList extends Block {
  constructor() {
    super('section');
  }

  init() {
    this.children.chat = new Chat({
      name: "Леша",
      isSelected: false,
      latestMessage: "Hello there!",
      time: "11:20",
      notes: 1,
      events: {
        click: () => {
          this.children.chat.setProps({ isSelected: true })
        }
      }
    })

  }

  render() {
    return this.compile(template, {
      styles,
      link: "#/Profile"
    })
  }
}




