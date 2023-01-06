import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { Reset } from "styled-reset";

import App from "./App";

import "./index.css";
import "rsuite/dist/rsuite.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Reset />
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
