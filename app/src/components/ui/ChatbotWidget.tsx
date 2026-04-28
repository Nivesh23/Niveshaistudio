'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  text: string;
}

const quickReplies = [
  'What services do you offer?',
  'Tell me about pricing',
  'How to get started?',
];

const botResponses: Record<string, string> = {
  'what services do you offer?':
    '🚀 We offer a range of AI services including:\n\n• AI Chatbots & Customer Support\n• NLP & Text Analytics\n• Computer Vision Systems\n• Predictive Analytics\n• Custom AI SaaS Platforms\n\nWant me to go deeper into any specific service?',
  'tell me about pricing':
    '💰 Our pricing is customized based on project scope:\n\n• Starter AI Integration: Starting from $2,000\n• Full AI Solution: $5,000 - $25,000\n• Enterprise Scale: Custom pricing\n\nLet\'s schedule a free consultation to discuss your needs!',
  'how to get started?':
    '🎯 Getting started is easy:\n\n1. Fill out our contact form below\n2. We\'ll schedule a free 30-min discovery call\n3. Receive a custom project proposal\n4. Development begins within 1 week\n\nReady to transform your business with AI?',
};

const defaultResponse =
  "Thanks for your message! 🤖 I'm Nivesh AI's assistant. I can help with information about our services, pricing, and getting started. For detailed inquiries, please use the contact form below or email us at Niviprince01@gmail.com";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      sender: 'bot',
      text: "👋 Hi! I'm the Nivesh AI Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: messages.length,
      sender: 'user',
      text: text.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const normalizedInput = text.trim().toLowerCase();
      const response =
        botResponses[normalizedInput] || defaultResponse;

      const botMsg: Message = {
        id: messages.length + 1,
        sender: 'bot',
        text: response,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 800);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-lg cursor-pointer"
        whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(0,212,255,0.4)' }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
        id="chatbot-toggle"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#00d4ff]"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-[200] w-[380px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(0, 212, 255, 0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.1)',
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center text-sm font-bold">
                  AI
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Nivesh AI Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                    <span className="text-[11px] text-[#10b981]">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[350px] overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: 'thin' }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white rounded-br-md'
                        : 'bg-white/5 text-slate-300 border border-white/5 rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#00d4ff]"
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {quickReplies.map((reply) => (
                  <motion.button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-3 py-1.5 text-[11px] font-medium rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 cursor-pointer hover:bg-[#00d4ff]/20 transition-colors"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00d4ff]/30 transition-all"
                  id="chatbot-input"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white cursor-pointer"
                  id="chatbot-send"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16 2L8 10M16 2l-5 14-3-6-6-3 14-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
