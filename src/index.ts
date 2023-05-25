import Router from './utils/Router';
import { SingInPage } from './pages/SignUp';
import { LogInPage } from './pages/LogIn';
import { ProfilePage } from './pages/Profile';
import { ChatPage } from './pages/ChatPage';
import AuthController  from './controllers/AuthController';
import { StartPage } from './pages/StartPage';



enum Routes {
  Index = "/",
  SignUp = "/sign-up",
  Profile = "/settings",
  Messenger = "/messenger",
  Chat = "/messenger/:chatId",
  Error404 = "/err404"
}


window.addEventListener("DOMContentLoaded", async ()=> {
  Router
    .use(Routes.Index, LogInPage)
    .use(Routes.SignUp, SingInPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Messenger, StartPage)
    .use(Routes.Chat, ChatPage);

  let currentRoute = window.location.pathname
  let validUser = true

  switch (currentRoute) {
    case Routes.Index:
      break;
    case Routes.SignUp:
      validUser = false
      break;
  }

  try {
    await AuthController.fetchUser()
    Router.start()
    if (validUser) {
    Router.go(Routes.Messenger)
    }
  } catch (e) {
    Router.start()
    if (!validUser) {
    Router.go(Routes.Index)
    }
  }

});
