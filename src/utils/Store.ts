import EventBus from "./EventBus";
import set from "./set";

import Block from "./Block";
import { IState } from "@shared/store/IState";
import { Handler } from "express";

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
      storeUpdateHandler: Handler | undefined;

      constructor(props: Omit<P, keyof SP>) {
        const stateProps = mapStateToProps(store.getState());

        super({ ...(props as P), ...stateProps });

        this.stateProps = stateProps;
      }

      componentDidMount() {
        this.storeUpdateHandler = () => {
          const newStateProps = mapStateToProps(store.getState());
          if (newStateProps) {
            this.stateProps = newStateProps;
            this.setProps({ ...newStateProps });
          }
        };

        store.on(StoreEvents.Updated, this.storeUpdateHandler);
      }
      _componentWillUnmount() {
        store.off(StoreEvents.Updated, this.storeUpdateHandler!);
      }

    };
  };
}

export default store;
