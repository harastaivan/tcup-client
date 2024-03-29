import 'react-i18next'
import type { TranslationResources } from 'translations'

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common'
        resources: TranslationResources
    }
}
