import Block from '../../utils/Block';
import template from './input.hbs';
import styles from './input.module.scss';

interface AvatarProps {
  src: string
}

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
