const React = require('react');
const i18n = require('i18next').default;
const { I18nextProvider, initReactI18next } = require('react-i18next');

const resources = {
  en: {
    translation: require('./src/locales/en/translation.json'),
  },
  es: {
    translation: require('./src/locales/es/translation.json'),
  },
};

i18n.use(initReactI18next).init(
  {
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  },
  (err) =>
    err && console.error('i18next error: translations cannot be loaded', err)
);

exports.wrapRootElement = ({ element }) => (
  <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
);
