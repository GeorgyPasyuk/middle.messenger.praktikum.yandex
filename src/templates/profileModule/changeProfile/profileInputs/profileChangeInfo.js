import profileStyle from "../../profile.module.style.scss"
import profileChangeInfoTemplate from "./profileChangeInfoTemplate.hbs"

const profileChangeInfoTemplateModule = () => {
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
    return profileChangeInfoTemplate(context);
};


export default profileChangeInfoTemplateModule;
