import React from "react";
import "./Category.css";

export const Category = ({ title, color }) => {
  return (
    <div
      className="category__name endangered"
      style={{ backgroundColor: color }}
    >
      <a href="#" className="category__name--title">
        {title}
      </a>
    </div>
  );
};
