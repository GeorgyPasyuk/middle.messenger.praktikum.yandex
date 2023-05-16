import Block from '../utils/Block';
import Router from '../utils/Router';
import store, { StoreEvents } from '../utils/Store';


export function withRouter(Component: typeof Block) {
  type Props = any

  return class extends Component {
    constructor(props: Props & PropsWithRouter) {
      super({ ...props, router: Router });
      console.log(store.getState());
      store.on(StoreEvents.Updated, ()=> {
        this.setProps({...store.getState()})
      })
    }
  }
}

export interface PropsWithRouter {
  router: typeof Router;
}
