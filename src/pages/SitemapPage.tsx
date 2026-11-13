import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { servicesData } from '../data/servicesData';
import { ChevronRight, ExternalLink } from 'lucide-react';

export const SitemapPage: React.FC = () => {
  const { language, pages, common } = useLanguage();

  const mainPages = [
    { title: common.nav.home, path: '/', desc: 'Automotive engineering overview, business profile, and core capabilities.' },
    { title: common.nav.about, path: '/about', desc: 'Company history since 1998, engineering mission, RFC 261 authorization.' },
    { title: common.nav.services, path: '/services', desc: 'Directory of all 10 specialized automotive alternative fuel services.' },
    { title: common.nav.products, path: '/products', desc: 'Authorized hardware brands: Lovato, Motozen, Gastech, Mijo, STAG, PESO cylinders.' },
    { title: common.nav.workshopGallery, path: '/gallery', desc: 'Photographic documentation of workshop bays, fitments, and testing.' },
    { title: common.nav.videoGallery, path: '/videos', desc: 'Technical video walkthroughs of sequential kit calibrations.' },
    { title: common.nav.testimonials, path: '/testimonials', desc: 'Verified reviews and feedback from real vehicle owners.' },
    { title: common.nav.faqs, path: '/faqs', desc: 'Searchable answers on mileage, safety, warranties, and RTO testing.' },
    { title: common.nav.contact, path: '/contact', desc: 'Locations in Mundka and Paschim Vihar, workshop hours, and contact details.' },
    { title: common.nav.bookAppointment, path: '/book-appointment', desc: 'Online appointment enquiry form for priority bay scheduling.' },
  ];

  const legalPages = [
    { title: common.footer.privacy, path: '/privacy-policy', desc: 'Data privacy principles and encryption standards.' },
    { title: common.footer.terms, path: '/terms-and-conditions', desc: 'Service guidelines, pre-inspection requirements, and warranty terms.' },
  ];

  return (
    <>
      <SEO
        title={pages.legal.sitemapTitle}
        description={pages.legal.sitemapSubtitle}
        canonicalPath="/sitemap"
      />

      <section className="relative bg-[#181B1F] text-purewhite pt-8 pb-14 border-b border-white/10 overflow-hidden">
        <div className="section-container relative z-10 space-y-4">
          <Breadcrumbs items={[{ label: pages.legal.sitemapTitle }]} variant="dark" />
          <div className="max-w-3xl space-y-3 pt-2">
            <span className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <span>INDEX & DIRECTORY ARCHITECTURE —</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-purewhite">
              {pages.legal.sitemapTitle}
            </h1>
            <p className="text-sm text-white/80 leading-relaxed">
              {pages.legal.sitemapSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purewhite">
        <div className="section-container max-w-5xl space-y-12">
          {/* Main Pages */}
          <div className="space-y-4">
            <h2 className="text-lg font-heading font-bold text-charcoal border-b border-lightgrey pb-2">
              Primary Navigation Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mainPages.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  className="p-4 rounded-xl border border-lightgrey hover:border-orange hover:bg-orange-subtle transition-colors flex items-start gap-3"
                >
                  <ChevronRight className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-bold text-sm text-charcoal block">
                      {p.title}
                    </span>
                    <span className="text-xs text-secondary">{p.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Individual Service Pages */}
          <div className="space-y-4">
            <h2 className="text-lg font-heading font-bold text-charcoal border-b border-lightgrey pb-2">
              All 10 Specialized Service Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesData.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="p-4 rounded-xl border border-lightgrey hover:border-orange hover:bg-orange-subtle transition-colors flex items-start gap-3"
                >
                  <ChevronRight className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-bold text-sm text-charcoal block">
                      {language === 'as' ? s.titleAs : s.titleEn}
                    </span>
                    <span className="text-xs text-secondary">
                      {language === 'as' ? s.shortDescAs : s.shortDescEn}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Pages */}
          <div className="space-y-4">
            <h2 className="text-lg font-heading font-bold text-charcoal border-b border-lightgrey pb-2">
              Legal & Compliance Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legalPages.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="p-4 rounded-xl border border-lightgrey hover:border-orange hover:bg-orange-subtle transition-colors flex items-start gap-3"
                >
                  <ChevronRight className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-bold text-sm text-charcoal block">
                      {l.title}
                    </span>
                    <span className="text-xs text-secondary">{l.desc}</span>
                  </div>
                </Link>
              ))}
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-lightgrey hover:border-orange hover:bg-orange-subtle transition-colors flex items-start gap-3"
              >
                <ExternalLink className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                <div>
                  <span className="font-heading font-bold text-sm text-charcoal block">
                    XML Sitemap File (sitemap.xml)
                  </span>
                  <span className="text-xs text-secondary">
                    Raw XML format index for search engine crawler indexing.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
