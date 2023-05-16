"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const link_hbs_1 = __importDefault(require("./link.hbs"));
const link_module_scss_1 = __importDefault(require("./link.module.scss"));
class Link extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(link_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: link_module_scss_1.default }));
    }
}
exports.Link = Link;
//# sourceMappingURL=index.js.map