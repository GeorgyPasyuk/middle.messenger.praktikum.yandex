import API, { SearchAPI } from '../api/SearchAPI';
import store from '../utils/Store';
import {IUserLogin} from "@shared/api/ISearch";

export class SearchController {
  private readonly api: SearchAPI

  constructor() {
    this.api = API
  }

  async getLogin(login: IUserLogin) {
    const logins = await this.api.getLogin(login)
    store.set('findedUsers', logins)
  }

}

export default new SearchController()
