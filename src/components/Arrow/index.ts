import Block from '../../utils/Block';
import template from './arrow.hbs';
import styles from './arrow.module.scss';

interface ArrowProps {
  events: {
    click: (e?: Event) => void;
  };
  style?: string
}

export class Arrow extends Block<ArrowProps> {
  constructor(props: ArrowProps) {
    super(props);
    if (this.props.style) {
      this.element?.setAttribute("class", `${this.props.style}`)
    }
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
