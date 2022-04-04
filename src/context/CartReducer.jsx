export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = cartItems.findIndex((e) => e._id === action.payload._id);
      const newCartItems = [...state.cartItems];
      if (index >= 0) {
        newCartItems.splice(index, 1);
      } else {
        alert(`Unable to remove product(id:${action._id})`);
      }

      return {
        ...state,
        cartItems: newCartItems,
      };

    case "INCREMENT_QUANTITY":
      const itemToIncrement = cartItems.find(
        (e) => e._id === action.payload._id
      );
      const updatedCartItems = [...state.cartItems];
      const incrementCartItems = updatedCartItems.map((e) =>
        e._id === itemToIncrement._id ? { ...e, count: e.count + 1 } : { ...e }
      );
      return {
        ...state,
        cartItems: incrementCartItems,
      };

    case "DECREMENT_QUANTITY":
      const itemToDecrement = cartItems.find(
        (e) => e._id === action.payload._id
      );
      if (itemToDecrement.count === 1) {
        const decrementCartItems = cartItems.filter(
          (e) => e._id !== itemToDecrement._id
        );
        return {
          ...state,
          cartItems: decrementCartItems,
          // cartTotalPrice: state.cartTotalPrice - action.payload.price,
        };
      } else {
        const decrementCartItems = cartItems.map((e) =>
          e._id === itemToDecrement._id ? { ...e, count: e.count - 1 } : { e }
        );
        return { ...state, cartItems: decrementCartItems };
      }

    case "ADD_TO_WISHLIST":
      return { ...state, wishlistItems: state.wishlistItems + 1 };

    default:
      return state;
  }
};
