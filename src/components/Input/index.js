"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const input_hbs_1 = __importDefault(require("./input.hbs"));
const input_module_scss_1 = __importDefault(require("./input.module.scss"));
class Input extends Block_1.default {
    constructor(props) {
        var _a;
        super(props);
        if (this.props.style) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.setAttribute("class", `${this.props.style}`);
        }
    }
    render() {
        return this.compile(input_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: input_module_scss_1.default }));
    }
}
exports.Input = Input;
//# sourceMappingURL=index.js.map