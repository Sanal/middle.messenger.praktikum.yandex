import Handlebars from 'handlebars/runtime'
import './styles/main.css'

import { chatsList } from './data'

// partials
import chatListItem from './partials/chat-list-item.hbs'
import inputField from './partials/input-field.hbs'
import modalBox from './partials/modal-box.hbs'
import button from './partials/button.hbs'
import centeredBox from './partials/centered-box.hbs'
import avatar from './partials/avatar.hbs'
import labeledValue from './partials/labeled-value.hbs'
import labeledInput from './partials/labeled-input.hbs'
import errorView from './partials/error-view.hbs'
import avatarFileInput from './partials/avatar-file-input.hbs'
import profileLayout from './layout/profile-layout.hbs'

// templates
import login from './templates/login.hbs'
import signup from './templates/signup.hbs'
import chats from './templates/chats.hbs'
import profile from './templates/profile.hbs'
import profileEdit from './templates/profile-edit.hbs'
import changePassword from './templates/change-password.hbs'
import notFound from './templates/not-found.hbs'
import serverError from './templates/server-error.hbs'

Handlebars.registerPartial('chatListItem', chatListItem)
Handlebars.registerPartial('inputField', inputField)
Handlebars.registerPartial('modalBox', modalBox)
Handlebars.registerPartial('button', button)
Handlebars.registerPartial('centeredBox', centeredBox)
Handlebars.registerPartial('avatar', avatar)
Handlebars.registerPartial('labeledValue', labeledValue)
Handlebars.registerPartial('labeledInput', labeledInput)
Handlebars.registerPartial('profileLayout', profileLayout)
Handlebars.registerPartial('errorView', errorView)
Handlebars.registerPartial('avatarFileInput', avatarFileInput)

const Routes = {
  Home: '/',
  Login: '/login',
  SignUp: '/signup',
  Profile: '/profile',
  ProfileEdit: '/profile/edit',
  ChangePassword: '/profile/change-password',
  NotFound: '/404',
  ServerError: '/500',
} as const

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector<HTMLDivElement>('#app')
  let result: string

  const route = document.location.pathname.split('?')[0]

  // temporary routing
  switch (route) {
    case Routes.Home:
      result = chats({ chatsList })
      break
    case Routes.Login:
      result = login({})
      break
    case Routes.SignUp:
      result = signup({})
      break
    case Routes.ServerError:
      result = serverError({})
      break
    case Routes.Profile:
      result = profile({})
      break
    case Routes.ProfileEdit:
      result = profileEdit({})
      break
    case Routes.ChangePassword:
      result = changePassword({})
      break
    default:
      result = notFound({})
      break
  }

  root!.innerHTML = result
})
