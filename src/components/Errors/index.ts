import Block from "@utils/Block";
import template from "./err.hbs";
import styles from "./errors.module.scss";

interface ErrProps {
  number: number;
  title: string;
  events?: {
    click: () => void;
  };
}

export class ErrorsComponent extends Block<ErrProps> {
  constructor(props: ErrProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
