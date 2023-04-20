import profileTemplateModule from "../../templates/profileModule/profileModule";

export const Profile = {
    render: () => {
        return `
        <section class="profile__component">
        <a href="#/SelectChat" class="profile__back">
            <div class="profile__arrow"></div>
        </a>
        <div class="profile__main">
            <div class="profile__container">
                <div class="profile__image"></div>
                <p class="profile__name">Иван</p>
                <div class="profile__items">
                    ${profileTemplateModule()}
                </div>
                <footer class="profile__action__container">
                    <div class="profile__box">
                        <a class="profile__action__header" href="#/ChangeProfile">
                            Изменить данные
                        </a>
                    </div>
                    <div class="profile__box">
                        <a class="profile__action__header" href="#/ChangePassword"> 
                            Изменить пароль
                        </a>
                    </div>
                    <div class="profile__box profile__last">
                        <h class="profile__action__exit">
                            Выход
                        </h>
                    </div>
                </footer>
            </div>
        </div>
        </section>
        `;
    }
}