import React from "react";
import { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginModal.css";

const LoginModal = ({ setShowLoginModal }) => {
  const [formHeading, setFormHeading] = useState("Sign Up");
  return (
    <div className="login-modal-container">
      <div className="login-modal">
        <div className="flex space-between align-center">
          <h2>{formHeading}</h2>
          <img
            className="cross-img"
            onClick={() => {
              setShowLoginModal(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <form action="" className="form">
          {formHeading == "Sign Up" ? (
            <input type="text" name="" id="" placeholder="name" />
          ) : (
            <></>
          )}
          <input type="text" name="" id="" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />
          <button className="form-btn">{formHeading}</button>
        </form>
        {formHeading == "Login" ? (
          <p>
            <span className="form-switch-txt">create a new account</span>{" "}
            <span
              className="swicth"
              onClick={() => {
                setFormHeading("Sign Up");
              }}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            <span className="form-switch-txt">already have an account</span>{" "}
            <span
              className="swicth"
              onClick={() => {
                setFormHeading("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
