import Block from "@utils/Block";
import template from "./input.hbs";
import styles from "./input.module.scss";
import nullAvatar from "@static/icons/nullAvatar.webp";

interface AvatarProps {
  avatar?: string
  src?: string;
}

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    if (props.avatar) {
      props.src = `https://ya-praktikum.tech/api/v2/resources${props.avatar}`;
    } else {
      props.src = nullAvatar;
    }

    super(props);
  }

  render() {
    return this.compile(template, {
      ...this.props,
      styles,
    });
  }
}

