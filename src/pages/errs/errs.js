"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.err500 = exports.err404 = void 0;
exports.err404 = {
    render: function () {
        return "\n      <section class=\"err__container\">\n         <h class=\"err__header\">404</h>\n         <p class=\"err__text\">\u041D\u0435 \u0442\u0443\u0434\u0430 \u043F\u043E\u043F\u0430\u043B\u0438</p>\n         <a href=\"#/SelectChat\" class=\"welcome__link\">\u041D\u0430\u0437\u0430\u0434 \u043A \u0447\u0430\u0442\u0430\u043C</a>\n      </section>\n    ";
    }
};
exports.err500 = {
    render: function () {
        return "\n      <section class=\"err__container\">\n         <h class=\"err__header\">500</h>\n         <p class=\"err__text\">\u041C\u044B \u0443\u0436\u0435 \u0444\u0438\u043A\u0441\u0438\u043C</p>\n         <a href=\"#/SelectChat\" class=\"welcome__link\">\u041D\u0430\u0437\u0430\u0434 \u043A \u0447\u0430\u0442\u0430\u043C</a>\n      </section>\n    ";
    }
};
