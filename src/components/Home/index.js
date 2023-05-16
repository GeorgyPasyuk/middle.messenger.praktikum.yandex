"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const home_hbs_1 = __importDefault(require("./home.hbs"));
const Button_1 = require("../Button");
const Block_1 = __importDefault(require("../../utils/Block"));
class HomePage extends Block_1.default {
    constructor() {
        super('div');
    }
    init() {
        this.children.button = new Button_1.Button({
            label: "Авторизоваться",
            events: {
                click: () => console.log("Авторизоваться кликнуто")
            },
        });
    }
    render() {
        return this.compile(home_hbs_1.default, {});
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=index.js.map