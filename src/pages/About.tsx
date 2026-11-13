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
} from 'lucide-react';

export const About: React.FC = () => {
  const { language, pages, common } = useLanguage();

  return (
    <>
      <SEO
        title={pages.about.title}
        description={pages.about.subtitle}
        canonicalPath="/about"
      />

      {/* Hero / Header Section (Approved Light Theme) */}
      <section className="relative bg-[#F5F5F2] text-charcoal pt-8 pb-14 sm:pb-16 border-b border-lightgrey overflow-hidden">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: pages.about.title }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>{pages.about.foundedLabel} • RFC CODE NO. 261</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight tracking-tight">
              {pages.about.title}
            </h1>

            <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
              {pages.about.subtitle}
            </p>
          </div>

          {/* 4 Quick Verification Metric Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-xl sm:text-2xl text-charcoal">
                26+ Years
              </span>
              <span className="text-[11px] text-secondary">Continuous Leadership (Est. 1998)</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-xl sm:text-2xl text-orange">
                RFC #261
              </span>
              <span className="text-[11px] text-secondary">Govt. Approved Retrofitment Code</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-xl sm:text-2xl text-charcoal">
                10+ Brands
              </span>
              <span className="text-[11px] text-secondary">Approved Conversion Hardware</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-xl sm:text-2xl text-charcoal">
                2 Hubs
              </span>
              <span className="text-[11px] text-secondary">Mundka & Paschim Vihar</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Mission & Background (Properly Managed 2-Column Balanced Layout) */}
      <section className="py-16 sm:py-20 bg-offwhite border-b border-lightgrey">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            {/* Left Column: Mission Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light text-orange">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Government Approved RFC No. 261
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
                  {pages.about.missionTitle}
                </h2>
                <div className="w-12 h-1 bg-orange rounded" />
              </div>

              <p className="text-sm text-secondary leading-relaxed">
                {pages.about.missionText}
              </p>

              {/* Verified Technical Standards Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purewhite border border-lightgrey shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-charcoal">
                    AIS-024 / AIS-028 & CMVR Safety Standards Compliance
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purewhite border border-lightgrey shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-charcoal">
                    In-House 330 Bar Hydrostatic Testing Water-Jacket Chamber
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purewhite border border-lightgrey shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-charcoal">
                    Official RTO Endorsement Documentation & Testing Endorsement
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purewhite border border-lightgrey shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-charcoal">
                    Computerized OBD-II Synchronized Dynamic Fuel Mapping
                  </span>
                </div>
              </div>

              {/* RFC Authority Highlight Box */}
              <div className="p-5 rounded-2xl bg-purewhite border-l-4 border-l-orange border border-lightgrey shadow-subtle space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange shrink-0" />
                  <h3 className="font-heading font-bold text-sm text-charcoal">
                    Transport Department Authorized Facility
                  </h3>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  {language === 'as'
                    ? 'আমাৰ কৰ্মশালাখন পৰিবহণ বিভাগ আৰু চৰকাৰী সুৰক্ষা নিৰ্দেশনাৰ অধীনত স্বীকৃতিপ্ৰাপ্ত। প্ৰতিটো বাহনত AIS আৰু CMVR নিৰ্দেশনা অনুসৰি অনুমোদিত সা-সঁজুলি সংস্থাপন কৰা হয়।'
                    : 'Our retrofitment facility operates under full certification from the Transport Department and safety statutory boards. Every kit fitment strictly follows AIS-024 / AIS-028 safety directives and CMVR standards.'}
                </p>
              </div>
            </div>

            {/* Right Column: High Quality Technical Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#DFE3E8] shadow-premium bg-purewhite">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80"
                    alt="Car's Energy Technical Bay"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#1E2126]/90 backdrop-blur-md text-purewhite text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/15">
                    Mundka Main Technical Bay
                  </div>
                </div>
                <div className="p-6 bg-purewhite space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-charcoal block">
                      Engineering Integrity Since 1998
                    </span>
                    <span className="text-xs font-bold text-orange">Est. 1998</span>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">
                    Specialized automotive propulsion retrofitment, computerized calibration, and hydrostatic cylinder safety testing under one authorized roof.
                  </p>
                  <div className="pt-2 border-t border-lightgrey flex items-center justify-between text-xs text-secondary">
                    <span className="flex items-center gap-1.5 font-medium text-charcoal">
                      <Wrench className="w-3.5 h-3.5 text-orange" />
                      10 Specialized Services
                    </span>
                    <Link
                      to="/services"
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

      {/* SECTION 2: Core Engineering Principles (Balanced 4-Card Responsive Grid) */}
      <section className="py-16 sm:py-20 bg-purewhite border-b border-lightgrey">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light text-orange mb-3">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
              {pages.about.valuesTitle}
            </h2>
            <div className="w-12 h-1 bg-orange rounded mx-auto my-3" />
            <p className="text-xs sm:text-sm text-secondary">
              Precision engineering, certified safety compliance, and complete pricing transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pages.about.values.map((v, i) => (
              <div
                key={i}
                className="bg-[#EEF1F6] p-7 rounded-2xl border border-[#DFE3E8] shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-light text-orange flex items-center justify-center font-heading font-black text-sm mb-5 shadow-sm border border-orange/20">
                    0{i + 1}
                  </div>
                  <h3 className="font-heading font-bold text-base text-charcoal mb-2.5">
                    {v.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    {v.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#DFE3E8] flex items-center text-[11px] font-bold text-orange">
                  <span>VERIFIED PRACTICE</span>
                  <Check className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Authorized Workshop Facilities & Infrastructure */}
      <section className="py-16 sm:py-20 bg-offwhite border-b border-lightgrey">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-orange-light text-orange mb-3">
              Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
              {pages.about.workshopsTitle}
            </h2>
            <div className="w-12 h-1 bg-orange rounded mx-auto my-3" />
            <p className="text-xs sm:text-sm text-secondary mt-1">
              {pages.about.workshopsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mundka Facility Card */}
            <div className="bg-purewhite rounded-2xl border border-[#DFE3E8] shadow-premium p-7 sm:p-8 flex flex-col justify-between hover:shadow-hover transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="badge-orange text-xs font-bold">
                    Primary Installation & Hydro-Testing Hub
                  </span>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Mundka Corridor
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-charcoal">
                  Mundka Retrofitment & Hydro-Testing Hub
                </h3>

                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  Our flagship engineering facility located directly on Rohtak Road opposite Metro Pillar 536. Features high-pressure nitrogen test rigs, a certified 330-bar hydrostatic water jacket testing chamber, multiple vehicle inspection bays, and OEM diagnostic scanners.
                </p>

                <div className="space-y-2.5 text-xs text-secondary border-t border-lightgrey pt-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                    <span className="text-charcoal font-medium">
                      215 & 216/5, Ground Floor, Opp. Pillar 536, Rohtak Road, Mundka, New Delhi - 110041
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-orange shrink-0" />
                    <span>10:30 AM - 07:00 PM (Wednesday Closed)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-orange shrink-0" />
                    <a href="tel:+919212218180" className="hover:text-orange font-semibold text-charcoal">
                      +91 92122 18180 / +91 98112 55952
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-lightgrey flex flex-wrap items-center gap-3">
                <Link
                  to="/book-appointment"
                  className="bg-orange hover:bg-orange-hover text-purewhite font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-subtle active:scale-[0.99] transition-all flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Slot at Mundka</span>
                </Link>
                <a
                  href="https://maps.google.com/?q=Car's+Energy+Co+Mundka+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-charcoal text-charcoal hover:bg-charcoal hover:text-purewhite font-heading font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Paschim Vihar Center Card */}
            <div className="bg-purewhite rounded-2xl border border-[#DFE3E8] shadow-premium p-7 sm:p-8 flex flex-col justify-between hover:shadow-hover transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="badge-tech text-xs font-bold text-charcoal">
                    Express Diagnostics & Maintenance Center
                  </span>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    West Delhi
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-charcoal">
                  Paschim Vihar Express Center
                </h3>

                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  Conveniently situated in Gole D.D.A. Market, Paschim Vihar, dedicated to quick OBD-II digital diagnostics, electronic leak sniff-testing, low and high-pressure filter replacements, and walk-in customer consultations.
                </p>

                <div className="space-y-2.5 text-xs text-secondary border-t border-lightgrey pt-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                    <span className="text-charcoal font-medium">
                      Shop No. 21, C.S.C. A-4, Gole DDA Market, Paschim Vihar, New Delhi - 110063
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-orange shrink-0" />
                    <span>10:30 AM - 02:00 PM (Wednesday Closed)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-orange shrink-0" />
                    <a href="tel:+917982824255" className="hover:text-orange font-semibold text-charcoal">
                      +91 79828 24255
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-lightgrey flex flex-wrap items-center gap-3">
                <Link
                  to="/book-appointment"
                  className="bg-orange hover:bg-orange-hover text-purewhite font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-subtle active:scale-[0.99] transition-all flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Slot at Paschim Vihar</span>
                </Link>
                <a
                  href="https://maps.google.com/?q=Paschim+Vihar+DDA+Market+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-charcoal text-charcoal hover:bg-charcoal hover:text-purewhite font-heading font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Inspection Scheduling Banner */}
      <section className="py-16 sm:py-20 bg-purewhite border-t border-lightgrey">
        <div className="section-container">
          <div className="bg-[#1E2126] rounded-2xl p-8 sm:p-12 text-purewhite text-center max-w-4xl mx-auto space-y-6 shadow-xl">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>EXPERIENCE PRECISION CNG ENGINEERING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-purewhite leading-tight">
              Schedule a Technical Pre-Inspection for Your Vehicle
            </h2>

            <div className="w-12 h-1 bg-orange rounded mx-auto" />

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto">
              Bring your car to either of our authorized workshops or book an appointment online for a comprehensive OBD-II diagnostic and engine compression check.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/book-appointment"
                className="bg-orange hover:bg-orange-hover text-purewhite font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-xl hover:shadow-orange/30 active:scale-[0.99] transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>
              <Link
                to="/services"
                className="bg-purewhite hover:bg-lightgrey text-charcoal font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-lg shadow-lg active:scale-[0.99] transition-all flex items-center gap-2"
              >
                <span>Explore All Services</span>
                <ChevronRight className="w-4 h-4 text-orange" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
