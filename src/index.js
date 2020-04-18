import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/Spinner';
import './index.css';
import App from './App';

import './i18next';

const root = (
    <Suspense fallback={<Spinner />}>
        <App />
    </Suspense>
);

ReactDOM.render(root, document.getElementById('root'));
