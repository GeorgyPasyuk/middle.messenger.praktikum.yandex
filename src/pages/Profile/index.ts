import Block from '../../utils/Block';
import template from "./profile.hbs"
import styles from './profile.module.scss';
import { Label } from '../../components/Label';
import { Navigation } from '../../components/Navigation';
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

let ProfilePageProps =  {
  dataContext: [true, false, false]
}

const componentsData = {
  name: ["email", "login", "first_name", "second_name", "display_name" ,"phone"],
  title: ["Почта", "Логин", "Имя", "Фамилия", "Имя в чате", "Телефон"],
  value: ["pochta@yandex.ru", "ivanivanov", "Иван", "Иванов", "Иван", "+7 (909) 999 99 99"]
}

const passwordsData = {
  name: ["oldPassword", "newPassword", "newPasswordAgain"],
  title: ["Старый пароль", "Новый пароль", "Новый пароль еще раз"],
}

export class ProfilePage extends Block {
  constructor() {
    super(ProfilePageProps);
  }

  init() {
    this.children.button = new Button({
      type: "button",
      label: "Сохранить",
      events:  {
        click: ()=> {
          this.setProps({
            dataContext: [true, false, false]
          })
        }
      }
    })


    this.children.defaultField = componentsData.name.map((name, index) => {
        return new Label({
          name: name,
          title: componentsData.title[index],
          value: componentsData.value[index],
          custom: false
        })
      })

    this.children.dataChanged = componentsData.name.map((name, index) => {
        return new Label({
          name: "email",
          title: componentsData.title[index],
          custom: true,
          value: new Input({
            name: name,
            type: "text",
            placeholder: componentsData.value[index],
            style: styles.profile__input,
            events: {
              keydown: (e) => {
                console.log(`New ${name} is `+(e.target as HTMLInputElement).value);
              }
            }
          })
        })
    })


      this.children.passwordChanged = passwordsData.name.map((name, index) => {
        return new Label({
          name: "password",
          title: passwordsData.title[index],
          custom: true,
          value: new Input({
            name: name,
            type: "password",
            events: {
              keydown: (e) => {
                console.log(`New ${name} is `+ (e.target as HTMLInputElement).value);
              }
            }
          })
        })
      })

    this.children.changeData = new Navigation({
      title: "Изменить данные",
      events: { click: ()=> {
          this.setProps({
            dataContext: [false, true, false]
          })
        }
      }
    })


    this.children.changePassword = new Navigation({
      title: "Сменить пароль",
      events: { click: ()=> {
          this.setProps({
            dataContext: [false, false, true]
          })
        }
      }
    })
    this.children.exit = new Navigation({
      title: "Выход",
      isExit: true,
      events: { click: ()=> console.log("Выход")
      }
    })
  }

  render() {
    return this.compile(template, {
      ...this.props,
      styles,
      accountName: "Григорий",
      defaultContext: this.props.defaultContext,
      changeData: this.props.changeData,
      changePassword: this.props.changePassword
    })
  }
}


