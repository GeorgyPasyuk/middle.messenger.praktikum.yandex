import { HTTP } from '../utils/HTTP';


export default abstract class BaseAPI {
  protected http: HTTP;

  protected constructor(endpoint: string) {
    this.http = new HTTP(endpoint);
  }

  public abstract create?(data: unknown): Promise<unknown>;

  public abstract read?(identifier?: string | number): Promise<unknown>;

  public abstract update?(identifier: string | number, data: unknown): Promise<unknown>;

  public abstract delete?(identifier: string | number): Promise<unknown>;
}
