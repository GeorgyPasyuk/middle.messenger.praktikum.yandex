import Block from '../../utils/Block';
import template from './validation.hbs';
import styles from './validation.module.scss';

interface FormProps {
  errName: string,
}

export class Validation extends Block<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
