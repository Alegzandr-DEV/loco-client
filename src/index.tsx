import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-nunito';
import 'typeface-kanit';
import 'typeface-exo-2';
import './styles/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './common/i18n';
import UserProvider from './common/UserProvider';


ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
