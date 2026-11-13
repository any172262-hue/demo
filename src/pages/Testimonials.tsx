import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { testimonialsData } from '../data/testimonialsData';
import { Star, ShieldCheck, CheckCircle2, Calendar, MessageSquare } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language, pages, common } = useLanguage();

  return (
    <>
      <SEO
        title={pages.testimonials.title}
        description={pages.testimonials.subtitle}
        canonicalPath="/testimonials"
      />

      {/* Hero / Header Section (Thrifty Theme Dark) */}
      <section className="relative bg-[#181B1F] text-purewhite pt-8 pb-16 sm:pb-20 border-b border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181B1F]/60 via-[#181B1F]/90 to-[#181B1F] pointer-events-none" />

        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: pages.testimonials.title }]} variant="dark" />

          <div className="max-w-3xl space-y-4 pt-2">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <Star className="w-4 h-4 text-orange" />
              <span>AUTHENTIC CUSTOMER EXPERIENCES • RFC CODE NO. 261 —</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-purewhite leading-tight tracking-tight">
              {pages.testimonials.title}
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
              {pages.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-purewhite">4.9 / 5.0</span>
              <span className="text-[11px] text-white/70">Google Verified</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">10,000+</span>
              <span className="text-[11px] text-white/70">Delhi-NCR Commuters</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-purewhite">Zero Knock</span>
              <span className="text-[11px] text-white/70">OBD-II Synchronized</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-purewhite">60-70%</span>
              <span className="text-[11px] text-white/70">Fuel Cost Savings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-8 bg-purewhite border-b border-lightgrey">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <span className="font-heading font-black text-2xl text-charcoal">4.9 / 5.0</span>
              <p className="text-xs text-secondary font-medium">Workshop Service Rating</p>
            </div>
            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-lightgrey pt-4 sm:pt-0">
              <span className="font-heading font-black text-2xl text-charcoal">10,000+</span>
              <p className="text-xs text-secondary font-medium">Alternative Fuel Retrofits</p>
            </div>
            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-lightgrey pt-4 sm:pt-0">
              <span className="font-heading font-black text-2xl text-charcoal">100% Genuine</span>
              <p className="text-xs text-secondary font-medium">PESO Certified Hardware</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-16 bg-offwhite">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="bg-purewhite rounded-2xl border border-lightgrey p-6 sm:p-8 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-secondary">
                      {t.date}
                    </span>
                  </div>

                  <p className="text-sm text-charcoal leading-relaxed italic mb-6">
                    "{language === 'as' ? t.quoteAs : t.quoteEn}"
                  </p>
                </div>

                <div className="pt-6 border-t border-lightgrey/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-sm text-charcoal">
                        {t.name}
                      </h3>
                      <span className="text-xs text-secondary">{t.location}</span>
                    </div>
                    <span className="badge-tech text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200">
                      Verified Owner
                    </span>
                  </div>

                  <div className="p-3 bg-offwhite/80 rounded-lg text-xs space-y-1">
                    <div className="text-[11px] text-secondary">
                      <strong className="text-charcoal">Vehicle:</strong> {t.vehicle}
                    </div>
                    <div className="text-[11px] text-secondary">
                      <strong className="text-charcoal">Service:</strong> {language === 'as' ? t.serviceReceivedAs : t.serviceReceivedEn}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking CTA */}
          <div className="mt-14 text-center">
            <Link to="/book-appointment" className="btn-primary">
              <Calendar className="w-4 h-4" />
              <span>Experience Our Technical Service</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
