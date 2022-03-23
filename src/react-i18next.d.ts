import 'react-i18next'
import type { TranslationResources } from './i18next'

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common'
        resources: TranslationResources
    }
}
