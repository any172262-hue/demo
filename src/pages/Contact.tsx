import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GetInTouchForm } from '../components/GetInTouchForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Navigation,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { language, contact, common } = useLanguage();

  return (
    <>
      <SEO
        title={contact.title}
        description={contact.subtitle}
        canonicalPath="/contact"
      />

      {/* Hero / Header Section (Approved Light Theme & Dark Theme) */}
      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 sm:pb-16 border-b border-lightgrey dark:border-darkborder overflow-hidden transition-colors">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: common.nav.contact }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <Phone className="w-4 h-4 text-orange" />
              <span>DIRECT WORKSHOP HOTLINE • GUWAHATI RETROFITMENT FACILITY</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal dark:text-purewhite leading-tight tracking-tight">
              {contact.title}
            </h1>

            <p className="text-secondary dark:text-darkmuted text-sm sm:text-base leading-relaxed max-w-2xl">
              {contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Garchuk Hub</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">NH-37, Guwahati</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">Opp. Nezone Steel</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Paschim Boragaon</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">WhatsApp</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">+91 9678******</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">09:00 - 19:30</span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Open All 7 Days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Location & Map Integration */}
      <section className="py-16 bg-purewhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container space-y-8">
          <div>
            <span className="badge-tech text-secondary dark:text-darkmuted uppercase tracking-wider text-xs mb-2">
              Workshop Facility & Directions
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-purewhite">
              {contact.workshops.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Full Verified Address & Facility Details */}
            <div className="lg:col-span-5 card-premium dark:bg-darkcard dark:border-darkborder p-6 sm:p-8 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="badge-orange text-[10px]">
                    {contact.workshops.guwahati.badge}
                  </span>
                  <span className="text-xs font-semibold text-secondary dark:text-darkmuted">Garchuk, Guwahati</span>
                </div>

                <h3 className="font-heading font-bold text-xl text-charcoal dark:text-purewhite">
                  Maa Kamakhya Auto Gas
                </h3>

                <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                  <span>{contact.workshops.guwahati.address}</span>
                </p>

                <div className="space-y-2 text-xs pt-3 border-t border-lightgrey/80 dark:border-darkborder">
                  <div className="flex items-center gap-2 text-secondary dark:text-darkmuted">
                    <Clock className="w-4 h-4 text-orange shrink-0" />
                    <span>{contact.workshops.guwahati.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary dark:text-darkmuted">
                    <Mail className="w-4 h-4 text-orange shrink-0" />
                    <a href="mailto:maakamakhyaautogas@gmail.com" className="hover:text-charcoal dark:hover:text-darktext transition-colors">
                      maakamakhyaautogas@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-lightgrey/80 dark:border-darkborder">
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <a
                    href="tel:+919678******"
                    className="inline-flex items-center gap-1.5 font-bold text-charcoal dark:text-darktext hover:text-orange transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange" />
                    <span>+91 9678******</span>
                  </a>
                  <a
                    href="tel:+919678******"
                    className="inline-flex items-center gap-1.5 font-semibold text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-darktext transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 9678******</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                  <a
                    href="https://wa.me/919678******"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-purewhite font-bold text-xs transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href="https://www.google.com/maps/place/26%C2%B007'12.1%22N+91%C2%B041'47.5%22E/@26.1200128,91.6965264,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder bg-purewhite dark:bg-darkbg hover:border-orange text-charcoal dark:text-darktext hover:text-orange font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Google Maps Pin</span>
                    <ExternalLink className="w-3.5 h-3.5 text-orange" />
                  </a>

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=26.1200128,91.6965264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-orange hover:bg-orange-hover text-purewhite font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Driving Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Card: Responsive Google Maps Embed with Exact GPS Coordinates */}
            <div className="lg:col-span-7 rounded-2xl border border-lightgrey dark:border-darkborder overflow-hidden bg-offwhite dark:bg-darkcard shadow-sm min-h-[380px] relative">
              <iframe
                title="Maa Kamakhya Auto Gas Location Map"
                src="https://maps.google.com/maps?q=26.1200128,91.6965264&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Emergency Box */}
      <section className="py-16 bg-offwhite dark:bg-darkbg transition-colors">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column - Get In Touch Form */}
            <div className="lg:col-span-7">
              <GetInTouchForm />
            </div>

            {/* Direct Assistance Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-[#1E2126] dark:bg-darkcard border border-white/10 dark:border-darkborder text-purewhite space-y-4">
                <span className="badge-tech text-orange bg-orange-light dark:bg-orange/20 text-[10px] uppercase font-bold">
                  Direct Technical Help
                </span>
                <h3 className="font-heading font-bold text-lg text-purewhite">
                  Need Immediate Technical Advice?
                </h3>
                <p className="text-xs text-offwhite/80 dark:text-darkmuted leading-relaxed">
                  {contact.directContact.emergencyNotice}
                </p>

                <div className="space-y-2 pt-2">
                  <a
                    href="tel:+919678******"
                    className="btn-primary w-full justify-center text-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +91 9678******</span>
                  </a>
                  <a
                    href="https://wa.me/919678******"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center text-xs text-emerald-800 dark:text-emerald-400"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp Technical Desk</span>
                  </a>
                </div>
              </div>

              {/* Working Hours Summary */}
              <div className="p-6 bg-purewhite dark:bg-darkcard rounded-2xl border border-lightgrey dark:border-darkborder space-y-3">
                <h4 className="font-heading font-bold text-sm text-charcoal dark:text-purewhite flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange" />
                  Workshop Working Hours
                </h4>
                <div className="space-y-1.5 text-xs text-secondary dark:text-darkmuted">
                  <div className="flex justify-between py-1 border-b border-lightgrey/60 dark:border-darkborder">
                    <span>Monday - Sunday:</span>
                    <span className="font-semibold text-charcoal dark:text-darktext">9:00 AM - 07:30 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-lightgrey/60 dark:border-darkborder text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>Weekly Schedule:</span>
                    <span>All 7 Days Open (Sunday Open)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-lightgrey/60 dark:border-darkborder">
                    <span>Cylinder Testing Bay:</span>
                    <span className="font-semibold text-charcoal dark:text-darktext">Available Daily</span>
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
