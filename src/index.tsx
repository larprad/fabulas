import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/index.css";
import App from "./component/App/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
