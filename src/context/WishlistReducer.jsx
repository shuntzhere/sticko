export const WishlistReducer = (wishlistState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        wishlistItems: [...wishlistState.wishlistItems, action.item],
      };

    case "REMOVE_FROM_WISHLIST":
      const index = wishlistState.wishlistItems.findIndex(
        (e) => e._id === action.payload
      );
      const newWishlistItems = [...wishlistState.wishlistItems];
      if (index >= 0) {
        newWishlistItems.splice(index, 1);
      } else {
        alert(`Unable to remove product(id:${action._id})`);
      }

      return {
        ...wishlistState,
        wishlistItems: newWishlistItems,
      };
  }
};
