import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = ({ setShowLoginModal }) => {
  const [checkNav, setCheckNav] = useState("home");
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img
              className="w-full"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <ul className="nav-list">
          <a href="#home" onClick={() => setCheckNav("home")}>
            <li className={checkNav == "home" ? "active-nav" : ""}>Home</li>
          </a>

          <a href="#menu" onClick={() => setCheckNav("menu")}>
            {" "}
            <li className={checkNav == "menu" ? "active-nav" : ""}>Menu</li>
          </a>

          <a href="#mobile-app" onClick={() => setCheckNav("mobile-app")}>
            <li className={checkNav == "mobile-app" ? "active-nav" : ""}>
              Mobile-app
            </li>
          </a>

          <a href="#footer" onClick={() => setCheckNav("footer")}>
            <li className={checkNav == "footer" ? "active-nav" : ""}>
              contact-us
            </li>
          </a>
        </ul>
        <div className="header-btns">
          <FaSearch />
          <NavLink to="/cart">
            {" "}
            <FaCartPlus />
          </NavLink>

          <button
            className="sign-up"
            onClick={() => {
              setShowLoginModal(true);
            }}
          >
            sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
