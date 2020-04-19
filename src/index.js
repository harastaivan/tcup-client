import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Spinner from './components/Spinner';
import './index.css';
import App from './App';

import store from './store';

import './i18next';

const root = (
    <Suspense fallback={<Spinner />}>
        <Provider store={store}>
            <App />
        </Provider>
    </Suspense>
);

ReactDOM.render(root, document.getElementById('root'));
