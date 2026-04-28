'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  const { nodePositions, linePositions, nodeColors } = useMemo(() => {
    const nodeCount = 60;
    const nodes: THREE.Vector3[] = [];
    const colors: number[] = [];
    const lines: number[] = [];

    // Create neural network-like node positions in layers
    const layers = 5;
    const nodesPerLayer = Math.ceil(nodeCount / layers);
    
    for (let layer = 0; layer < layers; layer++) {
      for (let n = 0; n < nodesPerLayer; n++) {
        const angle = (n / nodesPerLayer) * Math.PI * 2;
        const radius = 2 + Math.random() * 1.5;
        const x = (layer - layers / 2) * 2.5;
        const y = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        nodes.push(new THREE.Vector3(x, y, z));
        
        // Color based on position - neon gradient
        const t = layer / layers;
        colors.push(
          0 + t * 0.55,   // R: 0 to 0.55
          0.83 - t * 0.5,  // G: 0.83 to 0.33
          1                 // B: 1
        );
      }
    }

    // Connect nodes within proximity
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 4.5 && Math.random() > 0.5) {
          lines.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
        }
      }
    }

    const nodePos = new Float32Array(nodes.flatMap(n => [n.x, n.y, n.z]));
    const nodeCol = new Float32Array(colors);
    const linePos = new Float32Array(lines);

    return { nodePositions: nodePos, linePositions: linePos, nodeColors: nodeCol };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = time * 0.1;
    groupRef.current.rotation.x = Math.sin(time * 0.15) * 0.15;
    
    // Pulsing effect on lines
    if (lineRef.current) {
      const mat = lineRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.15 + Math.sin(time * 2) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Neural network nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodePositions.length / 3}
            array={nodePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={nodeColors.length / 3}
            array={nodeColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Neural network connections */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
