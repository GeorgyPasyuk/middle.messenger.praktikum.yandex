"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInPage = void 0;
const Button_1 = require("../../components/Button");
const Block_1 = __importDefault(require("../../utils/Block"));
const tpl_hbs_1 = __importDefault(require("./tpl.hbs"));
const login_module_scss_1 = __importDefault(require("./login.module.scss"));
const Input_1 = require("../../components/Input");
const Link_1 = require("../../components/Link");
const Validation_1 = require("../../components/Validation");
const Validation_2 = __importDefault(require("../../utils/Validation"));
let userInfo = {
    login: "",
    password: ""
};
class LogInPage extends Block_1.default {
    constructor() {
        super({});
    }
    init() {
        this.children.button = new Button_1.Button({
            label: "Авторизоваться",
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
                        console.log("User login = " + userInfo.login + "\n", "User password = " + userInfo.password);
                    }
                    else {
                        alert("Пожалуйста заполните все поля");
                    }
                }
            },
        });
        this.children.login = new Input_1.Input({
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
        this.children.password = new Input_1.Input({
            name: "password",
            type: "password",
            events: {
                keydown: (e) => {
                    userInfo.password = e.target.value;
                },
                blur: () => {
                    if (!(0, Validation_2.default)(/^(?=.*\d)(?=.*[A-Z]).{8,40}$/, userInfo.password)) {
                        this.children.invalidPassword.show();
                        userInfo.login = "";
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
        this.children.link = new Link_1.Link({
            label: "Нет аккаунта?",
            linkTo: "#/SignIn"
        });
    }
    render() {
        return this.compile(tpl_hbs_1.default, {
            styles: login_module_scss_1.default,
            loginName: "Логин",
            passwordName: "Пароль",
        });
    }
}
exports.LogInPage = LogInPage;
//# sourceMappingURL=index.js.map