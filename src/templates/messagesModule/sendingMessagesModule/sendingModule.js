"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sendingTemplate_hbs_1 = require("./sendingTemplate.hbs");
var messages_module_style_scss_1 = require("../messages.module.style.scss");
var sendingTemplateModule = function () {
    var context = {
        time: "12 июня",
        fromTime: "21:00",
        toTime: "21:04",
        fromMessages: ["Привет! Смотри, тут всплыл интересный кусок лунной космической истории — " +
                "НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. " +
                "Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих " +
                "камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты " +
                "с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету " +
                "они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на " +
                "аукционе за 45000 евро."],
        toMessages: [
            "Привет)", "Круто!",
        ],
        fromContainerStyle: messages_module_style_scss_1.default.from__container,
        toContainerStyle: messages_module_style_scss_1.default.to__container,
        fromItemStyle: messages_module_style_scss_1.default.from__item,
        toItemStyle: messages_module_style_scss_1.default.to__item,
        currentTimeStyle: messages_module_style_scss_1.default.message__time
    };
    return (0, sendingTemplate_hbs_1.default)(context);
};
exports.default = sendingTemplateModule;
