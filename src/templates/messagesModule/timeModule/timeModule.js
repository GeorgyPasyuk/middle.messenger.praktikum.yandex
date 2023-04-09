import messagesStyle from "../messages.module.style.scss"
import timeTemplate from "./timeTemplate.hbs"

const timeTemplateModule = () => {
    const context = {
        time: "12 июня",
        timeStyle: messagesStyle.main__time,
    };
    return timeTemplate(context);
};


export default timeTemplateModule;
