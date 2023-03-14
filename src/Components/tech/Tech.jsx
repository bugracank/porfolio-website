import React from "react";
import { useRef } from "react";
import BallCanvas from "./ball";
import technologies from "../../constants";
import "./tech.css";
import { useInView } from "framer-motion";
import { MdDeveloperMode } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Tilt from "react-parallax-tilt";

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="tech" ref={ref} className="tech-container">
      <h1
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="tech-info"
      >
        These are the <span className="name">technologies</span> that I
        currently know.!
      </h1>
      <div className="tech-ball flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div className="tech-line"></div>
      <div className="card-container">
        <div className="services-cont">
          <h2 className="services">Services</h2>
          <div className="tech-line-2"></div>
        </div>
        <div className="inner-card-container">
          <Tilt className="parallax-effect card" perspective={500}>
            <div className="inner-element card-tilt">
              <MdDeveloperMode className="card-icon" />
              <h3> Web Development </h3>
              <p>
                I develop web apps using HTML, CSS, JavaScript and ReactJS.{" "}
              </p>
            </div>
          </Tilt>
          <Tilt className="parallax-effect card" perspective={500}>
            <div className="inner-element card-tilt">
              <HiOutlineDesktopComputer className="card-icon" />
              <h3> Design to HTML </h3>
              <p>
                I convert existing designs into pixel-perfect HTML/CSS websites.{" "}
              </p>
            </div>
          </Tilt>
        </div>
      </div>
      <div className="services-line"></div>
    </div>
  );
};

export default Tech;
