import Block from './Block';


export interface BlockConstructable<P = any> {
  new(props: P): Block<P>;
}

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}


function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`root not found by selector "${query}"`)
  }

  root.innerHTML = "";

  root.append(block.getContent()!);

  return root;
}


class Route {
  private block: Block | null = null;

  constructor(
    private pathname: string,
    private readonly blockClass: BlockConstructable,
    private readonly query: string) {
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({});
      render(this.query, this.block);
      return;
    }
  }
}



class Router {
  private routes: Route[]= [];
  private history: window.history;
  private _currentRoute: Route | null = null;
  private static __instance: Router;

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    Router.__instance = this

    this.history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  public use(pathname: string, block: BlockConstructable) {
    const route: Route = new Route(pathname, block, this.rootQuery);

    this.routes!.push(route);

    return this;
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);

    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      this._onRoute(target.location.pathname);
    }

    this._onRoute(window.location.pathname);
  }



  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }



 private getRoute(pathname: string) {
    return this.routes!.find(route => route.match(pathname));
  }
}

export default new Router('#app');
