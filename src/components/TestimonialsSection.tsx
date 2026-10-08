import React from 'react';
import { TESTIMONIALS } from '../data/travelData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#f7faf6]">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e28a3b] block">
            Traveler Chronicles
          </span>
          <h2 className="font-['Playfair_Display'] text-[32px] md:text-[40px] text-[#002718] tracking-tight font-semibold leading-tight text-balance">
            What Our Travelers Say
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm md:text-base text-[#414943] leading-relaxed">
            Real stories from travelers who explored Sri Lanka with Dana's curated care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-3xl bg-[#e9e2d4]/40 flex flex-col justify-between space-y-6 shadow-sm border border-[#e0e3e0]/60 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#e28a3b]">
                  {[...Array(review.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-['Playfair_Display'] text-lg italic text-[#002718] leading-relaxed">
                  {review.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#e9e2d4]">
                <div className="w-11 h-11 rounded-full bg-[#133e2b] text-white font-bold flex items-center justify-center text-sm">
                  {review.initials}
                </div>
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-sm text-[#002718] font-bold block leading-tight">
                    {review.author}
                  </span>
                  <span className="text-xs text-[#635e53]">
                    {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
