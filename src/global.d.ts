declare module "*.hbs" {
  import { TemplateDelegate } from 'handlebars';

  const template: TemplateDelegate;

  export default template;
}

declare module "*module.scss" {
  declare const styles: Record<string, string>;
  export default styles
}

declare module "*.webp"