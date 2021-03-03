import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

import "../node_modules/normalize.css/normalize.css";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
