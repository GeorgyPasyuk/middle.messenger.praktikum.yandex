"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const Chat_hbs_1 = __importDefault(require("./Chat.hbs"));
const chat_module_scss_1 = __importDefault(require("./chat.module.scss"));
class Chat extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(Chat_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: chat_module_scss_1.default, link: "#/Profile" }));
    }
}
exports.Chat = Chat;
//# sourceMappingURL=index.js.map