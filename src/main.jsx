import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";



const react = ReactDOM.createRoot(document.getElementById('root'));
react.render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>
)






