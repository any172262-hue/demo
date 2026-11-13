import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { servicesData } from '../data/servicesData';
import { productsData } from '../data/productsData';
import { ChevronRight, ExternalLink, ShieldCheck } from 'lucide-react';

export const SitemapPage: React.FC = () => {
  const { language, pages, common } = useLanguage();

  const mainPages = [
    { name: common.nav.home, path: '/' },
    { name: common.nav.about, path: '/about' },
    { name: common.nav.services, path: '/services' },
    { name: common.nav.products, path: '/products' },
    { name: common.nav.gallery, path: '/gallery' },
    { name: common.nav.videoGallery, path: '/videos' },
    { name: common.nav.testimonials, path: '/testimonials' },
    { name: common.nav.faqs, path: '/faqs' },
    { name: common.nav.contact, path: '/contact' },
    { name: 'Get In Touch', path: '/get-in-touch' },
    { name: common.nav.bookAppointment, path: '/book-appointment' },
    { name: pages.legal.privacyTitle, path: '/privacy-policy' },
    { name: pages.legal.termsTitle, path: '/terms-and-conditions' },
    { name: pages.legal.sitemapTitle, path: '/sitemap' },
  ];

  return (
    <>
      <SEO
        title={pages.legal.sitemapTitle}
        description={pages.legal.sitemapSubtitle}
        canonicalPath="/sitemap"
      />

      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 sm:pb-16 border-b border-lightgrey dark:border-darkborder overflow-hidden">
        <div className="section-container relative z-10 space-y-4">
          <Breadcrumbs items={[{ label: pages.legal.sitemapTitle }]} />
          <div className="max-w-3xl space-y-3 pt-1">
            <span className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>INDEX & DIRECTORY ARCHITECTURE</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-charcoal dark:text-purewhite tracking-tight">
              {pages.legal.sitemapTitle}
            </h1>
            <p className="text-sm sm:text-base text-secondary dark:text-darkmuted leading-relaxed">
              {pages.legal.sitemapSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purewhite dark:bg-darksurface">
        <div className="section-container max-w-5xl space-y-12">
          {/* Main Pages */}
          <div className="space-y-4">
            <h2 className="text-lg font-heading font-bold text-charcoal dark:text-purewhite border-b border-lightgrey dark:border-darkborder pb-2">
              Primary Navigation Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mainPages.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  className="p-4 rounded-xl border border-lightgrey dark:border-darkborder bg-purewhite dark:bg-darkcard hover:border-orange hover:bg-orange-subtle dark:hover:bg-orange/10 transition-colors flex items-start gap-3"
                >
                  <ChevronRight className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-bold text-xs text-charcoal dark:text-purewhite block">
                      {p.name}
                    </span>
                    <span className="font-mono text-[11px] text-secondary dark:text-darkmuted">
                      {p.path}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Specialized Services */}
          <div className="space-y-4">
            <h2 className="text-lg font-heading font-bold text-charcoal dark:text-purewhite border-b border-lightgrey dark:border-darkborder pb-2">
              All 10 Specialized Engineering Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesData.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="p-4 rounded-xl border border-lightgrey dark:border-darkborder bg-purewhite dark:bg-darkcard hover:border-orange hover:bg-orange-subtle dark:hover:bg-orange/10 transition-colors flex items-start gap-3"
                >
                  <ChevronRight className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-bold text-xs text-charcoal dark:text-purewhite block">
                      {language === 'as' ? s.titleAs : s.titleEn}
                    </span>
                    <span className="font-mono text-[11px] text-secondary dark:text-darkmuted">
                      /services/{s.slug}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Products & Conversion Kits */}
          <div className="space-y-4">
            <h2 className="text-lg font-heading font-bold text-charcoal dark:text-purewhite border-b border-lightgrey dark:border-darkborder pb-2">
              Approved CNG Hardware & Brands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {productsData.map((prod) => (
                <div
                  key={prod.id}
                  className="p-4 rounded-xl border border-lightgrey dark:border-darkborder bg-offwhite/40 dark:bg-darkcard space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono bg-lightgrey dark:bg-darkbg px-1.5 py-0.5 rounded text-secondary dark:text-darkmuted">
                      {prod.origin}
                    </span>
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">
                      {prod.status}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xs text-charcoal dark:text-purewhite">
                    {prod.name}
                  </h3>
                  <p className="text-[11px] text-secondary dark:text-darkmuted line-clamp-2">
                    {language === 'as' ? prod.descriptionAs : prod.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
