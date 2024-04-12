import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        {" "}
        <div className="footer-left">
          <div className="footer-logo">
            <img
              className="w-full"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
              alt=""
            />
          </div>
          <p className="footer-txt">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            incidunt, consequatur recusandae nemo magnam necessitatibus ipsa
            rerum, similique at nostrum praesentium excepturi sapiente,
            reprehenderit libero? Magni delectus exercitationem iure dolorum!
          </p>
          <div className="social-media-icons">
            <div className="smi">
              <FaFacebookF />
            </div>
            <div className="smi">
              <FaTwitter />
            </div>
            <div className="smi">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="company">
            <h2 className="text-2xl">COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="get-in-touch">
            <h2 className="text-2xl">GET IN TOUCH</h2>
            <p>+1-1234567890</p>
            <p>contact@gmail.com</p>
          </div>
        </div>
      </div>
      <hr />
      <p className="copy-right-txt">
        Copyright 2024 @ swiggy.com-All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
