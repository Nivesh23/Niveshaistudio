'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Artificial Intelligence', level: 95, color: '#00d4ff' },
  { name: 'Web Development', level: 90, color: '#8b5cf6' },
  { name: 'Machine Learning', level: 92, color: '#06b6d4' },
  { name: '3D & Interactive Design', level: 88, color: '#ec4899' },
  { name: 'Automation Systems', level: 91, color: '#10b981' },
];

const highlights = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Full-Stack Architecture',
    desc: 'End-to-end development from backend infrastructure to stunning frontends',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI Innovation',
    desc: 'Cutting-edge AI models and intelligent systems that transform businesses',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '3D Experiences',
    desc: 'Immersive WebGL and Three.js-powered digital experiences',
  },
];

export default function AboutSection() {
  const ref = useRef(null);

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[#8b5cf6]/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#00d4ff]/5 blur-[120px]" />

      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#00d4ff] mb-4 glass border border-[#00d4ff]/20">
            About Me
          </span>
          <h2 className="section-title">
            Crafting <span className="gradient-text">Intelligence</span>
            <br />Into Every Pixel
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 neon-glow mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center text-2xl font-bold" style={{ fontFamily: 'Outfit' }}>
                  N
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Outfit' }}>Nivesh</h3>
                  <p className="text-sm text-[#00d4ff]">AI Solutions Architect</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-[15px]">
                My name is Nivesh. I have 5 years of experience in AI, web development, and building
                intelligent digital solutions. I specialize in creating AI-powered applications,
                automation systems, and interactive 3D web experiences that help businesses grow and
                scale efficiently.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Python', 'React', 'Next.js', 'Three.js', 'TensorFlow', 'Node.js', 'AWS', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
                whileHover={{ x: 8, scale: 1.01 }}
                className="glass rounded-2xl p-6 group cursor-default hover:border-[#00d4ff]/30 transition-all duration-300"
              >
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#00d4ff] group-hover:text-white group-hover:from-[#00d4ff] group-hover:to-[#8b5cf6] transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Outfit' }}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Experience timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="glass rounded-2xl p-6 mt-6"
            >
              <h4 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'Outfit' }}>
                Journey So Far
              </h4>
              <div className="space-y-4">
                {[
                  { year: '2021 — Present', role: 'AI Solutions Architect', detail: 'Leading AI projects for global clients' },
                  { year: '2019 — 2021', role: 'Full-Stack Developer', detail: 'Building scalable web applications' },
                  { year: '2018 — 2019', role: 'ML Engineer', detail: 'Research & development in machine learning' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]" />
                      {i < 2 && <div className="w-px h-full bg-gradient-to-b from-[#00d4ff]/40 to-transparent" />}
                    </div>
                    <div className="pb-4">
                      <span className="text-xs text-[#00d4ff] font-medium">{item.year}</span>
                      <h5 className="text-sm font-semibold text-white">{item.role}</h5>
                      <p className="text-xs text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
