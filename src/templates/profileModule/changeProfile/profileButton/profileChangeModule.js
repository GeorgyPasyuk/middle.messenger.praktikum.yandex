import profileStyle from "../../profile.module.style.scss"
import profileButtonTemplate from "./profileChangeTemplate.hbs"

const profileButtonTemplateModule = () => {
    const context = {
       buttonStyle: profileStyle.save__button,
       title: "Сохранить"
    };
    return profileButtonTemplate(context);
};


export default profileButtonTemplateModule;
