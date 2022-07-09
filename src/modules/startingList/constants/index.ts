import type { RegistrationAsAdminArgs } from 'modules/registration/types'
import type { SeeYouExportArgs } from '../types'

export const API_URLS = {
    STARTING_LIST: '/api/starting-list',
    STARTING_LIST_ADMIN: '/api/starting-list/all',
    STARTING_LIST_EXPORT: '/api/starting-list/export',
    STARTING_LIST_SEE_YOU_EXPORT: ({ competitionClassId }: SeeYouExportArgs) =>
        `/api/starting-list/export/seeyou/${competitionClassId}`,
    REGISTRATION_QUICK_ACTION: ({ id }: RegistrationAsAdminArgs) => `api/registration/${id}/quick-actions`,
} as const

export enum ApiTags {
    StartingList = 'StartingList',
    StartingListAdmin = 'StartingListAdmin',
    Error = 'Error',
}
