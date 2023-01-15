import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

// TOAST ALERT
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// APP
import App from "./app/App";

// GLOBAL STYLES
import "../src/styles/library/bundle.scss";
import "../src/styles/global.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
