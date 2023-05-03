import Block from '../../../utils/Block';
import template from './par.hbs';
import styles from '../label.module.scss';

interface ParProps {
    title: string
}

export class Paragraph extends Block<ParProps> {
    constructor(props: ParProps) {
        super(props);
    }


    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
