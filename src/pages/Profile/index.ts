import Block from '../../utils/Block';
import template from "./profile.hbs"
import styles from './profile.module.scss';
import { Label } from '../../components/Label';
import { Navigation } from '../../components/Navigation';
import {Button} from "../../components/Button";


export class ProfilePage extends Block {
  constructor() {
    super('section');
  }

  init() {
    console.log(this.children)
    this.children.button = new Button({
      type: "button",
      label: "Авторизоваться",
      events:  {
        click: ()=> console.log("isClicked")
      }
    })

    this.children.mail = new Label({
      name: "email",
      title: "Почта",
      value: "pochta@yandex.ru"
    })

    this.children.login = new Label({
      name: "login",
      title: "Логин",
      value: "ivanivanov"
    })

    this.children.name = new Label({
      name: "first_name",
      title: "Имя",
      value: "Иван"
    })

    this.children.surname = new Label({
      name: "second_name",
      title: "Фамилия",
      value: "Иванов"
    })

    this.children.displayName = new Label({
      name: "display_name",
      title: "Имя в чате",
      value: "Иван"
    })
    this.children.phone = new Label({
      name: "phone",
      title: "Телефон",
      value: "+7 (909) 999 99 99"
    })

    this.children.changeData = new Navigation({
      title: "Изменить данные",
      link: "#/ChangeData",
      events: { click: ()=> console.log('Изменить данные')
      }
    })


    this.children.changePassword = new Navigation({
      title: "Сменить пароль",
      link: "#/ChangePassword",
      events: { click: ()=> console.log('Сменить пароль')
      }
    })
    this.children.exit = new Navigation({
      title: "Выход",
      isExit: true,
      link: "#/SelectChat",
      events: { click: ()=> console.log("Выход")
      }
    })
  }

  render() {
    return this.compile(template, {
      styles,
      accountName: "Григорий",
      defaultProfile: true,
      goToChangeData: false
    })
  }
}



// profileData: [
//         { name: 'email', title:'Почта', value: 'pochta@yandex.ru'},
//         { name: 'login', title:'Логин', value: 'ivanivanov'},
//         { name: 'first_name', title:'Имя', value: 'Иван'},
//         { name: 'second_name', title:'Фамилия', value: 'Иванов'},
//         { name: 'display_name', title:'Имя в чате', value: 'Иван'},
//         { name: 'phone', title:'Телефон', value: '+7 (909) 999 99 99'},
//       ],
