import EventBus from './EventBus';
import set from './set';
import { Indexed } from './set';


export enum StoreEvents {
  Updated = 'updated',
}

// наследуем Store от EventBus, чтобы его методы были сразу доступны у экземпляра Store
class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }


  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  };
}

export default new Store();
