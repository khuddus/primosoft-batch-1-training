import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import producstReducer from "./reducers/products-reducer";
import userReducer from "./reducers/user-reducer";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  products: producstReducer,
  user: userReducer
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  allReducers,
  {
    products: [{ name: "iphone" }],
    user: "Mahendra"
  },
  allStoreEnhancers
);
ReactDOM.render(
  <Provider store={store}>
    <App randomProps="something" />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
