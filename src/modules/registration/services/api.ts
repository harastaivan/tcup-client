import { toast } from 'modules/toast'
import { api } from 'services/api'
import { ApiTypes } from 'services/types'
import type { AdminFormValues, UserRegistrationFormValues } from '../components'
import { ApiTags, API_URLS } from '../constants'
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

const apiWithTags = api.enhanceEndpoints({ addTagTypes: [ApiTags.FormData, ApiTags.Registration, ApiTags.Error] })

// TODO: Success and error handling

export const adsApi = apiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getFormData: build.query<FormDataResponse, void>({
            query: () => ({
                url: API_URLS.FORM_DATA,
            }),
            providesTags: [ApiTags.FormData],
        }),
        getRegistration: build.query<UserRegistrationFormValues, void>({
            query: () => ({
                url: API_URLS.REGISTRATION,
            }),
            providesTags: (result) => (result ? [{ type: ApiTags.Registration, id: result?._id }] : [ApiTags.Error]),
            transformResponse: transformResponseToFormValues,
        }),
        getRegistrationAsAdmin: build.query<AdminFormValues, RegistrationAsAdminArgs>({
            query: ({ id }) => ({
                url: API_URLS.REGISTRATION_BY_ID({ id }),
            }),
            providesTags: (result, _, { id }) => (result ? [{ type: ApiTags.Registration, id }] : [ApiTags.Error]),
            transformResponse: transformResponseToAdminFormValues,
        }),
        createRegistration: build.mutation<RegistrationResponseBody, CreateRegistrationArgs>({
            query: ({ body }) => ({
                method: ApiTypes.POST,
                url: API_URLS.REGISTRATION,
                body,
            }),
            invalidatesTags: (result, error) =>
                error ? [ApiTags.Error] : [{ type: ApiTags.Registration, id: result?._id }],
            onQueryStarted: async (_, { queryFulfilled }) => {
                try {
                    await queryFulfilled
                    toast.success('registration.submit.success')
                } catch (err) {
                    toast.error('registration.submit.error')
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
                error ? [ApiTags.Error] : [{ type: ApiTags.Registration, id: result?._id }],
            onQueryStarted: async (_, { queryFulfilled }) => {
                try {
                    await queryFulfilled
                    toast.success('registration.update.success')
                } catch (err) {
                    toast.error('registration.update.error')
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
                error ? [ApiTags.Error] : [{ type: ApiTags.Registration, id: result?._id }],
            onQueryStarted: async (_, { queryFulfilled }) => {
                try {
                    await queryFulfilled
                    toast.success('registration.update.success')
                } catch (err) {
                    toast.error('registration.update.error')
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
} = adsApi
