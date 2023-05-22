import API, { SearchAPI } from '../api/SearchAPI';
import { userLogin } from '../api/SearchAPI';

export class SearchController {
  private readonly api: SearchAPI

  constructor() {
    this.api = API
  }

  getLogin(login: userLogin) {
    return this.api.getLogin(login)
  }

}

export default new SearchController()
