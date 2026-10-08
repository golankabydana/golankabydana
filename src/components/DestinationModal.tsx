import React from 'react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onInquire: (destinationName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onInquire
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#002718]/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-[#e0e3e0] text-[#181c1a]">
        {/* Header Media */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-t-3xl">
          <img
            src={destination.image}
            alt={destination.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002718] via-[#002718]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          {/* Tag & Title */}
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold tracking-wider uppercase inline-block mb-2 border border-white/20">
              {destination.region}
            </span>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-['Playfair_Display'] text-3xl font-semibold">
                {destination.name}
              </h3>
              <span className="text-sm text-[#e9e2d4] flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-sm text-[#e28a3b]">
                  schedule
                </span>
                {destination.duration}
              </span>
            </div>
            <p className="text-xs text-[#e9e2d4]/80 mt-1 font-medium">
              {destination.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-[#414943] text-base leading-relaxed">
            {destination.description}
          </p>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#002718] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#e28a3b] text-xl">
                star
              </span>
              Curated Highlights by Dana
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#f1f4f1] text-sm text-[#181c1a]"
                >
                  <span className="material-symbols-outlined text-base text-[#133e2b] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Luxury Stays */}
          <div className="space-y-3">
            <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#002718] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#e28a3b] text-xl">
                hotel
              </span>
              Handpicked Boutique Stays
            </h4>
            <div className="flex flex-wrap gap-2">
              {destination.topStays.map((stay, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-[#e9e2d4]/70 text-[#002718] text-xs font-semibold"
                >
                  {stay}
                </span>
              ))}
            </div>
          </div>

          {/* Best Season */}
          <div className="p-4 rounded-2xl bg-[#f7faf6] border border-[#e0e3e0] flex items-center justify-between text-sm">
            <span className="text-[#635e53] font-medium flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#133e2b] text-base">
                wb_sunny
              </span>
              Recommended Season:
            </span>
            <span className="font-semibold text-[#002718]">
              {destination.bestSeason}
            </span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onInquire(destination.name);
                onClose();
              }}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#002718] text-white hover:bg-[#133e2b] font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Include in My Journey</span>
              <span className="material-symbols-outlined text-sm text-[#e28a3b]">
                travel_explore
              </span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-[#f1f4f1] hover:bg-[#e0e3e0] text-[#181c1a] font-medium text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
