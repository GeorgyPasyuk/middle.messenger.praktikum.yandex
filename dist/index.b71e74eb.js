// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3LmCz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _router = require("./utils/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _signUp = require("./pages/SignUp");
var _logIn = require("./pages/LogIn");
var _profile = require("./pages/Profile");
var _chatPage = require("./pages/ChatPage");
var _authController = require("./controllers/AuthController");
var _authControllerDefault = parcelHelpers.interopDefault(_authController);
var _startPage = require("./pages/StartPage");
let Routes;
(function(Routes) {
    Routes["Index"] = "/";
    Routes["SignUp"] = "/sign-up";
    Routes["Profile"] = "/settings";
    Routes["ChangeData"] = "/settings/changeData";
    Routes["ChangePassword"] = "/settings/changePassword";
    Routes["Messenger"] = "/messenger";
    Routes["Chat"] = "/messenger/:chatId";
    Routes["Error404"] = "/err404";
})(Routes || (Routes = {}));
window.addEventListener("DOMContentLoaded", async ()=>{
    (0, _routerDefault.default).use(Routes.Index, (0, _logIn.LogInPage)).use(Routes.SignUp, (0, _signUp.SingInPage)).use(Routes.Profile, (0, _profile.ProfilePage)).use(Routes.ChangeData, (0, _profile.ProfilePage)).use(Routes.ChangePassword, (0, _profile.ProfilePage)).use(Routes.Messenger, (0, _startPage.StartPage)).use(Routes.Chat, (0, _chatPage.ChatPage));
    let currentRoute = window.location.pathname;
    let validUser = true;
    switch(currentRoute){
        case Routes.Index:
            validUser = false;
            break;
        case Routes.SignUp:
            validUser = false;
            break;
    }
    try {
        await (0, _authControllerDefault.default).fetchUser();
        (0, _routerDefault.default).start();
        if (validUser) (0, _routerDefault.default).go(Routes.Messenger);
    } catch (e) {
        (0, _routerDefault.default).start();
        if (!validUser) (0, _routerDefault.default).go(Routes.Index);
    }
});

},{"./utils/Router":"lWot6","./pages/SignUp":"aPM5x","./pages/LogIn":"fq9cK","./pages/Profile":"dr0X8","./pages/ChatPage":"jx7Bz","./controllers/AuthController":"btuLA","./pages/StartPage":"4tfer","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lWot6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isEqual(lhs, rhs) {
    return lhs === rhs;
}
function render(query, block) {
    const root = document.querySelector(query);
    if (root === null) throw new Error(`root not found by selector "${query}"`);
    root.innerHTML = "";
    root.append(block.getContent());
    return root;
}
class Route {
    constructor(pathname, blockClass, query){
        this.pathname = pathname;
        this.blockClass = blockClass;
        this.query = query;
        this.block = null;
    }
    navigate(pathname) {
        if (this.match(pathname)) {
            this.pathname = pathname;
            this.render();
        }
    }
    leave() {
        if (this.block) this.block.hide();
        this.block = null;
    }
    match(pathname) {
        return isEqual(pathname, this.pathname);
    }
    render() {
        this.block = new this.blockClass({});
        render(this.query, this.block);
        return;
    }
}
class Router {
    constructor(rootQuery){
        this.rootQuery = rootQuery;
        this.routes = [];
        this._currentRoute = null;
        if (Router.__instance) return Router.__instance;
        this.routes = [];
        Router.__instance = this;
        this.history = window.history;
        this._currentRoute = null;
        Router.__instance = this;
    }
    use(pathname, block) {
        const route = new Route(pathname, block, this.rootQuery);
        this.routes.push(route);
        return this;
    }
    go(pathname) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }
    findRoute(pathname) {
        return this.routes.find((route)=>{
            const routePaths = route.pathname.split("/");
            const currentPaths = pathname.split("/");
            if (routePaths.length !== currentPaths.length) return false;
            const match = routePaths.every((routePath, i)=>{
                if (routePath.startsWith(":")) return true;
                return routePath === currentPaths[i];
            });
            return match;
        });
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    start() {
        window.onpopstate = (event)=>{
            const target = event.currentTarget;
            this._onRoute(target.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname) {
        const route = this.findRoute(pathname);
        if (route) {
            this._currentRoute = route;
            this._currentRoute.navigate(pathname);
        } else console.error(`Cannot find route for path: ${pathname}`);
        if (this._currentRoute && this._currentRoute !== route) this._currentRoute.leave();
        route.render();
    }
}
exports.default = new Router("#app");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aPM5x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SingInPage", ()=>SingInPage);
var _button = require("../../components/Button");
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _tplHbs = require("./tpl.hbs");
var _tplHbsDefault = parcelHelpers.interopDefault(_tplHbs);
var _signinModuleScss = require("./signin.module.scss");
var _signinModuleScssDefault = parcelHelpers.interopDefault(_signinModuleScss);
var _input = require("../../components/Input");
var _link = require("../../components/Link");
var _validation = require("../../components/Validation");
var _validation1 = require("../../utils/Validation");
var _validationDefault = parcelHelpers.interopDefault(_validation1);
var _authController = require("../../controllers/AuthController");
var _authControllerDefault = parcelHelpers.interopDefault(_authController);
let userInfo = {
    email: "",
    login: "",
    name: "",
    surname: "",
    phone: "",
    password: "",
    passwordAgain: ""
};
class SingInPage extends (0, _blockDefault.default) {
    constructor(){
        super({});
    }
    init() {
        this.children.mailInput = new (0, _input.Input)({
            name: "email",
            type: "text",
            events: {
                keydown: (e)=>{
                    userInfo.email = e.target.value;
                },
                blur: ()=>{
                    if (!(0, _validationDefault.default)(/@[\w\d]+(\.[\w\d]+)*$/, userInfo.email)) {
                        this.children.invalidMail.show();
                        userInfo.email = "";
                    } else this.children.invalidMail.hide();
                }
            }
        });
        this.children.invalidMail = new (0, _validation.Validation)({
            errName: "Пожалуйста убедитесь, что email введен корректно"
        });
        this.children.loginInput = new (0, _input.Input)({
            name: "login",
            type: "text",
            events: {
                keydown: (e)=>{
                    userInfo.login = e.target.value;
                },
                blur: ()=>{
                    if (!(0, _validationDefault.default)(/^(?!^[0-9]*$)[\w-]{3,20}$/, userInfo.login)) {
                        this.children.invalidLogin.show();
                        userInfo.login = "";
                    } else this.children.invalidLogin.hide();
                }
            }
        });
        this.children.invalidLogin = new (0, _validation.Validation)({
            errName: "Пожалуйста убедитесь, что нет спецсимволов и пробелов, минимум 4 символа"
        });
        this.children.nameInput = new (0, _input.Input)({
            name: "first_name",
            type: "text",
            events: {
                keydown: (e)=>{
                    userInfo.name = e.target.value;
                },
                blur: ()=>{
                    if (!(0, _validationDefault.default)(/^(?:[А-ЯЁ][а-яё]*|[A-Z][a-z]*)(?:-[А-ЯЁ][а-яё]*|[A-Z][a-z]*)*$/, userInfo.name)) {
                        this.children.invalidName.show();
                        userInfo.name = "";
                    } else this.children.invalidName.hide();
                }
            }
        });
        this.children.invalidName = new (0, _validation.Validation)({
            errName: "Пожалуйста убедитесь, что нет спецсимволов, пробелом и первая буква заглавная"
        });
        this.children.surnameInput = new (0, _input.Input)({
            name: "second_name",
            type: "text",
            events: {
                keydown: (e)=>{
                    userInfo.surname = e.target.value;
                },
                blur: ()=>{
                    if (!(0, _validationDefault.default)(/^(?:[А-ЯЁ][а-яё]*|[A-Z][a-z]*)(?:-[А-ЯЁ][а-яё]*|[A-Z][a-z]*)*$/, userInfo.surname)) {
                        this.children.invalidSurname.show();
                        userInfo.surname = "";
                    } else this.children.invalidSurname.hide();
                }
            }
        });
        this.children.invalidSurname = new (0, _validation.Validation)({
            errName: "Пожалуйста убедитесь, что нет спецсимволов, пробелом и первая буква заглавная"
        });
        this.children.phoneInput = new (0, _input.Input)({
            name: "phone",
            type: "text",
            events: {
                keydown: (e)=>{
                    userInfo.phone = e.target.value;
                },
                blur: ()=>{
                    if (!(0, _validationDefault.default)(/^\+?\d{10,15}$/, userInfo.phone)) {
                        this.children.invalidPhone.show();
                        userInfo.phone = "";
                    } else this.children.invalidPhone.hide();
                }
            }
        });
        this.children.invalidPhone = new (0, _validation.Validation)({
            errName: "Пожалуйста убедитесь, что телефон введён корректно"
        });
        this.children.passwordInput = new (0, _input.Input)({
            name: "password",
            type: "text",
            events: {
                keydown: (e)=>{
                    userInfo.password = e.target.value;
                },
                blur: ()=>{
                    if (!(0, _validationDefault.default)(/^(?=.*\d)(?=.*[A-Z])[\w\d]{8,40}$/, userInfo.password)) {
                        this.children.invalidPassword.show();
                        userInfo.password = "";
                    } else this.children.invalidPassword.hide();
                }
            }
        });
        this.children.invalidPassword = new (0, _validation.Validation)({
            errName: "Пожалуйста убедитесь, что пароль от 8 до 40 символов, и обязательно есть хотя бы одна заглавная буква и цифра."
        });
        this.children.passwordInputAgain = new (0, _input.Input)({
            name: "passwordagain",
            type: "text",
            events: {
                keydown: (e)=>{
                    userInfo.passwordAgain = e.target.value;
                },
                blur: ()=>{
                    if (userInfo.password !== userInfo.passwordAgain) {
                        this.children.invalidPasswordAgain.show();
                        userInfo.passwordAgain = "";
                    } else this.children.invalidPasswordAgain.hide();
                }
            }
        });
        this.children.invalidPasswordAgain = new (0, _validation.Validation)({
            errName: "Пожалуйста убедитесь, что пароли совпадают"
        });
        this.children.button = new (0, _button.Button)({
            label: "Зарегестрироваться",
            type: "submit",
            events: {
                click: (e)=>{
                    this.onSubmit();
                    e.preventDefault();
                }
            }
        });
        this.children.link = new (0, _link.Link)({
            label: "Войти",
            to: "/"
        });
    }
    onSubmit() {
        const values = Object.values(this.children).filter((child)=>child instanceof (0, _input.Input)).map((child)=>[
                child.getName(),
                child.getValue()
            ]);
        const data = Object.fromEntries(values);
        (0, _authControllerDefault.default).signup(data);
    }
    render() {
        return this.compile((0, _tplHbsDefault.default), {
            styles: (0, _signinModuleScssDefault.default),
            mailName: "Почта",
            loginName: "Логин",
            name: "Имя",
            surname: "Фамилия",
            phoneName: "Телефон",
            passwordName: "Пароль",
            passwordNameAgain: "Пароль (еще раз)"
        });
    }
}

},{"../../components/Button":"i3jlU","../../utils/Block":"915bj","./tpl.hbs":"9FFZb","./signin.module.scss":"jtmEm","../../components/Input":"iclCk","../../components/Link":"gyOYB","../../components/Validation":"eglcY","../../utils/Validation":"4S7AT","../../controllers/AuthController":"btuLA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3jlU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _buttonHbs = require("./button.hbs");
var _buttonHbsDefault = parcelHelpers.interopDefault(_buttonHbs);
var _buttonModuleScss = require("./button.module.scss");
var _buttonModuleScssDefault = parcelHelpers.interopDefault(_buttonModuleScss);
class Button extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
        if (this.props.style) this.element?.setAttribute("class", `${this.props.style}`);
    }
    render() {
        return this.compile((0, _buttonHbsDefault.default), {
            ...this.props,
            styles: (0, _buttonModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./button.hbs":"lkzvo","./button.module.scss":"23KZ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"915bj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventBus = require("./EventBus");
var _eventBusDefault = parcelHelpers.interopDefault(_eventBus);
var _nanoid = require("nanoid");
// Нельзя создавать экземпляр данного класса
class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };
    id = (0, _nanoid.nanoid)(6);
    _element = null;
    _setUpdate = false;
    /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */ constructor(propsWithChildren){
        const eventBus = new (0, _eventBusDefault.default)();
        const { props , children  } = this._getChildrenAndProps(propsWithChildren);
        this.children = children;
        this.props = this._makePropsProxy(props);
        this.eventBus = ()=>eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _getChildrenAndProps(childrenAndProps) {
        const props = {};
        const children = {};
        Object.entries(childrenAndProps).forEach(([key, value])=>{
            if (Array.isArray(value) && value.length > 0 && value.every((v)=>v instanceof Block)) children[key] = value;
            else if (value instanceof Block) children[key] = value;
            else props[key] = value;
        });
        return {
            props: props,
            children
        };
    }
    _addEvents() {
        const { events ={}  } = this.props;
        Object.keys(events).forEach((eventName)=>{
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }
    _removeEvents() {
        const { events ={}  } = this.props;
        Object.keys(events).forEach((eventName)=>{
            this._element?.removeEventListener(eventName, events[eventName]);
        });
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _init() {
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    init() {}
    _componentDidMount() {
        this.componentDidMount();
    }
    componentDidMount() {}
    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        Object.values(this.children).forEach((child)=>{
            if (Array.isArray(child)) child.forEach((ch)=>ch.dispatchComponentDidMount());
            else child.dispatchComponentDidMount();
        });
    }
    _componentDidUpdate(oldProps, newProps) {
        if (this.componentDidUpdate(oldProps, newProps)) this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidUpdate(oldProps, newProps) {
        if (oldProps !== newProps) return true;
    }
    get element() {
        return this._element;
    }
    _render() {
        const fragment = this.render();
        const newElement = fragment.firstElementChild;
        if (this._element && newElement) this._element.replaceWith(newElement);
        this._element = newElement;
        this._addEvents();
    }
    compile(template, context) {
        const contextAndStubs = {
            ...context
        };
        Object.entries(this.children).forEach(([name, component])=>{
            if (Array.isArray(component)) contextAndStubs[name] = component.map((child)=>`<div data-id="${child.id}"></div>`).join("");
            else contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
        });
        const html = template(contextAndStubs);
        const temp = document.createElement("template");
        temp.innerHTML = html;
        const replaceStub = (component)=>{
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
            if (!stub) return;
            component.getContent()?.append(...Array.from(stub.childNodes));
            stub.replaceWith(component.getContent());
        };
        Object.entries(this.children).forEach(([, component])=>{
            if (Array.isArray(component)) component.forEach(replaceStub);
            else replaceStub(component);
        });
        return temp.content;
    }
    render() {
        return new DocumentFragment();
    }
    getContent() {
        return this.element;
    }
    setProps = (nextProps)=>{
        if (!nextProps) return;
        this._setUpdate = false;
        const oldValue = {
            ...this.props
        };
        const { children , props  } = this._getChildrenAndProps(nextProps);
        if (Object.values(children).length) Object.assign(this.children, children);
        if (Object.values(props).length) Object.assign(this.props, props);
        if (this._setUpdate) {
            this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldValue, nextProps);
            this._setUpdate = false;
        }
        Object.assign(this.props, nextProps);
    };
    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get (target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set (target, prop, value) {
                if (target[prop] !== value) {
                    target[prop] = value;
                    self._setUpdate = true;
                }
                return true;
            },
            deleteProperty () {
                throw new Error("Нет доступа");
            }
        });
    }
    show() {
        this._element.style.display = "flex";
    }
    hide() {
        this._element.style.display = "none";
    }
}
exports.default = Block;

},{"./EventBus":"iVvKU","nanoid":"2ifus","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVvKU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EventBus {
    listeners = {};
    on(event, callback) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event]?.push(callback);
    }
    off(event, callback) {
        if (!this.listeners[event]) throw new Error(`Нет события: ${event}`);
        this.listeners[event] = this.listeners[event].filter((listener)=>listener !== callback);
    }
    emit(event, ...args) {
        if (!this.listeners[event]) throw new Event(`Нет события: ${event}`);
        this.listeners[event].forEach((listener)=>{
            listener(...args);
        });
    }
}
exports.default = EventBus;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ifus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>(0, _indexJs.urlAlphabet));
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "customRandom", ()=>customRandom);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
var _indexJs = require("./url-alphabet/index.js");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = "";
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || "";
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random);
let nanoid = (size = 21)=>crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte)=>{
        byte &= 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte > 62) id += "-";
        else id += "_";
        return id;
    }, "");

},{"./url-alphabet/index.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lkzvo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.escapeExpression, alias2 = depth0 != null ? depth0 : container.nullContext || {}, alias3 = container.hooks.helperMissing, alias4 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<button class="' + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "button") : stack1, depth0)) + '" type="' + alias1((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 42
                },
                "end": {
                    "line": 1,
                    "column": 52
                }
            }
        }) : helper)) + '">\r\n    ' + alias1((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 15
                }
            }
        }) : helper)) + "\r\n</button>\r\n\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0QfX":[function(require,module,exports) {
// USAGE:
// var handlebars = require('handlebars');
/* eslint-disable no-var */ // var local = handlebars.create();
var handlebars = require("785edb4d667c5523")["default"];
var printer = require("c9eeedb4a9d7484");
handlebars.PrintVisitor = printer.PrintVisitor;
handlebars.print = printer.print;
module.exports = handlebars;
// Publish a Node.js require() handler for .handlebars and .hbs files
function extension(module1, filename) {
    var fs = require("fe6fd6c9064f8542");
    var templateString = fs.readFileSync(filename, "utf8");
    module1.exports = handlebars.compile(templateString);
}
/* istanbul ignore else */ if (0, undefined) {
    undefined[".handlebars"] = extension;
    undefined[".hbs"] = extension;
}

},{"785edb4d667c5523":"56TWV","c9eeedb4a9d7484":"j0OeV","fe6fd6c9064f8542":"jhUEF"}],"56TWV":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _handlebarsRuntime = require("2f42b217348cccc6");
var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
// Compiler imports
var _handlebarsCompilerAst = require("19e94c22f847cca1");
var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
var _handlebarsCompilerBase = require("b98a9a0a210f8c05");
var _handlebarsCompilerCompiler = require("77a421c2b7426f48");
var _handlebarsCompilerJavascriptCompiler = require("56ccabd607dd1192");
var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
var _handlebarsCompilerVisitor = require("37d8885191c1c098");
var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
var _handlebarsNoConflict = require("fcc8454ea94711e5");
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
var _create = _handlebarsRuntime2["default"].create;
function create() {
    var hb = _create();
    hb.compile = function(input, options) {
        return _handlebarsCompilerCompiler.compile(input, options, hb);
    };
    hb.precompile = function(input, options) {
        return _handlebarsCompilerCompiler.precompile(input, options, hb);
    };
    hb.AST = _handlebarsCompilerAst2["default"];
    hb.Compiler = _handlebarsCompilerCompiler.Compiler;
    hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2["default"];
    hb.Parser = _handlebarsCompilerBase.parser;
    hb.parse = _handlebarsCompilerBase.parse;
    hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2["default"](inst);
inst.Visitor = _handlebarsCompilerVisitor2["default"];
inst["default"] = inst;
exports["default"] = inst;
module.exports = exports["default"];

},{"2f42b217348cccc6":"48O1v","19e94c22f847cca1":"iOlHO","b98a9a0a210f8c05":"kVun2","77a421c2b7426f48":"4Udtq","56ccabd607dd1192":"7iXdU","37d8885191c1c098":"fk5sS","fcc8454ea94711e5":"gyMyS"}],"48O1v":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var _handlebarsBase = require("4d7598a8fedf0a9e");
var base = _interopRequireWildcard(_handlebarsBase);
// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var _handlebarsSafeString = require("34bbab3a57096b08");
var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
var _handlebarsException = require("c872db74d4cebf86");
var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
var _handlebarsUtils = require("320e9d9e31100f3b");
var Utils = _interopRequireWildcard(_handlebarsUtils);
var _handlebarsRuntime = require("d5e42f7aa47d6efd");
var runtime = _interopRequireWildcard(_handlebarsRuntime);
var _handlebarsNoConflict = require("6cbdc1f23e58ef47");
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
    var hb = new base.HandlebarsEnvironment();
    Utils.extend(hb, base);
    hb.SafeString = _handlebarsSafeString2["default"];
    hb.Exception = _handlebarsException2["default"];
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;
    hb.VM = runtime;
    hb.template = function(spec) {
        return runtime.template(spec, hb);
    };
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2["default"](inst);
inst["default"] = inst;
exports["default"] = inst;
module.exports = exports["default"];

},{"4d7598a8fedf0a9e":"dt4wA","34bbab3a57096b08":"fUPg1","c872db74d4cebf86":"gO63O","320e9d9e31100f3b":"1az9o","d5e42f7aa47d6efd":"lcUM0","6cbdc1f23e58ef47":"gyMyS"}],"dt4wA":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("e397ea5650ce3170");
var _exception = require("75e2a9a455ccbae9");
var _exception2 = _interopRequireDefault(_exception);
var _helpers = require("cc1b2e645aa4af24");
var _decorators = require("cfed76f05d59bd20");
var _logger = require("3ac717e125ed50c2");
var _logger2 = _interopRequireDefault(_logger);
var _internalProtoAccess = require("ae3f2c3b97b2f11f");
var VERSION = "4.7.7";
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;
exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
    1: "<= 1.0.rc.2",
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = "[object Object]";
function HandlebarsEnvironment(helpers, partials, decorators) {
    this.helpers = helpers || {};
    this.partials = partials || {};
    this.decorators = decorators || {};
    _helpers.registerDefaultHelpers(this);
    _decorators.registerDefaultDecorators(this);
}
HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,
    logger: _logger2["default"],
    log: _logger2["default"].log,
    registerHelper: function registerHelper(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) throw new _exception2["default"]("Arg not supported with multiple helpers");
            _utils.extend(this.helpers, name);
        } else this.helpers[name] = fn;
    },
    unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
    },
    registerPartial: function registerPartial(name, partial) {
        if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
        else {
            if (typeof partial === "undefined") throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
            this.partials[name] = partial;
        }
    },
    unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
    },
    registerDecorator: function registerDecorator(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) throw new _exception2["default"]("Arg not supported with multiple decorators");
            _utils.extend(this.decorators, name);
        } else this.decorators[name] = fn;
    },
    unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
    },
    /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
        _internalProtoAccess.resetLoggedProperties();
    }
};
var log = _logger2["default"].log;
exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2["default"];

},{"e397ea5650ce3170":"1az9o","75e2a9a455ccbae9":"gO63O","cc1b2e645aa4af24":"bxbLz","cfed76f05d59bd20":"IozU1","3ac717e125ed50c2":"gqRvw","ae3f2c3b97b2f11f":"hJ0HO"}],"1az9o":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
};
var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
function escapeChar(chr) {
    return escape[chr];
}
function extend(obj /* , ...source */ ) {
    for(var i = 1; i < arguments.length; i++){
        for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
    }
    return obj;
}
var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */ var isFunction = function isFunction(value) {
    return typeof value === "function";
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
    return typeof value === "function" && toString.call(value) === "[object Function]";
};
exports.isFunction = isFunction;
/* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
    return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
};
exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function indexOf(array, value) {
    for(var i = 0, len = array.length; i < len; i++){
        if (array[i] === value) return i;
    }
    return -1;
}
function escapeExpression(string) {
    if (typeof string !== "string") {
        // don't escape SafeStrings, since they're already safe
        if (string && string.toHTML) return string.toHTML();
        else if (string == null) return "";
        else if (!string) return string + "";
        // Force a string conversion as this will be done by the append regardless and
        // the regex test will do this transparently behind the scenes, causing issues if
        // an object's to string has escaped characters in it.
        string = "" + string;
    }
    if (!possible.test(string)) return string;
    return string.replace(badChars, escapeChar);
}
function isEmpty(value) {
    if (!value && value !== 0) return true;
    else if (isArray(value) && value.length === 0) return true;
    else return false;
}
function createFrame(object) {
    var frame = extend({}, object);
    frame._parent = object;
    return frame;
}
function blockParams(params, ids) {
    params.path = ids;
    return params;
}
function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + "." : "") + id;
}

},{}],"gO63O":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var errorProps = [
    "description",
    "fileName",
    "lineNumber",
    "endLineNumber",
    "message",
    "name",
    "number",
    "stack"
];
function Exception(message, node) {
    var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
    if (loc) {
        line = loc.start.line;
        endLineNumber = loc.end.line;
        column = loc.start.column;
        endColumn = loc.end.column;
        message += " - " + line + ":" + column;
    }
    var tmp = Error.prototype.constructor.call(this, message);
    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
    /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
    try {
        if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber;
            // Work around issue under safari where we can't directly set the column value
            /* istanbul ignore next */ if (Object.defineProperty) {
                Object.defineProperty(this, "column", {
                    value: column,
                    enumerable: true
                });
                Object.defineProperty(this, "endColumn", {
                    value: endColumn,
                    enumerable: true
                });
            } else {
                this.column = column;
                this.endColumn = endColumn;
            }
        }
    } catch (nop) {
    /* Ignore if the browser is very particular */ }
}
Exception.prototype = new Error();
exports["default"] = Exception;
module.exports = exports["default"];

},{}],"bxbLz":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _helpersBlockHelperMissing = require("d73c114576d07bb9");
var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
var _helpersEach = require("a8326c3bd3c15eb3");
var _helpersEach2 = _interopRequireDefault(_helpersEach);
var _helpersHelperMissing = require("c1c182c298f86e8e");
var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
var _helpersIf = require("c245b583d015c716");
var _helpersIf2 = _interopRequireDefault(_helpersIf);
var _helpersLog = require("a984858b01fb9550");
var _helpersLog2 = _interopRequireDefault(_helpersLog);
var _helpersLookup = require("772570afc3cf1316");
var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
var _helpersWith = require("6e218f42ab4c9f30");
var _helpersWith2 = _interopRequireDefault(_helpersWith);
function registerDefaultHelpers(instance) {
    _helpersBlockHelperMissing2["default"](instance);
    _helpersEach2["default"](instance);
    _helpersHelperMissing2["default"](instance);
    _helpersIf2["default"](instance);
    _helpersLog2["default"](instance);
    _helpersLookup2["default"](instance);
    _helpersWith2["default"](instance);
}
function moveHelperToHooks(instance, helperName, keepHelper) {
    if (instance.helpers[helperName]) {
        instance.hooks[helperName] = instance.helpers[helperName];
        if (!keepHelper) delete instance.helpers[helperName];
    }
}

},{"d73c114576d07bb9":"b2Nig","a8326c3bd3c15eb3":"cxvVH","c1c182c298f86e8e":"kqALW","c245b583d015c716":"23VdI","a984858b01fb9550":"15jv3","772570afc3cf1316":"8QG3w","6e218f42ab4c9f30":"f8k9w"}],"b2Nig":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var _utils = require("1bd340636ea0012b");
exports["default"] = function(instance) {
    instance.registerHelper("blockHelperMissing", function(context, options) {
        var inverse = options.inverse, fn = options.fn;
        if (context === true) return fn(this);
        else if (context === false || context == null) return inverse(this);
        else if (_utils.isArray(context)) {
            if (context.length > 0) {
                if (options.ids) options.ids = [
                    options.name
                ];
                return instance.helpers.each(context, options);
            } else return inverse(this);
        } else {
            if (options.data && options.ids) {
                var data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                options = {
                    data: data
                };
            }
            return fn(context, options);
        }
    });
};
module.exports = exports["default"];

},{"1bd340636ea0012b":"1az9o"}],"cxvVH":[function(require,module,exports) {
var global = arguments[3];
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("72d426f884bc508c");
var _exception = require("316654eb9acb2bcf");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("each", function(context, options) {
        if (!options) throw new _exception2["default"]("Must pass iterator to #each");
        var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = undefined, contextPath = undefined;
        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
        if (_utils.isFunction(context)) context = context.call(this);
        if (options.data) data = _utils.createFrame(options.data);
        function execIteration(field, index, last) {
            if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) data.contextPath = contextPath + field;
            }
            ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([
                    context[field],
                    field
                ], [
                    contextPath + field,
                    null
                ])
            });
        }
        if (context && typeof context === "object") {
            if (_utils.isArray(context)) {
                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
            } else if (global.Symbol && context[global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[global.Symbol.iterator]();
                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                context = newContext;
                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
            } else (function() {
                var priorKey = undefined;
                Object.keys(context).forEach(function(key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                    priorKey = key;
                    i++;
                });
                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
            })();
        }
        if (i === 0) ret = inverse(this);
        return ret;
    });
};
module.exports = exports["default"];

},{"72d426f884bc508c":"1az9o","316654eb9acb2bcf":"gO63O"}],"kqALW":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("fe58abca9b770f2f");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("helperMissing", function() /* [args, ]options */ {
        if (arguments.length === 1) // A missing field in a {{foo}} construct.
        return undefined;
        else // Someone is actually trying to call something, blow up.
        throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    });
};
module.exports = exports["default"];

},{"fe58abca9b770f2f":"gO63O"}],"23VdI":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("48e311615afa117e");
var _exception = require("99e44a3ecf7be7aa");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("if", function(conditional, options) {
        if (arguments.length != 2) throw new _exception2["default"]("#if requires exactly one argument");
        if (_utils.isFunction(conditional)) conditional = conditional.call(this);
        // Default behavior is to render the positive path if the value is truthy and not empty.
        // The `includeZero` option may be set to treat the condtional as purely not empty based on the
        // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
        if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
        else return options.fn(this);
    });
    instance.registerHelper("unless", function(conditional, options) {
        if (arguments.length != 2) throw new _exception2["default"]("#unless requires exactly one argument");
        return instance.helpers["if"].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
        });
    });
};
module.exports = exports["default"];

},{"48e311615afa117e":"1az9o","99e44a3ecf7be7aa":"gO63O"}],"15jv3":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports["default"] = function(instance) {
    instance.registerHelper("log", function() /* message, options */ {
        var args = [
            undefined
        ], options = arguments[arguments.length - 1];
        for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
        var level = 1;
        if (options.hash.level != null) level = options.hash.level;
        else if (options.data && options.data.level != null) level = options.data.level;
        args[0] = level;
        instance.log.apply(instance, args);
    });
};
module.exports = exports["default"];

},{}],"8QG3w":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports["default"] = function(instance) {
    instance.registerHelper("lookup", function(obj, field, options) {
        if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
        return obj;
        return options.lookupProperty(obj, field);
    });
};
module.exports = exports["default"];

},{}],"f8k9w":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _utils = require("d3b125eb9859ac21");
var _exception = require("40cdf9ac8226cee");
var _exception2 = _interopRequireDefault(_exception);
exports["default"] = function(instance) {
    instance.registerHelper("with", function(context, options) {
        if (arguments.length != 2) throw new _exception2["default"]("#with requires exactly one argument");
        if (_utils.isFunction(context)) context = context.call(this);
        var fn = options.fn;
        if (!_utils.isEmpty(context)) {
            var data = options.data;
            if (options.data && options.ids) {
                data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }
            return fn(context, {
                data: data,
                blockParams: _utils.blockParams([
                    context
                ], [
                    data && data.contextPath
                ])
            });
        } else return options.inverse(this);
    });
};
module.exports = exports["default"];

},{"d3b125eb9859ac21":"1az9o","40cdf9ac8226cee":"gO63O"}],"IozU1":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _decoratorsInline = require("a9045180cd38ddbd");
var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
function registerDefaultDecorators(instance) {
    _decoratorsInline2["default"](instance);
}

},{"a9045180cd38ddbd":"gLVN4"}],"gLVN4":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var _utils = require("698975a179c72d8");
exports["default"] = function(instance) {
    instance.registerDecorator("inline", function(fn, props, container, options) {
        var ret = fn;
        if (!props.partials) {
            props.partials = {};
            ret = function(context, options) {
                // Create a new partials stack frame prior to exec.
                var original = container.partials;
                container.partials = _utils.extend({}, original, props.partials);
                var ret = fn(context, options);
                container.partials = original;
                return ret;
            };
        }
        props.partials[options.args[0]] = options.fn;
        return ret;
    });
};
module.exports = exports["default"];

},{"698975a179c72d8":"1az9o"}],"gqRvw":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var _utils = require("d900196c8424afb2");
var logger = {
    methodMap: [
        "debug",
        "info",
        "warn",
        "error"
    ],
    level: "info",
    // Maps a given level value to the `methodMap` indexes above.
    lookupLevel: function lookupLevel(level) {
        if (typeof level === "string") {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
            if (levelMap >= 0) level = levelMap;
            else level = parseInt(level, 10);
        }
        return level;
    },
    // Can be overridden in the host environment
    log: function log(level) {
        level = logger.lookupLevel(level);
        if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level];
            // eslint-disable-next-line no-console
            if (!console[method]) method = "log";
            for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
            console[method].apply(console, message); // eslint-disable-line no-console
        }
    }
};
exports["default"] = logger;
module.exports = exports["default"];

},{"d900196c8424afb2":"1az9o"}],"hJ0HO":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var _createNewLookupObject = require("af946d2f8d4fe512");
var _logger = require("6090d6d6f3e0dee4");
var logger = _interopRequireWildcard(_logger);
var loggedProperties = Object.create(null);
function createProtoAccessControl(runtimeOptions) {
    var defaultMethodWhiteList = Object.create(null);
    defaultMethodWhiteList["constructor"] = false;
    defaultMethodWhiteList["__defineGetter__"] = false;
    defaultMethodWhiteList["__defineSetter__"] = false;
    defaultMethodWhiteList["__lookupGetter__"] = false;
    var defaultPropertyWhiteList = Object.create(null);
    // eslint-disable-next-line no-proto
    defaultPropertyWhiteList["__proto__"] = false;
    return {
        properties: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
        },
        methods: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
        }
    };
}
function resultIsAllowed(result, protoAccessControl, propertyName) {
    if (typeof result === "function") return checkWhiteList(protoAccessControl.methods, propertyName);
    else return checkWhiteList(protoAccessControl.properties, propertyName);
}
function checkWhiteList(protoAccessControlForType, propertyName) {
    if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
    if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
    logUnexpecedPropertyAccessOnce(propertyName);
    return false;
}
function logUnexpecedPropertyAccessOnce(propertyName) {
    if (loggedProperties[propertyName] !== true) {
        loggedProperties[propertyName] = true;
        logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + "You can add a runtime option to disable the check or this warning:\n" + "See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details");
    }
}
function resetLoggedProperties() {
    Object.keys(loggedProperties).forEach(function(propertyName) {
        delete loggedProperties[propertyName];
    });
}

},{"af946d2f8d4fe512":"1UqVd","6090d6d6f3e0dee4":"gqRvw"}],"1UqVd":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.createNewLookupObject = createNewLookupObject;
var _utils = require("b8608879aa7045d9");
/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */ function createNewLookupObject() {
    for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
    return _utils.extend.apply(undefined, [
        Object.create(null)
    ].concat(sources));
}

},{"b8608879aa7045d9":"1az9o"}],"fUPg1":[function(require,module,exports) {
// Build out our basic SafeString type
"use strict";
exports.__esModule = true;
function SafeString(string) {
    this.string = string;
}
SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return "" + this.string;
};
exports["default"] = SafeString;
module.exports = exports["default"];

},{}],"lcUM0":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
var _utils = require("9c523cccce4c38fa");
var Utils = _interopRequireWildcard(_utils);
var _exception = require("2d69fbded62c9f14");
var _exception2 = _interopRequireDefault(_exception);
var _base = require("62a60a93f38ae980");
var _helpers = require("a65a5a58c3f6e471");
var _internalWrapHelper = require("dbc3d877ef038b61");
var _internalProtoAccess = require("de26c8845f51fed0");
function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
    if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
    if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
        var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
        throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
    } else // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
}
function template(templateSpec, env) {
    /* istanbul ignore next */ if (!env) throw new _exception2["default"]("No environment passed to template");
    if (!templateSpec || !templateSpec.main) throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
    templateSpec.main.decorator = templateSpec.main_d;
    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as pseudo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);
    // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
    var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
    function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
            context = Utils.extend({}, context, options.hash);
            if (options.ids) options.ids[0] = true;
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        var extendedOptions = Utils.extend({}, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
        });
        var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
        if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
        }
        if (result != null) {
            if (options.indent) {
                var lines = result.split("\n");
                for(var i = 0, l = lines.length; i < l; i++){
                    if (!lines[i] && i + 1 === l) break;
                    lines[i] = options.indent + lines[i];
                }
                result = lines.join("\n");
            }
            return result;
        } else throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
    }
    // Just add water
    var container = {
        strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
                loc: loc
            });
            return container.lookupProperty(obj, name);
        },
        lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];
            if (result == null) return result;
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
            return undefined;
        },
        lookup: function lookup(depths, name) {
            var len = depths.length;
            for(var i = 0; i < len; i++){
                var result = depths[i] && container.lookupProperty(depths[i], name);
                if (result != null) return depths[i][name];
            }
        },
        lambda: function lambda(current, context) {
            return typeof current === "function" ? current.call(context) : current;
        },
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + "_d"];
            return ret;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i], fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            return programWrapper;
        },
        data: function data(value, depth) {
            while(value && depth--)value = value._parent;
            return value;
        },
        mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;
            if (param && common && param !== common) obj = Utils.extend({}, common, param);
            return obj;
        },
        // An empty object to use as replacement for null-contexts
        nullContext: Object.seal({}),
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
    };
    function ret(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var data = options.data;
        ret._setup(options);
        if (!options.partial && templateSpec.useData) data = initData(context, data);
        var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
        if (templateSpec.useDepths) {
            if (options.depths) depths = context != options.depths[0] ? [
                context
            ].concat(options.depths) : options.depths;
            else depths = [
                context
            ];
        }
        function main(context /*, options*/ ) {
            return "" + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
        }
        main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context, options);
    }
    ret.isTop = true;
    ret._setup = function(options) {
        if (!options.partial) {
            var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
            wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;
            if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
            container.partials = container.mergeIfNeeded(options.partials, env.partials);
            if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({}, env.decorators, options.decorators);
            container.hooks = {};
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
            _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
            _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
        } else {
            container.protoAccessControl = options.protoAccessControl; // internal option
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
        }
    };
    ret._child = function(i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) throw new _exception2["default"]("must pass block params");
        if (templateSpec.useDepths && !depths) throw new _exception2["default"]("must pass parent depths");
        return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
}
function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var currentDepths = depths;
        if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
            context
        ].concat(depths);
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
            options.blockParams
        ].concat(blockParams), currentDepths);
    }
    prog = executeDecorators(fn, prog, container, depths, data, blockParams);
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
}
/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */ function resolvePartial(partial, context, options) {
    if (!partial) {
        if (options.name === "@partial-block") partial = options.data["partial-block"];
        else partial = options.partials[options.name];
    } else if (!partial.call && !options.name) {
        // This is a dynamic partial that returned a string
        options.name = partial;
        partial = options.partials[partial];
    }
    return partial;
}
function invokePartial(partial, context, options) {
    // Use the current closure context to save the partial-block if this partial
    var currentPartialBlock = options.data && options.data["partial-block"];
    options.partial = true;
    if (options.ids) options.data.contextPath = options.ids[0] || options.data.contextPath;
    var partialBlock = undefined;
    if (options.fn && options.fn !== noop) (function() {
        options.data = _base.createFrame(options.data);
        // Wrapper function to get access to currentPartialBlock from the closure
        var fn = options.fn;
        partialBlock = options.data["partial-block"] = function partialBlockWrapper(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            // Restore the partial-block from the closure for the execution of the block
            // i.e. the part inside the block of the partial call.
            options.data = _base.createFrame(options.data);
            options.data["partial-block"] = currentPartialBlock;
            return fn(context, options);
        };
        if (fn.partials) options.partials = Utils.extend({}, options.partials, fn.partials);
    })();
    if (partial === undefined && partialBlock) partial = partialBlock;
    if (partial === undefined) throw new _exception2["default"]("The partial " + options.name + " could not be found");
    else if (partial instanceof Function) return partial(context, options);
}
function noop() {
    return "";
}
function initData(context, data) {
    if (!data || !("root" in data)) {
        data = data ? _base.createFrame(data) : {};
        data.root = context;
    }
    return data;
}
function executeDecorators(fn, prog, container, depths, data, blockParams) {
    if (fn.decorator) {
        var props = {};
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        Utils.extend(prog, props);
    }
    return prog;
}
function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
    Object.keys(mergedHelpers).forEach(function(helperName) {
        var helper = mergedHelpers[helperName];
        mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
    });
}
function passLookupPropertyOption(helper, container) {
    var lookupProperty = container.lookupProperty;
    return _internalWrapHelper.wrapHelper(helper, function(options) {
        return Utils.extend({
            lookupProperty: lookupProperty
        }, options);
    });
}

},{"9c523cccce4c38fa":"1az9o","2d69fbded62c9f14":"gO63O","62a60a93f38ae980":"dt4wA","a65a5a58c3f6e471":"bxbLz","dbc3d877ef038b61":"bKEVr","de26c8845f51fed0":"hJ0HO"}],"bKEVr":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.wrapHelper = wrapHelper;
function wrapHelper(helper, transformOptionsFn) {
    if (typeof helper !== "function") // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
    var wrapper = function wrapper() /* dynamic arguments */ {
        var options = arguments[arguments.length - 1];
        arguments[arguments.length - 1] = transformOptionsFn(options);
        return helper.apply(this, arguments);
    };
    return wrapper;
}

},{}],"gyMyS":[function(require,module,exports) {
var global = arguments[3];
"use strict";
exports.__esModule = true;
exports["default"] = function(Handlebars) {
    /* istanbul ignore next */ var root = typeof global !== "undefined" ? global : window, $Handlebars = root.Handlebars;
    /* istanbul ignore next */ Handlebars.noConflict = function() {
        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
        return Handlebars;
    };
};
module.exports = exports["default"];

},{}],"iOlHO":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var AST = {
    // Public API used to evaluate derived attributes regarding AST nodes
    helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function helperExpression(node) {
            return node.type === "SubExpression" || (node.type === "MustacheStatement" || node.type === "BlockStatement") && !!(node.params && node.params.length || node.hash);
        },
        scopedId: function scopedId(path) {
            return /^\.|this\b/.test(path.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function simpleId(path) {
            return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
        }
    }
};
// Must be exported as an object rather than the root of the module as the jison lexer
// must modify the object to operate properly.
exports["default"] = AST;
module.exports = exports["default"];

},{}],"kVun2":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.parseWithoutProcessing = parseWithoutProcessing;
exports.parse = parse;
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj["default"] = obj;
        return newObj;
    }
}
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _parser = require("10bdd7154bbd925");
var _parser2 = _interopRequireDefault(_parser);
var _whitespaceControl = require("81873a53c6a88c39");
var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
var _helpers = require("230a815d98a29689");
var Helpers = _interopRequireWildcard(_helpers);
var _utils = require("578a12bfcd20e49b");
exports.parser = _parser2["default"];
var yy = {};
_utils.extend(yy, Helpers);
function parseWithoutProcessing(input, options) {
    // Just return if an already-compiled AST was passed in.
    if (input.type === "Program") return input;
    _parser2["default"].yy = yy;
    // Altering the shared object here, but this is ok as parser is a sync operation
    yy.locInfo = function(locInfo) {
        return new yy.SourceLocation(options && options.srcName, locInfo);
    };
    var ast = _parser2["default"].parse(input);
    return ast;
}
function parse(input, options) {
    var ast = parseWithoutProcessing(input, options);
    var strip = new _whitespaceControl2["default"](options);
    return strip.accept(ast);
}

},{"10bdd7154bbd925":"lu457","81873a53c6a88c39":"7ezbr","230a815d98a29689":"aNd96","578a12bfcd20e49b":"1az9o"}],"lu457":[function(require,module,exports) {
// File ignored in coverage tests via setting in .istanbul.yml
/* Jison generated parser */ "use strict";
exports.__esModule = true;
var handlebars = function() {
    var parser = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "root": 3,
            "program": 4,
            "EOF": 5,
            "program_repetition0": 6,
            "statement": 7,
            "mustache": 8,
            "block": 9,
            "rawBlock": 10,
            "partial": 11,
            "partialBlock": 12,
            "content": 13,
            "COMMENT": 14,
            "CONTENT": 15,
            "openRawBlock": 16,
            "rawBlock_repetition0": 17,
            "END_RAW_BLOCK": 18,
            "OPEN_RAW_BLOCK": 19,
            "helperName": 20,
            "openRawBlock_repetition0": 21,
            "openRawBlock_option0": 22,
            "CLOSE_RAW_BLOCK": 23,
            "openBlock": 24,
            "block_option0": 25,
            "closeBlock": 26,
            "openInverse": 27,
            "block_option1": 28,
            "OPEN_BLOCK": 29,
            "openBlock_repetition0": 30,
            "openBlock_option0": 31,
            "openBlock_option1": 32,
            "CLOSE": 33,
            "OPEN_INVERSE": 34,
            "openInverse_repetition0": 35,
            "openInverse_option0": 36,
            "openInverse_option1": 37,
            "openInverseChain": 38,
            "OPEN_INVERSE_CHAIN": 39,
            "openInverseChain_repetition0": 40,
            "openInverseChain_option0": 41,
            "openInverseChain_option1": 42,
            "inverseAndProgram": 43,
            "INVERSE": 44,
            "inverseChain": 45,
            "inverseChain_option0": 46,
            "OPEN_ENDBLOCK": 47,
            "OPEN": 48,
            "mustache_repetition0": 49,
            "mustache_option0": 50,
            "OPEN_UNESCAPED": 51,
            "mustache_repetition1": 52,
            "mustache_option1": 53,
            "CLOSE_UNESCAPED": 54,
            "OPEN_PARTIAL": 55,
            "partialName": 56,
            "partial_repetition0": 57,
            "partial_option0": 58,
            "openPartialBlock": 59,
            "OPEN_PARTIAL_BLOCK": 60,
            "openPartialBlock_repetition0": 61,
            "openPartialBlock_option0": 62,
            "param": 63,
            "sexpr": 64,
            "OPEN_SEXPR": 65,
            "sexpr_repetition0": 66,
            "sexpr_option0": 67,
            "CLOSE_SEXPR": 68,
            "hash": 69,
            "hash_repetition_plus0": 70,
            "hashSegment": 71,
            "ID": 72,
            "EQUALS": 73,
            "blockParams": 74,
            "OPEN_BLOCK_PARAMS": 75,
            "blockParams_repetition_plus0": 76,
            "CLOSE_BLOCK_PARAMS": 77,
            "path": 78,
            "dataName": 79,
            "STRING": 80,
            "NUMBER": 81,
            "BOOLEAN": 82,
            "UNDEFINED": 83,
            "NULL": 84,
            "DATA": 85,
            "pathSegments": 86,
            "SEP": 87,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            14: "COMMENT",
            15: "CONTENT",
            18: "END_RAW_BLOCK",
            19: "OPEN_RAW_BLOCK",
            23: "CLOSE_RAW_BLOCK",
            29: "OPEN_BLOCK",
            33: "CLOSE",
            34: "OPEN_INVERSE",
            39: "OPEN_INVERSE_CHAIN",
            44: "INVERSE",
            47: "OPEN_ENDBLOCK",
            48: "OPEN",
            51: "OPEN_UNESCAPED",
            54: "CLOSE_UNESCAPED",
            55: "OPEN_PARTIAL",
            60: "OPEN_PARTIAL_BLOCK",
            65: "OPEN_SEXPR",
            68: "CLOSE_SEXPR",
            72: "ID",
            73: "EQUALS",
            75: "OPEN_BLOCK_PARAMS",
            77: "CLOSE_BLOCK_PARAMS",
            80: "STRING",
            81: "NUMBER",
            82: "BOOLEAN",
            83: "UNDEFINED",
            84: "NULL",
            85: "DATA",
            87: "SEP"
        },
        productions_: [
            0,
            [
                3,
                2
            ],
            [
                4,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                13,
                1
            ],
            [
                10,
                3
            ],
            [
                16,
                5
            ],
            [
                9,
                4
            ],
            [
                9,
                4
            ],
            [
                24,
                6
            ],
            [
                27,
                6
            ],
            [
                38,
                6
            ],
            [
                43,
                2
            ],
            [
                45,
                3
            ],
            [
                45,
                1
            ],
            [
                26,
                3
            ],
            [
                8,
                5
            ],
            [
                8,
                5
            ],
            [
                11,
                5
            ],
            [
                12,
                3
            ],
            [
                59,
                5
            ],
            [
                63,
                1
            ],
            [
                63,
                1
            ],
            [
                64,
                5
            ],
            [
                69,
                1
            ],
            [
                71,
                3
            ],
            [
                74,
                3
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                56,
                1
            ],
            [
                56,
                1
            ],
            [
                79,
                2
            ],
            [
                78,
                1
            ],
            [
                86,
                3
            ],
            [
                86,
                1
            ],
            [
                6,
                0
            ],
            [
                6,
                2
            ],
            [
                17,
                0
            ],
            [
                17,
                2
            ],
            [
                21,
                0
            ],
            [
                21,
                2
            ],
            [
                22,
                0
            ],
            [
                22,
                1
            ],
            [
                25,
                0
            ],
            [
                25,
                1
            ],
            [
                28,
                0
            ],
            [
                28,
                1
            ],
            [
                30,
                0
            ],
            [
                30,
                2
            ],
            [
                31,
                0
            ],
            [
                31,
                1
            ],
            [
                32,
                0
            ],
            [
                32,
                1
            ],
            [
                35,
                0
            ],
            [
                35,
                2
            ],
            [
                36,
                0
            ],
            [
                36,
                1
            ],
            [
                37,
                0
            ],
            [
                37,
                1
            ],
            [
                40,
                0
            ],
            [
                40,
                2
            ],
            [
                41,
                0
            ],
            [
                41,
                1
            ],
            [
                42,
                0
            ],
            [
                42,
                1
            ],
            [
                46,
                0
            ],
            [
                46,
                1
            ],
            [
                49,
                0
            ],
            [
                49,
                2
            ],
            [
                50,
                0
            ],
            [
                50,
                1
            ],
            [
                52,
                0
            ],
            [
                52,
                2
            ],
            [
                53,
                0
            ],
            [
                53,
                1
            ],
            [
                57,
                0
            ],
            [
                57,
                2
            ],
            [
                58,
                0
            ],
            [
                58,
                1
            ],
            [
                61,
                0
            ],
            [
                61,
                2
            ],
            [
                62,
                0
            ],
            [
                62,
                1
            ],
            [
                66,
                0
            ],
            [
                66,
                2
            ],
            [
                67,
                0
            ],
            [
                67,
                1
            ],
            [
                70,
                1
            ],
            [
                70,
                2
            ],
            [
                76,
                1
            ],
            [
                76,
                2
            ]
        ],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch(yystate){
                case 1:
                    return $$[$0 - 1];
                case 2:
                    this.$ = yy.prepareProgram($$[$0]);
                    break;
                case 3:
                    this.$ = $$[$0];
                    break;
                case 4:
                    this.$ = $$[$0];
                    break;
                case 5:
                    this.$ = $$[$0];
                    break;
                case 6:
                    this.$ = $$[$0];
                    break;
                case 7:
                    this.$ = $$[$0];
                    break;
                case 8:
                    this.$ = $$[$0];
                    break;
                case 9:
                    this.$ = {
                        type: "CommentStatement",
                        value: yy.stripComment($$[$0]),
                        strip: yy.stripFlags($$[$0], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 10:
                    this.$ = {
                        type: "ContentStatement",
                        original: $$[$0],
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 11:
                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 12:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1]
                    };
                    break;
                case 13:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                    break;
                case 14:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                    break;
                case 15:
                    this.$ = {
                        open: $$[$0 - 5],
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 16:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 17:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 18:
                    this.$ = {
                        strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                        program: $$[$0]
                    };
                    break;
                case 19:
                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$), program = yy.prepareProgram([
                        inverse
                    ], $$[$0 - 1].loc);
                    program.chained = true;
                    this.$ = {
                        strip: $$[$0 - 2].strip,
                        program: program,
                        chain: true
                    };
                    break;
                case 20:
                    this.$ = $$[$0];
                    break;
                case 21:
                    this.$ = {
                        path: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 2], $$[$0])
                    };
                    break;
                case 22:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 23:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 24:
                    this.$ = {
                        type: "PartialStatement",
                        name: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        indent: "",
                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 25:
                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 26:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 4], $$[$0])
                    };
                    break;
                case 27:
                    this.$ = $$[$0];
                    break;
                case 28:
                    this.$ = $$[$0];
                    break;
                case 29:
                    this.$ = {
                        type: "SubExpression",
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 30:
                    this.$ = {
                        type: "Hash",
                        pairs: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 31:
                    this.$ = {
                        type: "HashPair",
                        key: yy.id($$[$0 - 2]),
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 32:
                    this.$ = yy.id($$[$0 - 1]);
                    break;
                case 33:
                    this.$ = $$[$0];
                    break;
                case 34:
                    this.$ = $$[$0];
                    break;
                case 35:
                    this.$ = {
                        type: "StringLiteral",
                        value: $$[$0],
                        original: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 36:
                    this.$ = {
                        type: "NumberLiteral",
                        value: Number($$[$0]),
                        original: Number($$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 37:
                    this.$ = {
                        type: "BooleanLiteral",
                        value: $$[$0] === "true",
                        original: $$[$0] === "true",
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 38:
                    this.$ = {
                        type: "UndefinedLiteral",
                        original: undefined,
                        value: undefined,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 39:
                    this.$ = {
                        type: "NullLiteral",
                        original: null,
                        value: null,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 40:
                    this.$ = $$[$0];
                    break;
                case 41:
                    this.$ = $$[$0];
                    break;
                case 42:
                    this.$ = yy.preparePath(true, $$[$0], this._$);
                    break;
                case 43:
                    this.$ = yy.preparePath(false, $$[$0], this._$);
                    break;
                case 44:
                    $$[$0 - 2].push({
                        part: yy.id($$[$0]),
                        original: $$[$0],
                        separator: $$[$0 - 1]
                    });
                    this.$ = $$[$0 - 2];
                    break;
                case 45:
                    this.$ = [
                        {
                            part: yy.id($$[$0]),
                            original: $$[$0]
                        }
                    ];
                    break;
                case 46:
                    this.$ = [];
                    break;
                case 47:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 48:
                    this.$ = [];
                    break;
                case 49:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 50:
                    this.$ = [];
                    break;
                case 51:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 58:
                    this.$ = [];
                    break;
                case 59:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 64:
                    this.$ = [];
                    break;
                case 65:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 70:
                    this.$ = [];
                    break;
                case 71:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 78:
                    this.$ = [];
                    break;
                case 79:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 82:
                    this.$ = [];
                    break;
                case 83:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 86:
                    this.$ = [];
                    break;
                case 87:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 90:
                    this.$ = [];
                    break;
                case 91:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 94:
                    this.$ = [];
                    break;
                case 95:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 98:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 99:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 100:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 101:
                    $$[$0 - 1].push($$[$0]);
                    break;
            }
        },
        table: [
            {
                3: 1,
                4: 2,
                5: [
                    2,
                    46
                ],
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                1: [
                    3
                ]
            },
            {
                5: [
                    1,
                    4
                ]
            },
            {
                5: [
                    2,
                    2
                ],
                7: 5,
                8: 6,
                9: 7,
                10: 8,
                11: 9,
                12: 10,
                13: 11,
                14: [
                    1,
                    12
                ],
                15: [
                    1,
                    20
                ],
                16: 17,
                19: [
                    1,
                    23
                ],
                24: 15,
                27: 16,
                29: [
                    1,
                    21
                ],
                34: [
                    1,
                    22
                ],
                39: [
                    2,
                    2
                ],
                44: [
                    2,
                    2
                ],
                47: [
                    2,
                    2
                ],
                48: [
                    1,
                    13
                ],
                51: [
                    1,
                    14
                ],
                55: [
                    1,
                    18
                ],
                59: 19,
                60: [
                    1,
                    24
                ]
            },
            {
                1: [
                    2,
                    1
                ]
            },
            {
                5: [
                    2,
                    47
                ],
                14: [
                    2,
                    47
                ],
                15: [
                    2,
                    47
                ],
                19: [
                    2,
                    47
                ],
                29: [
                    2,
                    47
                ],
                34: [
                    2,
                    47
                ],
                39: [
                    2,
                    47
                ],
                44: [
                    2,
                    47
                ],
                47: [
                    2,
                    47
                ],
                48: [
                    2,
                    47
                ],
                51: [
                    2,
                    47
                ],
                55: [
                    2,
                    47
                ],
                60: [
                    2,
                    47
                ]
            },
            {
                5: [
                    2,
                    3
                ],
                14: [
                    2,
                    3
                ],
                15: [
                    2,
                    3
                ],
                19: [
                    2,
                    3
                ],
                29: [
                    2,
                    3
                ],
                34: [
                    2,
                    3
                ],
                39: [
                    2,
                    3
                ],
                44: [
                    2,
                    3
                ],
                47: [
                    2,
                    3
                ],
                48: [
                    2,
                    3
                ],
                51: [
                    2,
                    3
                ],
                55: [
                    2,
                    3
                ],
                60: [
                    2,
                    3
                ]
            },
            {
                5: [
                    2,
                    4
                ],
                14: [
                    2,
                    4
                ],
                15: [
                    2,
                    4
                ],
                19: [
                    2,
                    4
                ],
                29: [
                    2,
                    4
                ],
                34: [
                    2,
                    4
                ],
                39: [
                    2,
                    4
                ],
                44: [
                    2,
                    4
                ],
                47: [
                    2,
                    4
                ],
                48: [
                    2,
                    4
                ],
                51: [
                    2,
                    4
                ],
                55: [
                    2,
                    4
                ],
                60: [
                    2,
                    4
                ]
            },
            {
                5: [
                    2,
                    5
                ],
                14: [
                    2,
                    5
                ],
                15: [
                    2,
                    5
                ],
                19: [
                    2,
                    5
                ],
                29: [
                    2,
                    5
                ],
                34: [
                    2,
                    5
                ],
                39: [
                    2,
                    5
                ],
                44: [
                    2,
                    5
                ],
                47: [
                    2,
                    5
                ],
                48: [
                    2,
                    5
                ],
                51: [
                    2,
                    5
                ],
                55: [
                    2,
                    5
                ],
                60: [
                    2,
                    5
                ]
            },
            {
                5: [
                    2,
                    6
                ],
                14: [
                    2,
                    6
                ],
                15: [
                    2,
                    6
                ],
                19: [
                    2,
                    6
                ],
                29: [
                    2,
                    6
                ],
                34: [
                    2,
                    6
                ],
                39: [
                    2,
                    6
                ],
                44: [
                    2,
                    6
                ],
                47: [
                    2,
                    6
                ],
                48: [
                    2,
                    6
                ],
                51: [
                    2,
                    6
                ],
                55: [
                    2,
                    6
                ],
                60: [
                    2,
                    6
                ]
            },
            {
                5: [
                    2,
                    7
                ],
                14: [
                    2,
                    7
                ],
                15: [
                    2,
                    7
                ],
                19: [
                    2,
                    7
                ],
                29: [
                    2,
                    7
                ],
                34: [
                    2,
                    7
                ],
                39: [
                    2,
                    7
                ],
                44: [
                    2,
                    7
                ],
                47: [
                    2,
                    7
                ],
                48: [
                    2,
                    7
                ],
                51: [
                    2,
                    7
                ],
                55: [
                    2,
                    7
                ],
                60: [
                    2,
                    7
                ]
            },
            {
                5: [
                    2,
                    8
                ],
                14: [
                    2,
                    8
                ],
                15: [
                    2,
                    8
                ],
                19: [
                    2,
                    8
                ],
                29: [
                    2,
                    8
                ],
                34: [
                    2,
                    8
                ],
                39: [
                    2,
                    8
                ],
                44: [
                    2,
                    8
                ],
                47: [
                    2,
                    8
                ],
                48: [
                    2,
                    8
                ],
                51: [
                    2,
                    8
                ],
                55: [
                    2,
                    8
                ],
                60: [
                    2,
                    8
                ]
            },
            {
                5: [
                    2,
                    9
                ],
                14: [
                    2,
                    9
                ],
                15: [
                    2,
                    9
                ],
                19: [
                    2,
                    9
                ],
                29: [
                    2,
                    9
                ],
                34: [
                    2,
                    9
                ],
                39: [
                    2,
                    9
                ],
                44: [
                    2,
                    9
                ],
                47: [
                    2,
                    9
                ],
                48: [
                    2,
                    9
                ],
                51: [
                    2,
                    9
                ],
                55: [
                    2,
                    9
                ],
                60: [
                    2,
                    9
                ]
            },
            {
                20: 25,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 36,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 37,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                4: 38,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                15: [
                    2,
                    48
                ],
                17: 39,
                18: [
                    2,
                    48
                ]
            },
            {
                20: 41,
                56: 40,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 44,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                5: [
                    2,
                    10
                ],
                14: [
                    2,
                    10
                ],
                15: [
                    2,
                    10
                ],
                18: [
                    2,
                    10
                ],
                19: [
                    2,
                    10
                ],
                29: [
                    2,
                    10
                ],
                34: [
                    2,
                    10
                ],
                39: [
                    2,
                    10
                ],
                44: [
                    2,
                    10
                ],
                47: [
                    2,
                    10
                ],
                48: [
                    2,
                    10
                ],
                51: [
                    2,
                    10
                ],
                55: [
                    2,
                    10
                ],
                60: [
                    2,
                    10
                ]
            },
            {
                20: 45,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 46,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 47,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 41,
                56: 48,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    2,
                    78
                ],
                49: 49,
                65: [
                    2,
                    78
                ],
                72: [
                    2,
                    78
                ],
                80: [
                    2,
                    78
                ],
                81: [
                    2,
                    78
                ],
                82: [
                    2,
                    78
                ],
                83: [
                    2,
                    78
                ],
                84: [
                    2,
                    78
                ],
                85: [
                    2,
                    78
                ]
            },
            {
                23: [
                    2,
                    33
                ],
                33: [
                    2,
                    33
                ],
                54: [
                    2,
                    33
                ],
                65: [
                    2,
                    33
                ],
                68: [
                    2,
                    33
                ],
                72: [
                    2,
                    33
                ],
                75: [
                    2,
                    33
                ],
                80: [
                    2,
                    33
                ],
                81: [
                    2,
                    33
                ],
                82: [
                    2,
                    33
                ],
                83: [
                    2,
                    33
                ],
                84: [
                    2,
                    33
                ],
                85: [
                    2,
                    33
                ]
            },
            {
                23: [
                    2,
                    34
                ],
                33: [
                    2,
                    34
                ],
                54: [
                    2,
                    34
                ],
                65: [
                    2,
                    34
                ],
                68: [
                    2,
                    34
                ],
                72: [
                    2,
                    34
                ],
                75: [
                    2,
                    34
                ],
                80: [
                    2,
                    34
                ],
                81: [
                    2,
                    34
                ],
                82: [
                    2,
                    34
                ],
                83: [
                    2,
                    34
                ],
                84: [
                    2,
                    34
                ],
                85: [
                    2,
                    34
                ]
            },
            {
                23: [
                    2,
                    35
                ],
                33: [
                    2,
                    35
                ],
                54: [
                    2,
                    35
                ],
                65: [
                    2,
                    35
                ],
                68: [
                    2,
                    35
                ],
                72: [
                    2,
                    35
                ],
                75: [
                    2,
                    35
                ],
                80: [
                    2,
                    35
                ],
                81: [
                    2,
                    35
                ],
                82: [
                    2,
                    35
                ],
                83: [
                    2,
                    35
                ],
                84: [
                    2,
                    35
                ],
                85: [
                    2,
                    35
                ]
            },
            {
                23: [
                    2,
                    36
                ],
                33: [
                    2,
                    36
                ],
                54: [
                    2,
                    36
                ],
                65: [
                    2,
                    36
                ],
                68: [
                    2,
                    36
                ],
                72: [
                    2,
                    36
                ],
                75: [
                    2,
                    36
                ],
                80: [
                    2,
                    36
                ],
                81: [
                    2,
                    36
                ],
                82: [
                    2,
                    36
                ],
                83: [
                    2,
                    36
                ],
                84: [
                    2,
                    36
                ],
                85: [
                    2,
                    36
                ]
            },
            {
                23: [
                    2,
                    37
                ],
                33: [
                    2,
                    37
                ],
                54: [
                    2,
                    37
                ],
                65: [
                    2,
                    37
                ],
                68: [
                    2,
                    37
                ],
                72: [
                    2,
                    37
                ],
                75: [
                    2,
                    37
                ],
                80: [
                    2,
                    37
                ],
                81: [
                    2,
                    37
                ],
                82: [
                    2,
                    37
                ],
                83: [
                    2,
                    37
                ],
                84: [
                    2,
                    37
                ],
                85: [
                    2,
                    37
                ]
            },
            {
                23: [
                    2,
                    38
                ],
                33: [
                    2,
                    38
                ],
                54: [
                    2,
                    38
                ],
                65: [
                    2,
                    38
                ],
                68: [
                    2,
                    38
                ],
                72: [
                    2,
                    38
                ],
                75: [
                    2,
                    38
                ],
                80: [
                    2,
                    38
                ],
                81: [
                    2,
                    38
                ],
                82: [
                    2,
                    38
                ],
                83: [
                    2,
                    38
                ],
                84: [
                    2,
                    38
                ],
                85: [
                    2,
                    38
                ]
            },
            {
                23: [
                    2,
                    39
                ],
                33: [
                    2,
                    39
                ],
                54: [
                    2,
                    39
                ],
                65: [
                    2,
                    39
                ],
                68: [
                    2,
                    39
                ],
                72: [
                    2,
                    39
                ],
                75: [
                    2,
                    39
                ],
                80: [
                    2,
                    39
                ],
                81: [
                    2,
                    39
                ],
                82: [
                    2,
                    39
                ],
                83: [
                    2,
                    39
                ],
                84: [
                    2,
                    39
                ],
                85: [
                    2,
                    39
                ]
            },
            {
                23: [
                    2,
                    43
                ],
                33: [
                    2,
                    43
                ],
                54: [
                    2,
                    43
                ],
                65: [
                    2,
                    43
                ],
                68: [
                    2,
                    43
                ],
                72: [
                    2,
                    43
                ],
                75: [
                    2,
                    43
                ],
                80: [
                    2,
                    43
                ],
                81: [
                    2,
                    43
                ],
                82: [
                    2,
                    43
                ],
                83: [
                    2,
                    43
                ],
                84: [
                    2,
                    43
                ],
                85: [
                    2,
                    43
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                72: [
                    1,
                    35
                ],
                86: 51
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                52: 52,
                54: [
                    2,
                    82
                ],
                65: [
                    2,
                    82
                ],
                72: [
                    2,
                    82
                ],
                80: [
                    2,
                    82
                ],
                81: [
                    2,
                    82
                ],
                82: [
                    2,
                    82
                ],
                83: [
                    2,
                    82
                ],
                84: [
                    2,
                    82
                ],
                85: [
                    2,
                    82
                ]
            },
            {
                25: 53,
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 54,
                47: [
                    2,
                    54
                ]
            },
            {
                28: 59,
                43: 60,
                44: [
                    1,
                    58
                ],
                47: [
                    2,
                    56
                ]
            },
            {
                13: 62,
                15: [
                    1,
                    20
                ],
                18: [
                    1,
                    61
                ]
            },
            {
                33: [
                    2,
                    86
                ],
                57: 63,
                65: [
                    2,
                    86
                ],
                72: [
                    2,
                    86
                ],
                80: [
                    2,
                    86
                ],
                81: [
                    2,
                    86
                ],
                82: [
                    2,
                    86
                ],
                83: [
                    2,
                    86
                ],
                84: [
                    2,
                    86
                ],
                85: [
                    2,
                    86
                ]
            },
            {
                33: [
                    2,
                    40
                ],
                65: [
                    2,
                    40
                ],
                72: [
                    2,
                    40
                ],
                80: [
                    2,
                    40
                ],
                81: [
                    2,
                    40
                ],
                82: [
                    2,
                    40
                ],
                83: [
                    2,
                    40
                ],
                84: [
                    2,
                    40
                ],
                85: [
                    2,
                    40
                ]
            },
            {
                33: [
                    2,
                    41
                ],
                65: [
                    2,
                    41
                ],
                72: [
                    2,
                    41
                ],
                80: [
                    2,
                    41
                ],
                81: [
                    2,
                    41
                ],
                82: [
                    2,
                    41
                ],
                83: [
                    2,
                    41
                ],
                84: [
                    2,
                    41
                ],
                85: [
                    2,
                    41
                ]
            },
            {
                20: 64,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 65,
                47: [
                    1,
                    66
                ]
            },
            {
                30: 67,
                33: [
                    2,
                    58
                ],
                65: [
                    2,
                    58
                ],
                72: [
                    2,
                    58
                ],
                75: [
                    2,
                    58
                ],
                80: [
                    2,
                    58
                ],
                81: [
                    2,
                    58
                ],
                82: [
                    2,
                    58
                ],
                83: [
                    2,
                    58
                ],
                84: [
                    2,
                    58
                ],
                85: [
                    2,
                    58
                ]
            },
            {
                33: [
                    2,
                    64
                ],
                35: 68,
                65: [
                    2,
                    64
                ],
                72: [
                    2,
                    64
                ],
                75: [
                    2,
                    64
                ],
                80: [
                    2,
                    64
                ],
                81: [
                    2,
                    64
                ],
                82: [
                    2,
                    64
                ],
                83: [
                    2,
                    64
                ],
                84: [
                    2,
                    64
                ],
                85: [
                    2,
                    64
                ]
            },
            {
                21: 69,
                23: [
                    2,
                    50
                ],
                65: [
                    2,
                    50
                ],
                72: [
                    2,
                    50
                ],
                80: [
                    2,
                    50
                ],
                81: [
                    2,
                    50
                ],
                82: [
                    2,
                    50
                ],
                83: [
                    2,
                    50
                ],
                84: [
                    2,
                    50
                ],
                85: [
                    2,
                    50
                ]
            },
            {
                33: [
                    2,
                    90
                ],
                61: 70,
                65: [
                    2,
                    90
                ],
                72: [
                    2,
                    90
                ],
                80: [
                    2,
                    90
                ],
                81: [
                    2,
                    90
                ],
                82: [
                    2,
                    90
                ],
                83: [
                    2,
                    90
                ],
                84: [
                    2,
                    90
                ],
                85: [
                    2,
                    90
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    80
                ],
                50: 71,
                63: 72,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 73,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                72: [
                    1,
                    79
                ]
            },
            {
                23: [
                    2,
                    42
                ],
                33: [
                    2,
                    42
                ],
                54: [
                    2,
                    42
                ],
                65: [
                    2,
                    42
                ],
                68: [
                    2,
                    42
                ],
                72: [
                    2,
                    42
                ],
                75: [
                    2,
                    42
                ],
                80: [
                    2,
                    42
                ],
                81: [
                    2,
                    42
                ],
                82: [
                    2,
                    42
                ],
                83: [
                    2,
                    42
                ],
                84: [
                    2,
                    42
                ],
                85: [
                    2,
                    42
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                20: 74,
                53: 80,
                54: [
                    2,
                    84
                ],
                63: 81,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 82,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 83,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    55
                ]
            },
            {
                4: 84,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                47: [
                    2,
                    20
                ]
            },
            {
                20: 85,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 86,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                26: 87,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    57
                ]
            },
            {
                5: [
                    2,
                    11
                ],
                14: [
                    2,
                    11
                ],
                15: [
                    2,
                    11
                ],
                19: [
                    2,
                    11
                ],
                29: [
                    2,
                    11
                ],
                34: [
                    2,
                    11
                ],
                39: [
                    2,
                    11
                ],
                44: [
                    2,
                    11
                ],
                47: [
                    2,
                    11
                ],
                48: [
                    2,
                    11
                ],
                51: [
                    2,
                    11
                ],
                55: [
                    2,
                    11
                ],
                60: [
                    2,
                    11
                ]
            },
            {
                15: [
                    2,
                    49
                ],
                18: [
                    2,
                    49
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    88
                ],
                58: 88,
                63: 89,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 90,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                65: [
                    2,
                    94
                ],
                66: 91,
                68: [
                    2,
                    94
                ],
                72: [
                    2,
                    94
                ],
                80: [
                    2,
                    94
                ],
                81: [
                    2,
                    94
                ],
                82: [
                    2,
                    94
                ],
                83: [
                    2,
                    94
                ],
                84: [
                    2,
                    94
                ],
                85: [
                    2,
                    94
                ]
            },
            {
                5: [
                    2,
                    25
                ],
                14: [
                    2,
                    25
                ],
                15: [
                    2,
                    25
                ],
                19: [
                    2,
                    25
                ],
                29: [
                    2,
                    25
                ],
                34: [
                    2,
                    25
                ],
                39: [
                    2,
                    25
                ],
                44: [
                    2,
                    25
                ],
                47: [
                    2,
                    25
                ],
                48: [
                    2,
                    25
                ],
                51: [
                    2,
                    25
                ],
                55: [
                    2,
                    25
                ],
                60: [
                    2,
                    25
                ]
            },
            {
                20: 92,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                31: 93,
                33: [
                    2,
                    60
                ],
                63: 94,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 95,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    60
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    66
                ],
                36: 96,
                63: 97,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 98,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    66
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                22: 99,
                23: [
                    2,
                    52
                ],
                63: 100,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 101,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    92
                ],
                62: 102,
                63: 103,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 104,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    105
                ]
            },
            {
                33: [
                    2,
                    79
                ],
                65: [
                    2,
                    79
                ],
                72: [
                    2,
                    79
                ],
                80: [
                    2,
                    79
                ],
                81: [
                    2,
                    79
                ],
                82: [
                    2,
                    79
                ],
                83: [
                    2,
                    79
                ],
                84: [
                    2,
                    79
                ],
                85: [
                    2,
                    79
                ]
            },
            {
                33: [
                    2,
                    81
                ]
            },
            {
                23: [
                    2,
                    27
                ],
                33: [
                    2,
                    27
                ],
                54: [
                    2,
                    27
                ],
                65: [
                    2,
                    27
                ],
                68: [
                    2,
                    27
                ],
                72: [
                    2,
                    27
                ],
                75: [
                    2,
                    27
                ],
                80: [
                    2,
                    27
                ],
                81: [
                    2,
                    27
                ],
                82: [
                    2,
                    27
                ],
                83: [
                    2,
                    27
                ],
                84: [
                    2,
                    27
                ],
                85: [
                    2,
                    27
                ]
            },
            {
                23: [
                    2,
                    28
                ],
                33: [
                    2,
                    28
                ],
                54: [
                    2,
                    28
                ],
                65: [
                    2,
                    28
                ],
                68: [
                    2,
                    28
                ],
                72: [
                    2,
                    28
                ],
                75: [
                    2,
                    28
                ],
                80: [
                    2,
                    28
                ],
                81: [
                    2,
                    28
                ],
                82: [
                    2,
                    28
                ],
                83: [
                    2,
                    28
                ],
                84: [
                    2,
                    28
                ],
                85: [
                    2,
                    28
                ]
            },
            {
                23: [
                    2,
                    30
                ],
                33: [
                    2,
                    30
                ],
                54: [
                    2,
                    30
                ],
                68: [
                    2,
                    30
                ],
                71: 106,
                72: [
                    1,
                    107
                ],
                75: [
                    2,
                    30
                ]
            },
            {
                23: [
                    2,
                    98
                ],
                33: [
                    2,
                    98
                ],
                54: [
                    2,
                    98
                ],
                68: [
                    2,
                    98
                ],
                72: [
                    2,
                    98
                ],
                75: [
                    2,
                    98
                ]
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                73: [
                    1,
                    108
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                23: [
                    2,
                    44
                ],
                33: [
                    2,
                    44
                ],
                54: [
                    2,
                    44
                ],
                65: [
                    2,
                    44
                ],
                68: [
                    2,
                    44
                ],
                72: [
                    2,
                    44
                ],
                75: [
                    2,
                    44
                ],
                80: [
                    2,
                    44
                ],
                81: [
                    2,
                    44
                ],
                82: [
                    2,
                    44
                ],
                83: [
                    2,
                    44
                ],
                84: [
                    2,
                    44
                ],
                85: [
                    2,
                    44
                ],
                87: [
                    2,
                    44
                ]
            },
            {
                54: [
                    1,
                    109
                ]
            },
            {
                54: [
                    2,
                    83
                ],
                65: [
                    2,
                    83
                ],
                72: [
                    2,
                    83
                ],
                80: [
                    2,
                    83
                ],
                81: [
                    2,
                    83
                ],
                82: [
                    2,
                    83
                ],
                83: [
                    2,
                    83
                ],
                84: [
                    2,
                    83
                ],
                85: [
                    2,
                    83
                ]
            },
            {
                54: [
                    2,
                    85
                ]
            },
            {
                5: [
                    2,
                    13
                ],
                14: [
                    2,
                    13
                ],
                15: [
                    2,
                    13
                ],
                19: [
                    2,
                    13
                ],
                29: [
                    2,
                    13
                ],
                34: [
                    2,
                    13
                ],
                39: [
                    2,
                    13
                ],
                44: [
                    2,
                    13
                ],
                47: [
                    2,
                    13
                ],
                48: [
                    2,
                    13
                ],
                51: [
                    2,
                    13
                ],
                55: [
                    2,
                    13
                ],
                60: [
                    2,
                    13
                ]
            },
            {
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 111,
                46: 110,
                47: [
                    2,
                    76
                ]
            },
            {
                33: [
                    2,
                    70
                ],
                40: 112,
                65: [
                    2,
                    70
                ],
                72: [
                    2,
                    70
                ],
                75: [
                    2,
                    70
                ],
                80: [
                    2,
                    70
                ],
                81: [
                    2,
                    70
                ],
                82: [
                    2,
                    70
                ],
                83: [
                    2,
                    70
                ],
                84: [
                    2,
                    70
                ],
                85: [
                    2,
                    70
                ]
            },
            {
                47: [
                    2,
                    18
                ]
            },
            {
                5: [
                    2,
                    14
                ],
                14: [
                    2,
                    14
                ],
                15: [
                    2,
                    14
                ],
                19: [
                    2,
                    14
                ],
                29: [
                    2,
                    14
                ],
                34: [
                    2,
                    14
                ],
                39: [
                    2,
                    14
                ],
                44: [
                    2,
                    14
                ],
                47: [
                    2,
                    14
                ],
                48: [
                    2,
                    14
                ],
                51: [
                    2,
                    14
                ],
                55: [
                    2,
                    14
                ],
                60: [
                    2,
                    14
                ]
            },
            {
                33: [
                    1,
                    113
                ]
            },
            {
                33: [
                    2,
                    87
                ],
                65: [
                    2,
                    87
                ],
                72: [
                    2,
                    87
                ],
                80: [
                    2,
                    87
                ],
                81: [
                    2,
                    87
                ],
                82: [
                    2,
                    87
                ],
                83: [
                    2,
                    87
                ],
                84: [
                    2,
                    87
                ],
                85: [
                    2,
                    87
                ]
            },
            {
                33: [
                    2,
                    89
                ]
            },
            {
                20: 74,
                63: 115,
                64: 75,
                65: [
                    1,
                    43
                ],
                67: 114,
                68: [
                    2,
                    96
                ],
                69: 116,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    117
                ]
            },
            {
                32: 118,
                33: [
                    2,
                    62
                ],
                74: 119,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    59
                ],
                65: [
                    2,
                    59
                ],
                72: [
                    2,
                    59
                ],
                75: [
                    2,
                    59
                ],
                80: [
                    2,
                    59
                ],
                81: [
                    2,
                    59
                ],
                82: [
                    2,
                    59
                ],
                83: [
                    2,
                    59
                ],
                84: [
                    2,
                    59
                ],
                85: [
                    2,
                    59
                ]
            },
            {
                33: [
                    2,
                    61
                ],
                75: [
                    2,
                    61
                ]
            },
            {
                33: [
                    2,
                    68
                ],
                37: 121,
                74: 122,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    65
                ],
                65: [
                    2,
                    65
                ],
                72: [
                    2,
                    65
                ],
                75: [
                    2,
                    65
                ],
                80: [
                    2,
                    65
                ],
                81: [
                    2,
                    65
                ],
                82: [
                    2,
                    65
                ],
                83: [
                    2,
                    65
                ],
                84: [
                    2,
                    65
                ],
                85: [
                    2,
                    65
                ]
            },
            {
                33: [
                    2,
                    67
                ],
                75: [
                    2,
                    67
                ]
            },
            {
                23: [
                    1,
                    123
                ]
            },
            {
                23: [
                    2,
                    51
                ],
                65: [
                    2,
                    51
                ],
                72: [
                    2,
                    51
                ],
                80: [
                    2,
                    51
                ],
                81: [
                    2,
                    51
                ],
                82: [
                    2,
                    51
                ],
                83: [
                    2,
                    51
                ],
                84: [
                    2,
                    51
                ],
                85: [
                    2,
                    51
                ]
            },
            {
                23: [
                    2,
                    53
                ]
            },
            {
                33: [
                    1,
                    124
                ]
            },
            {
                33: [
                    2,
                    91
                ],
                65: [
                    2,
                    91
                ],
                72: [
                    2,
                    91
                ],
                80: [
                    2,
                    91
                ],
                81: [
                    2,
                    91
                ],
                82: [
                    2,
                    91
                ],
                83: [
                    2,
                    91
                ],
                84: [
                    2,
                    91
                ],
                85: [
                    2,
                    91
                ]
            },
            {
                33: [
                    2,
                    93
                ]
            },
            {
                5: [
                    2,
                    22
                ],
                14: [
                    2,
                    22
                ],
                15: [
                    2,
                    22
                ],
                19: [
                    2,
                    22
                ],
                29: [
                    2,
                    22
                ],
                34: [
                    2,
                    22
                ],
                39: [
                    2,
                    22
                ],
                44: [
                    2,
                    22
                ],
                47: [
                    2,
                    22
                ],
                48: [
                    2,
                    22
                ],
                51: [
                    2,
                    22
                ],
                55: [
                    2,
                    22
                ],
                60: [
                    2,
                    22
                ]
            },
            {
                23: [
                    2,
                    99
                ],
                33: [
                    2,
                    99
                ],
                54: [
                    2,
                    99
                ],
                68: [
                    2,
                    99
                ],
                72: [
                    2,
                    99
                ],
                75: [
                    2,
                    99
                ]
            },
            {
                73: [
                    1,
                    108
                ]
            },
            {
                20: 74,
                63: 125,
                64: 75,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    23
                ],
                14: [
                    2,
                    23
                ],
                15: [
                    2,
                    23
                ],
                19: [
                    2,
                    23
                ],
                29: [
                    2,
                    23
                ],
                34: [
                    2,
                    23
                ],
                39: [
                    2,
                    23
                ],
                44: [
                    2,
                    23
                ],
                47: [
                    2,
                    23
                ],
                48: [
                    2,
                    23
                ],
                51: [
                    2,
                    23
                ],
                55: [
                    2,
                    23
                ],
                60: [
                    2,
                    23
                ]
            },
            {
                47: [
                    2,
                    19
                ]
            },
            {
                47: [
                    2,
                    77
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    72
                ],
                41: 126,
                63: 127,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 128,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    72
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    24
                ],
                14: [
                    2,
                    24
                ],
                15: [
                    2,
                    24
                ],
                19: [
                    2,
                    24
                ],
                29: [
                    2,
                    24
                ],
                34: [
                    2,
                    24
                ],
                39: [
                    2,
                    24
                ],
                44: [
                    2,
                    24
                ],
                47: [
                    2,
                    24
                ],
                48: [
                    2,
                    24
                ],
                51: [
                    2,
                    24
                ],
                55: [
                    2,
                    24
                ],
                60: [
                    2,
                    24
                ]
            },
            {
                68: [
                    1,
                    129
                ]
            },
            {
                65: [
                    2,
                    95
                ],
                68: [
                    2,
                    95
                ],
                72: [
                    2,
                    95
                ],
                80: [
                    2,
                    95
                ],
                81: [
                    2,
                    95
                ],
                82: [
                    2,
                    95
                ],
                83: [
                    2,
                    95
                ],
                84: [
                    2,
                    95
                ],
                85: [
                    2,
                    95
                ]
            },
            {
                68: [
                    2,
                    97
                ]
            },
            {
                5: [
                    2,
                    21
                ],
                14: [
                    2,
                    21
                ],
                15: [
                    2,
                    21
                ],
                19: [
                    2,
                    21
                ],
                29: [
                    2,
                    21
                ],
                34: [
                    2,
                    21
                ],
                39: [
                    2,
                    21
                ],
                44: [
                    2,
                    21
                ],
                47: [
                    2,
                    21
                ],
                48: [
                    2,
                    21
                ],
                51: [
                    2,
                    21
                ],
                55: [
                    2,
                    21
                ],
                60: [
                    2,
                    21
                ]
            },
            {
                33: [
                    1,
                    130
                ]
            },
            {
                33: [
                    2,
                    63
                ]
            },
            {
                72: [
                    1,
                    132
                ],
                76: 131
            },
            {
                33: [
                    1,
                    133
                ]
            },
            {
                33: [
                    2,
                    69
                ]
            },
            {
                15: [
                    2,
                    12
                ],
                18: [
                    2,
                    12
                ]
            },
            {
                14: [
                    2,
                    26
                ],
                15: [
                    2,
                    26
                ],
                19: [
                    2,
                    26
                ],
                29: [
                    2,
                    26
                ],
                34: [
                    2,
                    26
                ],
                47: [
                    2,
                    26
                ],
                48: [
                    2,
                    26
                ],
                51: [
                    2,
                    26
                ],
                55: [
                    2,
                    26
                ],
                60: [
                    2,
                    26
                ]
            },
            {
                23: [
                    2,
                    31
                ],
                33: [
                    2,
                    31
                ],
                54: [
                    2,
                    31
                ],
                68: [
                    2,
                    31
                ],
                72: [
                    2,
                    31
                ],
                75: [
                    2,
                    31
                ]
            },
            {
                33: [
                    2,
                    74
                ],
                42: 134,
                74: 135,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    71
                ],
                65: [
                    2,
                    71
                ],
                72: [
                    2,
                    71
                ],
                75: [
                    2,
                    71
                ],
                80: [
                    2,
                    71
                ],
                81: [
                    2,
                    71
                ],
                82: [
                    2,
                    71
                ],
                83: [
                    2,
                    71
                ],
                84: [
                    2,
                    71
                ],
                85: [
                    2,
                    71
                ]
            },
            {
                33: [
                    2,
                    73
                ],
                75: [
                    2,
                    73
                ]
            },
            {
                23: [
                    2,
                    29
                ],
                33: [
                    2,
                    29
                ],
                54: [
                    2,
                    29
                ],
                65: [
                    2,
                    29
                ],
                68: [
                    2,
                    29
                ],
                72: [
                    2,
                    29
                ],
                75: [
                    2,
                    29
                ],
                80: [
                    2,
                    29
                ],
                81: [
                    2,
                    29
                ],
                82: [
                    2,
                    29
                ],
                83: [
                    2,
                    29
                ],
                84: [
                    2,
                    29
                ],
                85: [
                    2,
                    29
                ]
            },
            {
                14: [
                    2,
                    15
                ],
                15: [
                    2,
                    15
                ],
                19: [
                    2,
                    15
                ],
                29: [
                    2,
                    15
                ],
                34: [
                    2,
                    15
                ],
                39: [
                    2,
                    15
                ],
                44: [
                    2,
                    15
                ],
                47: [
                    2,
                    15
                ],
                48: [
                    2,
                    15
                ],
                51: [
                    2,
                    15
                ],
                55: [
                    2,
                    15
                ],
                60: [
                    2,
                    15
                ]
            },
            {
                72: [
                    1,
                    137
                ],
                77: [
                    1,
                    136
                ]
            },
            {
                72: [
                    2,
                    100
                ],
                77: [
                    2,
                    100
                ]
            },
            {
                14: [
                    2,
                    16
                ],
                15: [
                    2,
                    16
                ],
                19: [
                    2,
                    16
                ],
                29: [
                    2,
                    16
                ],
                34: [
                    2,
                    16
                ],
                44: [
                    2,
                    16
                ],
                47: [
                    2,
                    16
                ],
                48: [
                    2,
                    16
                ],
                51: [
                    2,
                    16
                ],
                55: [
                    2,
                    16
                ],
                60: [
                    2,
                    16
                ]
            },
            {
                33: [
                    1,
                    138
                ]
            },
            {
                33: [
                    2,
                    75
                ]
            },
            {
                33: [
                    2,
                    32
                ]
            },
            {
                72: [
                    2,
                    101
                ],
                77: [
                    2,
                    101
                ]
            },
            {
                14: [
                    2,
                    17
                ],
                15: [
                    2,
                    17
                ],
                19: [
                    2,
                    17
                ],
                29: [
                    2,
                    17
                ],
                34: [
                    2,
                    17
                ],
                39: [
                    2,
                    17
                ],
                44: [
                    2,
                    17
                ],
                47: [
                    2,
                    17
                ],
                48: [
                    2,
                    17
                ],
                51: [
                    2,
                    17
                ],
                55: [
                    2,
                    17
                ],
                60: [
                    2,
                    17
                ]
            }
        ],
        defaultActions: {
            4: [
                2,
                1
            ],
            54: [
                2,
                55
            ],
            56: [
                2,
                20
            ],
            60: [
                2,
                57
            ],
            73: [
                2,
                81
            ],
            82: [
                2,
                85
            ],
            86: [
                2,
                18
            ],
            90: [
                2,
                89
            ],
            101: [
                2,
                53
            ],
            104: [
                2,
                93
            ],
            110: [
                2,
                19
            ],
            111: [
                2,
                77
            ],
            116: [
                2,
                97
            ],
            119: [
                2,
                63
            ],
            122: [
                2,
                69
            ],
            135: [
                2,
                75
            ],
            136: [
                2,
                32
            ]
        },
        parseError: function parseError(str, hash) {
            throw new Error(str);
        },
        parse: function parse(input) {
            var self = this, stack = [
                0
            ], vstack = [
                null
            ], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            var ranges = this.lexer.options && this.lexer.options.ranges;
            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number") token = self.symbols_[token] || token;
                return token;
            }
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while(true){
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) action = this.defaultActions[state];
                else {
                    if (symbol === null || typeof symbol == "undefined") symbol = lex();
                    action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                    var errStr = "";
                    if (!recovering) {
                        expected = [];
                        for(p in table[state])if (this.terminals_[p] && p > 2) expected.push("'" + this.terminals_[p] + "'");
                        if (this.lexer.showPosition) errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        else errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                        this.parseError(errStr, {
                            text: this.lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: this.lexer.yylineno,
                            loc: yyloc,
                            expected: expected
                        });
                    }
                }
                if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                switch(action[0]){
                    case 1:
                        stack.push(symbol);
                        vstack.push(this.lexer.yytext);
                        lstack.push(this.lexer.yylloc);
                        stack.push(action[1]);
                        symbol = null;
                        if (!preErrorSymbol) {
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            if (recovering > 0) recovering--;
                        } else {
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        len = this.productions_[action[1]][1];
                        yyval.$ = vstack[vstack.length - len];
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) yyval._$.range = [
                            lstack[lstack.length - (len || 1)].range[0],
                            lstack[lstack.length - 1].range[1]
                        ];
                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                        if (typeof r !== "undefined") return r;
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]);
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }
    };
    /* Jison generated lexer */ var lexer = function() {
        var lexer = {
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) this.yy.parser.parseError(str, hash);
                else throw new Error(str);
            },
            setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = "";
                this.conditionStack = [
                    "INITIAL"
                ];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) this.yylloc.range = [
                    0,
                    0
                ];
                this.offset = 0;
                return this;
            },
            input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                } else this.yylloc.last_column++;
                if (this.options.ranges) this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
            },
            unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };
                if (this.options.ranges) this.yylloc.range = [
                    r[0],
                    r[0] + this.yyleng - len
                ];
                return this;
            },
            more: function more() {
                this._more = true;
                return this;
            },
            less: function less(n) {
                this.unput(this.match.slice(n));
            },
            pastInput: function pastInput() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20) next += this._input.substr(0, 20 - next.length);
                return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function next() {
                if (this.done) return this.EOF;
                if (!this._input) this.done = true;
                var token, match, tempMatch, index, col, lines;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                var rules = this._currentRules();
                for(var i = 0; i < rules.length; i++){
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (!this.options.flex) break;
                    }
                }
                if (match) {
                    lines = match[0].match(/(?:\r\n?|\n).*/g);
                    if (lines) this.yylineno += lines.length;
                    this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                    };
                    this.yytext += match[0];
                    this.match += match[0];
                    this.matches = match;
                    this.yyleng = this.yytext.length;
                    if (this.options.ranges) this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                    this._more = false;
                    this._input = this._input.slice(match[0].length);
                    this.matched += match[0];
                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                    if (this.done && this._input) this.done = false;
                    if (token) return token;
                    else return;
                }
                if (this._input === "") return this.EOF;
                else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            },
            lex: function lex() {
                var r = this.next();
                if (typeof r !== "undefined") return r;
                else return this.lex();
            },
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            popState: function popState() {
                return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
                this.begin(condition);
            }
        };
        lexer.options = {};
        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
            function strip(start, end) {
                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
            }
            var YYSTATE = YY_START;
            switch($avoiding_name_collisions){
                case 0:
                    if (yy_.yytext.slice(-2) === "\\\\") {
                        strip(0, 1);
                        this.begin("mu");
                    } else if (yy_.yytext.slice(-1) === "\\") {
                        strip(0, 1);
                        this.begin("emu");
                    } else this.begin("mu");
                    if (yy_.yytext) return 15;
                    break;
                case 1:
                    return 15;
                case 2:
                    this.popState();
                    return 15;
                case 3:
                    this.begin("raw");
                    return 15;
                case 4:
                    this.popState();
                    // Should be using `this.topState()` below, but it currently
                    // returns the second top instead of the first top. Opened an
                    // issue about it at https://github.com/zaach/jison/issues/291
                    if (this.conditionStack[this.conditionStack.length - 1] === "raw") return 15;
                    else {
                        strip(5, 9);
                        return "END_RAW_BLOCK";
                    }
                    break;
                case 5:
                    return 15;
                case 6:
                    this.popState();
                    return 14;
                case 7:
                    return 65;
                case 8:
                    return 68;
                case 9:
                    return 19;
                case 10:
                    this.popState();
                    this.begin("raw");
                    return 23;
                case 11:
                    return 55;
                case 12:
                    return 60;
                case 13:
                    return 29;
                case 14:
                    return 47;
                case 15:
                    this.popState();
                    return 44;
                case 16:
                    this.popState();
                    return 44;
                case 17:
                    return 34;
                case 18:
                    return 39;
                case 19:
                    return 51;
                case 20:
                    return 48;
                case 21:
                    this.unput(yy_.yytext);
                    this.popState();
                    this.begin("com");
                    break;
                case 22:
                    this.popState();
                    return 14;
                case 23:
                    return 48;
                case 24:
                    return 73;
                case 25:
                    return 72;
                case 26:
                    return 72;
                case 27:
                    return 87;
                case 28:
                    break;
                case 29:
                    this.popState();
                    return 54;
                case 30:
                    this.popState();
                    return 33;
                case 31:
                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                    return 80;
                case 32:
                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                    return 80;
                case 33:
                    return 85;
                case 34:
                    return 82;
                case 35:
                    return 82;
                case 36:
                    return 83;
                case 37:
                    return 84;
                case 38:
                    return 81;
                case 39:
                    return 75;
                case 40:
                    return 77;
                case 41:
                    return 72;
                case 42:
                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, "$1");
                    return 72;
                case 43:
                    return "INVALID";
                case 44:
                    return 5;
            }
        };
        lexer.rules = [
            /^(?:[^\x00]*?(?=(\{\{)))/,
            /^(?:[^\x00]+)/,
            /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
            /^(?:\{\{\{\{(?=[^\/]))/,
            /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
            /^(?:[^\x00]+?(?=(\{\{\{\{)))/,
            /^(?:[\s\S]*?--(~)?\}\})/,
            /^(?:\()/,
            /^(?:\))/,
            /^(?:\{\{\{\{)/,
            /^(?:\}\}\}\})/,
            /^(?:\{\{(~)?>)/,
            /^(?:\{\{(~)?#>)/,
            /^(?:\{\{(~)?#\*?)/,
            /^(?:\{\{(~)?\/)/,
            /^(?:\{\{(~)?\^\s*(~)?\}\})/,
            /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
            /^(?:\{\{(~)?\^)/,
            /^(?:\{\{(~)?\s*else\b)/,
            /^(?:\{\{(~)?\{)/,
            /^(?:\{\{(~)?&)/,
            /^(?:\{\{(~)?!--)/,
            /^(?:\{\{(~)?![\s\S]*?\}\})/,
            /^(?:\{\{(~)?\*?)/,
            /^(?:=)/,
            /^(?:\.\.)/,
            /^(?:\.(?=([=~}\s\/.)|])))/,
            /^(?:[\/.])/,
            /^(?:\s+)/,
            /^(?:\}(~)?\}\})/,
            /^(?:(~)?\}\})/,
            /^(?:"(\\["]|[^"])*")/,
            /^(?:'(\\[']|[^'])*')/,
            /^(?:@)/,
            /^(?:true(?=([~}\s)])))/,
            /^(?:false(?=([~}\s)])))/,
            /^(?:undefined(?=([~}\s)])))/,
            /^(?:null(?=([~}\s)])))/,
            /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
            /^(?:as\s+\|)/,
            /^(?:\|)/,
            /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
            /^(?:\[(\\\]|[^\]])*\])/,
            /^(?:.)/,
            /^(?:$)/
        ];
        lexer.conditions = {
            "mu": {
                "rules": [
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    32,
                    33,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44
                ],
                "inclusive": false
            },
            "emu": {
                "rules": [
                    2
                ],
                "inclusive": false
            },
            "com": {
                "rules": [
                    6
                ],
                "inclusive": false
            },
            "raw": {
                "rules": [
                    3,
                    4,
                    5
                ],
                "inclusive": false
            },
            "INITIAL": {
                "rules": [
                    0,
                    1,
                    44
                ],
                "inclusive": true
            }
        };
        return lexer;
    }();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser();
}();
exports["default"] = handlebars;
module.exports = exports["default"];

},{}],"7ezbr":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _visitor = require("8f88196f52848152");
var _visitor2 = _interopRequireDefault(_visitor);
function WhitespaceControl() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    this.options = options;
}
WhitespaceControl.prototype = new _visitor2["default"]();
WhitespaceControl.prototype.Program = function(program) {
    var doStandalone = !this.options.ignoreStandalone;
    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;
    var body = program.body;
    for(var i = 0, l = body.length; i < l; i++){
        var current = body[i], strip = this.accept(current);
        if (!strip) continue;
        var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot), _isNextWhitespace = isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
        if (strip.close) omitRight(body, i, true);
        if (strip.open) omitLeft(body, i, true);
        if (doStandalone && inlineStandalone) {
            omitRight(body, i);
            if (omitLeft(body, i)) // If we are on a standalone node, save the indent info for partials
            {
                if (current.type === "PartialStatement") // Pull out the whitespace from the final line
                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
            }
        }
        if (doStandalone && openStandalone) {
            omitRight((current.program || current.inverse).body);
            // Strip out the previous content node if it's whitespace only
            omitLeft(body, i);
        }
        if (doStandalone && closeStandalone) {
            // Always strip the next node
            omitRight(body, i);
            omitLeft((current.inverse || current.program).body);
        }
    }
    return program;
};
WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
    this.accept(block.program);
    this.accept(block.inverse);
    // Find the inverse program that is involed with whitespace stripping.
    var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
    if (inverse && inverse.chained) {
        firstInverse = inverse.body[0].program;
        // Walk the inverse chain to find the last inverse that is actually in the chain.
        while(lastInverse.chained)lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
    }
    var strip = {
        open: block.openStrip.open,
        close: block.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: isNextWhitespace(program.body),
        closeStandalone: isPrevWhitespace((firstInverse || program).body)
    };
    if (block.openStrip.close) omitRight(program.body, null, true);
    if (inverse) {
        var inverseStrip = block.inverseStrip;
        if (inverseStrip.open) omitLeft(program.body, null, true);
        if (inverseStrip.close) omitRight(firstInverse.body, null, true);
        if (block.closeStrip.open) omitLeft(lastInverse.body, null, true);
        // Find standalone else statments
        if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
            omitLeft(program.body);
            omitRight(firstInverse.body);
        }
    } else if (block.closeStrip.open) omitLeft(program.body, null, true);
    return strip;
};
WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
    return mustache.strip;
};
WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
    /* istanbul ignore next */ var strip = node.strip || {};
    return {
        inlineStandalone: true,
        open: strip.open,
        close: strip.close
    };
};
function isPrevWhitespace(body, i, isRoot) {
    if (i === undefined) i = body.length;
    // Nodes that end with newlines are considered whitespace (but are special
    // cased for strip operations)
    var prev = body[i - 1], sibling = body[i - 2];
    if (!prev) return isRoot;
    if (prev.type === "ContentStatement") return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
}
function isNextWhitespace(body, i, isRoot) {
    if (i === undefined) i = -1;
    var next = body[i + 1], sibling = body[i + 2];
    if (!next) return isRoot;
    if (next.type === "ContentStatement") return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
}
// Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== "ContentStatement" || !multiple && current.rightStripped) return;
    var original = current.value;
    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, "");
    current.rightStripped = current.value !== original;
}
// Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== "ContentStatement" || !multiple && current.leftStripped) return;
    // We omit the last node if it's whitespace only and not preceded by a non-content node.
    var original = current.value;
    current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, "");
    current.leftStripped = current.value !== original;
    return current.leftStripped;
}
exports["default"] = WhitespaceControl;
module.exports = exports["default"];

},{"8f88196f52848152":"fk5sS"}],"fk5sS":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("a487e7fee11f2310");
var _exception2 = _interopRequireDefault(_exception);
function Visitor() {
    this.parents = [];
}
Visitor.prototype = {
    constructor: Visitor,
    mutating: false,
    // Visits a given value. If mutating, will replace the value if necessary.
    acceptKey: function acceptKey(node, name) {
        var value = this.accept(node[name]);
        if (this.mutating) {
            // Hacky sanity check: This may have a few false positives for type for the helper
            // methods but will generally do the right thing without a lot of overhead.
            if (value && !Visitor.prototype[value.type]) throw new _exception2["default"]('Unexpected node type "' + value.type + '" found when accepting ' + name + " on " + node.type);
            node[name] = value;
        }
    },
    // Performs an accept operation with added sanity check to ensure
    // required keys are not removed.
    acceptRequired: function acceptRequired(node, name) {
        this.acceptKey(node, name);
        if (!node[name]) throw new _exception2["default"](node.type + " requires " + name);
    },
    // Traverses a given array. If mutating, empty respnses will be removed
    // for child elements.
    acceptArray: function acceptArray(array) {
        for(var i = 0, l = array.length; i < l; i++){
            this.acceptKey(array, i);
            if (!array[i]) {
                array.splice(i, 1);
                i--;
                l--;
            }
        }
    },
    accept: function accept(object) {
        if (!object) return;
        /* istanbul ignore next: Sanity code */ if (!this[object.type]) throw new _exception2["default"]("Unknown type: " + object.type, object);
        if (this.current) this.parents.unshift(this.current);
        this.current = object;
        var ret = this[object.type](object);
        this.current = this.parents.shift();
        if (!this.mutating || ret) return ret;
        else if (ret !== false) return object;
    },
    Program: function Program(program) {
        this.acceptArray(program.body);
    },
    MustacheStatement: visitSubExpression,
    Decorator: visitSubExpression,
    BlockStatement: visitBlock,
    DecoratorBlock: visitBlock,
    PartialStatement: visitPartial,
    PartialBlockStatement: function PartialBlockStatement(partial) {
        visitPartial.call(this, partial);
        this.acceptKey(partial, "program");
    },
    ContentStatement: function ContentStatement() /* content */ {},
    CommentStatement: function CommentStatement() /* comment */ {},
    SubExpression: visitSubExpression,
    PathExpression: function PathExpression() /* path */ {},
    StringLiteral: function StringLiteral() /* string */ {},
    NumberLiteral: function NumberLiteral() /* number */ {},
    BooleanLiteral: function BooleanLiteral() /* bool */ {},
    UndefinedLiteral: function UndefinedLiteral() /* literal */ {},
    NullLiteral: function NullLiteral() /* literal */ {},
    Hash: function Hash(hash) {
        this.acceptArray(hash.pairs);
    },
    HashPair: function HashPair(pair) {
        this.acceptRequired(pair, "value");
    }
};
function visitSubExpression(mustache) {
    this.acceptRequired(mustache, "path");
    this.acceptArray(mustache.params);
    this.acceptKey(mustache, "hash");
}
function visitBlock(block) {
    visitSubExpression.call(this, block);
    this.acceptKey(block, "program");
    this.acceptKey(block, "inverse");
}
function visitPartial(partial) {
    this.acceptRequired(partial, "name");
    this.acceptArray(partial.params);
    this.acceptKey(partial, "hash");
}
exports["default"] = Visitor;
module.exports = exports["default"];

},{"a487e7fee11f2310":"gO63O"}],"aNd96":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.SourceLocation = SourceLocation;
exports.id = id;
exports.stripFlags = stripFlags;
exports.stripComment = stripComment;
exports.preparePath = preparePath;
exports.prepareMustache = prepareMustache;
exports.prepareRawBlock = prepareRawBlock;
exports.prepareBlock = prepareBlock;
exports.prepareProgram = prepareProgram;
exports.preparePartialBlock = preparePartialBlock;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("69819e8262429de5");
var _exception2 = _interopRequireDefault(_exception);
function validateClose(open, close) {
    close = close.path ? close.path.original : close;
    if (open.path.original !== close) {
        var errorNode = {
            loc: open.path.loc
        };
        throw new _exception2["default"](open.path.original + " doesn't match " + close, errorNode);
    }
}
function SourceLocation(source, locInfo) {
    this.source = source;
    this.start = {
        line: locInfo.first_line,
        column: locInfo.first_column
    };
    this.end = {
        line: locInfo.last_line,
        column: locInfo.last_column
    };
}
function id(token) {
    if (/^\[.*\]$/.test(token)) return token.substring(1, token.length - 1);
    else return token;
}
function stripFlags(open, close) {
    return {
        open: open.charAt(2) === "~",
        close: close.charAt(close.length - 3) === "~"
    };
}
function stripComment(comment) {
    return comment.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
}
function preparePath(data, parts, loc) {
    loc = this.locInfo(loc);
    var original = data ? "@" : "", dig = [], depth = 0;
    for(var i = 0, l = parts.length; i < l; i++){
        var part = parts[i].part, // If we have [] syntax then we do not treat path references as operators,
        // i.e. foo.[this] resolves to approximately context.foo['this']
        isLiteral = parts[i].original !== part;
        original += (parts[i].separator || "") + part;
        if (!isLiteral && (part === ".." || part === "." || part === "this")) {
            if (dig.length > 0) throw new _exception2["default"]("Invalid path: " + original, {
                loc: loc
            });
            else if (part === "..") depth++;
        } else dig.push(part);
    }
    return {
        type: "PathExpression",
        data: data,
        depth: depth,
        parts: dig,
        original: original,
        loc: loc
    };
}
function prepareMustache(path, params, hash, open, strip, locInfo) {
    // Must use charAt to support IE pre-10
    var escapeFlag = open.charAt(3) || open.charAt(2), escaped = escapeFlag !== "{" && escapeFlag !== "&";
    var decorator = /\*/.test(open);
    return {
        type: decorator ? "Decorator" : "MustacheStatement",
        path: path,
        params: params,
        hash: hash,
        escaped: escaped,
        strip: strip,
        loc: this.locInfo(locInfo)
    };
}
function prepareRawBlock(openRawBlock, contents, close, locInfo) {
    validateClose(openRawBlock, close);
    locInfo = this.locInfo(locInfo);
    var program = {
        type: "Program",
        body: contents,
        strip: {},
        loc: locInfo
    };
    return {
        type: "BlockStatement",
        path: openRawBlock.path,
        params: openRawBlock.params,
        hash: openRawBlock.hash,
        program: program,
        openStrip: {},
        inverseStrip: {},
        closeStrip: {},
        loc: locInfo
    };
}
function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
    if (close && close.path) validateClose(openBlock, close);
    var decorator = /\*/.test(openBlock.open);
    program.blockParams = openBlock.blockParams;
    var inverse = undefined, inverseStrip = undefined;
    if (inverseAndProgram) {
        if (decorator) throw new _exception2["default"]("Unexpected inverse block on decorator", inverseAndProgram);
        if (inverseAndProgram.chain) inverseAndProgram.program.body[0].closeStrip = close.strip;
        inverseStrip = inverseAndProgram.strip;
        inverse = inverseAndProgram.program;
    }
    if (inverted) {
        inverted = inverse;
        inverse = program;
        program = inverted;
    }
    return {
        type: decorator ? "DecoratorBlock" : "BlockStatement",
        path: openBlock.path,
        params: openBlock.params,
        hash: openBlock.hash,
        program: program,
        inverse: inverse,
        openStrip: openBlock.strip,
        inverseStrip: inverseStrip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}
function prepareProgram(statements, loc) {
    if (!loc && statements.length) {
        var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
        /* istanbul ignore else */ if (firstLoc && lastLoc) loc = {
            source: firstLoc.source,
            start: {
                line: firstLoc.start.line,
                column: firstLoc.start.column
            },
            end: {
                line: lastLoc.end.line,
                column: lastLoc.end.column
            }
        };
    }
    return {
        type: "Program",
        body: statements,
        strip: {},
        loc: loc
    };
}
function preparePartialBlock(open, program, close, locInfo) {
    validateClose(open, close);
    return {
        type: "PartialBlockStatement",
        name: open.path,
        params: open.params,
        hash: open.hash,
        program: program,
        openStrip: open.strip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}

},{"69819e8262429de5":"gO63O"}],"4Udtq":[function(require,module,exports) {
/* eslint-disable new-cap */ "use strict";
exports.__esModule = true;
exports.Compiler = Compiler;
exports.precompile = precompile;
exports.compile = compile;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _exception = require("152bb9095dd89868");
var _exception2 = _interopRequireDefault(_exception);
var _utils = require("a2f08e0f13855c73");
var _ast = require("edd0280bc8d20e45");
var _ast2 = _interopRequireDefault(_ast);
var slice = [].slice;
function Compiler() {}
// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.
Compiler.prototype = {
    compiler: Compiler,
    equals: function equals(other) {
        var len = this.opcodes.length;
        if (other.opcodes.length !== len) return false;
        for(var i = 0; i < len; i++){
            var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
            if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) return false;
        }
        // We know that length is the same between the two arrays because they are directly tied
        // to the opcode behavior above.
        len = this.children.length;
        for(var i = 0; i < len; i++){
            if (!this.children[i].equals(other.children[i])) return false;
        }
        return true;
    },
    guid: 0,
    compile: function compile(program, options) {
        this.sourceNode = [];
        this.opcodes = [];
        this.children = [];
        this.options = options;
        this.stringParams = options.stringParams;
        this.trackIds = options.trackIds;
        options.blockParams = options.blockParams || [];
        options.knownHelpers = _utils.extend(Object.create(null), {
            helperMissing: true,
            blockHelperMissing: true,
            each: true,
            "if": true,
            unless: true,
            "with": true,
            log: true,
            lookup: true
        }, options.knownHelpers);
        return this.accept(program);
    },
    compileProgram: function compileProgram(program) {
        var childCompiler = new this.compiler(), // eslint-disable-line new-cap
        result = childCompiler.compile(program, this.options), guid = this.guid++;
        this.usePartial = this.usePartial || result.usePartial;
        this.children[guid] = result;
        this.useDepths = this.useDepths || result.useDepths;
        return guid;
    },
    accept: function accept(node) {
        /* istanbul ignore next: Sanity code */ if (!this[node.type]) throw new _exception2["default"]("Unknown type: " + node.type, node);
        this.sourceNode.unshift(node);
        var ret = this[node.type](node);
        this.sourceNode.shift();
        return ret;
    },
    Program: function Program(program) {
        this.options.blockParams.unshift(program.blockParams);
        var body = program.body, bodyLength = body.length;
        for(var i = 0; i < bodyLength; i++)this.accept(body[i]);
        this.options.blockParams.shift();
        this.isSimple = bodyLength === 1;
        this.blockParams = program.blockParams ? program.blockParams.length : 0;
        return this;
    },
    BlockStatement: function BlockStatement(block) {
        transformLiteralToPath(block);
        var program = block.program, inverse = block.inverse;
        program = program && this.compileProgram(program);
        inverse = inverse && this.compileProgram(inverse);
        var type = this.classifySexpr(block);
        if (type === "helper") this.helperSexpr(block, program, inverse);
        else if (type === "simple") {
            this.simpleSexpr(block);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("blockValue", block.path.original);
        } else {
            this.ambiguousSexpr(block, program, inverse);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("ambiguousBlockValue");
        }
        this.opcode("append");
    },
    DecoratorBlock: function DecoratorBlock(decorator) {
        var program = decorator.program && this.compileProgram(decorator.program);
        var params = this.setupFullMustacheParams(decorator, program, undefined), path = decorator.path;
        this.useDecorators = true;
        this.opcode("registerDecorator", params.length, path.original);
    },
    PartialStatement: function PartialStatement(partial) {
        this.usePartial = true;
        var program = partial.program;
        if (program) program = this.compileProgram(partial.program);
        var params = partial.params;
        if (params.length > 1) throw new _exception2["default"]("Unsupported number of partial arguments: " + params.length, partial);
        else if (!params.length) {
            if (this.options.explicitPartialContext) this.opcode("pushLiteral", "undefined");
            else params.push({
                type: "PathExpression",
                parts: [],
                depth: 0
            });
        }
        var partialName = partial.name.original, isDynamic = partial.name.type === "SubExpression";
        if (isDynamic) this.accept(partial.name);
        this.setupFullMustacheParams(partial, program, undefined, true);
        var indent = partial.indent || "";
        if (this.options.preventIndent && indent) {
            this.opcode("appendContent", indent);
            indent = "";
        }
        this.opcode("invokePartial", isDynamic, partialName, indent);
        this.opcode("append");
    },
    PartialBlockStatement: function PartialBlockStatement(partialBlock) {
        this.PartialStatement(partialBlock);
    },
    MustacheStatement: function MustacheStatement(mustache) {
        this.SubExpression(mustache);
        if (mustache.escaped && !this.options.noEscape) this.opcode("appendEscaped");
        else this.opcode("append");
    },
    Decorator: function Decorator(decorator) {
        this.DecoratorBlock(decorator);
    },
    ContentStatement: function ContentStatement(content) {
        if (content.value) this.opcode("appendContent", content.value);
    },
    CommentStatement: function CommentStatement() {},
    SubExpression: function SubExpression(sexpr) {
        transformLiteralToPath(sexpr);
        var type = this.classifySexpr(sexpr);
        if (type === "simple") this.simpleSexpr(sexpr);
        else if (type === "helper") this.helperSexpr(sexpr);
        else this.ambiguousSexpr(sexpr);
    },
    ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
        var path = sexpr.path, name = path.parts[0], isBlock = program != null || inverse != null;
        this.opcode("getContext", path.depth);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        path.strict = true;
        this.accept(path);
        this.opcode("invokeAmbiguous", name, isBlock);
    },
    simpleSexpr: function simpleSexpr(sexpr) {
        var path = sexpr.path;
        path.strict = true;
        this.accept(path);
        this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function helperSexpr(sexpr, program, inverse) {
        var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name = path.parts[0];
        if (this.options.knownHelpers[name]) this.opcode("invokeKnownHelper", params.length, name);
        else if (this.options.knownHelpersOnly) throw new _exception2["default"]("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
        else {
            path.strict = true;
            path.falsy = true;
            this.accept(path);
            this.opcode("invokeHelper", params.length, path.original, _ast2["default"].helpers.simpleId(path));
        }
    },
    PathExpression: function PathExpression(path) {
        this.addDepth(path.depth);
        this.opcode("getContext", path.depth);
        var name = path.parts[0], scoped = _ast2["default"].helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
        if (blockParamId) this.opcode("lookupBlockParam", blockParamId, path.parts);
        else if (!name) // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
        this.opcode("pushContext");
        else if (path.data) {
            this.options.data = true;
            this.opcode("lookupData", path.depth, path.parts, path.strict);
        } else this.opcode("lookupOnContext", path.parts, path.falsy, path.strict, scoped);
    },
    StringLiteral: function StringLiteral(string) {
        this.opcode("pushString", string.value);
    },
    NumberLiteral: function NumberLiteral(number) {
        this.opcode("pushLiteral", number.value);
    },
    BooleanLiteral: function BooleanLiteral(bool) {
        this.opcode("pushLiteral", bool.value);
    },
    UndefinedLiteral: function UndefinedLiteral() {
        this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function NullLiteral() {
        this.opcode("pushLiteral", "null");
    },
    Hash: function Hash(hash) {
        var pairs = hash.pairs, i = 0, l = pairs.length;
        this.opcode("pushHash");
        for(; i < l; i++)this.pushParam(pairs[i].value);
        while(i--)this.opcode("assignToHash", pairs[i].key);
        this.opcode("popHash");
    },
    // HELPERS
    opcode: function opcode(name) {
        this.opcodes.push({
            opcode: name,
            args: slice.call(arguments, 1),
            loc: this.sourceNode[0].loc
        });
    },
    addDepth: function addDepth(depth) {
        if (!depth) return;
        this.useDepths = true;
    },
    classifySexpr: function classifySexpr(sexpr) {
        var isSimple = _ast2["default"].helpers.simpleId(sexpr.path);
        var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
        // a mustache is an eligible helper if:
        // * its id is simple (a single part, not `this` or `..`)
        var isHelper = !isBlockParam && _ast2["default"].helpers.helperExpression(sexpr);
        // if a mustache is an eligible helper but not a definite
        // helper, it is ambiguous, and will be resolved in a later
        // pass or at runtime.
        var isEligible = !isBlockParam && (isHelper || isSimple);
        // if ambiguous, we can possibly resolve the ambiguity now
        // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
        if (isEligible && !isHelper) {
            var _name = sexpr.path.parts[0], options = this.options;
            if (options.knownHelpers[_name]) isHelper = true;
            else if (options.knownHelpersOnly) isEligible = false;
        }
        if (isHelper) return "helper";
        else if (isEligible) return "ambiguous";
        else return "simple";
    },
    pushParams: function pushParams(params) {
        for(var i = 0, l = params.length; i < l; i++)this.pushParam(params[i]);
    },
    pushParam: function pushParam(val) {
        var value = val.value != null ? val.value : val.original || "";
        if (this.stringParams) {
            if (value.replace) value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".");
            if (val.depth) this.addDepth(val.depth);
            this.opcode("getContext", val.depth || 0);
            this.opcode("pushStringParam", value, val.type);
            if (val.type === "SubExpression") // SubExpressions get evaluated and passed in
            // in string params mode.
            this.accept(val);
        } else {
            if (this.trackIds) {
                var blockParamIndex = undefined;
                if (val.parts && !_ast2["default"].helpers.scopedId(val) && !val.depth) blockParamIndex = this.blockParamIndex(val.parts[0]);
                if (blockParamIndex) {
                    var blockParamChild = val.parts.slice(1).join(".");
                    this.opcode("pushId", "BlockParam", blockParamIndex, blockParamChild);
                } else {
                    value = val.original || value;
                    if (value.replace) value = value.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "");
                    this.opcode("pushId", val.type, value);
                }
            }
            this.accept(val);
        }
    },
    setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
        var params = sexpr.params;
        this.pushParams(params);
        this.opcode("pushProgram", program);
        this.opcode("pushProgram", inverse);
        if (sexpr.hash) this.accept(sexpr.hash);
        else this.opcode("emptyHash", omitEmpty);
        return params;
    },
    blockParamIndex: function blockParamIndex(name) {
        for(var depth = 0, len = this.options.blockParams.length; depth < len; depth++){
            var blockParams = this.options.blockParams[depth], param = blockParams && _utils.indexOf(blockParams, name);
            if (blockParams && param >= 0) return [
                depth,
                param
            ];
        }
    }
};
function precompile(input, options, env) {
    if (input == null || typeof input !== "string" && input.type !== "Program") throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    options = options || {};
    if (!("data" in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
}
function compile(input, options, env) {
    if (options === undefined) options = {};
    if (input == null || typeof input !== "string" && input.type !== "Program") throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    options = _utils.extend({}, options);
    if (!("data" in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var compiled = undefined;
    function compileInput() {
        var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options), templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
        return env.template(templateSpec);
    }
    // Template is only compiled on first use and cached after that point.
    function ret(context, execOptions) {
        if (!compiled) compiled = compileInput();
        return compiled.call(this, context, execOptions);
    }
    ret._setup = function(setupOptions) {
        if (!compiled) compiled = compileInput();
        return compiled._setup(setupOptions);
    };
    ret._child = function(i, data, blockParams, depths) {
        if (!compiled) compiled = compileInput();
        return compiled._child(i, data, blockParams, depths);
    };
    return ret;
}
function argEquals(a, b) {
    if (a === b) return true;
    if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
        for(var i = 0; i < a.length; i++){
            if (!argEquals(a[i], b[i])) return false;
        }
        return true;
    }
}
function transformLiteralToPath(sexpr) {
    if (!sexpr.path.parts) {
        var literal = sexpr.path;
        // Casting to string here to make false and 0 literal values play nicely with the rest
        // of the system.
        sexpr.path = {
            type: "PathExpression",
            data: false,
            depth: 0,
            parts: [
                literal.original + ""
            ],
            original: literal.original + "",
            loc: literal.loc
        };
    }
}

},{"152bb9095dd89868":"gO63O","a2f08e0f13855c73":"1az9o","edd0280bc8d20e45":"iOlHO"}],"7iXdU":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _base = require("d7afe58324427b2f");
var _exception = require("dcab5c0d5961e13f");
var _exception2 = _interopRequireDefault(_exception);
var _utils = require("741c818511af6d41");
var _codeGen = require("2ba27feac4132afc");
var _codeGen2 = _interopRequireDefault(_codeGen);
function Literal(value) {
    this.value = value;
}
function JavaScriptCompiler() {}
JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function nameLookup(parent, name /*,  type */ ) {
        return this.internalNameLookup(parent, name);
    },
    depthedLookup: function depthedLookup(name) {
        return [
            this.aliasable("container.lookup"),
            "(depths, ",
            JSON.stringify(name),
            ")"
        ];
    },
    compilerInfo: function compilerInfo() {
        var revision = _base.COMPILER_REVISION, versions = _base.REVISION_CHANGES[revision];
        return [
            revision,
            versions
        ];
    },
    appendToBuffer: function appendToBuffer(source, location, explicit) {
        // Force a source as this simplifies the merge logic.
        if (!_utils.isArray(source)) source = [
            source
        ];
        source = this.source.wrap(source, location);
        if (this.environment.isSimple) return [
            "return ",
            source,
            ";"
        ];
        else if (explicit) // This is a case where the buffer operation occurs as a child of another
        // construct, generally braces. We have to explicitly output these buffer
        // operations to ensure that the emitted code goes in the correct location.
        return [
            "buffer += ",
            source,
            ";"
        ];
        else {
            source.appendToBuffer = true;
            return source;
        }
    },
    initializeBuffer: function initializeBuffer() {
        return this.quotedString("");
    },
    // END PUBLIC API
    internalNameLookup: function internalNameLookup(parent, name) {
        this.lookupPropertyFunctionIsUsed = true;
        return [
            "lookupProperty(",
            parent,
            ",",
            JSON.stringify(name),
            ")"
        ];
    },
    lookupPropertyFunctionIsUsed: false,
    compile: function compile(environment, options, context, asObject) {
        this.environment = environment;
        this.options = options;
        this.stringParams = this.options.stringParams;
        this.trackIds = this.options.trackIds;
        this.precompile = !asObject;
        this.name = this.environment.name;
        this.isChild = !!context;
        this.context = context || {
            decorators: [],
            programs: [],
            environments: []
        };
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.aliases = {};
        this.registers = {
            list: []
        };
        this.hashes = [];
        this.compileStack = [];
        this.inlineStack = [];
        this.blockParams = [];
        this.compileChildren(environment, options);
        this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
        this.useBlockParams = this.useBlockParams || environment.useBlockParams;
        var opcodes = environment.opcodes, opcode = undefined, firstLoc = undefined, i = undefined, l = undefined;
        for(i = 0, l = opcodes.length; i < l; i++){
            opcode = opcodes[i];
            this.source.currentLocation = opcode.loc;
            firstLoc = firstLoc || opcode.loc;
            this[opcode.opcode].apply(this, opcode.args);
        }
        // Flush any trailing content that might be pending.
        this.source.currentLocation = firstLoc;
        this.pushSource("");
        /* istanbul ignore next */ if (this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new _exception2["default"]("Compile completed with content left on stack");
        if (!this.decorators.isEmpty()) {
            this.useDecorators = true;
            this.decorators.prepend([
                "var decorators = container.decorators, ",
                this.lookupPropertyFunctionVarDeclaration(),
                ";\n"
            ]);
            this.decorators.push("return fn;");
            if (asObject) this.decorators = Function.apply(this, [
                "fn",
                "props",
                "container",
                "depth0",
                "data",
                "blockParams",
                "depths",
                this.decorators.merge()
            ]);
            else {
                this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
                this.decorators.push("}\n");
                this.decorators = this.decorators.merge();
            }
        } else this.decorators = undefined;
        var fn = this.createFunctionContext(asObject);
        if (!this.isChild) {
            var ret = {
                compiler: this.compilerInfo(),
                main: fn
            };
            if (this.decorators) {
                ret.main_d = this.decorators; // eslint-disable-line camelcase
                ret.useDecorators = true;
            }
            var _context = this.context;
            var programs = _context.programs;
            var decorators = _context.decorators;
            for(i = 0, l = programs.length; i < l; i++)if (programs[i]) {
                ret[i] = programs[i];
                if (decorators[i]) {
                    ret[i + "_d"] = decorators[i];
                    ret.useDecorators = true;
                }
            }
            if (this.environment.usePartial) ret.usePartial = true;
            if (this.options.data) ret.useData = true;
            if (this.useDepths) ret.useDepths = true;
            if (this.useBlockParams) ret.useBlockParams = true;
            if (this.options.compat) ret.compat = true;
            if (!asObject) {
                ret.compiler = JSON.stringify(ret.compiler);
                this.source.currentLocation = {
                    start: {
                        line: 1,
                        column: 0
                    }
                };
                ret = this.objectLiteral(ret);
                if (options.srcName) {
                    ret = ret.toStringWithSourceMap({
                        file: options.destName
                    });
                    ret.map = ret.map && ret.map.toString();
                } else ret = ret.toString();
            } else ret.compilerOptions = this.options;
            return ret;
        } else return fn;
    },
    preamble: function preamble() {
        // track the last context pushed into place to allow skipping the
        // getContext opcode when it would be a noop
        this.lastContext = 0;
        this.source = new _codeGen2["default"](this.options.srcName);
        this.decorators = new _codeGen2["default"](this.options.srcName);
    },
    createFunctionContext: function createFunctionContext(asObject) {
        // istanbul ignore next
        var _this = this;
        var varDeclarations = "";
        var locals = this.stackVars.concat(this.registers.list);
        if (locals.length > 0) varDeclarations += ", " + locals.join(", ");
        // Generate minimizer alias mappings
        //
        // When using true SourceNodes, this will update all references to the given alias
        // as the source nodes are reused in situ. For the non-source node compilation mode,
        // aliases will not be used, but this case is already being run on the client and
        // we aren't concern about minimizing the template size.
        var aliasCount = 0;
        Object.keys(this.aliases).forEach(function(alias) {
            var node = _this.aliases[alias];
            if (node.children && node.referenceCount > 1) {
                varDeclarations += ", alias" + ++aliasCount + "=" + alias;
                node.children[0] = "alias" + aliasCount;
            }
        });
        if (this.lookupPropertyFunctionIsUsed) varDeclarations += ", " + this.lookupPropertyFunctionVarDeclaration();
        var params = [
            "container",
            "depth0",
            "helpers",
            "partials",
            "data"
        ];
        if (this.useBlockParams || this.useDepths) params.push("blockParams");
        if (this.useDepths) params.push("depths");
        // Perform a second pass over the output to merge content when possible
        var source = this.mergeSource(varDeclarations);
        if (asObject) {
            params.push(source);
            return Function.apply(this, params);
        } else return this.source.wrap([
            "function(",
            params.join(","),
            ") {\n  ",
            source,
            "}"
        ]);
    },
    mergeSource: function mergeSource(varDeclarations) {
        var isSimple = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = undefined, sourceSeen = undefined, bufferStart = undefined, bufferEnd = undefined;
        this.source.each(function(line) {
            if (line.appendToBuffer) {
                if (bufferStart) line.prepend("  + ");
                else bufferStart = line;
                bufferEnd = line;
            } else {
                if (bufferStart) {
                    if (!sourceSeen) appendFirst = true;
                    else bufferStart.prepend("buffer += ");
                    bufferEnd.add(";");
                    bufferStart = bufferEnd = undefined;
                }
                sourceSeen = true;
                if (!isSimple) appendOnly = false;
            }
        });
        if (appendOnly) {
            if (bufferStart) {
                bufferStart.prepend("return ");
                bufferEnd.add(";");
            } else if (!sourceSeen) this.source.push('return "";');
        } else {
            varDeclarations += ", buffer = " + (appendFirst ? "" : this.initializeBuffer());
            if (bufferStart) {
                bufferStart.prepend("return buffer + ");
                bufferEnd.add(";");
            } else this.source.push("return buffer;");
        }
        if (varDeclarations) this.source.prepend("var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n"));
        return this.source.merge();
    },
    lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
        return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim();
    },
    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function blockValue(name) {
        var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs(name, 0, params);
        var blockName = this.popStack();
        params.splice(1, 0, blockName);
        this.push(this.source.functionCall(blockHelperMissing, "call", params));
    },
    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function ambiguousBlockValue() {
        // We're being a bit cheeky and reusing the options value from the prior exec
        var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs("", 0, params, true);
        this.flushInline();
        var current = this.topStack();
        params.splice(1, 0, current);
        this.pushSource([
            "if (!",
            this.lastHelper,
            ") { ",
            current,
            " = ",
            this.source.functionCall(blockHelperMissing, "call", params),
            "}"
        ]);
    },
    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function appendContent(content) {
        if (this.pendingContent) content = this.pendingContent + content;
        else this.pendingLocation = this.source.currentLocation;
        this.pendingContent = content;
    },
    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function append() {
        if (this.isInline()) {
            this.replaceStack(function(current) {
                return [
                    " != null ? ",
                    current,
                    ' : ""'
                ];
            });
            this.pushSource(this.appendToBuffer(this.popStack()));
        } else {
            var local = this.popStack();
            this.pushSource([
                "if (",
                local,
                " != null) { ",
                this.appendToBuffer(local, undefined, true),
                " }"
            ]);
            if (this.environment.isSimple) this.pushSource([
                "else { ",
                this.appendToBuffer("''", undefined, true),
                " }"
            ]);
        }
    },
    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function appendEscaped() {
        this.pushSource(this.appendToBuffer([
            this.aliasable("container.escapeExpression"),
            "(",
            this.popStack(),
            ")"
        ]));
    },
    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function getContext(depth) {
        this.lastContext = depth;
    },
    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function pushContext() {
        this.pushStackLiteral(this.contextName(this.lastContext));
    },
    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
        var i = 0;
        if (!scoped && this.options.compat && !this.lastContext) // The depthed query is expected to handle the undefined logic for the root level that
        // is implemented below, so we evaluate that directly in compat mode
        this.push(this.depthedLookup(parts[i++]));
        else this.pushContext();
        this.resolvePath("context", parts, i, falsy, strict);
    },
    // [lookupBlockParam]
    //
    // On stack, before: ...
    // On stack, after: blockParam[name], ...
    //
    // Looks up the value of `parts` on the given block param and pushes
    // it onto the stack.
    lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
        this.useBlockParams = true;
        this.push([
            "blockParams[",
            blockParamId[0],
            "][",
            blockParamId[1],
            "]"
        ]);
        this.resolvePath("context", parts, 1);
    },
    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function lookupData(depth, parts, strict) {
        if (!depth) this.pushStackLiteral("data");
        else this.pushStackLiteral("container.data(data, " + depth + ")");
        this.resolvePath("data", parts, 0, true, strict);
    },
    resolvePath: function resolvePath(type, parts, i, falsy, strict) {
        // istanbul ignore next
        var _this2 = this;
        if (this.options.strict || this.options.assumeObjects) {
            this.push(strictLookup(this.options.strict && strict, this, parts, type));
            return;
        }
        var len = parts.length;
        for(; i < len; i++)/* eslint-disable no-loop-func */ this.replaceStack(function(current) {
            var lookup = _this2.nameLookup(current, parts[i], type);
            // We want to ensure that zero and false are handled properly if the context (falsy flag)
            // needs to have the special handling for these values.
            if (!falsy) return [
                " != null ? ",
                lookup,
                " : ",
                current
            ];
            else // Otherwise we can use generic falsy handling
            return [
                " && ",
                lookup
            ];
        });
    },
    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function resolvePossibleLambda() {
        this.push([
            this.aliasable("container.lambda"),
            "(",
            this.popStack(),
            ", ",
            this.contextName(0),
            ")"
        ]);
    },
    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function pushStringParam(string, type) {
        this.pushContext();
        this.pushString(type);
        // If it's a subexpression, the string result
        // will be pushed after this opcode.
        if (type !== "SubExpression") {
            if (typeof string === "string") this.pushString(string);
            else this.pushStackLiteral(string);
        }
    },
    emptyHash: function emptyHash(omitEmpty) {
        if (this.trackIds) this.push("{}"); // hashIds
        if (this.stringParams) {
            this.push("{}"); // hashContexts
            this.push("{}"); // hashTypes
        }
        this.pushStackLiteral(omitEmpty ? "undefined" : "{}");
    },
    pushHash: function pushHash() {
        if (this.hash) this.hashes.push(this.hash);
        this.hash = {
            values: {},
            types: [],
            contexts: [],
            ids: []
        };
    },
    popHash: function popHash() {
        var hash = this.hash;
        this.hash = this.hashes.pop();
        if (this.trackIds) this.push(this.objectLiteral(hash.ids));
        if (this.stringParams) {
            this.push(this.objectLiteral(hash.contexts));
            this.push(this.objectLiteral(hash.types));
        }
        this.push(this.objectLiteral(hash.values));
    },
    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function pushString(string) {
        this.pushStackLiteral(this.quotedString(string));
    },
    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function pushLiteral(value) {
        this.pushStackLiteral(value);
    },
    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function pushProgram(guid) {
        if (guid != null) this.pushStackLiteral(this.programExpression(guid));
        else this.pushStackLiteral(null);
    },
    // [registerDecorator]
    //
    // On stack, before: hash, program, params..., ...
    // On stack, after: ...
    //
    // Pops off the decorator's parameters, invokes the decorator,
    // and inserts the decorator into the decorators list.
    registerDecorator: function registerDecorator(paramSize, name) {
        var foundDecorator = this.nameLookup("decorators", name, "decorator"), options = this.setupHelperArgs(name, paramSize);
        this.decorators.push([
            "fn = ",
            this.decorators.functionCall(foundDecorator, "", [
                "fn",
                "props",
                "container",
                options
            ]),
            " || fn;"
        ]);
    },
    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function invokeHelper(paramSize, name, isSimple) {
        var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name);
        var possibleFunctionCalls = [];
        if (isSimple) // direct call to helper
        possibleFunctionCalls.push(helper.name);
        // call a function from the input object
        possibleFunctionCalls.push(nonHelper);
        if (!this.options.strict) possibleFunctionCalls.push(this.aliasable("container.hooks.helperMissing"));
        var functionLookupCode = [
            "(",
            this.itemsSeparatedBy(possibleFunctionCalls, "||"),
            ")"
        ];
        var functionCall = this.source.functionCall(functionLookupCode, "call", helper.callParams);
        this.push(functionCall);
    },
    itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
        var result = [];
        result.push(items[0]);
        for(var i = 1; i < items.length; i++)result.push(separator, items[i]);
        return result;
    },
    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
        var helper = this.setupHelper(paramSize, name);
        this.push(this.source.functionCall(helper.name, "call", helper.callParams));
    },
    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
        this.useRegister("helper");
        var nonHelper = this.popStack();
        this.emptyHash();
        var helper = this.setupHelper(0, name, helperCall);
        var helperName = this.lastHelper = this.nameLookup("helpers", name, "helper");
        var lookup = [
            "(",
            "(helper = ",
            helperName,
            " || ",
            nonHelper,
            ")"
        ];
        if (!this.options.strict) {
            lookup[0] = "(helper = ";
            lookup.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"));
        }
        this.push([
            "(",
            lookup,
            helper.paramsInit ? [
                "),(",
                helper.paramsInit
            ] : [],
            "),",
            "(typeof helper === ",
            this.aliasable('"function"'),
            " ? ",
            this.source.functionCall("helper", "call", helper.callParams),
            " : helper))"
        ]);
    },
    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function invokePartial(isDynamic, name, indent) {
        var params = [], options = this.setupParams(name, 1, params);
        if (isDynamic) {
            name = this.popStack();
            delete options.name;
        }
        if (indent) options.indent = JSON.stringify(indent);
        options.helpers = "helpers";
        options.partials = "partials";
        options.decorators = "container.decorators";
        if (!isDynamic) params.unshift(this.nameLookup("partials", name, "partial"));
        else params.unshift(name);
        if (this.options.compat) options.depths = "depths";
        options = this.objectLiteral(options);
        params.push(options);
        this.push(this.source.functionCall("container.invokePartial", "", params));
    },
    // [assignToHash]
    //
    // On stack, before: value, ..., hash, ...
    // On stack, after: ..., hash, ...
    //
    // Pops a value off the stack and assigns it to the current hash
    assignToHash: function assignToHash(key) {
        var value = this.popStack(), context = undefined, type = undefined, id = undefined;
        if (this.trackIds) id = this.popStack();
        if (this.stringParams) {
            type = this.popStack();
            context = this.popStack();
        }
        var hash = this.hash;
        if (context) hash.contexts[key] = context;
        if (type) hash.types[key] = type;
        if (id) hash.ids[key] = id;
        hash.values[key] = value;
    },
    pushId: function pushId(type, name, child) {
        if (type === "BlockParam") this.pushStackLiteral("blockParams[" + name[0] + "].path[" + name[1] + "]" + (child ? " + " + JSON.stringify("." + child) : ""));
        else if (type === "PathExpression") this.pushString(name);
        else if (type === "SubExpression") this.pushStackLiteral("true");
        else this.pushStackLiteral("null");
    },
    // HELPERS
    compiler: JavaScriptCompiler,
    compileChildren: function compileChildren(environment, options) {
        var children = environment.children, child = undefined, compiler = undefined;
        for(var i = 0, l = children.length; i < l; i++){
            child = children[i];
            compiler = new this.compiler(); // eslint-disable-line new-cap
            var existing = this.matchExistingProgram(child);
            if (existing == null) {
                this.context.programs.push(""); // Placeholder to prevent name conflicts for nested children
                var index = this.context.programs.length;
                child.index = index;
                child.name = "program" + index;
                this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                this.context.decorators[index] = compiler.decorators;
                this.context.environments[index] = child;
                this.useDepths = this.useDepths || compiler.useDepths;
                this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
                child.useDepths = this.useDepths;
                child.useBlockParams = this.useBlockParams;
            } else {
                child.index = existing.index;
                child.name = "program" + existing.index;
                this.useDepths = this.useDepths || existing.useDepths;
                this.useBlockParams = this.useBlockParams || existing.useBlockParams;
            }
        }
    },
    matchExistingProgram: function matchExistingProgram(child) {
        for(var i = 0, len = this.context.environments.length; i < len; i++){
            var environment = this.context.environments[i];
            if (environment && environment.equals(child)) return environment;
        }
    },
    programExpression: function programExpression(guid) {
        var child = this.environment.children[guid], programParams = [
            child.index,
            "data",
            child.blockParams
        ];
        if (this.useBlockParams || this.useDepths) programParams.push("blockParams");
        if (this.useDepths) programParams.push("depths");
        return "container.program(" + programParams.join(", ") + ")";
    },
    useRegister: function useRegister(name) {
        if (!this.registers[name]) {
            this.registers[name] = true;
            this.registers.list.push(name);
        }
    },
    push: function push(expr) {
        if (!(expr instanceof Literal)) expr = this.source.wrap(expr);
        this.inlineStack.push(expr);
        return expr;
    },
    pushStackLiteral: function pushStackLiteral(item) {
        this.push(new Literal(item));
    },
    pushSource: function pushSource(source) {
        if (this.pendingContent) {
            this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
            this.pendingContent = undefined;
        }
        if (source) this.source.push(source);
    },
    replaceStack: function replaceStack(callback) {
        var prefix = [
            "("
        ], stack = undefined, createdStack = undefined, usedLiteral = undefined;
        /* istanbul ignore next */ if (!this.isInline()) throw new _exception2["default"]("replaceStack on non-inline");
        // We want to merge the inline statement into the replacement statement via ','
        var top = this.popStack(true);
        if (top instanceof Literal) {
            // Literals do not need to be inlined
            stack = [
                top.value
            ];
            prefix = [
                "(",
                stack
            ];
            usedLiteral = true;
        } else {
            // Get or create the current stack name for use by the inline
            createdStack = true;
            var _name = this.incrStack();
            prefix = [
                "((",
                this.push(_name),
                " = ",
                top,
                ")"
            ];
            stack = this.topStack();
        }
        var item = callback.call(this, stack);
        if (!usedLiteral) this.popStack();
        if (createdStack) this.stackSlot--;
        this.push(prefix.concat(item, ")"));
    },
    incrStack: function incrStack() {
        this.stackSlot++;
        if (this.stackSlot > this.stackVars.length) this.stackVars.push("stack" + this.stackSlot);
        return this.topStackName();
    },
    topStackName: function topStackName() {
        return "stack" + this.stackSlot;
    },
    flushInline: function flushInline() {
        var inlineStack = this.inlineStack;
        this.inlineStack = [];
        for(var i = 0, len = inlineStack.length; i < len; i++){
            var entry = inlineStack[i];
            /* istanbul ignore if */ if (entry instanceof Literal) this.compileStack.push(entry);
            else {
                var stack = this.incrStack();
                this.pushSource([
                    stack,
                    " = ",
                    entry,
                    ";"
                ]);
                this.compileStack.push(stack);
            }
        }
    },
    isInline: function isInline() {
        return this.inlineStack.length;
    },
    popStack: function popStack(wrapped) {
        var inline = this.isInline(), item = (inline ? this.inlineStack : this.compileStack).pop();
        if (!wrapped && item instanceof Literal) return item.value;
        else {
            if (!inline) {
                /* istanbul ignore next */ if (!this.stackSlot) throw new _exception2["default"]("Invalid stack pop");
                this.stackSlot--;
            }
            return item;
        }
    },
    topStack: function topStack() {
        var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
        /* istanbul ignore if */ if (item instanceof Literal) return item.value;
        else return item;
    },
    contextName: function contextName(context) {
        if (this.useDepths && context) return "depths[" + context + "]";
        else return "depth" + context;
    },
    quotedString: function quotedString(str) {
        return this.source.quotedString(str);
    },
    objectLiteral: function objectLiteral(obj) {
        return this.source.objectLiteral(obj);
    },
    aliasable: function aliasable(name) {
        var ret = this.aliases[name];
        if (ret) {
            ret.referenceCount++;
            return ret;
        }
        ret = this.aliases[name] = this.source.wrap(name);
        ret.aliasable = true;
        ret.referenceCount = 1;
        return ret;
    },
    setupHelper: function setupHelper(paramSize, name, blockHelper) {
        var params = [], paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
        var foundHelper = this.nameLookup("helpers", name, "helper"), callContext = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
            params: params,
            paramsInit: paramsInit,
            name: foundHelper,
            callParams: [
                callContext
            ].concat(params)
        };
    },
    setupParams: function setupParams(helper, paramSize, params) {
        var options = {}, contexts = [], types = [], ids = [], objectArgs = !params, param = undefined;
        if (objectArgs) params = [];
        options.name = this.quotedString(helper);
        options.hash = this.popStack();
        if (this.trackIds) options.hashIds = this.popStack();
        if (this.stringParams) {
            options.hashTypes = this.popStack();
            options.hashContexts = this.popStack();
        }
        var inverse = this.popStack(), program = this.popStack();
        // Avoid setting fn and inverse if neither are set. This allows
        // helpers to do a check for `if (options.fn)`
        if (program || inverse) {
            options.fn = program || "container.noop";
            options.inverse = inverse || "container.noop";
        }
        // The parameters go on to the stack in order (making sure that they are evaluated in order)
        // so we need to pop them off the stack in reverse order
        var i = paramSize;
        while(i--){
            param = this.popStack();
            params[i] = param;
            if (this.trackIds) ids[i] = this.popStack();
            if (this.stringParams) {
                types[i] = this.popStack();
                contexts[i] = this.popStack();
            }
        }
        if (objectArgs) options.args = this.source.generateArray(params);
        if (this.trackIds) options.ids = this.source.generateArray(ids);
        if (this.stringParams) {
            options.types = this.source.generateArray(types);
            options.contexts = this.source.generateArray(contexts);
        }
        if (this.options.data) options.data = "data";
        if (this.useBlockParams) options.blockParams = "blockParams";
        return options;
    },
    setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
        var options = this.setupParams(helper, paramSize, params);
        options.loc = JSON.stringify(this.source.currentLocation);
        options = this.objectLiteral(options);
        if (useRegister) {
            this.useRegister("options");
            params.push("options");
            return [
                "options=",
                options
            ];
        } else if (params) {
            params.push(options);
            return "";
        } else return options;
    }
};
(function() {
    var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" ");
    var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
    for(var i = 0, l = reservedWords.length; i < l; i++)compilerWords[reservedWords[i]] = true;
})();
/**
 * @deprecated May be removed in the next major version
 */ JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
};
function strictLookup(requireTerminal, compiler, parts, type) {
    var stack = compiler.popStack(), i = 0, len = parts.length;
    if (requireTerminal) len--;
    for(; i < len; i++)stack = compiler.nameLookup(stack, parts[i], type);
    if (requireTerminal) return [
        compiler.aliasable("container.strict"),
        "(",
        stack,
        ", ",
        compiler.quotedString(parts[i]),
        ", ",
        JSON.stringify(compiler.source.currentLocation),
        " )"
    ];
    else return stack;
}
exports["default"] = JavaScriptCompiler;
module.exports = exports["default"];

},{"d7afe58324427b2f":"dt4wA","dcab5c0d5961e13f":"gO63O","741c818511af6d41":"1az9o","2ba27feac4132afc":"62qpE"}],"62qpE":[function(require,module,exports) {
/* global define */ "use strict";
exports.__esModule = true;
var _utils = require("f05c2c0f34c37787");
var SourceNode = undefined;
try {
    /* istanbul ignore next */ if (typeof define !== "function" || !define.amd) {
        // We don't support this in AMD environments. For these environments, we asusme that
        // they are running on the browser and thus have no need for the source-map library.
        var SourceMap = require("db6761910d1cb876");
        SourceNode = SourceMap.SourceNode;
    }
} catch (err) {}
/* NOP */ /* istanbul ignore if: tested but not covered in istanbul due to dist build  */ if (!SourceNode) {
    SourceNode = function(line, column, srcFile, chunks) {
        this.src = "";
        if (chunks) this.add(chunks);
    };
    /* istanbul ignore next */ SourceNode.prototype = {
        add: function add(chunks) {
            if (_utils.isArray(chunks)) chunks = chunks.join("");
            this.src += chunks;
        },
        prepend: function prepend(chunks) {
            if (_utils.isArray(chunks)) chunks = chunks.join("");
            this.src = chunks + this.src;
        },
        toStringWithSourceMap: function toStringWithSourceMap() {
            return {
                code: this.toString()
            };
        },
        toString: function toString() {
            return this.src;
        }
    };
}
function castChunk(chunk, codeGen, loc) {
    if (_utils.isArray(chunk)) {
        var ret = [];
        for(var i = 0, len = chunk.length; i < len; i++)ret.push(codeGen.wrap(chunk[i], loc));
        return ret;
    } else if (typeof chunk === "boolean" || typeof chunk === "number") // Handle primitives that the SourceNode will throw up on
    return chunk + "";
    return chunk;
}
function CodeGen(srcFile) {
    this.srcFile = srcFile;
    this.source = [];
}
CodeGen.prototype = {
    isEmpty: function isEmpty() {
        return !this.source.length;
    },
    prepend: function prepend(source, loc) {
        this.source.unshift(this.wrap(source, loc));
    },
    push: function push(source, loc) {
        this.source.push(this.wrap(source, loc));
    },
    merge: function merge() {
        var source = this.empty();
        this.each(function(line) {
            source.add([
                "  ",
                line,
                "\n"
            ]);
        });
        return source;
    },
    each: function each(iter) {
        for(var i = 0, len = this.source.length; i < len; i++)iter(this.source[i]);
    },
    empty: function empty() {
        var loc = this.currentLocation || {
            start: {}
        };
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
    },
    wrap: function wrap(chunk) {
        var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {
            start: {}
        } : arguments[1];
        if (chunk instanceof SourceNode) return chunk;
        chunk = castChunk(chunk, this, loc);
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
    },
    functionCall: function functionCall(fn, type, params) {
        params = this.generateList(params);
        return this.wrap([
            fn,
            type ? "." + type + "(" : "(",
            params,
            ")"
        ]);
    },
    quotedString: function quotedString(str) {
        return '"' + (str + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028") // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, "\\u2029") + '"';
    },
    objectLiteral: function objectLiteral(obj) {
        // istanbul ignore next
        var _this = this;
        var pairs = [];
        Object.keys(obj).forEach(function(key) {
            var value = castChunk(obj[key], _this);
            if (value !== "undefined") pairs.push([
                _this.quotedString(key),
                ":",
                value
            ]);
        });
        var ret = this.generateList(pairs);
        ret.prepend("{");
        ret.add("}");
        return ret;
    },
    generateList: function generateList(entries) {
        var ret = this.empty();
        for(var i = 0, len = entries.length; i < len; i++){
            if (i) ret.add(",");
            ret.add(castChunk(entries[i], this));
        }
        return ret;
    },
    generateArray: function generateArray(entries) {
        var ret = this.generateList(entries);
        ret.prepend("[");
        ret.add("]");
        return ret;
    }
};
exports["default"] = CodeGen;
module.exports = exports["default"];

},{"f05c2c0f34c37787":"1az9o","db6761910d1cb876":"6klNI"}],"6klNI":[function(require,module,exports) {
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.SourceMapGenerator = require("e4573165d26c7b81").SourceMapGenerator;
exports.SourceMapConsumer = require("26c461c6cb78285f").SourceMapConsumer;
exports.SourceNode = require("25dd83336d561dd7").SourceNode;

},{"e4573165d26c7b81":"eAEEU","26c461c6cb78285f":"29bOB","25dd83336d561dd7":"RKG6B"}],"eAEEU":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var base64VLQ = require("dca5b05c6e82ac46");
var util = require("cc4b1bc3fddf07f6");
var ArraySet = require("670f64c5fae278f6").ArraySet;
var MappingList = require("fc1cc543e15dfc89").MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */ function SourceMapGenerator(aArgs) {
    if (!aArgs) aArgs = {};
    this._file = util.getArg(aArgs, "file", null);
    this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
    this._skipValidation = util.getArg(aArgs, "skipValidation", false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
}
SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */ SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
            generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
            }
        };
        if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) newMapping.source = util.relative(sourceRoot, newMapping.source);
            newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
            };
            if (mapping.name != null) newMapping.name = mapping.name;
        }
        generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) sourceRelative = util.relative(sourceRoot, sourceFile);
        if (!generator._sources.has(sourceRelative)) generator._sources.add(sourceRelative);
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) generator.setSourceContent(sourceFile, content);
    });
    return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */ SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, "generated");
    var original = util.getArg(aArgs, "original", null);
    var source = util.getArg(aArgs, "source", null);
    var name = util.getArg(aArgs, "name", null);
    if (!this._skipValidation) this._validateMapping(generated, original, source, name);
    if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) this._sources.add(source);
    }
    if (name != null) {
        name = String(name);
        if (!this._names.has(name)) this._names.add(name);
    }
    this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
    });
};
/**
 * Set the source content for a source file.
 */ SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) source = util.relative(this._sourceRoot, source);
    if (aSourceContent != null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) this._sourcesContents = Object.create(null);
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) this._sourcesContents = null;
    }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */ SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
        sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) sourceFile = util.relative(sourceRoot, sourceFile);
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
            // Check if it can be mapped by the source map, then update the mapping.
            var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (original.source != null) {
                // Copy mapping
                mapping.source = original.source;
                if (aSourceMapPath != null) mapping.source = util.join(aSourceMapPath, mapping.source);
                if (sourceRoot != null) mapping.source = util.relative(sourceRoot, mapping.source);
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name != null) mapping.name = original.name;
            }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) newSources.add(source);
        var name = mapping.name;
        if (name != null && !newNames.has(name)) newNames.add(name);
    }, this);
    this._sources = newSources;
    this._names = newNames;
    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aSourceMapPath != null) sourceFile = util.join(aSourceMapPath, sourceFile);
            if (sourceRoot != null) sourceFile = util.relative(sourceRoot, sourceFile);
            this.setSourceContent(sourceFile, content);
        }
    }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */ SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) // Case 1.
    return;
    else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) // Cases 2 and 3.
    return;
    else throw new Error("Invalid mapping: " + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
    }));
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */ SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = "";
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for(var i = 0, len = mappings.length; i < len; i++){
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while(mapping.generatedLine !== previousGeneratedLine){
                next += ";";
                previousGeneratedLine++;
            }
        } else if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) continue;
            next += ",";
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            // lines are stored 0-based in SourceMap spec version 3
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += base64VLQ.encode(nameIdx - previousName);
                previousName = nameIdx;
            }
        }
        result += next;
    }
    return result;
};
SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
        if (!this._sourcesContents) return null;
        if (aSourceRoot != null) source = util.relative(aSourceRoot, source);
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
};
/**
 * Externalize the source map.
 */ SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    if (this._file != null) map.file = this._file;
    if (this._sourceRoot != null) map.sourceRoot = this._sourceRoot;
    if (this._sourcesContents) map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    return map;
};
/**
 * Render the source map being generated to a string.
 */ SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
};
exports.SourceMapGenerator = SourceMapGenerator;

},{"dca5b05c6e82ac46":"8tI6q","cc4b1bc3fddf07f6":"tCCrk","670f64c5fae278f6":"5GPwW","fc1cc543e15dfc89":"6uR3M"}],"8tI6q":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var base64 = require("c04d66d4d1c2c893");
// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011
var VLQ_BASE_SHIFT = 5;
// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;
// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */ function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */ function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */ exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= VLQ_CONTINUATION_BIT;
        encoded += base64.encode(digit);
    }while (vlq > 0);
    return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */ exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
        if (aIndex >= strLen) throw new Error("Expected more digits in base 64 VLQ value.");
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
    }while (continuation);
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
};

},{"c04d66d4d1c2c893":"1nPpB"}],"1nPpB":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */ exports.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) return intToCharMap[number];
    throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */ exports.decode = function(charCode) {
    var bigA = 65; // 'A'
    var bigZ = 90; // 'Z'
    var littleA = 97; // 'a'
    var littleZ = 122; // 'z'
    var zero = 48; // '0'
    var nine = 57; // '9'
    var plus = 43; // '+'
    var slash = 47; // '/'
    var littleOffset = 26;
    var numberOffset = 52;
    // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    if (bigA <= charCode && charCode <= bigZ) return charCode - bigA;
    // 26 - 51: abcdefghijklmnopqrstuvwxyz
    if (littleA <= charCode && charCode <= littleZ) return charCode - littleA + littleOffset;
    // 52 - 61: 0123456789
    if (zero <= charCode && charCode <= nine) return charCode - zero + numberOffset;
    // 62: +
    if (charCode == plus) return 62;
    // 63: /
    if (charCode == slash) return 63;
    // Invalid base64 digit.
    return -1;
};

},{}],"tCCrk":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ /**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */ function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) return aArgs[aName];
    else if (arguments.length === 3) return aDefaultValue;
    else throw new Error('"' + aName + '" is a required argument.');
}
exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;
function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) return null;
    return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
    };
}
exports.urlParse = urlParse;
function urlGenerate(aParsedUrl) {
    var url = "";
    if (aParsedUrl.scheme) url += aParsedUrl.scheme + ":";
    url += "//";
    if (aParsedUrl.auth) url += aParsedUrl.auth + "@";
    if (aParsedUrl.host) url += aParsedUrl.host;
    if (aParsedUrl.port) url += ":" + aParsedUrl.port;
    if (aParsedUrl.path) url += aParsedUrl.path;
    return url;
}
exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */ function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
        if (!url.path) return aPath;
        path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = path.split(/\/+/);
    for(var part, up = 0, i = parts.length - 1; i >= 0; i--){
        part = parts[i];
        if (part === ".") parts.splice(i, 1);
        else if (part === "..") up++;
        else if (up > 0) {
            if (part === "") {
                // The first part is blank if the path is absolute. Trying to go
                // above the root is a no-op. Therefore we can remove all '..' parts
                // directly after the root.
                parts.splice(i + 1, up);
                up = 0;
            } else {
                parts.splice(i, 2);
                up--;
            }
        }
    }
    path = parts.join("/");
    if (path === "") path = isAbsolute ? "/" : ".";
    if (url) {
        url.path = path;
        return urlGenerate(url);
    }
    return path;
}
exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */ function join(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    if (aPath === "") aPath = ".";
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) aRoot = aRootUrl.path || "/";
    // `join(foo, '//www.example.org')`
    if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) aPathUrl.scheme = aRootUrl.scheme;
        return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) return aPath;
    // `join('http://', 'www.example.com')`
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
    if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
    }
    return joined;
}
exports.join = join;
exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */ function relative(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    aRoot = aRoot.replace(/\/$/, "");
    // It is possible for the path to be above the root. In this case, simply
    // checking whether the root is a prefix of the path won't work. Instead, we
    // need to remove components from the root one by one, until either we find
    // a prefix that fits, or we run out of components to remove.
    var level = 0;
    while(aPath.indexOf(aRoot + "/") !== 0){
        var index = aRoot.lastIndexOf("/");
        if (index < 0) return aPath;
        // If the only part of the root that is left is the scheme (i.e. http://,
        // file:///, etc.), one or more slashes (/), or simply nothing at all, we
        // have exhausted all components, so the path is not relative to the root.
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) return aPath;
        ++level;
    }
    // Make sure we add a "../" for each component we removed from the root.
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;
var supportsNullProto = function() {
    var obj = Object.create(null);
    return !("__proto__" in obj);
}();
function identity(s) {
    return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */ function toSetString(aStr) {
    if (isProtoString(aStr)) return "$" + aStr;
    return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;
function fromSetString(aStr) {
    if (isProtoString(aStr)) return aStr.slice(1);
    return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;
function isProtoString(s) {
    if (!s) return false;
    var length = s.length;
    if (length < 9 /* "__proto__".length */ ) return false;
    if (s.charCodeAt(length - 1) !== 95 /* '_' */  || s.charCodeAt(length - 2) !== 95 /* '_' */  || s.charCodeAt(length - 3) !== 111 /* 'o' */  || s.charCodeAt(length - 4) !== 116 /* 't' */  || s.charCodeAt(length - 5) !== 111 /* 'o' */  || s.charCodeAt(length - 6) !== 114 /* 'r' */  || s.charCodeAt(length - 7) !== 112 /* 'p' */  || s.charCodeAt(length - 8) !== 95 /* '_' */  || s.charCodeAt(length - 9) !== 95 /* '_' */ ) return false;
    for(var i = length - 10; i >= 0; i--){
        if (s.charCodeAt(i) !== 36 /* '$' */ ) return false;
    }
    return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */ function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */ function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) return 0;
    if (aStr1 === null) return 1; // aStr2 !== null
    if (aStr2 === null) return -1; // aStr1 !== null
    if (aStr1 > aStr2) return 1;
    return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */ function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */ function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
}
exports.parseSourceMapInput = parseSourceMapInput;
/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */ function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || "";
    if (sourceRoot) {
        // This follows what Chrome does.
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") sourceRoot += "/";
        // The spec says:
        //   Line 4: An optional source root, useful for relocating source
        //   files on a server or removing repeated values in the
        //   “sources” entry.  This value is prepended to the individual
        //   entries in the “source” field.
        sourceURL = sourceRoot + sourceURL;
    }
    // Historically, SourceMapConsumer did not take the sourceMapURL as
    // a parameter.  This mode is still somewhat supported, which is why
    // this code block is conditional.  However, it's preferable to pass
    // the source map URL to SourceMapConsumer, so that this function
    // can implement the source URL resolution algorithm as outlined in
    // the spec.  This block is basically the equivalent of:
    //    new URL(sourceURL, sourceMapURL).toString()
    // ... except it avoids using URL, which wasn't available in the
    // older releases of node still supported by this library.
    //
    // The spec says:
    //   If the sources are not absolute URLs after prepending of the
    //   “sourceRoot”, the sources are resolved relative to the
    //   SourceMap (like resolving script src in a html document).
    if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) throw new Error("sourceMapURL could not be parsed");
        if (parsed.path) {
            // Strip the last path component, but keep the "/".
            var index = parsed.path.lastIndexOf("/");
            if (index >= 0) parsed.path = parsed.path.substring(0, index + 1);
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
    }
    return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;

},{}],"5GPwW":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("5d1a73bc2a84fd66");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */ function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? new Map() : Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */ ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for(var i = 0, len = aArray.length; i < len; i++)set.add(aArray[i], aAllowDuplicates);
    return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */ ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */ ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) this._array.push(aStr);
    if (!isDuplicate) {
        if (hasNativeMap) this._set.set(aStr, idx);
        else this._set[sStr] = idx;
    }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */ ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) return this._set.has(aStr);
    else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
    }
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */ ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) return idx;
    } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) return this._set[sStr];
    }
    throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */ ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) return this._array[aIdx];
    throw new Error("No element indexed by " + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */ ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
};
exports.ArraySet = ArraySet;

},{"5d1a73bc2a84fd66":"tCCrk"}],"6uR3M":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("efc9100de87e1c61");
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */ function generatedPositionAfter(mappingA, mappingB) {
    // Optimized for most common case
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */ function MappingList() {
    this._array = [];
    this._sorted = true;
    // Serves as infimum
    this._last = {
        generatedLine: -1,
        generatedColumn: 0
    };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */ MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */ MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
    } else {
        this._sorted = false;
        this._array.push(aMapping);
    }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */ MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
    }
    return this._array;
};
exports.MappingList = MappingList;

},{"efc9100de87e1c61":"tCCrk"}],"29bOB":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("ae839eb1aaef0e8c");
var binarySearch = require("c95df5f462f1839d");
var ArraySet = require("b23d3dca6daf8597").ArraySet;
var base64VLQ = require("724e7b5d4ea741e4");
var quickSort = require("d853738c0785c706").quickSort;
function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = util.parseSourceMapInput(aSourceMap);
    return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
/**
 * The version of the source mapping spec that we are consuming.
 */ SourceMapConsumer.prototype._version = 3;
// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__generatedMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__generatedMappings;
    }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__originalMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__originalMappings;
    }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */ SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch(order){
        case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
        case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
        };
    }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */ SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, "line");
    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
        source: util.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util.getArg(aArgs, "column", 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) return [];
    var mappings = [];
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === undefined) {
            var originalLine = mapping.originalLine;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we found. Since
            // mappings are sorted, this is guaranteed to find all mappings for
            // the line we found.
            while(mapping && mapping.originalLine === originalLine){
                mappings.push({
                    line: util.getArg(mapping, "generatedLine", null),
                    column: util.getArg(mapping, "generatedColumn", null),
                    lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                });
                mapping = this._originalMappings[++index];
            }
        } else {
            var originalColumn = mapping.originalColumn;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we were searching for.
            // Since mappings are sorted, this is guaranteed to find all mappings for
            // the line we are searching for.
            while(mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn){
                mappings.push({
                    line: util.getArg(mapping, "generatedLine", null),
                    column: util.getArg(mapping, "generatedColumn", null),
                    lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
                });
                mapping = this._originalMappings[++index];
            }
        }
    }
    return mappings;
};
exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */ function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, "version");
    var sources = util.getArg(sourceMap, "sources");
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = util.getArg(sourceMap, "names", []);
    var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
    var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
    var mappings = util.getArg(sourceMap, "mappings");
    var file = util.getArg(sourceMap, "file", null);
    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) throw new Error("Unsupported version: " + version);
    if (sourceRoot) sourceRoot = util.normalize(sourceRoot);
    sources = sources.map(String)// Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)// Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
    });
    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */ BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    if (this._sources.has(relativeSource)) return this._sources.indexOf(relativeSource);
    // Maybe aSource is an absolute URL as returned by |sources|.  In
    // this case we can't simply undo the transform.
    var i;
    for(i = 0; i < this._absoluteSources.length; ++i){
        if (this._absoluteSources[i] == aSource) return i;
    }
    return -1;
};
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */ BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for(var i = 0, length = generatedMappings.length; i < length; i++){
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping;
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) destMapping.name = names.indexOf(srcMapping.name);
            destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
    }
    quickSort(smc.__originalMappings, util.compareByOriginalPositions);
    return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */ BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
    get: function() {
        return this._absoluteSources.slice();
    }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */ function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while(index < length){
        if (aStr.charAt(index) === ";") {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ",") index++;
        else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            // Because each offset is encoded relative to the previous one,
            // many segments often have the same encoding. We can exploit this
            // fact by caching the parsed variable length fields of each segment,
            // allowing us to avoid a second parse if we encounter the same
            // segment again.
            for(end = index; end < length; end++){
                if (this._charIsMappingSeparator(aStr, end)) break;
            }
            str = aStr.slice(index, end);
            segment = cachedSegments[str];
            if (segment) index += str.length;
            else {
                segment = [];
                while(index < end){
                    base64VLQ.decode(aStr, index, temp);
                    value = temp.value;
                    index = temp.rest;
                    segment.push(value);
                }
                if (segment.length === 2) throw new Error("Found a source, but no line and column");
                if (segment.length === 3) throw new Error("Found a source and line, but no column");
                cachedSegments[str] = segment;
            }
            // Generated column.
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
                // Original source.
                mapping.source = previousSource + segment[1];
                previousSource += segment[1];
                // Original line.
                mapping.originalLine = previousOriginalLine + segment[2];
                previousOriginalLine = mapping.originalLine;
                // Lines are stored 0-based
                mapping.originalLine += 1;
                // Original column.
                mapping.originalColumn = previousOriginalColumn + segment[3];
                previousOriginalColumn = mapping.originalColumn;
                if (segment.length > 4) {
                    // Original name.
                    mapping.name = previousName + segment[4];
                    previousName += segment[4];
                }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === "number") originalMappings.push(mapping);
        }
    }
    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */ BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.
    if (aNeedle[aLineName] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
    if (aNeedle[aColumnName] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */ BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for(var index = 0; index < this._generatedMappings.length; ++index){
        var mapping = this._generatedMappings[index];
        // Mappings do not contain a field for the last generated columnt. We
        // can come up with an optimistic estimate, however, by assuming that
        // mappings are contiguous (i.e. given two consecutive mappings, the
        // first mapping ends where the second one starts).
        if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
                mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                continue;
            }
        }
        // The last mapping for each line spans the entire line.
        mapping.lastGeneratedColumn = Infinity;
    }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, "source", null);
            if (source !== null) {
                source = this._sources.at(source);
                source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
            }
            var name = util.getArg(mapping, "name", null);
            if (name !== null) name = this._names.at(name);
            return {
                source: source,
                line: util.getArg(mapping, "originalLine", null),
                column: util.getArg(mapping, "originalColumn", null),
                name: name
            };
        }
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) return false;
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) return null;
    var index = this._findSourceIndex(aSource);
    if (index >= 0) return this.sourcesContent[index];
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    var url;
    if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) return null;
    else throw new Error('"' + relativeSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, "source");
    source = this._findSourceIndex(source);
    if (source < 0) return {
        line: null,
        column: null,
        lastColumn: null
    };
    var needle = {
        source: source,
        originalLine: util.getArg(aArgs, "line"),
        originalColumn: util.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) return {
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
        };
    }
    return {
        line: null,
        column: null,
        lastColumn: null
    };
};
exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */ function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, "version");
    var sections = util.getArg(sourceMap, "sections");
    if (version != this._version) throw new Error("Unsupported version: " + version);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
        line: -1,
        column: 0
    };
    this._sections = sections.map(function(s) {
        if (s.url) // The url field will require support for asynchronicity.
        // See https://github.com/mozilla/source-map/issues/16
        throw new Error("Support for url field in sections not implemented.");
        var offset = util.getArg(s, "offset");
        var offsetLine = util.getArg(offset, "line");
        var offsetColumn = util.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) throw new Error("Section offsets must be ordered and non-overlapping.");
        lastOffset = offset;
        return {
            generatedOffset: {
                // The offset fields are 0-based, but we use 1-based indices when
                // encoding/decoding from VLQ.
                generatedLine: offsetLine + 1,
                generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
        };
    });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */ IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
    get: function() {
        var sources = [];
        for(var i = 0; i < this._sections.length; i++)for(var j = 0; j < this._sections[i].consumer.sources.length; j++)sources.push(this._sections[i].consumer.sources[j]);
        return sources;
    }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
    };
    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections, function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) return cmp;
        return needle.generatedColumn - section.generatedOffset.generatedColumn;
    });
    var section = this._sections[sectionIndex];
    if (!section) return {
        source: null,
        line: null,
        column: null,
        name: null
    };
    return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
    });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) return content;
    }
    if (nullOnMissing) return null;
    else throw new Error('"' + aSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        // Only consider this section if the requested source is in the list of
        // sources of the consumer.
        if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) continue;
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
            var ret = {
                line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
                column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
        }
    }
    return {
        line: null,
        column: null
    };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for(var j = 0; j < sectionMappings.length; j++){
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = null;
            if (mapping.name) {
                name = section.consumer._names.at(mapping.name);
                this._names.add(name);
                name = this._names.indexOf(name);
            }
            // The mappings coming from the consumer for the section have
            // generated positions relative to the start of the section, so we
            // need to offset them to be relative to the start of the concatenated
            // generated file.
            var adjustedMapping = {
                source: source,
                generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
                generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name: name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === "number") this.__originalMappings.push(adjustedMapping);
        }
    }
    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
};
exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

},{"ae839eb1aaef0e8c":"tCCrk","c95df5f462f1839d":"eBCh2","b23d3dca6daf8597":"5GPwW","724e7b5d4ea741e4":"8tI6q","d853738c0785c706":"ffK7z"}],"eBCh2":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */ function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the index of
    //      the next-closest element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element than the one we are searching for, so we return -1.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) // Found the element we are looking for.
    return mid;
    else if (cmp > 0) {
        // Our needle is greater than aHaystack[mid].
        if (aHigh - mid > 1) // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        // The exact needle element was not found in this haystack. Determine if
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return aHigh < aHaystack.length ? aHigh : -1;
        else return mid;
    } else {
        // Our needle is less than aHaystack[mid].
        if (mid - aLow > 1) // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return mid;
        else return aLow < 0 ? -1 : aLow;
    }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */ exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) return -1;
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) return -1;
    // We have found either the exact element, or the next-closest element than
    // the one we are searching for. However, there may be more than one such
    // element. Make sure we always return the smallest of these.
    while(index - 1 >= 0){
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) break;
        --index;
    }
    return index;
};

},{}],"ffK7z":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ // It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.
/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */ function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */ function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */ function doQuickSort(ary, comparator, p, r) {
    // If our lower bound is less than our upper bound, we (1) partition the
    // array into two pieces and (2) recurse on each half. If it is not, this is
    // the empty array and our base case.
    if (p < r) {
        // (1) Partitioning.
        //
        // The partitioning chooses a pivot between `p` and `r` and moves all
        // elements that are less than or equal to the pivot to the before it, and
        // all the elements that are greater than it after it. The effect is that
        // once partition is done, the pivot is in the exact place it will be when
        // the array is put in sorted order, and it will not need to be moved
        // again. This runs in O(n) time.
        // Always choose a random pivot so that an input array which is reverse
        // sorted does not cause O(n^2) running time.
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        // Immediately after `j` is incremented in this loop, the following hold
        // true:
        //
        //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
        //
        //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
        for(var j = p; j < r; j++)if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        // (2) Recurse on each half.
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
    }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */ exports.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
};

},{}],"RKG6B":[function(require,module,exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var SourceMapGenerator = require("45b6441323d7e19a").SourceMapGenerator;
var util = require("5b6165652a31c1a1");
// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;
// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;
// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */ function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */ SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();
    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
        var lineContents = getNextLine();
        // The last line of a file might not have a newline.
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
        }
    };
    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
            // We add the code from "lastMapping" to "mapping":
            // First check if there is a new line in between.
            if (lastGeneratedLine < mapping.generatedLine) {
                // Associate first line with "lastMapping"
                addMappingWithCode(lastMapping, shiftNextLine());
                lastGeneratedLine++;
                lastGeneratedColumn = 0;
            // The remaining code is added without mapping
            } else {
                // There is no new line in between.
                // Associate the code between "lastGeneratedColumn" and
                // "mapping.generatedColumn" with "lastMapping"
                var nextLine = remainingLines[remainingLinesIndex] || "";
                var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
                remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code);
                // No more remaining code, continue
                lastMapping = mapping;
                return;
            }
        }
        // We add the generated code until the first mapping
        // to the SourceNode without any mapping.
        // Each line is added as separate string.
        while(lastGeneratedLine < mapping.generatedLine){
            node.add(shiftNextLine());
            lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        // and add the remaining lines without any mapping
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aRelativePath != null) sourceFile = util.join(aRelativePath, sourceFile);
            node.setSourceContent(sourceFile, content);
        }
    });
    return node;
    function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) node.add(code);
        else {
            var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
    }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) aChunk.forEach(function(chunk) {
        this.add(chunk);
    }, this);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) this.children.push(aChunk);
    } else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) for(var i = aChunk.length - 1; i >= 0; i--)this.prepend(aChunk[i]);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") this.children.unshift(aChunk);
    else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for(var i = 0, len = this.children.length; i < len; i++){
        chunk = this.children[i];
        if (chunk[isSourceNode]) chunk.walk(aFn);
        else if (chunk !== "") aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
        });
    }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */ SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
        newChildren = [];
        for(i = 0; i < len - 1; i++){
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
    }
    return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */ SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) lastChild.replaceRight(aPattern, aReplacement);
    else if (typeof lastChild === "string") this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    else this.children.push("".replace(aPattern, aReplacement));
    return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */ SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for(var i = 0, len = this.children.length; i < len; i++)if (this.children[i][isSourceNode]) this.children[i].walkSourceContents(aFn);
    var sources = Object.keys(this.sourceContents);
    for(var i = 0, len = sources.length; i < len; i++)aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */ SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
        str += chunk;
    });
    return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */ SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
        code: "",
        line: 1,
        column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
        } else if (sourceMappingActive) {
            map.addMapping({
                generated: {
                    line: generated.line,
                    column: generated.column
                }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
        }
        for(var idx = 0, length = chunk.length; idx < length; idx++)if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            // Mappings end at eol
            if (idx + 1 === length) {
                lastOriginalSource = null;
                sourceMappingActive = false;
            } else if (sourceMappingActive) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
        } else generated.column++;
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
    });
    return {
        code: generated.code,
        map: map
    };
};
exports.SourceNode = SourceNode;

},{"45b6441323d7e19a":"eAEEU","5b6165652a31c1a1":"tCCrk"}],"j0OeV":[function(require,module,exports) {
/* eslint-disable new-cap */ "use strict";
exports.__esModule = true;
exports.print = print;
exports.PrintVisitor = PrintVisitor;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var _visitor = require("ae4e5bec771c6be4");
var _visitor2 = _interopRequireDefault(_visitor);
function print(ast) {
    return new PrintVisitor().accept(ast);
}
function PrintVisitor() {
    this.padding = 0;
}
PrintVisitor.prototype = new _visitor2["default"]();
PrintVisitor.prototype.pad = function(string) {
    var out = "";
    for(var i = 0, l = this.padding; i < l; i++)out += "  ";
    out += string + "\n";
    return out;
};
PrintVisitor.prototype.Program = function(program) {
    var out = "", body = program.body, i = undefined, l = undefined;
    if (program.blockParams) {
        var blockParams = "BLOCK PARAMS: [";
        for(i = 0, l = program.blockParams.length; i < l; i++)blockParams += " " + program.blockParams[i];
        blockParams += " ]";
        out += this.pad(blockParams);
    }
    for(i = 0, l = body.length; i < l; i++)out += this.accept(body[i]);
    this.padding--;
    return out;
};
PrintVisitor.prototype.MustacheStatement = function(mustache) {
    return this.pad("{{ " + this.SubExpression(mustache) + " }}");
};
PrintVisitor.prototype.Decorator = function(mustache) {
    return this.pad("{{ DIRECTIVE " + this.SubExpression(mustache) + " }}");
};
PrintVisitor.prototype.BlockStatement = PrintVisitor.prototype.DecoratorBlock = function(block) {
    var out = "";
    out += this.pad((block.type === "DecoratorBlock" ? "DIRECTIVE " : "") + "BLOCK:");
    this.padding++;
    out += this.pad(this.SubExpression(block));
    if (block.program) {
        out += this.pad("PROGRAM:");
        this.padding++;
        out += this.accept(block.program);
        this.padding--;
    }
    if (block.inverse) {
        if (block.program) this.padding++;
        out += this.pad("{{^}}");
        this.padding++;
        out += this.accept(block.inverse);
        this.padding--;
        if (block.program) this.padding--;
    }
    this.padding--;
    return out;
};
PrintVisitor.prototype.PartialStatement = function(partial) {
    var content = "PARTIAL:" + partial.name.original;
    if (partial.params[0]) content += " " + this.accept(partial.params[0]);
    if (partial.hash) content += " " + this.accept(partial.hash);
    return this.pad("{{> " + content + " }}");
};
PrintVisitor.prototype.PartialBlockStatement = function(partial) {
    var content = "PARTIAL BLOCK:" + partial.name.original;
    if (partial.params[0]) content += " " + this.accept(partial.params[0]);
    if (partial.hash) content += " " + this.accept(partial.hash);
    content += " " + this.pad("PROGRAM:");
    this.padding++;
    content += this.accept(partial.program);
    this.padding--;
    return this.pad("{{> " + content + " }}");
};
PrintVisitor.prototype.ContentStatement = function(content) {
    return this.pad("CONTENT[ '" + content.value + "' ]");
};
PrintVisitor.prototype.CommentStatement = function(comment) {
    return this.pad("{{! '" + comment.value + "' }}");
};
PrintVisitor.prototype.SubExpression = function(sexpr) {
    var params = sexpr.params, paramStrings = [], hash = undefined;
    for(var i = 0, l = params.length; i < l; i++)paramStrings.push(this.accept(params[i]));
    params = "[" + paramStrings.join(", ") + "]";
    hash = sexpr.hash ? " " + this.accept(sexpr.hash) : "";
    return this.accept(sexpr.path) + " " + params + hash;
};
PrintVisitor.prototype.PathExpression = function(id) {
    var path = id.parts.join("/");
    return (id.data ? "@" : "") + "PATH:" + path;
};
PrintVisitor.prototype.StringLiteral = function(string) {
    return '"' + string.value + '"';
};
PrintVisitor.prototype.NumberLiteral = function(number) {
    return "NUMBER{" + number.value + "}";
};
PrintVisitor.prototype.BooleanLiteral = function(bool) {
    return "BOOLEAN{" + bool.value + "}";
};
PrintVisitor.prototype.UndefinedLiteral = function() {
    return "UNDEFINED";
};
PrintVisitor.prototype.NullLiteral = function() {
    return "NULL";
};
PrintVisitor.prototype.Hash = function(hash) {
    var pairs = hash.pairs, joinedPairs = [];
    for(var i = 0, l = pairs.length; i < l; i++)joinedPairs.push(this.accept(pairs[i]));
    return "HASH{" + joinedPairs.join(", ") + "}";
};
PrintVisitor.prototype.HashPair = function(pair) {
    return pair.key + "=" + this.accept(pair.value);
}; /* eslint-enable new-cap */ 

},{"ae4e5bec771c6be4":"fk5sS"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"23KZ6":[function(require,module,exports) {
module.exports["button"] = `Kxw1Dq_button`;

},{}],"9FFZb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "welcome__container") : stack1, depth0)) + '">\r\n    <form class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "welcome__box") : stack1, depth0)) + '">\r\n        <h1 class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "welcome__header") : stack1, depth0)) + '">Регистрация</h1>\r\n        <section>\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__container") : stack1, depth0)) + '">\r\n                <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__info") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "mailName") || (depth0 != null ? lookupProperty(depth0, "mailName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "mailName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 50
                },
                "end": {
                    "line": 6,
                    "column": 62
                }
            }
        }) : helper)) + "</p>\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "mailInput") || (depth0 != null ? lookupProperty(depth0, "mailInput") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "mailInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 16
                },
                "end": {
                    "line": 7,
                    "column": 31
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "invalidMail") || (depth0 != null ? lookupProperty(depth0, "invalidMail") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "invalidMail",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 16
                },
                "end": {
                    "line": 8,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n            </div>\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__container") : stack1, depth0)) + '">\r\n                <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__info") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "loginName") || (depth0 != null ? lookupProperty(depth0, "loginName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "loginName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 50
                },
                "end": {
                    "line": 11,
                    "column": 63
                }
            }
        }) : helper)) + "</p>\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "loginInput") || (depth0 != null ? lookupProperty(depth0, "loginInput") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "loginInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 16
                },
                "end": {
                    "line": 12,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "invalidLogin") || (depth0 != null ? lookupProperty(depth0, "invalidLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "invalidLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 16
                },
                "end": {
                    "line": 13,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n            </div>\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__container") : stack1, depth0)) + '">\r\n                <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__info") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 50
                },
                "end": {
                    "line": 16,
                    "column": 58
                }
            }
        }) : helper)) + "</p>\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "nameInput") || (depth0 != null ? lookupProperty(depth0, "nameInput") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "nameInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 17,
                    "column": 16
                },
                "end": {
                    "line": 17,
                    "column": 31
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "invalidName") || (depth0 != null ? lookupProperty(depth0, "invalidName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "invalidName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 16
                },
                "end": {
                    "line": 18,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n            </div>\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__container") : stack1, depth0)) + '">\r\n                <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__info") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "surname") || (depth0 != null ? lookupProperty(depth0, "surname") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "surname",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 21,
                    "column": 50
                },
                "end": {
                    "line": 21,
                    "column": 61
                }
            }
        }) : helper)) + "</p>\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "surnameInput") || (depth0 != null ? lookupProperty(depth0, "surnameInput") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "surnameInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 16
                },
                "end": {
                    "line": 22,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "invalidSurname") || (depth0 != null ? lookupProperty(depth0, "invalidSurname") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "invalidSurname",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 23,
                    "column": 16
                },
                "end": {
                    "line": 23,
                    "column": 36
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n            </div>\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__container") : stack1, depth0)) + '">\r\n                <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__info") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "phoneName") || (depth0 != null ? lookupProperty(depth0, "phoneName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "phoneName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 26,
                    "column": 50
                },
                "end": {
                    "line": 26,
                    "column": 63
                }
            }
        }) : helper)) + "</p>\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "phoneInput") || (depth0 != null ? lookupProperty(depth0, "phoneInput") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "phoneInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 27,
                    "column": 16
                },
                "end": {
                    "line": 27,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "invalidPhone") || (depth0 != null ? lookupProperty(depth0, "invalidPhone") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "invalidPhone",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 28,
                    "column": 16
                },
                "end": {
                    "line": 28,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n\r\n            </div>\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__container") : stack1, depth0)) + '">\r\n                <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__info") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "passwordName") || (depth0 != null ? lookupProperty(depth0, "passwordName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "passwordName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 32,
                    "column": 50
                },
                "end": {
                    "line": 32,
                    "column": 66
                }
            }
        }) : helper)) + "</p>\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "passwordInput") || (depth0 != null ? lookupProperty(depth0, "passwordInput") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "passwordInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 33,
                    "column": 16
                },
                "end": {
                    "line": 33,
                    "column": 35
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "invalidPassword") || (depth0 != null ? lookupProperty(depth0, "invalidPassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "invalidPassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 34,
                    "column": 16
                },
                "end": {
                    "line": 34,
                    "column": 37
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n            </div>\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__containerLast") : stack1, depth0)) + '">\r\n                <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__info") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "passwordNameAgain") || (depth0 != null ? lookupProperty(depth0, "passwordNameAgain") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "passwordNameAgain",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 37,
                    "column": 50
                },
                "end": {
                    "line": 37,
                    "column": 71
                }
            }
        }) : helper)) + "</p>\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "passwordInputAgain") || (depth0 != null ? lookupProperty(depth0, "passwordInputAgain") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "passwordInputAgain",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 38,
                    "column": 16
                },
                "end": {
                    "line": 38,
                    "column": 40
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "invalidPasswordAgain") || (depth0 != null ? lookupProperty(depth0, "invalidPasswordAgain") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "invalidPasswordAgain",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 39,
                    "column": 16
                },
                "end": {
                    "line": 39,
                    "column": 42
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            </div>\r\n        </section>\r\n        <footer>\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "button") || (depth0 != null ? lookupProperty(depth0, "button") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "button",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 43,
                    "column": 12
                },
                "end": {
                    "line": 43,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "link",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 44,
                    "column": 12
                },
                "end": {
                    "line": 44,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </footer>\r\n    </form>\r\n</main>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtmEm":[function(require,module,exports) {
module.exports["welcome__items"] = `_1qOFfG_welcome__items`;
module.exports["login__info"] = `_1qOFfG_login__info`;
module.exports["login__container"] = `_1qOFfG_login__container`;
module.exports["welcome__header"] = `_1qOFfG_welcome__header`;
module.exports["login__containerLast"] = `_1qOFfG_login__containerLast`;
module.exports["welcome__box"] = `_1qOFfG_welcome__box`;
module.exports["welcome__container"] = `_1qOFfG_welcome__container`;

},{}],"iclCk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>Input);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _inputHbs = require("./input.hbs");
var _inputHbsDefault = parcelHelpers.interopDefault(_inputHbs);
var _inputModuleScss = require("./input.module.scss");
var _inputModuleScssDefault = parcelHelpers.interopDefault(_inputModuleScss);
class Input extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
        if (this.props.style) this.element?.setAttribute("class", `${this.props.style}`);
    }
    setValue(value) {
        return this.element.value = value;
    }
    getName() {
        return this.element.name;
    }
    getValue() {
        return this.element.value;
    }
    render() {
        return this.compile((0, _inputHbsDefault.default), {
            ...this.props,
            styles: (0, _inputModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./input.hbs":"1OoZ4","./input.module.scss":"3HTOJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1OoZ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.escapeExpression, alias2 = depth0 != null ? depth0 : container.nullContext || {}, alias3 = container.hooks.helperMissing, alias4 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<input class="' + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "input") : stack1, depth0)) + '" value="' + alias1((helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 41
                },
                "end": {
                    "line": 1,
                    "column": 52
                }
            }
        }) : helper)) + '" name="' + alias1((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 60
                },
                "end": {
                    "line": 1,
                    "column": 70
                }
            }
        }) : helper)) + '" type="' + alias1((helper = (helper = lookupProperty(helpers, "type") || (depth0 != null ? lookupProperty(depth0, "type") : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, {
            "name": "type",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 78
                },
                "end": {
                    "line": 1,
                    "column": 88
                }
            }
        }) : helper)) + '" placeholder="' + alias1((helper = (helper = lookupProperty(helpers, "placeholder") || (depth0 != null ? lookupProperty(depth0, "placeholder") : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, {
            "name": "placeholder",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 103
                },
                "end": {
                    "line": 1,
                    "column": 118
                }
            }
        }) : helper)) + '"/>\r\n\r\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3HTOJ":[function(require,module,exports) {
module.exports["input"] = `uct5bq_input`;

},{}],"gyOYB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseLink", ()=>BaseLink);
parcelHelpers.export(exports, "Link", ()=>Link);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _linkHbs = require("./link.hbs");
var _linkHbsDefault = parcelHelpers.interopDefault(_linkHbs);
var _linkModuleScss = require("./link.module.scss");
var _linkModuleScssDefault = parcelHelpers.interopDefault(_linkModuleScss);
var _withRouter = require("../../hocs/withRouter");
class BaseLink extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props,
            events: {
                click: ()=>this.navigate()
            }
        });
        if (this.props.style) this.element?.setAttribute("class", `${this.props.style}`);
    }
    navigate() {
        this.props.router.go(this.props.to);
    }
    render() {
        return this.compile((0, _linkHbsDefault.default), {
            ...this.props,
            styles: (0, _linkModuleScssDefault.default)
        });
    }
}
const Link = (0, _withRouter.withRouter)(BaseLink);

},{"../../utils/Block":"915bj","./link.hbs":"l98xn","./link.module.scss":"2oXXN","../../hocs/withRouter":"kYXgc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l98xn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<span class="' + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "link") : stack1, depth0)) + '">' + alias1((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 30
                },
                "end": {
                    "line": 1,
                    "column": 41
                }
            }
        }) : helper)) + "</span>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2oXXN":[function(require,module,exports) {
module.exports["link"] = `yRsHwW_link`;

},{}],"kYXgc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withRouter", ()=>withRouter);
var _router = require("../utils/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _store = require("../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
function withRouter(Component) {
    return class extends Component {
        constructor(props){
            super({
                ...props,
                router: (0, _routerDefault.default)
            });
            (0, _storeDefault.default).on((0, _store.StoreEvents).Updated, ()=>{
                this.setProps({
                    ...(0, _storeDefault.default).getState()
                });
            });
        }
    };
}

},{"../utils/Router":"lWot6","../utils/Store":"euxgo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"euxgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StoreEvents", ()=>StoreEvents);
parcelHelpers.export(exports, "withStore", ()=>withStore);
var _eventBus = require("./EventBus");
var _eventBusDefault = parcelHelpers.interopDefault(_eventBus);
var _set = require("./set");
var _setDefault = parcelHelpers.interopDefault(_set);
let StoreEvents;
(function(StoreEvents) {
    StoreEvents["Updated"] = "updated";
})(StoreEvents || (StoreEvents = {}));
class Store extends (0, _eventBusDefault.default) {
    state = {};
    getState() {
        return this.state;
    }
    set(path, value) {
        (0, _setDefault.default)(this.state, path, value);
        this.emit(StoreEvents.Updated, this.getState());
    }
}
const store = new Store();
function withStore(mapStateToProps) {
    return function wrap(Component) {
        return class WithStore extends Component {
            constructor(props){
                let previousState = mapStateToProps(store.getState());
                super({
                    ...props,
                    ...previousState
                });
                store.on(StoreEvents.Updated, ()=>{
                    const stateProps = mapStateToProps(store.getState());
                    previousState = stateProps;
                    this.setProps({
                        ...stateProps
                    });
                });
            }
        };
    };
}
exports.default = store;

},{"./EventBus":"iVvKU","./set":"5RfbO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5RfbO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function set(object, path, value) {
    if (typeof path !== "string") throw new Error("path must be string");
    if (typeof object !== "object" || object === null) return object;
    const pathParts = path.split(".");
    let currentObject = object;
    for(let i = 0; i < pathParts.length - 1; i++){
        const key = pathParts[i];
        if (!currentObject.hasOwnProperty(key) || typeof currentObject[key] !== "object") currentObject[key] = {};
        currentObject = currentObject[key];
    }
    currentObject[pathParts[pathParts.length - 1]] = value;
    return object;
}
exports.default = set;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eglcY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Validation", ()=>Validation);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _validationHbs = require("./validation.hbs");
var _validationHbsDefault = parcelHelpers.interopDefault(_validationHbs);
var _validationModuleScss = require("./validation.module.scss");
var _validationModuleScssDefault = parcelHelpers.interopDefault(_validationModuleScss);
class Validation extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _validationHbsDefault.default), {
            ...this.props,
            styles: (0, _validationModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./validation.hbs":"5jFlZ","./validation.module.scss":"eV0Ns","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jFlZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<p class="' + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "validation") : stack1, depth0)) + '">' + alias1((helper = (helper = lookupProperty(helpers, "errName") || (depth0 != null ? lookupProperty(depth0, "errName") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "errName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 33
                },
                "end": {
                    "line": 1,
                    "column": 44
                }
            }
        }) : helper)) + "</p>\r\n\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eV0Ns":[function(require,module,exports) {
module.exports["validation"] = `Nbq-Hq_validation`;

},{}],"4S7AT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function validation(regexp, value) {
    return regexp.test(value);
}
exports.default = validation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"btuLA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthController", ()=>AuthController);
var _authAPI = require("../api/AuthAPI");
var _authAPIDefault = parcelHelpers.interopDefault(_authAPI);
var _store = require("../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _router = require("../utils/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _messagesController = require("./MessagesController");
var _messagesControllerDefault = parcelHelpers.interopDefault(_messagesController);
class AuthController {
    constructor(){
        this.api = (0, _authAPIDefault.default);
    }
    async signin(data) {
        try {
            await this.api.signin(data);
            await this.fetchUser().then((response)=>{
                if (response.id) (0, _routerDefault.default).go("/messenger");
            });
        } catch (e) {
            console.error(e);
        }
    }
    async signup(data) {
        try {
            await this.api.signup(data);
            await this.fetchUser().then((response)=>{
                if (response.id) (0, _routerDefault.default).go("/messenger");
            });
        } catch (e) {
            console.error(e.message);
        }
    }
    async fetchUser() {
        const user = await this.api.read();
        (0, _storeDefault.default).set("user", user);
        return user;
    }
    async logout() {
        try {
            (0, _messagesControllerDefault.default).closeAll();
            await this.api.logout();
            (0, _routerDefault.default).go("/");
        } catch (e) {
            console.error(e);
        }
    }
}
exports.default = new AuthController();

},{"../api/AuthAPI":"9MuyV","../utils/Store":"euxgo","../utils/Router":"lWot6","./MessagesController":"031LW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9MuyV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthAPI", ()=>AuthAPI);
var _baseApi = require("./BaseApi");
var _baseApiDefault = parcelHelpers.interopDefault(_baseApi);
class AuthAPI extends (0, _baseApiDefault.default) {
    constructor(){
        super("/auth");
    }
    signin(data) {
        return this.http.post("/signin", data);
    }
    signup(data) {
        return this.http.post("/signup", data);
    }
    read() {
        return this.http.get("/user");
    }
    logout() {
        return this.http.post("/logout");
    }
    create = undefined;
    update = undefined;
    delete = undefined;
}
exports.default = new AuthAPI();

},{"./BaseApi":"61JyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61JyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _http = require("../utils/HTTP");
class BaseAPI {
    constructor(endpoint){
        this.http = new (0, _http.HTTP)(endpoint);
    }
}
exports.default = BaseAPI;

},{"../utils/HTTP":"d58vo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d58vo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "METHODS", ()=>METHODS);
parcelHelpers.export(exports, "HTTP", ()=>HTTP);
parcelHelpers.export(exports, "fetchWithRetry", ()=>fetchWithRetry);
let METHODS;
(function(METHODS) {
    METHODS["Get"] = "Get";
    METHODS["Post"] = "Post";
    METHODS["Put"] = "Put";
    METHODS["Delete"] = "Delete";
})(METHODS || (METHODS = {}));
function queryStringify(data) {
    if (typeof data !== "object") throw new Error("Data must be object");
    const keys = Object.keys(data);
    return keys.reduce((result, key, index)=>{
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
    }, "?");
}
class HTTP {
    static API_URL = "https://ya-praktikum.tech/api/v2";
    constructor(endpoint){
        this.endpoint = `${HTTP.API_URL}${endpoint}`;
    }
    get(path = "/") {
        return this.request(this.endpoint + path);
    }
    post(path, data) {
        return this.request(this.endpoint + path, {
            method: METHODS.Post,
            data
        });
    }
    put(path, data) {
        return this.request(this.endpoint + path, {
            method: METHODS.Put,
            data
        });
    }
    delete(path, data) {
        return this.request(this.endpoint + path, {
            method: METHODS.Delete,
            data
        });
    }
    request(url, options = {
        method: METHODS.Get
    }, timeout = 0) {
        const { method , data  } = options;
        return new Promise(function(resolve, reject) {
            if (!method) {
                reject("No method");
                return;
            }
            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.Get;
            xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);
            xhr.onload = function() {
                resolve(xhr.response);
            };
            xhr.onerror = function() {
                reject(xhr.response);
            };
            xhr.onabort = ()=>reject({
                    reason: "abort"
                });
            xhr.onerror = ()=>reject({
                    reason: "network error"
                });
            xhr.ontimeout = ()=>reject({
                    reason: "timeout"
                });
            xhr.timeout = timeout;
            xhr.responseType = "json";
            xhr.withCredentials = true;
            if (isGet || !data) xhr.send();
            else if (data instanceof FormData) xhr.send(data);
            else {
                xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                xhr.send(JSON.stringify(data));
            }
        });
    }
}
function fetchWithRetry(url, options = {}) {
    const { tries =1  } = options;
    function onError(err) {
        const triesLeft = tries - 1;
        if (!triesLeft) throw err;
        return fetchWithRetry(url, {
            ...options,
            tries: triesLeft
        });
    }
    return fetch(url, options).catch(onError);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"031LW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _store = require("../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _ws = require("../utils/WS");
var _wsDefault = parcelHelpers.interopDefault(_ws);
class MessagesController {
    sockets = new Map();
    async connect(id, token) {
        if (this.sockets.has(id)) return;
        const userId = (0, _storeDefault.default).getState().user.id;
        const ws = new (0, _wsDefault.default)(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);
        this.sockets.set(id, ws);
        await ws.connect();
        this.subscribe(ws, id);
        this.fetchOldMessages(id);
    }
    sendMessage(id, message) {
        const socket = this.sockets.get(id);
        if (!socket) throw new Error(`Chat ${id} is not connected`);
        socket.send({
            type: "message",
            content: message
        });
    }
    fetchOldMessages(id) {
        const socket = this.sockets.get(id);
        if (!socket) throw new Error(`Chat ${id} is not connected`);
        socket.send({
            type: "get old",
            content: "0"
        });
    }
    closeAll() {
        Array.from(this.sockets.values()).forEach((socket)=>socket.close());
    }
    onMessage(id, messages) {
        let messagesToAdd = [];
        if (Array.isArray(messages)) messagesToAdd = messages.reverse();
        else messagesToAdd.push(messages);
        const currentMessages = ((0, _storeDefault.default).getState().messages || {})[id] || [];
        messagesToAdd = [
            ...currentMessages,
            ...messagesToAdd
        ];
        (0, _storeDefault.default).set(`messages.${id}`, messagesToAdd);
    }
    onClose(id) {
        this.sockets.delete(id);
    }
    subscribe(transport, id) {
        transport.on((0, _ws.WSEvents).Message, (message)=>this.onMessage(id, message));
        transport.on((0, _ws.WSEvents).Close, ()=>this.onClose(id));
    }
}
const controller = new MessagesController();
// @ts-ignore
window.messagesController = controller;
exports.default = controller;

},{"../utils/Store":"euxgo","../utils/WS":"kPgom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPgom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WSEvents", ()=>WSEvents);
var _eventBus = require("./EventBus");
var _eventBusDefault = parcelHelpers.interopDefault(_eventBus);
let WSEvents;
(function(WSEvents) {
    WSEvents["Connected"] = "connected";
    WSEvents["Error"] = "error";
    WSEvents["Message"] = "message";
    WSEvents["Close"] = "close";
})(WSEvents || (WSEvents = {}));
class WS extends (0, _eventBusDefault.default) {
    constructor(url){
        super();
        this.url = url;
        this.socket = null;
        this.pingInterval = 0;
    }
    send(data) {
        if (!this.socket) throw new Error("Socket is not connected");
        this.socket.send(JSON.stringify(data));
    }
    connect() {
        this.socket = new WebSocket(this.url);
        this.subscribe(this.socket);
        this.setupPing();
        return new Promise((resolve)=>{
            this.on(WSEvents.Connected, ()=>{
                resolve();
            });
        });
    }
    close() {
        this.socket?.close();
    }
    setupPing() {
        this.pingInterval = window.setInterval(()=>{
            this.send({
                type: "ping"
            });
        }, 5000);
        this.on(WSEvents.Close, ()=>{
            clearInterval(this.pingInterval);
            this.pingInterval = 0;
        });
    }
    subscribe(socket) {
        socket.addEventListener("open", ()=>{
            this.emit(WSEvents.Connected);
        });
        socket.addEventListener("close", ()=>{
            this.emit(WSEvents.Close);
        });
        socket.addEventListener("error", (e)=>{
            this.emit(WSEvents.Error, e);
        });
        socket.addEventListener("message", (message)=>{
            const data = JSON.parse(message.data);
            if (data.type && data.type === "pong") return;
            this.emit(WSEvents.Message, data);
        });
    }
}
exports.default = WS;

},{"./EventBus":"iVvKU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fq9cK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogInPage", ()=>LogInPage);
var _button = require("../../components/Button");
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _tplHbs = require("./tpl.hbs");
var _tplHbsDefault = parcelHelpers.interopDefault(_tplHbs);
var _loginModuleScss = require("./login.module.scss");
var _loginModuleScssDefault = parcelHelpers.interopDefault(_loginModuleScss);
var _input = require("../../components/Input");
var _link = require("../../components/Link");
var _validation = require("../../components/Validation");
var _validation1 = require("../../utils/Validation");
var _validationDefault = parcelHelpers.interopDefault(_validation1);
var _authController = require("../../controllers/AuthController");
var _authControllerDefault = parcelHelpers.interopDefault(_authController);
class LogInPage extends (0, _blockDefault.default) {
    constructor(){
        super({});
    }
    init() {
        this.children.login = new (0, _input.Input)({
            name: "login",
            type: "text",
            events: {
                blur: ()=>{
                    if (!(0, _validationDefault.default)(/^(?!^[0-9]*$)[\w-]{3,20}$/, this.children.login.getValue())) {
                        this.children.invalidLogin.show();
                        this.children.login.setValue("");
                    } else this.children.invalidLogin.hide();
                }
            }
        });
        this.children.invalidLogin = new (0, _validation.Validation)({
            errName: "Пожалуйста убедитесь, что нет спецсимволов и пробелов, минимум 4 символа"
        });
        this.children.password = new (0, _input.Input)({
            name: "password",
            type: "password",
            events: {
                blur: ()=>{
                    if (!(0, _validationDefault.default)(/^(?=.*\d)(?=.*[A-Z]).{8,40}$/, this.children.password.getValue())) {
                        this.children.invalidPassword.show();
                        this.children.password.setValue("");
                    } else this.children.invalidPassword.hide();
                }
            }
        });
        this.children.invalidPassword = new (0, _validation.Validation)({
            errName: "Пожалуйста убедитесь, что пароль от 8 до 40 символов, и обязательно есть хотя бы одна заглавная буква и цифра."
        });
        this.children.link = new (0, _link.Link)({
            label: "Нет аккаунта?",
            to: "/sign-up"
        });
        this.children.button = new (0, _button.Button)({
            label: "Авторизоваться",
            type: "submit",
            events: {
                click: (e)=>{
                    this.onSubmit();
                    e.preventDefault();
                }
            }
        });
    }
    onSubmit() {
        const values = Object.values(this.children).filter((child)=>child instanceof (0, _input.Input)).map((child)=>[
                child.getName(),
                child.getValue()
            ]);
        const data = Object.fromEntries(values);
        (0, _authControllerDefault.default).signin(data);
    }
    render() {
        return this.compile((0, _tplHbsDefault.default), {
            styles: (0, _loginModuleScssDefault.default),
            loginName: "Логин",
            passwordName: "Пароль"
        });
    }
}

},{"../../components/Button":"i3jlU","../../utils/Block":"915bj","./tpl.hbs":"9nuSa","./login.module.scss":"1a6TI","../../components/Input":"iclCk","../../components/Link":"gyOYB","../../components/Validation":"eglcY","../../utils/Validation":"4S7AT","../../controllers/AuthController":"btuLA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nuSa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "welcome__container") : stack1, depth0)) + '">\r\n    <form class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "welcome__box") : stack1, depth0)) + '">\r\n        <h1 class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "welcome__header") : stack1, depth0)) + '">Вход</h1>\r\n        <section>\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__container") : stack1, depth0)) + '">\r\n                <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__info") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "loginName") || (depth0 != null ? lookupProperty(depth0, "loginName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "loginName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 50
                },
                "end": {
                    "line": 6,
                    "column": 63
                }
            }
        }) : helper)) + "</p>\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "login") || (depth0 != null ? lookupProperty(depth0, "login") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "login",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 16
                },
                "end": {
                    "line": 7,
                    "column": 27
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "invalidLogin") || (depth0 != null ? lookupProperty(depth0, "invalidLogin") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "invalidLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 16
                },
                "end": {
                    "line": 8,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n            </div>\r\n\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__containerLast") : stack1, depth0)) + '">\r\n                <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "login__info") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "passwordName") || (depth0 != null ? lookupProperty(depth0, "passwordName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "passwordName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 50
                },
                "end": {
                    "line": 12,
                    "column": 66
                }
            }
        }) : helper)) + "</p>\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "password") || (depth0 != null ? lookupProperty(depth0, "password") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "password",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 16
                },
                "end": {
                    "line": 13,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "invalidPassword") || (depth0 != null ? lookupProperty(depth0, "invalidPassword") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "invalidPassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 16
                },
                "end": {
                    "line": 14,
                    "column": 37
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            </div>\r\n        </section>\r\n        <footer>\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "button") || (depth0 != null ? lookupProperty(depth0, "button") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "button",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 12
                },
                "end": {
                    "line": 18,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "link",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 19,
                    "column": 12
                },
                "end": {
                    "line": 19,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </footer>\r\n    </form>\r\n</main>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1a6TI":[function(require,module,exports) {
module.exports["welcome__box"] = `O61yKG_welcome__box`;
module.exports["login__info"] = `O61yKG_login__info`;
module.exports["welcome__header"] = `O61yKG_welcome__header`;
module.exports["welcome__container"] = `O61yKG_welcome__container`;
module.exports["login__containerLast"] = `O61yKG_login__containerLast`;
module.exports["welcome__items"] = `O61yKG_welcome__items`;
module.exports["welcome__footer__btn"] = `O61yKG_welcome__footer__btn`;
module.exports["login__container"] = `O61yKG_login__container`;

},{}],"dr0X8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfilePage", ()=>ProfilePage);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _profileHbs = require("./profile.hbs");
var _profileHbsDefault = parcelHelpers.interopDefault(_profileHbs);
var _profileModuleScss = require("./profile.module.scss");
var _profileModuleScssDefault = parcelHelpers.interopDefault(_profileModuleScss);
var _label = require("../../components/Label");
var _navigation = require("../../components/Navigation");
var _button = require("../../components/Button");
var _input = require("../../components/Input");
var _arrow = require("../../components/Arrow");
var _store = require("../../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _updateController = require("../../controllers/UpdateController");
var _updateControllerDefault = parcelHelpers.interopDefault(_updateController);
var _authController = require("../../controllers/AuthController");
var _authControllerDefault = parcelHelpers.interopDefault(_authController);
var _avatar = require("../../components/Avatar");
var _router = require("../../utils/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _avatarInput = require("../../components/AvatarInput");
var _validation = require("../../utils/Validation");
var _validationDefault = parcelHelpers.interopDefault(_validation);
var _validation1 = require("../../components/Validation");
const userFields = [
    "email",
    "login",
    "first_name",
    "second_name",
    "display_name",
    "phone"
];
const componentsData = [
    "Почта",
    "Логин",
    "Имя",
    "Фамилия",
    "Имя в чате",
    "Телефон"
];
const passwordsData = {
    name: [
        "oldPassword",
        "newPassword",
        "newPasswordAgain"
    ],
    title: [
        "Старый пароль",
        "Новый пароль",
        "Новый пароль еще раз"
    ]
};
class DefaultProfilePage extends (0, _blockDefault.default) {
    init() {
        const context = window.location.pathname.split("/").pop();
        if (context === "settings") this.props.dataContext = [
            true,
            false,
            false
        ];
        else if (context === "changeData") this.props.dataContext = [
            false,
            true,
            false
        ];
        else if (context === "changePassword") this.props.dataContext = [
            false,
            false,
            true
        ];
        this.children.arrow = new (0, _arrow.Arrow)({
            to: "/messenger"
        });
        this.children.button = new (0, _button.Button)({
            type: "button",
            label: "Сохранить",
            events: {
                click: async ()=>{
                    await this.onSubmit();
                    (0, _routerDefault.default).go("/settings");
                }
            }
        });
        this.children.defaultField = this.createDefaultField(this.props);
        this.children.changeData = userFields.map((name, index)=>{
            return new (0, _label.Label)({
                name: "email",
                title: componentsData[index],
                custom: true,
                value: new (0, _input.Input)({
                    name: name,
                    type: "text",
                    value: this.props[name],
                    style: (0, _profileModuleScssDefault.default).profile__input,
                    events: {
                        blur: ()=>{
                            const input = this.children.changeData[index].children.value;
                            if (!(0, _validationDefault.default)(/@[\w\d]+(\.[\w\d]+)*$/, input.getValue())) {
                                this.children.invalidMail.show();
                                input.setValue("");
                            } else this.children.invalidMail.hide();
                        }
                    }
                })
            });
        });
        this.children.invalidMail = new (0, _validation1.Validation)({
            errName: "123123"
        });
        this.children.changePassword = passwordsData.name.map((name, index)=>{
            return new (0, _label.Label)({
                name: "password",
                title: passwordsData.title[index],
                custom: true,
                value: new (0, _input.Input)({
                    name: name,
                    type: "password",
                    events: {
                        keydown: ()=>{}
                    }
                })
            });
        });
        this.children.changeDataNav = new (0, _navigation.Navigation)({
            title: "Изменить данные",
            events: {
                click: ()=>{
                    (0, _routerDefault.default).go("/settings/changeData");
                }
            }
        });
        this.children.changePasswordNav = new (0, _navigation.Navigation)({
            title: "Сменить пароль",
            events: {
                click: ()=>{
                    (0, _routerDefault.default).go("/settings/changePassword");
                }
            }
        });
        this.children.exit = new (0, _navigation.Navigation)({
            title: "Выход",
            isExit: true,
            events: {
                click: ()=>{
                    (0, _authControllerDefault.default).logout();
                }
            }
        });
        this.children.avatarInput = new (0, _avatarInput.AvatarInput)({
            events: {
                change: (e)=>{
                    this.changeAvatar(e);
                }
            },
            name: "avatar"
        });
        this.children.avatar = new (0, _avatar.Avatar)({
            src: this.getAvatarLink()
        });
    }
    async changeAvatar(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("avatar", file);
        await (0, _updateControllerDefault.default).updateAvatar(formData);
        await (0, _authControllerDefault.default).fetchUser();
    }
    getAvatarLink() {
        if (this.props.avatar) return `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`;
        return "";
    }
    async onSubmit() {
        const context = window.location.pathname.split("/").pop();
        const children = this.children;
        const child = Object.keys(children).filter((name)=>name === context);
        let items = [];
        children[child[0]].map((item)=>{
            if (item._element.lastElementChild.value !== "") items.push([
                item._element.lastElementChild.name,
                item._element.lastElementChild.value
            ]);
        });
        const oldData = (0, _storeDefault.default).getState().user;
        const newData = Object.fromEntries(items);
        if (context === "changeData") await (0, _updateControllerDefault.default).updateUser(Object.assign(oldData, newData));
        else await (0, _updateControllerDefault.default).updatePassword(newData);
        await (0, _authControllerDefault.default).fetchUser();
    }
    componentDidUpdate(newProps) {
        this.children.defaultField = this.createDefaultField(newProps);
        return true;
    }
    createDefaultField(props) {
        return userFields.map((name, i)=>{
            return new (0, _label.Label)({
                name: name,
                title: componentsData[i],
                value: props[name],
                custom: false
            });
        });
    }
    render() {
        return this.compile((0, _profileHbsDefault.default), {
            ...this.props,
            styles: (0, _profileModuleScssDefault.default),
            accountName: `${(0, _storeDefault.default).getState().user.first_name + " #" + (0, _storeDefault.default).getState().user.id}`,
            Avatar: this.props.avatar
        });
    }
}
const withUser = (0, _store.withStore)((state)=>({
        ...state.user
    }));
const ProfilePage = withUser(DefaultProfilePage);

},{"../../utils/Block":"915bj","./profile.hbs":"gz6Ey","./profile.module.scss":"iEMAP","../../components/Label":"5w6fJ","../../components/Navigation":"lyfSW","../../components/Button":"i3jlU","../../components/Input":"iclCk","../../components/Arrow":"lvNiY","../../utils/Store":"euxgo","../../controllers/UpdateController":"5knhb","../../controllers/AuthController":"btuLA","../../components/Avatar":"iC4G6","../../utils/Router":"lWot6","../../components/AvatarInput":"kuEyZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../utils/Validation":"4S7AT","../../components/Validation":"eglcY"}],"gz6Ey":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "defaultField") || (depth0 != null ? lookupProperty(depth0, "defaultField") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "defaultField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 20
                },
                "end": {
                    "line": 18,
                    "column": 38
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n";
    },
    "3": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "changeData") || (depth0 != null ? lookupProperty(depth0, "changeData") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "changeData",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 24,
                    "column": 20
                },
                "end": {
                    "line": 24,
                    "column": 36
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n";
    },
    "5": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "changePassword") || (depth0 != null ? lookupProperty(depth0, "changePassword") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "changePassword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 28,
                    "column": 20
                },
                "end": {
                    "line": 28,
                    "column": 40
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n";
    },
    "7": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "changeDataNav") || (depth0 != null ? lookupProperty(depth0, "changeDataNav") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "changeDataNav",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 36,
                    "column": 20
                },
                "end": {
                    "line": 36,
                    "column": 39
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "changePasswordNav") || (depth0 != null ? lookupProperty(depth0, "changePasswordNav") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "changePasswordNav",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 37,
                    "column": 20
                },
                "end": {
                    "line": 37,
                    "column": 43
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "exit") || (depth0 != null ? lookupProperty(depth0, "exit") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "exit",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 38,
                    "column": 20
                },
                "end": {
                    "line": 38,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n\r\n";
    },
    "9": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "                    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "button") || (depth0 != null ? lookupProperty(depth0, "button") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "button",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 41,
                    "column": 20
                },
                "end": {
                    "line": 41,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__component") : stack1, depth0)) + '">\r\n    <a class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__back") : stack1, depth0)) + '">\r\n        ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "arrow") || (depth0 != null ? lookupProperty(depth0, "arrow") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "arrow",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 3,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n    </a>\r\n    <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__main") : stack1, depth0)) + '">\r\n        <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__container") : stack1, depth0)) + '">\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__image") : stack1, depth0)) + '">\r\n\r\n                ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "avatarInput") || (depth0 != null ? lookupProperty(depth0, "avatarInput") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "avatarInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 16
                },
                "end": {
                    "line": 9,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "avatar") || (depth0 != null ? lookupProperty(depth0, "avatar") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "avatar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 16
                },
                "end": {
                    "line": 10,
                    "column": 28
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n\r\n\r\n            </div>\r\n            <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__name") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "accountName") || (depth0 != null ? lookupProperty(depth0, "accountName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "accountName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 48
                },
                "end": {
                    "line": 14,
                    "column": 63
                }
            }
        }) : helper)) + '</p>\r\n            <section class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__items") : stack1, depth0)) + '">\r\n\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "dataContext") : depth0) != null ? lookupProperty(stack1, "0") : stack1, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 17,
                    "column": 16
                },
                "end": {
                    "line": 19,
                    "column": 23
                }
            }
        })) != null ? stack1 : "") + "\r\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "invalidMail") || (depth0 != null ? lookupProperty(depth0, "invalidMail") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "invalidMail",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 21,
                    "column": 16
                },
                "end": {
                    "line": 21,
                    "column": 33
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "dataContext") : depth0) != null ? lookupProperty(stack1, "1") : stack1, {
            "name": "if",
            "hash": {},
            "fn": container.program(3, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 23,
                    "column": 16
                },
                "end": {
                    "line": 25,
                    "column": 23
                }
            }
        })) != null ? stack1 : "") + "\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "dataContext") : depth0) != null ? lookupProperty(stack1, "2") : stack1, {
            "name": "if",
            "hash": {},
            "fn": container.program(5, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 27,
                    "column": 16
                },
                "end": {
                    "line": 29,
                    "column": 23
                }
            }
        })) != null ? stack1 : "") + '\r\n\r\n            </section>\r\n            <footer class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__action__container") : stack1, depth0)) + '">\r\n\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "dataContext") : depth0) != null ? lookupProperty(stack1, "0") : stack1, {
            "name": "if",
            "hash": {},
            "fn": container.program(7, data, 0),
            "inverse": container.program(9, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 35,
                    "column": 16
                },
                "end": {
                    "line": 43,
                    "column": 23
                }
            }
        })) != null ? stack1 : "") + "\r\n            </footer>\r\n        </div>\r\n    </div>\r\n</main>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iEMAP":[function(require,module,exports) {
module.exports["profile__back"] = `ZZhonq_profile__back`;
module.exports["profile__component"] = `ZZhonq_profile__component`;
module.exports["profile__container"] = `ZZhonq_profile__container`;
module.exports["save__button"] = `ZZhonq_save__button`;
module.exports["profile__items"] = `ZZhonq_profile__items`;
module.exports["profile__action__container"] = `ZZhonq_profile__action__container`;
module.exports["action__change"] = `ZZhonq_action__change`;
module.exports["profile__input"] = `ZZhonq_profile__input`;
module.exports["profile__last"] = `ZZhonq_profile__last`;
module.exports["profile__main"] = `ZZhonq_profile__main`;
module.exports["profile__name"] = `ZZhonq_profile__name`;
module.exports["profile__box"] = `ZZhonq_profile__box`;
module.exports["profile__image"] = `ZZhonq_profile__image`;

},{}],"5w6fJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Label", ()=>Label);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _labelHbs = require("./label.hbs");
var _labelHbsDefault = parcelHelpers.interopDefault(_labelHbs);
var _labelModuleScss = require("./label.module.scss");
var _labelModuleScssDefault = parcelHelpers.interopDefault(_labelModuleScss);
var _paragraph = require("./paragraph");
class Label extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    init() {
        if (!this.props.custom) this.children.value = new (0, _paragraph.Paragraph)({
            title: this.props.value
        });
    }
    render() {
        return this.compile((0, _labelHbsDefault.default), {
            ...this.props,
            styles: (0, _labelModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./label.hbs":"g4GiB","./label.module.scss":"fFqjA","./paragraph":"7hTR4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4GiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__box") : stack1, depth0)) + '">\r\n    <h class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__header") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 42
                },
                "end": {
                    "line": 2,
                    "column": 51
                }
            }
        }) : helper)) + "</h>\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 15
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</div>\r\n\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fFqjA":[function(require,module,exports) {
module.exports["profile__header__info"] = `KZc3XW_profile__header__info`;
module.exports["profile__box"] = `KZc3XW_profile__box`;
module.exports["profile__header"] = `KZc3XW_profile__header`;

},{}],"7hTR4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Paragraph", ()=>Paragraph);
var _block = require("../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _parHbs = require("./par.hbs");
var _parHbsDefault = parcelHelpers.interopDefault(_parHbs);
var _labelModuleScss = require("../label.module.scss");
var _labelModuleScssDefault = parcelHelpers.interopDefault(_labelModuleScss);
class Paragraph extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _parHbsDefault.default), {
            ...this.props,
            styles: (0, _labelModuleScssDefault.default)
        });
    }
}

},{"../../../utils/Block":"915bj","./par.hbs":"ach57","../label.module.scss":"fFqjA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ach57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<p class="' + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__header__info") : stack1, depth0)) + '"> ' + alias1((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 45
                },
                "end": {
                    "line": 1,
                    "column": 54
                }
            }
        }) : helper)) + " </p>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lyfSW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Navigation", ()=>Navigation);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _navigationHbs = require("./navigation.hbs");
var _navigationHbsDefault = parcelHelpers.interopDefault(_navigationHbs);
var _navigationModuleScss = require("./navigation.module.scss");
var _navigationModuleScssDefault = parcelHelpers.interopDefault(_navigationModuleScss);
class Navigation extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _navigationHbsDefault.default), {
            ...this.props,
            styles: (0, _navigationModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./navigation.hbs":"kSuFw","./navigation.module.scss":"fYKi2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kSuFw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__action__exit") : stack1, depth0)) + "\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__box") : stack1, depth0)) + '">\r\n    <p class="\r\n    ' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "profile__action__header") : stack1, depth0)) + "\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias3, depth0 != null ? lookupProperty(depth0, "isExit") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 6,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + '    ">\r\n        ' + alias2((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias3, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 8
                },
                "end": {
                    "line": 8,
                    "column": 17
                }
            }
        }) : helper)) + "\r\n    </p>\r\n</div>\r\n\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYKi2":[function(require,module,exports) {
module.exports["profile__box"] = `-yseVG_profile__box`;
module.exports["profile__action__header"] = `-yseVG_profile__action__header`;
module.exports["profile__action__exit"] = `-yseVG_profile__action__exit`;

},{}],"lvNiY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ArrowBase", ()=>ArrowBase);
parcelHelpers.export(exports, "Arrow", ()=>Arrow);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _arrowHbs = require("./arrow.hbs");
var _arrowHbsDefault = parcelHelpers.interopDefault(_arrowHbs);
var _arrowModuleScss = require("./arrow.module.scss");
var _arrowModuleScssDefault = parcelHelpers.interopDefault(_arrowModuleScss);
var _withRouter = require("../../hocs/withRouter");
class ArrowBase extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props,
            events: {
                click: ()=>this.navigate()
            }
        });
        if (this.props.style) this.element?.setAttribute("class", `${this.props.style}`);
    }
    navigate() {
        this.props.router.go(this.props.to);
    }
    render() {
        return this.compile((0, _arrowHbsDefault.default), {
            ...this.props,
            styles: (0, _arrowModuleScssDefault.default)
        });
    }
}
const Arrow = (0, _withRouter.withRouter)(ArrowBase);

},{"../../utils/Block":"915bj","./arrow.hbs":"cyWBr","./arrow.module.scss":"4DYbD","../../hocs/withRouter":"kYXgc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cyWBr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<button class="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "arrow") : stack1, depth0)) + '"></button>\r\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DYbD":[function(require,module,exports) {
module.exports["arrow"] = `Pme3uG_arrow`;

},{}],"5knhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UpdateController", ()=>UpdateController);
var _updateAPI = require("../api/UpdateAPI");
var _updateAPIDefault = parcelHelpers.interopDefault(_updateAPI);
class UpdateController {
    constructor(){
        this.api = (0, _updateAPIDefault.default);
    }
    async updateUser(data) {
        try {
            await this.api.updateUser(data);
        } catch (e) {
            console.error(e);
        }
    }
    async updatePassword(data) {
        try {
            await this.api.updatePassword(data);
        } catch (e) {
            console.error(e);
        }
    }
    async updateAvatar(data) {
        try {
            return await this.api.updateAvatar(data);
        } catch (e) {
            console.error(e);
        }
    }
}
exports.default = new UpdateController();

},{"../api/UpdateAPI":"5QD3L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5QD3L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UpdateAPI", ()=>UpdateAPI);
var _baseApi = require("./BaseApi");
var _baseApiDefault = parcelHelpers.interopDefault(_baseApi);
class UpdateAPI extends (0, _baseApiDefault.default) {
    constructor(){
        super("/user");
    }
    updateUser(data) {
        return this.http.put("/profile", data);
    }
    updatePassword(data) {
        return this.http.put("/password", data);
    }
    updateAvatar(data) {
        return this.http.put("/profile/avatar", data);
    }
    read = undefined;
    create = undefined;
    update = undefined;
    delete = undefined;
}
exports.default = new UpdateAPI();

},{"./BaseApi":"61JyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iC4G6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Avatar", ()=>Avatar);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _inputHbs = require("./input.hbs");
var _inputHbsDefault = parcelHelpers.interopDefault(_inputHbs);
var _inputModuleScss = require("./input.module.scss");
var _inputModuleScssDefault = parcelHelpers.interopDefault(_inputModuleScss);
class Avatar extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _inputHbsDefault.default), {
            ...this.props,
            styles: (0, _inputModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./input.hbs":"jL08p","./input.module.scss":"lcLnm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jL08p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<img name="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 11
                },
                "end": {
                    "line": 1,
                    "column": 19
                }
            }
        }) : helper)) + '" src="' + alias4((helper = (helper = lookupProperty(helpers, "src") || (depth0 != null ? lookupProperty(depth0, "src") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "src",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 26
                },
                "end": {
                    "line": 1,
                    "column": 33
                }
            }
        }) : helper)) + '" class="' + alias4(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "file__avatar") : stack1, depth0)) + '"/>\r\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lcLnm":[function(require,module,exports) {
module.exports["file__avatar"] = `YOOlCG_file__avatar`;

},{}],"kuEyZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AvatarInput", ()=>AvatarInput);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _inputHbs = require("./input.hbs");
var _inputHbsDefault = parcelHelpers.interopDefault(_inputHbs);
var _inputModuleScss = require("./input.module.scss");
var _inputModuleScssDefault = parcelHelpers.interopDefault(_inputModuleScss);
class AvatarInput extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
        if (this.props.style) this.element?.setAttribute("class", `${this.props.style}`);
    }
    setValue(value) {
        return this.element.value = value;
    }
    getName() {
        return this.element.name;
    }
    getValue() {
        return this.element.value;
    }
    render() {
        return this.compile((0, _inputHbsDefault.default), {
            ...this.props,
            styles: (0, _inputModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./input.hbs":"9Z24f","./input.module.scss":"92trS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Z24f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<input name="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 13
                },
                "end": {
                    "line": 1,
                    "column": 21
                }
            }
        }) : helper)) + '" accept="image/*" src="' + alias4((helper = (helper = lookupProperty(helpers, "src") || (depth0 != null ? lookupProperty(depth0, "src") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "src",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 45
                },
                "end": {
                    "line": 1,
                    "column": 52
                }
            }
        }) : helper)) + '" class="' + alias4(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "file__avatar") : stack1, depth0)) + '" type="file"/>\r\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"92trS":[function(require,module,exports) {
module.exports["file__avatar"] = `jsStqq_file__avatar`;

},{}],"jx7Bz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatPage", ()=>ChatPage);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _chatPageHbs = require("./chatPage.hbs");
var _chatPageHbsDefault = parcelHelpers.interopDefault(_chatPageHbs);
var _chatPageModuleScss = require("./chatPage.module.scss");
var _chatPageModuleScssDefault = parcelHelpers.interopDefault(_chatPageModuleScss);
var _messenger = require("../../components/Messenger");
var _chatList = require("../../components/ChatList");
var _chatsController = require("../../controllers/ChatsController");
var _chatsControllerDefault = parcelHelpers.interopDefault(_chatsController);
class ChatPage extends (0, _blockDefault.default) {
    constructor(){
        super({});
    }
    async init() {
        this.children.chatsList = new (0, _chatList.ChatsList)({
            isLoaded: false
        });
        (0, _chatsControllerDefault.default).fetchChats().finally(()=>{
            this.children.chatsList.setProps({
                isLoaded: true
            });
        });
        this.children.messenger = new (0, _messenger.Messenger)({});
    }
    render() {
        return this.compile((0, _chatPageHbsDefault.default), {
            ...this.props,
            styles: (0, _chatPageModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./chatPage.hbs":"b2p6C","./chatPage.module.scss":"B7nFr","../../components/Messenger":"1O6mj","../../components/ChatList":"cIH1I","../../controllers/ChatsController":"jYChn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2p6C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main class="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "selectchat__container") : stack1, depth0)) + '">\r\n\r\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatsList") || (depth0 != null ? lookupProperty(depth0, "chatsList") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatsList",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "messenger") || (depth0 != null ? lookupProperty(depth0, "messenger") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "messenger",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</main>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"B7nFr":[function(require,module,exports) {
module.exports["selectchat__container"] = `J9G81a_selectchat__container`;
module.exports["temporary"] = `J9G81a_temporary`;

},{}],"1O6mj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Messenger", ()=>Messenger);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _messengerHbs = require("./messenger.hbs");
var _messengerHbsDefault = parcelHelpers.interopDefault(_messengerHbs);
var _messangerModuleScss = require("./messanger.module.scss");
var _messangerModuleScssDefault = parcelHelpers.interopDefault(_messangerModuleScss);
var _time = require("./Time");
var _message = require("../Message");
var _button = require("../Button");
var _input = require("../Input");
var _messagesController = require("../../controllers/MessagesController");
var _messagesControllerDefault = parcelHelpers.interopDefault(_messagesController);
var _store = require("../../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _modalTrigger = require("../ModalTrigger");
var _modal = require("../ModalTrigger/Modal");
var _addUserToChat = require("../addUserToChat");
var _avatar = require("../Avatar");
let isShown = false;
let date = new Date();
class DefaultMessenger extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.messages = this.createMessages(this.props);
        const chatId = window.location.pathname.split("/").pop();
        if (chatId) (0, _storeDefault.default).set("selectedChat", Number(chatId));
        this.children.messages = this.createMessages(this.props);
        this.children.time = new (0, _time.Time)({
            time: `${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`
        });
        this.children.button = new (0, _button.Button)({
            style: (0, _messangerModuleScssDefault.default).footer__button,
            type: "button",
            label: "",
            events: {
                click: ()=>{
                    const message = this.children.messengerInput.getValue();
                    this.children.messengerInput.setValue("");
                    if (message) (0, _messagesControllerDefault.default).sendMessage(this.props.selectedChat, message);
                }
            }
        });
        this.children.messengerInput = new (0, _input.Input)({
            style: (0, _messangerModuleScssDefault.default).footer__input,
            placeholder: "Сообщение",
            name: "message",
            type: "text",
            events: {
                keydown: (e)=>{
                    if (e.keyCode == 13) {
                        const message = this.children.messengerInput.getValue();
                        this.children.messengerInput.setValue("");
                        if (message) (0, _messagesControllerDefault.default).sendMessage(this.props.selectedChat, message);
                    }
                }
            }
        });
        this.children.chatAvatar = new (0, _avatar.Avatar)({
            src: this.getAvatarLink()
        });
        this.children.showModal = new (0, _modalTrigger.TriggerModal)({
            events: {
                click: ()=>{
                    this.showModal();
                }
            }
        });
        this.children.modal = new (0, _modal.Modal)({});
        this.children.addUserModal = new (0, _addUserToChat.addUserModal)({
            userLogin: []
        });
    }
    componentDidUpdate(_oldProps, newProps) {
        this.children.messages = this.createMessages(newProps);
        return true;
    }
    getAvatarLink() {
        if (this.props.chatAvatar) return `https://ya-praktikum.tech/api/v2/resources${this.props.chatAvatar}`;
        return "";
    }
    createMessages(props) {
        return props.messages.map((data)=>{
            return new (0, _message.Message)({
                ...data,
                myMsg: props.userId === data.user_id
            });
        });
    }
    showModal() {
        if (!isShown) {
            this.children.modal.show();
            isShown = true;
        } else {
            this.children.modal.hide();
            isShown = false;
        }
    }
    render() {
        return this.compile((0, _messengerHbsDefault.default), {
            ...this.props,
            styles: (0, _messangerModuleScssDefault.default)
        });
    }
}
const withSelectedChatMessages = (0, _store.withStore)((state)=>{
    const selectedChatId = state.selectedChat;
    if (!selectedChatId) return {
        messages: [],
        selectedChat: undefined,
        userId: state.user.id
    };
    return {
        messages: (state.messages || {})[selectedChatId] || [],
        selectedChat: state.selectedChat,
        userId: state.user.id,
        userModal: state.modal,
        chatName: state.activeChat.title
    };
});
const Messenger = withSelectedChatMessages(DefaultMessenger);

},{"../../utils/Block":"915bj","./messenger.hbs":"g50FL","./messanger.module.scss":"3Jf9F","./Time":"62UNT","../Message":"5cdWT","../Button":"i3jlU","../Input":"iclCk","../../controllers/MessagesController":"031LW","../../utils/Store":"euxgo","../ModalTrigger":"cbGWC","../ModalTrigger/Modal":"6FC4Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../addUserToChat":"e8bUY","../Avatar":"iC4G6"}],"g50FL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "addUserModal") || (depth0 != null ? lookupProperty(depth0, "addUserModal") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "addUserModal",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 8
                },
                "end": {
                    "line": 5,
                    "column": 26
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '\r\n<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chatMessage__container") : stack1, depth0)) + '">\r\n\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias3, depth0 != null ? lookupProperty(depth0, "userModal") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 6,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + '\r\n    <header class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "header__container") : stack1, depth0)) + '">\r\n            <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "header__item") : stack1, depth0)) + '">\r\n                <span class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "header__avatar") : stack1, depth0)) + '">\r\n                    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatAvatar") || (depth0 != null ? lookupProperty(depth0, "chatAvatar") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "chatAvatar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 20
                },
                "end": {
                    "line": 11,
                    "column": 36
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n                </span>\r\n                <h class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "header__username") : stack1, depth0)) + '">' + alias2((helper = (helper = lookupProperty(helpers, "chatName") || (depth0 != null ? lookupProperty(depth0, "chatName") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "chatName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 55
                },
                "end": {
                    "line": 13,
                    "column": 67
                }
            }
        }) : helper)) + "</h>\r\n            </div>\r\n\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "modal") || (depth0 != null ? lookupProperty(depth0, "modal") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "modal",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 12
                },
                "end": {
                    "line": 16,
                    "column": 23
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "showModal") || (depth0 != null ? lookupProperty(depth0, "showModal") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "showModal",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 12
                },
                "end": {
                    "line": 18,
                    "column": 27
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n\r\n        </header>\r\n        <main class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "main__container") : stack1, depth0)) + '">\r\n            ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "time") || (depth0 != null ? lookupProperty(depth0, "time") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "time",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 12
                },
                "end": {
                    "line": 22,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "messages") || (depth0 != null ? lookupProperty(depth0, "messages") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "messages",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 23,
                    "column": 12
                },
                "end": {
                    "line": 23,
                    "column": 26
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n\r\n        </main>\r\n        <footer class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "footer__container") : stack1, depth0)) + '">\r\n            <svg class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "footer__icon") : stack1, depth0)) + '"></svg>\r\n            ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "messengerInput") || (depth0 != null ? lookupProperty(depth0, "messengerInput") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "messengerInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 28,
                    "column": 12
                },
                "end": {
                    "line": 28,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "button") || (depth0 != null ? lookupProperty(depth0, "button") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "button",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 29,
                    "column": 12
                },
                "end": {
                    "line": 29,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        </footer>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Jf9F":[function(require,module,exports) {
module.exports["chatMessage__container"] = `rggNwa_chatMessage__container`;
module.exports["header__container"] = `rggNwa_header__container`;
module.exports["header__username"] = `rggNwa_header__username`;
module.exports["header__item"] = `rggNwa_header__item`;
module.exports["main__container"] = `rggNwa_main__container`;
module.exports["footer__icon"] = `rggNwa_footer__icon`;
module.exports["footer__button"] = `rggNwa_footer__button`;
module.exports["footer__container"] = `rggNwa_footer__container`;
module.exports["footer__input"] = `rggNwa_footer__input`;
module.exports["header__avatar"] = `rggNwa_header__avatar`;

},{}],"62UNT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Time", ()=>Time);
var _block = require("../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _timeHbs = require("./time.hbs");
var _timeHbsDefault = parcelHelpers.interopDefault(_timeHbs);
var _timeModuleScss = require("./time.module.scss");
var _timeModuleScssDefault = parcelHelpers.interopDefault(_timeModuleScss);
class Time extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _timeHbsDefault.default), {
            ...this.props,
            styles: (0, _timeModuleScssDefault.default)
        });
    }
}

},{"../../../utils/Block":"915bj","./time.hbs":"1cixV","./time.module.scss":"gu9EY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cixV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<h class="' + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "main__time") : stack1, depth0)) + '">' + alias1((helper = (helper = lookupProperty(helpers, "time") || (depth0 != null ? lookupProperty(depth0, "time") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "time",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 33
                },
                "end": {
                    "line": 1,
                    "column": 41
                }
            }
        }) : helper)) + "</h>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gu9EY":[function(require,module,exports) {
module.exports["main__time"] = `EFcv_G_main__time`;

},{}],"5cdWT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Message", ()=>Message);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _msgHbs = require("./msg.hbs");
var _msgHbsDefault = parcelHelpers.interopDefault(_msgHbs);
var _msgModuleScss = require("./msg.module.scss");
var _msgModuleScssDefault = parcelHelpers.interopDefault(_msgModuleScss);
class Message extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _msgHbsDefault.default), {
            ...this.props,
            time: `${new Date(this.props.time).getHours() + ":"}
      ${new Date(this.props.time).getMinutes()}`,
            styles: (0, _msgModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./msg.hbs":"byrGY","./msg.module.scss":"jJ59Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"byrGY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "to__container") : stack1, depth0)) + "\r\n";
    },
    "3": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "from__container") : stack1, depth0)) + "\r\n";
    },
    "5": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "from__item") : stack1, depth0)) + "\r\n";
    },
    "7": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "        " + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "to__item") : stack1, depth0)) + "\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "myMsg") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.program(3, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 6,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + '        ">\r\n\r\n    <div class="\r\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "myMsg") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(5, data, 0),
            "inverse": container.program(7, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 4
                },
                "end": {
                    "line": 14,
                    "column": 11
                }
            }
        })) != null ? stack1 : "") + '    ">\r\n\r\n        ' + alias4((helper = (helper = lookupProperty(helpers, "content") || (depth0 != null ? lookupProperty(depth0, "content") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "content",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 17,
                    "column": 8
                },
                "end": {
                    "line": 17,
                    "column": 19
                }
            }
        }) : helper)) + '\r\n\r\n        <div class="' + alias4(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "message__time") : stack1, depth0)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "time") || (depth0 != null ? lookupProperty(depth0, "time") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "time",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 19,
                    "column": 46
                },
                "end": {
                    "line": 19,
                    "column": 54
                }
            }
        }) : helper)) + "</div>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jJ59Q":[function(require,module,exports) {
module.exports["from__container"] = `xmqUra_from__container`;
module.exports["main__time"] = `xmqUra_main__time`;
module.exports["to__container"] = `xmqUra_to__container`;
module.exports["to__item"] = `xmqUra_to__item`;
module.exports["message__time"] = `xmqUra_message__time`;
module.exports["from__item"] = `xmqUra_from__item`;

},{}],"cbGWC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TriggerModal", ()=>TriggerModal);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _showModalTemplateHbs = require("./showModalTemplate.hbs");
var _showModalTemplateHbsDefault = parcelHelpers.interopDefault(_showModalTemplateHbs);
var _modalModuleScss = require("./modal.module.scss");
var _modalModuleScssDefault = parcelHelpers.interopDefault(_modalModuleScss);
class TriggerModal extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _showModalTemplateHbsDefault.default), {
            ...this.props,
            styles: (0, _modalModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./showModalTemplate.hbs":"6JqRG","./modal.module.scss":"j6PmD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6JqRG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, alias1 = container.lambda, alias2 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "header__item") : stack1, depth0)) + '">\r\n    <span rel="stylesheet" class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "header__options") : stack1, depth0)) + '"></span>\r\n</div>\r\n\r\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j6PmD":[function(require,module,exports) {
module.exports["header__item"] = `prqzzG_header__item`;
module.exports["modal__container"] = `prqzzG_modal__container`;
module.exports["modal__window"] = `prqzzG_modal__window`;
module.exports["modal__window__red"] = `prqzzG_modal__window__red`;
module.exports["modal__avatar"] = `prqzzG_modal__avatar`;
module.exports["header__options"] = `prqzzG_header__options`;

},{}],"6FC4Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modal", ()=>Modal);
var _block = require("../../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _modalTemplateHbs = require("./modalTemplate.hbs");
var _modalTemplateHbsDefault = parcelHelpers.interopDefault(_modalTemplateHbs);
var _modalModuleScss = require("../modal.module.scss");
var _modalModuleScssDefault = parcelHelpers.interopDefault(_modalModuleScss);
var _button = require("../../Button");
var _chatsController = require("../../../controllers/ChatsController");
var _chatsControllerDefault = parcelHelpers.interopDefault(_chatsController);
var _router = require("../../../utils/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _store = require("../../../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _avatarInput = require("../../AvatarInput");
class Modal extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.addUser = new (0, _button.Button)({
            label: "Добавить пользователя",
            events: {
                click: ()=>{
                    (0, _storeDefault.default).set("modal", true);
                }
            },
            style: (0, _modalModuleScssDefault.default).modal__window
        });
        this.children.deleteChat = new (0, _button.Button)({
            label: "Удалить чат",
            events: {
                click: async ()=>{
                    const chatId = window.location.pathname.split("/").pop();
                    await (0, _chatsControllerDefault.default).delete(Number(chatId));
                    (0, _routerDefault.default).go("/messenger");
                }
            },
            style: (0, _modalModuleScssDefault.default).modal__window__red
        });
        this.children.avatar = new (0, _avatarInput.AvatarInput)({
            name: "chatAvatar",
            events: {
                change: async (event)=>{
                    await this.updateAvatar(event);
                }
            },
            style: (0, _modalModuleScssDefault.default).modal__avatar
        });
        this.children.uploadAvatar = new (0, _button.Button)({
            label: "Загрузить аватар чата",
            style: (0, _modalModuleScssDefault.default).modal__window
        });
    }
    async updateAvatar(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("avatar", file);
        const data = {
            chatId: (0, _storeDefault.default).getState().activeChat.id,
            avatar: formData
        };
        await (0, _chatsControllerDefault.default).updateAvatar(data);
        await (0, _chatsControllerDefault.default).fetchChats();
    }
    render() {
        return this.compile((0, _modalTemplateHbsDefault.default), {
            ...this.props,
            styles: (0, _modalModuleScssDefault.default)
        });
    }
}

},{"../../../utils/Block":"915bj","./modalTemplate.hbs":"e6jBS","../modal.module.scss":"j6PmD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../Button":"i3jlU","../../../controllers/ChatsController":"jYChn","../../../utils/Router":"lWot6","../../../utils/Store":"euxgo","../../AvatarInput":"kuEyZ"}],"e6jBS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal__container") : stack1, depth0)) + '">\r\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "addUser") || (depth0 != null ? lookupProperty(depth0, "addUser") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "addUser",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "uploadAvatar") || (depth0 != null ? lookupProperty(depth0, "uploadAvatar") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "uploadAvatar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "avatar") || (depth0 != null ? lookupProperty(depth0, "avatar") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "avatar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 16
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "deleteChat") || (depth0 != null ? lookupProperty(depth0, "deleteChat") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "deleteChat",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</div>\r\n\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jYChn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chatsApi = require("../api/ChatsApi");
var _chatsApiDefault = parcelHelpers.interopDefault(_chatsApi);
var _store = require("../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _messagesController = require("./MessagesController");
var _messagesControllerDefault = parcelHelpers.interopDefault(_messagesController);
class ChatsController {
    constructor(){
        this.api = (0, _chatsApiDefault.default);
    }
    async create(title) {
        await this.api.create(title);
        return this.fetchChats();
    }
    async fetchChats() {
        const chats = await this.api.read();
        chats.map(async (chat)=>{
            const token = await this.getToken(chat.id);
            await (0, _messagesControllerDefault.default).connect(chat.id, token);
        });
        const chatId = window.location.pathname.split("/").pop();
        const activeChat = Object.values(chats).find((item)=>item.id === Number(chatId));
        (0, _storeDefault.default).set("activeChat", activeChat);
        (0, _storeDefault.default).set("chats", chats);
    }
    addUserToChat(id, userId) {
        this.api.addUsers(id, [
            userId
        ]);
    }
    async updateAvatar(data) {
        try {
            await this.api.updateAvatar(data);
        } catch (e) {
            console.error(e);
        }
    }
    async delete(id) {
        await this.api.delete(id);
        this.fetchChats();
        const chats = await this.api.read();
        (0, _storeDefault.default).set("chats", chats);
    }
    getToken(id) {
        return this.api.getToken(id);
    }
    selectChat(id) {
        (0, _storeDefault.default).set("selectedChat", id);
    }
}
const controller = new ChatsController();
// @ts-ignore
window.chatsController = controller;
exports.default = controller;

},{"../api/ChatsApi":"cxAZB","../utils/Store":"euxgo","./MessagesController":"031LW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxAZB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsAPI", ()=>ChatsAPI);
var _baseApi = require("./BaseApi");
var _baseApiDefault = parcelHelpers.interopDefault(_baseApi);
class ChatsAPI extends (0, _baseApiDefault.default) {
    constructor(){
        super("/chats");
    }
    create(title) {
        return this.http.post("/", {
            title
        });
    }
    delete(id) {
        return this.http.delete("/", {
            chatId: id
        });
    }
    read() {
        return this.http.get("/");
    }
    getUsers(id) {
        return this.http.get(`/${id}/users`);
    }
    addUsers(id, users) {
        return this.http.put("/users", {
            users,
            chatId: id
        });
    }
    updateAvatar(data) {
        return this.http.put("/avatar", data);
    }
    async getToken(id) {
        const response = await this.http.post(`/token/${id}`);
        return response.token;
    }
    update = undefined;
}
exports.default = new ChatsAPI();

},{"./BaseApi":"61JyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8bUY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUserModal", ()=>addUserModal);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _addUsersHbs = require("./addUsers.hbs");
var _addUsersHbsDefault = parcelHelpers.interopDefault(_addUsersHbs);
var _addUsersModuleScss = require("./addUsers.module.scss");
var _addUsersModuleScssDefault = parcelHelpers.interopDefault(_addUsersModuleScss);
var _input = require("../Input");
var _loginCard = require("../LoginCard");
var _searchController = require("../../controllers/SearchController");
var _searchControllerDefault = parcelHelpers.interopDefault(_searchController);
var _store = require("../../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _button = require("../Button");
class addUserModal extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.input = new (0, _input.Input)({
            events: {
                keydown: (e)=>{
                    if (e.keyCode === 13) {
                        this.getLogin();
                        const input = this.children.input;
                        input.setValue("");
                    }
                }
            },
            name: "userNameInput",
            type: "text",
            style: (0, _addUsersModuleScssDefault.default).input
        });
        this.children.button = new (0, _button.Button)({
            label: "Закрыть окно",
            events: {
                click: ()=>{
                    (0, _storeDefault.default).set("modal", false);
                }
            }
        });
    }
    componentDidUpdate() {
        this.showLogins();
        return true;
    }
    async getLogin() {
        let name = this.children.input.getValue();
        const data = {
            "login": `${name}`
        };
        await (0, _searchControllerDefault.default).getLogin(data);
        this.setProps({
            ...this.props,
            userLogin: (0, _storeDefault.default).getState().findedUsers
        });
        this.showLogins();
    }
    showLogins() {
        this.children.users = this.props.userLogin.map((name)=>{
            return new (0, _loginCard.LoginCard)({
                label: name.login,
                src: name.avatar,
                userId: name.id
            });
        });
    }
    render() {
        return this.compile((0, _addUsersHbsDefault.default), {
            ...this.props,
            styles: (0, _addUsersModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./addUsers.hbs":"bq6wB","./addUsers.module.scss":"dCYUu","../Input":"iclCk","../LoginCard":"lerAz","../../controllers/SearchController":"f0Fdh","../../utils/Store":"euxgo","../Button":"i3jlU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bq6wB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal__box") : stack1, depth0)) + '">\r\n    <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "modal__container") : stack1, depth0)) + '">\r\n        ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "input") || (depth0 != null ? lookupProperty(depth0, "input") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "input",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 3,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "button") || (depth0 != null ? lookupProperty(depth0, "button") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "button",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 12
                },
                "end": {
                    "line": 4,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "users") || (depth0 != null ? lookupProperty(depth0, "users") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "users",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 8
                },
                "end": {
                    "line": 5,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    </div>\r\n</div>\r\n\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCYUu":[function(require,module,exports) {
module.exports["modal__container"] = `WGMoUq_modal__container`;
module.exports["input"] = `WGMoUq_input`;
module.exports["modal__box"] = `WGMoUq_modal__box`;

},{}],"lerAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginCard", ()=>LoginCard);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _loginCardHbs = require("./loginCard.hbs");
var _loginCardHbsDefault = parcelHelpers.interopDefault(_loginCardHbs);
var _loginCardModuleScss = require("./loginCard.module.scss");
var _loginCardModuleScssDefault = parcelHelpers.interopDefault(_loginCardModuleScss);
var _button = require("../Button");
var _avatar = require("../Avatar");
var _chatsController = require("../../controllers/ChatsController");
var _chatsControllerDefault = parcelHelpers.interopDefault(_chatsController);
var _store = require("../../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
class LoginCard extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.button = new (0, _button.Button)({
            label: this.props.label,
            style: (0, _loginCardModuleScssDefault.default).button,
            events: {
                click: ()=>{
                    LoginCard.addUserToChat(this.props.userId);
                }
            }
        });
        this.children.avatar = new (0, _avatar.Avatar)({
            src: this.getLink()
        });
    }
    static addUserToChat(userId) {
        const chatId = window.location.pathname.split("/").pop();
        (0, _chatsControllerDefault.default).addUserToChat(Number(chatId), userId);
        (0, _storeDefault.default).set("modal", false);
    }
    getLink() {
        if (this.props.src) return `https://ya-praktikum.tech/api/v2/resources${this.props.src}`;
        else return "";
    }
    render() {
        return this.compile((0, _loginCardHbsDefault.default), {
            ...this.props,
            styles: (0, _loginCardModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./loginCard.hbs":"4EfJi","./loginCard.module.scss":"hefx3","../Button":"i3jlU","../Avatar":"iC4G6","../../controllers/ChatsController":"jYChn","../../utils/Store":"euxgo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4EfJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "user__item") : stack1, depth0)) + '">\r\n    <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "avatar__container") : stack1, depth0)) + '">\r\n        ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "avatar") || (depth0 != null ? lookupProperty(depth0, "avatar") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "avatar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 3,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    </div>\r\n    " + ((stack1 = (helper = (helper = lookupProperty(helpers, "button") || (depth0 != null ? lookupProperty(depth0, "button") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "button",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 16
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</div>\r\n\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hefx3":[function(require,module,exports) {
module.exports["user__item"] = `St4TZq_user__item`;
module.exports["avatar__container"] = `St4TZq_avatar__container`;
module.exports["button"] = `St4TZq_button`;

},{}],"f0Fdh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchController", ()=>SearchController);
var _searchAPI = require("../api/SearchAPI");
var _searchAPIDefault = parcelHelpers.interopDefault(_searchAPI);
var _store = require("../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
class SearchController {
    constructor(){
        this.api = (0, _searchAPIDefault.default);
    }
    async getLogin(login) {
        const logins = await this.api.getLogin(login);
        (0, _storeDefault.default).set("findedUsers", logins);
    }
}
exports.default = new SearchController();

},{"../api/SearchAPI":"7rRiO","../utils/Store":"euxgo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rRiO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchAPI", ()=>SearchAPI);
var _baseApi = require("./BaseApi");
var _baseApiDefault = parcelHelpers.interopDefault(_baseApi);
class SearchAPI extends (0, _baseApiDefault.default) {
    constructor(){
        super("/user");
    }
    getLogin(login) {
        return this.http.post("/search", login);
    }
    read = undefined;
    create = undefined;
    delete = undefined;
    update = undefined;
}
exports.default = new SearchAPI();

},{"./BaseApi":"61JyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIH1I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsList", ()=>ChatsList);
var _chatListHbs = require("./ChatList.hbs");
var _chatListHbsDefault = parcelHelpers.interopDefault(_chatListHbs);
var _chatListModuleScss = require("./chatList.module.scss");
var _chatListModuleScssDefault = parcelHelpers.interopDefault(_chatListModuleScss);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _chatItem = require("../ChatItem");
var _chatsController = require("../../controllers/ChatsController");
var _chatsControllerDefault = parcelHelpers.interopDefault(_chatsController);
var _store = require("../../utils/Store");
var _storeDefault = parcelHelpers.interopDefault(_store);
var _input = require("../Input");
var _chatsLink = require("../chatsLink");
var _router = require("../../utils/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _button = require("../Button");
class ChatsListBase extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props
        });
    }
    async init() {
        this.props.connectedChats = [];
        this.props.userLogin = [];
        this.props.showChatInput = false;
        this.children.input = new (0, _input.Input)({
            placeholder: "Поиск",
            type: "text",
            name: "find",
            style: (0, _chatListModuleScssDefault.default).search__input,
            events: {
                keydown: (e)=>{
                    if (e.keyCode == 13) {
                        const input = this.children.input;
                        input.setValue("");
                    }
                }
            }
        });
        this.children.link = new (0, _chatsLink.chatsLink)({
            label: "Профиль",
            to: "/settings"
        });
        this.children.chats = this.createChats(this.props);
        this.children.addChat = new (0, _button.Button)({
            events: {
                click: ()=>{
                    this.showModal();
                }
            },
            label: "Добавить чат",
            style: (0, _chatListModuleScssDefault.default).add__button
        });
        this.children.chatInput = new (0, _input.Input)({
            events: {
                keydown: (e)=>{
                    if (e.keyCode == 13) {
                        const value = this.children.chatInput.getValue();
                        this.createChat(value);
                        this.children.chatInput.setValue("");
                    }
                }
            },
            name: "chatInput",
            type: "text",
            placeholder: "Название чата",
            style: (0, _chatListModuleScssDefault.default).chat__input
        });
    }
    componentDidUpdate(newProps) {
        this.children.chats = this.createChats(newProps);
        return true;
    }
    showModal() {
        const showChat = this.props.showChatInput;
        this.setProps({
            ...this.props,
            showChatInput: !showChat
        });
    }
    createChats(props) {
        return Object.values(props.chats).map((data)=>{
            return new (0, _chatItem.Chat)({
                ...data,
                events: {
                    click: async ()=>{
                        (0, _storeDefault.default).set("activeChat", data);
                        (0, _routerDefault.default).go(`/messenger/${data.id}`);
                    }
                }
            });
        });
    }
    async createChat(login) {
        await (0, _chatsControllerDefault.default).create(`${login}`);
    }
    render() {
        return this.compile((0, _chatListHbsDefault.default), {
            ...this.props,
            styles: (0, _chatListModuleScssDefault.default)
        });
    }
}
const withChats = (0, _store.withStore)((state)=>({
        chats: [
            ...state.chats || []
        ]
    }));
const ChatsList = withChats(ChatsListBase);

},{"./ChatList.hbs":"dJ4M1","./chatList.module.scss":"4QzV4","../../utils/Block":"915bj","../ChatItem":"k2Mhs","../../controllers/ChatsController":"jYChn","../../utils/Store":"euxgo","../Input":"iclCk","../chatsLink":"dk5eK","../../utils/Router":"lWot6","../Button":"i3jlU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dJ4M1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatInput") || (depth0 != null ? lookupProperty(depth0, "chatInput") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "chatInput",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 12
                },
                "end": {
                    "line": 13,
                    "column": 27
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n";
    },
    "3": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "chats") || (depth0 != null ? lookupProperty(depth0, "chats") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "chats",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 17,
                    "column": 12
                },
                "end": {
                    "line": 17,
                    "column": 23
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n";
    },
    "5": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '            <div class="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "loading") : stack1, depth0)) + '">Идет загрузка...</div>\r\n';
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat__container") : stack1, depth0)) + '">\r\n    <h1 class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "search__header") : stack1, depth0)) + '">\r\n        ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "addChat") || (depth0 != null ? lookupProperty(depth0, "addChat") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "addChat",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 3,
                    "column": 21
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "link",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 4,
                    "column": 18
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "input") || (depth0 != null ? lookupProperty(depth0, "input") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "input",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 8
                },
                "end": {
                    "line": 5,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n    </h1>\r\n    <section class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "feed__container") : stack1, depth0)) + '">\r\n\r\n        ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "users") || (depth0 != null ? lookupProperty(depth0, "users") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "users",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 8
                },
                "end": {
                    "line": 9,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n\r\n\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias3, depth0 != null ? lookupProperty(depth0, "showChatInput") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 8
                },
                "end": {
                    "line": 14,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + "\r\n" + ((stack1 = lookupProperty(helpers, "if").call(alias3, depth0 != null ? lookupProperty(depth0, "isLoaded") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(3, data, 0),
            "inverse": container.program(5, data, 0),
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 8
                },
                "end": {
                    "line": 20,
                    "column": 15
                }
            }
        })) != null ? stack1 : "") + "\r\n    </section>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QzV4":[function(require,module,exports) {
module.exports["search__input"] = `TJBnwq_search__input`;
module.exports["feed__container"] = `TJBnwq_feed__container`;
module.exports["chat__item"] = `TJBnwq_chat__item`;
module.exports["add__button"] = `TJBnwq_add__button`;
module.exports["chat__selected"] = `TJBnwq_chat__selected`;
module.exports["search__header"] = `TJBnwq_search__header`;
module.exports["chat__input"] = `TJBnwq_chat__input`;
module.exports["loading"] = `TJBnwq_loading`;
module.exports["chat__container"] = `TJBnwq_chat__container`;

},{}],"k2Mhs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatBase", ()=>ChatBase);
parcelHelpers.export(exports, "withSelectedChat", ()=>withSelectedChat);
parcelHelpers.export(exports, "Chat", ()=>Chat);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _chatHbs = require("./Chat.hbs");
var _chatHbsDefault = parcelHelpers.interopDefault(_chatHbs);
var _chatModuleScss = require("./chat.module.scss");
var _chatModuleScssDefault = parcelHelpers.interopDefault(_chatModuleScss);
var _store = require("../../utils/Store");
class ChatBase extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    render() {
        return this.compile((0, _chatHbsDefault.default), {
            ...this.props,
            selectedChat: this.props.id === this.props.selectedChat?.id,
            styles: (0, _chatModuleScssDefault.default)
        });
    }
}
const withSelectedChat = (0, _store.withStore)((state)=>({
        selectedChat: (state.chats || []).find(({ id  })=>id === state.selectedChat)
    }));
const Chat = withSelectedChat(ChatBase);

},{"../../utils/Block":"915bj","./Chat.hbs":"6wwx7","./chat.module.scss":"gTDb8","../../utils/Store":"euxgo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6wwx7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "1": function(container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat__selected") : stack1, depth0));
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat__item") : stack1, depth0)) + "  " + ((stack1 = lookupProperty(helpers, "if").call(alias3, depth0 != null ? lookupProperty(depth0, "selectedChat") : depth0, {
            "name": "if",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 35
                },
                "end": {
                    "line": 1,
                    "column": 90
                }
            }
        })) != null ? stack1 : "") + '">\r\n    <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "chat__avatar") : stack1, depth0)) + '"></div>\r\n    <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "user__info") : stack1, depth0)) + '">\r\n        <h class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "user__name") : stack1, depth0)) + '">\r\n            ' + alias2((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 21
                }
            }
        }) : helper)) + "\r\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "delete") || (depth0 != null ? lookupProperty(depth0, "delete") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "delete",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 12
                },
                "end": {
                    "line": 6,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n        </h>\r\n\r\n        <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "user__message") : stack1, depth0)) + '">\r\n            ' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "last_message") : depth0) != null ? lookupProperty(stack1, "content") : stack1, depth0)) + '\r\n        </p>\r\n    </div>\r\n    <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "user__notes") : stack1, depth0)) + '">\r\n        <p class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "user__time") : stack1, depth0)) + '">\r\n            ' + alias2((helper = (helper = lookupProperty(helpers, "time") || (depth0 != null ? lookupProperty(depth0, "time") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "time",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 15,
                    "column": 12
                },
                "end": {
                    "line": 15,
                    "column": 20
                }
            }
        }) : helper)) + '\r\n        </p>\r\n        <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "user__notification") : stack1, depth0)) + '">\r\n            ' + alias2((helper = (helper = lookupProperty(helpers, "unread_count") || (depth0 != null ? lookupProperty(depth0, "unread_count") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
            "name": "unread_count",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 12
                },
                "end": {
                    "line": 18,
                    "column": 28
                }
            }
        }) : helper)) + "\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gTDb8":[function(require,module,exports) {
module.exports["user__info"] = `_3trspG_user__info`;
module.exports["user__time"] = `_3trspG_user__time`;
module.exports["user__notification"] = `_3trspG_user__notification`;
module.exports["user__name"] = `_3trspG_user__name`;
module.exports["chat__avatar"] = `_3trspG_chat__avatar`;
module.exports["chat__item"] = `_3trspG_chat__item`;
module.exports["chat__selected"] = `_3trspG_chat__selected`;
module.exports["user__notes"] = `_3trspG_user__notes`;
module.exports["user__message"] = `_3trspG_user__message`;

},{}],"dk5eK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseLink", ()=>BaseLink);
parcelHelpers.export(exports, "chatsLink", ()=>chatsLink);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _linkHbs = require("./link.hbs");
var _linkHbsDefault = parcelHelpers.interopDefault(_linkHbs);
var _linkModuleScss = require("./link.module.scss");
var _linkModuleScssDefault = parcelHelpers.interopDefault(_linkModuleScss);
var _withRouter = require("../../hocs/withRouter");
class BaseLink extends (0, _blockDefault.default) {
    constructor(props){
        super({
            ...props,
            events: {
                click: ()=>this.navigate()
            }
        });
    }
    navigate() {
        this.props.router.go(this.props.to);
    }
    render() {
        return this.compile((0, _linkHbsDefault.default), {
            ...this.props,
            styles: (0, _linkModuleScssDefault.default)
        });
    }
}
const chatsLink = (0, _withRouter.withRouter)(BaseLink);

},{"../../utils/Block":"915bj","./link.hbs":"iEovn","./link.module.scss":"b0WeR","../../hocs/withRouter":"kYXgc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iEovn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<span class="' + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "link") : stack1, depth0)) + '">' + alias1((helper = (helper = lookupProperty(helpers, "label") || (depth0 != null ? lookupProperty(depth0, "label") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "label",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 30
                },
                "end": {
                    "line": 1,
                    "column": 41
                }
            }
        }) : helper)) + "</span>\r\n";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b0WeR":[function(require,module,exports) {
module.exports["link"] = `_0Yc34q_link`;

},{}],"4tfer":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StartPage", ()=>StartPage);
var _block = require("../../utils/Block");
var _blockDefault = parcelHelpers.interopDefault(_block);
var _chatPageHbs = require("./chatPage.hbs");
var _chatPageHbsDefault = parcelHelpers.interopDefault(_chatPageHbs);
var _chatPageModuleScss = require("./chatPage.module.scss");
var _chatPageModuleScssDefault = parcelHelpers.interopDefault(_chatPageModuleScss);
var _chatsController = require("../../controllers/ChatsController");
var _chatsControllerDefault = parcelHelpers.interopDefault(_chatsController);
var _chatList = require("../../components/ChatList");
class StartPage extends (0, _blockDefault.default) {
    constructor(props){
        super(props);
    }
    init() {
        this.children.chatsList = new (0, _chatList.ChatsList)({
            isLoaded: false
        });
        (0, _chatsControllerDefault.default).fetchChats().finally(()=>{
            this.children.chatsList.setProps({
                isLoaded: true
            });
        });
    }
    render() {
        return this.compile((0, _chatPageHbsDefault.default), {
            ...this.props,
            styles: (0, _chatPageModuleScssDefault.default)
        });
    }
}

},{"../../utils/Block":"915bj","./chatPage.hbs":"bulhI","./chatPage.module.scss":"dxA6s","../../controllers/ChatsController":"jYChn","../../components/ChatList":"cIH1I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bulhI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = container.lambda, alias2 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<main class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "selectchat__container") : stack1, depth0)) + '">\r\n\r\n    ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatsList") || (depth0 != null ? lookupProperty(depth0, "chatsList") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "chatsList",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n\r\n    <div class="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "styles") : depth0) != null ? lookupProperty(stack1, "temporary") : stack1, depth0)) + '">Пожалуйста, выберите чат</div>\r\n</main>\r\n';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"i0QfX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxA6s":[function(require,module,exports) {
module.exports["temporary"] = `W_2Rta_temporary`;
module.exports["selectchat__container"] = `W_2Rta_selectchat__container`;

},{}]},["3LmCz","h7u1C"], "h7u1C", "parcelRequire40a5")

//# sourceMappingURL=index.b71e74eb.js.map
