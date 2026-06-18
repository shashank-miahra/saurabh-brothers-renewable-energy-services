/* eslint-disable */
"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, MeshDistortMaterial as Distort } from "@react-three/drei";
import * as THREE from "three";

export default function SolarCore() {
  const meshRef = useRef();
  const innerRef = useRef();

  // Procedural geometry for the "Energy Core"
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 0.4;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.z = time * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -time * 0.5;
    }
  });

  return (
    <group>
      {/* Outer Protective "Atmosphere" */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#FFFFFF"
            roughness={0.05}
            metalness={0.2}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </Sphere>
      </Float>

      {/* The Internal Energy Particles */}
      <points ref={innerRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#D1603D"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Central Core Light */}
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial
          color="#D1603D"
          emissive="#D1603D"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </Sphere>

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#D1603D" />
    </group>
  );
}
