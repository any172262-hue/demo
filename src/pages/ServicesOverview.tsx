import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import {
  ShieldCheck,
  Wrench,
  Search,
  Filter,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
} from 'lucide-react';

export const ServicesOverview: React.FC = () => {
  const { language, services, common } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter((service) => {
    const query = searchQuery.toLowerCase();
    const titleMatch = (language === 'as' ? service.titleAs : service.titleEn)
      .toLowerCase()
      .includes(query);
    const descMatch = (language === 'as' ? service.shortDescAs : service.shortDescEn)
      .toLowerCase()
      .includes(query);
    const badgeMatch = (language === 'as' ? service.badgeAs : service.badgeEn)
      .toLowerCase()
      .includes(query);
    return titleMatch || descMatch || badgeMatch;
  });

  return (
    <>
      <SEO
        title={services.pageTitle}
        description={services.pageSubtitle}
        canonicalPath="/services"
      />

      {/* Hero / Header Section (Approved Light Theme) */}
      <section className="relative bg-[#F5F5F2] text-charcoal pt-8 pb-14 sm:pb-16 border-b border-lightgrey overflow-hidden">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: common.nav.services }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>CERTIFIED CNG PROPULSION • 10 SPECIALIZED SERVICES</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight tracking-tight">
              {services.pageTitle}
            </h1>

            <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
              {services.pageSubtitle}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal">10 Services</span>
              <span className="text-[11px] text-secondary">End-to-End Solutions</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">RFC #261</span>
              <span className="text-[11px] text-secondary">Govt. Approved</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal">OBD-II Sync</span>
              <span className="text-[11px] text-secondary">Digital Tuning</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal">330 Bar</span>
              <span className="text-[11px] text-secondary">Hydro-Testing Bay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter / Search Bar */}
      <section className="py-6 bg-purewhite border-b border-lightgrey">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-semibold text-charcoal flex items-center gap-2">
            <Filter className="w-4 h-4 text-orange" />
            <span>
              Showing <span className="text-orange font-bold">{filteredServices.length}</span> of {servicesData.length} specialized engineering services
            </span>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'as' ? 'সেৱা সন্ধান কৰক...' : 'Search services (e.g. tuning, hydro, kit)...'}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-lg border border-lightgrey focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none bg-offwhite/60 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Service Cards Grid (Properly Managed Spacing and Alignment) */}
      <section className="py-16 sm:py-20 bg-offwhite">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16 bg-purewhite rounded-2xl border border-lightgrey max-w-lg mx-auto">
              <p className="text-sm text-secondary">
                No matching services found for "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-4 px-6 py-2.5 rounded-lg border border-charcoal text-charcoal hover:bg-charcoal hover:text-purewhite text-xs font-bold uppercase tracking-wider transition-all"
              >
                Reset Search Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Direct Technical Consultation CTA Banner */}
      <section className="py-16 sm:py-20 bg-purewhite border-t border-lightgrey">
        <div className="section-container">
          <div className="bg-[#1E2126] rounded-2xl p-8 sm:p-12 text-purewhite text-center max-w-3xl mx-auto space-y-6 shadow-xl">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <span>GET SPECIALIZED CONSULTATION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-purewhite leading-tight">
              {services.ctaBox.title}
            </h2>

            <div className="w-12 h-1 bg-orange rounded mx-auto" />

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto">
              {services.ctaBox.text}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/book-appointment"
                className="bg-orange hover:bg-orange-hover text-purewhite font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-xl hover:shadow-orange/30 active:scale-[0.99] transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{services.ctaBox.button}</span>
              </Link>
              <a
                href="tel:+919212218180"
                className="bg-purewhite hover:bg-lightgrey text-charcoal font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-lg active:scale-[0.99] transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange" />
                <span>+91 92122 18180</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
