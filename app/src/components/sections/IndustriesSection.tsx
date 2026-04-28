'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const industries = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: 'Revolutionizing patient care with AI-powered diagnostics, drug discovery acceleration, and predictive health analytics.',
    solutions: [
      'AI-assisted diagnosis & medical imaging analysis',
      'Predictive patient outcome modeling',
      'Drug interaction detection systems',
      'Automated medical record processing',
    ],
    stat: '35%',
    statLabel: 'Faster diagnostics',
    color: '#00d4ff',
    bgGradient: 'from-[#00d4ff]/10 to-[#0891b2]/5',
  },
  {
    id: 'education',
    title: 'Education',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: 'Personalized learning experiences powered by adaptive AI, intelligent tutoring systems, and automated assessment tools.',
    solutions: [
      'Adaptive learning platforms',
      'AI-powered tutoring & mentoring',
      'Automated grading & feedback systems',
      'Student performance prediction',
    ],
    stat: '50%',
    statLabel: 'Better engagement',
    color: '#8b5cf6',
    bgGradient: 'from-[#8b5cf6]/10 to-[#7c3aed]/5',
  },
  {
    id: 'finance',
    title: 'Finance',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: 'Intelligent financial systems for fraud detection, algorithmic trading, risk management, and customer experience optimization.',
    solutions: [
      'Real-time fraud detection & prevention',
      'Algorithmic trading strategies',
      'Credit scoring with ML models',
      'Regulatory compliance automation',
    ],
    stat: '99%',
    statLabel: 'Fraud detection',
    color: '#10b981',
    bgGradient: 'from-[#10b981]/10 to-[#059669]/5',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: 'Smart recommendation engines, dynamic pricing, inventory optimization, and conversational commerce solutions.',
    solutions: [
      'Personalized product recommendations',
      'Dynamic pricing optimization',
      'Visual search & product discovery',
      'Inventory demand forecasting',
    ],
    stat: '45%',
    statLabel: 'Revenue increase',
    color: '#ec4899',
    bgGradient: 'from-[#ec4899]/10 to-[#db2777]/5',
  },
  {
    id: 'government',
    title: 'Government & Public Sector',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M3 10h18M12 3l9 7H3l9-7z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 10v11M9 10v11M15 10v11M19 10v11" strokeLinecap="round"/>
      </svg>
    ),
    description: 'AI-driven solutions for smart cities, public safety, citizen services, and efficient governance through data intelligence.',
    solutions: [
      'Smart city infrastructure management',
      'Citizen service automation',
      'Public safety & surveillance AI',
      'Policy impact prediction models',
    ],
    stat: '60%',
    statLabel: 'Efficiency gains',
    color: '#f59e0b',
    bgGradient: 'from-[#f59e0b]/10 to-[#d97706]/5',
  },
];

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const active = industries[activeIndustry];

  return (
    <section id="industries" className="relative py-32 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] rounded-full bg-[#8b5cf6]/3 blur-[180px]" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#10b981] mb-4 glass border border-[#10b981]/20">
            Industries
          </span>
          <h2 className="section-title">
            AI Across
            <br />
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Tailored AI solutions designed for the unique challenges of each sector.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Industry tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide"
          >
            {industries.map((ind, i) => (
              <motion.button
                key={ind.id}
                onClick={() => setActiveIndustry(i)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 cursor-pointer whitespace-nowrap lg:whitespace-normal min-w-max lg:min-w-0 ${
                  activeIndustry === i
                    ? 'glass-strong neon-glow border-[#00d4ff]/30'
                    : 'hover:bg-white/5'
                }`}
                whileHover={{ x: activeIndustry === i ? 0 : 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 border ${
                    activeIndustry === i ? '' : 'border-white/5'
                  }`}
                  style={{
                    color: ind.color,
                    backgroundColor: `${ind.color}08`,
                    borderColor: activeIndustry === i ? `${ind.color}40` : undefined,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {ind.icon.props.children}
                  </svg>
                </div>
                <span className={`font-semibold text-sm transition-colors ${
                  activeIndustry === i ? 'text-white' : 'text-slate-400'
                }`}>
                  {ind.title}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Active industry detail */}
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Background glow */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-10"
              style={{ backgroundColor: active.color }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div
                    className="w-18 h-18 rounded-2xl flex items-center justify-center mb-4 border"
                    style={{
                      backgroundColor: `${active.color}08`,
                      borderColor: `${active.color}25`,
                      color: active.color,
                      width: '72px',
                      height: '72px',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {active.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Outfit' }}>
                    {active.title}
                  </h3>
                </div>
                {/* stat badge */}
                <div className="text-right">
                  <div className="text-3xl font-black" style={{ color: active.color, fontFamily: 'Outfit' }}>
                    {active.stat}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{active.statLabel}</div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8">
                {active.description}
              </p>

              {/* Solutions list */}
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Key Solutions
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {active.solutions.map((sol, i) => (
                    <motion.div
                      key={sol}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/3 hover:bg-white/5 transition-colors"
                    >
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: active.color }}
                      />
                      <span className="text-sm text-slate-300">{sol}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.button
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${active.color}, ${active.color}cc)` }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore {active.title} Solutions
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
