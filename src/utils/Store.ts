import EventBus from "./EventBus";
import set from "./set";

import Block from "./Block";
import { IState } from "@shared/store/IState";
import { Handler } from "express";
import { shallowEqual } from "@utils/shallowEqual";

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

export function withStore<SP>(
  mapStateToProps: (state: IState) => SP
): (Component: typeof Block) => any {
  return function wrap<P>(Component: typeof Block) {
    return class WithStore extends Component {
      stateProps: SP;
      storeUpdateHandler: Handler;

      constructor(props: Omit<P, keyof SP>) {
        const stateProps = mapStateToProps(store.getState());
        const storeUpdateHandler = () => {
          const newStateProps = mapStateToProps(store.getState());
          if (!shallowEqual(this.stateProps, newStateProps)) {
            this.stateProps = newStateProps;
            this.setProps({ ...newStateProps });
          }
        };

        super({ ...(props as P), ...stateProps });

        this.stateProps = stateProps;
        this.storeUpdateHandler = storeUpdateHandler.bind(this);
        store.on(StoreEvents.Updated, this.storeUpdateHandler);
      }

      _componentWillUnmount() {
        this._removeState();
      }

      _removeState() {
        store.off(StoreEvents.Updated, this.storeUpdateHandler);
      }
    };
  };
}

export default store;
