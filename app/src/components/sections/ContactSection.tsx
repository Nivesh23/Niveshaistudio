'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

const contactInfo = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Email',
    value: 'Niviprince01@gmail.com',
    href: 'mailto:Niviprince01@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 8800528264',
    href: 'tel:+918800528264',
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'New Delhi, India',
    href: '#',
    color: '#ec4899',
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: "988fde35-9e28-4d00-9004-d4148b24019a",
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "New Website Query",
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Web3Forms Error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const inputClasses = "w-full px-5 py-4 rounded-xl bg-[#0f172a]/80 border border-white/10 text-white text-base placeholder-slate-500 focus:outline-none focus:border-[#00d4ff]/60 focus:ring-2 focus:ring-[#00d4ff]/20 focus:bg-[#0f172a] transition-all duration-300 relative z-10";

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00d4ff]/3 blur-[160px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/3 blur-[140px]" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#00d4ff] mb-4 glass border border-[#00d4ff]/20">
            Get in Touch
          </span>
          <h2 className="section-title">
            Let&apos;s Build Your
            <br />
            <span className="gradient-text">AI Solution</span>
          </h2>
          <p className="section-subtitle mx-auto mt-6">
            Ready to transform your business with AI? Let&apos;s discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 lg:p-10 neon-glow relative z-10">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2.5">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={inputClasses}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-300 mb-2.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  autoComplete="off"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className={inputClasses}
                  placeholder="AI Chatbot Development"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full cta-button justify-center text-base disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                <span className="flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" className="opacity-75" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </span>
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 px-4 py-3 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-sm text-center font-medium"
                >
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 px-4 py-3 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 text-[#ef4444] text-sm text-center font-medium"
                >
                  ⚠ Something went wrong. Please try again or email us directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info Sidebar — icons in separate transparent boxes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="flex items-center gap-5 glass rounded-2xl p-5 group cursor-pointer hover:border-[#00d4ff]/20 transition-all duration-300 block"
              >
                {/* Icon in separate transparent bordered box */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 border"
                  style={{
                    backgroundColor: `${info.color}08`,
                    borderColor: `${info.color}25`,
                    color: info.color,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">{info.label}</p>
                  <p className="text-white font-bold text-base">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Quick Response card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Outfit' }}>
                Quick Response
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                We typically respond within 2-4 hours during business hours. For urgent inquiries, reach us on WhatsApp.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#10b981]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                </span>
                Available now
              </div>
            </motion.div>

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="glass rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 40%, #00d4ff 1px, transparent 1px),
                  radial-gradient(circle at 70% 60%, #8b5cf6 1px, transparent 1px),
                  radial-gradient(circle at 50% 30%, #00d4ff 0.5px, transparent 0.5px)
                `,
                backgroundSize: '20px 20px, 25px 25px, 15px 15px',
              }} />
              <div className="relative z-10 flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border text-xl"
                  style={{
                    backgroundColor: 'rgba(0, 212, 255, 0.05)',
                    borderColor: 'rgba(0, 212, 255, 0.15)',
                  }}
                >
                  📍
                </div>
                <div>
                  <p className="text-white font-bold text-base">New Delhi, India</p>
                  <p className="text-xs text-slate-500">Serving clients globally</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
