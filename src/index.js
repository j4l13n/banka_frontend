import React from "react";
import { render } from "react-dom";
import { toast } from "react-toastify";
import { Provider } from "react-redux";
import App from "./App";
import "./styles/main.scss";
import configureStore from "./redux/configureStore";

const store = configureStore();

toast.configure({
  autoClose: false,
  draggable: false
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
