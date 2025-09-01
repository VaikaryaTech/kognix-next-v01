import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LanguageAbbreviation } from '@/constants/common';
import translation_en from './en';
import { createTranslationTable, flattenObject } from './until';

const resources = {
  [LanguageAbbreviation.En]: translation_en,
};
const enFlattened = flattenObject(translation_en);
export const translationTable = createTranslationTable(
  [enFlattened],
  ['English'],
);
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
