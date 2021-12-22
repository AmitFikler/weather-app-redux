import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { weatherReducer } from './reducers/rootReducer';
import thunkMiddleWare from 'redux-thunk';
import App from './App';
import './index.css';

const store = createStore(weatherReducer, applyMiddleware(thunkMiddleWare));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// key = 4ed2c0ce9deb99e4edf43650a237724e

// formula C = K -  273.15
