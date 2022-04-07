import React from "react";
import "./WishlistCard.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

export const WishlistCard = ({
  _id,
  name,
  description,
  price,
  img,
  rating,
}) => {
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();
  return (
    <div className="card">
      <DeleteOutlineIcon
        className="card__svg"
        onClick={() =>
          wishlistDispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload: _id,
          })
        }
      />
      <img src={img} className="card-image" />
      <div className="card-content">
        <h3 className="card-header">{name}</h3>
        <p className="card-text">{description}</p>
        <div className="card-info flex flex-items-center justify-around">
          <p className="change__cart">{rating} 🌟</p>
          <h4 className="rating">{price}</h4>
        </div>
        <button
          className="btn primary-btn"
          type="button"
          onClick={() =>
            cartDispatch({
              type: "ADD_TO_CART",
              item: {
                key: _id,
                _id: _id,
                img: img,
                name: name,
                price: price,
                description: description,
                quantity: 1,
              },
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
