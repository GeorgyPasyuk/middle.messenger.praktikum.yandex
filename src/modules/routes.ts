import { LogInPage } from '../pages/LogIn';
import { SingInPage } from '../pages/SignIn';
import { ChatList } from '../pages/ChatList';
import { ProfilePage } from '../pages/Profile';

const login = new LogInPage()
const signIn = new SingInPage()
const chatList = new ChatList()
const profile = new ProfilePage()


export const routes = [
    { path: '/Login', component: login, },
    { path: '/SignIn', component: signIn, },
    { path: '/SelectChat', component: chatList, },
    { path: '/Profile', component: profile,},
    /* { path: '/ChangeProfile', component: changeProfile,},

    { path: '/ChangePassword', component: changePassword,},
    { path: '/Chat', component: Chat, },
    { path: '/err404', component: err404, },
    { path: '/err500', component: err500, },
    { path: '/Test', component: TestComp, }, */
];

