'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingOrb({ position = [0, 0, 0], color = '#8b5cf6', scale = 1 }: {
  position?: [number, number, number];
  color?: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.8 + position[0]) * 0.5;
    meshRef.current.position.x = position[0] + Math.cos(time * 0.6) * 0.2;
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.z = time * 0.2;

    if (glowRef.current) {
      glowRef.current.position.copy(meshRef.current.position);
      const s = 1 + Math.sin(time * 2) * 0.1;
      glowRef.current.scale.setScalar(s * scale * 2.5);
    }
  });

  return (
    <group>
      {/* Glow sphere */}
      <mesh ref={glowRef} position={position}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      
      {/* Main orb */}
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[0.4, 2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </group>
  );
}
