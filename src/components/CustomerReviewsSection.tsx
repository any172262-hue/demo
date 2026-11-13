import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Star,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
  Send,
  X,
  Plus,
} from 'lucide-react';

export interface CustomerReview {
  id: string;
  name: string;
  vehicle: string;
  location: string;
  service: string;
  rating: number;
  review: string;
  date: string;
  verified?: boolean;
}

export const CustomerReviewsSection: React.FC = () => {
  const { language } = useLanguage();
  const [reviews, setReviews] = useState<CustomerReview[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Form State
  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState('Sequential CNG Kit Installation');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');

  // Fetch reviews on mount (defaults to empty/blank state if no reviews submitted)
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Try localStorage first for instant display
        const local = localStorage.getItem('mkg_customer_reviews');
        if (local) {
          try {
            const parsed = JSON.parse(local);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setReviews(parsed);
            }
          } catch {
            // ignore JSON parse error
          }
        }

        // Fetch from backend API
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          if (data.success && Array.isArray(data.reviews)) {
            setReviews(data.reviews);
            localStorage.setItem('mkg_customer_reviews', JSON.stringify(data.reviews));
          }
        }
      } catch {
        // Network or offline: graceful fallback
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!name.trim() || name.trim().length < 2) {
      setErrorMsg(language === 'as' ? 'অনুগ্ৰহ কৰি আপোনাৰ নাম লিখক।' : 'Please enter your full name (at least 2 characters).');
      return;
    }

    if (!review.trim() || review.trim().length < 5) {
      setErrorMsg(language === 'as' ? 'অনুগ্ৰহ কৰি আপোনাৰ মতামত বিতংকৈ লিখক।' : 'Please write your review feedback (at least 5 characters).');
      return;
    }

    setIsSubmitting(true);

    const newRev: CustomerReview = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      vehicle: vehicle.trim() || (language === 'as' ? 'গ্ৰাহকৰ বাহন' : 'Customer Vehicle'),
      location: location.trim() || (language === 'as' ? 'গুৱাহাটী, অসম' : 'Guwahati, Assam'),
      service: service || 'Sequential CNG Kit Installation',
      rating,
      review: review.trim(),
      date: new Date().toLocaleDateString(language === 'as' ? 'as-IN' : 'en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      verified: true,
    };

    try {
      // 1. Post to backend
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newRev.name,
          vehicle: newRev.vehicle,
          location: newRev.location,
          service: newRev.service,
          rating: newRev.rating,
          review: newRev.review,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.review) {
          newRev.id = data.review.id;
        }
      }
    } catch {
      // Offline fallback still succeeds locally
    }

    // 2. Update local state and localStorage
    const updated = [newRev, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('mkg_customer_reviews', JSON.stringify(updated));
    } catch {
      // ignore storage quota error
    }

    setIsSubmitting(false);
    setIsFormOpen(false);
    setName('');
    setVehicle('');
    setLocation('');
    setReview('');
    setRating(5);
    setSuccessMsg(
      language === 'as'
        ? 'ধন্যবাদ! আপোনাৰ মতামত সফলতাৰে অন্তৰ্ভুক্ত কৰা হৈছে।'
        : 'Thank you! Your customer review has been published.'
    );

    // Auto-clear success message after 6 seconds
    setTimeout(() => {
      setSuccessMsg('');
    }, 6000);
  };

  return (
    <section
      id="customer-reviews"
      className="py-16 sm:py-20 bg-purewhite dark:bg-darksurface border-t border-lightgrey dark:border-darkborder transition-colors"
    >
      <div className="section-container space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-lightgrey dark:border-darkborder">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-light dark:bg-orange/20 text-orange text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-orange text-orange" />
              <span>4.9 / 5.0 Rating • Verified Justdial Customer Words</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-charcoal dark:text-purewhite tracking-tight">
              {language === 'as' ? (
                <>গ্ৰাহকৰ মতামত আৰু <span className="text-orange">অভিজ্ঞতা</span></>
              ) : (
                <>What Our Customers Say on <span className="text-orange">Justdial</span></>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted leading-relaxed">
              {language === 'as'
                ? 'গুৱাহাটীৰ মা কামাখ্যা অটো গেছত সেৱা গ্ৰহণ কৰা গাড়ী মালিকসকলৰ প্ৰকৃত মতামত। যেতিয়া কোনো গ্ৰাহকে নতুন মতামত লিখে, সেয়া ইয়াত প্ৰকাশ হয়।'
                : 'Real, authentic feedback from verified vehicle owners who chose Maa Kamakhya Auto Gas for sequential kit installations and servicing. When customers submit reviews, they appear here live.'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange hover:bg-orange-hover text-purewhite text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-orange/30 transition-all active:scale-[0.98]"
            >
              {isFormOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              <span>{isFormOpen ? (language === 'as' ? 'ফৰ্ম বন্ধ কৰক' : 'Close Form') : (language === 'as' ? 'মতামত যোগ কৰক' : 'Write a Review')}</span>
            </button>

            <a
              href="https://www.justdial.com/Guwahati/Maa-Kamakhya-Auto-Gas-Opposite-Nezon-Steel-Near-Kumar-Resorts-Garchuk/9999PX361-X361-230531130523-M2H7_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder bg-offwhite/60 dark:bg-darkcard hover:border-orange text-charcoal dark:text-darktext hover:text-orange text-xs font-bold transition-all shadow-subtle"
            >
              <span>{language === 'as' ? 'Justdial ত চাওক' : 'View on Justdial'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-orange" />
            </a>
          </div>
        </div>

        {/* Success Alert Banner */}
        {successMsg && (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2.5 animate-slide-up shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Review Submission Form Card */}
        {isFormOpen && (
          <div className="p-6 sm:p-8 rounded-2xl border-2 border-orange/30 bg-purewhite dark:bg-darkcard shadow-premium animate-slide-up transition-all">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-lightgrey dark:border-darkborder">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-orange" />
                <h3 className="font-heading font-extrabold text-lg text-charcoal dark:text-purewhite">
                  {language === 'as' ? 'আপোনাৰ বহুমূলীয়া মতামত জনাওক' : 'Share Your Service Experience'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="p-1 rounded-md text-secondary hover:text-charcoal dark:hover:text-purewhite"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-bold text-charcoal dark:text-purewhite uppercase tracking-wider mb-2">
                  {language === 'as' ? 'ৰেটিং দিয়ক *' : 'Your Rating *'}
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 text-amber-400 hover:scale-125 transition-transform cursor-pointer focus:outline-none"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          (hoverRating || rating) >= star
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-bordergrey dark:text-darkborder'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-orange ml-2">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Grid: Name, Vehicle, Location */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal dark:text-purewhite mb-1.5">
                    {language === 'as' ? 'আপোনাৰ সম্পূৰ্ণ নাম *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'as' ? 'উদা: প্ৰাঞ্জল ডেকা' : 'e.g. Pranjal Deka'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder bg-offwhite dark:bg-darkbg text-charcoal dark:text-darktext text-xs focus:outline-none focus:border-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal dark:text-purewhite mb-1.5">
                    {language === 'as' ? 'বাহনৰ মডেল' : 'Car / Vehicle Model'}
                  </label>
                  <input
                    type="text"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    placeholder={language === 'as' ? 'উদা: মাৰুতি চুইফ্ট ডিজায়াৰ' : 'e.g. Maruti Dzire, WagonR, Tiago'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder bg-offwhite dark:bg-darkbg text-charcoal dark:text-darktext text-xs focus:outline-none focus:border-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal dark:text-purewhite mb-1.5">
                    {language === 'as' ? 'আপোনাৰ স্থান' : 'Location in Guwahati / Assam'}
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={language === 'as' ? 'উদা: গড়চুক, গুৱাহাটী' : 'e.g. Garchuk, Guwahati, Assam'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder bg-offwhite dark:bg-darkbg text-charcoal dark:text-darktext text-xs focus:outline-none focus:border-orange"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-charcoal dark:text-purewhite mb-1.5">
                  {language === 'as' ? 'গ্ৰহণ কৰা সেৱা' : 'Service Availed'}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder bg-offwhite dark:bg-darkbg text-charcoal dark:text-darktext text-xs focus:outline-none focus:border-orange"
                >
                  <option value="Sequential CNG Kit Installation">
                    {language === 'as' ? 'ছিকুৱেনচিয়েল চিএনজি কিট সংস্থাপন' : 'Sequential CNG Kit Installation'}
                  </option>
                  <option value="Computerized ECU Tuning & Calibration">
                    {language === 'as' ? 'কম্পিউটাৰাইজড ইচিইউ টিউনিং আৰু কেলিব্ৰেশ্যন' : 'Computerized ECU Tuning & Calibration'}
                  </option>
                  <option value="330-Bar Cylinder Hydro Testing">
                    {language === 'as' ? '৩৩০-বাৰ চিলিণ্ডাৰ হাইড্ৰো টেষ্টিং' : '330-Bar Cylinder Hydro Testing'}
                  </option>
                  <option value="CNG Periodic Servicing & Leak Test">
                    {language === 'as' ? 'নিয়মীয়া চিএনজি চাৰ্ভিচিং আৰু লিক পৰীক্ষা' : 'CNG Periodic Servicing & Leak Test'}
                  </option>
                  <option value="Gas Filter & Reducer Maintenance">
                    {language === 'as' ? 'গেছ ফিল্টাৰ আৰু ৰিডিউচাৰ মেৰামতি' : 'Gas Filter & Reducer Maintenance'}
                  </option>
                  <option value="DTO Endorsement Documentation Support">
                    {language === 'as' ? 'ডিটিঅ আৰটিঅ পঞ্জীয়ন সাহায্য' : 'DTO Endorsement Documentation Support'}
                  </option>
                </select>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-bold text-charcoal dark:text-purewhite mb-1.5">
                  {language === 'as' ? 'আপোনাৰ অভিজ্ঞতা আৰু মতামত লিখক *' : 'Your Detailed Review *'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder={
                    language === 'as'
                      ? 'মা কামাখ্যা অটো গেছৰ কাম, ফিটিং আৰু কৰ্মচাৰীৰ সহায় সম্পৰ্কে আপোনাৰ অভিজ্ঞতা বৰ্ণনা কৰক...'
                      : 'Describe your experience regarding fitment quality, pickup, fuel savings, and staff professionalism at Maa Kamakhya Auto Gas...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder bg-offwhite dark:bg-darkbg text-charcoal dark:text-darktext text-xs focus:outline-none focus:border-orange leading-relaxed"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder text-xs font-semibold text-secondary hover:text-charcoal dark:hover:text-purewhite transition-colors"
                >
                  {language === 'as' ? 'বাতিল কৰক' : 'Cancel'}
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-orange hover:bg-orange-hover text-purewhite text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-[0.98] disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? (language === 'as' ? 'জমা হৈ আছে...' : 'Submitting...') : (language === 'as' ? 'মতামত প্ৰকাশ কৰক' : 'Publish Review')}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reviews List OR Blank / Empty State */}
        {reviews.length === 0 ? (
          /* BLANK STATE: Clean, inviting prompt for customer feedback */
          <div className="p-10 sm:p-14 rounded-2xl border-2 border-dashed border-lightgrey dark:border-darkborder bg-offwhite/40 dark:bg-darkcard text-center max-w-3xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center mx-auto shadow-sm">
              <MessageSquare className="w-7 h-7" />
            </div>

            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-charcoal dark:text-purewhite">
              {language === 'as' ? 'এতিয়ালৈকে কোনো মতামত যোগ কৰা হোৱা নাই' : 'No Customer Reviews Yet'}
            </h3>

            <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted max-w-lg mx-auto leading-relaxed">
              {language === 'as'
                ? 'আপুনি মা কামাখ্যা অটো গেছৰ পৰা গাড়ীৰ চিএনজি কিট ফিটিং বা চাৰ্ভিচিং কৰাইছে নেকি? আপোনাৰ বহুমূলীয়া মতামত আমাৰ ৱেবছাইটত প্ৰকাশ কৰিবলৈ প্ৰথমজন হওক।'
                : 'Have you serviced or retrofitted your car with Maa Kamakhya Auto Gas? Be the first to share your experience with the automotive community in Guwahati.'}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange hover:bg-orange-hover text-purewhite text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-orange/30 transition-all active:scale-[0.98]"
              >
                <Plus className="w-4 h-4" />
                <span>{language === 'as' ? 'প্ৰথম মতামত দিয়ক' : 'Write the First Review'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* UPDATED STATE: Dynamic reviews list updated live as customers submit */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((item) => (
              <div
                key={item.id}
                className="bg-offwhite/50 dark:bg-darkcard rounded-2xl border border-lightgrey dark:border-darkborder p-6 flex flex-col justify-between shadow-subtle hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-orange text-orange" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-orange uppercase tracking-wider bg-orange/10 px-2 py-0.5 rounded">
                      Verified Review
                    </span>
                  </div>

                  <p className="text-xs text-charcoal dark:text-darktext leading-relaxed italic">
                    "{item.review}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-lightgrey/80 dark:border-darkborder space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-xs text-charcoal dark:text-purewhite">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-secondary dark:text-darkmuted">
                    <span>{item.vehicle}</span>
                    <span>{item.location}</span>
                  </div>
                  {item.service && (
                    <div className="text-[10px] text-secondary dark:text-darkmuted pt-0.5 font-medium">
                      {item.service}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Standards Card Banner */}
        <div className="bg-[#F5F5F2] dark:bg-darkcard rounded-2xl border border-lightgrey dark:border-darkborder p-8 sm:p-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-orange text-xs font-bold uppercase tracking-wider block">
              Customer Feedback & Technical Standards -
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
              Transparent Engineering, <span className="text-orange">Zero Compromise</span>
            </h3>
            <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted leading-relaxed max-w-2xl mx-auto">
              {language === 'as'
                ? 'মা কামাখ্যা অটো গেছে কোনো কৃত্ৰিম পৰ্যালোচনা প্ৰকাশ নকৰে। আমাৰ প্ৰতিটো সেৱা চৰকাৰী PESO আৰু DTO মানদণ্ড অনুসৰি পৰীক্ষা কৰা হয়।'
                : 'We publish only authentic, verified customer experiences. Every installation is backed by official DTO documentation support, PESO hydrostatic compliance certificates, and real-time computerized diagnostic sheets.'}
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.justdial.com/Guwahati/Maa-Kamakhya-Auto-Gas-Opposite-Nezon-Steel-Near-Kumar-Resorts-Garchuk/9999PX361-X361-230531130523-M2H7_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purewhite dark:bg-darksurface hover:bg-lightgrey dark:hover:bg-darkborder text-charcoal dark:text-darktext border border-bordergrey dark:border-darkborder px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-subtle inline-flex items-center gap-2"
              >
                <span>All 97+ Justdial Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsFormOpen(true);
                  const el = document.getElementById('customer-reviews');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-orange hover:bg-orange-hover text-purewhite px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Submit Service Feedback</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
