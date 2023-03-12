import React from "react";

import BallCanvas from "./ball";
import technologies from "../../constants";
import "./tech.css";

const Tech = () => {
  return (
    <div className="tech-container">
      <h1 className="tech-info">
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
