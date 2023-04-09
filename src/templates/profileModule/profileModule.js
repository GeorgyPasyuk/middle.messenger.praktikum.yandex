import * as profileStyle from "./profile.module.style.scss"
import profileTemplate from "./profileTemplate.hbs"

const profileTemplateModule = () => {
    const context = {
        link: "#/Profile",
        goToProfile: "Профиль",
        profileData: [
            { name: 'email', label:'Почта', value: 'pochta@yandex.ru'},
            { name: 'login', label:'Логин', value: 'ivanivanov'},
            { name: 'first_name', label:'Имя', value: 'Иван'},
            { name: 'second_name', label:'Фамилия', value: 'Иванов'},
            { name: 'display_name', label:'Имя в чате', value: 'Иван'},
            { name: 'phone', label:'Телефон', value: '+7 (909) 999 99 99'},
        ],
        profileBoxStyle: profileStyle.profile__box,
        headerStyle: profileStyle.profile__header,
        headerInfo: profileStyle.profile__header__info

    };
    return profileTemplate(context);
};


export default profileTemplateModule;
