import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import "./ProductList.css";
import { useFilters } from "../../context/FilterContext";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";

export const ProductList = () => {
  const { filteredList } = useFilters();
  const { cartDispatch, state } = useCart();
  const { cartItems } = state;
  console.log(cartItems);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
  }, []);

  return (
    <main className="listing__main">
      {filteredList &&
        filteredList.map(
          ({ _id, title, name, price, img, description, rating, color }) => (
            <div className="card badge-card" key={_id}>
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
                <div className="card-info flex flex-items-center justify-around mt-3">
                  <h4 className="rating">{rating}🌟</h4>
                  <h4 className="sticko-price">PRICE: {price}</h4>
                </div>
                <div className="flex flex-items-center justify-around">
                  <FavoriteRoundedIcon
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() =>
                      cartDispatch({
                        type: "ADD_TO_WISHLIST",
                        item: {
                          _id: _id,
                          price: price,
                          title: title,
                          description: description,
                          rating: rating,
                        },
                      })
                    }
                  />
                  <button
                    className="btn primary-btn"
                    type="button"
                    onClick={() =>
                      cartDispatch({
                        type: "ADD_TO_CART",
                        item: {
                          _id: _id,
                          price: price,
                          title: title,
                          description: description,
                          rating: rating,
                          img: img,
                        },
                      })
                    }
                  >
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
