"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(require("./Route"));
class Router {
    constructor(rootQuery) {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        Router.__instance = this;
    }
    use(pathname, block) {
        const route = new Route_1.default(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }
    start() {
        window.onpopstate = ((event) => {
            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }
        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render(route, pathname);
    }
    go(pathname) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    getRoute(pathname) {
        return this.routes.find(route => route.match(pathname));
    }
}
Router.__instance = null;
exports.default = Router;
//# sourceMappingURL=Router.js.map