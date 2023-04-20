"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputTemplate_hbs_1 = require("./inputTemplate.hbs");
var input_module_Style_scss_1 = require("./input.module.Style.scss");
var inputTemplate = function () {
    var context = {
        login: "Логин",
        password: "Пароль",
        InputHeaderStyle: input_module_Style_scss_1.default.login__info,
        InputStyle: input_module_Style_scss_1.default.login__input,
        ContainerStyle: input_module_Style_scss_1.default.login__container,
        ContainerMixin: input_module_Style_scss_1.default.login__containerLast,
    };
    return (0, inputTemplate_hbs_1.default)(context);
};
exports.default = inputTemplate;
