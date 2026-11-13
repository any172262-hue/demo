import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Lightbox } from '../components/Lightbox';
import { galleryData } from '../data/galleryData';
import {
  Camera,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

export const Gallery: React.FC = () => {
  const { language, pages, common } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <>
      <SEO
        title={pages.gallery.title}
        description={pages.gallery.subtitle}
        canonicalPath="/gallery"
      />

      {/* Hero / Header Section (Approved Light Theme) */}
      <section className="relative bg-[#F5F5F2] text-charcoal pt-8 pb-14 sm:pb-16 border-b border-lightgrey overflow-hidden">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: pages.gallery.title }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <Camera className="w-4 h-4 text-orange" />
              <span>AUTHENTIC WORKSHOP DOCUMENTATION • RFC CODE NO. 261</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight tracking-tight">
              {pages.gallery.title}
            </h1>

            <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
              {pages.gallery.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal">Real Workshop</span>
              <span className="text-[11px] text-secondary">100% Genuine Facility</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">Full HD</span>
              <span className="text-[11px] text-secondary">Interactive Inspection</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal">2 Facilities</span>
              <span className="text-[11px] text-secondary">Mundka & Paschim Vihar</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal">PESO Bay</span>
              <span className="text-[11px] text-secondary">Testing Rig Records</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-purewhite border-b border-lightgrey sticky top-16 z-30 shadow-subtle">
        <div className="section-container flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-charcoal text-purewhite shadow-md'
                : 'bg-offwhite text-secondary hover:text-charcoal border border-lightgrey'
            }`}
          >
            {pages.gallery.all}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('fitment')}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'fitment'
                ? 'bg-charcoal text-purewhite shadow-md'
                : 'bg-offwhite text-secondary hover:text-charcoal border border-lightgrey'
            }`}
          >
            {pages.gallery.fitment}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('testing')}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'testing'
                ? 'bg-charcoal text-purewhite shadow-md'
                : 'bg-offwhite text-secondary hover:text-charcoal border border-lightgrey'
            }`}
          >
            {pages.gallery.testing}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('diagnostics')}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'diagnostics'
                ? 'bg-charcoal text-purewhite shadow-md'
                : 'bg-offwhite text-secondary hover:text-charcoal border border-lightgrey'
            }`}
          >
            {pages.gallery.diagnostics}
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('facility')}
            className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeCategory === 'facility'
                ? 'bg-charcoal text-purewhite shadow-md'
                : 'bg-offwhite text-secondary hover:text-charcoal border border-lightgrey'
            }`}
          >
            {pages.gallery.facility}
          </button>
        </div>
      </section>

      {/* Gallery Grid (Properly Managed Card Alignment) */}
      <section className="py-16 sm:py-20 bg-offwhite">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className="bg-purewhite rounded-2xl border border-[#DFE3E8] shadow-subtle overflow-hidden group cursor-pointer hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="relative aspect-[4/3] bg-charcoaldark overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#1E2126]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="p-3 rounded-lg bg-purewhite text-charcoal shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-200">
                      <Eye className="w-5 h-5 text-orange" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#1E2126]/90 backdrop-blur-md text-purewhite text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/15">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5 sm:p-6 bg-purewhite border-t border-lightgrey">
                  <h3 className="font-heading font-bold text-base text-charcoal group-hover:text-orange transition-colors mb-2">
                    {language === 'as' ? item.titleAs : item.titleEn}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {language === 'as' ? item.descAs : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <Lightbox
          isOpen={true}
          onClose={() => setActiveLightboxIndex(null)}
          imageUrl={filteredItems[activeLightboxIndex].imageUrl}
          title={language === 'as' ? filteredItems[activeLightboxIndex].titleAs : filteredItems[activeLightboxIndex].titleEn}
          description={language === 'as' ? filteredItems[activeLightboxIndex].descAs : filteredItems[activeLightboxIndex].descEn}
          onPrev={activeLightboxIndex > 0 ? () => setActiveLightboxIndex(activeLightboxIndex - 1) : undefined}
          onNext={activeLightboxIndex < filteredItems.length - 1 ? () => setActiveLightboxIndex(activeLightboxIndex + 1) : undefined}
        />
      )}
    </>
  );
};
