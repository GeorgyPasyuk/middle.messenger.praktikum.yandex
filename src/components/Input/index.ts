import Block from '../../utils/Block';
import template from './input.hbs';
import styles from './input.module.scss';



interface InputProps {
  name: string;
  type: string;
  placeholder?: string | number | boolean[];
  value? : string;
  events: {
    keydown?: (e: KeyboardEvent) => void,
    focus?: (e: Event) => void,
    blur?: () => void,
  }
  style?: string
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
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
