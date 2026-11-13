import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Home, Wrench, Phone, AlertOctagon } from 'lucide-react';

export const NotFound: React.FC = () => {
  const { language, pages, common } = useLanguage();

  return (
    <>
      <SEO
        title={pages.notFound.title}
        description={pages.notFound.subtitle}
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-offwhite dark:bg-darkbg text-charcoal dark:text-darktext">
        <div className="section-container max-w-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center mx-auto shadow-subtle">
            <AlertOctagon className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-sm font-bold text-orange tracking-wider uppercase">
              Error 404
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal dark:text-purewhite">
              {pages.notFound.title}
            </h1>
            <p className="text-sm text-secondary dark:text-darkmuted leading-relaxed">
              {pages.notFound.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              <span>{pages.notFound.homeButton}</span>
            </Link>
            <Link to="/services" className="btn-secondary">
              <Wrench className="w-4 h-4 text-orange" />
              <span>{pages.notFound.servicesButton}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
