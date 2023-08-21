import API, { UpdateAPI } from "../api/UpdateAPI";
import { IUpdateData, IUpdatePassword } from "@shared/api/IUpdate";

export class UpdateController {
  private readonly api: UpdateAPI;

  constructor() {
    this.api = API;
  }

  async updateUser(data: IUpdateData) {
    try {
      await this.api.updateUser(data);
    } catch (e: any) {
      console.error(e);
    }
  }

  async updatePassword(data: IUpdatePassword) {
    try {
      await this.api.updatePassword(data);
    } catch (e: any) {
      console.error(e);
    }
  }

  async updateAvatar(data: FormData) {
    try {
      return await this.api.updateAvatar(data);
    } catch (e: any) {
      console.error(e);
    }
  }
}

export default new UpdateController();
