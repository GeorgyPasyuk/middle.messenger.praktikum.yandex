import Block from '../../utils/Block';
import template from "./chatPage.hbs"
import styles from './chatPage.module.scss';
import { Messenger } from '../Messenger';
import ChatsController from '../../controllers/ChatsController';
import { ChatsList } from '../../components/ChatList';



export class MessengerPage extends Block {
  constructor() {
    super({});
  }

  init() {
     this.children.chatsList = new ChatsList({
       isLoaded: false
     })

    this.children.messenger = new Messenger({})


    ChatsController.fetchChats().finally(()=> {
      (this.children.chatsList as Block).setProps({
        isLoaded: true
      })
    })

  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      styles
    })
  }
}




