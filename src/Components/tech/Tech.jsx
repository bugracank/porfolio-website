import React from "react";

import BallCanvas from "./ball";
import technologies from "../../constants";
import "./tech.css";

const Tech = () => {
  return (
    <>
      <p className="tech-info">
        These are the technologies that I currently know.
      </p>
      <div className="tech-ball flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tech;
