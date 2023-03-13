import React from "react";
import "./navbar.css";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

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

      <div className="nav-sec">
        <ul className="nav-li">
          <a href="#tech">
            <li className="white">Work</li>
          </a>
          <a href="#contact">
            <li className="white">Contact</li>
          </a>
        </ul>
        <div className="icon-container">
          <a
            className="icon-a"
            target="blank"
            href="https://github.com/bugracank"
          >
            <AiOutlineGithub id="icon" />
          </a>
          <a
            className="icon-a"
            target="blank"
            href="https://github.com/bugracank"
          >
            <AiOutlineInstagram id="icon" />
          </a>
          <a
            className="icon-a"
            target="blank"
            href="https://github.com/bugracank"
          >
            <AiOutlineTwitter id="icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
