declare module "*.hbs" {
    import { TemplateDelegate } from 'handlebars';

    const template: TemplateDelegate;

    export default template;
}

declare module "*.scss" {
    declare const styles: Record<string, string>;
    export default styles
}
