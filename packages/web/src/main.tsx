import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Reset } from "styled-reset";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
