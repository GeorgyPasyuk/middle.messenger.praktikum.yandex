import footerModule from "../../templates/loginModule/loginFooter/footerModule";
import inputTemplate from "../../templates/loginModule/loginInput/inputModule";

export const Login = {
    render: () => {
        return `
       <section class="welcome__container">
        <form class="welcome__box">
         <header class="welcome__header">Вход</header>
          <main class="login__items">
            ${inputTemplate()}
          </main>
          <footer>
          ${footerModule()}
          </footer>
          </form>
       </section>
    `;
    }
}





