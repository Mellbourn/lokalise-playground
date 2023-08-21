import {translations} from './locales';
import {AvailableLanguages, Translations} from './locales/types';

const {en, se, da} = translations;

export const resources: Record<
  AvailableLanguages,
  {translation: Translations}
> = {
  en: {
    translation: en,
  },
  se: {
    translation: se,
  },
  da: {
    translation: da,
  },
};
