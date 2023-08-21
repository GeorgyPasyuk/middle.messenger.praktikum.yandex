import EventBus from "./EventBus";
import set from "./set";

import Block from "./Block";
import { IState } from "@shared/store/IState";

export enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  protected state: any = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated, this.getState());
  }
}

const store = new Store();

export function withStore<SP>(mapStateToProps: (state: IState) => SP) {
  return function wrap<P>(Component: typeof Block | any) {
    return class WithStore extends Component {
      constructor(props: Omit<P, keyof SP>) {
        let previousState = mapStateToProps(store.getState());
        super({ ...(props as P), ...previousState });
        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());
          previousState = stateProps;
          this.setProps({ ...stateProps });
        });
      }
    };
  };
}

export default store;
