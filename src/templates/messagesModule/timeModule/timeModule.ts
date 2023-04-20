import timeTemplate from "./timeTemplate.hbs"
import messagesStyle from "../messages.module.style.scss"

const timeTemplateModule = () => {
    const context = {
        time: "12 июня",
        timeStyle: messagesStyle.main__time,
    };
    return timeTemplate(context);
};


export default timeTemplateModule;
