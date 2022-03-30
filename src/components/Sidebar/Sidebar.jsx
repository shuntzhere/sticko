import React from "react";
import { useFilters } from "../../context/FilterContext";
import "./Sidebar.css";

export const Sidebar = () => {
  const { state, filterDispatch } = useFilters();
  return (
    <aside className="listing__sidebar">
      <div className="listings__sidebar--filter flex flex-items-center justify-between">
        <div className="listings__sidebar--header">Filters</div>
        <div>
          <a href="#" onClick={() => filterDispatch({ type: "RESET" })}>
            Clear All
          </a>
        </div>
      </div>
      <div className="divider" />
      <div className="listings__sidebar--category">
        <div className="listings__sidebar--title">Category</div>
        <form className="flex flex-col">
          <div className="form__group flex flex-items-center justify-between">
            <label htmlFor="category__1">Endangered</label>
            <input
              type="checkbox"
              id="category__1"
              value="ENDANGERED"
              checked={state.title.includes("ENDANGERED")}
              onChange={(e) =>
                filterDispatch({ type: "TITLE", payload: e.target.value })
              }
            />
          </div>
          <div className="form__group flex flex-items-center justify-between">
            <label htmlFor="category__2">Vulnerable</label>
            <input
              type="checkbox"
              id="category__2"
              value="VULNERABLE"
              checked={state.title.includes("VULNERABLE")}
              onChange={(e) =>
                filterDispatch({ type: "TITLE", payload: e.target.value })
              }
            />
          </div>
          <div className="form__group flex flex-items-center justify-between">
            <label htmlFor="category__3">Extinct</label>
            <input
              type="checkbox"
              id="category__3"
              value="EXTINCT"
              checked={state.title.includes("EXTINCT")}
              onChange={(e) =>
                filterDispatch({ type: "TITLE", payload: e.target.value })
              }
            />
          </div>
        </form>
      </div>

      <div className="divider" />

      <div className="listings__sidebar--rating flex flex-col">
        <div className="listings__sidebar--title">Ratings</div>
        <div className="flex justify-between">
          <label>1🌟</label>
          <label>5🌟</label>
        </div>
        <input
          type="range"
          min="1"
          max="5"
          value={state.rating}
          step="1"
          list="tickmarks"
          onChange={(e) =>
            filterDispatch({ type: "RATING", payload: e.target.value })
          }
        />
        <datalist id="tickmarks">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
        </datalist>
      </div>

      <div className="divider" />

      <div className="listings__sidebar--category flex flex-col">
        <div className="listings__sidebar--title">Sort by Price</div>
        <div className="form__group flex flex-items-center justify-between">
          <label htmlFor="sort__increase">Low to High</label>
          <input
            type="radio"
            id="sort__increase"
            name="sort"
            value="toHigh"
            checked={state.sort === "toHigh"}
            onClick={(e) =>
              filterDispatch({ type: "SORT", payload: e.target.value })
            }
          />
        </div>
        <div className="form__group flex flex-items-center justify-between">
          <label htmlFor="sort__decrease">High to Low</label>
          <input
            type="radio"
            id="sort__decrease"
            name="sort"
            value="toLow"
            checked={state.sort === "toLow"}
            onClick={(e) =>
              filterDispatch({ type: "SORT", payload: e.target.value })
            }
          />
        </div>
      </div>
    </aside>
  );
};
