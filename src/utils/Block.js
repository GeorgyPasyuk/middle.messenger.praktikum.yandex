"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventBus_1 = __importDefault(require("./EventBus"));
const nanoid_1 = require("nanoid");
// Нельзя создавать экземпляр данного класса
class Block {
    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(propsWithChildren) {
        this.id = (0, nanoid_1.nanoid)(6);
        this._element = null;
        this._setUpdate = false;
        this.setProps = (nextProps) => {
            if (!nextProps) {
                return;
            }
            this._setUpdate = false;
            const oldValue = Object.assign({}, this.props);
            const { children, props } = this._getChildrenAndProps(nextProps);
            if (Object.values(children).length) {
                Object.assign(this.children, children);
            }
            if (Object.values(props).length) {
                Object.assign(this.props, props);
            }
            if (this._setUpdate) {
                this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldValue, nextProps);
                this._setUpdate = false;
            }
            Object.assign(this.props, nextProps);
        };
        const eventBus = new EventBus_1.default();
        const { props, children } = this._getChildrenAndProps(propsWithChildren);
        this.children = children;
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _getChildrenAndProps(childrenAndProps) {
        const props = {};
        const children = {};
        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (Array.isArray(value) && value.length > 0 && value.every(v => v instanceof Block)) {
                children[key] = value;
            }
            else if (value instanceof Block) {
                children[key] = value;
            }
            else {
                props[key] = value;
            }
        });
        return { props: props, children };
    }
    _addEvents() {
        const { events = {} } = this.props;
        Object.keys(events).forEach(eventName => {
            var _a;
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, events[eventName]);
        });
    }
    _removeEvents() {
        const { events = {} } = this.props;
        Object.keys(events).forEach(eventName => {
            var _a;
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.removeEventListener(eventName, events[eventName]);
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
    init() {
    }
    _componentDidMount() {
        this.componentDidMount();
    }
    componentDidMount() {
    }
    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        Object.values(this.children).forEach(child => {
            if (Array.isArray(child)) {
                child.forEach(ch => ch.dispatchComponentDidMount());
            }
            else {
                child.dispatchComponentDidMount();
            }
        });
    }
    _componentDidUpdate(oldProps, newProps) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }
    componentDidUpdate(oldProps, newProps) {
        if (oldProps !== newProps) {
            return true;
        }
    }
    get element() {
        return this._element;
    }
    _render() {
        const fragment = this.render();
        const newElement = fragment.firstElementChild;
        if (this._element && newElement) {
            this._element.replaceWith(newElement);
        }
        this._element = newElement;
        this._addEvents();
    }
    compile(template, context) {
        const contextAndStubs = Object.assign({}, context);
        Object.entries(this.children).forEach(([name, component]) => {
            if (Array.isArray(component)) {
                contextAndStubs[name] = component.map(child => `<div data-id="${child.id}"></div>`).join("");
            }
            else {
                contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
            }
        });
        const html = template(contextAndStubs);
        const temp = document.createElement('template');
        temp.innerHTML = html;
        const replaceStub = (component) => {
            var _a;
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
            if (!stub) {
                return;
            }
            (_a = component.getContent()) === null || _a === void 0 ? void 0 : _a.append(...Array.from(stub.childNodes));
            stub.replaceWith(component.getContent());
        };
        Object.entries(this.children).forEach(([, component]) => {
            if (Array.isArray(component)) {
                component.forEach(replaceStub);
            }
            else {
                replaceStub(component);
            }
        });
        return temp.content;
    }
    render() {
        return new DocumentFragment();
    }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
                if (target[prop] !== value) {
                    target[prop] = value;
                    self._setUpdate = true;
                }
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    }
    show() {
        this._element.style.display = "block";
    }
    hide() {
        this._element.style.display = "none";
    }
}
Block.EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
};
exports.default = Block;
//# sourceMappingURL=Block.js.map