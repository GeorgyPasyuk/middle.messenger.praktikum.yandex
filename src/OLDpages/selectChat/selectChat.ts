// eslint-disable-next-line max-len
import inputTemplateModule from "../../templates/selectChatModule/selectChatInputModule/inputSelectChatModule";
import feedTemplateModule from "../../templates/selectChatModule/selectChatFeedModule/feedModule";

export const SelectChat = {
    render: () => {
        return `
      <div class="selectchat__container">
      <div class="chat__container">
        <header class="search__header">
            ${inputTemplateModule()}
        </header>
        <main class="feed__container">
            ${feedTemplateModule()}
        </main>
      </div>
        <div class="temporary"><h>Выберите чат, чтобы отправить сообщение</h></div>
      </div>
    `;
    }
}
