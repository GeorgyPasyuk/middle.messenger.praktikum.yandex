import {routes} from "./routes";
import {err404} from "../pages/errs/errs";
import footerModule from "../templates/loginModule/loginFooter/footerModule";

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findComponentByPath = (path, routes) => routes.find(r =>
    r.path.match(new RegExp(`${path}`, 'gmi')));



export const router = () => {
    const path = parseLocation();
    const {component = err404} = findComponentByPath(path, routes) || {};
    document.getElementById('app').innerHTML = component.render();
    console.log(path, routes)

}


