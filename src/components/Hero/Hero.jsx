import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";
import { Category } from "../Category/Category";

export const Hero = () => {
  const [category, setCategory] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/categories");
      setCategory(data.categories);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main flex justify-between">
      <img
        className="main__content--image"
        src="https://images.unsplash.com/photo-1591844480689-94168c4d1d64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt="hero-img"
      />
      <div className="main__content flex flex-col">
        <div className="main__content--info">
          <h2 className="main__content--title">Serving Stickers</h2>
          <p className="main__content--description">
            With a purpose to change the world for good.
          </p>
        </div>
        <div className="main__content--categories">
          <h4>See for yourself</h4>
          {category &&
            category.map(({ _id, title, color }) => (
              <Category
                key={_id}
                title={title}
                color={color}
                href={title.toLowerCase()}
              />
            ))}
        </div>
      </div>
    </main>
  );
};
