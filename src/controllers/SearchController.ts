import API, { SearchAPI } from '../api/SearchAPI';
import { userLogin } from '../api/SearchAPI';
import store from '../utils/Store';

export class SearchController {
  private readonly api: SearchAPI

  constructor() {
    this.api = API
  }

  async getLogin(login: userLogin) {
    const logins = await this.api.getLogin(login)
    store.set('findedUsers', logins)
  }

}

export default new SearchController()
