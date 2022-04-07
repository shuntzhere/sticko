export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.cartItems.findIndex((e) => e._id === action.payload);
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

    case "CART_QUANTITY":
      const itemToIncrement = state.cartItems.find(
        (e) => e._id === action.payload._id
      );
      const updatedCartItems = [...state.cartItems];
      const incrementCartItems = updatedCartItems.map((e) =>
        e._id === itemToIncrement._id
          ? { ...e, quantity: action.payload.quantity }
          : { ...e }
      );

      return {
        ...state,
        cartItems: incrementCartItems,
      };

    default:
      return state;
  }
};
