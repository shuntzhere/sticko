import axios from "axios";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import "./ProductList.css";
import { useFilters } from "../../context/FilterContext";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { filteredList } = useFilters();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/products");
      setProducts(data.products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <main className="listing__main">
      {filteredList &&
        filteredList.map(
          ({ id, title, name, price, img, description, rating, color }) => (
            <div className="card badge-card" key={id}>
              <div
                className="vertical-badge"
                style={{ backgroundColor: color }}
              >
                {title}
              </div>
              <img className="card-image" src={img} alt="image" />
              <div className="card-content">
                <h3 className="card-header">{name}</h3>
                <p className="card-text">{description}</p>
                <div className="card-info flex flex-items-center justify-around">
                  <div className="change__cart">
                    <AddIcon />
                    <span>quantity</span>
                    <RemoveIcon />
                  </div>
                  <h4 className="rating">{rating}</h4>
                </div>
                <h3 className="sticko-price">PRICE: {price}</h3>
                <div className="flex flex-items-center justify-around">
                  <FavoriteRoundedIcon style={{ color: "red" }} />
                  <button className="btn primary-btn" type="button">
                    Cart
                  </button>
                </div>
              </div>
            </div>
          )
        )}
    </main>
  );
};
