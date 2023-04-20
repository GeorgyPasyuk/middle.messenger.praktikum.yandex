import profileButtonTemplate from "./profileChangeTemplate.hbs"
import profileStyle from "../../profile.module.style.scss"

const profileButtonTemplateModule = () => {
    const context = {
       buttonStyle: profileStyle.save__button,
       title: "Сохранить"
    };
    return profileButtonTemplate(context);
};


export default profileButtonTemplateModule;
