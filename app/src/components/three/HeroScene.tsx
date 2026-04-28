'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleField from './ParticleField';
import NeuralNetwork from './NeuralNetwork';
import FloatingOrb from './FloatingOrb';

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Ambient light */}
          <ambientLight intensity={0.15} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8b5cf6" />
          <pointLight position={[0, 5, -10]} intensity={0.2} color="#ec4899" />
          
          {/* Neural network centerpiece */}
          <NeuralNetwork />
          
          {/* Floating orbs */}
          <FloatingOrb position={[-5, 3, -3]} color="#00d4ff" scale={0.8} />
          <FloatingOrb position={[5, -2, -4]} color="#8b5cf6" scale={0.6} />
          <FloatingOrb position={[-3, -3, -2]} color="#ec4899" scale={0.5} />
          <FloatingOrb position={[4, 4, -5]} color="#06b6d4" scale={0.7} />
          
          {/* Background particles */}
          <ParticleField count={1500} spread={30} size={0.015} color="#00d4ff" speed={0.2} />
          <ParticleField count={500} spread={20} size={0.02} color="#8b5cf6" speed={0.15} />
        </Suspense>
      </Canvas>
    </div>
  );
}
