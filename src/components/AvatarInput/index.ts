import Block from '@utils/Block';
import template from './input.hbs';
import styles from './input.module.scss';

interface AvatarProps {
  name: string;
  events: {
    change: (e: InputEvent)=> void
  },
  style?: string
}

export class AvatarInput extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super(props);
    if (this.props.style) {
      this.element?.setAttribute("class", `${this.props.style}`)
    }
  }
  public setValue(value: string) {
    return (this.element as HTMLInputElement).value = value;
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
