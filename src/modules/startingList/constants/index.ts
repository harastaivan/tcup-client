import type { RegistrationAsAdminArgs } from 'modules/registration/types'

export const API_URLS = {
    STARTING_LIST: '/api/starting-list',
    STARTING_LIST_ADMIN: '/api/starting-list/all',
    STARTING_LIST_EXPORT: '/api/starting-list/export',
    REGISTRATION_QUICK_ACTION: ({ id }: RegistrationAsAdminArgs) => `api/registration/${id}/quick-actions`,
} as const

export enum ApiTags {
    StartingList = 'StartingList',
    StartingListAdmin = 'StartingListAdmin',
    Error = 'Error',
}
