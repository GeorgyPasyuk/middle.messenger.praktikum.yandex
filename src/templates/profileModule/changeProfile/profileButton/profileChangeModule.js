"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profileChangeTemplate_hbs_1 = require("./profileChangeTemplate.hbs");
var profile_module_style_scss_1 = require("../../profile.module.style.scss");
var profileButtonTemplateModule = function () {
    var context = {
        buttonStyle: profile_module_style_scss_1.default.save__button,
        title: "Сохранить"
    };
    return (0, profileChangeTemplate_hbs_1.default)(context);
};
exports.default = profileButtonTemplateModule;
