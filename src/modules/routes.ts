import {Login} from "../pages/login/login";
import {SignIn} from "../pages/signIn/signIn";
import {Profile} from "../pages/profile/profile";
import {changeProfile} from "../pages/profile/changeProfile";
import {Chat} from "../pages/chat/chat";
import {SelectChat} from "../pages/selectChat/selectChat";
import {err404, err500} from "../pages/errs/errs";
import {changePassword} from "../pages/profile/changePassword";

export const routes = [
    { path: '/Login', component: Login, },
    { path: '/SignIn', component: SignIn, },
    { path: '/Profile', component: Profile,},
    { path: '/ChangeProfile', component: changeProfile,},
    { path: '/ChangePassword', component: changePassword,},
    { path: '/Chat', component: Chat, },
    { path: '/SelectChat', component: SelectChat, },
    { path: '/err404', component: err404, },
    { path: '/err500', component: err500, },
];
