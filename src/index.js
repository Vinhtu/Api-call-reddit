import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux';
import appReducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';
import products from './reducers/products';

const store = createStore(
  combineReducers({
    products,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
