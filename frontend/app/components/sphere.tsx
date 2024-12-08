import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from 'three';

export default function Sphere() {
  const mesh = useRef<Mesh>();

  useFrame((state, delta) => {
    // Speed up sphere rotation
    mesh.current!.rotation.x += delta * 0.5; // Using non-null assertion
    mesh.current!.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial />
    </mesh>
  );
}
