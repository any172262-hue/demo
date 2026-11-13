import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { AppointmentForm } from '../components/AppointmentForm';
import { Lightbox } from '../components/Lightbox';
import { servicesData } from '../data/servicesData';
import { productsData } from '../data/productsData';
import { galleryData, videoGalleryData } from '../data/galleryData';
import { testimonialsData } from '../data/testimonialsData';
import { faqsData } from '../data/faqsData';
import {
  ShieldCheck,
  Award,
  ChevronRight,
  ChevronLeft,
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
  Play,
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
    tag: 'RFC Bay #261',
    titleEn: 'Transport Dept. Authorized RFC Code No. 261',
    titleAs: 'পৰিবহণ বিভাগৰ অনুমোদিত আৰএফচি কেন্দ্ৰ নং ২৬১',
    descEn: 'Over 26 years of continuous engineering integrity and 15,000+ certified conversions across Delhi-NCR since 1998.',
    descAs: '২৬ বছৰৰ পেছাদাৰী অভিজ্ঞতা আৰু দিল্লী-এনচিআৰত ১৫,০০০+ সুৰক্ষিত বাহন ৰূপান্তৰ।',
  },
];

export const Home: React.FC = () => {
  const { language, home, common } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Parallax Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatic Hero Carousel: super smooth background crossfade every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <>
      <SEO
        title={home.hero.title}
        description={home.hero.subtitle}
        canonicalPath="/"
      />

      {/* SECTION B: Premium Automotive Hero with 4-Slide CNG Carousel (Super Smooth & Parallax Scroll) */}
      <section className="relative bg-[#111317] text-purewhite pt-10 sm:pt-14 pb-32 sm:pb-40 overflow-hidden border-b border-white/10 select-none">
        {/* 4-Slide Background Images with Super Smooth Parallax & Seamless Crossfade */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(0, ${Math.min(scrollY * 0.32, 160)}px, 0)`,
          }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out will-change-[opacity,transform] ${
                index === currentSlide ? 'opacity-45' : 'opacity-0'
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={slide.titleEn}
                className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                  index === currentSlide ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          ))}

          {/* Cinematic Dual Vignette & Dark Overlay for Maximum Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111317]/85 via-[#111317]/70 to-[#111317]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#111317]/60 to-[#111317]" />
        </div>

        {/* Carousel Arrow Navigation (Desktop/Tablet) */}
        <button
          type="button"
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-orange text-purewhite border border-white/20 backdrop-blur-md items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-orange text-purewhite border border-white/20 backdrop-blur-md items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Main Hero Content */}
        <div className="section-container relative z-10 text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow with Active Slide Category Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-orange text-xs font-bold uppercase tracking-wider shadow-inner">
            <ShieldCheck className="w-4 h-4 text-orange shrink-0" />
            <span>RFC Code No. 261 • Govt. Certified Retrofitment Facility —</span>
          </div>

          {/* Bold Headline with Thrifty Orange Highlight */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-purewhite leading-tight tracking-tight">
            Precision CNG Engineering &{' '}
            <span className="text-orange block sm:inline">Certified Retrofitting</span>
          </h1>

          {/* Stable Hero Description (Smooth and distraction-free) */}
          <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {language === 'as'
              ? '১৯৯৮ চনৰ পৰা দিল্লী-এনচিআৰত নিৰ্ভৰযোগ্য চিএনজি ৰূপান্তৰ, কম্পিউটাৰাইজড ইচিইউ টিউনিং আৰু চিলিণ্ডাৰ হাইড্ৰ’-টেষ্টিং সেৱা।'
              : 'Certified sequential CNG systems, digital ECU calibration, and statutory cylinder hydro-testing. Delhi-NCR’s premier government-approved retrofitment center since 1998.'}
          </p>

          {/* Thrifty Dual Pill Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/services"
              className="bg-purewhite hover:bg-lightgrey text-charcoal font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-100 flex items-center gap-2"
            >
              <span>{home.hero.ctaServices}</span>
              <ChevronRight className="w-4 h-4 text-orange" />
            </Link>
            <Link
              to="/book-appointment"
              className="bg-orange hover:bg-orange-hover text-purewhite font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-xl hover:shadow-orange/30 transition-all duration-200 hover:scale-105 active:scale-100 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{home.hero.ctaAppointment}</span>
            </Link>
          </div>
        </div>

        {/* Animated Scroll Down Indicator (Fades gracefully on scroll) */}
        <div
          className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 transition-all duration-300 pointer-events-auto ${
            scrollY > 60 ? 'opacity-0 translate-y-3 pointer-events-none' : 'opacity-90 translate-y-0'
          }`}
        >
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('features-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: window.innerHeight * 0.75, behavior: 'smooth' });
              }
            }}
            className="group flex flex-col items-center gap-1.5 text-white/70 hover:text-orange transition-colors cursor-pointer"
            aria-label="Scroll down to explore"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/60 group-hover:text-orange transition-colors">
              Scroll to Explore
            </span>
            <div className="w-5 h-8 rounded-full border border-white/30 group-hover:border-orange flex items-start justify-center p-1 backdrop-blur-sm bg-white/5 transition-colors shadow-lg">
              <div className="w-1 h-2 rounded-full bg-orange animate-bounce" />
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-orange -mt-0.5 animate-pulse" />
          </button>
        </div>
      </section>

      {/* SECTION B2: Thrifty Floating Feature Cards (Overlapping Hero with Smooth Scroll Entry) */}
      <section
        id="features-section"
        className="relative z-20 -mt-16 sm:-mt-20 pb-12 transition-transform duration-300"
      >
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-purewhite rounded-2xl shadow-premium border border-lightgrey p-8 text-center flex flex-col justify-between hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-full bg-orange-light text-orange mx-auto flex items-center justify-center mb-5 shadow-sm">
                  <Wrench className="w-6 h-6 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2.5">
                  Sequential CNG Systems
                </h3>
                <p className="text-xs text-secondary leading-relaxed mb-6">
                  {language === 'as'
                    ? 'উচ্চ মানৰ ছিকুৱেনচিয়েল গেছ ইনজেকচন প্ৰযুক্তি সংস্থাপন আৰু ৬০-৭০% ইন্ধন সাশ্ৰয়।'
                    : 'High-precision multipoint gas injection with dedicated digital ECU for petrol-like acceleration and 60-70% fuel cost savings.'}
                </p>
              </div>
              <div>
                <Link
                  to="/services/cng-kit-installation"
                  className="inline-flex items-center gap-1.5 border border-orange text-orange hover:bg-orange hover:text-purewhite px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <span>{common.buttons.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-purewhite rounded-2xl shadow-premium border border-lightgrey p-8 text-center flex flex-col justify-between hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-full bg-orange-light text-orange mx-auto flex items-center justify-center mb-5 shadow-sm">
                  <Cpu className="w-6 h-6 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2.5">
                  ECU Tuning & Calibration
                </h3>
                <p className="text-xs text-secondary leading-relaxed mb-6">
                  {language === 'as'
                    ? 'OBD-II সংযোগৰ জৰিয়তে ডিজিটেল ফুৱেল মেপিং আৰু লেগ-মুক্ত স্মুথ পিক-আপ।'
                    : 'Computerized real-time fuel mapping and timing advancer tuning to eliminate engine knock, RPM lag, and check-engine warnings.'}
                </p>
              </div>
              <div>
                <Link
                  to="/services/ecu-tuning-calibration"
                  className="inline-flex items-center gap-1.5 border border-orange text-orange hover:bg-orange hover:text-purewhite px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <span>{common.buttons.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-purewhite rounded-2xl shadow-premium border border-lightgrey p-8 text-center flex flex-col justify-between hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-full bg-orange-light text-orange mx-auto flex items-center justify-center mb-5 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-orange" />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2.5">
                  Cylinder Hydro Testing
                </h3>
                <p className="text-xs text-secondary leading-relaxed mb-6">
                  {language === 'as'
                    ? 'PESO অনুমোদিত ৩৩০ বাৰ হাইড্ৰ\'ষ্টেটিক চাপ পৰীক্ষা আৰু চৰকাৰী প্ৰমাণপত্ৰ।'
                    : 'Statutory 3-year 330-bar water jacket hydrostatic pressure inspection with authorized compliance certificate.'}
                </p>
              </div>
              <div>
                <Link
                  to="/services/cylinder-hydro-testing"
                  className="inline-flex items-center gap-1.5 border border-orange text-orange hover:bg-orange hover:text-purewhite px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <span>{common.buttons.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B3: Thrifty Business Statistics Slate Cards */}
      <section className="py-12 bg-purewhite border-b border-lightgrey">
        <div className="section-container text-center">
          <span className="text-orange text-xs font-bold uppercase tracking-wider block mb-1">
            Business Statistics —
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal mb-8">
            Grow with <span className="text-orange">Certified Fuel Engineering</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {home.hero.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#EEF1F6] border border-[#DFE3E8] rounded-2xl p-6 text-center hover:border-orange/50 transition-colors shadow-subtle"
              >
                <span className="block font-heading font-black text-3xl sm:text-4xl text-charcoal mb-1">
                  {stat.value}
                </span>
                <span className="block text-xs font-semibold text-secondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: Company Overview */}
      <section className="py-16 bg-purewhite border-b border-lightgrey">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="badge-tech text-secondary uppercase tracking-wider text-xs">
                {home.overview.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
                {home.overview.title}
              </h2>
              <p className="text-sm font-semibold text-charcoal leading-relaxed">
                {home.overview.lead}
              </p>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {home.overview.p1}
              </p>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {home.overview.p2}
              </p>

              <div className="pt-2">
                <Link to="/about" className="btn-secondary text-xs">
                  <span>{common.buttons.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {home.overview.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-lightgrey bg-offwhite/50 space-y-2 hover:border-orange/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-light flex items-center justify-center text-orange">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-xs text-charcoal leading-snug">
                    {h}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: Thrifty Theme Services Showcase */}
      <section className="py-16 bg-offwhite border-b border-lightgrey">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-orange text-xs font-bold uppercase tracking-wider block mb-1">
              Automotive Engineering —
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
              Our <span className="text-orange">Specialized Services</span>
            </h2>
            <div className="w-12 h-1 bg-orange rounded-full mx-auto my-3" />
            <p className="text-xs sm:text-sm text-secondary mt-2">
              {home.servicesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-purewhite font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg hover:shadow-orange/20 transition-all hover:scale-105"
            >
              <span>{common.buttons.exploreServices}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION E: Why Choose Us */}
      <section className="py-16 bg-purewhite border-b border-lightgrey">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="badge-tech text-secondary uppercase tracking-wider text-xs mb-2">
              {home.whyChooseUs.sectionTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
              {home.whyChooseUs.title}
            </h2>
            <p className="text-xs sm:text-sm text-secondary mt-1">
              {home.whyChooseUs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {home.whyChooseUs.cards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-lightgrey bg-offwhite/40 hover:bg-purewhite hover:shadow-subtle hover:border-orange/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-light text-orange flex items-center justify-center font-heading font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-sm text-charcoal mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F: How It Works */}
      <section className="py-16 bg-offwhite border-b border-lightgrey">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-tech text-secondary uppercase tracking-wider text-xs mb-2">
              {home.howItWorks.sectionTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
              {home.howItWorks.title}
            </h2>
            <p className="text-xs sm:text-sm text-secondary mt-1">
              {home.howItWorks.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {home.howItWorks.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-purewhite p-6 rounded-xl border border-lightgrey relative overflow-hidden shadow-subtle"
              >
                <span className="font-heading font-black text-3xl text-orange/20 block mb-2">
                  {st.step}
                </span>
                <h3 className="font-heading font-bold text-sm text-charcoal mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G: Partner Brands & Products */}
      <section className="py-16 bg-purewhite border-b border-lightgrey">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="badge-tech text-secondary uppercase tracking-wider text-xs mb-2">
                {home.brandsSection.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
                {home.brandsSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-secondary mt-1">
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
                className="card-premium p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-secondary mb-3">
                    <span className="font-mono text-[10px] bg-lightgrey px-2 py-0.5 rounded">
                      {prod.origin}
                    </span>
                    <span className="text-emerald-700 font-semibold text-[10px]">
                      {prod.status}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-charcoal mb-2">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-secondary leading-relaxed mb-4">
                    {language === 'as' ? prod.descriptionAs : prod.descriptionEn}
                  </p>

                  <ul className="space-y-1.5 text-xs text-secondary mb-4">
                    {(language === 'as' ? prod.featuresAs : prod.featuresEn).slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-lightgrey/60 text-[11px] text-secondary">
                  <strong>Compatibility:</strong> {prod.compatibility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: Workshop Photographic Documentation */}
      <section className="py-16 bg-offwhite border-b border-lightgrey">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="badge-tech text-secondary uppercase tracking-wider text-xs mb-2">
                {home.galleryPreview.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
                {home.galleryPreview.title}
              </h2>
              <p className="text-xs sm:text-sm text-secondary mt-1">
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
                className="card-premium overflow-hidden group cursor-pointer"
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
                <div className="p-4 bg-purewhite border-t border-lightgrey">
                  <h4 className="font-heading font-bold text-xs text-charcoal group-hover:text-orange transition-colors">
                    {language === 'as' ? item.titleAs : item.titleEn}
                  </h4>
                  <p className="text-[11px] text-secondary mt-1 line-clamp-2">
                    {language === 'as' ? item.descAs : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION I: Video Gallery Preview */}
      <section className="py-16 bg-purewhite border-b border-lightgrey">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="badge-tech text-secondary uppercase tracking-wider text-xs mb-2">
                {home.videosPreview.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
                {home.videosPreview.title}
              </h2>
              <p className="text-xs sm:text-sm text-secondary mt-1">
                {home.videosPreview.description}
              </p>
            </div>
            <Link to="/videos" className="btn-outline text-xs self-start md:self-auto">
              <span>{common.buttons.viewAll}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoGalleryData.map((vid) => (
              <div
                key={vid.id}
                className="card-premium overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video bg-charcoaldark overflow-hidden">
                    <img
                      src={vid.thumbnailUrl}
                      alt={vid.titleEn}
                      className="w-full h-full object-cover opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-orange text-purewhite flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-charcoaldark/90 text-purewhite text-[10px] font-mono px-2 py-0.5 rounded">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-4">
                    <h4 className="font-heading font-bold text-xs text-charcoal mb-2">
                      {language === 'as' ? vid.titleAs : vid.titleEn}
                    </h4>
                    <p className="text-[11px] text-secondary leading-relaxed">
                      {language === 'as' ? vid.descriptionAs : vid.descriptionEn}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    to="/videos"
                    className="text-xs font-semibold text-orange hover:underline inline-flex items-center gap-1"
                  >
                    <span>Watch Demonstration</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION J: Thrifty Theme Dark Testimonials Showcase */}
      <section className="py-16 bg-purewhite border-b border-lightgrey">
        <div className="section-container">
          <div className="bg-[#181B1F] rounded-3xl p-8 sm:p-12 text-purewhite relative shadow-2xl overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-orange text-xs font-bold uppercase tracking-wider block mb-1">
                Customer Testimonials —
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-purewhite">
                Trusted by <span className="text-orange">Vehicle Owners Across Delhi-NCR</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Big Featured Quote */}
              <blockquote className="text-base sm:text-lg text-white/90 font-medium italic leading-relaxed">
                "{language === 'as' ? testimonialsData[0].quoteAs : testimonialsData[0].quoteEn}"
              </blockquote>

              <div className="space-y-1">
                <span className="font-heading font-bold text-sm text-purewhite block">
                  {testimonialsData[0].name}
                </span>
                <span className="text-xs text-orange font-semibold block">
                  {testimonialsData[0].vehicle} • {testimonialsData[0].location}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Retrofitment Customer
                </span>
              </div>

              {/* More Testimonials Link */}
              <div className="pt-4">
                <Link
                  to="/testimonials"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-orange text-purewhite hover:text-orange px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>{common.buttons.viewAll} Reviews ({testimonialsData.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION K: Frequently Asked Questions (Accordion) */}
      <section className="py-16 bg-offwhite border-b border-lightgrey">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-orange text-xs font-bold uppercase tracking-wider block mb-1">
                {home.faqsSection.sectionTag} —
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
                Frequently Asked <span className="text-orange">Questions</span>
              </h2>
              <div className="w-10 h-1 bg-orange rounded-full mx-auto my-3" />
              <p className="text-xs sm:text-sm text-secondary mt-1">
                {home.faqsSection.description}
              </p>
            </div>

            <div className="space-y-3">
              {faqsData.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-lightgrey overflow-hidden bg-purewhite shadow-subtle transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-xs sm:text-sm text-charcoal hover:text-orange transition-colors"
                    >
                      <span>{language === 'as' ? faq.questionAs : faq.questionEn}</span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-orange' : 'text-secondary'
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-secondary leading-relaxed border-t border-lightgrey/40 animate-slide-up">
                        {language === 'as' ? faq.answerAs : faq.answerEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <Link to="/faqs" className="btn-secondary text-xs">
                <span>View All FAQs</span>
                <ChevronRight className="w-3.5 h-3.5 text-orange" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION K2: Thrifty Theme Dark Callout Banner ("Choose the Best") */}
      <section className="py-14 bg-purewhite border-b border-lightgrey">
        <div className="section-container">
          <div className="bg-[#181B1F] rounded-3xl p-8 sm:p-12 text-purewhite flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-3 max-w-xl">
              <span className="text-orange text-xs font-bold uppercase tracking-wider block">
                Why Choose Car's Energy Co. —
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-purewhite">
                Government Certified RFC Retrofitting Since 1998
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Take advantage of verified sequential gas propulsion technology, computerized ECU dyno-tuning, and authentic RTO endorsement backed by 26+ years of specialized engineering.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/book-appointment"
                className="bg-orange hover:bg-orange-hover text-purewhite font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-xl hover:shadow-orange/30 hover:scale-105 active:scale-100 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Technical Inspection</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION L: Appointment Enquiry */}
      <section id="appointment-section" className="py-16 bg-offwhite border-b border-lightgrey">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="badge-tech text-secondary uppercase tracking-wider text-xs">
                {home.quickAppointment.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
                {home.quickAppointment.title}
              </h2>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {home.quickAppointment.description}
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-purewhite rounded-xl border border-lightgrey space-y-2">
                  <span className="font-heading font-bold text-xs text-charcoal flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange" />
                    Government Certified Fitment (RFC 261)
                  </span>
                  <p className="text-[11px] text-secondary leading-relaxed">
                    All installations comply with CMVR guidelines and include legitimate RTO documentation support.
                  </p>
                </div>

                <div className="p-4 bg-purewhite rounded-xl border border-lightgrey space-y-2">
                  <span className="font-heading font-bold text-xs text-charcoal flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange" />
                    Swift 1-Day Fitment Turnaround
                  </span>
                  <p className="text-[11px] text-secondary leading-relaxed">
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

      {/* SECTION M: Contact & Map Section */}
      <section className="py-16 bg-purewhite">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mundka Facility Box */}
            <div className="p-6 sm:p-8 rounded-2xl border border-lightgrey bg-offwhite/50 space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge-orange text-[10px]">Primary Installation Hub</span>
                <span className="text-xs font-semibold text-secondary">Mundka, Delhi</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal">
                Mundka Primary Retrofitment Facility
              </h3>
              <p className="text-xs text-secondary leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                <span>215 & 216/5, Ground Floor, Opposite Metro Pillar Number 536, Mundka, Udyog Nagar (Kaleva Sweets Wali Gali), New Delhi – 110041</span>
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
                <a href="tel:+919212218180" className="inline-flex items-center gap-1.5 font-bold text-charcoal hover:text-orange">
                  <Phone className="w-3.5 h-3.5 text-orange" />
                  <span>+91 92122 18180</span>
                </a>
                <a href="https://wa.me/917982824255" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>+91 79828 24255</span>
                </a>
              </div>
            </div>

            {/* Paschim Vihar Facility Box */}
            <div className="p-6 sm:p-8 rounded-2xl border border-lightgrey bg-offwhite/50 space-y-4">
              <div className="flex items-center justify-between">
                <span className="badge-tech text-[10px]">Express Service Center</span>
                <span className="text-xs font-semibold text-secondary">Paschim Vihar, Delhi</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal">
                Paschim Vihar Express Center
              </h3>
              <p className="text-xs text-secondary leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                <span>Shop No. 21, C.S.C. A-4, Gole D.D.A. Market, Rohtak Road, Paschim Vihar, New Delhi – 110063</span>
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
                <a href="tel:+919212218180" className="inline-flex items-center gap-1.5 font-bold text-charcoal hover:text-orange">
                  <Phone className="w-3.5 h-3.5 text-orange" />
                  <span>+91 92122 18180</span>
                </a>
                <span className="text-secondary text-xs flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>10:30 AM – 02:00 PM (Wed Closed)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
