import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import uzTranslation from "../../public/locales/uz/translation.json";
import ruTranslation from "../../public/locales/ru/translation.json";

const resources = {
  uz: {
    translation: uzTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["ru", "uz"],
    fallbackLng: "ru",
    detection: {
      order: ["path", "cookie", "localStorage", "navigator"],
      caches: ["cookie"],
    },
  });

export default i18n;
