import Block from '../../utils/Block';
import template from './label.hbs';
import styles from './label.module.scss';

interface LabelProps {
  name: string,
  title: string,
  value: string | number
}

export class Label extends Block<LabelProps> {
  constructor(props: LabelProps) {
    super(props);
  }


  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
