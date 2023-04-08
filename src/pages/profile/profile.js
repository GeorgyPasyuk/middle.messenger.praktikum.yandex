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
                <div class="profile__action__container">
                    <div class="profile__box">
                        <h class="profile__action__header">
                            Изменить данные
                        </h>
                    </div>
                    <div class="profile__box">
                        <h class="profile__action__header">
                            Изменить пароль
                        </h>
                    </div>
                    <div class="profile__box profile__last">
                        <h class="profile__action__exit">
                            Выход
                        </h>
                    </div>
                </div>
            </div>
        </div>
        </section>
        `;
    }
}