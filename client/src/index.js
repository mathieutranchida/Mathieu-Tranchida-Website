import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import history from "./history";

import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
