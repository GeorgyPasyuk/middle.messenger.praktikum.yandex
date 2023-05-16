"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = __importDefault(require("./utils/Router"));
const SignIn_1 = require("./pages/SignIn");
/*
import {router} from "./modules/router";


window.addEventListener('hashchange', router);
window.addEventListener('load', router);
*/
const router = new Router_1.default();
router.use({ state: 'signup' }, SignIn_1.SingInPage);
router.use({ state: 'chats' }, ChatsBlock);
//# sourceMappingURL=index.js.map