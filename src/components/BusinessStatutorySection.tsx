import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { statutoryData } from '../data/statutoryData';
import {
  Building2,
  Calendar,
  Users,
  TrendingUp,
  FileCheck,
  CreditCard,
  Award,
  Wrench,
  Car,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Lock,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Calendar,
  Users,
  TrendingUp,
  FileCheck,
  CreditCard,
  Award,
  Wrench,
  Car,
};

export const BusinessStatutorySection: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language } = useLanguage();
  const isAssamese = language === 'as';

  return (
    <section
      id="statutory-details"
      className={`py-16 sm:py-20 bg-purewhite dark:bg-darksurface border-t border-lightgrey dark:border-darkborder transition-colors ${className}`}
    >
      <div className="section-container space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange border border-orange/30">
            <ShieldCheck className="w-3.5 h-3.5 text-orange" />
            <span>
              {isAssamese ? 'প্ৰশাসনিক আৰু বাণিজ্যিক পৰিচয়' : 'Regulatory & Trade Registry'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-charcoal dark:text-purewhite tracking-tight">
            {isAssamese ? statutoryData.sectionTitleAs : statutoryData.sectionTitleEn}
          </h2>

          <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted leading-relaxed">
            {isAssamese ? statutoryData.sectionSubtitleAs : statutoryData.sectionSubtitleEn}
          </p>
        </div>

        {/* Part 1: Business Statutory Details (3-column responsive grid on desktop, 2-col tablet, stacked mobile) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-heading font-bold text-base sm:text-lg text-charcoal dark:text-purewhite flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-orange" />
              <span>{isAssamese ? 'প্ৰাথমিক ব্যৱসায়িক তথ্য' : 'Core Business Credentials'}</span>
            </h3>
            <span className="text-[11px] text-secondary dark:text-darkmuted">
              {isAssamese ? 'পঞ্জীভুক্ত নথিপত্ৰ অনুসৰি' : 'Reference: Official Directory Profile'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {statutoryData.fields.map((field) => {
              const Icon = iconMap[field.iconName] || FileCheck;
              const isTurnoverOrPayment = field.id === 'turnover' || field.id === 'payment-mode';

              return (
                <div
                  key={field.id}
                  className={`p-5 rounded-2xl border border-lightgrey dark:border-darkborder bg-offwhite/60 dark:bg-darkcard flex flex-col justify-between shadow-subtle hover:border-orange/40 hover:shadow-hover transition-all duration-200 ${
                    field.id === 'payment-mode' ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-9 h-9 rounded-lg bg-purewhite dark:bg-darksurface border border-lightgrey dark:border-darkborder text-orange flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-4 h-4 text-orange" />
                      </div>

                      {field.isMasked && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-secondary dark:text-darkmuted bg-purewhite dark:bg-darksurface px-2 py-0.5 rounded border border-lightgrey dark:border-darkborder font-mono">
                          <Lock className="w-2.5 h-2.5 text-secondary dark:text-darkmuted" />
                          Masked
                        </span>
                      )}

                      {field.verificationStatus === 'Needs owner confirmation' && (
                        <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                          {isAssamese ? 'অনুমোদন প্ৰক্ৰিয়াধীন' : 'Trade Ref'}
                        </span>
                      )}
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-secondary dark:text-darkmuted uppercase tracking-wider block">
                        {isAssamese ? field.labelAs : field.labelEn}
                      </span>
                      <p
                        className={`font-heading font-extrabold text-charcoal dark:text-purewhite mt-1 break-words leading-snug ${
                          field.id === 'payment-mode'
                            ? 'text-xs sm:text-sm font-semibold'
                            : field.isMasked
                            ? 'text-sm sm:text-base font-mono tracking-wider text-orange'
                            : 'text-sm sm:text-base'
                        }`}
                      >
                        {isAssamese ? field.valueAs : field.valueEn}
                      </p>
                    </div>
                  </div>

                  {field.id === 'payment-mode' && (
                    <p className="text-[10px] text-secondary dark:text-darkmuted pt-3 border-t border-lightgrey/60 dark:border-darkborder mt-3">
                      {isAssamese
                        ? 'কিট সংস্থাপন আৰু মেৰামতিৰ বাবে সকলো মুখ্য পৰিশোধ মাধ্যম গ্ৰহণ কৰা হয়।'
                        : 'Accepted for conversion kits, tuning, maintenance, and cylinder testing.'}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Services, Mechanical Repairs, and Vehicle Specialisation in 3 Organised Columns */}
        <div id="services-specialisations" className="space-y-4 pt-2 scroll-mt-24">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-heading font-bold text-base sm:text-lg text-charcoal dark:text-purewhite flex items-center gap-2">
              <span className="w-2 h-2 rounded bg-orange" />
              <span>{isAssamese ? 'সেৱা আৰু কাৰিকৰী বৈশিষ্ট্য' : 'Services & Specialisations'}</span>
            </h3>
            <span className="text-[11px] text-secondary dark:text-darkmuted">
              {isAssamese ? '৩ টা মুখ্য বিভাগ' : '3 Key Specialisation Divisions'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {statutoryData.specialisations.map((cat) => {
              const Icon = iconMap[cat.iconName] || Wrench;

              return (
                <div
                  key={cat.id}
                  className="p-6 rounded-2xl border border-lightgrey dark:border-darkborder bg-offwhite/50 dark:bg-darkcard space-y-5 flex flex-col justify-between shadow-subtle hover:border-orange/40 hover:shadow-hover transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-lightgrey/80 dark:border-darkborder">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-orange" />
                        </div>
                        <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal dark:text-purewhite">
                          {isAssamese ? cat.titleAs : cat.titleEn}
                        </h4>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {cat.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="p-3 rounded-xl bg-purewhite dark:bg-darksurface border border-lightgrey/70 dark:border-darkborder space-y-1 shadow-xs"
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="font-heading font-bold text-xs sm:text-sm text-charcoal dark:text-purewhite leading-snug">
                              {isAssamese ? item.nameAs : item.nameEn}
                            </span>
                          </div>
                          {(item.noteEn || item.noteAs) && (
                            <p className="text-[11px] text-secondary dark:text-darkmuted pl-6 leading-relaxed">
                              {isAssamese ? item.noteAs : item.noteEn}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-lightgrey/60 dark:border-darkborder text-[10px] text-secondary dark:text-darkmuted flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-orange shrink-0" />
                    <span>
                      {cat.id === 'services'
                        ? isAssamese
                          ? 'অনুমোদিত কাৰিকৰী দলৰ দ্বাৰা সেৱা প্ৰদান'
                          : 'Workshop bay turnaround and supply'
                        : cat.id === 'mechanical-repairs'
                        ? isAssamese
                          ? 'কম্পিউটাৰাইজড টিউনিং আৰু সুৰক্ষিত ফিটিং'
                          : 'OBD-II calibrated tuning & leak-proof fitment'
                        : isAssamese
                        ? 'তিনিচকীয়া আৰু চাৰিচকীয়া উভয় বাহনৰ বাবে'
                        : 'Comprehensive 3-wheeler and 4-wheeler support'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verification Transparency Notice */}
        <div className="p-4 rounded-xl bg-[#EEF1F6] dark:bg-darkcard border border-[#DFE3E8] dark:border-darkborder text-xs text-secondary dark:text-darkmuted flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-orange shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-charcoal dark:text-purewhite">
              {isAssamese ? 'পৰীক্ষণ আৰু স্বচ্ছতা টোকা:' : 'Statutory Transparency Notice:'}{' '}
            </strong>
            {isAssamese ? statutoryData.verificationNoticeAs : statutoryData.verificationNoticeEn}
          </p>
        </div>
      </div>
    </section>
  );
};
