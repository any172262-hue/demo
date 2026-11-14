import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { AppointmentForm } from '../components/AppointmentForm';
import { Lightbox } from '../components/Lightbox';
import { BusinessStatutorySection } from '../components/BusinessStatutorySection';
import { CustomerReviewsSection } from '../components/CustomerReviewsSection';
import { productsData } from '../data/productsData';
import { galleryData } from '../data/galleryData';
import {
  ShieldCheck,
  Award,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Phone,
  MessageSquare,
  Wrench,
  ChevronDown,
  Layers,
  Fuel,
  Cpu,
  Star,
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  Compass,
} from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=2000&q=85',
    tag: 'Sequential Kits',
    titleEn: 'High-Precision Multipoint Gas Injection',
    titleAs: 'উচ্চ মানৰ ছিকুৱেনচিয়েল গেছ ইনজেকচন প্ৰযুক্তি',
    descEn: 'Dedicated electronic control unit (ECU), high-speed rail injectors, and 60-70% monthly fuel savings with petrol-like acceleration.',
    descAs: 'নিৰ্দিষ্ট ইচিইউ আৰু দ্ৰুত ইনজেক্টৰ ৰেলৰ সৈতে পেট্ৰলৰ দৰেই সুচল গতি আৰু ৬০-৭০% ইন্ধন সাশ্ৰয়।',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=2000&q=85',
    tag: 'ECU Tuning',
    titleEn: 'Computerized ECU Fuel Mapping & Anti-Lag',
    titleAs: 'কম্পিউটাৰাইজড ইচিইউ ফুৱেল মেপিং আৰু লেগ-মুক্ত পিক-আপ',
    descEn: 'OBD-II synchronized real-time calibration and timing advancers to eliminate engine knock, RPM lag, and check-engine lights.',
    descAs: 'ইঞ্জিন নক আৰু আৰপিএম লেগ দূৰ কৰিবলৈ OBD-II প্ৰযুক্তিৰে নিখুঁত ডিজিটেল কেলিব্ৰেচন।',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=85',
    tag: 'Hydro-Testing',
    titleEn: 'Mandatory 330-Bar Cylinder Hydro-Testing Rig',
    titleAs: '৩৩০ বাৰ হাইড্ৰ’ষ্টেটিক চিলিণ্ডাৰ সুৰক্ষা পৰীক্ষা',
    descEn: 'In-house PESO-certified water jacket hydrostatic testing bay with official statutory safety certification and computerized leak audits.',
    descAs: 'চৰকাৰী PESO স্বীকৃতিপ্ৰাপ্ত ৩৩০ বাৰ ৱাটাৰ জেকেট টেষ্টিং আৰু বৈধ সুৰক্ষা প্ৰমাণপত্ৰ।',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2000&q=85',
    tag: 'Guwahati Workshop',
    titleEn: 'Govt. Approved Retrofitment & Conversion Center',
    titleAs: 'চৰকাৰী অনুমোদিত ৰেট্ৰ’ফিটিং আৰু ৰূপান্তৰ কেন্দ্ৰ',
    descEn: 'Accredited automotive gas retrofitment facility located on NH-37, Garchuk, Guwahati with certified technicians and diagnostic testing.',
    descAs: 'গুৱাহাটীৰ গড়চুকৰ এনএইচ-৩৭ স্থিত অনুমোদিত কাৰিকৰী কৰ্মশালাত প্ৰশিক্ষিত মেকানিকৰ দ্বাৰা নিৰ্ভৰযোগ্য সেৱা।',
  },
];

export const Home: React.FC = () => {
  const { language, home, common } = useLanguage();
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic Hero Carousel: super smooth background crossfade every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title={home.hero.title}
        description={home.hero.subtitle}
        canonicalPath="/"
      />

      {/* SECTION B: Bright Premium Light-Themed Hero with Full-Bleed Background Carousel / Slideshow */}
      <section className="relative min-h-[560px] lg:min-h-[620px] text-charcoal dark:text-darktext pt-10 sm:pt-14 pb-14 sm:pb-18 border-b border-lightgrey dark:border-darkborder overflow-hidden transition-colors">
        {/* Full-Bleed Automotive Engineering Background Carousel / Slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              } transition-all duration-1000`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.titleEn}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Directional High-Contrast Editorial Gradient Overlay */}
          {/* Preserves 100% WCAG AAA contrast for text on the left while showcasing the automotive background on the right */}
          <div className="absolute inset-0 hero-editorial-overlay transition-colors duration-500" />

          {/* Subtle vertical gradients blending smoothly with header and section borders */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#F5F5F2]/80 dark:from-[#121417]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F5F5F2] dark:from-[#121417] to-transparent" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow Badge (Subtly Rounded, No Pills) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-orange-light dark:bg-orange/15 text-orange border border-orange/25 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange shrink-0" />
              <span>{home.hero.badge}</span>
            </div>

            {/* Bold Editorial Headline in Charcoal with Orange Accent */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal dark:text-purewhite leading-tight tracking-tight">
              {home.hero.title}
            </h1>

            {/* Informative, authentic introduction */}
            <p className="text-secondary dark:text-darkmuted text-sm sm:text-base leading-relaxed max-w-2xl">
              {home.hero.subtitle}
            </p>

            {/* Rectangular / Subtly Rounded Action Buttons (h-12, rounded-lg, No Pills) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to="/book-appointment"
                className="bg-orange hover:bg-orange-hover text-purewhite font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md hover:shadow-orange/30 transition-all duration-200 flex items-center gap-2 active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4" />
                <span>{home.hero.ctaAppointment}</span>
              </Link>

              <a
                href="#services-specialisations"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('services-specialisations') || document.getElementById('statutory-details');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '#services-specialisations');
                  }
                }}
                className="bg-purewhite dark:bg-darkcard hover:bg-lightgrey dark:hover:bg-darksurface text-charcoal dark:text-darktext border border-bordergrey dark:border-darkborder font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-subtle hover:border-charcoal/20 transition-all duration-200 flex items-center gap-2 active:scale-[0.99] cursor-pointer"
              >
                <span>{home.hero.ctaServices}</span>
                <ChevronRight className="w-4 h-4 text-orange" />
              </a>
            </div>

            {/* Direct Workshop Hotline & Address */}
            <div className="pt-2 border-t border-lightgrey/80 dark:border-darkborder flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-secondary dark:text-darkmuted">
              <a
                href="tel:+919678******"
                className="inline-flex items-center gap-1.5 font-bold text-charcoal dark:text-darktext hover:text-orange transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange" />
                <span>+91 9678******</span>
              </a>

              <a
                href="https://wa.me/919678******"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: Why Choose Us */}
      <section className="py-16 bg-purewhite dark:bg-darkbg border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="badge-tech text-secondary dark:text-darkmuted uppercase tracking-wider text-xs mb-2">
              {home.whyChooseUs.sectionTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
              {home.whyChooseUs.title}
            </h2>
            <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted mt-1">
              {home.whyChooseUs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.whyChooseUs.cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-lightgrey dark:border-darkborder bg-offwhite/40 dark:bg-darkcard hover:bg-purewhite dark:hover:bg-darksurface hover:shadow-subtle hover:border-orange/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center font-heading font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-sm text-charcoal dark:text-purewhite mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G: Partner Brands & Products */}
      <section className="py-16 bg-purewhite dark:bg-darkbg border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="badge-tech text-secondary dark:text-darkmuted uppercase tracking-wider text-xs mb-2">
                {home.brandsSection.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
                {home.brandsSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted mt-1">
                {home.brandsSection.description}
              </p>
            </div>
            <Link to="/products" className="btn-outline text-xs whitespace-nowrap self-start md:self-auto">
              <span>{common.buttons.viewAll}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                className="card-premium dark:bg-darkcard dark:border-darkborder p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-secondary dark:text-darkmuted mb-3">
                    <span className="font-mono text-[10px] bg-lightgrey dark:bg-darkborder px-2 py-0.5 rounded">
                      {prod.origin}
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-[10px]">
                      {prod.status}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-charcoal dark:text-purewhite mb-2">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed mb-4">
                    {language === 'as' ? prod.descriptionAs : prod.descriptionEn}
                  </p>

                  <ul className="space-y-1.5 text-xs text-secondary dark:text-darkmuted mb-4">
                    {(language === 'as' ? prod.featuresAs : prod.featuresEn).slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-lightgrey/60 dark:border-darkborder text-[11px] text-secondary dark:text-darkmuted">
                  <strong>Compatibility:</strong> {prod.compatibility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: Workshop Photographic Documentation */}
      <section className="py-16 bg-offwhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="badge-tech text-secondary dark:text-darkmuted uppercase tracking-wider text-xs mb-2">
                {home.galleryPreview.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
                {home.galleryPreview.title}
              </h2>
              <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted mt-1">
                {home.galleryPreview.description}
              </p>
            </div>
            <Link to="/gallery" className="btn-outline text-xs self-start md:self-auto">
              <span>{common.buttons.viewGallery}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className="card-premium dark:bg-darkcard dark:border-darkborder overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-charcoal/80 text-purewhite text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4 bg-purewhite dark:bg-darkcard border-t border-lightgrey dark:border-darkborder">
                  <h4 className="font-heading font-bold text-xs text-charcoal dark:text-darktext group-hover:text-orange transition-colors">
                    {language === 'as' ? item.titleAs : item.titleEn}
                  </h4>
                  <p className="text-[11px] text-secondary dark:text-darkmuted mt-1 line-clamp-2">
                    {language === 'as' ? item.descAs : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION K3: Business Statutory Details & Specialisations */}
      <BusinessStatutorySection />

      {/* SECTION L: Appointment Enquiry */}
      <section id="appointment-section" className="py-16 bg-offwhite dark:bg-darkbg border-b border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="badge-tech text-secondary dark:text-darkmuted uppercase tracking-wider text-xs">
                {home.quickAppointment.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal dark:text-purewhite">
                {home.quickAppointment.title}
              </h2>
              <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted leading-relaxed">
                {home.quickAppointment.description}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-purewhite dark:bg-darkcard rounded-xl border border-lightgrey dark:border-darkborder space-y-2">
                  <span className="font-heading font-bold text-xs text-charcoal dark:text-purewhite flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange" />
                    Government Approved Fitment Facility
                  </span>
                  <p className="text-[11px] text-secondary dark:text-darkmuted leading-relaxed">
                    All installations comply with CMVR guidelines and include legitimate DTO documentation support.
                  </p>
                </div>

                <div className="p-4 bg-purewhite dark:bg-darkcard rounded-xl border border-lightgrey dark:border-darkborder space-y-2">
                  <span className="font-heading font-bold text-xs text-charcoal dark:text-purewhite flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange" />
                    Swift 1-Day Fitment Turnaround
                  </span>
                  <p className="text-[11px] text-secondary dark:text-darkmuted leading-relaxed">
                    Most standard 4-cylinder sequential kit installations are completed within 4 to 6 hours on appointment.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION M: Interactive Animated Location & Workshop Section */}
      <section id="workshop-location" className="py-16 sm:py-20 bg-purewhite dark:bg-darksurface border-t border-lightgrey dark:border-darkborder transition-colors">
        <div className="section-container space-y-10">
          {/* Section Heading with Animated Radar Beacon */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-orange-light dark:bg-orange/20 text-orange border border-orange/30 text-xs font-bold uppercase tracking-wider shadow-subtle">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange"></span>
                </span>
                <span>{language === 'as' ? 'লাইভ কৰ্মশালাৰ অৱস্থান • ৰাষ্ট্ৰীয় ঘাইপথ ৩৭' : 'Live Workshop GPS Location • NH-37 Garchuk'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-charcoal dark:text-purewhite tracking-tight">
                {language === 'as' ? 'গুৱাহাটীৰ আমাৰ প্ৰধান কৰ্মশালা দৰ্শন কৰক' : 'Visit Our Main Installation & Retrofitment Hub'}
              </h2>

              <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted leading-relaxed">
                {language === 'as'
                  ? 'নেজোন ষ্টীলৰ বিপৰীতে, ইণ্ডিয়ান অইল পেট্ৰ’ল পাম্প আৰু কুমাৰ ৰিজৰ্টৰ কাষতে অৱস্থিত। তলৰ লাইভ মেপ ব্যৱহাৰ কৰি পোনপটীয়াকৈ আহক।'
                  : 'Conveniently situated right on the NH-37 bypass at Paschim Boragaon, opposite Nezone Steel and near Indian Oil Petrol Pump & Kumar Resorts. Smooth highway access for all private cars, commercial fleets, and taxis.'}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://www.google.com/maps/place/26%C2%B007'12.1%22N+91%C2%B041'47.5%22E/@26.1200128,91.6965264,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg border border-bordergrey dark:border-darkborder bg-offwhite/80 dark:bg-darkcard hover:border-orange text-charcoal dark:text-darktext hover:text-orange text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-subtle hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Google Maps Pin</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange" />
              </a>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=26.1200128,91.6965264"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-orange hover:bg-orange-hover text-purewhite text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md hover:shadow-orange/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Workshop Facility Showcase Card (5 cols) */}
            <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl border border-lightgrey dark:border-darkborder bg-offwhite/60 dark:bg-darkcard space-y-6 flex flex-col justify-between shadow-subtle hover:shadow-hover transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="badge-orange text-[10px] font-bold">
                    {language === 'as' ? 'মুখ্য সংস্থাপন হাব' : 'Primary Installation Facility'}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open 7 Days
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-2xl text-charcoal dark:text-purewhite">
                    Maa Kamakhya Auto Gas
                  </h3>
                  <div className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-mono text-orange font-bold bg-orange/10 px-2 py-0.5 rounded">
                    <Compass className="w-3 h-3 text-orange" />
                    <span>26°07'12.1"N 91°41'47.5"E</span>
                  </div>
                </div>

                <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                  <span>Shop No. 7, Opposite Nezone Steel, Near Indian Oil Petrol Pump & Kumar Resorts, NH-37, Paschim Boragaon, Garchuk, Guwahati, Assam - 781035</span>
                </p>

                <div className="space-y-2.5 text-xs text-secondary dark:text-darkmuted pt-2 border-t border-lightgrey/80 dark:border-darkborder">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange shrink-0" />
                    <span className="font-medium">09:00 AM - 07:30 PM (Monday to Sunday - All 7 Days Open)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Government Endorsement Support • Computerized Tuning Bay</span>
                  </div>
                </div>

                {/* 3 Landmark Accessibility Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-purewhite dark:bg-darkbg border border-lightgrey/80 dark:border-darkborder flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
                    <span className="text-charcoal dark:text-purewhite font-medium">Opp. Nezone Steel</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purewhite dark:bg-darkbg border border-lightgrey/80 dark:border-darkborder flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
                    <span className="text-charcoal dark:text-purewhite font-medium">Near Indian Oil Pump</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purewhite dark:bg-darkbg border border-lightgrey/80 dark:border-darkborder flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
                    <span className="text-charcoal dark:text-purewhite font-medium">Near Kumar Resorts</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purewhite dark:bg-darkbg border border-lightgrey/80 dark:border-darkborder flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
                    <span className="text-charcoal dark:text-purewhite font-medium">NH-37 Highway Frontage</span>
                  </div>
                </div>
              </div>

              {/* Direct Workshop Contact Actions */}
              <div className="space-y-3 pt-4 border-t border-lightgrey/80 dark:border-darkborder">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <a
                    href="tel:+919678******"
                    className="py-2.5 px-3 rounded-lg bg-purewhite dark:bg-darkbg border border-lightgrey dark:border-darkborder hover:border-orange text-charcoal dark:text-purewhite hover:text-orange font-bold flex items-center justify-center gap-2 transition-all shadow-subtle active:scale-[0.98]"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange" />
                    <span className="truncate">+91 9678******</span>
                  </a>
                  <a
                    href="https://wa.me/919678******"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-purewhite font-bold flex items-center justify-center gap-2 transition-all shadow-subtle active:scale-[0.98]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-purewhite" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=26.1200128,91.6965264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-orange hover:bg-orange-hover text-purewhite text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-orange/30 transition-all active:scale-[0.99]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Start Turn-By-Turn Navigation</span>
                </a>
              </div>
            </div>

            {/* Right Column: Animated Interactive Map Embed with HUD Overlay (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl border border-lightgrey dark:border-darkborder overflow-hidden bg-offwhite dark:bg-darkcard min-h-[420px] shadow-premium relative group">
              {/* Animated Floating Top HUD Pill */}
              <div className="absolute top-4 left-4 z-10 bg-charcoal/90 dark:bg-darkbg/95 backdrop-blur-md text-purewhite px-4 py-2.5 rounded-xl border border-white/20 shadow-2xl flex items-center gap-3 pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange"></span>
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-heading font-extrabold text-xs text-purewhite leading-none">
                      Maa Kamakhya Auto Gas
                    </p>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      Live Pin
                    </span>
                  </div>
                  <p className="text-[10px] text-offwhite/75 font-mono mt-0.5">
                    26°07'12.1"N 91°41'47.5"E • Paschim Boragaon, NH-37
                  </p>
                </div>
              </div>

              {/* Floating Bottom Quick-Action Buttons */}
              <div className="absolute bottom-4 right-4 z-10 flex flex-wrap items-center gap-2">
                <a
                  href="https://www.google.com/maps/place/26%C2%B007'12.1%22N+91%C2%B041'47.5%22E/@26.1200128,91.6965264,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-purewhite/95 dark:bg-darkcard/95 backdrop-blur-md hover:bg-purewhite text-charcoal dark:text-purewhite text-xs font-heading font-bold shadow-xl border border-lightgrey/80 dark:border-darkborder flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3 text-orange" />
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=26.1200128,91.6965264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-orange hover:bg-orange-hover text-purewhite text-xs font-heading font-bold uppercase tracking-wider shadow-xl flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Route</span>
                </a>
              </div>

              {/* High-Precision Google Maps Embed Pinpointing 26.1200128, 91.6965264 */}
              <iframe
                title="Maa Kamakhya Auto Gas Exact GPS Location"
                src="https://maps.google.com/maps?q=26.1200128,91.6965264&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION J: Verified Customer Reviews & Live Feedback Desk (Transferred to Bottom) */}
      <CustomerReviewsSection />

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <Lightbox
          isOpen={true}
          onClose={() => setActiveLightboxIndex(null)}
          imageUrl={galleryData[activeLightboxIndex].imageUrl}
          title={language === 'as' ? galleryData[activeLightboxIndex].titleAs : galleryData[activeLightboxIndex].titleEn}
          description={language === 'as' ? galleryData[activeLightboxIndex].descAs : galleryData[activeLightboxIndex].descEn}
          onPrev={activeLightboxIndex > 0 ? () => setActiveLightboxIndex(activeLightboxIndex - 1) : undefined}
          onNext={activeLightboxIndex < galleryData.length - 1 ? () => setActiveLightboxIndex(activeLightboxIndex + 1) : undefined}
        />
      )}
    </>
  );
};
