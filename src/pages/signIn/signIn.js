"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignIn = void 0;
var signInTemplateScript_1 = require("../../templates/signInModule/signInMain/signInTemplateScript");
var signInFooter_1 = require("../../templates/signInModule/signInFooter/signInFooter");
exports.SignIn = {
    render: function () {
        return "\n       <section class=\"welcome__container\">\n            <form class=\"welcome__box\">\n                <header class=\"welcome__header\">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</header>\n                ".concat((0, signInTemplateScript_1.default)(), "\n                <footer>\n                ").concat((0, signInFooter_1.default)(), "\n                </footer>\n            </form>\n       </section>\n    ");
    }
};
