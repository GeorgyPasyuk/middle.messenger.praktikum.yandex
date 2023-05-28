"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = void 0;
const Block_1 = __importDefault(require("../../../utils/Block"));
const par_hbs_1 = __importDefault(require("./par.hbs"));
const label_module_scss_1 = __importDefault(require("../label.module.scss"));
class Paragraph extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(par_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: label_module_scss_1.default }));
    }
}
exports.Paragraph = Paragraph;
//# sourceMappingURL=index.js.map