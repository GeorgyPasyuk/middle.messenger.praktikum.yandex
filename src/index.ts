import Router from './utils/Router';
import { SingInPage } from './pages/SignUp';
import { LogInPage } from './pages/LogIn';
import { ProfilePage } from './pages/Profile';
import { ChatList } from './pages/ChatList';
import AuthController  from './controllers/AuthController';

enum Routes {
  Index = "/",
  SignUp = "/sign-up",
  Profile = "/settings",
  Messenger = "/messenger"
}


window.addEventListener("DOMContentLoaded", async ()=> {
  Router
    .use(Routes.Index, LogInPage)
    .use(Routes.SignUp, SingInPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Messenger, ChatList)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.SignUp:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Profile);
    }
  }

})


