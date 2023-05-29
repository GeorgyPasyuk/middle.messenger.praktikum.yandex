import Block from '../../../utils/Block';
import template from './modalTemplate.hbs';
import styles from '../modal.module.scss';
import { Button } from '../../Button';
import ChatsController from '../../../controllers/ChatsController';
import router from '../../../utils/Router';
import store from '../../../utils/Store';
import { AvatarInput } from '../../AvatarInput';

interface ModalProps {
}

export class Modal extends Block<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  protected init() {
    this.children.addUser = new Button({
      label: "Добавить пользователя",
      events: {
        click: ()=> {
          store.set("modal", true)
        }
      },
      style: styles.modal__window
    })

    this.children.deleteChat = new Button({
      label: "Удалить чат",
      events: {
        click: async ()=> {
          const chatId = window.location.pathname.split('/').pop();
          await ChatsController.delete(Number(chatId))
          router.go("/messenger")
        }
      },
      style: styles.modal__window__red,
    })

    this.children.avatar = new AvatarInput({
      name: "chatAvatar",
      events: {
        change: async (event: InputEvent)=> {
          await this.updateAvatar(event)
        },
      },
      style: styles.modal__avatar
    })


    this.children.uploadAvatar = new Button({
      label: "Загрузить аватар чата",
      style: styles.modal__window
    })
  }

  private async updateAvatar(event: any) {
    const file = event.target!.files[0]
    const formData = new FormData()
    formData.append("avatar", file)

    const data = {
      chatId: store.getState().activeChat.id,
      avatar: formData
    }

    await ChatsController.updateAvatar(data)
    await ChatsController.fetchChats()
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
