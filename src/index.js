import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterContextProvider } from "./context/FilterContext";
import { CartContextProvider } from "./context/CartContext";
import { WishlistContextProvider } from "./context/WishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
        <WishlistContextProvider>
          <FilterContextProvider>
            <App />
          </FilterContextProvider>
        </WishlistContextProvider>
      </CartContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
