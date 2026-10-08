import React from 'react';

interface CtaBannerProps {
  onPlanTripClick: () => void;
  onWhatsAppClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onPlanTripClick,
  onWhatsAppClick
}) => {
  return (
    <section className="relative w-full py-28 md:py-36 overflow-hidden bg-[#002718] text-white">
      {/* Mirissa Beach Sunset Backdrop */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_5WMwZ0dHcpDx_UEsiJovIIn5F0ZdfuJlq6h3Z7rxAoYCLUM7LrRJFpa6-WcuKpAumQX5bxDiO0F9NlA41Hzoq-rAvkEDZAIWuZBTETwr7ihHacykAtXr2Oy8uMVi3rrNpnfhJgZcsQ_bV30BgAtdEtmCFyZnNvn7TQoNDX3NnrbSCcOF0EaTJBWK9zrNxWoaUJL47_2M4XWl1KqurQZ2_7-555R3N6PZkbUneXs')`
        }}
      >
        <div className="absolute inset-0 bg-[#002718]/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002718] via-[#002718]/85 to-[#002718]/65" />
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e28a3b] inline-block">
            Begin Your Story
          </span>
          <h2 className="font-['Playfair_Display'] text-[32px] md:text-[48px] text-white tracking-tight font-semibold leading-tight text-balance">
            Ready to Discover Sri Lanka?
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e9e2d4]/90 leading-relaxed font-normal">
            Tell us what kind of journey you are dreaming of, and let us craft
            your bespoke Ceylon adventure with true elegance and care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onPlanTripClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#e28a3b] text-white font-medium text-sm shadow-lg shadow-[#e28a3b]/30 hover:bg-[#ffb77e] hover:text-[#2f1500] transition-all cursor-pointer"
            >
              <span>Plan My Trip</span>
              <span className="material-symbols-outlined text-base">east</span>
            </button>
            <button
              onClick={onWhatsAppClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-md text-white font-medium text-sm hover:bg-white/25 transition-all border border-white/20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base text-[#e28a3b]">
                chat
              </span>
              <span>Contact Dana Directly</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
