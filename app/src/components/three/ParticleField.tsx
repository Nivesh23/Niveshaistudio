'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  spread?: number;
  size?: number;
  color?: string;
  speed?: number;
}

export default function ParticleField({
  count = 2000,
  spread = 25,
  size = 0.02,
  color = '#00d4ff',
  speed = 0.3,
}: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
      vel[i * 3] = (Math.random() - 0.5) * speed * 0.01;
      vel[i * 3 + 1] = (Math.random() - 0.5) * speed * 0.01;
      vel[i * 3 + 2] = (Math.random() - 0.5) * speed * 0.01;
    }
    return [pos, vel];
  }, [count, spread, speed]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      s[i] = Math.random() * size + size * 0.5;
    }
    return s;
  }, [count, size]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const geometry = meshRef.current.geometry;
    const posAttr = geometry.getAttribute('position');
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      posAttr.array[ix] += velocities[ix] + Math.sin(time * 0.5 + i) * 0.001;
      posAttr.array[ix + 1] += velocities[ix + 1] + Math.cos(time * 0.3 + i) * 0.001;
      posAttr.array[ix + 2] += velocities[ix + 2];

      // Wrap around
      if (Math.abs(posAttr.array[ix]) > spread / 2) posAttr.array[ix] *= -0.9;
      if (Math.abs(posAttr.array[ix + 1]) > spread / 2) posAttr.array[ix + 1] *= -0.9;
      if (Math.abs(posAttr.array[ix + 2]) > spread / 2) posAttr.array[ix + 2] *= -0.9;
    }
    posAttr.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
