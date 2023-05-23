import EventBus from './EventBus';
import set from './set';
import { User } from '../api/AuthAPI';
import { ChatsInfo } from '../api/ChatsApi';
import { Message } from '../controllers/MessagesController';
import Block from './Block';



interface State {
  user: User,
  chats: ChatsInfo[];
  messages: Record<number, Message[]>,
  selectedChat?: number
}


export enum StoreEvents {
  Updated = 'updated',
}


class Store extends EventBus {
  protected state: any = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated, this.getState());
  };
}

const store = new Store()

export function withStore<SP>(mapStateToProps: (state: State) => SP) {
  return function wrap<P>(Component: typeof Block | any){
    return class WithStore extends Component {
      constructor(props: Omit<P, keyof SP>) {
        let previousState = mapStateToProps(store.getState());
        super({...(props as P), ...previousState});
        store.on(StoreEvents.Updated, ()=> {
          const stateProps = mapStateToProps(store.getState());
          previousState = stateProps;
          this.setProps({...stateProps})
        })
      }
    }
  }

}


export default store
