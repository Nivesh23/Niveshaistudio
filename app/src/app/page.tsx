'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/ui/Footer';

const LoadingScreen = dynamic(() => import('@/components/ui/LoadingScreen'), { ssr: false });
const ChatbotWidget = dynamic(() => import('@/components/ui/ChatbotWidget'), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </>
  );
}
