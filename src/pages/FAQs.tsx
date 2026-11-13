import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { faqsData } from '../data/faqsData';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const FAQs: React.FC = () => {
  const { language, pages, common } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');
  const [category, setCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = category === 'all' || faq.category === category;
    const qText = language === 'as' ? faq.questionAs : faq.questionEn;
    const aText = language === 'as' ? faq.answerAs : faq.answerEn;
    const matchesQuery =
      qText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      aText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <SEO
        title={pages.faqs.title}
        description={pages.faqs.subtitle}
        canonicalPath="/faqs"
      />

      {/* Hero / Header Section (Approved Light Theme & Dark Theme) */}
      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 sm:pb-16 border-b border-lightgrey dark:border-darkborder overflow-hidden transition-colors">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: pages.faqs.title }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-orange" />
              <span>TRANSPARENT TECHNICAL ADVICE • MAA KAMAKHYA AUTO GAS</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal dark:text-purewhite leading-tight tracking-tight">
              {pages.faqs.title}
            </h1>

            <p className="text-secondary dark:text-darkmuted text-sm sm:text-base leading-relaxed max-w-2xl">
              {pages.faqs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">12 Verified</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Expert Answers</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">RTO Rules</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">CMVR Compliance</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Hydro-Test</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">3-Year Protocols</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Warranty</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Kit Protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-6 bg-purewhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                category === 'all'
                  ? 'bg-charcoal dark:bg-orange text-purewhite shadow-sm'
                  : 'bg-offwhite dark:bg-darkcard text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-purewhite border border-lightgrey dark:border-darkborder'
              }`}
            >
              {pages.faqs.categoryAll}
            </button>
            <button
              type="button"
              onClick={() => setCategory('installation')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                category === 'installation'
                  ? 'bg-charcoal dark:bg-orange text-purewhite shadow-sm'
                  : 'bg-offwhite dark:bg-darkcard text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-purewhite border border-lightgrey dark:border-darkborder'
              }`}
            >
              {pages.faqs.categoryInstallation}
            </button>
            <button
              type="button"
              onClick={() => setCategory('safety')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                category === 'safety'
                  ? 'bg-charcoal dark:bg-orange text-purewhite shadow-sm'
                  : 'bg-offwhite dark:bg-darkcard text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-purewhite border border-lightgrey dark:border-darkborder'
              }`}
            >
              {pages.faqs.categorySafety}
            </button>
            <button
              type="button"
              onClick={() => setCategory('legal')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                category === 'legal'
                  ? 'bg-charcoal dark:bg-orange text-purewhite shadow-sm'
                  : 'bg-offwhite dark:bg-darkcard text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-purewhite border border-lightgrey dark:border-darkborder'
              }`}
            >
              {pages.faqs.categoryLegal}
            </button>
            <button
              type="button"
              onClick={() => setCategory('maintenance')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                category === 'maintenance'
                  ? 'bg-charcoal dark:bg-orange text-purewhite shadow-sm'
                  : 'bg-offwhite dark:bg-darkcard text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-purewhite border border-lightgrey dark:border-darkborder'
              }`}
            >
              {pages.faqs.categoryMaintenance}
            </button>
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-secondary dark:text-darkmuted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={pages.faqs.searchPlaceholder}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-lg border border-lightgrey dark:border-darkborder bg-offwhite/50 dark:bg-darkcard text-charcoal dark:text-purewhite focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none"
            />
          </div>
        </div>
      </section>

      {/* Accordion Questions */}
      <section className="py-16 bg-offwhite dark:bg-darkbg transition-colors">
        <div className="section-container max-w-4xl">
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-purewhite dark:bg-darkcard rounded-xl border border-lightgrey dark:border-darkborder overflow-hidden shadow-subtle transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm text-charcoal dark:text-purewhite hover:text-orange transition-colors"
                  >
                    <span>{language === 'as' ? faq.questionAs : faq.questionEn}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-orange' : 'text-secondary dark:text-darkmuted'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs text-secondary dark:text-darkmuted leading-relaxed border-t border-lightgrey/50 dark:border-darkborder animate-slide-up">
                      {language === 'as' ? faq.answerAs : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 bg-purewhite dark:bg-darkcard rounded-xl border border-lightgrey dark:border-darkborder">
                <p className="text-xs text-secondary dark:text-darkmuted">
                  No questions match your query "{searchQuery}".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setCategory('all');
                  }}
                  className="mt-3 btn-secondary text-xs"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Still have questions? Help card */}
          <div className="mt-12 p-8 rounded-2xl bg-[#1E2126] dark:bg-darkcard border border-white/10 dark:border-darkborder text-purewhite flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-heading font-bold text-lg text-purewhite">
                Have a specific question about your vehicle model?
              </h3>
              <p className="text-xs text-offwhite/80 dark:text-darkmuted">
                Our automotive engineers are available for phone or WhatsApp consultation.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a href="tel:+919678******" className="btn-primary text-xs">
                <Phone className="w-3.5 h-3.5" />
                <span>Call Workshop</span>
              </a>
              <Link to="/contact" className="btn-secondary text-xs">
                <span>Contact Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
