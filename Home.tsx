import {useColorScheme, View} from 'react-native';

import React from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Section} from './Section';

import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import {resources} from './resources';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export const Home = (): JSX.Element => {
  const {t} = useTranslation();

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Section title={t('global.title')}>{t('global.content')}</Section>
    </View>
  );
};
