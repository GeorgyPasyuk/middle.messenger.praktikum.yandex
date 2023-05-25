import { Button } from '../../components/Button';
import Block from '../../utils/Block';
import template from "./tpl.hbs"
import styles from './login.module.scss';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import { Validation } from '../../components/Validation';
import validation from '../../utils/Validation';
import AuthController from '../../controllers/AuthController';
import { SignupData } from '../../api/AuthAPI';






export class LogInPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.login = new Input({
      name: "login",
      type: "text",
      events: {
        blur: ()=> {
          if (!validation(
            /^(?!^[0-9]*$)[\w-]{3,20}$/
            , this.children.login.getValue())) {
            this.children.invalidLogin.show()
            this.children.login.setValue("")
          } else {
            this.children.invalidLogin.hide()
          }
        }
      }
    })

    this.children.invalidLogin = new Validation({
      errName: "Пожалуйста убедитесь, что нет спецсимволов и пробелов, минимум 4 символа"
    })

    this.children.password = new Input({
      name: "password",
      type: "password",
      events: {
        blur: ()=> {
          if (!validation(
            /^(?=.*\d)(?=.*[A-Z]).{8,40}$/, this.children.password.getValue())) {
            this.children.invalidPassword.show()
            this.children.password.setValue("")
          } else {
            this.children.invalidPassword.hide()
          }
        }
      }
    })

    this.children.invalidPassword = new Validation({
      errName: "Пожалуйста убедитесь, что пароль от 8 до 40 символов, " +
        "и обязательно есть хотя бы одна заглавная буква и цифра."
    })

    this.children.link = new Link({
      label: "Нет аккаунта?",
      to: "/sign-up"
    })

    this.children.button = new Button({
      label: "Авторизоваться",
      type: "submit",
      events: {
        click: (e) => {
          this.onSubmit()
          e!.preventDefault()
        }
      },
    });
  }

  onSubmit() {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof Input)
      .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values);
    AuthController.signin(data as SignupData);
  }

  render() {
    return this.compile(template, {
      styles,
      loginName: "Логин",
      passwordName: "Пароль",
    })
  }
}

