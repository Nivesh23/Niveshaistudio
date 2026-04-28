'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 9h8M8 13h4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI Chatbots & Customer Support',
    description: 'Intelligent conversational AI that handles customer queries 24/7, reduces response times by 90%, and delivers personalized experiences at scale.',
    useCases: ['E-commerce support', 'Lead qualification', 'FAQ automation', 'Multilingual support'],
    benefits: ['90% faster response', '60% cost reduction', '24/7 availability'],
    color: '#00d4ff',
    gradient: 'from-[#00d4ff] to-[#0891b2]',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M9 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'NLP Solutions',
    description: 'Advanced Natural Language Processing for sentiment analysis, text classification, entity extraction, and language understanding that unlocks insights from unstructured data.',
    useCases: ['Sentiment analysis', 'Document processing', 'Content moderation', 'Text summarization'],
    benefits: ['85% accuracy boost', 'Real-time processing', 'Multi-language'],
    color: '#8b5cf6',
    gradient: 'from-[#8b5cf6] to-[#7c3aed]',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Computer Vision Systems',
    description: 'State-of-the-art image recognition, object detection, and visual inspection systems powered by deep learning for quality control and automation.',
    useCases: ['Quality inspection', 'Face recognition', 'Medical imaging', 'Object detection'],
    benefits: ['99.5% detection rate', 'Real-time analysis', 'Edge deployment'],
    color: '#ec4899',
    gradient: 'from-[#ec4899] to-[#db2777]',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI-Based Marketing Tools',
    description: 'Data-driven marketing intelligence that predicts customer behavior, optimizes campaigns, and maximizes ROI through machine learning algorithms.',
    useCases: ['Customer segmentation', 'Campaign optimization', 'Churn prediction', 'Personalization'],
    benefits: ['3x ROI increase', 'Smart targeting', 'Automated A/B testing'],
    color: '#10b981',
    gradient: 'from-[#10b981] to-[#059669]',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Data Analytics & Predictive Modeling',
    description: 'Transform raw data into actionable intelligence. Our predictive models forecast trends, detect anomalies, and drive strategic decision-making.',
    useCases: ['Sales forecasting', 'Risk assessment', 'Demand planning', 'Anomaly detection'],
    benefits: ['40% better forecasts', 'Data-driven decisions', 'Real-time dashboards'],
    color: '#f59e0b',
    gradient: 'from-[#f59e0b] to-[#d97706]',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4" strokeLinecap="round"/>
        <path d="M7 8l3 3-3 3M12 14h5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Custom AI SaaS Solutions',
    description: 'End-to-end custom SaaS platforms powered by AI. From architecture to deployment, we build scalable cloud-native applications tailored to your business.',
    useCases: ['Custom dashboards', 'Workflow automation', 'API integrations', 'White-label solutions'],
    benefits: ['Scalable architecture', 'Cloud-native', 'Enterprise-grade'],
    color: '#06b6d4',
    gradient: 'from-[#06b6d4] to-[#0891b2]',
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#00d4ff]/3 blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/3 blur-[150px]" />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#8b5cf6] mb-4 glass border border-[#8b5cf6]/20">
            Our Services
          </span>
          <h2 className="section-title">
            AI Solutions That
            <br />
            <span className="gradient-text-secondary">Drive Results</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            We deliver cutting-edge AI services that transform how businesses operate,
            engage customers, and make decisions.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <motion.div
                onHoverStart={() => setActiveService(i)}
                onHoverEnd={() => setActiveService(null)}
                className={`relative glass rounded-2xl p-7 h-full transition-all duration-500 cursor-default overflow-hidden ${
                  activeService === i ? 'neon-glow-strong border-[#00d4ff]/30' : ''
                }`}
                whileHover={{ y: -8 }}
              >
                {/* Gradient accent top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: service.color }}
                />

                {/* Separate icon in transparent box */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 border"
                  style={{
                    backgroundColor: `${service.color}08`,
                    borderColor: `${service.color}25`,
                    color: service.color,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Outfit' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Use cases */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Use Cases</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-slate-400"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold"
                      style={{ color: service.color }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {b}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={activeService === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  className="absolute bottom-6 right-6"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}20`, color: service.color }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
