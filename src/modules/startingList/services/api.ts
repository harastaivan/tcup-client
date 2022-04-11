import type { UpdateRegistrationQuickActionArgs } from 'modules/registration/types'
import toast from 'react-hot-toast'
import { api } from 'services/api'
import { ApiTypes } from 'services/types'
import { ApiTags, API_URLS } from '../constants'
import type { StartingListResponse } from '../types'

const apiWithTags = api.enhanceEndpoints({
    addTagTypes: [ApiTags.StartingList, ApiTags.StartingListAdmin, ApiTags.Error],
})

export const startingListApi = apiWithTags.injectEndpoints({
    endpoints: (build) => ({
        getStartingList: build.query<StartingListResponse, void>({
            query: () => ({
                url: API_URLS.STARTING_LIST,
            }),
            providesTags: (result) => (result ? [ApiTags.StartingList] : [ApiTags.Error]),
        }),
        getStartingListAsAdmin: build.query<StartingListResponse, void>({
            query: () => ({
                url: API_URLS.STARTING_LIST_ADMIN,
            }),
            providesTags: (result) => (result ? [ApiTags.StartingListAdmin] : [ApiTags.Error]),
        }),
        getStartingListExport: build.query<any, void>({
            query: () => ({
                url: API_URLS.STARTING_LIST_EXPORT,
                responseHandler: 'text', // Do not parse as JSON
            }),
        }),
        updateRegistrationQuickAction: build.mutation<void, UpdateRegistrationQuickActionArgs>({
            query: ({ id, body }) => ({
                method: ApiTypes.PUT,
                url: API_URLS.REGISTRATION_QUICK_ACTION({ id }),
                body,
            }),
            invalidatesTags: (result, error) => (error ? [ApiTags.Error] : [ApiTags.StartingListAdmin]),
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
    useGetStartingListQuery,
    useGetStartingListAsAdminQuery,
    useLazyGetStartingListExportQuery,
    useUpdateRegistrationQuickActionMutation,
} = startingListApi
