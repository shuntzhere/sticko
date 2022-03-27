import React from "react";
import "./ProductList.css";

export const ProductList = () => {
  return (
    <main className="listing__main">
      <div className="card badge-card">
        <div className="vertical-badge">Endangered</div>
        <img
          className="card-image"
          src="/assets/image/leatherback.jpg"
          alt="image"
        />
        <div className="card-content">
          <h3 className="card-header">Leatherbacks</h3>
          <p className="card-text">On the verge of extinction.</p>
          <div className="card-info flex flex-items-center justify-around">
            <p className="change__cart">
              + <span>5</span> - of
            </p>
            <h4 className="rating">3000</h4>
          </div>
          <div className="flex flex-items-center justify-between">
            <i
              className="fas fa-heart fa-2x listing__svg"
              style={{ color: "red" }}
            />
            <button className="btn primary-btn" type="button">
              Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card badge-card">
        <div className="vertical-badge extinct">Extinct</div>
        <img
          className="card-image"
          src="/assets/image/leatherback.jpg"
          alt="image"
        />
        <div className="card-content">
          <h3 className="card-header">Leatherbacks</h3>
          <p className="card-text">On the verge of extinction.</p>
          <div className="card-info flex flex-items-center justify-around">
            <p className="change__cart">
              + <span>0</span> - of
            </p>
            <h4 className="rating">0</h4>
          </div>
          <div className="flex flex-items-center justify-between">
            <i
              className="fas fa-heart fa-2x listing__svg"
              style={{ color: "red" }}
            />
            <button className="btn primary-btn" type="button">
              Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card badge-card">
        <div className="vertical-badge">Endangered</div>
        <img
          className="card-image"
          src="/assets/image/leatherback.jpg"
          alt="image"
        />
        <div className="card-content">
          <h3 className="card-header">Leatherbacks</h3>
          <p className="card-text">On the verge of extinction.</p>
          <div className="card-info flex flex-items-center justify-around">
            <p className="change__cart">
              + <span>17</span> - of
            </p>
            <h4 className="rating">3000</h4>
          </div>
          <div className="flex flex-items-center justify-between">
            <i
              className="fas fa-heart fa-2x listing__svg"
              style={{ color: "red" }}
            />
            <button className="btn primary-btn" type="button">
              Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card badge-card">
        <div className="vertical-badge vulnerable">Vulnerable</div>
        <img
          className="card-image"
          src="/assets/image/leatherback.jpg"
          alt="image"
        />
        <div className="card-content">
          <h3 className="card-header">Leatherbacks</h3>
          <p className="card-text">On the verge of extinction.</p>
          <div className="card-info flex flex-items-center justify-around">
            <p className="change__cart">
              + <span>18</span> - of
            </p>
            <h4 className="rating">50000</h4>
          </div>
          <div className="flex flex-items-center justify-between">
            <i
              className="fas fa-heart fa-2x listing__svg"
              style={{ color: "red" }}
            />
            <button className="btn primary-btn" type="button">
              Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card badge-card">
        <div className="vertical-badge extinct">Vulnerable</div>
        <img
          className="card-image"
          src="/assets/image/leatherback.jpg"
          alt="image"
        />
        <div className="card-content">
          <h3 className="card-header">Leatherbacks</h3>
          <p className="card-text">On the verge of extinction.</p>
          <div className="card-info flex flex-items-center justify-around">
            <p className="change__cart">
              + <span>0</span> - of
            </p>
            <h4 className="rating">0</h4>
          </div>
          <div className="flex flex-items-center justify-between">
            <i
              className="fas fa-heart fa-2x listing__svg"
              style={{ color: "red" }}
            />
            <button className="btn primary-btn" type="button">
              Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card badge-card">
        <div className="vertical-badge vulnerable">Vulnerable</div>
        <img
          className="card-image"
          src="/assets/image/leatherback.jpg"
          alt="image"
        />
        <div className="card-content">
          <h3 className="card-header">Leatherbacks</h3>
          <p className="card-text">On the verge of extinction.</p>
          <div className="card-info flex flex-items-center justify-around">
            <p className="change__cart">
              + <span>20</span> - of
            </p>
            <h4 className="rating">50000</h4>
          </div>
          <div className="flex flex-items-center justify-between">
            <i
              className="fas fa-heart fa-2x listing__svg"
              style={{ color: "red" }}
            />
            <button className="btn primary-btn" type="button">
              Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
