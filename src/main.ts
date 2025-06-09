import Handlebars from "handlebars/runtime";
import "./style.css";

import { chatsList } from "./data";

// partials
import chatListItem from "./partials/chat-list-item.hbs";

// templates
import chats from "./templates/chats.hbs";

Handlebars.registerPartial("chatListItem", chatListItem);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector<HTMLDivElement>("#app");
  const result = chats({ chatsList });

  root!.innerHTML = result;
});
