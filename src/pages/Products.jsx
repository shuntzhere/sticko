import React from "react";
import { ProductList } from "../components/ProductList/ProductList";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const Products = () => {
  return (
    <div className="listings">
      <Sidebar />
      <ProductList />
    </div>
  );
};
