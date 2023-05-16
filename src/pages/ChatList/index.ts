import Block from '../../utils/Block';
import template from "./chatlist.hbs"
import styles from './chatList.module.scss';
import { Chat } from '../../components/Chat';
import { Messanger } from '../Messenger';
import { Link } from '../../components/Link';



const data = {
  userName: ['Саша', "Lesha", "masha"],
  time: ['11:10', "12:12", "13:13"],
  latestMessage: ["hi", "hello", "privet"],
  note: [1,3,4],
}

let chatId: number;


export class ChatList extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.link = new Link({
      label: "Профиль",
      styles: styles.search__profile
    }),

    this.children.chat = data.userName.map((name, index) => {
      return new Chat({
        name: name,
        time: data.time[index],
        latestMessage: data.latestMessage[index],
        notes: data.note[index],
        isSelected: false,
        events: {
          click: ()=> {
            const chat = this.children.chat
            const selected = chat[index].props.isSelected
            chat.forEach((item: any, i: number) => {
              if (i === index) {
                item.setProps({ isSelected: !selected });
                chatId = index
                return;
              } else if (item.props.isSelected) {
                item.setProps({ isSelected: false });
                chatId = index
                return;
              }
            });
          }
        }
      })
    })

    this.children.messanger = new Messanger({
      time: "11:20",
      profileName: "Вадим"
    })
  }

  render() {
    return this.compile(template, {
      styles,
      link: "#/Profile",
      chatId: chatId
    })
  }
}




