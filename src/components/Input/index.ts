import Block from '../../utils/Block';
import template from './input.hbs';
import styles from './input.module.scss';

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  events?: {
    keydown: (e: any) => void
  }
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }


  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
