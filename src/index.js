import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterContextProvider } from "./context/FilterContext";
import { ShopContextProvider } from "./context/ShopContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ShopContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </ShopContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
