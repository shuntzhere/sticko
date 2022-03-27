import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="listing__sidebar">
      <div className="listings__sidebar--filter flex flex-items-center justify-between">
        <div className="listings__sidebar--header">Filters</div>
        <div>
          <a href="#">Clear All</a>
        </div>
      </div>
      <div className="divider" />
      <div className="listings__sidebar--category">
        <div className="listings__sidebar--title">Category</div>
        <form className="flex flex-col">
          <div className="form__group flex flex-items-center justify-between">
            <label htmlFor="category__1">Endangered</label>
            <input type="checkbox" id="category__1" defaultValue="Endangered" />
          </div>
          <div className="form__group flex flex-items-center justify-between">
            <label htmlFor="category__2">Vulnerable</label>
            <input type="checkbox" id="category__2" defaultValue="Vulnerable" />
          </div>
          <div className="form__group flex flex-items-center justify-between">
            <label htmlFor="category__3">Extinct</label>
            <input type="checkbox" id="category__1" defaultValue="Extinct" />
          </div>
        </form>
      </div>
      <div className="divider" />
      <div className="listings__sidebar--rating flex flex-col">
        <div className="listings__sidebar--title">Ratings</div>
        <div className="form__group flex flex-items-center justify-between">
          <label htmlFor="4__stars">4 stars or more</label>
          <input type="radio" id="4__star" name="ratings" defaultValue={4} />
        </div>
        <div className="form__group flex flex-items-center justify-between">
          <label htmlFor="3__stars">3 stars or more</label>
          <input type="radio" id="3__star" name="ratings" defaultValue={3} />
        </div>
        <div className="form__group flex flex-items-center justify-between">
          <label htmlFor="2__stars">2 stars or more</label>
          <input type="radio" id="2__star" name="ratings" defaultValue={2} />
        </div>
        <div className="form__group flex flex-items-center justify-between">
          <label htmlFor="1__stars">1 star or more</label>
          <input type="radio" id="1__star" name="ratings" defaultValue={1} />
        </div>
      </div>
      <div className="divider" />
      <div className="listings__sidebar--category flex flex-col">
        <div className="listings__sidebar--title">Sort by</div>
        <div className="form__group flex flex-items-center justify-between">
          <label htmlFor="sort__increase">Credit- Low to High</label>
          <input
            type="radio"
            id="sort__increase"
            name="sort"
            defaultValue="toHigh"
          />
        </div>
        <div className="form__group flex flex-items-center justify-between">
          <label htmlFor="sort__decrease">Credit- High to Low</label>
          <input
            type="radio"
            id="sort__decrease"
            name="sort"
            defaultValue="toLow"
          />
        </div>
      </div>
    </aside>
  );
};
