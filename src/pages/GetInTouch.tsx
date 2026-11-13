import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GetInTouchForm } from '../components/GetInTouchForm';
import {
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Car,
  Calendar,
} from 'lucide-react';

export const GetInTouch: React.FC = () => {
  const { language, contact, common } = useLanguage();

  return (
    <>
      <SEO
        title="Get In Touch | Car's Energy Co."
        description="Contact our authorized engineering team for CNG retrofitment, ECU tuning, and cylinder hydro testing. Provide your car model and mobile number for prompt consultation."
        canonicalPath="/get-in-touch"
      />

      {/* Hero / Header Section (Approved Light & Dark Theme) */}
      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 sm:pb-16 border-b border-lightgrey dark:border-darkborder overflow-hidden">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: language === 'as' ? 'যোগাযোগ কৰক' : 'Get In Touch' }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>DIRECT ENQUIRY DESK • RFC CODE NO. 261</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal dark:text-purewhite leading-tight tracking-tight">
              {language === 'as' ? 'যোগাযোগ কৰক' : 'Get In Touch'}
            </h1>

            <p className="text-secondary dark:text-darkmuted text-sm sm:text-base leading-relaxed max-w-2xl">
              {language === 'as'
                ? 'আমাৰ নিৰ্ভৰযোগ্য সেৱা লাভ কৰিবলৈ যোগাযোগ কৰক। আমাৰ সেৱাই নিশ্চিতভাৱে আপোনাৰ প্ৰত্যাশা পূৰণ কৰিব।'
                : 'Contact us to avail our trusted services. Our services will certainly meet your expectations.'}
            </p>
          </div>

          {/* 4 Quick Verification Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">No Email</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Phone & Car Model Only</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">Fast Callback</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Same-Day Review</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">RFC #261</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Govt. Certified Center</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Est. 1998</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">26+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 sm:py-20 bg-offwhite dark:bg-darkbg border-b border-lightgrey dark:border-darkborder">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* The "Get In Touch" Form (7 cols) */}
            <div className="lg:col-span-7">
              <GetInTouchForm />
            </div>

            {/* Assistance & Workshop Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Call & WhatsApp Card */}
              <div className="p-7 bg-purewhite dark:bg-darksurface rounded-2xl border border-[#DFE3E8] dark:border-darkborder shadow-premium space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange">
                  Instant Support
                </span>
                <h3 className="font-heading font-bold text-lg text-charcoal dark:text-purewhite">
                  Prefer Direct Phone or WhatsApp?
                </h3>
                <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                  Call our technical advisors directly or start a quick WhatsApp consultation to discuss your vehicle's CNG fitment, hydro testing, or calibration:
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+919212218180"
                    className="flex-1 py-3 px-4 rounded-lg bg-charcoal dark:bg-darkcard hover:bg-black dark:hover:bg-darkcard/80 text-purewhite text-xs font-heading font-bold flex items-center justify-center gap-2 transition-colors shadow-subtle border border-transparent dark:border-darkborder"
                  >
                    <Phone className="w-4 h-4 text-orange" />
                    <span>+91 92122 18180</span>
                  </a>
                  <a
                    href="https://wa.me/917982824255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-purewhite text-xs font-heading font-bold flex items-center justify-center gap-2 transition-colors shadow-subtle"
                  >
                    <MessageSquare className="w-4 h-4 text-purewhite" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Mundka Hub Card */}
              <div className="p-6 bg-[#EEF1F6] dark:bg-darkcard rounded-2xl border border-[#DFE3E8] dark:border-darkborder space-y-3">
                <div className="flex items-center justify-between">
                  <span className="badge-orange text-[10px] font-bold">Primary Facility</span>
                  <span className="text-xs font-bold text-secondary dark:text-darkmuted uppercase">Mundka</span>
                </div>
                <h4 className="font-heading font-bold text-sm text-charcoal dark:text-purewhite">
                  Mundka Retrofitment & Hydro-Testing Hub
                </h4>
                <div className="space-y-1.5 text-xs text-secondary dark:text-darkmuted">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-orange shrink-0 mt-0.5" />
                    <span>215 & 216/5, Opp. Metro Pillar 536, Rohtak Road, Mundka, New Delhi - 110041</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-secondary dark:text-darkmuted shrink-0" />
                    <span>10:30 AM - 07:00 PM (Wednesday Closed)</span>
                  </div>
                </div>
              </div>

              {/* Paschim Vihar Center Card */}
              <div className="p-6 bg-[#EEF1F6] dark:bg-darkcard rounded-2xl border border-[#DFE3E8] dark:border-darkborder space-y-3">
                <div className="flex items-center justify-between">
                  <span className="badge-tech text-[10px] font-bold">Express Bay</span>
                  <span className="text-xs font-bold text-secondary dark:text-darkmuted uppercase">Paschim Vihar</span>
                </div>
                <h4 className="font-heading font-bold text-sm text-charcoal dark:text-purewhite">
                  Paschim Vihar Express Diagnostics Center
                </h4>
                <div className="space-y-1.5 text-xs text-secondary dark:text-darkmuted">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-orange shrink-0 mt-0.5" />
                    <span>Shop No. 21, C.S.C. A-4, Gole DDA Market, Paschim Vihar, New Delhi - 110063</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-secondary dark:text-darkmuted shrink-0" />
                    <span>10:30 AM - 02:00 PM (Wednesday Closed)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
