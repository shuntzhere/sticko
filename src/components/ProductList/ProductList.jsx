import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import "./ProductList.css";
import { useFilters } from "../../context/FilterContext";

export const ProductList = () => {
  const { filteredList } = useFilters();

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
                <div className="card-info flex flex-items-center justify-around mt-3">
                  <h4 className="rating">{rating}🌟</h4>
                  <h4 className="sticko-price">PRICE: {price}</h4>
                </div>
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
