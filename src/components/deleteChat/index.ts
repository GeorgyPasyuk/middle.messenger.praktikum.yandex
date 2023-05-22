import Block from '../../utils/Block';
import template from './delete.hbs';
import styles from './delete.module.scss';

interface DeleteChatProps {
  events?: {
    click: (e?: Event) => void;
  };
}

export class DeleteChat extends Block<DeleteChatProps> {
  constructor(props: DeleteChatProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
