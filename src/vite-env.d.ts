/// <reference types="vite/client" />

declare module '*.hbs' {
  const content: HandlebarsTemplateDelegate<any>
  export default content
}

declare module '*.handlebars' {
  const content: HandlebarsTemplateDelegate<any>
  export default content
}
