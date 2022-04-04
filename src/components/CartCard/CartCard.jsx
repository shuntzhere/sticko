import React from "react";
import "./CartCard.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../context/CartContext";

export const CartCard = ({ _id, img, name, price, description }) => {
  const { cartDispatch } = useCart();
  return (
    <div className="card horizontal-card flex" key={_id}>
      <img className="card-image" src={img} alt="product-image" />
      <div className="card-content">
        <h3 className="card-header">{name}</h3>
        <p className="card-text">{description}</p>
        <div className="card-info flex flex-items-center justify-around">
          <p className="change__cart">20 units</p>
          <h4 className="rating">{price}</h4>
        </div>
        <div className="cart__buttons">
          <AddIcon
            onClick={() =>
              cartDispatch({
                type: "INCREMENT_QUANTITY",
                payload: _id,
              })
            }
          />
          <RemoveIcon
            onClick={() =>
              cartDispatch({
                type: "DECREMENT_QUANTITY",
                payload: _id,
              })
            }
          />
        </div>
        <button
          className="btn primary-btn"
          type="button"
          onClick={() =>
            cartDispatch({
              type: "ADD_TO_WISHLIST",
              payload: _id,
            })
          }
        >
          Move to Wishlist
        </button>
        <button
          className="btn primary-btn"
          type="button"
          onClick={() =>
            cartDispatch({
              type: "REMOVE_FROM_CART",
              payload: _id,
            })
          }
        >
          Remove to Cart
        </button>
      </div>
    </div>
  );
};
