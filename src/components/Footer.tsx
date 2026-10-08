import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onPlanTripClick: () => void;
  onWhatsAppClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onPlanTripClick,
  onWhatsAppClick
}) => {
  return (
    <footer className="w-full bg-[#002718] text-white">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Go Lanka by Dana Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida/AEtjO1U7Ee3aXxq0RZYFve3OwO5VD66rQXDtWVszh_EeDuZKExHpZYQDgk_dOa81pSfg-7iEc5GzncUacNv7LziSqMURQOdHSXoRXm78sm5j_n35JomD8c05-ITCm8UFAxc5sXWJcdeFpYtKo3XVvsyH91Vntaj-Uoh_bYq5Vc90xpyHj1xT_pOs9XLqRWL43pHZh9Ln9TI5g4UaTK9LVTtHOvde-A-li2Wykler6d51ox0"
              />
              <span className="font-['Playfair_Display'] text-2xl font-semibold text-white tracking-tight">
                Go Lanka by Dana
              </span>
            </div>
            <p className="font-['Playfair_Display'] text-lg italic text-[#7da990] leading-relaxed max-w-md pt-1">
              “Discover Sri Lanka. Create memories. Travel with purpose.”
            </p>
            <p className="text-xs sm:text-sm text-[#7da990] max-w-sm leading-relaxed">
              Curated luxury journeys, private colonial tea bungalows, untouched
              coastal havens, and wildlife expeditions tailored with genuine
              Ceylon warmth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e28a3b]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#7da990]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Destinations & Sanctuaries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('featured-tours')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Curated Itineraries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experiences')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bespoke Experiences
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-us')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Dana & Ethos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Concierge
                </button>
              </li>
              <li>
                <button
                  onClick={onPlanTripClick}
                  className="hover:text-white transition-colors cursor-pointer text-left font-semibold text-[#e28a3b]"
                >
                  Plan Your Bespoke Trip
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e28a3b]">
              Connect & Inquire
            </h3>
            <p className="text-xs sm:text-sm text-[#7da990]">
              Direct WhatsApp private concierge or follow our journey narratives across the island.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={onWhatsAppClick}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#133e2b] text-[#7da990] hover:text-white hover:bg-white/10 transition-colors text-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm text-[#e28a3b]">
                  chat
                </span>
                WhatsApp
              </button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#133e2b] text-[#7da990] hover:text-white hover:bg-white/10 transition-colors text-xs"
              >
                <span className="material-symbols-outlined text-sm">
                  photo_camera
                </span>
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#133e2b] text-[#7da990] hover:text-white hover:bg-white/10 transition-colors text-xs"
              >
                <span className="material-symbols-outlined text-sm">
                  public
                </span>
                Facebook
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#133e2b] text-[#7da990] hover:text-white hover:bg-white/10 transition-colors text-xs"
              >
                <span className="material-symbols-outlined text-sm">
                  play_circle
                </span>
                TikTok
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#133e2b] text-[#7da990] hover:text-white hover:bg-white/10 transition-colors text-xs"
              >
                <span className="material-symbols-outlined text-sm">
                  smart_display
                </span>
                YouTube
              </a>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-[#7da990] flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#e28a3b]">
                mail
              </span>
              <span>concierge@golankabydana.com</span>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-[#133e2b]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7da990]">
          <p>© 2025 Go Lanka by Dana. All rights reserved. Registered Ceylon Travel Curator.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Sustainable Travel Pledge
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
