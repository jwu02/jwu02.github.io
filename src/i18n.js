import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

import enTranslation from "./assets/locales/en/translation.json";
import enCommon from "./assets/locales/en/common.json";
import enResume from "./assets/locales/en/resume.json";
import enEducation from "./assets/locales/en/education.json";

import cnTranslation from "./assets/locales/cn/translation.json";
import cnCommon from "./assets/locales/cn/common.json";
import cnResume from "./assets/locales/cn/resume.json";
import cnEducation from "./assets/locales/cn/education.json";

i18n
.use(LanguageDetector) // detects the current language
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: enTranslation,
      common: enCommon,
      resume: enResume,
      education: enEducation
    },
    cn: {
      translation: cnTranslation,
      common: cnCommon,
      resume: cnResume,
      education: cnEducation
    }
  }
}, (err) => {
  if (err) return console.log('Something went wrong loading', err);
});

export default i18n;