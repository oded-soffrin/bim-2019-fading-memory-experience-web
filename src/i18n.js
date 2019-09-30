import resources from './locale/message_en.json'
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18n;

/*
export default ({ locale, resources }) => {
  return i18next.init({
    lng: locale,
    fallbackLng: 'en',
    keySeparator: '$',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      [locale]: {
        translation: resources,
      },
    },
  });
}
*/
