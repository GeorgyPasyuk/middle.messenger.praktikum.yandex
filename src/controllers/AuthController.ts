import API, { AuthAPI } from "@api/AuthAPI";
import store from "../utils/Store";
import router from "../utils/Router";
import MessagesController from "./MessagesController";
import { ISigninData, ISignupData } from "@shared/api/IAuth";

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: ISigninData) {
    try {
      await this.api.signin(data);

      await this.fetchUser().then((response) => {
        if (response.id) {
          router.go("/messenger");
        }
      });
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: ISignupData) {
    try {
      await this.api.signup(data);

      await this.fetchUser().then((response) => {
        if (response.id) {
          router.go("/messenger");
        }
      });
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set("user", user);


    return user;
  }

  async logout() {
    try {
      MessagesController.closeAll();

      await this.api.logout();

      router.go("/");
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new AuthController();
