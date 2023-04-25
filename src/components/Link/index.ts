import Block from '../../utils/Block';
import template from './link.hbs';
import styles from './link.module.scss';

interface LinkProps {
  label: string
  linkTo : string
  events?: {
    input: (e: any) => void
  }
}

export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super(props);
  }


  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
