"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
var inputSelectChatModule_1 = require("../../templates/selectChatModule/selectChatInputModule/inputSelectChatModule");
var feedModule_1 = require("../../templates/selectChatModule/selectChatFeedModule/feedModule");
var timeModule_1 = require("../../templates/messagesModule/timeModule/timeModule");
var sendingModule_1 = require("../../templates/messagesModule/sendingMessagesModule/sendingModule");
exports.Chat = {
    render: function () {
        return "\n      <div class=\"selectchat__container\">\n      <div class=\"chat__container\">\n        <header class=\"search__header\">\n            ".concat((0, inputSelectChatModule_1.default)(), "\n            <svg class=\"header__icon\"></svg>\n        </header>\n        <main class=\"feed__container\">\n            ").concat((0, feedModule_1.default)(), "\n        </main>\n      </div>\n      <div class=\"chatMessage__container\">\n            <header class=\"header__container\">\n            <div class=\"header__item\">\n            <span class=\"header__avatar\"></span>\n            <h class=\"header__username\">\u0412\u0430\u0434\u0438\u043C</h>\n            </div>\n            <div class=\"header__item\">\n            <span class=\"header__options\"></span>\n            </div>\n            </header>  \n            <main class=\"main__container\">\n            ").concat((0, timeModule_1.default)(), "\n            ").concat((0, sendingModule_1.default)(), "\n            </main>\n            <footer class=\"footer__container\">\n            <svg class=\"footer__icon\"></svg>\n            <input type=\"text\" name=\"writeMsg\" class=\"footer__input\" placeholder=\"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\">\n            <svg class=\"footer__button\"></svg>\n            </footer>\n      </div>\n      </div>\n    ");
    }
};
