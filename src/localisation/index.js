import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'

const resources = { en: { translation: en } }

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    keySeparator: '.',
    interpolation: { escapeValue: false }, // react is already safe from xss
})

export default i18n
