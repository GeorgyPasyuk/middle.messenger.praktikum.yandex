"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const label_hbs_1 = __importDefault(require("./label.hbs"));
const label_module_scss_1 = __importDefault(require("./label.module.scss"));
const paragraph_1 = require("./paragraph");
class Label extends Block_1.default {
    constructor(props) {
        super(props);
    }
    init() {
        if (!this.props.custom) {
            this.children.value = new paragraph_1.Paragraph({
                title: this.props.value
            });
        }
    }
    render() {
        return this.compile(label_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: label_module_scss_1.default }));
    }
}
exports.Label = Label;
//# sourceMappingURL=index.js.map