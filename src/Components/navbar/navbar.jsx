import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="mx-auto innerContainer-navbar">
        <img
          className="logo"
          alt="logo"
          src="https://i.hizliresim.com/g1270vs.png"
        />
        <p className="text">Buğracan Kaya</p>
      </div>
    </nav>
  );
};

export default navbar;
