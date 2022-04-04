import "./CartDetail.css";
import React from "react";
import { useCart } from "../../context/CartContext";

export const CartDetail = () => {
  const {
    state: { cartItems },
  } = useCart();

  const bill = cartItems.reduce((acc, curr) => {
    return acc + Number(curr.price);
  }, 0);
  console.log(bill);

  return (
    <div className="cart__management">
      <h3 className="cart__title">Your Bill:</h3>
      <div className="divider" />
      <div className="flex justify-between">
        <p className="cart__details--text">Available Credit</p>
        <p className="cart__details--text">8000</p>
      </div>
      <div className="flex justify-between">
        <p className="cart__details--text">Cost Price</p>
        <p className="cart__details--text">{bill}</p>
      </div>
      <div className="divider" />
      <div className="flex justify-between">
        <p className="cart__details--text">Remaining Credit</p>
        <p className="cart__details--text">5000</p>
      </div>
      <button className="btn primary-btn" type="button">
        Confirm Order
      </button>
    </div>
  );
};
