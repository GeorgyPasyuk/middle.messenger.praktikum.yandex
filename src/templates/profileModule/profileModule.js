import profileTemplate from "./profileTemplate.hbs"
import profileStyle from "./profile.module.style.scss"

const profileTemplateModule = () => {
    const context = {
        link: "#/Profile",
        goToProfile: "Профиль",
        profileData: {
          email: {"Почта": "pochta@yandex.ru"},
          login: {"Логин": "ivanivanov"},
          first_name: {"Имя": "Иван"},
          second_name: {"Фамилия": "Иванов"},
          display_name: {"Имя в чате": "Иван"},
          phone: {"Телефон": "+7 (909) 999 99 99"}
        },
        profileBoxStyle: profileStyle.profile__box,
        headerStyle: profileStyle.profile__header,
        headerInfo: profileStyle.profile__header__info

    };
    return profileTemplate(context);
};


export default profileTemplateModule;
