# Мессенджер

---

## [Хостинг проекта](https://middle-messenger-yandex-yandex.netlify.app/)

---

Проект мессенджера, написанный без сторонних библиотек или фреймворков. <br>
При разработке используются: TypeScript, Handlebars, SCSS, Express, Node.js <br>
Для тестов используются: mocha, chai

---

#### Для сборки проекта используется WebPack:

Перед началом работы установите зависимости - `npm install` <br>
Команда для запуска - `npm run start`<br>
Команда для сборки - `npm run build`<br>

Проект запускается на 3000 порту.

---

##### Функционал проекта:

Стандартный для мессенджеров - регистрация и авторизация пользователя, список чатов,
возможность изменения личного профиля, переписка.

---

## Структура проекта

| src ↓ |              |                                                      |                                                                                                                                                       |
| :---: | :----------: | :--------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: |
|       | components ↓ |                                                      | Папка с компонентами, где каждый компонент представлят из себя шаблон Handlebars, модульный стиль SCSS и index файл TypeScript с определенноё логикой |
|       |              |                  (componentName) ↓                   |                                                                                                                                                       |
|       |              |  template.hbs <br/> style.module.scss<br/> index.ts  |                                                                                                                                                       |
|       |  modules ↓   |                                                      |                                                 Модули использущиеся для работы с путями и роунтигом                                                  |
|       |              |       router.ts<br/> routes.ts<br/> server.js        |                                                                                                                                                       |
|       |   pages ↓    |                                                      |                          Непосредственно сами страницы, в которые вставляются компоненты и который отображаются пользователю                          |
|       |              |                    (Login)Page ↓                     |                                                                                                                                                       |
|       |              |  template.hbs <br/> style.module.scss<br/> index.ts  |                                                                                                                                                       |
|       |    scss ↓    |                                                      |                                                                         Стили                                                                         |
|       |              | mainStyles.scss <br/> fonts.scss<br/> variables.scss |                                                                                                                                                       |
|       |   static ↓   |                                                      |                                                                    Статичные файлы                                                                    |
|       |              |                     icons/fonts                      |                                                                                                                                                       |
|       |   utils ↓    |                                                      |                                              Основная логика приложения, классы компонента и EventBus'a                                               |
|       |              |         Block.ts<br/> EventBus.ts <br/> ...          |                                                                                                                                                       |
|       | global.d.ts  |                                                      |                                                                                                                                                       |
|       |  index.html  |                                                      |                                                                                                                                                       |
|       |   index.ts   |                                                      |                                                                                                                                                       |

---

## Описание работы технологий

### Компонент Инпута

```handlebars
//input.hbs

<input
  class="{{styles.input}}"
  value="{{value}}"
  name="{{name}}"
  type="{{type}}"
  placeholder="{{placeholder}}"
/>
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
  transition: 0.3s;
}
```

```ts
//index.ts

import Block from "../../utils/Block"; //Импорт класс Block (базовый компонент)
import template from "./input.hbs"; //Импорт темплейта Handleabars
import styles from "./input.module.scss"; //Импорт модуля стилей scss

//Интерфейс пропсов компонента
interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  events: {
    keydown: (e: KeyboardEvent) => void;
    focus?: (e: Event) => void;
    blur?: () => void;
  };
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

---

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

import Block from "../../utils/Block";
import template from "./tpl.hbs";
import styles from "./login.module.scss";
import { Input } from "../../components/Input";

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
          console.log(e.target.value);
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      styles,
      //Здесь можем передать пропсы для страницы
      title: "Тестовый input",
    });
  }
}
```

---

### Маршрутизация

```ts
//index.ts

enum Routes {
  Index = "/",
  Chat = "/messenger/:chatId"

//...
}

//При загрузке DOMContent, используем роут и рендерим компонент страницы.
window.addEventListener("DOMContentLoaded", async ()=> {
  Router
    .use(Routes.Index, LogInPage)
    .use(Routes.Chat, ChatPage)
  //...
})
```

### Запросы
API
```ts
export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signin(data: SigninData) {
    // используем утилиту HTTP
    return this.http.post('/signin', data);
  }
}
```
Controller
```ts
export class AuthController {
  private readonly api: AuthAPI

  constructor() {
    this.api = API
  }
  async signin(data: SigninData) {
    try {
      // пробуем отправить запрос авторизации на сервер
      await this.api.signin(data);
      // фетчим актуального юзера
      await this.fetchUser()
        .then(response => {
            if (response.id) {
              //переходим на страницу /messenger
              router.go('/messenger');
            }
          }
        );

    } catch (e: any) {
      console.error(e);
    }
  }
}
```

Страница LogIn 
```ts
export class LogInPage extends Block {
  constructor() {
    super({});
  }

  init() {
    // создаем компонент кнопки
 this.children.button = new Button({
      label: "Авторизоваться",
      type: "submit",
      events: {
        //при клике на кнопку срабатывает функция onSubmit()
        click: (e) => {
          this.onSubmit()
          e!.preventDefault()
        }
      },
    });
  }

  onSubmit() {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof Input)
      .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values);
    // отправляем запрос при помощи контроллера
    AuthController.signin(data as SignupData);
  } 
}
```
