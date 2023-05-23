import API, { UpdateAPI, UpdateData } from '../api/UpdateAPI';

export class UpdateController {
  private readonly api: UpdateAPI

  constructor() {
    this.api = API
  }


  async updateUser(data: UpdateData) {
    try {
      await this.api.updateUser(data);

    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new UpdateController()
