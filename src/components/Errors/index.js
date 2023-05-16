"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsComponent = void 0;
const Block_1 = __importDefault(require("../../utils/Block"));
const err_hbs_1 = __importDefault(require("./err.hbs"));
const errors_module_scss_1 = __importDefault(require("./errors.module.scss"));
class ErrorsComponent extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(err_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: errors_module_scss_1.default }));
    }
}
exports.ErrorsComponent = ErrorsComponent;
//# sourceMappingURL=index.js.map