import React from "react";
import { useGLTF } from "@react-three/drei";

export const ComputerModel = () => {
  const computer = useGLTF(
    // "./mcfarlanes_dragons__eternal_clan_wo_wings/scene.gltf"
    "./fantasy_nordic_axe/scene.gltf"
  );

  return (
    <mesh>
      <hemisphereLight intensity={0} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.3}
        position={[0, -3.25, -1.5]}
      />
    </mesh>
  );
};
