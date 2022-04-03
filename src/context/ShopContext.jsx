import { useContext, createContext, useState } from "react";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [shopDetails, setShopDetails] = useState({
    wishlist: [],
    cart: [],
  });
  return <ShopContext.Provider value={{}}>{children}</ShopContext.Provider>;
};

const useShop = () => useContext(ShopContext);

export { useShop, ShopContextProvider };
