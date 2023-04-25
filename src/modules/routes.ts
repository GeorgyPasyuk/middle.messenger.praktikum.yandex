import { LogInPage } from '../pages/LogIn';
import { SingInPage } from '../pages/SignIn';
import { ChatList } from '../pages/ChatList';
import { ProfilePage } from '../pages/Profile';
import {Error} from "../pages/Error";

const login = new LogInPage()
const signIn = new SingInPage()
const chatList = new ChatList()
const profile = new ProfilePage()
const error = new Error()


export const routes = [
    { path: '/Login', component: login, },
    { path: '/SignIn', component: signIn, },
    { path: '/SelectChat', component: chatList, },
    { path: '/Profile', component: profile,},
    { path: '/err404', component: error, },
    { path: '/err500', component: error, },
    /* { path: '/ChangeProfile', component: changeProfile,},
    { path: '/ChangePassword', component: changePassword,},
    { path: '/Chat', component: Chat, },
    { path: '/Test', component: TestComp, }, */
];

