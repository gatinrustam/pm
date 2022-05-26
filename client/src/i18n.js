import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "auth.login.title": "Log in",
      "auth.signin.title": "Sign in",
      "auth.recovery.title": "Recovery",
      "auth.forgot_password": "Forgot password?",
      "auth.email.placeholder": "Email",
      "auth.password.placeholder": "Password",
      "auth.button.login": "Log in",
      "auth.button.signin": "Sign in",
      "auth.button.recovery": "Recovery",

      "header.menu.solutions": "Solutions",
      "header.menu.tariffs": "Tariffs",
      "header.menu.company": "Company",
      "header.menu.support": "Support",
      "header.menu.cabinet": "Account",
      "welcome.title": "Collect and visualize data. Especially for you.",
      "welcome.desc": "In your personal account there will be a collected database, sorted and filtered as you need it. No automatic decisions.",
      "welcome.button.demo": "Demo",
      "welcome.button.presentation": "Presentation",

      "dashboard.main.menu.title": "Dashboard",
      "dashboard.main.note.title": "Hi there 🖖",
      "dashboard.main.note.desc": "This section starts your business analytics. Place all the most important blocks of used tools for a short summary.",

      "dashboard.forms.menu.title": "Forms",
      "dashboard.forms.menu.create": "Create form",
      "dashboard.forms.menu.all_forms": "All forms",
      "dashboard.forms.menu.add": "Add element",
      "dashboard.forms.menu.preview": "Preview",
      "dashboard.forms.menu.save": "Save",
      "dashboard.forms.note.title": "👋 Let's create first form",
      "dashboard.forms.note.desc": "Creating forms is convenient and simple, and using them is even easier. After creating the form, copy the code and paste it where you want. Form usage statistics will appear as soon as someone interacts with the form.",

      "dashboard.pages.menu.title": "Pages",

      "dashboard.buttons.menu.title": "Buttons",

      "dashboard.analytics.menu.title": "Analytics",
      "dashboard.settings.menu.title": "Settings",

      "dashboard.empty.title": "Empty",
      "dashboard.empty.desc": "No data yet",

      "dashboard.create": "Create",

      "form.element.textfield": "Text field",
    }
  },
  ru: {
    translation: {
      "auth.login.title": "Войти",
      "auth.signin.title": "Регистрация",
      "auth.recovery.title": "Восстановление пароля",
      "auth.forgot_password": "Забыли пароль?",
      "auth.email.placeholder": "Электропочта",
      "auth.password.placeholder": "Пароль",
      "auth.button.login": "Войти",
      "auth.button.signin": "Зарегистрироваться",
      "auth.button.recovery": "Восстановить",

      "header.menu.solutions": "Решения",
      "header.menu.tariffs": "Тарифы",
      "header.menu.company": "Компания",
      "header.menu.support": "Поддержка",
      "header.menu.cabinet": "Личный кабинет",
      "welcome.title": "Собираем и визуализируем данные. Специально для вас.",
      "welcome.desc": "В вашем личном кабинете будет собранная база данных, отсортированная и отфильтрованная так, как вам это необходимо. Никаких автоматических решений.",
      "welcome.button.demo": "Демо",
      "welcome.button.presentation": "Презентация",

      "dashboard.main.menu.title": "Дашборд",
      "dashboard.main.note.title": "Привет-привет 🖖",
      "dashboard.main.note.desc": "С этого раздела начинается аналитика вашего бизнеса. Размещайте все самые важные блоки используемых инструментов для короткой сводки. ",

      "dashboard.forms.menu.title": "Формы",
      "dashboard.forms.menu.create": "Создать",
      "dashboard.forms.menu.all_forms": "Все формы",
      "dashboard.forms.menu.add": "Добавить элемент",
      "dashboard.forms.menu.preview": "Предпросмотр",
      "dashboard.forms.menu.save": "Сохранить",
      "dashboard.forms.note.title": "Создавайте простую форму 🚀",
      "dashboard.forms.note.desc": "Создавать формы удобно и просто, а их использование еще проще. После создания формы скопируйте код и вставьте его куда нужно. Статистика по использованию формы появится как только кто-то повзаимодействует с формой.",

      "dashboard.pages.menu.title": "Страницы",

      "dashboard.buttons.menu.title": "Кнопки",

      "dashboard.analytics.menu.title": "Аналитика",
      "dashboard.settings.menu.title": "Настройки",

      "dashboard.empty.title": "Пусто",
      "dashboard.empty.desc": "Данных никаких нет",

      "dashboard.create": "Создать",

      "form.element.textfield": "Текстовое поле",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    debug: false,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
