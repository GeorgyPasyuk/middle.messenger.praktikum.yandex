"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = __importDefault(require("./utils/Router"));
const SignUp_1 = require("./pages/SignUp");
const LogIn_1 = require("./pages/LogIn");
const Profile_1 = require("./pages/Profile");
const ChatPage_1 = require("./pages/ChatPage");
const AuthController_1 = __importDefault(require("./controllers/AuthController"));
const StartPage_1 = require("./pages/StartPage");
require("./scss/main.scss");
var Routes;
(function (Routes) {
    Routes["Index"] = "/";
    Routes["SignUp"] = "/sign-up";
    Routes["Profile"] = "/settings";
    Routes["ChangeData"] = "/settings/changeData";
    Routes["ChangePassword"] = "/settings/changePassword";
    Routes["Messenger"] = "/messenger";
    Routes["Chat"] = "/messenger/:chatId";
    Routes["Error404"] = "/err404";
})(Routes || (Routes = {}));
window.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    Router_1.default
        .use(Routes.Index, LogIn_1.LogInPage)
        .use(Routes.SignUp, SignUp_1.SingInPage)
        .use(Routes.Profile, Profile_1.ProfilePage)
        .use(Routes.ChangeData, Profile_1.ProfilePage)
        .use(Routes.ChangePassword, Profile_1.ProfilePage)
        .use(Routes.Messenger, StartPage_1.StartPage)
        .use(Routes.Chat, ChatPage_1.ChatPage);
    let currentRoute = window.location.pathname;
    let validUser = true;
    switch (currentRoute) {
        case Routes.Index:
            validUser = false;
            break;
        case Routes.SignUp:
            validUser = false;
            break;
    }
    try {
        yield AuthController_1.default.fetchUser();
        Router_1.default.start();
        if (validUser) {
            Router_1.default.go(Routes.Messenger);
        }
    }
    catch (e) {
        Router_1.default.start();
        if (!validUser) {
            Router_1.default.go(Routes.Index);
        }
    }
}));
//# sourceMappingURL=index.js.map