import Block from '../../utils/Block';
import template from './link.hbs';
import styles from './link.module.scss';
import { PropsWithRouter, withRouter } from '../../hocs/withRouter';

interface LinkProps extends PropsWithRouter{
  to: string
  label: string
  events?: {
    click: (e: Event) => void
  },
  styles?: string
}

export class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      }
    });
    if (this.props.styles) {
      this.element?.setAttribute("class", `${this.props.styles}`)
    }
  }

  navigate() {
    this.props.router.go(this.props.to)
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}

export const Link = withRouter(BaseLink);
