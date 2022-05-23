import i18n from "i18next";
import detector from "i18next-browser-languagedetector";

import translationMarathi from './shared/Language/marathi/translation.json';
import translationEng from './shared/Language/eng/translation.json';
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  मराठी: {
    translation: translationMarathi
  },
   eng: {
    translation: translationEng
  }
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;