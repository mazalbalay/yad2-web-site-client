import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { createStore } from 'redux'
import { Provider } from "react-redux"
import appReducer from './components/reducer';



const appStore = createStore(appReducer)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={appStore}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
