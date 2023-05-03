import Block from '../../../utils/Block';
import template from './msg.hbs';
import styles from './msg.module.scss';

interface MessageProps {
  message: string | Array<string>
  time: string | number
  myMsg: boolean
}

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
