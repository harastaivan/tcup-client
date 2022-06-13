import type { FC } from 'react'
import { Provider } from 'react-redux'

import { configureStore } from '../config'

export const Redux: FC = ({ children }) => {
    const { store } = configureStore()

    return <Provider store={store}>{children}</Provider>
}
