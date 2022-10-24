import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

// New Imports

import Search from './news/Search';


// End New Imports

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Search/>
  </React.StrictMode>
);





reportWebVitals();
