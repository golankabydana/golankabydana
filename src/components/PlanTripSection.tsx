import React, { useState, useEffect } from 'react';
import { InquirySuccessModal } from './InquirySuccessModal';

interface PlanTripSectionProps {
  prefilledHighlight?: string;
}

export const PlanTripSection: React.FC<PlanTripSectionProps> = ({
  prefilledHighlight
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelers, setTravelers] = useState('2 Adults (Couple)');
  const [travelDates, setTravelDates] = useState('');
  const [accommodation, setAccommodation] = useState(
    'Ultra-Bespoke Luxury Villas & Relais'
  );
  const [notes, setNotes] = useState('');

  const [interests, setInterests] = useState<string[]>([
    'Wildlife Safari',
    'Scenic Trains',
    'Tea Plantations',
    'Beach & Whales'
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any | null>(null);

  useEffect(() => {
    if (prefilledHighlight) {
      setNotes((prev) =>
        prev
          ? `${prev}\nInterested in: ${prefilledHighlight}`
          : `Interested in: ${prefilledHighlight}`
      );
    }
  }, [prefilledHighlight]);

  const allInterests = [
    'Wildlife Safari',
    'Scenic Trains',
    'Tea Plantations',
    'Ancient Temples',
    'Beach & Whales',
    'Ayurveda & Spa'
  ];

  const toggleInterest = (item: string) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ref = `GL-2025-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedData({
        referenceId: ref,
        fullName: fullName || 'Valued Traveler',
        email,
        phone,
        travelers,
        travelDates,
        accommodation,
        interests,
        notes
      });
    }, 1000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Dana! I am planning a bespoke journey to Sri Lanka for ${travelers} around ${travelDates || 'upcoming months'}. Looking forward to connecting!`
    );
    window.open(`https://wa.me/94764208840?text=${text}`, '_blank');
  };

  return (
    <section className="w-full py-24 bg-[#f1f4f1]" id="plan-trip">
      <div className="max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#e0e3e0]/80">
            <div className="space-y-3 mb-8">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-widest text-[#e28a3b]">
                Bespoke Inquiries
              </span>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#002718] tracking-tight font-semibold leading-tight text-balance">
                Design Your Custom Itinerary
              </h2>
              <p className="text-xs sm:text-sm text-[#414943] leading-relaxed">
                Share your ideas, wishlists, and dates. Dana will craft a
                personalized day-by-day itinerary proposal within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#181c1a]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 rounded-xl bg-[#f1f4f1] text-[#181c1a] placeholder:text-[#717973] focus:outline-none focus:bg-[#ecefeb] transition-colors text-sm border border-transparent focus:border-[#133e2b]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#181c1a]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleanor@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#f1f4f1] text-[#181c1a] placeholder:text-[#717973] focus:outline-none focus:bg-[#ecefeb] transition-colors text-sm border border-transparent focus:border-[#133e2b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#181c1a]">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7911 123456"
                    className="w-full px-4 py-3 rounded-xl bg-[#f1f4f1] text-[#181c1a] placeholder:text-[#717973] focus:outline-none focus:bg-[#ecefeb] transition-colors text-sm border border-transparent focus:border-[#133e2b]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#181c1a]">
                    Number of Travelers
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f1f4f1] text-[#181c1a] focus:outline-none focus:bg-[#ecefeb] transition-colors text-sm cursor-pointer border border-transparent focus:border-[#133e2b]"
                  >
                    <option>2 Adults (Couple)</option>
                    <option>Solo Traveler</option>
                    <option>Family with Children (3-5)</option>
                    <option>Group of Friends (6+)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#181c1a]">
                    Approximate Travel Dates
                  </label>
                  <input
                    type="text"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    placeholder="e.g. Mid November, 10 Days"
                    className="w-full px-4 py-3 rounded-xl bg-[#f1f4f1] text-[#181c1a] placeholder:text-[#717973] focus:outline-none focus:bg-[#ecefeb] transition-colors text-sm border border-transparent focus:border-[#133e2b]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#181c1a]">
                    Preferred Accommodation
                  </label>
                  <select
                    value={accommodation}
                    onChange={(e) => setAccommodation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f1f4f1] text-[#181c1a] focus:outline-none focus:bg-[#ecefeb] transition-colors text-sm cursor-pointer border border-transparent focus:border-[#133e2b]"
                  >
                    <option>Ultra-Bespoke Luxury Villas & Relais</option>
                    <option>Colonial Tea Bungalows & Heritage</option>
                    <option>Eclectic Boutique & Safari Camps</option>
                    <option>Balanced 4-Star Comfort</option>
                  </select>
                </div>
              </div>

              {/* Travel Interests Checklist */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#181c1a]">
                  Interests & Desired Highlights (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  {allInterests.map((interest) => {
                    const isChecked = interests.includes(interest);
                    return (
                      <label
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl cursor-pointer transition-colors text-xs font-medium border ${
                          isChecked
                            ? 'bg-[#e9e2d4]/50 border-[#133e2b]/30 text-[#002718]'
                            : 'bg-[#f1f4f1] border-transparent text-[#414943] hover:bg-[#ecefeb]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="rounded accent-[#133e2b] cursor-pointer"
                        />
                        <span>{interest}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#181c1a]">
                  Tell Dana About Your Ideal Journey
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special milestones (honeymoon, anniversary), pace preference, dietary requirements, or specific bucket-list items..."
                  className="w-full px-4 py-3 rounded-xl bg-[#f1f4f1] text-[#181c1a] placeholder:text-[#717973] focus:outline-none focus:bg-[#ecefeb] transition-colors text-sm border border-transparent focus:border-[#133e2b]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#002718] text-white hover:bg-[#133e2b] transition-all font-medium text-sm shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-lg">
                      progress_activity
                    </span>
                    <span>Sending to Dana...</span>
                  </>
                ) : (
                  <>
                    <span>Send My Custom Journey Inquiry</span>
                    <span className="material-symbols-outlined text-lg text-[#e28a3b]">
                      send
                    </span>
                  </>
                )}
              </button>

              <p className="text-xs text-center text-[#717973]">
                🔒 No obligation. We respect your privacy and never share your details.
              </p>
            </form>
          </div>

          {/* Direct Contact Sidebar & Island Map Insight */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-8 shadow-sm space-y-6 border border-[#e0e3e0]/80">
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#002718]">
                Direct Concierge Access
              </h3>
              <p className="text-sm text-[#414943] leading-relaxed">
                Prefer a real-time conversation? Dana and her concierge team are reachable across WhatsApp and email.
              </p>
              <div className="space-y-4">
                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl bg-[#f1f4f1] hover:bg-[#ecefeb] transition-colors text-left cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#133e2b] text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl text-[#e28a3b]">
                      chat
                    </span>
                  </div>
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#e28a3b] uppercase block">
                      WhatsApp Direct
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-base text-[#002718] font-bold">
                      +94 76 420 8840
                    </span>
                  </div>
                </button>

                {/* Email */}
                <a
                  href="mailto:hello@golankabydana.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#f1f4f1] hover:bg-[#ecefeb] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#133e2b] text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl text-[#e28a3b]">
                      mail
                    </span>
                  </div>
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#e28a3b] uppercase block">
                      Private Concierge Email
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-base text-[#002718] font-bold">
                      hello@golankabydana.com
                    </span>
                  </div>
                </a>

                {/* Time zone status */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#e9e2d4]/40 border border-[#e0e3e0]">
                  <div className="w-12 h-12 rounded-xl bg-[#e9e2d4] text-[#002718] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      schedule
                    </span>
                  </div>
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#635e53] uppercase block">
                      Sri Lanka Standard Time
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-sm text-[#002718] font-bold flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#133e2b] animate-pulse" />
                      UTC +5:30 (Online & Active)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ceylon Map Sanctuary View */}
            <div className="rounded-3xl overflow-hidden bg-white p-6 shadow-sm space-y-4 border border-[#e0e3e0]/80">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#e28a3b] uppercase block">
                    Island Route Hub
                  </span>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-base text-[#002718] font-bold">
                    Galle & Colombo Sanctuaries
                  </h4>
                </div>
                <span className="material-symbols-outlined text-[#002718] text-2xl">
                  explore
                </span>
              </div>
              <div
                className="w-full h-48 rounded-2xl bg-cover bg-center overflow-hidden relative shadow-inner"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgQqMQQXmmsGlMpVKKuOtO8LFC6JtvvQIy0RpWDg1dgTh_WcaERd55JZl7bXonx0bQ2vP294Bzw2TUFeKrYSPGeqNXM4VorSq1GQMKcW3Vaghlzlg6sknKqxIRawl8RqA9UkZNH_6gYPFD23khTjl8mRewJk62aZy_YGFuKux3eChzyp7RAysJzUeuH5GCFYkZt5n6ABd3UGufOq8rdgY_TVffqVQDrfE3AEqMuBQ')`
                }}
              >
                <div className="absolute inset-0 bg-[#002718]/20" />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#002718] flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-xs text-[#e28a3b]">
                    pin_drop
                  </span>
                  Galle Fort Concierge Office
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <InquirySuccessModal
        data={submittedData}
        onClose={() => setSubmittedData(null)}
        onWhatsAppDirect={handleWhatsAppDirect}
      />
    </section>
  );
};
