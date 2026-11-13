import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Calendar } from 'lucide-react';

export const TermsConditions: React.FC = () => {
  const { language, pages } = useLanguage();

  return (
    <>
      <SEO
        title={pages.legal.termsTitle}
        description="Terms and conditions governing automotive retrofitting and engineering services at Car's Energy Co."
        canonicalPath="/terms-and-conditions"
      />

      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 sm:pb-16 border-b border-lightgrey dark:border-darkborder overflow-hidden">
        <div className="section-container relative z-10 space-y-4">
          <Breadcrumbs items={[{ label: pages.legal.termsTitle }]} />
          <div className="max-w-3xl space-y-3 pt-1">
            <span className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>{pages.legal.termsBadge}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-charcoal dark:text-purewhite tracking-tight">
              {pages.legal.termsTitle}
            </h1>
            <p className="text-sm sm:text-base text-secondary dark:text-darkmuted leading-relaxed">
              {pages.legal.termsSubtitle}
            </p>
            <div className="pt-1 text-xs text-secondary dark:text-darkmuted flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-orange" />
              <span>{pages.legal.termsUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purewhite dark:bg-darksurface">
        <div className="section-container max-w-4xl space-y-8 text-xs sm:text-sm text-secondary dark:text-darkmuted leading-relaxed">
          {pages.legal.termsSections.map((section, idx) => (
            <div key={idx} className="space-y-3 bg-[#F5F5F2]/40 dark:bg-darkcard p-6 rounded-lg border border-lightgrey dark:border-darkborder">
              <h2 className="text-base sm:text-lg font-heading font-bold text-charcoal dark:text-purewhite">
                {section.heading}
              </h2>
              <p className="leading-relaxed">
                {section.content}
              </p>
              {section.list && section.list.length > 0 && (
                <ul className="list-disc list-inside space-y-2 pl-2 pt-1 text-charcoal dark:text-purewhite">
                  {section.list.map((item, itemIdx) => (
                    <li key={itemIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
