import { toast } from 'modules/toast'
import { api } from 'services/api'
import { ApiTypes } from 'services/types'
import type { AdminFormValues, UserRegistrationFormValues } from '../components'
import { API_URLS } from '../constants'
import type {
    FormDataResponse,
    RegistrationResponseBody,
    RegistrationAsAdminArgs,
    UpdateRegistrationArgs,
    CreateRegistrationArgs,
    UpdateRegistrationAsAdminArgs,
    AdminRegistrationResponseBody,
} from '../types'
import { transformResponseToAdminFormValues, transformResponseToFormValues } from '../utils/transform'
import { ApiTags } from 'services/apiTags'

export const registrationApi = api.injectEndpoints({
    endpoints: (build) => ({
        getFormData: build.query<FormDataResponse, void>({
            query: () => ({
                url: API_URLS.FORM_DATA,
            }),
            providesTags: [ApiTags.RegistrationFormData],
        }),
        getRegistration: build.query<UserRegistrationFormValues, void>({
            query: () => ({
                url: API_URLS.REGISTRATION,
            }),
            providesTags: (result) => (result ? [{ type: ApiTags.Registration, id: result?._id }] : []),
            transformResponse: transformResponseToFormValues,
        }),
        getRegistrationAsAdmin: build.query<AdminFormValues, RegistrationAsAdminArgs>({
            query: ({ id }) => ({
                url: API_URLS.REGISTRATION_BY_ID({ id }),
            }),
            providesTags: (result, _, { id }) => (result ? [{ type: ApiTags.Registration, id }] : []),
            transformResponse: transformResponseToAdminFormValues,
        }),
        createRegistration: build.mutation<RegistrationResponseBody, CreateRegistrationArgs>({
            query: ({ body }) => ({
                method: ApiTypes.POST,
                url: API_URLS.REGISTRATION,
                body,
            }),
            invalidatesTags: (result, error) =>
                error ? [] : [{ type: ApiTags.Registration, id: result?._id }, { type: ApiTags.StartingList }],
            onQueryStarted: async (_, { queryFulfilled }) => {
                try {
                    await queryFulfilled
                    toast.success('registration.submit.success', { duration: 10000 })
                } catch (err) {
                    toast.error('registration.submit.error', { duration: 10000 })
                }
            },
        }),
        updateRegistration: build.mutation<RegistrationResponseBody, UpdateRegistrationArgs>({
            query: ({ body }) => ({
                method: ApiTypes.PUT,
                url: API_URLS.REGISTRATION,
                body,
            }),
            invalidatesTags: (result, error) =>
                error ? [] : [{ type: ApiTags.Registration, id: result?._id }, { type: ApiTags.StartingList }],
            onQueryStarted: async (_, { queryFulfilled }) => {
                try {
                    await queryFulfilled
                    toast.success('registration.update.success', { duration: 10000 })
                } catch (err) {
                    toast.error('registration.update.error', { duration: 10000 })
                }
            },
        }),
        updateRegistrationAsAdmin: build.mutation<AdminRegistrationResponseBody, UpdateRegistrationAsAdminArgs>({
            query: ({ id, body }) => ({
                method: ApiTypes.PUT,
                url: API_URLS.REGISTRATION_BY_ID({ id }),
                body,
            }),
            invalidatesTags: (result, error) =>
                error ? [] : [{ type: ApiTags.Registration, id: result?._id }, { type: ApiTags.StartingList }],
            onQueryStarted: async (_, { queryFulfilled }) => {
                try {
                    await queryFulfilled
                    toast.success('registration.update.success', { duration: 10000 })
                } catch (err) {
                    toast.error('registration.update.error', { duration: 10000 })
                }
            },
        }),
    }),
})

export const {
    useGetFormDataQuery,
    useGetRegistrationQuery,
    useGetRegistrationAsAdminQuery,
    useCreateRegistrationMutation,
    useUpdateRegistrationMutation,
    useUpdateRegistrationAsAdminMutation,
} = registrationApi
