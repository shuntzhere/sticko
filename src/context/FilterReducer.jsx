const defaultState = {
  HightoLow: false,
  LowtoHigh: false,
  rating: "5",
  title: [],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return { ...defaultState };

    case "TITLE":
      const { title } = state;
      if (title.includes(action.payload)) {
        const updatedTitle = title.filter((t) => t !== action.payload);
        return { ...state, title: updatedTitle };
      } else {
        return { ...state, title: [...state.title, action.payload] };
      }

    case "RATING":
      return { ...state, rating: action.payload };

    case "SORT":
      return { ...state, sort: action.payload };

    default:
      return state;
  }
};
