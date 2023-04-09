import footerStyle from "./footer.module.LoginStyle.scss"
import footerLoginTemplate from "./footerTemplate.hbs"

const footerModule = () => {
    const context = {
        buttonTitle: "Вход",
        linkTitle: "Нет аккаунта?",
        login__link: "#/SignIn",
        login__btnStyle: footerStyle.welcome__footer__btn,
        login__linkStyle: footerStyle.footer__link
    };
    return footerLoginTemplate(context);
};


export default footerModule;
