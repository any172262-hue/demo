import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Calendar,
  Wrench,
  Clock,
  MapPin,
  ChevronRight,
  Cpu,
  Gauge,
  FileCheck2,
  Phone,
  Flame,
  Check,
  MessageSquare,
  Leaf,
  TrendingDown,
  Building2,
  Users,
  TrendingUp,
  Star,
  Navigation,
  Car,
  FileText,
  ShieldAlert,
  PiggyBank,
  Zap,
  CheckCheck,
  HeartHandshake,
  Compass,
  ArrowRight,
  Truck,
} from 'lucide-react';

export const About: React.FC = () => {
  const { language, pages } = useLanguage();
  const ab = pages.about;

  return (
    <>
      <SEO
        title={ab.title}
        description={ab.subtitle}
        canonicalPath="/about"
      />

      {/* TOP HERO SECTION - Preserved exactly as requested in owner picture */}
      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 sm:pb-16 border-b border-lightgrey dark:border-darkborder overflow-hidden transition-colors">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: ab.title }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>{ab.foundedLabel} • GOVT. APPROVED RETROFITMENT CENTER</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal dark:text-purewhite leading-tight tracking-tight">
              {ab.title}
            </h1>

            <p className="text-secondary dark:text-darkmuted text-sm sm:text-base leading-relaxed max-w-2xl">
              {ab.subtitle}
            </p>
          </div>

          {/* 4 Quick Verification Metric Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-xl sm:text-2xl text-charcoal dark:text-purewhite">
                4.9 ★
              </span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">
                {language === 'as' ? 'শীৰ্ষ গ্ৰাহক ৰেটিং (৯৭+ জাষ্টডায়েল ৰিভিউ)' : 'Top Customer Rating (97+ Justdial Reviews)'}
              </span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-xl sm:text-2xl text-orange">
                {language === 'as' ? 'প্ৰতিষ্ঠিত ২০২২' : 'Est. 2022'}
              </span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">
                {language === 'as' ? "অনুমোদিত অট'ম'বাইল গেছ ৰূপান্তৰ" : 'Authorized Automotive Gas Retrofitting'}
              </span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-xl sm:text-2xl text-charcoal dark:text-purewhite">
                10+ Brands
              </span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">
                {language === 'as' ? 'অনুমোদিত ৰূপান্তৰ হাৰ্ডৱেৰ' : 'Approved Conversion Hardware'}
              </span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-xl sm:text-2xl text-charcoal dark:text-purewhite">
                NH-37 Hub
              </span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">
                {language === 'as' ? 'গড়চুক, গুৱাহাটী কৰ্মশালা' : 'Garchuk, Guwahati Facility'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: About Maa Kamakhya Auto Gas */}
      <section id="about-intro" className="py-16 sm:py-20 bg-offwhite dark:bg-darkbg border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            {/* Left Column: Comprehensive Story & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {ab.aboutSection.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
                  {ab.aboutSection.heading}
                </h2>
                <div className="w-12 h-1 bg-orange rounded" />
              </div>

              <p className="text-sm text-secondary dark:text-darkmuted leading-relaxed">
                {ab.aboutSection.p1}
              </p>

              <p className="text-sm text-secondary dark:text-darkmuted leading-relaxed">
                {ab.aboutSection.p2}
              </p>

              {/* 4 Highlight Checklist Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {ab.aboutSection.highlights.map((hl: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder shadow-subtle"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-charcoal dark:text-darktext">
                      {hl}
                    </span>
                  </div>
                ))}
              </div>

              {/* Regional Authority Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-purewhite dark:bg-darkcard border-l-4 border-l-orange border border-lightgrey dark:border-darkborder shadow-subtle flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-charcoal dark:text-purewhite block">
                    {language === 'as' ? 'পৰিবহণ বিভাগ আৰু সুৰক্ষা মানদণ্ড মান্য' : 'Transport Department & Safety Statutory Compliant'}
                  </span>
                  <span className="text-[11px] text-secondary dark:text-darkmuted block">
                    {language === 'as' ? 'AIS-024 / AIS-028 আৰু CMVR নিৰ্দেশনা অনুসৰি প্ৰমাণিত সংস্থাপন।' : 'Strict adherence to AIS-024 / AIS-028 directives and certified testing protocols.'}
                  </span>
                </div>
                <Link
                  to="/#services-specialisations"
                  className="shrink-0 px-3 py-1.5 rounded-lg bg-orange-light dark:bg-orange/20 text-orange hover:bg-orange hover:text-purewhite text-xs font-bold transition-colors inline-flex items-center gap-1"
                >
                  <span>{language === 'as' ? 'সেৱাসমূহ' : 'Services'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Workshop Bay Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#DFE3E8] dark:border-darkborder shadow-premium bg-purewhite dark:bg-darkcard">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80"
                    alt="Maa Kamakhya Auto Gas Workshop Bay"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#1E2126]/90 backdrop-blur-md text-purewhite text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/15">
                    Garchuk Main Facility, Guwahati
                  </div>
                </div>
                <div className="p-6 bg-purewhite dark:bg-darkcard space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-charcoal dark:text-purewhite block">
                      Engineering Integrity Since 2022
                    </span>
                    <span className="text-xs font-bold text-orange">Est. 2022</span>
                  </div>
                  <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                    {language === 'as'
                      ? 'অট\'ম\'বাইল গেছ ৰূপান্তৰ, কম্পিউটাৰাইজড টিউনিং আৰু চিলিণ্ডাৰ সুৰক্ষা পৰীক্ষা একেখন চালিৰ তলত।'
                      : 'Specialized automotive propulsion retrofitment, computerized calibration, and hydrostatic cylinder safety testing under one authorized roof.'}
                  </p>
                  <div className="pt-2 border-t border-lightgrey dark:border-darkborder flex items-center justify-between text-xs text-secondary dark:text-darkmuted">
                    <span className="flex items-center gap-1.5 font-medium text-charcoal dark:text-darktext">
                      <Wrench className="w-3.5 h-3.5 text-orange" />
                      8 Specialized Services
                    </span>
                    <Link
                      to="/#services-specialisations"
                      className="text-orange font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore Services</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Mission */}
      <section id="our-mission" className="py-16 sm:py-20 bg-purewhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              {ab.missionSection.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
              {ab.missionSection.heading}
            </h2>
            <div className="w-12 h-1 bg-orange rounded mx-auto my-3" />
          </div>

          {/* Mission Statement Box */}
          <div className="max-w-4xl mx-auto mb-10 p-6 sm:p-8 rounded-2xl bg-offwhite dark:bg-darkcard border-l-4 border-l-orange border border-lightgrey dark:border-darkborder shadow-subtle">
            <p className="text-sm sm:text-base text-charcoal dark:text-darktext font-medium leading-relaxed italic text-center">
              "{ab.missionSection.statement}"
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ab.missionSection.pillars.map((pillar: { title: string; desc: string }, i: number) => {
              const icons = [Leaf, TrendingDown, ShieldCheck];
              const IconComp = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="bg-offwhite dark:bg-darkcard p-6 rounded-2xl border border-lightgrey dark:border-darkborder shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center font-bold shadow-sm border border-orange/20">
                      <IconComp className="w-5 h-5 text-orange" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-charcoal dark:text-purewhite">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-lightgrey dark:border-darkborder flex items-center text-[11px] font-bold text-orange">
                    <span>MISSION PILLAR 0{i + 1}</span>
                    <Check className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Vision */}
      <section id="our-vision" className="py-16 sm:py-20 bg-offwhite dark:bg-darkbg border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange mb-3">
              <Compass className="w-3.5 h-3.5" />
              {ab.visionSection.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
              {ab.visionSection.heading}
            </h2>
            <div className="w-12 h-1 bg-orange rounded mx-auto my-3" />
          </div>

          {/* Vision Statement Box */}
          <div className="max-w-4xl mx-auto mb-10 p-6 sm:p-8 rounded-2xl bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder shadow-subtle text-center">
            <p className="text-sm sm:text-base text-charcoal dark:text-darktext font-medium leading-relaxed">
              {ab.visionSection.statement}
            </p>
          </div>

          {/* 3 Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ab.visionSection.goals.map((goal: { title: string; desc: string }, i: number) => {
              const icons = [Award, Cpu, HeartHandshake];
              const IconComp = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="bg-purewhite dark:bg-darkcard p-6 rounded-2xl border border-lightgrey dark:border-darkborder shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center font-bold shadow-sm border border-orange/20">
                      <IconComp className="w-5 h-5 text-orange" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-charcoal dark:text-purewhite">
                      {goal.title}
                    </h3>
                    <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                      {goal.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-lightgrey dark:border-darkborder flex items-center text-[11px] font-bold text-orange">
                    <span>STRATEGIC GOAL 0{i + 1}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Company Information */}
      <section id="company-information" className="py-16 sm:py-20 bg-purewhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange mb-3">
              <Building2 className="w-3.5 h-3.5" />
              {ab.companyInfoSection.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
              {ab.companyInfoSection.heading}
            </h2>
            <div className="w-12 h-1 bg-orange rounded mx-auto my-3" />
            <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted">
              {ab.companyInfoSection.subtitle}
            </p>
          </div>

          {/* 8 Statutory & Corporate Field Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {ab.companyInfoSection.fields.map((f: { label: string; value: string; note: string }, i: number) => {
              const icons = [Building2, Calendar, MapPin, Wrench, Users, TrendingUp, FileCheck2, Clock];
              const IconComp = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="bg-offwhite dark:bg-darkcard p-5 rounded-xl border border-lightgrey dark:border-darkborder shadow-subtle hover:border-orange/40 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-secondary dark:text-darkmuted">
                      <IconComp className="w-4 h-4 text-orange shrink-0" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        {f.label}
                      </span>
                    </div>
                    <div className="font-heading font-bold text-sm sm:text-base text-charcoal dark:text-purewhite leading-snug break-words">
                      {f.value}
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-lightgrey dark:border-darkborder text-[10px] text-secondary dark:text-darkmuted">
                    {f.note}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: Business Highlights */}
      <section id="business-highlights" className="py-16 sm:py-20 bg-offwhite dark:bg-darkbg border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange mb-3">
              <Star className="w-3.5 h-3.5" />
              {ab.highlightsSection.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
              {ab.highlightsSection.heading}
            </h2>
            <div className="w-12 h-1 bg-orange rounded mx-auto my-3" />
            <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted">
              {ab.highlightsSection.subtitle}
            </p>
          </div>

          {/* 8 Key Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ab.highlightsSection.items.map((item: { title: string; desc: string }, i: number) => {
              const icons = [Navigation, Award, Cpu, Users, TrendingUp, Wrench, Calendar, ShieldCheck];
              const IconComp = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="bg-purewhite dark:bg-darkcard p-6 rounded-2xl border border-lightgrey dark:border-darkborder shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center font-bold shadow-sm border border-orange/20">
                      <IconComp className="w-5 h-5 text-orange" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-charcoal dark:text-purewhite">
                      {item.title}
                    </h3>
                    <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-lightgrey dark:border-darkborder flex items-center text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    <Check className="w-3.5 h-3.5 mr-1.5" />
                    <span>KEY HIGHLIGHT 0{i + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: Our Services and Expertise */}
      <section id="services-expertise" className="py-16 sm:py-20 bg-purewhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange mb-3">
              <Wrench className="w-3.5 h-3.5" />
              {ab.servicesSection.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
              {ab.servicesSection.heading}
            </h2>
            <div className="w-12 h-1 bg-orange rounded mx-auto my-3" />
            <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted">
              {ab.servicesSection.subtitle}
            </p>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-10">
            {ab.servicesSection.services.map((svc: { title: string; desc: string; link: string }, i: number) => {
              const icons = [Flame, Wrench, Cpu, Gauge, FileCheck2, ShieldAlert, FileText, Truck];
              const IconComp = icons[i % icons.length];
              return (
                <Link
                  key={i}
                  to={svc.link}
                  className="group bg-offwhite dark:bg-darkcard p-5 rounded-2xl border border-lightgrey dark:border-darkborder shadow-subtle hover:border-orange hover:shadow-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center font-bold shadow-sm group-hover:bg-orange group-hover:text-purewhite transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-sm text-charcoal dark:text-purewhite group-hover:text-orange transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-[11px] text-secondary dark:text-darkmuted leading-relaxed line-clamp-3">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-lightgrey dark:border-darkborder flex items-center justify-between text-xs font-bold text-orange">
                    <span>{language === 'as' ? 'বিৱৰণ চাওক' : 'View Service'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/#services-specialisations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange text-purewhite font-heading font-bold text-xs uppercase tracking-wider hover:bg-orange-hover shadow-subtle active:scale-[0.99] transition-all"
            >
              <span>{language === 'as' ? 'সকলো অনুমোদিত সেৱা চাওক' : 'Explore All Services Directory'}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: Why Choose Us */}
      <section id="why-choose-us" className="py-16 sm:py-20 bg-offwhite dark:bg-darkbg border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange mb-3">
              <Award className="w-3.5 h-3.5" />
              {ab.whyChooseSection.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
              {ab.whyChooseSection.heading}
            </h2>
            <div className="w-12 h-1 bg-orange rounded mx-auto my-3" />
            <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted">
              {ab.whyChooseSection.subtitle}
            </p>
          </div>

          {/* 6 Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ab.whyChooseSection.reasons.map((r: { title: string; desc: string }, i: number) => {
              const icons = [Award, PiggyBank, Zap, CheckCheck, Clock, HeartHandshake];
              const IconComp = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="bg-purewhite dark:bg-darkcard p-6 rounded-2xl border border-lightgrey dark:border-darkborder shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center font-bold shadow-sm border border-orange/20">
                      <IconComp className="w-5 h-5 text-orange" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-charcoal dark:text-purewhite">
                      {r.title}
                    </h3>
                    <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-lightgrey dark:border-darkborder flex items-center text-[11px] font-bold text-orange">
                    <span>KEY ADVANTAGE 0{i + 1}</span>
                    <Check className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: Our Commitment to Customers */}
      <section id="our-commitment" className="py-16 sm:py-20 bg-purewhite dark:bg-darksurface border-t border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container space-y-14">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light dark:bg-orange/20 text-orange mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              {ab.commitmentSection.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
              {ab.commitmentSection.heading}
            </h2>
            <div className="w-12 h-1 bg-orange rounded mx-auto my-3" />
            <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted">
              {ab.commitmentSection.subtitle}
            </p>
          </div>

          {/* 4 Commitments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ab.commitmentSection.commitments.map((c: { title: string; desc: string }, i: number) => {
              const icons = [ShieldCheck, Award, MessageSquare, Clock];
              const IconComp = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="bg-offwhite dark:bg-darkcard p-6 rounded-2xl border border-lightgrey dark:border-darkborder shadow-subtle flex gap-4 items-start"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center font-bold shadow-sm border border-orange/20 shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5 text-orange" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-heading font-bold text-base text-charcoal dark:text-purewhite">
                      {c.title}
                    </h3>
                    <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inspection Scheduling Call-To-Action Box */}
          <div className="bg-[#1E2126] dark:bg-darkcard rounded-2xl p-8 sm:p-12 text-purewhite text-center max-w-4xl mx-auto space-y-6 shadow-xl border border-white/10 dark:border-darkborder">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>EXPERIENCE PRECISION CNG ENGINEERING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-purewhite leading-tight">
              {ab.commitmentSection.ctaHeading}
            </h2>

            <div className="w-12 h-1 bg-orange rounded mx-auto" />

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto">
              {ab.commitmentSection.ctaDesc}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/book-appointment"
                className="bg-orange hover:bg-orange-hover text-purewhite font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-xl hover:shadow-orange/30 active:scale-[0.99] transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'as' ? 'বুকিং কৰক' : 'Book Appointment'}</span>
              </Link>
              <a
                href="https://wa.me/919678******"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-purewhite font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-lg active:scale-[0.99] transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'as' ? 'হোৱাটছএপ পৰামৰ্শ' : 'WhatsApp Consultation'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
