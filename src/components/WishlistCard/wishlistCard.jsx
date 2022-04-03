import React from "react";
import "./WishlistCard.css";

export const WishlistCard = ({ id, name, description, price, img }) => {
  return (
    <div className="card">
      <i className="fas fa-heart fa-2x card__svg" style={{ color: "red" }} />
      <img src={img} className="card-image" />
      <div className="card-content">
        <h3 className="card-header">{name}</h3>
        <p className="card-text">{description}</p>
        <div className="card-info flex flex-items-center justify-around">
          <p className="change__cart">20 units</p>
          <h4 className="rating">{price}</h4>
        </div>
        <button className="btn primary-btn" type="button">
          Move to Cart
        </button>
      </div>
    </div>
  );
};
