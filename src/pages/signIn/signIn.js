import signInTemplateModule from "../../templates/signInModule/signInMain/signInTemplateScript";
import footerSignInTemplate from "../../templates/signInModule/signInFooter/signInFooter";


export const SignIn = {
    render: () => {
        return `
       <section class="welcome__container">
            <div class="welcome__box">
                <header class="welcome__header">Регистрация</header>
                ${signInTemplateModule()}
                <footer>
                ${footerSignInTemplate()}
                </footer>
            </div>
       </section>
    `;
    }
}