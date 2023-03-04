import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DarkMode from "./components/DarkMode";
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter basename="/main-portfolio/">
      <App />
    </BrowserRouter>
  
);
