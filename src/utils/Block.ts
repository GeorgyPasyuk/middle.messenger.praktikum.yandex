import EventBus from "./EventBus";
import { nanoid } from "nanoid";

class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
    FLOW_UNMOUNT: "flow:unmount",
  } as const;

  public id = nanoid(6);
  protected props: P;
  public children: Record<string, any>;
  public eventBus: () => EventBus;
  private _element: HTMLElement | null = null;
  protected _setUpdate: boolean = false;

  constructor(propsWithChildren: P) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren!);

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: P): {
    props: P;
    children: Record<string, Block | Block[]>;
  } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block | Block[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (
        Array.isArray(value) &&
        value.length > 0 &&
        value.every((v) => v instanceof Block)
      ) {
        children[key as string] = value;
      } else if (value instanceof Block) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as P, children };
  }

  _addEvents() {
    const { events = {} } = this.props as P & {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props as P & {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(
      Block.EVENTS.FLOW_UNMOUNT,
      this._componentWillUnmount.bind(this)
    );
  }

  private _init() {
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentWillUnmount() {
    this.eventBus().emit(Block.EVENTS.FLOW_UNMOUNT);
    Object.values(this.children).forEach((child) => {

      if (Array.isArray(child)) {
        child.forEach((ch) => ch.dispatchComponentWillUnmount());
      } else {
        child.dispatchComponentWillUnmount();
      }
    });
  }

  protected _componentWillUnmount() {}
  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((ch) => ch.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: P, newProps: P): boolean | undefined {
    return oldProps != newProps;
  }

  get element() {
    return this._element;
  }

  private _render() {
    this._removeEvents()

    const fragment = this.render();
    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element && newElement) {
      this.dispatchComponentWillUnmount()
      this._element.replaceWith(newElement);
    }

    this._element = newElement;
    this.dispatchComponentDidMount();


    this._addEvents();
  }

  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component
          .map((child) => `<div data-id="${child.id}"></div>`)
          .join("");
      } else {
        contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
      }
    });

    const html = template(contextAndStubs);

    const temp = document.createElement("template");

    temp.innerHTML = html;

    const replaceStub = (component: Block) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
      if (!stub) {
        return;
      }
      component.getContent()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(component.getContent()!);
    };

    Object.entries(this.children).forEach(([, component]) => {
      if (Array.isArray(component)) {
        component.forEach(replaceStub);
      } else {
        replaceStub(component);
      }
    });

    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  public getContent() {
    return this.element;
  }

  public setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }
    this._setUpdate = false;
    const oldValue = { ...this.props };
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

  _makePropsProxy(props: P) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: Record<string, any>, prop: string, value) {
        if (target[prop] !== value) {
          target[prop] = value;
          self._setUpdate = true;
        }

        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }
  show() {
    this._element!.style.display = "flex";
  }

  hide() {
    this._element!.style.display = "none";
  }
}

export default Block;
