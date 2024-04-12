import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="menu">
      <h2 className="text-2xl">Explore our menu</h2>
      <p className="explore-menu-txt">
        Indulge in a culinary journey like no other as you explore our menu
      </p>
      <p className="explore-menu-txt">brimming with tantalizing delights.</p>
      <div className="menu-items">
        {menu_list.map((item, idx) => (
          <div
            className="menu-item"
            key={idx}
            onClick={() => {
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              );
            }}
          >
            <div className="menu-item-img w-full">
              <img
                className={
                  category === item.menu_name
                    ? "add-cate-img-border w-full"
                    : "w-full"
                }
                src={item.menu_image}
                alt=""
              />
            </div>
            <p className="menu-item-name">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
