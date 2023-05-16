"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const routes_1 = require("./routes");
const Error_1 = require("../pages/Error");
const err404 = new Error_1.Error();
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`${path}`, 'gmi')));
const router = () => {
    const path = parseLocation();
    const { component = err404 } = findComponentByPath(path, routes_1.routes) || {};
    document.getElementById('app').innerHTML = "";
    document.getElementById('app').append(component.getContent());
};
exports.router = router;
//# sourceMappingURL=router.js.map