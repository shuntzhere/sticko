import React from "react";
import "./Navbar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { state } = useCart();
  return (
    <header className="header">
      <nav className="header__nav flex flex-items-center justify-between">
        <div className="header__nav--logo">
          <a className="header__nav--brand" href="#">
            <span>S</span>
            <span>t</span>
            <span>i</span>
            <span>c</span>
            <span>k</span>
            <span>o.</span>
          </a>
        </div>

        <div className="header__nav--search">
          <input type="search" className="nav__search" placeholder="Search" />
        </div>

        <div className="header__nav--menu flex justify-between">
          <Link to="/wishlist">
            <FavoriteIcon />
            <span>{state.wishlistItems.length}</span>
          </Link>
          <Link to="/cart">
            <ShoppingCartIcon />
            <span>{state.cartItems.length}</span>
          </Link>
          <a href="#">
            <PersonIcon />
          </a>
        </div>
        <a href="#" className="btn">
          Login
        </a>
      </nav>
    </header>
  );
};
