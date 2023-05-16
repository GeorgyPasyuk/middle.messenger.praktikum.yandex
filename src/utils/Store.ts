import EventBus from './EventBus';
import set from './set';



export enum StoreEvents {
  Updated = 'updated',
}


class Store extends EventBus {
  private state: any = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated, this.getState());
  };
}

const store = new Store()

export default store
