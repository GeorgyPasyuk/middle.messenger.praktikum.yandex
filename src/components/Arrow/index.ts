import Block from '@utils/Block';
import template from './arrow.hbs';
import styles from './arrow.module.scss';
import { PropsWithRouter, withRouter } from '@hocs/withRouter';


interface ArrowProps extends PropsWithRouter{
  events: {
    click: (e?: Event) => void;
  };
  style?: string;
  to: string
}

export class ArrowBase extends Block<ArrowProps> {
  constructor(props: ArrowProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      }
    });
    if (this.props.style) {
      this.element?.setAttribute("class", `${this.props.style}`)
    }
  }

  navigate() {
    this.props.router.go(this.props.to)
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}

export const Arrow = withRouter(ArrowBase);
