import React, { useState } from "react";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import Header from "../../components/header/Header";
import MobileApp from "../../components/mobile-app/MobileApp";
import "./Home.css";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <div className="container">
        <div className="hero-banner" id="home">
          <div className="hero-section">
            <h2 className="txt-4xl">Order Your</h2>
            <h2 className="txt-4xl">favourite food here</h2>
            <p>
              where ordering your favorite food is as easy as a tap! Explore a
              variety
              <br /> of cuisines, place your order, and enjoy swift delivery to
              your doorstep. <br /> Simplify your dining experience today
            </p>
            <button className="view-menu-btn">view menu</button>
          </div>
        </div>
        {/* explore menu */}
        <ExploreMenu category={category} setCategory={setCategory} />
        {/* display food items */}
        <FoodDisplay category={category} />
        {/* mobile app */}
        <MobileApp />
      </div>
    </>
  );
};

export default Home;
