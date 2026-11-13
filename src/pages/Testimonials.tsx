import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { aggregateRatingData, testimonialsData } from '../data/testimonialsData';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Award,
  FileCheck,
  ArrowRight,
  Phone,
  Star,
  ExternalLink,
  MapPin,
  Clock,
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEO
        title="Customer Feedback & Ratings | Maa Kamakhya Auto Gas"
        description="Read genuine customer reviews and ratings for Maa Kamakhya Auto Gas in Guwahati. 4.9/5 stars based on 97+ verified reviews on Justdial for CNG kit fitment and servicing."
        canonicalPath="/testimonials"
      />

      {/* Hero / Header Section */}
      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 sm:pb-16 border-b border-lightgrey dark:border-darkborder overflow-hidden">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: language === 'as' ? 'গ্ৰাহকৰ মতামত' : 'Customer Feedback' }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>VERIFIED REVIEWS • 4.9 / 5.0 JUSTDIAL RATING</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal dark:text-purewhite leading-tight tracking-tight">
              {language === 'as' ? 'গ্ৰাহকৰ প্ৰকৃত মতামত আৰু পৰ্যালোচনা' : 'Customer Feedback & Verified Ratings'}
            </h1>

            <p className="text-secondary dark:text-darkmuted text-sm sm:text-base leading-relaxed max-w-2xl">
              {language === 'as'
                ? 'গুৱাহাটীৰ মা কামাখ্যা অটো গেছত চিএনজি আৰু এলপিজি কিট সংস্থাপন কৰোৱা বাহন মালিকসকলৰ প্ৰকৃত মতামত আৰু অভিজ্ঞতা।'
                : 'Read verified experiences from vehicle owners across Guwahati who chose Maa Kamakhya Auto Gas for sequential kit installation, tuning, and gas maintenance.'}
            </p>
          </div>

          {/* 4 Verified Credential Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">4.9 / 5.0 ★</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">97+ Justdial Reviews</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Est. 2022</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Guwahati Workshop</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Open 7 Days</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">09:00 AM - 07:30 PM</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">100% Genuine</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Verified Customer Words</span>
            </div>
          </div>
        </div>
      </section>

      {/* Aggregate Rating Banner */}
      <section className="py-8 bg-purewhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-offwhite dark:bg-darkcard border border-lightgrey dark:border-darkborder">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-orange flex flex-col items-center justify-center text-purewhite shadow-md">
                <span className="text-xl font-heading font-extrabold leading-none">4.9</span>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-purewhite text-purewhite" />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-heading font-bold text-charcoal dark:text-purewhite">
                  {aggregateRatingData.platform}
                </h2>
                <p className="text-xs text-secondary dark:text-darkmuted">
                  Overall score based on {aggregateRatingData.totalReviews}+ verified local customer ratings
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
              {aggregateRatingData.highlights.map((h, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <span className="block font-heading font-bold text-sm text-orange">{h.score}</span>
                  <span className="text-[10px] text-secondary dark:text-darkmuted">
                    {language === 'as' ? h.labelAs : h.labelEn}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={aggregateRatingData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purewhite dark:bg-darkbg border border-lightgrey dark:border-darkborder hover:border-orange text-charcoal dark:text-purewhite hover:text-orange text-xs font-heading font-bold transition-colors whitespace-nowrap"
            >
              <span>View On Justdial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Feedback & Reviews Section */}
      <section className="py-16 bg-offwhite dark:bg-darkbg border-b border-lightgrey dark:border-darkborder">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Verified Customer Review Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="badge-orange text-xs">Customer Experiences</span>
                  <h2 className="text-2xl font-heading font-extrabold text-charcoal dark:text-purewhite mt-1">
                    What Our Customers Say
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {testimonialsData.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 bg-purewhite dark:bg-darksurface rounded-2xl border border-lightgrey dark:border-darkborder shadow-subtle space-y-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading font-bold text-sm text-charcoal dark:text-purewhite">
                            {item.name}
                          </h4>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                            Verified Customer
                          </span>
                        </div>
                        <p className="text-xs text-secondary dark:text-darkmuted">
                          {item.vehicle} • {item.location}
                        </p>
                      </div>

                      <div className="flex gap-0.5 text-amber-400 shrink-0">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-orange bg-orange-light/50 dark:bg-orange/10 px-2.5 py-1 rounded inline-block">
                      {language === 'as' ? item.serviceReceivedAs : item.serviceReceivedEn}
                    </div>

                    <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted leading-relaxed italic">
                      "{language === 'as' ? item.quoteAs : item.quoteEn}"
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-lightgrey/60 dark:border-darkborder text-[11px] text-secondary dark:text-darkmuted">
                      <span>Source: {item.source || 'Justdial Review'}</span>
                      <span className="text-orange font-bold">Maa Kamakhya Auto Gas, Garchuk</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quality Commitment Notice */}
              <div className="bg-purewhite dark:bg-darksurface rounded-2xl border border-lightgrey dark:border-darkborder p-6 shadow-subtle space-y-3">
                <span className="badge-tech text-xs">Authenticity Policy</span>
                <h3 className="font-heading font-bold text-base text-charcoal dark:text-purewhite">
                  Zero Fake Reviews. Genuine Craftsmanship.
                </h3>
                <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                  We take pride in transparent automotive gas engineering. Every vehicle entrusted to us undergoes computerized calibration and safe leakage inspection before customer delivery.
                </p>
              </div>
            </div>

            {/* Right 5 Columns: Submit Review / Contact Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Technical Desk & Appointment */}
              <div className="bg-purewhite dark:bg-darksurface rounded-2xl border border-lightgrey dark:border-darkborder p-7 shadow-premium space-y-5">
                <span className="badge-orange text-xs">Workshop Assistance</span>
                <h3 className="text-lg font-heading font-bold text-charcoal dark:text-purewhite">
                  Have Questions or Feedback?
                </h3>
                <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                  Whether you wish to enquire about your car model’s CNG compatibility, check EMI financing options, or leave feedback for a recent service, our team is ready to assist.
                </p>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/contact"
                    className="w-full py-3 px-5 rounded-lg bg-orange hover:bg-orange-hover text-purewhite font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Submit Enquiry or Feedback</span>
                  </Link>

                  <Link
                    to="/book-appointment"
                    className="w-full py-3 px-5 rounded-lg bg-purewhite dark:bg-darkcard hover:bg-lightgrey dark:hover:bg-darkbg text-charcoal dark:text-purewhite border border-bordergrey dark:border-darkborder font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <Calendar className="w-4 h-4 text-orange" />
                    <span>Book Workshop Inspection</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-lightgrey/80 dark:border-darkborder text-[11px] text-secondary dark:text-darkmuted space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-orange shrink-0 mt-0.5" />
                    <span>Shop No. 7, Opposite Nezone Steel, Near Kumar Resorts, NH-37, Garchuk, Guwahati - 781035</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-secondary dark:text-darkmuted shrink-0" />
                    <span>09:00 AM - 07:30 PM (Open All 7 Days)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-secondary dark:text-darkmuted shrink-0" />
                    <span>+91 9678******</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Review Submission */}
              <div className="bg-purewhite dark:bg-darksurface rounded-2xl border border-lightgrey dark:border-darkborder p-7 shadow-subtle space-y-4">
                <span className="badge-tech text-xs">Share Your Experience</span>
                <h4 className="font-heading font-bold text-base text-charcoal dark:text-purewhite">
                  Got Your Car Serviced With Us?
                </h4>
                <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                  Send your feedback directly to our workshop manager via WhatsApp or leave a review on Justdial:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/919678******"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-purewhite text-xs font-heading font-bold flex items-center justify-center gap-2 transition-colors shadow-subtle"
                  >
                    <MessageSquare className="w-4 h-4 text-purewhite" />
                    <span>Send on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919678******"
                    className="flex-1 py-3 px-4 rounded-lg bg-charcoal dark:bg-darkcard hover:bg-black text-purewhite text-xs font-heading font-bold flex items-center justify-center gap-2 transition-colors shadow-subtle border border-transparent dark:border-darkborder"
                  >
                    <Phone className="w-4 h-4 text-orange" />
                    <span>Call Direct</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
