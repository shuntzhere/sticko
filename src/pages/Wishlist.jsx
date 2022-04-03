import React from "react";
import { WishlistCard } from "../components/WishlistCard/WishlistCard";
export const Wishlist = ({}) => {
  return (
    <main className="cards__wishlist">
      <h1 className="cart__header">Your Wishlist</h1>
      <div className="cart-container flex justify-evenly">
        <WishlistCard />
      </div>
    </main>
  );
};
