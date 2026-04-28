'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100dvh' }}
    >
      {/* ── Video Background ────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.3) saturate(1.15) contrast(1.05)',
          }}
        >
          <source src="/hover2.mp4" type="video/mp4" />
        </video>

        {/* ── Inward Masking Gradient (all 4 edges) ──── */}
        {/* Bottom → heavy fade into site bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to top,
              #0a0a0f 0%,
              #0a0a0f 4%,
              rgba(10, 10, 15, 0.85) 12%,
              rgba(10, 10, 15, 0.4) 35%,
              transparent 55%
            )`,
          }}
        />
        {/* Top edge  */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to bottom,
              #0a0a0f 0%,
              rgba(10, 10, 15, 0.7) 8%,
              transparent 30%
            )`,
          }}
        />
        {/* Left edge  */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to right,
              #0a0a0f 0%,
              rgba(10, 10, 15, 0.6) 6%,
              transparent 25%
            )`,
          }}
        />
        {/* Right edge  */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to left,
              #0a0a0f 0%,
              rgba(10, 10, 15, 0.6) 6%,
              transparent 25%
            )`,
          }}
        />

        {/* Subtle radial vignette for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              ellipse 80% 70% at 50% 50%,
              transparent 40%,
              rgba(10, 10, 15, 0.5) 100%
            )`,
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────── */}
      <div className="relative z-[2] text-center px-6 max-w-4xl mx-auto py-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, type: 'spring', stiffness: 100, damping: 20 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm text-zinc-300 font-medium tracking-wide">
            AI-Powered Solutions
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 80, damping: 20 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-7"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          <span className="block text-white/95">We Build</span>
          <span
            className="block mt-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #38bdf8, #818cf8)',
            }}
          >
            Intelligent
          </span>
          <span className="block text-white/95 mt-2">Digital Futures</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, type: 'spring', stiffness: 100, damping: 20 }}
          className="text-base md:text-lg text-zinc-400 max-w-[58ch] mx-auto mb-12 leading-relaxed"
        >
          Transforming businesses through cutting-edge AI, immersive 3D experiences,
          and intelligent automation that drives growth at scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, type: 'spring', stiffness: 100, damping: 20 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-2xl overflow-hidden cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollTo('#portfolio')}
            className="px-8 py-4 text-sm font-semibold text-zinc-300 rounded-2xl cursor-pointer transition-colors duration-300 hover:text-white"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Shipped' },
            { value: '30+', label: 'Happy Clients' },
            { value: '99%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.08, type: 'spring', stiffness: 100, damping: 20 }}
              className="text-center"
            >
              <div
                className="text-2xl md:text-3xl font-bold text-white/90 tabular-nums"
                style={{ fontFamily: 'Outfit' }}
              >
                {stat.value}
              </div>
              <div className="text-[11px] text-zinc-500 mt-1.5 tracking-wider uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-zinc-500 tracking-[0.25em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full p-1"
          style={{ border: '1.5px solid rgba(255,255,255,0.12)' }}
        >
          <div className="w-1 h-1 rounded-full bg-zinc-400 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
