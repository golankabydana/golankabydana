import React from 'react';

interface InquiryData {
  referenceId: string;
  fullName: string;
  email: string;
  phone: string;
  travelers: string;
  travelDates: string;
  accommodation: string;
  interests: string[];
  notes: string;
}

interface InquirySuccessModalProps {
  data: InquiryData | null;
  onClose: () => void;
  onWhatsAppDirect: () => void;
}

export const InquirySuccessModal: React.FC<InquirySuccessModalProps> = ({
  data,
  onClose,
  onWhatsAppDirect
}) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#002718]/70 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 border border-[#e0e3e0] text-[#181c1a]">
        {/* Header Icon */}
        <div className="text-center space-y-3 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#133e2b] text-[#bfedd2] mx-auto flex items-center justify-center shadow-lg">
            <span
              className="material-symbols-outlined text-3xl text-[#e28a3b]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </div>
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#e28a3b]">
            Inquiry Received • Ref #{data.referenceId}
          </span>
          <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold text-[#002718]">
            Ayubowan, {data.fullName}!
          </h3>
          <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
            Dana has received your journey inquiry. She is personally crafting
            your bespoke day-by-day itinerary proposal and will respond within 24
            hours.
          </p>
        </div>

        {/* Inquiry Summary Box */}
        <div className="p-4 rounded-2xl bg-[#f1f4f1] space-y-2.5 text-xs text-[#414943] mb-6">
          <div className="flex justify-between py-1 border-b border-[#e0e3e0]">
            <span className="text-[#635e53]">Estimated Dates:</span>
            <span className="font-semibold text-[#002718]">{data.travelDates || 'Flexible'}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#e0e3e0]">
            <span className="text-[#635e53]">Travelers:</span>
            <span className="font-semibold text-[#002718]">{data.travelers}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#e0e3e0]">
            <span className="text-[#635e53]">Stay Tier:</span>
            <span className="font-semibold text-[#002718]">{data.accommodation}</span>
          </div>
          {data.interests.length > 0 && (
            <div className="py-1">
              <span className="text-[#635e53] block mb-1">Selected Highlights:</span>
              <div className="flex flex-wrap gap-1">
                {data.interests.map((int, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-full bg-white text-[#002718] text-[10px] font-semibold"
                  >
                    {int}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onWhatsAppDirect}
            className="w-full py-3.5 px-6 rounded-full bg-[#133e2b] text-white hover:bg-[#002718] font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-[#e28a3b]">
              chat
            </span>
            <span>Connect with Dana on WhatsApp</span>
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 px-6 rounded-full bg-[#f1f4f1] hover:bg-[#e0e3e0] text-[#181c1a] font-medium text-xs transition-colors cursor-pointer"
          >
            Back to Explore
          </button>
        </div>
      </div>
    </div>
  );
};
