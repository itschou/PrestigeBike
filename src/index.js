import ReactDOM from 'react-dom/client';

import React, { StrictMode } from 'react';
import './index.css';
import { BrowserRouter } from "react-router-dom";


import reportWebVitals from './reportWebVitals';


// New Imports

import App from './App';

// End New Imports





const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <StrictMode>
        <App />
    </StrictMode>
);





reportWebVitals();
