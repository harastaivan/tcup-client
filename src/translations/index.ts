import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import cs from './cs.json'
import en from './en.json'

const resources = { cs, en }

const defaultNS = 'common' as const

export const availableLanguages = Object.keys(resources)
export type TranslationResources = typeof cs
export type TKey = keyof TranslationResources[typeof defaultNS]

export type TFunction = (key: TKey) => string

i18n.use(initReactI18next).init({
    resources,
    defaultNS,
    fallbackLng: 'cs',
    lng: 'cs',
})

export default i18n
