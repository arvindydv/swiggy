import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [foodData, setFoodData] = useState(food_list);
  const { searchVal } = useContext(StoreContext);

  useEffect(() => {
    if (!searchVal) {
      console.log("1111");
      setFoodData(food_list);
    } else {
      console.log("2222");
      const filteredData = food_list.filter((food) =>
        food.name.toLowerCase().includes(searchVal.toLowerCase())
      );

      setFoodData(filteredData);
    }
  }, [searchVal]);

  return (
    <div className="food-display">
      <h2 className="text-2xl">Top dishes near you</h2>
      <div className="food-items">
        {foodData.map((item, idx) => {
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
