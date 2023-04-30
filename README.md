<<<<<<< HEAD
# Мессенджер

## [Хостинг проекта](https://middle-messenger-yandex-yandex.netlify.app/)

Проект мессенджера, написанный без сторонних библиотек или фреймворков.
При разработке используются: TypeScript, Handlebars, SCSS, Exress, Node.js

#### Для сборки проекта используется Parcel:
Перед началом работы установите зависимости - `npm install`
Команда для запуска - `npm run start`
Команда для сборки - `npm run build`

Проект запускается на 3000 порту.

##### Функционал проекта: 

Стандартный для мессенджеров - регистрация и авторизация пользователя, список чатов,
возможность изменения личного профиля, перепискаю


## Структура проекта

| src  ↓ |              |                                                             |                                                                                                                                                       |
|:------:|:------------:|:-----------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
|        | components ↓ |                                                             | Папка с компонентами, где каждый компонент представлят из себя шаблон Handlebars, модульный стиль SCSS и index файл TypeScript с определенноё логикой |
|        |              |                      (componentName) ↓                      |                                                                                                                                                       |
|        |              |     template.hbs <br/> style.module.scss<br/> index.ts      ||
|        |  modules ↓   |                                                             |                                                 Модули использущиеся для работы с путями и роунтигом                                                  |
|        |              |           router.ts<br/> routes.ts<br/> server.js           ||
|        |   pages  ↓   |                                                             |                          Непосредственно сами страницы, в которые вставляются компоненты и который отображаются пользователю                          |
|        |              |                        (Login)Page ↓                        |                                                                                                                                                       |
|        |              |     template.hbs <br/> style.module.scss<br/> index.ts      ||
|        |    scss ↓    |                                                             |                                                                         Стили                                                                         |
|        |              | mainStyles.scss   <br/>      fonts.scss<br/> variables.scss ||
|        |   static ↓   |                                                             |                                                                    Статичные файлы                                                                    |
|        |              |                         icons/fonts                         ||
|        |   utils ↓    |                                                             |                                              Основная логика приложения, классы компонента и EventBus'a                                               |
|        |              |             Block.ts<br/> EventBus.ts <br/> ...             ||
|        | global.d.ts  |                                                             ||
|        |  index.html  |                                                             ||
|        |   index.ts   |                                                             ||

=======
В проекте используются технологии: handlebars,scss,parcel, express, node.js
Хостинг проекта располагается на сайте netlify, ссылка: https://middle-messenger-yandex-yandex.netlify.app/
Для запуска проекта выполните команду - npm run start
>>>>>>> 3716fa19d586c5b1f19f7b5b1be1608a19dddde6
