import React, { useState } from 'react';
import { Destination } from '../types';
import { DESTINATIONS } from '../data/travelData';
import { DestinationModal } from './DestinationModal';

interface DestinationsSectionProps {
  onPlanTripWithDestination: (destinationName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onPlanTripWithDestination
}) => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <section className="w-full pt-32 pb-24 bg-[#f7faf6]" id="destinations">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-[#e28a3b]" />
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e28a3b]">
                Unveil The Island
              </span>
            </div>
            <h2 className="font-['Playfair_Display'] text-[32px] md:text-[40px] text-[#002718] tracking-tight font-semibold leading-tight text-balance">
              Explore the Wonders of Sri Lanka
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-sm md:text-base text-[#414943] leading-relaxed">
              From ancient rock kingdoms to misty Ceylon tea ridges and pristine
              palm-fringed coastlines, discover the places that make this island
              unforgettable.
            </p>
          </div>
          <button
            onClick={() => onPlanTripWithDestination('All Sanctuaries')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#002718] hover:text-[#e28a3b] transition-colors group cursor-pointer"
          >
            <span>View all curated sanctuaries</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* 6 Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setSelectedDestination(dest)}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer border border-[#e0e3e0]/60"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002718]/85 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#f7faf6]/90 backdrop-blur-md text-[11px] font-bold text-[#002718] uppercase tracking-wider">
                  {dest.region}
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="font-['Playfair_Display'] text-xl font-semibold">
                    {dest.name}
                  </span>
                  <span className="text-xs opacity-90 flex items-center gap-1 font-medium text-[#e9e2d4]">
                    <span className="material-symbols-outlined text-xs text-[#e28a3b]">
                      schedule
                    </span>{' '}
                    {dest.duration}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-[#414943] leading-relaxed">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#ecefeb]">
                  <span className="text-xs text-[#635e53] font-medium">
                    {dest.subtitle}
                  </span>
                  <span className="text-sm text-[#002718] font-semibold inline-flex items-center gap-1 group-hover:text-[#e28a3b] transition-colors">
                    Explore{' '}
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      east
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onInquire={(name) => onPlanTripWithDestination(name)}
      />
    </section>
  );
};
