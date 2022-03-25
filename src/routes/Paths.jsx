import { Routes, Route } from "react-router-dom";
import { Cart, Home, Login, Products, Signup, Wishlist } from "../pages/_pages";

export const Paths = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
