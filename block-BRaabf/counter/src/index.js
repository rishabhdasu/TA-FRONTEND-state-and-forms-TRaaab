import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Max from "./components/Max";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <h1>Counter App</h1>
    <App />
    <Max />
  </div>
);
