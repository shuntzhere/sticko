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
  const productList = [...products];
  return rating === ""
    ? productList
    : productList.filter((product) => product.rating <= rating);
};

export const titleFunction = (state, products) => {
  const { title } = state;
  const productList = [...products];
  if (title.length === 0) {
    return productList;
  } else {
    return productList.filter((product) => title.includes(product.title));
  }
};
