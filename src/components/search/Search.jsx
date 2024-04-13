import React from "react";
import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./Search.css";

const Search = ({ setShowSerachBar }) => {
  const { searchVal, setSearchVal } = useContext(StoreContext);
  return (
    <div className="search">
      <div className="search-box">
        <input
          type="text"
          placeholder="search"
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
        <img
          src={assets.cross_icon}
          alt=""
          onClick={() => {
            setShowSerachBar(false);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
