import Block from '../../utils/Block';
import template from './link.hbs';
import styles from './link.module.scss';
import { withRouter, PropsWithRouter} from '../../hocs/withRouter';

interface LinkProps extends PropsWithRouter{
  to: string
  label: string
  events?: {
    click: (e: Event) => void
  },
  style?: string
}

export class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
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

export const Link = withRouter(BaseLink);
