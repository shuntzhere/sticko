import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "./WishlistReducer";

const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, {
    wishlistItems: [],
  });

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistContextProvider, useWishlist };
