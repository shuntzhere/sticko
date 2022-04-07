import "./CartDetail.css";
import React from "react";
import { useCart } from "../../context/CartContext";

export const CartDetail = () => {
  const {
    state: { cartItems },
  } = useCart();

  const totalCredit = 10000;
  const bill = cartItems.reduce((acc, curr) => {
    return acc + Number(curr.price * curr.quantity);
  }, 0);

  return (
    <div className="cart__management">
      <h3 className="cart__title">Your Bill:</h3>
      <div className="divider" />
      <div className="flex justify-between">
        <p className="cart__details--text">Available Credit</p>
        <p className="cart__details--text">{totalCredit}</p>
      </div>
      <div className="flex justify-between">
        <p className="cart__details--text">Cost Price</p>
        <p className="cart__details--text">{bill}</p>
      </div>
      <div className="divider" />
      <div className="flex justify-between">
        <p className="cart__details--text">Remaining Credit</p>
        <p className="cart__details--text">{totalCredit - bill}</p>
      </div>
      <button
        className="btn primary-btn"
        type="button"
        style={{ backgroundColor: "green", cursor: "pointer" }}
      >
        Checkout
      </button>
    </div>
  );
};
