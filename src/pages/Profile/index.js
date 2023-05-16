"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePage = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const profile_hbs_1 = __importDefault(require("./profile.hbs"));
const profile_module_scss_1 = __importDefault(require("./profile.module.scss"));
const Label_1 = require("../../components/Label");
const Navigation_1 = require("../../components/Navigation");
const Button_1 = require("../../components/Button");
const Input_1 = require("../../components/Input");
let ProfilePageProps = {
    dataContext: [true, false, false]
};
const componentsData = {
    name: ["email", "login", "first_name", "second_name", "display_name", "phone"],
    title: ["Почта", "Логин", "Имя", "Фамилия", "Имя в чате", "Телефон"],
    value: ["pochta@yandex.ru", "ivanivanov", "Иван", "Иванов", "Иван", "+7 (909) 999 99 99"]
};
const passwordsData = {
    name: ["oldPassword", "newPassword", "newPasswordAgain"],
    title: ["Старый пароль", "Новый пароль", "Новый пароль еще раз"],
};
class ProfilePage extends Block_1.default {
    constructor() {
        super(ProfilePageProps);
    }
    init() {
        this.children.button = new Button_1.Button({
            type: "button",
            label: "Сохранить",
            events: {
                click: () => {
                    this.setProps({
                        dataContext: [true, false, false]
                    });
                }
            }
        });
        this.children.defaultField = componentsData.name.map((name, index) => {
            return new Label_1.Label({
                name: name,
                title: componentsData.title[index],
                value: componentsData.value[index],
                custom: false
            });
        });
        this.children.dataChanged = componentsData.name.map((name, index) => {
            return new Label_1.Label({
                name: "email",
                title: componentsData.title[index],
                custom: true,
                value: new Input_1.Input({
                    name: name,
                    type: "text",
                    placeholder: componentsData.value[index],
                    style: profile_module_scss_1.default.profile__input,
                    events: {
                        keydown: (e) => {
                            console.log(`New ${name} is ` + e.target.value);
                        }
                    }
                })
            });
        });
        this.children.passwordChanged = passwordsData.name.map((name, index) => {
            return new Label_1.Label({
                name: "password",
                title: passwordsData.title[index],
                custom: true,
                value: new Input_1.Input({
                    name: name,
                    type: "password",
                    events: {
                        keydown: (e) => {
                            console.log(`New ${name} is ` + e.target.value);
                        }
                    }
                })
            });
        });
        this.children.changeData = new Navigation_1.Navigation({
            title: "Изменить данные",
            events: { click: () => {
                    this.setProps({
                        dataContext: [false, true, false]
                    });
                }
            }
        });
        this.children.changePassword = new Navigation_1.Navigation({
            title: "Сменить пароль",
            events: { click: () => {
                    this.setProps({
                        dataContext: [false, false, true]
                    });
                }
            }
        });
        this.children.exit = new Navigation_1.Navigation({
            title: "Выход",
            isExit: true,
            events: { click: () => console.log("Выход")
            }
        });
    }
    render() {
        return this.compile(profile_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: profile_module_scss_1.default, accountName: "Григорий", defaultContext: this.props.defaultContext, changeData: this.props.changeData, changePassword: this.props.changePassword }));
    }
}
exports.ProfilePage = ProfilePage;
//# sourceMappingURL=index.js.map