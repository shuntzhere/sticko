export const sortProducts = (state, products) => {
  switch (state.sort) {
    case "toLow":
      return [...products].sort((a, b) => Number(b.price) - Number(a.price));
    case "toHigh":
      return [...products].sort((a, b) => Number(a.price) - Number(b.price));
    default:
      return products;
  }
};

export const ratingFunction = (state, products) => {
  const { rating } = state;
  return rating === ""
    ? products
    : products.filter((product) => product.rating <= rating);
};

export const titleFunction = (state, products) => {
  const { title } = state;
  if (title.length === 0) {
    return products;
  } else {
    return products.filter((product) => title.includes(product.title));
  }
};
