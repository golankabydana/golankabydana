/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DestinationsSection } from './components/DestinationsSection';
import { ToursSection } from './components/ToursSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { PlanTripSection } from './components/PlanTripSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [prefilledHighlight, setPrefilledHighlight] = useState('');
  const [tourFilter, setTourFilter] = useState('all');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePlanTripClick = () => {
    scrollToSection('plan-trip');
  };

  const handlePlanTripWithHighlight = (highlightTitle: string) => {
    setPrefilledHighlight(highlightTitle);
    scrollToSection('plan-trip');
  };

  const handleQuickSearch = (destination: string, style: string) => {
    if (style && style !== 'all') {
      setTourFilter(style);
    }
    if (destination !== 'all') {
      setPrefilledHighlight(`Destination: ${destination}`);
    }
    scrollToSection('featured-tours');
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Hello Dana! I would love to discuss planning a bespoke journey to Sri Lanka.'
    );
    window.open(`https://wa.me/94764208840?text=${text}`, '_blank');
  };

  // Scroll spy to update active section in header
  useEffect(() => {
    const sections = ['destinations', 'featured-tours', 'experiences', 'about-us', 'plan-trip'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      if (window.scrollY < 300) {
        setActiveSection('home');
        return;
      }
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'plan-trip' ? 'contact' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f7faf6] text-[#181c1a] min-h-screen flex flex-col font-['Plus_Jakarta_Sans']">
      {/* 1. Sticky Luxury Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onPlanTripClick={handlePlanTripClick}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[#f7faf6]">
        {/* 2. Hero Section with Sigiriya aerial and quick finder */}
        <Hero
          onExploreTours={() => scrollToSection('featured-tours')}
          onPlanTrip={handlePlanTripClick}
          onQuickSearch={handleQuickSearch}
        />

        {/* 3. Wonders of Sri Lanka / Curated Sanctuaries */}
        <DestinationsSection
          onPlanTripWithDestination={handlePlanTripWithHighlight}
        />

        {/* 4. Handcrafted Itineraries / Featured Tours */}
        <ToursSection
          activeFilter={tourFilter}
          onInquireTour={handlePlanTripWithHighlight}
        />

        {/* 5. Sensory Immersion / The Real Sri Lanka Experiences */}
        <ExperiencesSection
          onSelectExperience={handlePlanTripWithHighlight}
        />

        {/* 6. Why Choose Us / The Go Lanka Standard */}
        <WhyChooseUs />

        {/* 7. Founder & Ethos / Meet Go Lanka by Dana */}
        <AboutSection
          onContactClick={handlePlanTripClick}
        />

        {/* 8. Traveler Chronicles / Verified Reviews */}
        <TestimonialsSection />

        {/* 9. Mirissa Beach Sunset Call-to-Action Banner */}
        <CtaBanner
          onPlanTripClick={handlePlanTripClick}
          onWhatsAppClick={handleWhatsAppClick}
        />

        {/* 10. Plan Trip & Direct Concierge Access */}
        <PlanTripSection
          prefilledHighlight={prefilledHighlight}
        />
      </main>

      {/* 11. Footer with Ceylon quote & concierge contact */}
      <Footer
        onNavigate={scrollToSection}
        onPlanTripClick={handlePlanTripClick}
        onWhatsAppClick={handleWhatsAppClick}
      />

      {/* Floating Concierge WhatsApp Action (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={handleWhatsAppClick}
          className="group flex items-center gap-2.5 bg-[#133e2b] text-white hover:bg-[#002718] p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-[#133e2b]/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-[#bfedd2]/20"
          aria-label="Chat with Dana on WhatsApp"
        >
          <span className="material-symbols-outlined text-2xl text-[#e28a3b]">
            chat
          </span>
          <span className="hidden sm:inline font-medium text-xs tracking-wide">
            Chat with Dana
          </span>
        </button>
      </div>
    </div>
  );
}
