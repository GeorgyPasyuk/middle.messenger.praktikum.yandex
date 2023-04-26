import Block from '../../utils/Block';
import template from './button.hbs';
import styles from './button.module.scss';

interface ButtonProps {
  type?: string;
  label: string | Array<string>;
  events?: {
    click: () => void;
  };
  style?: any
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
    if (this.props.style) {
    this.element?.setAttribute("class", `${this.props.style}`)
    }
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
