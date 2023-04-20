"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputTemplate_hbs_1 = require("./inputTemplate.hbs");
var input_module_style_scss_1 = require("./input.module.style.scss");
var inputTemplateModule = function () {
    var context = {
        link: "#/Profile",
        goToProfile: "Профиль",
        searchStyle: input_module_style_scss_1.default.search__input,
        linkStyle: input_module_style_scss_1.default.search__profile,
    };
    return (0, inputTemplate_hbs_1.default)(context);
};
exports.default = inputTemplateModule;
