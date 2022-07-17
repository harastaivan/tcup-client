import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'translations'

import { SpinnerFullPage } from 'modules/ui'

const root = (
    <React.StrictMode>
        <Suspense fallback={<SpinnerFullPage />}>
            <App />
        </Suspense>
    </React.StrictMode>
)

ReactDOM.render(root, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
