"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var login_1 = require("../pages/login/login");
var signIn_1 = require("../pages/signIn/signIn");
var profile_1 = require("../pages/profile/profile");
var changeProfile_1 = require("../pages/profile/changeProfile");
var chat_1 = require("../pages/chat/chat");
var selectChat_1 = require("../pages/selectChat/selectChat");
var errs_1 = require("../pages/errs/errs");
var changePassword_1 = require("../pages/profile/changePassword");
exports.routes = [
    { path: '/Login', component: login_1.Login, },
    { path: '/SignIn', component: signIn_1.SignIn, },
    { path: '/Profile', component: profile_1.Profile, },
    { path: '/ChangeProfile', component: changeProfile_1.changeProfile, },
    { path: '/ChangePassword', component: changePassword_1.changePassword, },
    { path: '/Chat', component: chat_1.Chat, },
    { path: '/SelectChat', component: selectChat_1.SelectChat, },
    { path: '/err404', component: errs_1.err404, },
    { path: '/err500', component: errs_1.err500, },
];
