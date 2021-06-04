import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./components/App";
import "./styles/App.css";
import booksReducer from './redux/booksReducer'
import * as serviceWorker from "./js/serviceWorker";
import rootSaga from "./js/saga";
import { configureStore } from '@reduxjs/toolkit';
import {
  BrowserRouter as Router,
  
} from "react-router-dom";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {books:booksReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga).concat(thunk),
})

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

saga.run(rootSaga);

serviceWorker.register();
