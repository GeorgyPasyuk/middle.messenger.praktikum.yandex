import Block from '../../../utils/Block';
import template from './time.hbs';
import styles from './time.module.scss';

interface TimeProps {
 time: string | number
}

export class Time extends Block<TimeProps> {
  constructor(props: TimeProps) {
    super(props);
  }


  render() {
    return this.compile(template, { ...this.props,
      styles,
    });
  }
}
