"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messanger = void 0;
const Block_1 = __importDefault(require("../../utils/Block.js"));
const messanger_hbs_1 = __importDefault(require("./messanger.hbs"));
const messanger_module_scss_1 = __importDefault(require("./messanger.module.scss"));
const Time_1 = require("./Time/index.js");
const Message_1 = require("./Message/index.js");
const Button_1 = require("../../components/Button/index.js");
const Input_1 = require("../../components/Input/index.js");
class Messanger extends Block_1.default {
    constructor(props) {
        super(props);
    }
    init() {
        this.children.time = new Time_1.Time({
            time: "12:30"
        });
        this.children.messageTo = new Message_1.Message({
            time: "21:00",
            message: "hi",
            myMsg: false
        });
        this.children.messageFrom = new Message_1.Message({
            time: "21:00",
            message: "hi",
            myMsg: true
        });
        this.children.button = new Button_1.Button({
            style: messanger_module_scss_1.default.footer__button,
            type: "button",
            label: "",
            events: {
                click: () => console.log("clicked")
            }
        });
        this.children.messangerInput = new Input_1.Input({
            style: messanger_module_scss_1.default.footer__input,
            placeholder: "Сообщение",
            name: "message",
            type: "text",
            events: {
                keydown: () => {
                },
            }
        });
    }
    render() {
        return this.compile(messanger_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: messanger_module_scss_1.default }));
    }
}
exports.Messanger = Messanger;
//# sourceMappingURL=index.js.map
