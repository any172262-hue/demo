import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { productsData } from '../data/productsData';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  PackageCheck,
  Wrench,
  Fuel,
} from 'lucide-react';

export const Products: React.FC = () => {
  const { language, pages, common } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'kit' | 'cylinder' | 'component'>('all');

  const filteredProducts = productsData.filter((prod) => {
    if (filter === 'all') return true;
    return prod.category === filter;
  });

  return (
    <>
      <SEO
        title={pages.products.title}
        description={pages.products.subtitle}
        canonicalPath="/products"
      />

      {/* Hero / Header Section (Approved Light Theme & Dark Theme) */}
      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 sm:pb-16 border-b border-lightgrey dark:border-darkborder overflow-hidden transition-colors">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: pages.products.title }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>AUTHENTIC OEM HARDWARE • 100% PESO COMPLIANT</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal dark:text-purewhite leading-tight tracking-tight">
              {pages.products.title}
            </h1>

            <p className="text-secondary dark:text-darkmuted text-sm sm:text-base leading-relaxed max-w-2xl">
              {pages.products.subtitle}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">100% Genuine</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Factory Serial Verified</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">PESO Certified</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Safety Directives</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Top Brands</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Motozen, Lovato, Tomasetto</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Warranty Backed</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Authorized Fitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Authenticity Assurance Notice */}
      <section className="py-6 bg-purewhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="p-4 bg-[#EEF1F6] dark:bg-darkcard border border-[#DFE3E8] dark:border-darkborder rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-orange shrink-0 mt-0.5" />
            <p className="text-xs text-charcoal dark:text-darktext leading-relaxed">
              <strong className="text-orange">Official Distributor Guarantee:</strong> {pages.products.authenticityNotice}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-offwhite dark:bg-darkbg border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              filter === 'all'
                ? 'bg-charcoal dark:bg-orange text-purewhite shadow-md'
                : 'bg-purewhite dark:bg-darkcard text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-purewhite border border-lightgrey dark:border-darkborder'
            }`}
          >
            {pages.products.filterAll}
          </button>
          <button
            type="button"
            onClick={() => setFilter('kit')}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              filter === 'kit'
                ? 'bg-charcoal dark:bg-orange text-purewhite shadow-md'
                : 'bg-purewhite dark:bg-darkcard text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-purewhite border border-lightgrey dark:border-darkborder'
            }`}
          >
            {pages.products.filterKits}
          </button>
          <button
            type="button"
            onClick={() => setFilter('cylinder')}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              filter === 'cylinder'
                ? 'bg-charcoal dark:bg-orange text-purewhite shadow-md'
                : 'bg-purewhite dark:bg-darkcard text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-purewhite border border-lightgrey dark:border-darkborder'
            }`}
          >
            {pages.products.filterCylinders}
          </button>
          <button
            type="button"
            onClick={() => setFilter('component')}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              filter === 'component'
                ? 'bg-charcoal dark:bg-orange text-purewhite shadow-md'
                : 'bg-purewhite dark:bg-darkcard text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-purewhite border border-lightgrey dark:border-darkborder'
            }`}
          >
            {pages.products.filterComponents}
          </button>
        </div>
      </section>

      {/* Products Grid (Properly Managed Card Positioning & Heights) */}
      <section className="py-16 sm:py-20 bg-purewhite dark:bg-darksurface transition-colors">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-purewhite dark:bg-darkcard rounded-2xl border border-[#DFE3E8] dark:border-darkborder shadow-subtle p-6 sm:p-7 flex flex-col justify-between hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div>
                  {/* Product Photography */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-charcoaldark mb-5">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-[#1E2126]/90 backdrop-blur-md text-purewhite text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/15 font-mono">
                      {prod.origin}
                    </span>
                    <span className="absolute top-3 right-3 bg-emerald-600/95 backdrop-blur-md text-purewhite text-[10px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                      <CheckCircle2 className="w-3 h-3 text-purewhite" />
                      {prod.status}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-charcoal dark:text-purewhite mb-2.5 group-hover:text-orange transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed mb-6">
                    {language === 'as' ? prod.descriptionAs : prod.descriptionEn}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-charcoal dark:text-purewhite uppercase tracking-wider block">
                      Engineering Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-secondary dark:text-darkmuted">
                      {(language === 'as' ? prod.featuresAs : prod.featuresEn).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-sm bg-orange mt-1.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-lightgrey dark:border-darkborder space-y-4">
                  <div className="text-[11px] text-secondary dark:text-darkmuted">
                    <span className="font-semibold text-charcoal dark:text-purewhite">Compatibility:</span> {prod.compatibility}
                  </div>
                  <Link
                    to="/book-appointment"
                    className="w-full py-2.5 rounded-lg bg-orange hover:bg-orange-hover text-purewhite text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-subtle active:scale-[0.99] transition-all"
                  >
                    <span>Enquire for Installation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Enquiries Banner */}
      <section className="py-16 sm:py-20 bg-purewhite dark:bg-darkbg border-t border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#1E2126] border border-white/10 text-purewhite flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-orange text-xs font-bold uppercase tracking-wider">
                B2B TRADE DESK
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-purewhite">
                Looking for Wholesale B2B Distribution?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                We supply authorized regional workshops and dealers with genuine conversion hardware, ECU harnesses, and factory warranty backing across Assam & North-East India.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-orange hover:bg-orange-hover text-purewhite font-heading font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg active:scale-[0.99] transition-all flex items-center gap-2 shrink-0"
            >
              <PackageCheck className="w-4 h-4" />
              <span>Contact Distribution Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
