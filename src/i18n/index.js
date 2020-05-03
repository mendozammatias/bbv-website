import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '@locales/en/translation.json';
import translationES from '@locales/es/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      resources,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    },
    err =>
      err && console.error('i18next error: translations cannot be loaded', err)
  );

export default i18n;