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

// В button
// import * as styles from './button.css'
// this.element.classList.add(styles.button)
// return this.compile(template, { label: this.props.label, styles})
