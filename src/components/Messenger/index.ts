import Block from '../../utils/Block';
import template from './messenger.hbs';
import styles from './messanger.module.scss';
import { Time } from './Time';
import { Message } from '../Message';
import { Button } from '../Button';
import { Input } from '../Input';
import MessagesController, {Message as MessageData} from '../../controllers/MessagesController';
import { withStore } from '../../utils/Store';
import { TriggerModal } from '../ModalTrigger';
import { Modal } from '../ModalTrigger/Modal';
import ChatsController from "../../controllers/ChatsController";

interface MessengerProps {
  selectedChat: number | undefined,
  messages: MessageData[],
  userId: number;
  profileName: string
  time: string | number
  modalShow: boolean
}


let isShown = false

let date = new Date()

class DefaultMessenger extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props);
  }
  init() {
    this.children.messages = this.createMessages(this.props)

    this.children.time = new Time({
      time: `${date.getHours()}:${date.getMinutes()}`
    })

    this.children.button = new Button({
      style: styles.footer__button,
      type: "button",
      label: "",
      events: {
        click: () => {
          this.props.messages.push(this.children.messengerInput.getValue());
          this.createMessages(this.props)
          const input = this.children.messengerInput as Input
          const message = input.getValue()
          input.setValue('')
          MessagesController.sendMessage(this.props.selectedChat!, message)
        }
      }
    })

    this.children.showModal = new TriggerModal({
      events: {
        click: () => {
          this.showModal()
        }
      }
    })

    this.children.modal = new Modal({
      events: {
        click: ()=> {
          const chatId = this.props.selectedChat
          ChatsController.delete(chatId!)
        }
      }
    })

    this.children.messengerInput = new Input({
      style: styles.footer__input,
      placeholder: "Сообщение",
      name: "message",
      type: "text",
      events: {
        keydown: () => {

        },
      }
    })
  }


  protected componentDidUpdate( newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);
    return true;
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


  private createMessages(props: MessengerProps) {
    return props.messages.map(data => {
      return new Message({ ...data, myMsg: props.userId === data.user_id})
    })
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
  console.log(state);
  return {
    messages: (state.messages || {})[selectedChatId] || [],
    modalShow: true,
    selectedChat: state.selectedChat,
    userId: state.user.id,
  }
})


export const Messenger = withSelectedChatMessages(DefaultMessenger)
