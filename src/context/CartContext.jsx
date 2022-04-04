import { useContext, createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, cartDispatch] = useReducer(CartReducer, {
    cartItems: [],
    // wishlistItems: [],
  });
  return (
    <CartContext.Provider value={{ state, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartContextProvider };
