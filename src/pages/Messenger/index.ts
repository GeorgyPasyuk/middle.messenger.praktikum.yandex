import Block from '../../utils/Block';
import template from './messanger.hbs';
import styles from './messanger.module.scss';
import { Time } from './Time';
import { Message } from '../../components/Message';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import MessagesController, {Message as MessageData} from '../../controllers/MessagesController';
import { withStore } from '../../utils/Store';

interface MessengerProps {
  selectedChat: number | undefined,
  messages: MessageData[],
  userId: number;
  profileName: string
  time: string | number
}


class DefaultMessenger extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props);
  }
  init() {
    this.children.messages = this.createMessages(this.props)

    this.children.time = new Time({
      time: "12:30"
    })

    this.children.button = new Button({
      style: styles.footer__button,
      type: "button",
      label: "",
      events: {
        click: () => {
          const input = this.children.messengerInput as Input
          const message = input.getValue()
          input.setValue('')

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
        keydown: () => {

        },
      }
    })
  }

  protected componentDidUpdate( newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);

    return true;
  }

  private createMessages(props: MessengerProps) {
    return props.messages.map(data => {
      return new Message({...data, myMsg: props.userId === data.user_id})
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
      userId: state.user.id
    }
  }
  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id
  }
})


export const Messenger = withSelectedChatMessages(DefaultMessenger)
