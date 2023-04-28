import Block from '../../utils/Block';
import template from "./profile.hbs"
import styles from './profile.module.scss';
import { Label } from '../../components/Label';
import { Navigation } from '../../components/Navigation';
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

let ProfilePageProps =  {
  defaultContext: true,
  changeData: false,
  changePassword: false
}


let componentsData = {
  name: ["email", "login", "first_name", "second_name", "display_name" ,"phone"],
  title: ["Почта", "Логин", "Имя", "Фамилия", "Имя в чате", "Телефон"],
  value: ["pochta@yandex.ru", "ivanivanov", "Иван", "Иванов", "Иван", "+7 (909) 999 99 99"]
}

let passwordsData = {
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
            defaultContext: true,
            changeData: false,
            changePassword: false
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
        name: "name",
        title: componentsData.title[index],
        custom: true,
        value: new Input({
          name: name,
          type: "text",
          placeholder: componentsData.value[index],
        })
      })
    })

    this.children.passwordChanged = passwordsData.name.map((name, index) => {
      return new Label({
        name: name,
        title: passwordsData.title[index],
        custom: true,
        value: new Input({
          name: name,
          type: "password",
          placeholder: ""
        })
      })
    })


        this.children.changeData = new Navigation({
      title: "Изменить данные",
      events: { click: ()=> {
          this.setProps({
            defaultContext: false,
            changeData: true,
            changePassword: false
          })
        }
      }
    })


    this.children.changePassword = new Navigation({
      title: "Сменить пароль",
      events: { click: ()=> {
          this.setProps({
            defaultContext: false,
            changeData: false,
            changePassword: true
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
    console.log(this.props)

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



// profileData: [
//         { name: 'email', title:'Почта', value: 'pochta@yandex.ru'},
//         { name: 'login', title:'Логин', value: 'ivanivanov'},
//         { name: 'first_name', title:'Имя', value: 'Иван'},
//         { name: 'second_name', title:'Фамилия', value: 'Иванов'},
//         { name: 'display_name', title:'Имя в чате', value: 'Иван'},
//         { name: 'phone', title:'Телефон', value: '+7 (909) 999 99 99'},
//       ],
