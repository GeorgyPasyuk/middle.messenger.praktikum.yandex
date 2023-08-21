import Block from "@utils/Block";
import template from "./validation.hbs";
import styles from "./validation.module.scss";

interface FormProps {
  errName: string;
  style?: string;
}

export class Validation extends Block<FormProps> {
  constructor(props: FormProps) {
    super(props);
    if (this.props.style) {
      this.element?.setAttribute("class", `${this.props.style}`);
    }
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
