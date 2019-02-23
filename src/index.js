import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FacebookProvider } from "react-facebook";
import { configuredStore } from "./initializeRedux";
import { Provider } from "react-redux";
import { authConfig } from "./utils/config";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const store = configuredStore();
ReactDOM.render(
  <FacebookProvider appId={authConfig.facebookId}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </FacebookProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
