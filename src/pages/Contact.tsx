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
              <span>DIRECT WORKSHOP HOTLINE • RFC CODE NO. 261</span>
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
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Mundka Hub</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Opp. Metro Pillar 536</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">Paschim Vihar</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Gole DDA Market</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">WhatsApp</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">+91 79828 24255</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">10:30 - 19:00</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Wed Closed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Location Cards */}
      <section className="py-16 bg-purewhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-purewhite mb-8">
            {contact.workshops.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mundka Facility */}
            <div className="card-premium dark:bg-darkcard dark:border-darkborder p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge-orange text-[10px]">
                  {contact.workshops.mundka.badge}
                </span>
                <span className="text-xs font-semibold text-secondary dark:text-darkmuted">Mundka</span>
              </div>

              <h3 className="font-heading font-bold text-lg text-charcoal dark:text-purewhite">
                {contact.workshops.mundka.name}
              </h3>

              <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                <span>{contact.workshops.mundka.address}</span>
              </p>

              <div className="space-y-2 text-xs pt-2 border-t border-lightgrey/80 dark:border-darkborder">
                <div className="flex items-center gap-2 text-secondary dark:text-darkmuted">
                  <Clock className="w-4 h-4 text-secondary dark:text-darkmuted shrink-0" />
                  <span>{contact.workshops.mundka.hours}</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="tel:+919212218180"
                    className="inline-flex items-center gap-1.5 font-bold text-charcoal dark:text-darktext hover:text-orange transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange" />
                    <span>+91 92122 18180</span>
                  </a>
                  <a
                    href="https://wa.me/917982824255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                    <span>+91 79828 24255 (WhatsApp)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Paschim Vihar Facility */}
            <div className="card-premium dark:bg-darkcard dark:border-darkborder p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge-tech text-[10px]">
                  {contact.workshops.paschimVihar.badge}
                </span>
                <span className="text-xs font-semibold text-secondary dark:text-darkmuted">Paschim Vihar</span>
              </div>

              <h3 className="font-heading font-bold text-lg text-charcoal dark:text-purewhite">
                {contact.workshops.paschimVihar.name}
              </h3>

              <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                <span>{contact.workshops.paschimVihar.address}</span>
              </p>

              <div className="space-y-2 text-xs pt-2 border-t border-lightgrey/80 dark:border-darkborder">
                <div className="flex items-center gap-2 text-secondary dark:text-darkmuted">
                  <Clock className="w-4 h-4 text-secondary dark:text-darkmuted shrink-0" />
                  <span>{contact.workshops.paschimVihar.hours}</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="tel:+919212218180"
                    className="inline-flex items-center gap-1.5 font-bold text-charcoal dark:text-darktext hover:text-orange transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange" />
                    <span>+91 92122 18180</span>
                  </a>
                  <a
                    href="mailto:carsenergyco@gmail.com"
                    className="inline-flex items-center gap-1.5 text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-darktext transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>carsenergyco@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Emergency Box */}
      <section className="py-16 bg-offwhite dark:bg-darkbg transition-colors">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column - Get In Touch Form (No Email, Car Model Included) */}
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
                    href="tel:+919212218180"
                    className="btn-primary w-full justify-center text-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +91 92122 18180</span>
                  </a>
                  <a
                    href="https://wa.me/917982824255"
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
                    <span>Monday - Tuesday:</span>
                    <span className="font-semibold text-charcoal dark:text-darktext">10:30 AM - 07:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-lightgrey/60 dark:border-darkborder text-red-600 dark:text-red-400 font-medium">
                    <span>Wednesday:</span>
                    <span>Weekly Closed</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-lightgrey/60 dark:border-darkborder">
                    <span>Thursday - Sunday:</span>
                    <span className="font-semibold text-charcoal dark:text-darktext">10:30 AM - 07:00 PM</span>
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
