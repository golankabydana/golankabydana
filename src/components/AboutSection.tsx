import React from 'react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section className="w-full py-28 bg-[#f1f4f1] overflow-hidden" id="about-us">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Founder Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Frame Backdrop */}
              <div className="absolute -inset-4 bg-[#e9e2d4]/70 rounded-3xl -rotate-2" />
              {/* Main Portrait */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border-4 border-white">
                <img
                  alt="Editorial portrait photo of Dana, founder of Go Lanka by Dana"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_dqQKiVX14dbQ340HUS8AMzyhWEaY8YeOAVAVLphDqrhLQUB14nqL7YtQOChc77s5Q949L477r4B4kV6hF9UEncQB32-oI_cgTtjp5va7QoruNvzBrJtwRTPFGH1ZFK9jxJ6GTLe0-8743Kjug2dqFtXksNpQUgSFNUzwF2d_FeGFzUl3M9kW9sL8ngGyEw_bOsb0F0BLOLouzcANsijRSKva9vRgouzfzryrtg"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-[#e0e3e0]">
                <div className="w-10 h-10 rounded-full bg-[#133e2b] text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl text-[#e28a3b]">
                    verified
                  </span>
                </div>
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-sm text-[#002718] font-bold block leading-tight">
                    Dana Perera
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#e28a3b] uppercase tracking-wider">
                    Founder & Island Curator
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-[#e28a3b]" />
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e28a3b]">
                Founder & Ethos
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] text-[32px] md:text-[40px] text-[#002718] tracking-tight font-semibold leading-tight text-balance">
              Meet Go Lanka by Dana
            </h2>
            <p className="font-['Playfair_Display'] text-xl md:text-2xl italic text-[#635e53] leading-relaxed">
              “Sri Lanka is not merely a destination you check off; it is a sensory awakening that stays with your spirit forever.”
            </p>
            <p className="text-sm md:text-base text-[#414943] leading-relaxed">
              Growing up amidst the misty valleys of the Ceylon central highlands and the ancient ramparts of Galle, Dana developed an intimate relationship with the island's richest stories. Over the last decade, she has curated journeys for discerning travelers seeking beyond the ordinary.
            </p>
            <p className="text-sm md:text-base text-[#414943] leading-relaxed">
              Every journey Go Lanka creates is founded upon personal friendships with boutique heritage bungalow keepers, private wildlife naturalists, and local culinary masters—ensuring privacy, authenticity, and seamless elegance.
            </p>

            {/* Milestone Stats Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#e0e3e0]">
              <div>
                <span className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#002718] font-bold block">
                  1,200+
                </span>
                <span className="text-xs text-[#414943] font-medium">Happy Travelers</span>
              </div>
              <div>
                <span className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#002718] font-bold block">
                  25+
                </span>
                <span className="text-xs text-[#414943] font-medium">Sanctuaries Curated</span>
              </div>
              <div>
                <span className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#002718] font-bold block">
                  150+
                </span>
                <span className="text-xs text-[#414943] font-medium">Tailored Journeys</span>
              </div>
              <div>
                <span className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#002718] font-bold block flex items-center">
                  4.98
                  <span
                    className="material-symbols-outlined text-lg text-[#e28a3b] ml-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </span>
                <span className="text-xs text-[#414943] font-medium">340+ Verified Reviews</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#002718] text-white font-medium text-sm hover:bg-[#133e2b] transition-all shadow-md cursor-pointer"
              >
                <span>Start A Conversation With Dana</span>
                <span className="material-symbols-outlined text-base text-[#e28a3b]">
                  chat
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
