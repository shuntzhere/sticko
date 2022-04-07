import React from "react";
import "../components/CartDetail/CartDetail";
import { CartDetail } from "../components/CartDetail/CartDetail";
import { useCart } from "../context/CartContext";
import { CartCard } from "../components/CartCard/CartCard";

export const Cart = () => {
  const { state } = useCart();
  const { cartItems } = state;
  console.log("cart", cartItems.length);

  document.title = "cart";
  return (
    <main className="cards__cart">
      <h1 className="cart__header">Your Cart ({cartItems?.length})</h1>
      <div className="cart__details flex flex-items-center justify-evenly">
        <div className="cart__items">
          {cartItems.map(({ _id, img, name, price, description, quantity }) => {
            return (
              <CartCard
                key={_id}
                _id={_id}
                img={img}
                name={name}
                price={price}
                description={description}
                quantity={quantity}
              />
            );
          })}
        </div>

        <CartDetail />
      </div>
    </main>
  );
};
