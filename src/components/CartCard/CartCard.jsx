import React, { useState, useEffect } from "react";
import "./CartCard.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

export const CartCard = ({ _id, img, name, price, description, quantity }) => {
  const [count, setCount] = useState(quantity);
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  // const finalPrice =

  useEffect(() => {
    count < 1 || isNaN(count) ? setCount(1) : setCount(count);
    cartDispatch({
      type: "CART_QUANTITY",
      payload: { _id: _id, quantity: count },
    });
  }, [count]);

  return (
    <div className="card horizontal-card flex" key={_id}>
      <img className="card-image" src={img} alt="product-image" />
      <div className="card-content">
        <h3 className="card-header">{name}</h3>
        <p className="card-text">{description}</p>
        <div className="card-info flex flex-items-center justify-around">
          <p className="change__cart">{quantity}</p>
          <h4 className="rating">{price}</h4>
        </div>
        <div className="cart__buttons">
          <AddIcon
            style={{ cursor: "pointer" }}
            onClick={() => setCount(count + 1)}
          />
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <RemoveIcon
            style={{ cursor: "pointer" }}
            onClick={() => setCount(count - 1)}
          />
        </div>
        <button
          className="btn primary-btn"
          type="button"
          onClick={() =>
            wishlistDispatch({
              type: "ADD_TO_WISHLIST",
              item: {
                key: _id,
                _id: _id,
                img: img,
                name: name,
                price: price,
                description: description,
              },
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
          Remove from Cart
        </button>
      </div>
    </div>
  );
};
