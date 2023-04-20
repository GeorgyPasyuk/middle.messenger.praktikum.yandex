"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profileTemplate_hbs_1 = require("./profileTemplate.hbs");
var profile_module_style_scss_1 = require("./profile.module.style.scss");
var profileTemplateModule = function () {
    var context = {
        link: "#/Profile",
        goToProfile: "Профиль",
        profileData: [
            { name: 'email', label: 'Почта', value: 'pochta@yandex.ru' },
            { name: 'login', label: 'Логин', value: 'ivanivanov' },
            { name: 'first_name', label: 'Имя', value: 'Иван' },
            { name: 'second_name', label: 'Фамилия', value: 'Иванов' },
            { name: 'display_name', label: 'Имя в чате', value: 'Иван' },
            { name: 'phone', label: 'Телефон', value: '+7 (909) 999 99 99' },
        ],
        profileBoxStyle: profile_module_style_scss_1.default.profile__box,
        headerStyle: profile_module_style_scss_1.default.profile__header,
        headerInfo: profile_module_style_scss_1.default.profile__header__info
    };
    return (0, profileTemplate_hbs_1.default)(context);
};
exports.default = profileTemplateModule;
