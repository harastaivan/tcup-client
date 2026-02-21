import type { UpdateRegistrationQuickActionArgs } from 'modules/registration/types'
import toast from 'react-hot-toast'
import { api } from 'services/api'
import { ApiTypes } from 'services/types'
import type { SeeYouExportArgs, StartingListResponse } from '../types'
import { API_URLS } from '../constants'
import { ApiTags } from 'services/apiTags'

export const startingListApi = api.injectEndpoints({
    endpoints: (build) => ({
        getStartingList: build.query<StartingListResponse, { isFinal: boolean }>({
            query: ({ isFinal }) => ({
                url: API_URLS.STARTING_LIST,
                params: { isFinal },
            }),
            providesTags: (result) => (result ? [ApiTags.StartingList] : []),
        }),
        getStartingListExport: build.query<void, void>({
            query: () => ({
                url: API_URLS.STARTING_LIST_EXPORT,
                responseHandler: 'text', // Do not parse as JSON
            }),
        }),
        getStartingListSeeYouExport: build.query<void, SeeYouExportArgs>({
            query: ({ competitionClassId }) => ({
                url: API_URLS.STARTING_LIST_SEE_YOU_EXPORT({ competitionClassId }),
                responseHandler: 'text', // Do not parse as JSON
            }),
        }),
        updateRegistrationQuickAction: build.mutation<void, UpdateRegistrationQuickActionArgs>({
            query: ({ id, body }) => ({
                method: ApiTypes.PUT,
                url: API_URLS.REGISTRATION_QUICK_ACTION({ id }),
                body,
            }),
            invalidatesTags: (result, error, variables) =>
                error ? [] : [{ type: ApiTags.Registration, id: variables.id }, { type: ApiTags.StartingList }],
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
    useLazyGetStartingListExportQuery,
    useLazyGetStartingListSeeYouExportQuery,
    useUpdateRegistrationQuickActionMutation,
} = startingListApi
