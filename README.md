# Мессенджер
___
## [Хостинг проекта](https://middle-messenger-yandex-yandex.netlify.app/)
___
Проект мессенджера, написанный без сторонних библиотек или фреймворков.
При разработке используются: TypeScript, Handlebars, SCSS, Exress, Node.js
___
#### Для сборки проекта используется Parcel:

Перед началом работы установите зависимости - `npm install`
Команда для запуска - `npm run start`
Команда для сборки - `npm run build`

Проект запускается на 3000 порту.
___
##### Функционал проекта: 

Стандартный для мессенджеров - регистрация и авторизация пользователя, список чатов,
возможность изменения личного профиля, перепискаю
___

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

___

## Описание работы технологий
### Компонент Инпута
``` handlebars
//input.hbs

<input class="{{ styles.input }}"
 value="{{ value }}" 
 name="{{ name }}" 
 type="{{ type }}" 
 placeholder="{{placeholder}}"/>
```

```scss
//input.module.scss

@import "src/scss/_variables";

.input {
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  color: $font-primary;
  height: 7px;
  transition: .3s;
}
```
```ts
//index.ts

import Block from '../../utils/Block'; //Импорт класс Block (базовый компонент)
import template from './input.hbs'; //Импорт темплейта Handleabars
import styles from './input.module.scss'; //Импорт модуля стилей scss 

//Интерфейс пропсов компонента
interface InputProps {
    name: string;
    type: string;
    placeholder?: string;
    value? : string;
    events: {
        keydown: (e: KeyboardEvent) => void,
        focus?: (e: Event) => void,
        blur?: () => void,
    }
}

//Дочерный класс компонент Input 
export class Input extends Block<InputProps> {
    //Передаем пропсы в конструктор родительского класса
    constructor(props: InputProps) {
        super(props);
    }
    //Вызываем метод рендер
    //В котором возвращаем шаблон Handlebars, в который передаем пропсы и стили
    render() {
        return this.compile(template, { ...this.props, styles });
    }
}
```
___
### Компонент страницы

```handlebars
//template.hbs

<h class="{{styles.h}}">{{title}}</h>
{{{input}}}
```
```scss
//login.module.scss

.h {
  color: #3369f3;
}
```

```ts
//index.ts

import Block from '../../utils/Block';
import template from "./tpl.hbs"
import styles from './login.module.scss';
import { Input } from '../../components/Input';


export class LogInPage extends Block {
  constructor() {
    super({});
  }
  //В методе init, осуществляем подстановку в шаблон handlebars
  init() {
      this.children.login = new Input({
          name: "login",
          type: "text",
          events: {
              keydown: (e) => {
                  console.log(e.target.value)
              },
          }
      })
  }

  render() {
    return this.compile(template, {
      styles, 
      //Здесь можем передать пропсы для страницы
      title: "Тестовый input",
    })
  }
}
```
___
### Рендер страницы
```ts
//router.ts

const router = () => {
    //Ищем заранее прописанные пути
    const path = parseLocation();
    //Если такового нет, рендерим компонент Error404
    const {component = err404} = findComponentByPath(path, routes) || {};
    //Очищаем контейнер #app, от предыдущих страниц/елементов 
    document.getElementById('app')!.innerHTML = "";
    //Вставляем в контейнер страницу
    document.getElementById('app')!.append(component.getContent()!);
}
```