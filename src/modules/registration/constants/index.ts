import type { RegistrationAsAdminArgs } from '../types'

export const API_URLS = {
    FORM_DATA: '/api/registration/form',
    REGISTRATION: '/api/registration',
    REGISTRATION_BY_ID: ({ id }: RegistrationAsAdminArgs) => `/api/registration/${id}`,
} as const

export enum ApiTags {
    FormData = 'FormData',
    Registration = 'Registration',
    Error = 'Error',
}
