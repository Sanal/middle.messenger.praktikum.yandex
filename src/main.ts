import Handlebars from 'handlebars/runtime'
import { identity, isEmpty } from './utils/mydash'
import './style.css'

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

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector<HTMLDivElement>('#app')
  let result: string

  const [route, subroute] = document.location.pathname
    .split('?')[0]
    .split('/')
    .filter(identity)

  // temporary routing
  if (isEmpty(route)) {
    result = chats({ chatsList })
  } else if (route === 'login') {
    result = login({})
  } else if (route === 'signup') {
    result = signup({})
  } else if (route === 'profile') {
    if (isEmpty(subroute)) {
      result = profile({})
    } else if (subroute === 'edit') {
      result = profileEdit({})
    } else if (subroute === 'change-password') {
      result = changePassword({})
    } else {
      result = notFound({})
    }
  } else if (route === '500') {
    result = serverError({})
  } else {
    result = notFound({})
  }

  root!.innerHTML = result
})
