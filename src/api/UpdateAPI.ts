import BaseAPI from './BaseApi';
import {IUpdateData, IUpdatePassword} from "@shared/api/IUpdate";




export class UpdateAPI extends BaseAPI {
  constructor() {
    super('/user');
  }


  updateUser(data: IUpdateData) {
    return this.http.put('/profile', data)
  }

  updatePassword(data: IUpdatePassword) {
    return this.http.put('/password', data)
  }

  updateAvatar(data: FormData) {
    return this.http.put('/profile/avatar', data)
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UpdateAPI();
