import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM.render(<App></App>, document.querySelector("#root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//this is the new selector to render react
