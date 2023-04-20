"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectChat = void 0;
var inputSelectChatModule_1 = require("../../templates/selectChatModule/selectChatInputModule/inputSelectChatModule");
var feedModule_1 = require("../../templates/selectChatModule/selectChatFeedModule/feedModule");
exports.SelectChat = {
    render: function () {
        return "\n      <div class=\"selectchat__container\">\n      <div class=\"chat__container\">\n        <header class=\"search__header\">\n            ".concat((0, inputSelectChatModule_1.default)(), "\n        </header>\n        <main class=\"feed__container\">\n            ").concat((0, feedModule_1.default)(), "\n        </main>\n      </div>\n        <div class=\"temporary\"><h>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</h></div>\n      </div>\n    ");
    }
};
