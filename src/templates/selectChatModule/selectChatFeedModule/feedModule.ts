import feedTemplate from "./feedTemplate.hbs"
import feedStyle from "./feed.module.style.scss"

const feedTemplateModule = () => {
    const context = {
        itemStyle: feedStyle.chat__item,
        avatarStyle: feedStyle.chat__avatar,
        nameContainer: feedStyle.user__info,
        nameStyle: feedStyle.user__name,
        messageStyle: feedStyle.user__message,
        notesStyle: feedStyle.user__notes,
        timeStyle: feedStyle.user__time,
        notificationStyle: feedStyle.user__notification,
        chatData: {
            0:{name: "andrey", latest_message: "hi", time:"11:11", notes:1},
            1:{name: "makar", latest_message: "how is your day?", time:"12:12", notes:4},
            2:{name: "foka", latest_message: "nice to meet you", time:"13:13", notes:5},
            3:{name: "sasha", latest_message: "aaaah hello", time:"14:14", notes:7},
            4:{name: "anton", latest_message: "privet", time:"15:15", notes:9},
            5:{name: "aleksei", latest_message: "hello", time:"16:16", notes:8},
            6:{name: "daniil", latest_message: "Great!", time:"17:17", notes:7},
            7:{name: "nikita", latest_message: "I am good", time:"18:18", notes:3},
            8:{name: "gosha", latest_message: "Write back soon!", time:"19:19", notes:5},
            9:{name: "sergey", latest_message: "Thank you", time:"20:20", notes:3},
            11:{name: "nikolas", latest_message: "Bye", time:"21:21", notes:4},
            12:{name: "oleg", latest_message: "Yes", time:"21:21", notes:4},
            13:{name: "sonya", latest_message: "Visa", time:"21:21", notes:4},
            14:{name: "bogdan", latest_message: "What's up?", time:"21:21", notes:4},
        }
    };
    return feedTemplate(context);
};


export default feedTemplateModule;
