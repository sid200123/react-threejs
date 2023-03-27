import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const ComputersCanvas = ({ children }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [-2.8, 1.5, -5.5], fov: 50 }}
      // camera={{ position: [0.2, 0.1, 1.3], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          dampingFactor={0.9}
        />
        <Stage contactShadow={{ resolution: 1024, scale: 1000 }}>
          {children}
        </Stage>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
