import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useAxios } from "../hooks/useAxios";
import { ratingFunction, sortProducts, titleFunction } from "./FilterCompose";
import { filterReducer } from "./FilterReducer";

const FilterContext = createContext();

const compose =
  (state, ...allFilters) =>
  (data) => {
    return allFilters.reduce((acc, curr) => {
      return curr(state, acc);
    }, data);
  };

export const FilterContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { apiResponse, loading } = useAxios("/api/products");
  useEffect(() => {
    if (!loading) {
      setProducts(apiResponse.products);
    }
  }, [loading]);

  const [state, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    rating: "5",
    title: [],
  });

  const filteredList = compose(
    state,
    sortProducts,
    ratingFunction,
    titleFunction
  )(products);
  // console.log(filteredList);

  return (
    <FilterContext.Provider value={{ state, filterDispatch, filteredList }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);
