import React from "react";
import { useRef } from "react";
import BallCanvas from "./ball";
import technologies from "../../constants";
import "./tech.css";
import { useInView } from "framer-motion";

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
    </div>
  );
};

export default Tech;
