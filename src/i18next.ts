import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import cs from './translations/cs.json'
import en from './translations/en.json'

import LanguageDetector from 'i18next-browser-languagedetector'
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const resources = { cs, en }

const defaultNS = 'common' as const

export const availableLanguages = Object.keys(resources)
export type TranslationResources = typeof en
export type TKey = keyof TranslationResources[typeof defaultNS]

i18n.use(initReactI18next)
    .use(LanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        defaultNS,
        fallbackLng: 'cs',
    })

export default i18n
