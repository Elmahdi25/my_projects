import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import UserForm from './multiStepForm/UserForm';
//import Home from './form/pages/Home';
import SeeMore from './form/pages/SeeMore';
import NoPage from './form/pages/NoPage';
import App from './form/pages/App';
import Home from './form/pages/Home';
import BuyForm from './form/pages/BuyForm';
import NomPreCin from './datasave/NomPreCin';
//import Home from './form/pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
