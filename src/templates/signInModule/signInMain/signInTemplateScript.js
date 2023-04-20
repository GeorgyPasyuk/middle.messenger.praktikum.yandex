"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signInTemplate_hbs_1 = require("./signInTemplate.hbs");
var signIn_module_Style_scss_1 = require("./signIn.module.Style.scss");
var signInTemplateModule = function () {
    var context = {
        email: "Почта",
        login: "Логин",
        first_name: "Имя",
        second_name: "Фамилия",
        phone: "Номер телефона",
        password: "Пароль",
        passwordConfirm: "Пароль (еще раз)",
        signInContainer: signIn_module_Style_scss_1.default.signup__container,
        signInHeader: signIn_module_Style_scss_1.default.signIn__info,
        signInInput: signIn_module_Style_scss_1.default.signIn__input,
        signInMixin: signIn_module_Style_scss_1.default.signIn__last
    };
    return (0, signInTemplate_hbs_1.default)(context);
};
exports.default = signInTemplateModule;
