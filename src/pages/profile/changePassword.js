import profileButtonTemplateModule from "../../../src/templates/profileModule/changeProfile/profileButton/profileChangeModule";
import profileChangePasswordModule from "../../../src/templates/profileModule/changeProfile/profileChangePassword/profileChangePasswordModule";


export const changePassword = {
    render: () => {
        return `
        <section class="profile__component">
        <a href="#/Profile" class="profile__back">
            <div class="profile__arrow"></div>
        </a>
        <div class="profile__main">
            <div class="profile__container">
                <div class="profile__image"></div>
                <div class="profile__items">
                    ${profileChangePasswordModule()}
                </div>
                <footer class="profile__action__container action__change">
                   ${profileButtonTemplateModule()}
                </footer>
            </div>
        </div>
        </section>
        `;
    }
}