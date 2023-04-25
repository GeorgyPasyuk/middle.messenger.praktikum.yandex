import { Button } from '../../components/Button';
import Block from '../../utils/Block';
import template from "./tpl.hbs"
import styles from './signin.module.scss';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';


export class SingInPage extends Block {
  constructor() {
    super('section');
  }

  init() {
    this.children.button  = new Button({
      label: "Зарегестрироваться",
      events: {
        click: () => console.log("Зарегестрироваться кликнуто")
      },
    });

    this.children.mailInput = new Input({
      name: "mail",
      type: "text"
    })

    this.children.loginInput = new Input({
      name: "login",
      type: "text"
    })

    this.children.nameInput = new Input({
      name: "name",
      type: "text"
    })

    this.children.surnameInput = new Input({
      name: "surname",
      type: "text"
    })

    this.children.phoneInput = new Input({
      name: "phone",
      type: "text"
    })

    this.children.passwordInput = new Input({
      name: "password",
      type: "password",
      events: {
        input: (e) => console.log(e.target.value)
      }
    })


    this.children.passwordInputAgain = new Input({
      name: "passwordagain",
      type: "text"
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


