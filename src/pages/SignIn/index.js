"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingInPage = void 0;
const Button_1 = require("../../components/Button");
const Block_1 = __importDefault(require("../../utils/Block"));
const tpl_hbs_1 = __importDefault(require("./tpl.hbs"));
const signin_module_scss_1 = __importDefault(require("./signin.module.scss"));
const Input_1 = require("../../components/Input");
const Link_1 = require("../../components/Link");
const Validation_1 = require("../../components/Validation");
const Validation_2 = __importDefault(require("../../utils/Validation"));
let userInfo = {
    email: "",
    login: "",
    name: "",
    surname: "",
    phone: "",
    password: "",
    passwordAgain: ""
};
class SingInPage extends Block_1.default {
    constructor() {
        super({});
    }
    init() {
        this.children.button = new Button_1.Button({
            label: "Зарегестрироваться",
            type: "submit",
            events: {
                click: (e) => {
                    e.preventDefault();
                    let validInputs = false;
                    const values = Object.values(userInfo);
                    for (let i = 0; i < values.length; i++) {
                        if (values[i]) {
                            validInputs = true;
                        }
                        else {
                            validInputs = false;
                            break;
                        }
                    }
                    if (validInputs) {
                        console.log("User mail = " + userInfo.email, "\nUser login = " + userInfo.login, "\nUser name = " + userInfo.name, "\nUser surname = " + userInfo.surname, "\nUser phone = " + userInfo.phone, "\nUser password = " + userInfo.password, "\nUser passwordAgain = " + userInfo.passwordAgain);
                    }
                    else {
                        alert("Пожалуйста заполните все поля");
                    }
                }
            },
        });
        this.children.mailInput = new Input_1.Input({
            name: "email",
            type: "text",
            events: {
                keydown: (e) => {
                    userInfo.email = e.target.value;
                },
                blur: () => {
                    if (!(0, Validation_2.default)(/@[\w\d]+(\.[\w\d]+)*$/, userInfo.email)) {
                        this.children.invalidMail.show();
                        userInfo.email = "";
                    }
                    else {
                        this.children.invalidMail.hide();
                    }
                }
            }
        });
        this.children.invalidMail = new Validation_1.Validation({
            errName: "Пожалуйста убедитесь, что email введен корректно"
        });
        this.children.loginInput = new Input_1.Input({
            name: "login",
            type: "text",
            events: {
                keydown: (e) => {
                    userInfo.login = e.target.value;
                },
                blur: () => {
                    if (!(0, Validation_2.default)(/^(?!^[0-9]*$)[\w-]{3,20}$/, userInfo.login)) {
                        this.children.invalidLogin.show();
                        userInfo.login = "";
                    }
                    else {
                        this.children.invalidLogin.hide();
                    }
                }
            }
        });
        this.children.invalidLogin = new Validation_1.Validation({
            errName: "Пожалуйста убедитесь, что нет спецсимволов и пробелов, минимум 4 символа"
        });
        this.children.nameInput = new Input_1.Input({
            name: "first_name",
            type: "text",
            events: {
                keydown: (e) => {
                    userInfo.name = e.target.value;
                },
                blur: () => {
                    if (!(0, Validation_2.default)(/^(?:[А-ЯЁ][а-яё]*|[A-Z][a-z]*)(?:-[А-ЯЁ][а-яё]*|[A-Z][a-z]*)*$/, userInfo.name)) {
                        this.children.invalidName.show();
                        userInfo.name = "";
                    }
                    else {
                        this.children.invalidName.hide();
                    }
                }
            }
        });
        this.children.invalidName = new Validation_1.Validation({
            errName: "Пожалуйста убедитесь, что нет спецсимволов, пробелом и первая буква заглавная"
        });
        this.children.surnameInput = new Input_1.Input({
            name: "second_name",
            type: "text",
            events: {
                keydown: (e) => {
                    userInfo.surname = e.target.value;
                },
                blur: () => {
                    if (!(0, Validation_2.default)(/^(?:[А-ЯЁ][а-яё]*|[A-Z][a-z]*)(?:-[А-ЯЁ][а-яё]*|[A-Z][a-z]*)*$/, userInfo.surname)) {
                        this.children.invalidSurname.show();
                        userInfo.surname = "";
                    }
                    else {
                        this.children.invalidSurname.hide();
                    }
                }
            }
        });
        this.children.invalidSurname = new Validation_1.Validation({
            errName: "Пожалуйста убедитесь, что нет спецсимволов, пробелом и первая буква заглавная"
        });
        this.children.phoneInput = new Input_1.Input({
            name: "phone",
            type: "text",
            events: {
                keydown: (e) => {
                    userInfo.phone = e.target.value;
                },
                blur: () => {
                    if (!(0, Validation_2.default)(/^\+?\d{10,15}$/, userInfo.phone)) {
                        this.children.invalidPhone.show();
                        userInfo.phone = "";
                    }
                    else {
                        this.children.invalidPhone.hide();
                    }
                }
            }
        });
        this.children.invalidPhone = new Validation_1.Validation({
            errName: "Пожалуйста убедитесь, что телефон введён корректно"
        });
        this.children.passwordInput = new Input_1.Input({
            name: "password",
            type: "text",
            events: {
                keydown: (e) => {
                    userInfo.password = e.target.value;
                },
                blur: () => {
                    if (!(0, Validation_2.default)(/^(?=.*\d)(?=.*[A-Z])[\w\d]{8,40}$/, userInfo.password)) {
                        this.children.invalidPassword.show();
                        userInfo.password = "";
                    }
                    else {
                        this.children.invalidPassword.hide();
                    }
                }
            }
        });
        this.children.invalidPassword = new Validation_1.Validation({
            errName: "Пожалуйста убедитесь, что пароль от 8 до 40 символов, " +
                "и обязательно есть хотя бы одна заглавная буква и цифра."
        });
        this.children.passwordInputAgain = new Input_1.Input({
            name: "passwordagain",
            type: "text",
            events: {
                keydown: (e) => {
                    userInfo.passwordAgain = e.target.value;
                },
                blur: () => {
                    if (userInfo.password !== userInfo.passwordAgain) {
                        this.children.invalidPasswordAgain.show();
                        userInfo.passwordAgain = "";
                    }
                    else {
                        this.children.invalidPasswordAgain.hide();
                    }
                }
            }
        });
        this.children.invalidPasswordAgain = new Validation_1.Validation({
            errName: "Пожалуйста убедитесь, что пароли совпадают"
        });
        this.children.link = new Link_1.Link({
            label: "Войти",
            linkTo: "#/LogIn"
        });
    }
    render() {
        return this.compile(tpl_hbs_1.default, {
            styles: signin_module_scss_1.default,
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
exports.SingInPage = SingInPage;
//# sourceMappingURL=index.js.map