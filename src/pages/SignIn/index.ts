import { Button } from '../../components/Button';
import Block from '../../utils/Block';
import template from "./tpl.hbs"
import styles from './signin.module.scss';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';


let userInfo = {
  mail: "",
  login: "",
  name: "",
  surname: "",
  phone: "",
  password: "",
  passwordAgain: ""
}

export class SingInPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.button  = new Button({
      label: "Зарегестрироваться",
      events: {
        click: () => console.log(
            "User mail = " + userInfo.mail,
            "\nUser login = " + userInfo.login,
            "\nUser name = " + userInfo.name,
            "\nUser surname = " + userInfo.surname,
            "\nUser phone = " + userInfo.phone,
            "\nUser password = " + userInfo.password,
            "\nUser passwordAgain = " + userInfo.passwordAgain,)
      },
    });

    this.children.mailInput = new Input({
      name: "mail",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.mail = e.target.value
          if (e.keyCode === 13) {
            console.log(
                "User mail = " + userInfo.mail,
                "\nUser login = " + userInfo.login,
                "\nUser name = " + userInfo.name,
                "\nUser surname = " + userInfo.surname,
                "\nUser phone = " + userInfo.phone,
                "\nUser password = " + userInfo.password,
                "\nUser passwordAgain = " + userInfo.passwordAgain,
            )
          }
        },
      }
    })

    this.children.loginInput = new Input({
      name: "login",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.login = e.target.value
          if (e.keyCode === 13) {
            console.log(
                "User mail = " + userInfo.mail,
                "\nUser login = " + userInfo.login,
                "\nUser name = " + userInfo.name,
                "\nUser surname = " + userInfo.surname,
                "\nUser phone = " + userInfo.phone,
                "\nUser password = " + userInfo.password,
                "\nUser passwordAgain = " + userInfo.passwordAgain,
            )
          }
        },
      }
    })

    this.children.nameInput = new Input({
      name: "name",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.name = e.target.value
          if (e.keyCode === 13) {
            console.log(
                "User mail = " + userInfo.mail,
                "\nUser login = " + userInfo.login,
                "\nUser name = " + userInfo.name,
                "\nUser surname = " + userInfo.surname,
                "\nUser phone = " + userInfo.phone,
                "\nUser password = " + userInfo.password,
                "\nUser passwordAgain = " + userInfo.passwordAgain,
            )
          }
        },
      }
    })

    this.children.surnameInput = new Input({
      name: "surname",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.surname = e.target.value
          if (e.keyCode === 13) {
            console.log(
                "User mail = " + userInfo.mail,
                "\nUser login = " + userInfo.login,
                "\nUser name = " + userInfo.name,
                "\nUser surname = " + userInfo.surname,
                "\nUser phone = " + userInfo.phone,
                "\nUser password = " + userInfo.password,
                "\nUser passwordAgain = " + userInfo.passwordAgain,
            )
          }
        },
      }
    })

    this.children.phoneInput = new Input({
      name: "phone",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.phone = e.target.value
          if (e.keyCode === 13) {
            console.log(
                "User mail = " + userInfo.mail,
                "\nUser login = " + userInfo.login,
                "\nUser name = " + userInfo.name,
                "\nUser surname = " + userInfo.surname,
                "\nUser phone = " + userInfo.phone,
                "\nUser password = " + userInfo.password,
                "\nUser passwordAgain = " + userInfo.passwordAgain,
            )
          }
        },
      }
    })

    this.children.passwordInput = new Input({
      name: "password",
      type: "password",
      events: {
        keydown: (e) => {
          userInfo.password = e.target.value
          if (e.keyCode === 13) {
            console.log(
                "User mail = " + userInfo.mail,
                "\nUser login = " + userInfo.login,
                "\nUser name = " + userInfo.name,
                "\nUser surname = " + userInfo.surname,
                "\nUser phone = " + userInfo.phone,
                "\nUser password = " + userInfo.password,
                "\nUser passwordAgain = " + userInfo.passwordAgain,
            )
          }
        },
      }
    })


    this.children.passwordInputAgain = new Input({
      name: "passwordagain",
      type: "password",
      events: {
        keydown: (e) => {
          userInfo.passwordAgain = e.target.value
          if (e.keyCode === 13) {
            console.log(
                "User mail = " + userInfo.mail,
                "\nUser login = " + userInfo.login,
                "\nUser name = " + userInfo.name,
                "\nUser surname = " + userInfo.surname,
                "\nUser phone = " + userInfo.phone,
                "\nUser password = " + userInfo.password,
                "\nUser passwordAgain = " + userInfo.passwordAgain,
            )
          }
        },
      }
    })

    this.children.link = new Link({
      label: "Войти",
      linkTo: "#/LogIn"
    })
  }

  render() {
    return this.compile(template, {
      styles,
      mailName: "Почта",
      loginName: "Логин",
      name: "Имя",
      surname: "Фамилия",
      phoneName: "Телефон",
      passwordName: "Пароль",
      passwordNameAgain: "Пароль (еще раз)",
    })
  }
}


