import React from "react";
import "./wishlistCard.css";

export const wishlistCard = () => {
  return (
    <div className="card">
      <i className="fas fa-heart fa-2x card__svg" style={{ color: "red" }} />
      <img src="/assets/image/leatherback.jpg" className="card-image" />
      <div className="card-content">
        <h3 className="card-header">Leatherbacks</h3>
        <p className="card-text">On the verge of extinction.</p>
        <div className="card-info flex flex-items-center justify-around">
          <p className="change__cart">20 units</p>
          <h4 className="rating">Rs. 3000</h4>
        </div>
        <button className="btn primary-btn" type="button">
          Move to Cart
        </button>
      </div>
    </div>
  );
};
