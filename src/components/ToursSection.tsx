import React, { useState } from 'react';
import { Tour } from '../types';
import { TOURS } from '../data/travelData';
import { TourModal } from './TourModal';

interface ToursSectionProps {
  onInquireTour: (tourTitle: string) => void;
  activeFilter?: string;
}

export const ToursSection: React.FC<ToursSectionProps> = ({
  onInquireTour,
  activeFilter = 'all'
}) => {
  const [currentFilter, setCurrentFilter] = useState<string>(activeFilter);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Tours' },
    { id: 'signature', label: 'Signature Journeys' },
    { id: 'wildlife', label: 'Wildlife & Safari' },
    { id: 'honeymoon', label: 'Honeymoon & Romance' },
    { id: 'cultural', label: 'Cultural Expeditions' }
  ];

  const filteredTours = TOURS.filter((tour) => {
    if (currentFilter === 'all') return true;
    return tour.category === currentFilter;
  });

  return (
    <section className="w-full py-24 bg-[#f1f4f1]" id="featured-tours">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e28a3b] text-base">
              auto_awesome
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e28a3b]">
              Handcrafted Itineraries
            </span>
          </div>
          <h2 className="font-['Playfair_Display'] text-[32px] md:text-[40px] text-[#002718] tracking-tight font-semibold leading-tight text-balance">
            Journeys Made for You
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm md:text-base text-[#414943] leading-relaxed">
            Each itinerary is a starting canvas—customized to your individual
            pace, sensory preferences, and travel rhythm by Dana and our private
            naturalists.
          </p>
        </div>

        {/* Filter Tabs Interactive */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14" id="tour-filters">
          {filterTabs.map((tab) => {
            const isActive = currentFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#002718] text-white shadow-sm'
                    : 'bg-white text-[#181c1a] hover:bg-[#e9e2d4]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 6 Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-[#e0e3e0]/60"
            >
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => setSelectedTour(tour)}
              >
                <img
                  src={tour.image}
                  alt={tour.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#002718]/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                  {tour.categoryLabel}
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 text-[#181c1a] text-xs font-semibold shadow-sm">
                  <span
                    className="material-symbols-outlined text-sm text-[#e28a3b]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>{' '}
                  {tour.rating.toFixed(1)} ({tour.reviewsCount})
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs text-[#414943] flex items-center gap-1 mb-2 font-medium">
                    <span className="material-symbols-outlined text-sm text-[#717973]">
                      route
                    </span>{' '}
                    {tour.route}
                  </span>
                  <h3
                    onClick={() => setSelectedTour(tour)}
                    className="font-['Plus_Jakarta_Sans'] text-lg text-[#002718] font-bold group-hover:text-[#e28a3b] transition-colors cursor-pointer leading-snug"
                  >
                    {tour.title}
                  </h3>
                  <p className="text-xs text-[#414943] mt-2 line-clamp-2 leading-relaxed">
                    {tour.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ecefeb] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#717973] block leading-none">
                      Starting from
                    </span>
                    <span className="text-lg text-[#002718] font-bold">
                      ${tour.startingPrice.toLocaleString()}{' '}
                      <span className="text-xs font-normal text-[#635e53]">
                        {tour.priceUnit}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedTour(tour)}
                      className="px-3.5 py-2 rounded-xl bg-[#ecefeb] text-[#002718] hover:bg-[#e0e3e0] text-xs font-semibold transition-colors cursor-pointer"
                    >
                      View
                    </button>
                    <button
                      onClick={() => onInquireTour(tour.title)}
                      className="px-4 py-2 rounded-xl bg-[#133e2b] text-white hover:bg-[#002718] transition-colors text-xs font-semibold cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Detail Modal */}
      <TourModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        onInquire={(title) => onInquireTour(title)}
      />
    </section>
  );
};
