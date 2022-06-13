import { configureStore as configureReduxStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { api } from 'services/api'
import rootReducer from 'store/rootReducer'

export const configureStore = () => {
    const initialState = {}

    const middleware = [thunk, api.middleware]

    const store = configureReduxStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: middleware,
        devTools: true,
    })

    return { store }
}
