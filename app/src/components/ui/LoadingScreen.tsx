'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712]"
        >
          {/* Background subtle grid */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />

          {/* Center glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#00d4ff]/5 blur-[100px]" />

          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mb-8"
          >
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 28 28"
              fill="none"
              animate={{ rotateY: [0, 360] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            >
              <path d="M14 2L2 8L14 14L26 8L14 2Z" stroke="url(#load-grad)" strokeWidth="1" fill="none"/>
              <path d="M2 20L14 26L26 20" stroke="url(#load-grad)" strokeWidth="1" fill="none"/>
              <path d="M2 14L14 20L26 14" stroke="url(#load-grad)" strokeWidth="1" fill="none"/>
              <circle cx="14" cy="14" r="3" fill="url(#load-grad)" opacity="0.6"/>
              <defs>
                <linearGradient id="load-grad" x1="2" y1="2" x2="26" y2="26">
                  <stop offset="0%" stopColor="#00d4ff"/>
                  <stop offset="100%" stopColor="#8b5cf6"/>
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-10"
          >
            <h1 className="text-2xl font-bold gradient-text tracking-tight" style={{ fontFamily: 'Outfit' }}>
              Nivesh AI Solutions
            </h1>
            <p className="text-xs text-slate-600 mt-1 tracking-[0.3em] uppercase">
              Initializing Experience
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="relative"
          >
            <div className="w-[200px] h-[2px] rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-[10px] text-slate-600 text-center mt-3 tabular-nums">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
