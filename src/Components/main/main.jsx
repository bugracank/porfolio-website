import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Computer from "../Computer";
import "./main.css";

const main = () => {
  return (
    <div className="main-container">
      <div className="container mx-auto">
        <div className="innerContainer">
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
            <Computer rotation={[-0.01, -0.2, -0.1]} position={[0, -1, 0]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default main;
