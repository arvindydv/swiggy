import React from "react";
import { assets } from "../../assets/assets";
import "./MobileApp.css";

const MobileApp = () => {
  return (
    <div className="mobile-app" id="mobile-app">
      <p className="moble-app-heading">
        For better Experince Download
        <br />
        swigy App
      </p>
      <div className="mobile-app-store">
        <div className="w-50">
          <img className="w-full" src={assets.play_store} alt="" />
        </div>
        <div className="w-50">
          {" "}
          <img className="w-full" src={assets.app_store} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
