import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Redux } from '../modules/redux'

export const Core: FC = ({ children }) => {
    return (
        <Redux>
            <BrowserRouter>{children}</BrowserRouter>
        </Redux>
    )
}
