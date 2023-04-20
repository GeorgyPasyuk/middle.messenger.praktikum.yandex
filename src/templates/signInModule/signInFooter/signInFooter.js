"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var footerTemplate_hbs_1 = require("../../loginModule/loginFooter/footerTemplate.hbs");
var footer_module_LoginStyle_scss_1 = require("../../loginModule/loginFooter/footer.module.LoginStyle.scss");
var footerSignInTemplate = function () {
    var context = {
        buttonTitle: "Войти",
        linkTitle: "Зарегестрироваться",
        login__link: "#/Login",
        login__btnStyle: footer_module_LoginStyle_scss_1.default.welcome__footer__btn,
        login__linkStyle: footer_module_LoginStyle_scss_1.default.footer__link
    };
    return (0, footerTemplate_hbs_1.default)(context);
};
exports.default = footerSignInTemplate;
