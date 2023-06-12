import Block from '../../utils/Block';
import template from './msg.hbs';
import styles from './msg.module.scss';

interface MessageProps {
  content: string
  myMsg: boolean
  time: string
}

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super(props);
  }



  protected render(): DocumentFragment {

    return this.compile(template, {
      ...this.props,
      time: `${new Date(this.props.time).getHours()+':'}
      ${new Date(this.props.time).getMinutes()}`,
      styles });
  }
}
