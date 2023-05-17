import Block from '../../utils/Block';
import template from "./profile.hbs"
import styles from './profile.module.scss';
import { Label } from '../../components/Label';
import { Navigation } from '../../components/Navigation';
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import { Arrow } from '../../components/Arrow';
import { User } from '../../api/AuthAPI';
import store, { withStore } from '../../utils/Store';





interface ProfileProps extends User {
  dataContext: boolean[]
}



const userFields = ['email', 'login','first_name', 'second_name', 'display_name',
  'phone'] as Array<keyof ProfileProps>;



const componentsData = {
  name: ["email", "login", "first_name", "second_name", "display_name" ,"phone"],
  title: ["Почта", "Логин", "Имя", "Фамилия", "Имя в чате", "Телефон"],
  value: ["pochta@yandex.ru", "ivanivanov", "Иван", "Иванов", "Иван", "+7 (909) 999 99 99"]
}

const passwordsData = {
  name: ["oldPassword", "newPassword", "newPasswordAgain"],
  title: ["Старый пароль", "Новый пароль", "Новый пароль еще раз"],
}


class DefaultProfilePage extends Block<ProfileProps> {
  init() {
    this.children.arrow = new Arrow({
      to: "/messenger"
    })

    this.children.button = new Button({
      type: "button",
      label: "Сохранить",
      events:  {
        click: ()=> {

        }
      }
    })


    this.children.defaultField = userFields.map((name, i) => {
      return new Label({
        name: name,
        title: componentsData.title[i],
        value: this.props[name],
        custom: false
      })
    })

    this.children.dataChanged = componentsData.name.map((name, index) => {
        return new Label({
          name: "email",
          title: componentsData.title[index],
          custom: true,
          value: new Input({
            name: name,
            type: "text",
            placeholder: componentsData.value[index],
            style: styles.profile__input,
            events: {
              keydown: (e) => {
                console.log(`New ${name} is `+(e.target as HTMLInputElement).value);
              }
            }
          })
        })
    })


      this.children.passwordChanged = passwordsData.name.map((name, index) => {
        return new Label({
          name: "password",
          title: passwordsData.title[index],
          custom: true,
          value: new Input({
            name: name,
            type: "password",
            events: {
              keydown: (e) => {
                console.log(`New ${name} is `+ (e.target as HTMLInputElement).value);
              }
            }
          })
        })
      })

    this.children.changeData = new Navigation({
      title: "Изменить данные",
      events: { click: ()=> {
          this.setProps({
            ...this.props,
            dataContext: [false, true, false]
          })
        }
      }
    })


    this.children.changePassword = new Navigation({
      title: "Сменить пароль",
      events: { click: ()=> {
          this.setProps({
            ...this.props,
            dataContext: [false, false, true]
          })
        }
      }
    })


    this.children.exit = new Navigation({
      title: "Выход",
      isExit: true,
      events: { click: ()=> {
          console.log(store.getState());
        }
      }
    })
  }

  protected componentDidUpdate(newProps: ProfileProps): boolean {


    (this.children.defaultField as Label[]).forEach((field, i) => {
      field.setProps({ value: newProps[userFields[i]] });
    });

    return false;
  }



  render() {
    return this.compile(template, {
      ...this.props,
      styles,
      accountName: `${store.getState().user.first_name}`,
      dataContext: [true, false, false],
    })
  }
}


const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(DefaultProfilePage);
