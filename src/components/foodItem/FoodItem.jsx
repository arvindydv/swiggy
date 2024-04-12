import React, { useContext } from "react";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";

const FoodItem = ({ id, name, description, image, category, price }) => {
  const { addToCart, removeToCart, cartItems } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-card">
        <div className="food-img">
          <img className="w-full" src={image} alt="" />
          {!cartItems[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div className="food-item-counter">
              <img
                onClick={() => removeToCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p className="counter">{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="food-des">
          <div className="name-rating">
            <p className="food-name">{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="des">{description}</p>
          <p className="food-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
