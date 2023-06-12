import Block from '../../utils/Block';
import template from './template.hbs';



export class TestComponent extends Block {
  constructor(props: number) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
