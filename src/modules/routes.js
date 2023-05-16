"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const LogIn_1 = require("../pages/LogIn");
const SignIn_1 = require("../pages/SignIn");
const ChatList_1 = require("../pages/ChatList");
const Profile_1 = require("../pages/Profile");
const Error_1 = require("../pages/Error");
const login = new LogIn_1.LogInPage();
const signIn = new SignIn_1.SingInPage();
const chatList = new ChatList_1.ChatList();
const profile = new Profile_1.ProfilePage();
const error = new Error_1.Error();
exports.routes = [
    { path: '/Login', component: login, },
    { path: '/SignIn', component: signIn, },
    { path: '/SelectChat', component: chatList, },
    { path: '/Profile', component: profile, },
    { path: '/err404', component: error, },
    { path: '/err500', component: error, },
];
//# sourceMappingURL=routes.js.map