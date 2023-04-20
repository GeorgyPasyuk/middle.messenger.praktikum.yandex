"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeProfile = void 0;
var profileChangeModule_1 = require("../../templates/profileModule/changeProfile/profileButton/profileChangeModule");
var profileChangeInfo_1 = require("../../templates/profileModule/changeProfile/profileInputs/profileChangeInfo");
exports.changeProfile = {
    render: function () {
        return "\n        <section class=\"profile__component\">\n        <a href=\"#/Profile\" class=\"profile__back\">\n            <div class=\"profile__arrow\"></div>\n        </a>\n        <div class=\"profile__main\">\n            <div class=\"profile__container\">\n                <div class=\"profile__image\"></div>\n                <div class=\"profile__items\">\n                    ".concat((0, profileChangeInfo_1.default)(), "\n                </div>\n                <footer class=\"profile__action__container action__change\">\n                   ").concat((0, profileChangeModule_1.default)(), "\n                </footer>\n            </div>\n        </div>\n        </section>\n        ");
    }
};
