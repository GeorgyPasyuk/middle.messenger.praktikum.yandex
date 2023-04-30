import Block from '../../utils/Block';
import template from './Chat.hbs';
import styles from './chat.module.scss';

interface ChatProps {
  name: string;
  latestMessage: string;
  time: any;
  notes: number;
  isSelected: boolean
  events: {
    click: () => void
  }
}

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }


  render() {
    return this.compile(template, { ...this.props,
      styles,
      link: "#/Profile",
    });
  }
}
