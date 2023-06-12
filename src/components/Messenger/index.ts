import Block from '../../utils/Block';
import template from './messenger.hbs';
import styles from './messanger.module.scss';
import { Time } from './Time';
import { Message } from '../Message';
import { Button } from '../Button';
import { Input } from '../Input';
import MessagesController, {Message as MessageData} from '../../controllers/MessagesController';
import store, { withStore } from '../../utils/Store';
import { TriggerModal } from '../ModalTrigger';
import { Modal } from '../ModalTrigger/Modal';
import { addUserModal } from '../addUserToChat';
import { Avatar } from '../Avatar';


interface MessengerProps {
  selectedChat: number | undefined,
  messages: MessageData[],
  userId: number;
  time: string | number
  userModal: boolean,
  usersInChat: [],
  chatAvatar: string
}


let isShown = false

let date = new Date()

class DefaultMessenger extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props);
  }

   init() {
    this.children.messages = this.createMessages(this.props);

    const chatId = window.location.pathname.split('/').pop();

    if (chatId) {
      store.set("selectedChat", Number(chatId))
    }

    this.children.messages = this.createMessages(this.props)

    this.children.time = new Time({
      time: `${date.getHours()}:${date.getMinutes() < 10 ? "0" + 
        date.getMinutes() : date.getMinutes()}`
    })

    this.children.button = new Button({
      style: styles.footer__button,
      type: "button",
      label: "",
      events: {
        click: () => {
          const message = this.children.messengerInput.getValue()
          this.children.messengerInput.setValue("")

          if (message) {

            MessagesController.sendMessage(this.props.selectedChat!, message)
          }
        }
      }
    })

    this.children.messengerInput = new Input({
      style: styles.footer__input,
      placeholder: "Сообщение",
      name: "message",
      type: "text",
      events: {
        keydown: (e: KeyboardEvent) => {
          if (e.keyCode == 13) {
            const message = this.children.messengerInput.getValue()
            this.children.messengerInput.setValue("")
            if (message) {
              MessagesController.sendMessage(this.props.selectedChat!, message)
            }
          }
        },
      }
    })

    this.children.showModal = new TriggerModal({
      events: {
        click: () => {
          this.showModal()
        }
      }
    })

    this.children.modal = new Modal({})

    this.children.addUserModal = new addUserModal({
      userLogin: []
    })
  }




  protected componentDidUpdate(_oldProps: MessengerProps, newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);
    if (newProps.chatAvatar) {
      this.getAvatarLink(newProps.chatAvatar)
    }
    return true;
  }


  private getAvatarLink(link: string) {
    let avatarLink = ""
    if (link) {
      avatarLink = `https://ya-praktikum.tech/api/v2/resources${link}`
    }
    return this.children.chatAvatar = new Avatar({
      src: `${avatarLink}`,
    })
  }


  private createMessages(props: MessengerProps) {
    return props.messages.map(data => {
      return new Message({ ...data, myMsg: props.userId === data.user_id})
    })
  }

  private showModal() {
    if (!isShown) {
      this.children.modal.show()
      isShown = true
    } else {
      this.children.modal.hide()
      isShown = false
    }
  }


  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}


const withSelectedChatMessages = withStore(state => {

  const selectedChatId = state.selectedChat

  if(!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
    }
  }
  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
    userModal: state.modal,
    chatName: state.activeChat.title,
    chatAvatar: state.activeChat.avatar
  }
})


export const Messenger = withSelectedChatMessages(DefaultMessenger)
