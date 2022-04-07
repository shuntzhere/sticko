import React from "react";
import "./Navbar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useWishlist } from "../../context/WishlistContext";

export const Navbar = () => {
  const { state } = useCart();
  const { wishlistState } = useWishlist();
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
          <Link to="/products">
            <ListAltIcon />
          </Link>
          <Link to="/wishlist">
            <FavoriteIcon />
            <span>
              {wishlistState.wishlistItems.length > 0
                ? wishlistState.wishlistItems.length
                : ""}
            </span>
          </Link>
          <Link to="/cart">
            <ShoppingCartIcon />
            <span>
              {state.cartItems.length > 0 ? state.cartItems.length : ""}
            </span>
          </Link>
        </div>
        <Link to="/login" className="btn">
          Log In
        </Link>
      </nav>
    </header>
  );
};
