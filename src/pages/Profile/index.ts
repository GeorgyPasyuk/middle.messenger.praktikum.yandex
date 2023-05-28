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
import { UpdateData, UpdatePassword } from '../../api/UpdateAPI';
import AuthController from '../../controllers/AuthController';
import { Avatar } from '../../components/Avatar';
import router from '../../utils/Router';
import { AvatarInput } from '../../components/AvatarInput';





interface ProfileProps extends User {
  id: number,
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  avatar: any,
  email: string,
  phone: string,
  dataContext: boolean[]
}



const userFields = ['email', 'login','first_name', 'second_name', 'display_name',
  'phone'] as Array<keyof ProfileProps>;



const componentsData = ["Почта", "Логин", "Имя", "Фамилия", "Имя в чате", "Телефон"]


const passwordsData = {
  name: ["oldPassword", "newPassword", "newPasswordAgain"],
  title: ["Старый пароль", "Новый пароль", "Новый пароль еще раз"],
}


class DefaultProfilePage extends Block<ProfileProps> {
  init() {

    const context = window.location.pathname.split('/').pop();

    if (context === "settings") {
      this.props.dataContext = [true, false, false]
    } else if (context === "changeData") {
      this.props.dataContext = [false, true, false]
    } else if (context === "changePassword") {
      this.props.dataContext = [false, false, true]
    }


    this.children.arrow = new Arrow({
      to: "/messenger"
    })


    this.children.button = new Button({
      type: "button",
      label: "Сохранить",
      events:  {
        click: async ()=> {
          await this.onSubmit()
          router.go('/settings')
        }
      }
    })


    this.children.defaultField = this.createDefaultField(this.props)

    this.children.changeData = userFields.map((name, index) => {
        return new Label({
          name: "email",
          title: componentsData[index],
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

      this.children.changePassword = passwordsData.name.map((name, index) => {
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

    this.children.changeDataNav = new Navigation({
      title: "Изменить данные",
      events: { click: ()=> {
          router.go('/settings/changeData')
        }
      }
    })



    this.children.changePasswordNav = new Navigation({
      title: "Сменить пароль",
      events: { click: ()=> {
          router.go('/settings/changePassword')
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

    this.children.avatarInput = new AvatarInput({
      events: {
        change: (e: InputEvent) => {
          this.changeAvatar(e);
        },
      },
      name: 'avatar'
    });


    this.children.avatar = new Avatar({
      src: `https://ya-praktikum.tech/api/v2/resources${this.props.avatar}`,
    })


  }

  private async changeAvatar(event: any) {
    const file = event.target!.files[0]
    const formData = new FormData()
    formData.append("avatar", file)

    await UpdateController.updateAvatar(formData)
    await AuthController.fetchUser()
  }

  private async onSubmit() {
    const context = window.location.pathname.split('/').pop();
    const children = this.children
    const child = Object.keys(children).filter(name => name === context)

    let items: any = []
    children[child[0]]
      .map((item: any) => {
        if (item._element.lastElementChild.value !== "") {
          items
            .push([item._element.lastElementChild.name, item._element.lastElementChild.value])
        }})
    const oldData = store.getState().user
    const newData = Object.fromEntries(items)

    if (context === "changeData") {
      await UpdateController.updateUser(Object.assign(oldData, newData) as UpdateData)
    } else {
      await UpdateController.updatePassword(newData as UpdatePassword)
    }
    await AuthController.fetchUser()
  }

  protected componentDidUpdate(newProps: ProfileProps): boolean {
    this.children.defaultField = this.createDefaultField(newProps)
    return true;
  }

  createDefaultField(props: ProfileProps) {
    return userFields.map((name, i) => {
      return new Label({
        name: name,
        title: componentsData[i],
        value: props[name],
        custom: false
      })
    })
  }

  render() {
    return this.compile(template, {
      ...this.props,
      styles,
      accountName: `${store.getState().user.first_name + " #" +  store.getState().user.id}`,
      Avatar: this.props.avatar
    })
  }
}




const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(DefaultProfilePage);
