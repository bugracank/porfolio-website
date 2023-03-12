import React, { useState, useEffect } from "react";
import "./scroll.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      !isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <div>
      {isVisible && (
        <div className="scroll rotate-center">
          <BsFillArrowUpCircleFill
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Scroll;
