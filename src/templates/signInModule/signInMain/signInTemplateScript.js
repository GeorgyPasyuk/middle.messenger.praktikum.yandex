import signInStyle from "./signIn.module.Style.scss"
import signInTemplate from "./signInTemplate.hbs"

const signInTemplateModule = () => {
    const context = {
        email: "Почта",
        login: "Логин",
        first_name: "Имя",
        second_name: "Фамилия",
        phone: "Номер телефона",
        password: "Пароль",
        passwordConfirm: "Пароль (еще раз)",
        signInContainer: signInStyle.signup__container,
        signInHeader: signInStyle.signIn__info,
        signInInput: signInStyle.signIn__input,
        signInMixin: signInStyle.signIn__last
    };
    return signInTemplate(context);
};


export default signInTemplateModule;
