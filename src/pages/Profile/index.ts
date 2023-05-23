import Block from '../../utils/Block';
import template from "./profile.hbs"
import styles from './profile.module.scss';
import { Label } from '../../components/Label';
import { Navigation } from '../../components/Navigation';
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import { Arrow } from '../../components/Arrow';
import {  User } from '../../api/AuthAPI';
import store, { withStore } from '../../utils/Store';
import UpdateController from '../../controllers/UpdateController';
import { UpdateData } from '../../api/UpdateAPI';
import AuthController from '../../controllers/AuthController';





interface ProfileProps extends User {
  dataContext: boolean[]
  test: number
}



const userFields = ['email', 'login','first_name', 'second_name', 'display_name',
  'phone'] as Array<keyof ProfileProps>;



const componentsData = {
  title: ["Почта", "Логин", "Имя", "Фамилия", "Имя в чате", "Телефон"],
  value: ["pochta@yandex.ru", "ivanivanov", "Иван", "Иванов", "Иван", "+7 (909) 999 99 99"]
}

const passwordsData = {
  name: ["oldPassword", "newPassword", "newPasswordAgain"],
  title: ["Старый пароль", "Новый пароль", "Новый пароль еще раз"],
}


class DefaultProfilePage extends Block<ProfileProps> {
  init() {
    this.props.dataContext = [true, false, false]


    this.children.arrow = new Arrow({
      to: "/messenger"
    })

    this.children.button = new Button({
      type: "button",
      label: "Сохранить",
      events:  {
        click: async ()=> {
          this.onSubmit()
          await AuthController.fetchUser()
          this.setProps({
            ...this.props,
            dataContext: [true, false, false]
          })
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

    this.children.dataChanged = userFields.map((name, index) => {
        return new Label({
          name: "email",
          title: componentsData.title[index],
          custom: true,
          value: new Input({
            name: name,
            type: "text",
            placeholder: this.props[name],
            style: styles.profile__input,
            events: {

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
              keydown: () => {
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
          AuthController.logout();
        }
      }
    })
  }

  private async onSubmit() {
    let items: any = []
    this.children.dataChanged
      .map((item: any) => {
        if (item._element.lastElementChild.value !== "") {
          items
            .push([item._element.lastElementChild.name, item._element.lastElementChild.value])
        }})
    const data = Object.fromEntries(items)
    await UpdateController.updateUser(data as UpdateData)
  }

  protected componentDidUpdate(newProps: ProfileProps): boolean {
    (this.children.fields = userFields.map(name => {
      return new Label({ name, value: newProps[name] });
     }));

    return true;
  }


  render() {
    return this.compile(template, {
      ...this.props,
      styles,
      accountName: `${store.getState().user.first_name + " #" +  store.getState().user.id}`,
    })
  }
}




const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(DefaultProfilePage);
