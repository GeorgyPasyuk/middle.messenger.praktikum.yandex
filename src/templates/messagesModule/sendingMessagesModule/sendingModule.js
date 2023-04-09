import messagesStyle from "../messages.module.style.scss"
import sendingTemplate from "./sendingTemplate.hbs"

const sendingTemplateModule = () => {
    const context = {
        time: "12 июня",
        fromTime: "21:00",
        toTime: "21:04",
        fromMessages: ["Привет! Смотри, тут всплыл интересный кусок лунной космической истории — " +
        "НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. " +
        "Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих " +
        "камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты " +
        "с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету " +
        "они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на " +
        "аукционе за 45000 евро."],
        toMessages: [
            "Привет)", "Круто!",
        ],
        fromContainerStyle: messagesStyle.from__container,
        toContainerStyle: messagesStyle.to__container,
        fromItemStyle: messagesStyle.from__item,
        toItemStyle: messagesStyle.to__item,
        currentTimeStyle: messagesStyle.message__time
    };
    return sendingTemplate(context);
};


export default sendingTemplateModule;
