import BaseAPI from './BaseApi';


export interface UpdateData {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string,
}

export interface UpdatePassword {
  oldPassword: string,
  newPassword: string
}


export class UpdateAPI extends BaseAPI {
  constructor() {
    super('/user');
  }


  updateUser(data: UpdateData) {
    return this.http.put('/profile', data)
  }

  updatePassword(data: UpdatePassword) {
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
