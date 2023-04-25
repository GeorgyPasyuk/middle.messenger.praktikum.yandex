import Block from '../../utils/Block';
import template from './navigation.hbs';
import styles from './navigation.module.scss';

interface NavigationProps {
  link?: string,
  title: string,
  events: {
   click: (e: any)=> void
  }
}

export class Navigation extends Block<NavigationProps> {
  constructor(props: NavigationProps) {
    super(props);
  }


  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
