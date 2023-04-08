import inputTemplate from "./inputTemplate.hbs"
import inputStyle from "./input.module.style.scss"

const inputTemplateModule = () => {
    const context = {
        link: "#/Profile",
        goToProfile: "Профиль",
        searchStyle: inputStyle.search__input,
        linkStyle: inputStyle.search__profile,
    };
    return inputTemplate(context);
};


export default inputTemplateModule;
