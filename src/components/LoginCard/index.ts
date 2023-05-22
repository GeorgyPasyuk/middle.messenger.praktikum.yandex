import Block from '../../utils/Block';
import template from './loginCard.hbs';
import styles from './loginCard.module.scss';

interface LoginCardProps {
  label: string
  events?: {
    click: (e: Event) => void
  },
}

export class LoginCard extends Block<LoginCardProps> {
  constructor(props: LoginCardProps) {
    super(props);
  }


  render() {
    return this.compile(template, { ...this.props, styles });
  }
}


