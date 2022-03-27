import React from "react";
import "./Navbar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header">
      <nav className="header__nav flex flex-items-center justify-between">
        <div className="header__nav--logo">
          <Link to="/" className="header__nav--brand">
            <span>S</span>
            <span>t</span>
            <span>i</span>
            <span>c</span>
            <span>k</span>
            <span>o.</span>
          </Link>
        </div>

        <div className="header__nav--search">
          <input type="search" className="nav__search" placeholder="Search" />
        </div>

        <div className="header__nav--menu flex justify-between">
          <Link to="/">
            <FavoriteIcon />
          </Link>
          <Link to="/">
            <ShoppingCartIcon />
          </Link>
          <Link to="/">
            <PersonIcon />
          </Link>
        </div>
        <a href="#" className="btn">
          Login
        </a>
      </nav>
    </header>
  );
};
