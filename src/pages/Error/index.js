"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const error_hbs_1 = __importDefault(require("./error.hbs"));
const Errors_1 = require("../../components/Errors");
class Error extends Block_1.default {
    constructor() {
        super({});
    }
    init() {
        this.children.error = new Errors_1.ErrorsComponent({
            number: 404,
            title: "Вы не туда попали",
            events: {
                click: () => {
                    if (location.hash === "#/err500") {
                        this.children.error.setProps({ number: 505, title: "Мы работаем над ошибкой" });
                    }
                }
            }
        });
    }
    render() {
        return this.compile(error_hbs_1.default, {
            link: "#/Profile"
        });
    }
}
exports.Error = Error;
//# sourceMappingURL=index.js.map