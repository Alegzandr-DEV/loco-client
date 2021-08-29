import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-kanit';
import './custom.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './common/i18n';
import store from './common/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
