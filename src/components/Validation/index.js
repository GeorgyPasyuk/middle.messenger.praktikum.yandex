"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const validation_hbs_1 = __importDefault(require("./validation.hbs"));
const validation_module_scss_1 = __importDefault(require("./validation.module.scss"));
class Validation extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(validation_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: validation_module_scss_1.default }));
    }
}
exports.Validation = Validation;
//# sourceMappingURL=index.js.map