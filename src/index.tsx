import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./services/api";

import "./assets/scss/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
