'use client';

import { useRef, useState } from 'react';

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="video-bg-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          filter: isHovered
            ? 'brightness(0.45) saturate(1.4) contrast(1.1)'
            : 'brightness(0.25) saturate(1.2) contrast(1.05)',
          transition: 'filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <source src="/hover.mp4" type="video/mp4" />
      </video>

      {/* Primary dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, 
              rgba(3, 7, 18, 0.55) 0%, 
              rgba(3, 7, 18, 0.35) 25%,
              rgba(3, 7, 18, 0.3) 50%, 
              rgba(3, 7, 18, 0.5) 75%,
              rgba(3, 7, 18, 0.95) 100%
            )
          `,
        }}
      />

      {/* Neon color accent overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 25% 40%, rgba(0, 212, 255, 0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 35%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 45%)
          `,
        }}
      />
    </div>
  );
}
