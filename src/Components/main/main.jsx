import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Computer from "../Computer";
import "./main.css";

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div id="/" className="main-container">
      <div className="container mx-auto">
        <div className="innerContainer">
          <div className="line">
            <div className="line-head"></div>
            <div className="line-vertical"></div>
          </div>
          <p className=" info">
            <span className="greet">
              Hi I'm <span className="name">Buğracan</span>
            </span>{" "}
            <br /> and I am a front-end developer creating visually stunning and
            user-friendly websites.
          </p>
          <Canvas
            className="canvas"
            camera={{ position: [1, 7, 7], fov: 15 }}
            style={{
              marginTop: "-12rem",
              marginRight: "2rem",
              width: "100%",
              height: "88vh",
              zIndex: "100",
            }}
          >
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <spotLight
              position={[-20, 50, 10]}
              angle={0.12}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={1024}
            />
            <ambientLight />
            <pointLight intensity={1} position={[10, 10, 10]} />
            <Computer
              isMobile={isMobile}
              rotation={[0.05, -1.9, -0.01]}
              position={isMobile ? [0, -0.2, 0] : [0, -1, 0]}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Main;
