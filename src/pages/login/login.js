"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
var footerModule_1 = require("../../templates/loginModule/loginFooter/footerModule");
var inputModule_1 = require("../../templates/loginModule/loginInput/inputModule");
exports.Login = {
    render: function () {
        return "\n       <section class=\"welcome__container\">\n        <form class=\"welcome__box\">\n         <header class=\"welcome__header\">\u0412\u0445\u043E\u0434</header>\n          <main class=\"login__items\">\n            ".concat((0, inputModule_1.default)(), "\n          </main>\n          <footer>\n          ").concat((0, footerModule_1.default)(), "\n          </footer>\n          </form>\n       </section>\n    ");
    }
};
