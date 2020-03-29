import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {combineReducers, createStore} from 'redux';

function ProductReducer(state = [], action){
  return state;
}

function userReducer(state = '', action){
  return state;
}
const allReducers = combineReducers({
  products: ProductReducer,
  users: userReducer
});

const store = createStore(allReducers);

console.log(store.getState());

const action = {
  type: 'changeState',
  payload: {
    newState : 'New State'
  }
};

store.dispatch(action);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
