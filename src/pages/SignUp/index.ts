import { Button } from "@components/Button";
import Block from "@utils/Block";
import template from "./tpl.hbs";
import styles from "./signin.module.scss";
import { Input } from "@components/Input";
import { Link } from "@components/Link";
import { Validation } from "@components/Validation";
import validation from "@utils/Validation";
import AuthController from "@controllers/AuthController";
import { ISignupData } from "@shared/api/IAuth";
import {
  firstNameValidation,
  loginValidation,
  mailValidation,
  passwordValidation,
  phoneValidation,
  secondNameValidation,
} from "@shared/registration/validation";
import {
  errFirstName,
  errLogin,
  errMail,
  errPassword,
  errPasswordAgain,
  errPhone,
  errSecondName,
} from "@shared/registration/errName";

let userInfo = {
  email: "",
  login: "",
  name: "",
  surname: "",
  phone: "",
  password: "",
  passwordAgain: "",
};

export class SingInPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.mailInput = new Input({
      name: "email",
      type: "text",
      events: {
        input: (e) => {
          userInfo.email = (e.target as HTMLInputElement).value;
        },
        blur: () => {
          if (!validation(mailValidation, userInfo.email)) {
            this.children.invalidMail.show();
            userInfo.email = "";
          } else {
            this.children.invalidMail.hide();
          }
        },
      },
    });

    this.children.invalidMail = new Validation({
      errName: errMail,
    });

    this.children.loginInput = new Input({
      name: "login",
      type: "text",
      events: {
        input: (e) => {
          userInfo.login = (e.target as HTMLInputElement).value;
        },
        blur: () => {
          if (!validation(loginValidation, userInfo.login)) {
            this.children.invalidLogin.show();
            userInfo.login = "";
          } else {
            this.children.invalidLogin.hide();
          }
        },
      },
    });

    this.children.invalidLogin = new Validation({
      errName: errLogin,
    });

    this.children.nameInput = new Input({
      name: "first_name",
      type: "text",
      events: {
        input: (e) => {
          userInfo.name = (e.target as HTMLInputElement).value;
        },
        blur: () => {
          if (!validation(firstNameValidation, userInfo.name)) {
            this.children.invalidName.show();
            userInfo.name = "";
          } else {
            this.children.invalidName.hide();
          }
        },
      },
    });

    this.children.invalidName = new Validation({
      errName: errFirstName,
    });

    this.children.surnameInput = new Input({
      name: "second_name",
      type: "text",
      events: {
        input: (e) => {
          userInfo.surname = (e.target as HTMLInputElement).value;
        },
        blur: () => {
          if (!validation(secondNameValidation, userInfo.surname)) {
            this.children.invalidSurname.show();
            userInfo.surname = "";
          } else {
            this.children.invalidSurname.hide();
          }
        },
      },
    });

    this.children.invalidSurname = new Validation({
      errName: errSecondName,
    });

    this.children.phoneInput = new Input({
      name: "phone",
      type: "text",
      events: {
        input: (e) => {
          userInfo.phone = (e.target as HTMLInputElement).value;
        },
        blur: () => {
          if (!validation(phoneValidation, userInfo.phone)) {
            this.children.invalidPhone.show();
            userInfo.phone = "";
          } else {
            this.children.invalidPhone.hide();
          }
        },
      },
    });

    this.children.invalidPhone = new Validation({
      errName: errPhone,
    });

    this.children.passwordInput = new Input({
      name: "password",
      type: "text",
      events: {
        input: (e) => {
          userInfo.password = (e.target as HTMLInputElement).value;
        },
        blur: () => {
          if (!validation(passwordValidation, userInfo.password)) {
            this.children.invalidPassword.show();
            userInfo.password = "";
          } else {
            this.children.invalidPassword.hide();
          }
        },
      },
    });

    this.children.invalidPassword = new Validation({
      errName: errPassword,
    });

    this.children.passwordInputAgain = new Input({
      name: "passwordagain",
      type: "text",
      events: {
        input: (e) => {
          userInfo.passwordAgain = (e.target as HTMLInputElement).value;
        },
        blur: () => {
          if (userInfo.password !== userInfo.passwordAgain) {
            this.children.invalidPasswordAgain.show();
            userInfo.passwordAgain = "";
          } else {
            this.children.invalidPasswordAgain.hide();
          }
        },
      },
    });

    this.children.invalidPasswordAgain = new Validation({
      errName: errPasswordAgain,
    });

    this.children.button = new Button({
      label: "Зарегестрироваться",
      type: "submit",
      events: {
        click: (e) => {
          this.onSubmit();
          e!.preventDefault();
        },
      },
    });

    this.children.link = new Link({
      label: "Войти",
      to: "/",
    });
  }

  onSubmit() {
    const values = Object.values(this.children)
      .filter((child) => child instanceof Input)
      .map((child) => [
        (child as Input).getName(),
        (child as Input).getValue(),
      ]);

    const data = Object.fromEntries(values);

    AuthController.signup(data as ISignupData);
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
    });
  }
}
