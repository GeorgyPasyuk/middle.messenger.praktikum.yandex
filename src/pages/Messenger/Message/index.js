"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const Block_1 = __importDefault(require("../../../utils/Block.js"));
const msg_hbs_1 = __importDefault(require("./msg.hbs"));
const msg_module_scss_1 = __importDefault(require("./msg.module.scss"));
class Message extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(msg_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: msg_module_scss_1.default }));
    }
}
exports.Message = Message;
//# sourceMappingURL=index.js.map
