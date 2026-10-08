import React from 'react';
import { Tour } from '../types';

interface TourModalProps {
  tour: Tour | null;
  onClose: () => void;
  onInquire: (tourTitle: string) => void;
}

export const TourModal: React.FC<TourModalProps> = ({ tour, onClose, onInquire }) => {
  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#002718]/65 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 border border-[#e0e3e0] text-[#181c1a]">
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl">
          <img
            src={tour.image}
            alt={tour.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002718] via-[#002718]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          {/* Details Overlay */}
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="px-3.5 py-1 rounded-full bg-[#133e2b]/90 backdrop-blur-md text-xs font-bold uppercase tracking-wider inline-block mb-2 text-[#bfedd2]">
              {tour.categoryLabel}
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold leading-tight">
              {tour.title}
            </h3>
            <p className="text-xs text-[#e9e2d4] mt-1.5 flex items-center gap-1.5 font-medium">
              <span className="material-symbols-outlined text-xs text-[#e28a3b]">
                route
              </span>
              {tour.route}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#f1f4f1]">
            <div>
              <span className="text-xs text-[#635e53] block">Duration</span>
              <span className="text-sm font-semibold text-[#002718]">{tour.duration}</span>
            </div>
            <div>
              <span className="text-xs text-[#635e53] block">Guest Rating</span>
              <span className="text-sm font-semibold text-[#002718] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#e28a3b]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                {tour.rating.toFixed(1)} ({tour.reviewsCount} reviews)
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-xs text-[#635e53] block">Starting Price</span>
              <span className="text-sm font-bold text-[#002718]">
                ${tour.startingPrice.toLocaleString()} <span className="font-normal text-xs text-[#635e53]">{tour.priceUnit}</span>
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#414943] leading-relaxed">
            {tour.description}
          </p>

          {/* Day by Day Itinerary */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display'] text-xl font-semibold text-[#002718] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#e28a3b] text-xl">
                calendar_month
              </span>
              Day-by-Day Journey Itinerary
            </h4>
            <div className="space-y-3">
              {tour.itinerary.map((item) => (
                <div
                  key={item.day}
                  className="p-4 rounded-2xl bg-[#f7faf6] border border-[#e0e3e0]/80 space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#e28a3b] uppercase tracking-wider">
                    <span>Day {item.day}</span>
                    <span>•</span>
                    <span className="text-[#002718]">{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="space-y-3">
            <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#002718] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#e28a3b] text-xl">
                verified
              </span>
              What's Included in This Journey
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tour.inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#f1f4f1] text-xs text-[#181c1a]">
                  <span className="material-symbols-outlined text-sm text-[#133e2b] shrink-0 mt-0.5">
                    check
                  </span>
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-3 border-t border-[#ecefeb] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#635e53] block">Starting Investment</span>
              <span className="text-2xl font-bold text-[#002718]">
                ${tour.startingPrice.toLocaleString()}
                <span className="text-xs font-normal text-[#635e53] ml-1">
                  {tour.priceUnit}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onInquire(tour.title);
                  onClose();
                }}
                className="flex-1 sm:flex-initial py-3.5 px-7 rounded-full bg-[#002718] text-white hover:bg-[#133e2b] font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Customize This Tour</span>
                <span className="material-symbols-outlined text-sm text-[#e28a3b]">
                  arrow_forward
                </span>
              </button>
              <button
                onClick={onClose}
                className="py-3.5 px-5 rounded-full bg-[#f1f4f1] hover:bg-[#e0e3e0] text-[#181c1a] font-medium text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
