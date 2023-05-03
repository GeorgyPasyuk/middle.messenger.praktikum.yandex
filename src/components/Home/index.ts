import template from './home.hbs';
import { Button } from '../Button';
import Block from '../../utils/Block';



export class HomePage extends Block {
  constructor() {
    super('div');
  }

  init() {
    this.children.button  = new Button({
      label: "Авторизоваться",
      events: {
        click: () => console.log("Авторизоваться кликнуто")
      },
    });
  }

  render() {
    return this.compile(template, {} )
  }
}

