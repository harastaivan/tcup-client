import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import { Application } from 'modules/application'
import { Core } from 'modules/core'
import 'translations'

import './index.css'
import reportWebVitals from './reportWebVitals'
import SpinnerFullPage from './components/SpinnerFullPage'

const root = (
    <React.StrictMode>
        {/* TODO: Move to App or better Layout */}
        <Suspense fallback={<SpinnerFullPage />}>
            <Core>
                <Application />
            </Core>
        </Suspense>
    </React.StrictMode>
)

ReactDOM.render(root, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
