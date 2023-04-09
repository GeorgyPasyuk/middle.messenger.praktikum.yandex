import signInTemplateModule from "../../../src/templates/signInModule/signInMain/signInTemplateScript";
import footerSignInTemplate from "../../../src/templates/signInModule/signInFooter/signInFooter";


export const SignIn = {
    render: () => {
        return `
       <section class="welcome__container">
            <form class="welcome__box">
                <header class="welcome__header">Регистрация</header>
                ${signInTemplateModule()}
                <footer>
                ${footerSignInTemplate()}
                </footer>
            </form>
       </section>
    `;
    }
}