"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatList = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const chatlist_hbs_1 = __importDefault(require("./chatlist.hbs"));
const chatList_module_scss_1 = __importDefault(require("./chatList.module.scss"));
const Chat_1 = require("../../components/Chat");
const Messanger_1 = require("../../components/Messanger");
const data = {
    userName: ['Саша', "Lesha", "masha"],
    time: ['11:10', "12:12", "13:13"],
    latestMessage: ["hi", "hello", "privet"],
    note: [1, 3, 4],
};
let chatId;
class ChatList extends Block_1.default {
    constructor() {
        super({});
    }
    init() {
        this.children.chat = data.userName.map((name, index) => {
            return new Chat_1.Chat({
                name: name,
                time: data.time[index],
                latestMessage: data.latestMessage[index],
                notes: data.note[index],
                isSelected: false,
                events: {
                    click: () => {
                        const chat = this.children.chat;
                        const selected = chat[index].props.isSelected;
                        chat.forEach((item, i) => {
                            if (i === index) {
                                item.setProps({ isSelected: !selected });
                                chatId = index;
                                return;
                            }
                            else if (item.props.isSelected) {
                                item.setProps({ isSelected: false });
                                chatId = index;
                                return;
                            }
                        });
                    }
                }
            });
        });
        this.children.messanger = new Messanger_1.Messanger({
            time: "11:20",
            profileName: "Вадим"
        });
    }
    render() {
        return this.compile(chatlist_hbs_1.default, {
            styles: chatList_module_scss_1.default,
            link: "#/Profile",
            chatId: chatId
        });
    }
}
exports.ChatList = ChatList;
//# sourceMappingURL=index.js.map