import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/***************************
 Arquivo src/index.js 
***************************/

import Amplify from 'aws-amplify';
import config from './aws-exports';
import { I18n } from 'aws-amplify';
import AmplifyI18n from 'amplify-i18n';
Amplify.configure(config);
const locales = ["en", "fr", "pt-BR"]
AmplifyI18n.configure(locales)
I18n.setLanguage("pt-BR")


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
