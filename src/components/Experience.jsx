import React from 'react';
import {  useRef } from "react";
import { OrbitControls, AccumulativeShadows, RandomizedLight } from "@react-three/drei";

import Wassies from "./Wassies.jsx";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight color={"rgb(255, 255, 252)"} intensity={1}/>
      <directionalLight position={[-4, 4, 6]} shadow-mapSize={1024} castShadow intensity={1} />
      <group position={[0.5, -1.25, 0]}>
      <Wassies position={[0, 0, 0]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.1} />
        </mesh>
        <planeGeometry attach="geometry" />
      </group>

    </>
  );
};

export default Experience;