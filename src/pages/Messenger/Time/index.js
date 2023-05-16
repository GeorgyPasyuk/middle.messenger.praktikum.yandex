"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
const Block_1 = __importDefault(require("../../../utils/Block.js"));
const time_hbs_1 = __importDefault(require("./time.hbs"));
const time_module_scss_1 = __importDefault(require("./time.module.scss"));
class Time extends Block_1.default {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(time_hbs_1.default, Object.assign(Object.assign({}, this.props), { styles: time_module_scss_1.default }));
    }
}
exports.Time = Time;
//# sourceMappingURL=index.js.map
