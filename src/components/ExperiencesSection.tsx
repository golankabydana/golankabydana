import React, { useState } from 'react';
import { Experience } from '../types';
import { EXPERIENCES } from '../data/travelData';

interface ExperiencesSectionProps {
  onSelectExperience: (experienceTitle: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  onSelectExperience
}) => {
  const [activeExp, setActiveExp] = useState<Experience | null>(null);

  return (
    <section className="w-full py-24 bg-[#f7faf6]" id="experiences">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="inline-block w-8 h-[2px] bg-[#e28a3b]" />
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e28a3b]">
              Sensory Immersion
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-[32px] md:text-[40px] text-[#002718] tracking-tight font-semibold leading-tight text-balance">
            Experience the Real Sri Lanka
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm md:text-base text-[#414943] leading-relaxed">
            We bypass crowded tourist routines in favor of privileged access:
            meeting Master Tea Blenders, privately guided twilight safaris, and
            secluded culinary workshops in village compounds.
          </p>
        </div>

        {/* 8 Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              onClick={() => setActiveExp(exp)}
              className="p-6 rounded-3xl bg-[#f1f4f1] hover:bg-[#ecefeb] transition-all duration-300 flex flex-col justify-between group cursor-pointer border border-[#e0e3e0]/40 hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#133e2b] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">
                    {exp.iconName}
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#002718] font-bold">
                  {exp.title}
                </h3>
                <p className="text-xs text-[#414943] leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e0e3e0]/60 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#e28a3b] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
                <span className="text-[10px] uppercase font-bold text-[#717973] bg-white/70 px-2 py-0.5 rounded-full">
                  Curated
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Detail Modal */}
      {activeExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="fixed inset-0 bg-[#002718]/65 backdrop-blur-md"
            onClick={() => setActiveExp(null)}
          />
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 border border-[#e0e3e0]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#133e2b] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">
                  {activeExp.iconName}
                </span>
              </div>
              <button
                onClick={() => setActiveExp(null)}
                className="w-8 h-8 rounded-full bg-[#f1f4f1] hover:bg-[#e0e3e0] text-[#181c1a] flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#002718] mb-2">
              {activeExp.title}
            </h3>
            <p className="text-sm text-[#414943] leading-relaxed mb-6">
              {activeExp.description}
            </p>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e28a3b] block">
                Exclusive Signature Inclusions
              </span>
              <div className="space-y-1.5">
                {activeExp.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#181c1a] p-2 bg-[#f1f4f1] rounded-xl">
                    <span className="material-symbols-outlined text-sm text-[#133e2b]">
                      check_circle
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onSelectExperience(activeExp.title);
                  setActiveExp(null);
                }}
                className="flex-1 py-3 px-5 rounded-full bg-[#002718] text-white hover:bg-[#133e2b] font-medium text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Add to My Trip Wishlist</span>
                <span className="material-symbols-outlined text-sm text-[#e28a3b]">
                  add
                </span>
              </button>
              <button
                onClick={() => setActiveExp(null)}
                className="py-3 px-5 rounded-full bg-[#f1f4f1] hover:bg-[#e0e3e0] text-xs font-medium text-[#181c1a] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
