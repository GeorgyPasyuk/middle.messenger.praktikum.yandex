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
import ChatsController from "../../controllers/ChatsController";
import router from '../../utils/Router';
import { addUserModal } from '../addUserToChat';

interface MessengerProps {
  selectedChat: number | undefined,
  messages: MessageData[],
  userId: number;
  profileName: string
  time: string | number
  modalShow: boolean,
  modal: boolean
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
          MessagesController.sendMessage(this.props.selectedChat!, message)
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
            MessagesController.sendMessage(this.props.selectedChat!, message)
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

    this.children.deleteUser = new Modal({
      isRed: true,
      title: "Удалить чат",
      events: {
        click: async ()=> {
          const chatId = this.props.selectedChat
          await ChatsController.delete(chatId!)
          router.go("/messenger")
        }
      }
    })

    this.children.addUser = new Modal({
      isRed: false,
      title: "Добавить пользователя",
      events: {
        click: ()=> {
          this.setProps({
            ...this.props,
            modal: true
          })
          this.addUserModal(this.props.modal)
        }
      }
    })


    this.children.addUserModal = new addUserModal({
      userLogin:[]
    })

    this.children.addUserModal.hide()
  }


  protected componentDidUpdate(_oldProps: MessengerProps, newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);
    if (!newProps.modal) {
      this.addUserModal(newProps.modal)
    }
    return true;
  }

  private addUserModal(isShown: boolean) {
    if (isShown) {
      this.children.addUserModal.show()
    } else {
      this.children.addUserModal.hide()
    }
  }


  private createMessages(props: MessengerProps) {
    return props.messages.map(data => {
      return new Message({ ...data, myMsg: props.userId === data.user_id})
    })
  }

  private showModal() {
    if (!isShown) {
      this.children.deleteUser.show()
      this.children.addUser.show()
      isShown = true
    } else {
      this.children.deleteUser.hide()
      this.children.addUser.hide()
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
    modalShow: true,
    selectedChat: state.selectedChat,
    userId: state.user.id,
    modal: state.modal,
  }
})


export const Messenger = withSelectedChatMessages(DefaultMessenger)
