"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var changePasswordTemplate_hbs_1 = require("./changePasswordTemplate.hbs");
var profile_module_style_scss_1 = require("../../profile.module.style.scss");
var profileChangePasswordTemplateModule = function () {
    var context = {
        profileData: [
            { name: 'old_password', label: 'Старый пароль', value: '123' },
            { name: 'new_password', label: 'Новый пароль', value: '123123' },
            { name: 'confirm_password', label: 'Повторите новый пароль', value: '123' },
        ],
        profileBoxStyle: profile_module_style_scss_1.default.profile__box,
        headerStyle: profile_module_style_scss_1.default.profile__header,
        headerInfo: profile_module_style_scss_1.default.profile__header__info
    };
    return (0, changePasswordTemplate_hbs_1.default)(context);
};
exports.default = profileChangePasswordTemplateModule;
