import loginTemplate from "./inputTemplate.hbs"
import inputStyle from "./input.module.Style.scss"

const inputTemplate = ()=>  {
    const context = {
        login: "Логин",
        password: "Пароль",
        InputHeaderStyle: inputStyle.login__info,
        InputStyle: inputStyle.login__input,
        ContainerStyle: inputStyle.login__container,
        ContainerMixin: inputStyle.login__containerLast,
    };
    return loginTemplate(context);
};


export default inputTemplate;
