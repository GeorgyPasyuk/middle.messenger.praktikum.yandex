export const err404 = {
    render: () => {
        return `
      <section class="err__container">
         <h class="err__header">404</h>
         <p class="err__text">Не туда попали</p>
         <a href="#/SelectChat" class="welcome__link">Назад к чатам</a>
      </section>
    `;
    }
}

export const err500 = {
    render: () => {
        return `
      <section class="err__container">
         <h class="err__header">500</h>
         <p class="err__text">Мы уже фиксим</p>
         <a href="#/SelectChat" class="welcome__link">Назад к чатам</a>
      </section>
    `;
    }
}