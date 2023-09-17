import API, { SearchAPI } from '../api/SearchAPI';
import {IUserLogin} from "@shared/api/ISearch";

export class SearchController {
  private readonly api: SearchAPI

  constructor() {
    this.api = API
  }

  async getLogin(login: IUserLogin): Promise<[]> {
    return await this.api.getLogin(login)
  }

}

export default new SearchController()
