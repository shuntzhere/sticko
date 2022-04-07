import React from "react";
import { ProductList } from "../components/ProductList/ProductList";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const Products = () => {
  document.title = "Products List";
  return (
    <div className="listings">
      <Sidebar />
      <ProductList />
    </div>
  );
};
