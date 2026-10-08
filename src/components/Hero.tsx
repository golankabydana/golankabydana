import React, { useState } from 'react';

interface HeroProps {
  onExploreTours: () => void;
  onPlanTrip: () => void;
  onQuickSearch: (destination: string, style: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreTours,
  onPlanTrip,
  onQuickSearch
}) => {
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState('Nov 2025 - Mar 2026');
  const [selectedTravelers, setSelectedTravelers] = useState('2');
  const [selectedStyle, setSelectedStyle] = useState('all');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickSearch(selectedDestination, selectedStyle);
  };

  return (
    <section className="relative w-full -mt-20 overflow-hidden bg-[#002718] text-[#ffffff]">
      {/* Hero Background with Aerial Sigiriya Backdrop & Subtle Vignette */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAT4CMhgjY7J5DcYuaqWFZ0C5Gzz4jwa3dMNPGJXSadUhNn_ip7Dk4JcgixhhcN6WAGQljbKvJyljYFk2Ohf6gQj3Ai-IJaQPA5IpvOSarj40H48uxDxkAv-b7cLzes9WqGhU7IfdR76Go2k4EKPrbBvdYEYnUWKXBAdvsJOgbp0e1Dv4oIDIRp8rItAe-VA9CsgPcffjoWKjBN6WDFIRdye7y-SLhgyEvs-XPhXks')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#002718]/80 via-[#002718]/50 to-[#002718]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#002718]/40 to-[#002718]/90" />
      </div>

      {/* Content Scrim & Typography */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16 pt-36 md:pt-44 pb-28 md:pb-36 flex flex-col items-center text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f7faf6]/15 backdrop-blur-md mb-6 shadow-sm border border-white/10">
          <span
            className="material-symbols-outlined text-sm text-[#e28a3b]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            spa
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e9e2d4]">
            Discover Sri Lanka
          </span>
          <span className="inline-block w-1 h-1 rounded-full bg-[#e28a3b]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#e9e2d4]/90">
            Bespoke Ceylon Travel
          </span>
        </div>

        {/* Grand Luxury Headline */}
        <h1 className="font-['Playfair_Display'] text-[38px] md:text-[58px] lg:text-[64px] max-w-4xl text-white mb-6 tracking-tight leading-[1.1] font-semibold text-balance">
          Your Journey.{' '}
          <span className="italic font-normal text-[#e9e2d4]">Your Sri Lanka.</span>
        </h1>

        {/* Refined Subtext */}
        <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e9e2d4]/90 max-w-2xl mb-10 leading-relaxed font-normal">
          Discover unforgettable sanctuaries, authentic cultural wonders, and
          breathtaking untamed wilderness, tailored with genuine island warmth
          by Dana.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onExploreTours}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#e28a3b] text-white font-medium text-sm shadow-lg shadow-[#e28a3b]/25 hover:bg-[#ffb77e] hover:text-[#2f1500] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Tours</span>
            <span className="material-symbols-outlined text-base">east</span>
          </button>
          <button
            onClick={onPlanTrip}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-medium text-sm transition-all duration-300 cursor-pointer border border-white/20"
          >
            <span className="material-symbols-outlined text-base text-[#e28a3b]">
              edit_calendar
            </span>
            <span>Plan Your Custom Trip</span>
          </button>
        </div>

        {/* Bouncing Scroll Down Indicator */}
        <button
          onClick={onExploreTours}
          className="flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity cursor-pointer group focus:outline-none"
        >
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e9e2d4]/80">
            Scroll to Explore
          </span>
          <span className="material-symbols-outlined animate-bounce text-[#e28a3b] text-2xl group-hover:translate-y-1 transition-transform">
            keyboard_arrow_down
          </span>
        </button>
      </div>

      {/* Floating Luxury Search / Quick Inquiry Bar */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-5 md:px-10 -mb-16">
        <div className="bg-white rounded-3xl p-5 md:p-7 shadow-2xl shadow-[#002718]/20 border border-[#e0e3e0]">
          <form
            onSubmit={handleSearchSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center"
          >
            {/* Destination Field */}
            <div className="flex flex-col gap-1.5 px-4 py-2.5 rounded-2xl bg-[#f1f4f1] hover:bg-[#ecefeb] transition-colors">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#414943] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#133e2b]">
                  location_on
                </span>{' '}
                Destination
              </span>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="bg-transparent font-medium text-sm text-[#181c1a] focus:outline-none cursor-pointer"
              >
                <option value="all">All Sanctuaries</option>
                <option value="sigiriya">Sigiriya Fortress</option>
                <option value="ella">Ella High Country</option>
                <option value="galle">Galle Dutch Fort</option>
                <option value="yala">Yala Leopard Reserve</option>
                <option value="mirissa">Mirissa & South Coast</option>
                <option value="kandy">Kandy Cultural Realm</option>
              </select>
            </div>

            {/* Travel Month/Date */}
            <div className="flex flex-col gap-1.5 px-4 py-2.5 rounded-2xl bg-[#f1f4f1] hover:bg-[#ecefeb] transition-colors">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#414943] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#133e2b]">
                  calendar_month
                </span>{' '}
                Season / Dates
              </span>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="bg-transparent font-medium text-sm text-[#181c1a] focus:outline-none cursor-pointer"
              >
                <option value="Nov 2025 - Mar 2026">Nov 2025 - Mar 2026</option>
                <option value="Apr 2026 - Aug 2026">Apr 2026 - Aug 2026</option>
                <option value="Sep 2026 - Dec 2026">Sep 2026 - Dec 2026</option>
                <option value="Flexible Dates">Flexible Dates</option>
              </select>
            </div>

            {/* Travelers */}
            <div className="flex flex-col gap-1.5 px-4 py-2.5 rounded-2xl bg-[#f1f4f1] hover:bg-[#ecefeb] transition-colors">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#414943] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#133e2b]">
                  group
                </span>{' '}
                Travelers
              </span>
              <select
                value={selectedTravelers}
                onChange={(e) => setSelectedTravelers(e.target.value)}
                className="bg-transparent font-medium text-sm text-[#181c1a] focus:outline-none cursor-pointer"
              >
                <option value="2">2 Adults (Couple)</option>
                <option value="solo">Solo Explorer</option>
                <option value="family">Family (3 - 5)</option>
                <option value="private-group">Private Group (6+)</option>
              </select>
            </div>

            {/* Travel Style */}
            <div className="flex flex-col gap-1.5 px-4 py-2.5 rounded-2xl bg-[#f1f4f1] hover:bg-[#ecefeb] transition-colors">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#414943] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#133e2b]">
                  diamond
                </span>{' '}
                Experience Style
              </span>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="bg-transparent font-medium text-sm text-[#181c1a] focus:outline-none cursor-pointer"
              >
                <option value="all">All Styles</option>
                <option value="signature">Signature Journeys</option>
                <option value="wildlife">Wildlife & Safaris</option>
                <option value="honeymoon">Honeymoon & Romance</option>
                <option value="cultural">Heritage & Culture</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="h-full flex items-center">
              <button
                type="submit"
                className="w-full h-full min-h-[58px] inline-flex items-center justify-center gap-2 px-6 rounded-2xl bg-[#002718] text-white hover:bg-[#133e2b] transition-all duration-300 font-medium text-sm shadow-md hover:shadow-xl group cursor-pointer"
              >
                <span>Find Journeys</span>
                <span className="material-symbols-outlined text-lg text-[#e28a3b] group-hover:translate-x-1 transition-transform">
                  travel_explore
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
