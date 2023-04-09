import * as footerStyle from "../../loginModule/loginFooter/footer.module.LoginStyle.scss"
import footerLoginTemplate from "../../loginModule/loginFooter/footerTemplate.hbs"

const footerSignInTemplate = () => {
    const context = {
        buttonTitle: "Войти",
        linkTitle: "Зарегестрироваться",
        login__link: "#/Login",
        login__btnStyle: footerStyle.welcome__footer__btn,
        login__linkStyle: footerStyle.footer__link
    };
    return footerLoginTemplate(context);
};


export default footerSignInTemplate;
