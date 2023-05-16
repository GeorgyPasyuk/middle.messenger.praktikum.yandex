"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const navigation_hbs_1 = __importDefault(require("./navigation.hbs"));
const navigation_module_scss_1 = __importDefault(require("./navigation.module.scss"));
class Navigation extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(navigation_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: navigation_module_scss_1.default }));
    }
}
exports.Navigation = Navigation;
//# sourceMappingURL=index.js.map