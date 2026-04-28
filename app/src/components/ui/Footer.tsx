'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  Services: ['AI Chatbots', 'NLP Solutions', 'Computer Vision', 'Predictive Analytics', 'Custom AI SaaS'],
  Industries: ['Healthcare', 'Education', 'Finance', 'E-Commerce', 'Government'],
  Company: ['About', 'Portfolio', 'Contact', 'Privacy Policy'],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#00d4ff]/3 blur-[120px]" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] opacity-20" />
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L2 8L14 14L26 8L14 2Z" stroke="url(#footer-grad)" strokeWidth="1.5" fill="none"/>
                  <path d="M2 20L14 26L26 20" stroke="url(#footer-grad)" strokeWidth="1.5" fill="none"/>
                  <path d="M2 14L14 20L26 14" stroke="url(#footer-grad)" strokeWidth="1.5" fill="none"/>
                  <circle cx="14" cy="14" r="3" fill="url(#footer-grad)" opacity="0.6"/>
                  <defs>
                    <linearGradient id="footer-grad" x1="2" y1="2" x2="26" y2="26">
                      <stop offset="0%" stopColor="#00d4ff"/>
                      <stop offset="100%" stopColor="#8b5cf6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold gradient-text" style={{ fontFamily: 'Outfit' }}>Nivesh AI</span>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-slate-500 -mt-0.5">Solutions</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Transforming businesses through cutting-edge AI solutions, immersive 3D experiences, and intelligent automation.
            </p>
            {/* Social icons placeholder */}
            <div className="flex gap-3">
              {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all"
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider" style={{ fontFamily: 'Outfit' }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        const sectionMap: Record<string, string> = {
                          About: '#about',
                          Portfolio: '#portfolio',
                          Contact: '#contact',
                        };
                        if (sectionMap[link]) scrollTo(sectionMap[link]);
                      }}
                      whileHover={{ x: 4 }}
                      className="text-sm text-slate-500 hover:text-[#00d4ff] transition-colors cursor-pointer inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Nivesh AI Solutions. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Crafted with <span className="text-[#ec4899]">♥</span> in New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
}
