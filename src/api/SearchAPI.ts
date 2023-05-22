import BaseAPI from './BaseApi';

export interface userLogin {
  "login": string
}


export class SearchAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  getLogin(login: userLogin) {
    return this.http.post('/search', login)
  }

  read = undefined
  create = undefined
  delete = undefined
  update = undefined
}

export default new SearchAPI()
