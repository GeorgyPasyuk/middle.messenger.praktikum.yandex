import profileStyle from "../../profile.module.style.scss"
import changePasswordTemplate from "./changePasswordTemplate.hbs"

const profileChangePasswordTemplateModule = () => {
    const context = {
        profileData: [
            { name: 'old_password', label:'Старый пароль', value: '123'},
            { name: 'new_password', label:'Новый пароль', value: '123123'},
            { name: 'confirm_password', label:'Повторите новый пароль', value: '123'},
        ],
        profileBoxStyle: profileStyle.profile__box,
        headerStyle: profileStyle.profile__header,
        headerInfo: profileStyle.profile__header__info
    };
    return changePasswordTemplate(context);
};


export default profileChangePasswordTemplateModule;
