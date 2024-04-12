import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display">
      <h2 className="text-2xl">Top dishes near you</h2>
      <div className="food-items">
        {food_list.map((item, idx) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={idx}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
                category={item.category}
                id={item._id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
