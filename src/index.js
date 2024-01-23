import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppBackground from './components/AppBackground/AppBackground.jsx';
import ReactRouterLink from './components/ReactRouterLink.jsx';
import { BrowserRouter } from 'react-router-dom';

import './style.main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppBackground />
        <BrowserRouter>
            <ReactRouterLink />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
