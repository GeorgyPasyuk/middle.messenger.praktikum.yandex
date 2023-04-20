"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("./modules/router");
window.addEventListener('hashchange', router_1.router);
window.addEventListener('load', router_1.router);
