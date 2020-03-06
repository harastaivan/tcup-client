import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Spinner } from 'reactstrap';
import './index.css';
import App from './App';

import './i18next';

const loader = <Spinner type="grow" color="secondary" className="m-3" />;
const root = (
    <Suspense fallback={loader}>
        <App />
    </Suspense>
);

ReactDOM.render(root, document.getElementById('root'));
