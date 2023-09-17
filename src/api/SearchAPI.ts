import BaseAPI from "./BaseApi";
import {IUserLogin} from "@shared/api/ISearch";

export class SearchAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  getLogin(login: IUserLogin): Promise<[]> {
    return this.http.post("/search", login);
  }

  read = undefined;
  create = undefined;
  delete = undefined;
  update = undefined;
}

export default new SearchAPI();
