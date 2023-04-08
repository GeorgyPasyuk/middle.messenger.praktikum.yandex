import {Login} from "../pages/login/login";
import {SignIn} from "../pages/signIn/signIn";
import {Profile} from "../pages/profile/profile";
import {Chat} from "../pages/chat/chat";
import {SelectChat} from "../pages/selectChat/selectChat";
import {err404, err500} from "../pages/errs/errs";
//routes
export const routes = [
    { path: '/Login', component: Login, },
    { path: '/SignIn', component: SignIn, },
    { path: '/Profile', component: Profile, },
    { path: '/Chat', component: Chat, },
    { path: '/SelectChat', component: SelectChat, },
    { path: '/err404', component: err404, },
    { path: '/err500', component: err500, },
];
