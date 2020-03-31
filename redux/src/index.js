import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import ProductReducer from './reducers/productReducer.js';
import userReducer from './reducers/userReducer.js';


const allReducers = combineReducers({
  products: ProductReducer,
  user: userReducer
});
const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);
const store = createStore(allReducers, {
  products: [{name: 'iphone'}],
  user: 'Divya'
},
  allStoreEnhancers
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App props = "property"/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
