'use client';

import { motion } from 'framer-motion';

const niches = [
  {
    id: 1,
    title: "Local Business Websites",
    description: "Elevating local footprints through SEO optimized, conversion-ready web properties designed to drive foot traffic."
  },
  {
    id: 2,
    title: "SaaS / Micro-Tools",
    description: "Clean, scalable architectures built for software as a service, maximizing user retention and streamline onboarding.",
    video: "/Dashboard.mp4"
  },
  {
    id: 3,
    title: "AI-Powered Tools",
    description: "Intelligent interfaces equipped with machine learning integrations and proactive user engagement loops.",
    video: "/ai powered tool.mp4"
  },
  {
    id: 4,
    title: "E-commerce Stores",
    description: "High-performance storefronts blending beautiful product storytelling with frictionless checkout experiences."
  },
  {
    id: 5,
    title: "Education / Online Courses",
    description: "Immersive learning management systems focusing on student success, tracking, and content delivery."
  },
  {
    id: 6,
    title: "Real Estate",
    description: "Cinematic property showcases, virtual tours, and hyper-local search platforms for agencies and developers."
  },
  {
    id: 7,
    title: "Healthcare & Clinics",
    description: "HIPAA-compliant patient portals and accessible interfaces establishing trust and streamlining appointments."
  },
  {
    id: 8,
    title: "Legal / Law Firms",
    description: "Authoritative, professional digital presence focusing on partner prestige and secure client acquisition."
  },
  {
    id: 9,
    title: "Weddings & Events",
    description: "Emotionally resonant, highly visual web experiences capturing the magic of grand venues and intimate celebrations."
  },
  {
    id: 10,
    title: "Restaurants & Food Delivery",
    description: "Appetite-inducing digital menus paired with robust, direct-to-consumer online ordering and booking frameworks."
  },
  {
    id: 11,
    title: "Job Boards",
    description: "Faceted search engines and dynamic matching algorithms connecting elite talent to outstanding organizations."
  },
  {
    id: 12,
    title: "Directory Websites",
    description: "Curated databases engineered for complex data filtering, geo-location capabilities, and monetization."
  },
  {
    id: 13,
    title: "Fitness & Wellness",
    description: "High-energy digital platforms designed for class bookings, member management, and community building."
  },
  {
    id: 14,
    title: "Finance & Investing",
    description: "Secure, performance-driven web architectures presenting data cleanly and asserting uncompromising financial stability."
  },
  {
    id: 15,
    title: "Travel & Tourism",
    description: "Breathtaking destination guides and friction-free booking interfaces catering to luxury globetrotters."
  }
];

export default function IndustriesPage() {
  return (
    <main style={{ backgroundColor: '#0c0c0c', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* SECTION 1 — Page Hero */}
      <section 
        className="w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 relative"
        style={{ borderBottom: '1px solid rgba(212,175,55,0.2)' }}
      >
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center"
        >
          <span 
            className="uppercase block mb-4" 
            style={{ 
              fontFamily: "'Space Mono', monospace", 
              color: '#D4AF37', 
              letterSpacing: '0.15em',
              fontSize: '0.85rem'
            }}
          >
            OUR EXPERTISE
          </span>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl mb-6 relative" 
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              color: '#FEFEFE',
              fontWeight: 600
            }}
          >
            Industries We Transform
          </h1>
        </motion.div>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="text-center max-w-2xl mx-auto mb-10"
           style={{ 
             fontFamily: "'Inter', sans-serif", 
             color: 'rgba(255,255,255,0.5)',
             fontSize: '1.1rem',
             lineHeight: 1.6
           }}
        >
          Explore our specialized solutions across tailored digital spaces, software products, and global niches.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-24 h-[1px]"
          style={{ backgroundColor: '#D4AF37', transformOrigin: 'center' }}
        />
      </section>

      {/* SECTION 2 — Niches Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {niches.map((niche, index) => (
            <motion.article
              key={niche.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '32px',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(212,175,55,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span 
                className="block"
                style={{ 
                  fontFamily: "'Space Mono', monospace", 
                  color: '#D4AF37', 
                  fontSize: '0.85rem'
                }}
              >
                {String(niche.id).padStart(2, '0')}
              </span>
              
              <h2 
                className="mt-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#FEFEFE',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                {niche.title}
              </h2>

              <div 
                className="w-full flex items-center justify-center transition-all duration-400 group-hover:border-[rgba(212,175,55,0.5)] cursor-pointer relative overflow-hidden"
                style={{
                  aspectRatio: '16/9',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: niche.video ? 'none' : '1.5px dashed rgba(212,175,55,0.25)',
                  borderRadius: '10px',
                  margin: '20px 0'
                }}
              >
                {niche.video ? (
                  <video 
                    src={niche.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
                  />
                ) : (
                  <span 
                    style={{ 
                      fontFamily: "'Space Mono', monospace", 
                      color: '#D4AF37', 
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    [ Video / Image ]
                  </span>
                )}
              </div>

              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.75
                }}
              >
                {niche.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Bottom CTA Strip */}
      <section 
        className="w-full relative py-32 flex flex-col items-center justify-center px-6 overflow-hidden"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        {/* Subtle gold radial gradient glow */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 60%)' 
          }}
        />
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.7 }}
           viewport={{ once: true }}
           className="relative z-10 text-center flex flex-col items-center"
        >
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              color: '#FEFEFE',
              fontWeight: 600
            }}
          >
            Ready to Build Something Extraordinary?
          </h2>
          <p 
            className="text-lg mb-10 max-w-xl text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255,255,255,0.5)'
            }}
          >
            Let's discuss your project and craft the perfect digital experience for your industry.
          </p>
          
          <button
            className="group relative overflow-hidden transition-all duration-300"
            style={{
              border: '1.5px solid #D4AF37',
              backgroundColor: 'transparent',
              color: '#D4AF37',
              padding: '16px 32px',
              borderRadius: '9999px',
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D4AF37';
              e.currentTarget.style.color = '#0c0c0c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#D4AF37';
            }}
          >
            <span className="relative z-1 flex items-center gap-2">
              Start a Conversation <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </motion.div>
      </section>

    </main>
  );
}
