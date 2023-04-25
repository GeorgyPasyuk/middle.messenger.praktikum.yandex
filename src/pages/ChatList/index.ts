import Block from '../../utils/Block';
import template from "./chatlist.hbs"
import styles from './chatList.module.scss';
import { Chat } from '../../components/Chat';


let isClicked = false


export class ChatList extends Block {
  constructor() {
    super('section');
  }

  init() {
    this.children.chat = new Chat({
      name: "Леша",
      isSelected: isClicked,
      latestMessage: "Hello there!",
      time: "11:20",
      notes: 1,
      events: {
        click: () => {
          isClicked = !isClicked;
          console.log(isClicked);
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




