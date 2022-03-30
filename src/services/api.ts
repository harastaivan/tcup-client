import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ENDPOINT } from 'config/constants'
import { getToken } from 'store/auth/selectors'

export const api = createApi({
    reducerPath: 'tcup-api',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        baseUrl: API_ENDPOINT,
        prepareHeaders: (headers, { getState }) => {
            // @ts-ignore
            const token = getToken(getState())

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    endpoints: () => ({}),
})
