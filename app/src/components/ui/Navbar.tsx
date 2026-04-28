'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('home');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Detect active section on home page
      if (pathname === '/') {
        const sections = navLinks.filter(l => l.href.includes('#')).map(l => l.href.split('#')[1]);
        for (const section of sections.reverse()) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200) {
              setActiveHash(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      if (pathname === '/') {
        const el = document.querySelector(href.replace('/', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'py-3'
            : 'py-5'
        }`}
      >
        <div className="w-full max-w-full px-4 md:px-8 xl:px-12 transition-all duration-500">
          <div className={`flex items-center rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            isScrolled
              ? 'glass-strong neon-glow'
              : ''
          }`}>
            {/* Logo — left */}
            <motion.a
              href="/#home"
              onClick={(e) => handleNavClick('/#home', e)}
              className="flex items-center gap-3 group cursor-pointer shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#38bdf8] to-[#818cf8] opacity-20 group-hover:opacity-40 transition-opacity" />
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L2 8L14 14L26 8L14 2Z" stroke="url(#logo-grad)" strokeWidth="1.5" fill="none"/>
                  <path d="M2 20L14 26L26 20" stroke="url(#logo-grad)" strokeWidth="1.5" fill="none"/>
                  <path d="M2 14L14 20L26 14" stroke="url(#logo-grad)" strokeWidth="1.5" fill="none"/>
                  <circle cx="14" cy="14" r="3" fill="url(#logo-grad)" opacity="0.6"/>
                  <defs>
                    <linearGradient id="logo-grad" x1="2" y1="2" x2="26" y2="26">
                      <stop offset="0%" stopColor="#38bdf8"/>
                      <stop offset="100%" stopColor="#818cf8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight gradient-text" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Nivesh AI
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 -mt-0.5">
                  Solutions
                </span>
              </div>
            </motion.a>

            {/* Desktop Links — centered, each in transparent box */}
            <div className="hidden lg:flex items-center gap-5 flex-1 justify-center">
              {navLinks.map((link) => {
                const isHashActive = pathname === '/' && link.href.includes('#') && activeHash === link.href.split('#')[1];
                const isRouteActive = pathname === link.href;
                const isActive = isHashActive || isRouteActive;
                
                // Specific styling requested for the /industries active state
                const isIndustriesPage = pathname === '/industries' && link.href === '/industries';

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`relative px-6 py-2.5 text-base font-semibold tracking-wide rounded-xl transition-all duration-300 cursor-pointer ${
                      isActive ? 'text-white' : 'text-zinc-300 hover:text-white'
                    }`}
                    style={isIndustriesPage ? {
                        background: 'transparent',
                        border: '1px solid transparent',
                        color: '#D4AF37'
                    } : {
                      background: isActive ? 'rgba(56, 189, 248, 0.14)' : 'rgba(255, 255, 255, 0.08)',
                      border: isActive ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(255, 255, 255, 0.18)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      boxShadow: isActive ? 'inset 0 1px 0 rgba(56, 189, 248, 0.1), 0 0 12px rgba(56, 189, 248, 0.06)' : 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
                    }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isActive && !isIndustriesPage && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: 'rgba(56, 189, 248, 0.06)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                        }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {isIndustriesPage && (
                      <motion.div
                        layoutId="activeNavGold"
                        className="absolute left-6 right-6 bottom-1 h-[2px]"
                        style={{ backgroundColor: '#D4AF37' }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* CTA — extreme right */}
            <div className="flex items-center gap-4 shrink-0 ml-auto lg:ml-0">
              <motion.a
                href="/#contact"
                onClick={(e) => handleNavClick('/#contact', e)}
                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-xl cursor-pointer transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                }}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-0.5 bg-white rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-white rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] pt-24 px-6 lg:hidden"
          >
            <div className="glass-strong rounded-2xl p-6 neon-glow">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isHashActive = pathname === '/' && link.href.includes('#') && activeHash === link.href.split('#')[1];
                  const isRouteActive = pathname === link.href;
                  const isActive = isHashActive || isRouteActive;
                  
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(link.href, e)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`px-4 py-3 text-lg font-medium rounded-xl transition-colors cursor-pointer ${
                        isActive
                          ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>
              <motion.a
                href="/#contact"
                onClick={(e) => handleNavClick('/#contact', e)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 block text-center px-5 py-3 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] cursor-pointer"
              >
                Get Started →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
