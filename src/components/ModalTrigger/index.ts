import Block from '../../utils/Block';
import template from './showModalTemplate.hbs';
import styles from './modal.module.scss';

interface ModalProps {
  events: {
    click: () => void;
  };
}

export class TriggerModal extends Block<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, styles });
  }
}
