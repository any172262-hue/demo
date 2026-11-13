import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AppointmentForm } from '../components/AppointmentForm';
import {
  Calendar,
  Clock,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertCircle,
} from 'lucide-react';

export const BookAppointment: React.FC = () => {
  const { language, contact, common } = useLanguage();

  return (
    <>
      <SEO
        title={contact.appointmentTitle}
        description={contact.appointmentSubtitle}
        canonicalPath="/book-appointment"
      />

      {/* Hero / Header Section (Approved Light Theme & Dark Theme) */}
      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 sm:pb-16 border-b border-lightgrey dark:border-darkborder overflow-hidden transition-colors">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: contact.appointmentTitle }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-orange" />
              <span>OFFICIAL WORKSHOP BOOKING • RFC CODE NO. 261</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal dark:text-purewhite leading-tight tracking-tight">
              {contact.appointmentTitle}
            </h1>

            <p className="text-secondary dark:text-darkmuted text-sm sm:text-base leading-relaxed max-w-2xl">
              {contact.appointmentSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Zero Fee</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Online Pre-Booking</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">Fast Confirm</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Same-Day Tech Review</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">OBD-II Scan</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Baseline Health Check</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">2 Workshops</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Mundka & Paschim Vihar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Guidelines Section (Properly Managed 2-Column Balanced Layout) */}
      <section className="py-16 sm:py-20 bg-offwhite dark:bg-darkbg transition-colors">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

            {/* Checklist & Instructions Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* What to Bring Box */}
              <div className="p-7 bg-purewhite dark:bg-darkcard rounded-2xl border border-[#DFE3E8] dark:border-darkborder shadow-premium space-y-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-lightgrey dark:border-darkborder">
                  <FileText className="w-5 h-5 text-orange" />
                  <h3 className="font-heading font-bold text-base text-charcoal dark:text-purewhite">
                    What to Bring for Your Inspection
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs text-secondary dark:text-darkmuted">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-charcoal dark:text-purewhite">Vehicle Registration Certificate (RC):</strong> Original or clear digital copy for model, chassis number, and engine validation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-charcoal dark:text-purewhite">Minimum Quarter Tank Petrol:</strong> Essential for computerized baseline petrol fuel trim analysis and cold-start mapping.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-charcoal dark:text-purewhite">Clear Boot Space:</strong> Ensure luggage is removed so technicians can safely inspect the vehicle floor pan and cylinder brackets.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-charcoal dark:text-purewhite">Previous Hydro-Test Certificate:</strong> (If booking cylinder testing or 3-year mandatory re-certification).
                    </span>
                  </li>
                </ul>
              </div>

              {/* Booking Process Explanation */}
              <div className="p-7 bg-[#EEF1F6] dark:bg-darkcard rounded-2xl border border-[#DFE3E8] dark:border-darkborder space-y-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange">
                  Transparent Protocol
                </span>
                <h4 className="font-heading font-bold text-sm text-charcoal dark:text-purewhite">
                  How Your Appointment is Processed
                </h4>
                <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                  Upon submitting this technical request, our workshop team reviews vehicle compatibility against Transport Department AIS-024 / CMVR approval lists. We will contact you via WhatsApp or phone within working hours to confirm your scheduled diagnostic slot.
                </p>
              </div>

              {/* Direct Hotline Box */}
              <div className="p-7 bg-purewhite dark:bg-darkcard rounded-2xl border border-[#DFE3E8] dark:border-darkborder shadow-subtle space-y-3">
                <h4 className="font-heading font-bold text-sm text-charcoal dark:text-purewhite">
                  Prefer Direct Phone Confirmation?
                </h4>
                <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                  You can directly speak with our technical advisors for instant booking or urgent queries:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+919212218180"
                    className="flex-1 py-2.5 px-4 rounded-lg bg-charcoal dark:bg-darksurface hover:bg-black dark:hover:bg-darkborder text-purewhite text-xs font-heading font-bold flex items-center justify-center gap-2 transition-colors border border-transparent dark:border-darkborder"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange" />
                    <span>+91 92122 18180</span>
                  </a>
                  <a
                    href="https://wa.me/917982824255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-purewhite text-xs font-heading font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-purewhite" />
                    <span>WhatsApp</span>
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
