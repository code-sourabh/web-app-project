// src/index.js
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n.js'; // Import the i18n configuration file
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the i18n instance


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  //   <I18nextProvider i18n={i18n}>
  //     <App />
  //   </I18nextProvider>
  // </BrowserRouter>
  <BrowserRouter>
    <Suspense fallback="Loading...">
      <App/>
    </Suspense>
  </BrowserRouter>
);
