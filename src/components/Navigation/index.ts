import Block from "@utils/Block";
import template from "./navigation.hbs";
import styles from "./navigation.module.scss";

interface NavigationProps {
  title: string;
  isExit?: boolean;
  events: {
    click: (e: Event) => void;
  };
}

export class Navigation extends Block<NavigationProps> {
  constructor(props: NavigationProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
