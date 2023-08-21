import Block from "@utils/Block";
import template from "./error.hbs";
import { ErrorsComponent } from "@components/Errors";

export class Error extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.error = new ErrorsComponent({
      number: 404,
      title: "Вы не туда попали",
      events: {
        click: () => {
          if (location.hash === "#/err500") {
            this.children.error.setProps({
              number: 505,
              title: "Мы работаем над ошибкой",
            });
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      link: "#/Profile",
    });
  }
}
