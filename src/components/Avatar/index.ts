import Block from "../../utils/Block";
import template from "./input.hbs";
import styles from "./input.module.scss";
import nullAvatar from "@static/icons/nullAvatar.webp";

interface AvatarProps {
  src: string;
}

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    props.src = nullAvatar;
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
