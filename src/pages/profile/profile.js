"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var profileModule_1 = require("../../templates/profileModule/profileModule");
exports.Profile = {
    render: function () {
        return "\n        <section class=\"profile__component\">\n        <a href=\"#/SelectChat\" class=\"profile__back\">\n            <div class=\"profile__arrow\"></div>\n        </a>\n        <div class=\"profile__main\">\n            <div class=\"profile__container\">\n                <div class=\"profile__image\"></div>\n                <p class=\"profile__name\">\u0418\u0432\u0430\u043D</p>\n                <div class=\"profile__items\">\n                    ".concat((0, profileModule_1.default)(), "\n                </div>\n                <footer class=\"profile__action__container\">\n                    <div class=\"profile__box\">\n                        <a class=\"profile__action__header\" href=\"#/ChangeProfile\">\n                            \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435\n                        </a>\n                    </div>\n                    <div class=\"profile__box\">\n                        <a class=\"profile__action__header\" href=\"#/ChangePassword\"> \n                            \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C\n                        </a>\n                    </div>\n                    <div class=\"profile__box profile__last\">\n                        <h class=\"profile__action__exit\">\n                            \u0412\u044B\u0445\u043E\u0434\n                        </h>\n                    </div>\n                </footer>\n            </div>\n        </div>\n        </section>\n        ");
    }
};
