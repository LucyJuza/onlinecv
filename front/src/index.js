import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

let retrievedLang = navigator.language || navigator.userLanguage || "en"; 
let userLang = retrievedLang.split("-")[0];
window.userLang = userLang;
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*serviceWorkerRegistration.register();*/
/* Only register a service worker if it's supported */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}