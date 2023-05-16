import {routes} from "./routes";
import {Error} from "../pages/Error";

const err404 = new Error()

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (path: string, routes: Array<any>) => routes.find(r =>
    r.path.match(new RegExp(`${path}`, 'gmi')));





export const router = () => {
    const path = parseLocation();
    const {component = err404} = findComponentByPath(path, routes) || {};
    document.getElementById('app')!.innerHTML = "";
    document.getElementById('app')!.append(component.getContent()!);
}

