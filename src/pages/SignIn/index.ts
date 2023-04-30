import { Button } from '../../components/Button';
import Block from '../../utils/Block';
import template from "./tpl.hbs"
import styles from './signin.module.scss';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import { Validation } from '../../components/Validation';
import validation from '../../utils/Validation';


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
      type: "submit",
      events: {
        click: (e) => {
          e!.preventDefault()
          let validInputs: boolean = false
          const values = Object.values(userInfo)
          for (let i = 0; i < values.length; i++) {
            if (values[i]) {
              validInputs = true
            } else {
              validInputs = false
              break
            }
          }
          if (validInputs) {
            console.log(
              "User mail = " + userInfo.mail,
              "\nUser login = " + userInfo.login,
              "\nUser name = " + userInfo.name,
              "\nUser surname = " + userInfo.surname,
              "\nUser phone = " + userInfo.phone,
              "\nUser password = " + userInfo.password,
              "\nUser passwordAgain = " + userInfo.passwordAgain,)
          } else {
            alert("Пожалуйста заполните все поля")
          }
        }
      },
    });



    this.children.mailInput = new Input({
      name: "mail",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.mail = (e.target as HTMLInputElement).value
        },
        blur: () => {
          if (!validation(/@[\w\d]+(\.[\w\d]+)*$/, userInfo.mail)) {
            this.children.invalidMail.show()
            userInfo.mail = ""
          } else {
            this.children.invalidMail.hide()
          }
        }
      }
    })

    this.children.invalidMail = new Validation({
      errName: "Пожалуйста убедитесь, что email введен корректно"
    })


    this.children.loginInput = new Input({
      name: "login",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.login = (e.target as HTMLInputElement).value
        },
        blur: ()=> {
          if (!validation(
            /^(?!^[0-9]*$)[\w-]{3,20}$/
            , userInfo.login)) {
            this.children.invalidLogin.show()
            userInfo.login = ""
          } else {
            this.children.invalidLogin.hide()
          }
        }
      }
    })

    this.children.invalidLogin = new Validation({
      errName: "Пожалуйста убедитесь, что нет спецсимволов и пробелов, минимум 4 символа"
    })


    this.children.nameInput = new Input({
      name: "name",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.name = (e.target as HTMLInputElement).value
        },
        blur: ()=> {
          if (!validation(
            /^(?:[А-ЯЁ][а-яё]*|[A-Z][a-z]*)(?:-[А-ЯЁ][а-яё]*|[A-Z][a-z]*)*$/, userInfo.name)) {
            this.children.invalidName.show()
            userInfo.name = ""
          } else {
            this.children.invalidName.hide()
          }
        }
      }
    })

    this.children.invalidName = new Validation({
      errName: "Пожалуйста убедитесь, что нет спецсимволов, пробелом и первая буква заглавная"
    })

    this.children.surnameInput = new Input({
      name: "surname",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.surname = (e.target as HTMLInputElement).value
        },
        blur: ()=> {
          if (!validation(
            /^(?:[А-ЯЁ][а-яё]*|[A-Z][a-z]*)(?:-[А-ЯЁ][а-яё]*|[A-Z][a-z]*)*$/, userInfo.surname)) {
            this.children.invalidSurname.show()
            userInfo.surname = ""
          } else {
            this.children.invalidSurname.hide()
          }
        }
      }
    })

    this.children.invalidSurname = new Validation({
      errName: "Пожалуйста убедитесь, что нет спецсимволов, пробелом и первая буква заглавная"
    })

    this.children.phoneInput = new Input({
      name: "phone",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.phone = (e.target as HTMLInputElement).value
        },
        blur: ()=> {
          if (!validation(
            /^\+?\d{10,15}$/, userInfo.phone)) {
            this.children.invalidPhone.show()
            userInfo.phone = ""
          } else {
            this.children.invalidPhone.hide()
          }
        }
      }
    })

    this.children.invalidPhone = new Validation({
      errName: "Пожалуйста убедитесь, что телефон введён корректно"
    })


    this.children.passwordInput = new Input({
      name: "password",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.password = (e.target as HTMLInputElement).value
        },
        blur: ()=> {
          if (!validation(
            /^(?=.*\d)(?=.*[A-Z])[\w\d]{8,40}$/, userInfo.password)) {
            this.children.invalidPassword.show()
            userInfo.password = ""
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



    this.children.passwordInputAgain = new Input({
      name: "passwordagain",
      type: "text",
      events: {
        keydown: (e) => {
          userInfo.passwordAgain = (e.target as HTMLInputElement).value
        },
        blur: ()=> {
          if (userInfo.password !== userInfo.passwordAgain) {
            this.children.invalidPasswordAgain.show()
            userInfo.passwordAgain = ""
          } else {
            this.children.invalidPasswordAgain.hide()
          }
        }
      }
    })

    this.children.invalidPasswordAgain = new Validation({
      errName: "Пожалуйста убедитесь, что пароли совпадают"
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


