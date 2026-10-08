import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: 'map',
      title: 'Local Ceylon Expertise',
      description:
        'Travel with people who know Sri Lanka from the inside out—born here, raised here, and deeply connected to hidden gems.'
    },
    {
      icon: 'tune',
      title: 'Personalized Journeys',
      description:
        'No off-the-shelf itineraries. Every detail is calibrated around your pace, culinary desires, and preferred accommodations.'
    },
    {
      icon: 'favorite',
      title: 'Authentic Experiences',
      description:
        'Go beyond the tourist trails. Engage directly with artisan potters, tea planters, and marine conservationists.'
    },
    {
      icon: 'support_agent',
      title: '24/7 Trusted Concierge',
      description:
        "From initial airport VIP meet-and-greets to your departure gate, Dana's dedicated concierge is available on WhatsApp around the clock."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#002718] text-white">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e28a3b] block">
            The Go Lanka Standard
          </span>
          <h2 className="font-['Playfair_Display'] text-[32px] md:text-[40px] tracking-tight font-semibold leading-tight text-balance">
            Travel Sri Lanka With Confidence
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm md:text-base text-[#e9e2d4]/80 leading-relaxed">
            Every detail designed with quiet precision, local integrity, and
            uncompromised comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#133e2b]/70 rounded-3xl p-8 backdrop-blur-sm space-y-4 border border-white/5 hover:border-white/15 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#e28a3b]">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-white font-bold">
                {item.title}
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#e9e2d4]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
