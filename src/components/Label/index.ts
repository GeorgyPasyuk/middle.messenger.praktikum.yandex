import Block from '../../utils/Block';
import template from './label.hbs';
import styles from './label.module.scss';
import {Paragraph} from "./paragraph";
import { Validation } from '../Validation';

interface LabelProps {
  name?: string | Array<string>,
  title?: string | Array<string>,
  custom?: boolean
  value?: any,
  validation?: string | number
}

export class Label extends Block<LabelProps> {
  constructor(props: LabelProps) {
    super(props);
  }

  init() {
    if (!this.props.custom) {
      this.children.value = new Paragraph({
        title: this.props.value
      })
    }


    if (this.props.validation) {
      this.children.validation = new Validation({
        errName: this.props.validation.toString(),
        style: styles.validation
      })
    }
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
