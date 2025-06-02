import Handlebars from "handlebars";
import templateSource from "./template.hbs?raw";
import "./style.css";

const template = Handlebars.compile(templateSource);

const html = template({
  date: new Date().toLocaleString(),
  fruits: ["Apple", "Orange", "Kiwi"],
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = html;
