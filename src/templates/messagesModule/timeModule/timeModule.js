"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeTemplate_hbs_1 = require("./timeTemplate.hbs");
var messages_module_style_scss_1 = require("../messages.module.style.scss");
var timeTemplateModule = function () {
    var context = {
        time: "12 июня",
        timeStyle: messages_module_style_scss_1.default.main__time,
    };
    return (0, timeTemplate_hbs_1.default)(context);
};
exports.default = timeTemplateModule;
