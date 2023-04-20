"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var footerTemplate_hbs_1 = require("./footerTemplate.hbs");
var footer_module_LoginStyle_scss_1 = require("./footer.module.LoginStyle.scss");
var footerModule = function () {
    var context = {
        buttonTitle: "Вход",
        linkTitle: "Нет аккаунта?",
        login__link: "#/SignIn",
        login__btnStyle: footer_module_LoginStyle_scss_1.default.welcome__footer__btn,
        login__linkStyle: footer_module_LoginStyle_scss_1.default.footer__link
    };
    return (0, footerTemplate_hbs_1.default)(context);
};
exports.default = footerModule;
