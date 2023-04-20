import inputTemplateModule from "../../templates/selectChatModule/selectChatInputModule/inputSelectChatModule";
import feedTemplateModule from "../../templates/selectChatModule/selectChatFeedModule/feedModule";
import timeTemplateModule from "../../templates/messagesModule/timeModule/timeModule";
import sendingModule from "../../templates/messagesModule/sendingMessagesModule/sendingModule";

export const Chat = {
    render: () => {
        return `
      <div class="selectchat__container">
      <div class="chat__container">
        <header class="search__header">
            ${inputTemplateModule()}
            <svg class="header__icon"></svg>
        </header>
        <main class="feed__container">
            ${feedTemplateModule()}
        </main>
      </div>
      <div class="chatMessage__container">
            <header class="header__container">
            <div class="header__item">
            <span class="header__avatar"></span>
            <h class="header__username">Вадим</h>
            </div>
            <div class="header__item">
            <span class="header__options"></span>
            </div>
            </header>  
            <main class="main__container">
            ${timeTemplateModule()}
            ${sendingModule()}
            </main>
            <footer class="footer__container">
            <svg class="footer__icon"></svg>
            <input type="text" name="writeMsg" class="footer__input" placeholder="Сообщения">
            <svg class="footer__button"></svg>
            </footer>
      </div>
      </div>
    `;
    }
}
