import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './App';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './assets/css/global.css';


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);