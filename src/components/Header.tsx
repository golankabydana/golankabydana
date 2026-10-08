import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onPlanTripClick: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onPlanTripClick,
  activeSection,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'featured-tours', label: 'Tours' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f7faf6]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)]'
          : 'bg-[#f7faf6]/80 backdrop-blur-md'
      }`}
    >
      <div className="h-20 max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between gap-5">
        {/* Brand Zone: Clean Wordmark & Monogram Logo */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <img
            alt="Go Lanka by Dana Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1U7Ee3aXxq0RZYFve3OwO5VD66rQXDtWVszh_EeDuZKExHpZYQDgk_dOa81pSfg-7iEc5GzncUacNv7LziSqMURQOdHSXoRXm78sm5j_n35JomD8c05-ITCm8UFAxc5sXWJcdeFpYtKo3XVvsyH91Vntaj-Uoh_bYq5Vc90xpyHj1xT_pOs9XLqRWL43pHZh9Ln9TI5g4UaTK9LVTtHOvde-A-li2Wykler6d51ox0"
          />
          <div className="flex flex-col">
            <span className="font-['Playfair_Display'] text-[19px] font-semibold tracking-tight text-[#002718] leading-none">
              Go Lanka
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#e28a3b] tracking-widest uppercase mt-0.5">
              By Dana
            </span>
          </div>
        </button>

        {/* Navigation Zone */}
        <nav className="hidden xl:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-all duration-200 cursor-pointer text-sm font-medium ${
                  isActive
                    ? 'text-[#002718] font-semibold bg-[#e9e2d4]/60 rounded-full px-4 py-1.5'
                    : 'text-[#414943] hover:text-[#002718] hover:bg-[#ecefeb]/60 rounded-full px-3.5 py-1.5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Primary Action Zone */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onPlanTripClick}
            className="inline-flex items-center justify-center bg-[#133e2b] text-[#ffffff] hover:bg-[#002718] text-sm font-medium px-5 py-2.5 rounded-full shadow-[0_8px_30px_-4px_rgba(26,30,28,0.08)] hover:shadow-[0_20px_40px_-8px_rgba(19,62,43,0.18)] transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
          >
            <span className="whitespace-nowrap">Plan Your Trip</span>
            <span className="material-symbols-outlined ml-1.5 text-base text-[#e28a3b] transition-transform group-hover:translate-x-0.5">
              travel_explore
            </span>
          </button>

          {/* Dana's Profile Avatar */}
          <div className="flex items-center pl-1 sm:pl-2">
            <button
              onClick={() => onNavigate('about-us')}
              title="Dana Perera - Founder & Island Curator"
              className="relative p-0.5 rounded-full ring-2 ring-[#e28a3b]/30 hover:ring-[#e28a3b] transition-all cursor-pointer"
            >
              <img
                alt="Dana - Island Curator"
                className="w-8 h-8 rounded-full object-cover shadow-[0_2px_6px_-1px_rgba(26,30,28,0.12)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_dqQKiVX14dbQ340HUS8AMzyhWEaY8YeOAVAVLphDqrhLQUB14nqL7YtQOChc77s5Q949L477r4B4kV6hF9UEncQB32-oI_cgTtjp5va7QoruNvzBrJtwRTPFGH1ZFK9jxJ6GTLe0-8743Kjug2dqFtXksNpQUgSFNUzwF2d_FeGFzUl3M9kW9sL8ngGyEw_bOsb0F0BLOLouzcANsijRSKva9vRgouzfzryrtg"
              />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-[#002718] hover:bg-[#ecefeb] transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#f7faf6] border-b border-[#c1c8c1]/30 px-6 py-5 shadow-lg space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#e9e2d4] text-[#002718] font-semibold'
                    : 'text-[#414943] hover:bg-[#ecefeb]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#c1c8c1]/30">
            <button
              onClick={() => {
                onPlanTripClick();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#002718] text-white text-sm font-medium"
            >
              <span>Plan Your Custom Trip</span>
              <span className="material-symbols-outlined text-sm text-[#e28a3b]">
                travel_explore
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
