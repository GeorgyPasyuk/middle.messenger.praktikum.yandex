import { Button } from '../../components/Button';
import Block from '../../utils/Block';
import template from "./tpl.hbs"
import styles from './login.module.scss';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';


let userInfo = {
  login: "",
  password: ""
}


export class LogInPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.button = new Button({
      label: "Авторизоваться",
      events: {
        click: () => {
          console.log(
            "User login = " + userInfo.login + "\n",
            "User password = " + userInfo.password,
          );
        }
      },
    });

    this.children.login = new Input({
      name: "login",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.login = e.target.value
          if (e.keyCode === 13) {
            console.log(
              "User login = " + userInfo.login + "\n",
              "User password = " + userInfo.password,
            )
          }
        },
      }
    })

    this.children.password = new Input({
      name: "password",
      type: "password",
      events: {
        keydown: (e) => {
          userInfo.password = e.target.value
          if (e.keyCode === 13) {
            console.log(
              "User login = " + userInfo.login +
              "\nUser password = " + userInfo.password,
            )
          }
        },
      }
    })

    this.children.link = new Link({
      label: "Нет аккаунта?",
      linkTo: "#/SignIn"
    })
  }

  render() {
    return this.compile(template, {
      styles,
      loginName: "Логин",
      passwordName: "Пароль",
    })
  }
}

