import React from "react";
import { WishlistCard } from "../components/WishlistCard/WishlistCard";
import { useWishlist } from "../context/WishlistContext";
export const Wishlist = ({}) => {
  const { wishlistState } = useWishlist();
  const { wishlistItems } = wishlistState;
  return (
    <main className="cards__wishlist">
      <h1 className="cart__header">Your Wishlist({wishlistItems?.length})</h1>
      <div className="cart-container flex justify-evenly">
        {wishlistItems.map(({ _id, img, name, price, description, rating }) => {
          return (
            <WishlistCard
              key={_id}
              _id={_id}
              img={img}
              name={name}
              price={price}
              description={description}
              rating={rating}
            />
          );
        })}
      </div>
    </main>
  );
};
