import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

export const Category = ({ title, color, href }) => {
  return (
    <div
      className="category__name endangered"
      style={{ backgroundColor: color }}
    >
      <Link to={`/products?category=${href}`} className="category__name--title">
        {title}
      </Link>
    </div>
  );
};
