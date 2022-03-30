import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { api } from 'services/api'

import rootReducer from './store/rootReducer'

const initialState = {}

const middleware = [thunk, api.middleware]

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: middleware,
    devTools: true,
})

export default store
