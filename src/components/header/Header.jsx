import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = ({ setShowLoginModal }) => {
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "active" : "text-black"} `
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              ` ${isActive ? "active" : "text-black"} `
            }
          >
            <li>Menu</li>
          </NavLink>
          <NavLink
            to="/mobile-app"
            className={({ isActive }) =>
              ` ${isActive ? "active" : "text-black"} `
            }
          >
            <li>Mobile-app</li>
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              ` ${isActive ? "active" : "text-black"} `
            }
          >
            <li>contact-us</li>
          </NavLink>
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
