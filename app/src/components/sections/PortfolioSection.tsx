'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Neural Commerce Engine',
    category: 'AI / E-Commerce',
    description: 'AI-powered recommendation engine processing 10M+ user interactions daily, increasing conversion rates by 38% for a major e-commerce platform.',
    tags: ['TensorFlow', 'Python', 'AWS', 'React'],
    color: '#00d4ff',
    metrics: [
      { label: 'Conversions', value: '+38%' },
      { label: 'Users', value: '10M+' },
    ],
    image: '🛒',
  },
  {
    title: 'MediScan AI',
    category: 'Healthcare / Computer Vision',
    description: 'Deep learning-based medical imaging analysis system achieving 97.3% accuracy in early-stage anomaly detection across X-ray and MRI scans.',
    tags: ['PyTorch', 'OpenCV', 'Docker', 'FastAPI'],
    color: '#8b5cf6',
    metrics: [
      { label: 'Accuracy', value: '97.3%' },
      { label: 'Scans/day', value: '50K' },
    ],
    image: '🏥',
  },
  {
    title: 'SentiPulse',
    category: 'NLP / Analytics',
    description: 'Real-time social media sentiment analysis dashboard processing 500K+ posts per hour, delivering instant brand perception insights.',
    tags: ['BERT', 'Node.js', 'D3.js', 'Redis'],
    color: '#ec4899',
    metrics: [
      { label: 'Posts/hour', value: '500K+' },
      { label: 'Languages', value: '12' },
    ],
    image: '📊',
  },
  {
    title: 'AutoFlow RPA',
    category: 'Automation / Enterprise',
    description: 'Intelligent process automation suite that reduced manual data entry by 85% for a fortune-500 company, saving 10,000+ hours annually.',
    tags: ['RPA', 'Python', 'Selenium', 'GPT-4'],
    color: '#10b981',
    metrics: [
      { label: 'Time saved', value: '10K hrs' },
      { label: 'Automation', value: '85%' },
    ],
    image: '⚙️',
  },
  {
    title: 'VoiceAI Assistant',
    category: 'Conversational AI',
    description: 'Multilingual voice-enabled AI assistant for banking sector, handling 100K+ customer calls monthly with 94% resolution rate.',
    tags: ['Whisper', 'LangChain', 'Next.js', 'Twilio'],
    color: '#f59e0b',
    metrics: [
      { label: 'Calls/month', value: '100K+' },
      { label: 'Resolution', value: '94%' },
    ],
    image: '🎙️',
  },
  {
    title: '3D Data Cosmos',
    category: 'Visualization / WebGL',
    description: 'Immersive 3D data visualization platform that transforms complex datasets into interactive, explorable 3D environments in the browser.',
    tags: ['Three.js', 'React', 'WebGL', 'D3.js'],
    color: '#06b6d4',
    metrics: [
      { label: 'Render', value: '60fps' },
      { label: 'Data points', value: '1M+' },
    ],
    image: '🌐',
  },
];

export default function PortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#ec4899]/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#ec4899]/3 blur-[160px]" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#ec4899] mb-4 glass border border-[#ec4899]/20">
            Portfolio
          </span>
          <h2 className="section-title">
            Projects That
            <br />
            <span className="gradient-text-secondary">Speak for Themselves</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            A showcase of AI-powered solutions that delivered real impact and measurable results.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onHoverStart={() => setHoveredProject(i)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group"
            >
              <motion.div
                className="relative glass rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 cursor-default"
                whileHover={{ y: -10 }}
                style={{
                  boxShadow: hoveredProject === i
                    ? `0 20px 60px ${project.color}15, 0 0 40px ${project.color}10`
                    : 'none'
                }}
              >
                {/* Project visual header */}
                <div
                  className="relative h-48 flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${project.color}08, ${project.color}15)` }}
                >
                  {/* Animated grid */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(${project.color}15 1px, transparent 1px),
                        linear-gradient(90deg, ${project.color}15 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px',
                    }} />
                  </div>

                  {/* Animated circle */}
                  <motion.div
                    className="absolute w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: project.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  />

                  {/* Emoji icon */}
                  <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-lg text-[11px] font-semibold glass" style={{ color: project.color }}>
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Outfit' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-4 mb-5">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex-1">
                        <div className="text-xl font-bold" style={{ color: project.color, fontFamily: 'Outfit' }}>
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient accent bottom */}
                <div
                  className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}00)` }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
