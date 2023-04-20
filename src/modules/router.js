"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var routes_1 = require("./routes");
var errs_1 = require("../pages/errs/errs");
var parseLocation = function () { return location.hash.slice(1).toLowerCase() || '/'; };
var findComponentByPath = function (path, routes) { return routes.find(function (r) {
    return r.path.match(new RegExp("".concat(path), 'gmi'));
}); };
var router = function () {
    var path = parseLocation();
    var _a = (findComponentByPath(path, routes_1.routes) || {}).component, component = _a === void 0 ? errs_1.err404 : _a;
    document.getElementById('app').innerHTML = component.render();
    console.log(path, routes_1.routes);
};
exports.router = router;
