import Handlebars from "handlebars/runtime";
import { identity, isEmpty } from "./utils/mydash";
import "./style.css";

import { chatsList } from "./data";

// partials
import chatListItem from "./partials/chat-list-item.hbs";
import inputField from "./partials/input-field.hbs";
import modalBox from "./partials/modal-box.hbs";
import button from "./partials/button.hbs";
import centeredBox from "./partials/centered-box.hbs";

// templates
import login from "./templates/login.hbs";
import signup from "./templates/signup.hbs";
import chats from "./templates/chats.hbs";

Handlebars.registerPartial("chatListItem", chatListItem);
Handlebars.registerPartial("inputField", inputField);
Handlebars.registerPartial("modalBox", modalBox);
Handlebars.registerPartial("button", button);
Handlebars.registerPartial("centeredBox", centeredBox);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector<HTMLDivElement>("#app");
  let result: string;

  const route = document.location.pathname
    .split("?")[0]
    .split("/")
    .filter(identity)[0];

  if (isEmpty(route)) {
    result = chats({ chatsList });
  } else if (route === "login") {
    result = login({});
  } else if (route === "signup") {
    result = signup({});
  } else if (route === "profile") {
    result = "profile";
  } else if (route === "500") {
    result = "500";
  } else {
    result = "404";
  }

  root!.innerHTML = result;
});
