import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  Wrench,
  Calendar,
  Camera,
  Video,
  ArrowRight,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const Header: React.FC = () => {
  const { language, setLanguage, common } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const galleryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setGalleryDropdownOpen(false);
  }, [location.pathname]);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 120);
  };

  const handleGalleryEnter = () => {
    if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
    setGalleryDropdownOpen(true);
  };

  const handleGalleryLeave = () => {
    galleryTimeoutRef.current = setTimeout(() => {
      setGalleryDropdownOpen(false);
    }, 120);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Top Industrial Announcement & Hotline Bar (Frosted Dark Glass) */}
      <div className="bg-[#0E1116]/95 backdrop-blur-md text-offwhite/85 text-[11px] font-medium py-1.5 px-4 border-b border-white/10">
        <div className="section-container flex items-center justify-between gap-2">
          {/* Left: Certification & Working Hours */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 text-orange font-semibold tracking-wide whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{common.rfcCode}</span>
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-white/75 whitespace-nowrap">
              <Clock className="w-3 h-3 text-orange shrink-0" />
              <span>{common.contactBar.timing}</span>
            </span>
          </div>

          {/* Right: Phone, WhatsApp, and Language Switcher */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0 text-white/80">
            <a
              href="tel:+919212218180"
              className="inline-flex items-center gap-1.5 hover:text-orange transition-colors group whitespace-nowrap"
              title="Call Car's Energy Workshop"
            >
              <Phone className="w-3 h-3 text-orange transition-transform duration-200 group-hover:scale-110" />
              <span className="font-semibold text-purewhite group-hover:text-orange">
                +91 92122 18180
              </span>
            </a>

            <span className="text-white/20 hidden sm:inline">|</span>

            <a
              href="https://wa.me/917982824255"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors whitespace-nowrap"
              title="WhatsApp Direct Consultation"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Premium Bilingual Switcher Pill */}
            <div className="ml-1 pl-2 sm:pl-3 border-l border-white/15 flex items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-0.5 border border-white/15 flex items-center shadow-inner">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-orange text-purewhite shadow-sm'
                      : 'text-white/70 hover:text-purewhite'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('as')}
                  className={`px-3 py-0.5 rounded-full text-[10px] font-bold transition-all duration-200 ${
                    language === 'as'
                      ? 'bg-orange text-purewhite shadow-sm'
                      : 'text-white/70 hover:text-purewhite'
                  }`}
                  aria-label="Switch to Assamese"
                >
                  অসমীয়া
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Properly Managed Frosted Glass Effect) */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'nav-glass-scrolled py-2.5' : 'nav-glass-dark py-3'
        }`}
      >
        <div className="section-container flex items-center justify-between gap-3 xl:gap-6">
          {/* Logo Branding */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group select-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#222730]/90 backdrop-blur-md flex items-center justify-center text-orange border border-white/15 group-hover:border-orange/60 group-hover:bg-[#2C333E] transition-all duration-300 shadow-md shrink-0">
              <span className="font-heading font-black text-lg sm:text-xl text-orange tracking-tight">D</span>
              <span className="font-heading font-bold text-xs text-purewhite -ml-0.5">P</span>
            </div>
            <div className="shrink-0">
              <span className="block font-heading font-extrabold text-base sm:text-lg text-purewhite tracking-tight leading-none whitespace-nowrap">
                DEMO <span className="text-orange">PAGE</span>
              </span>
              <span className="text-[10px] text-white/60 font-medium tracking-wide mt-1 whitespace-nowrap hidden xl:block">
                {common.companyTagline}
              </span>
            </div>
          </Link>

          {/* Desktop Right Side: Frosted Glass Nav Links + Divider + Thrifty Orange Pill CTA */}
          <div className="hidden lg:flex items-center justify-end gap-1.5 xl:gap-3 shrink-0">
            <nav className="flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5">
              {/* Home */}
              <Link
                to="/"
                className={`px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive('/') && location.pathname === '/'
                    ? 'nav-pill-active font-bold'
                    : 'nav-pill-inactive'
                }`}
              >
                <span>{common.nav.home}</span>
              </Link>

              {/* About */}
              <Link
                to="/about"
                className={`px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive('/about')
                    ? 'nav-pill-active font-bold'
                    : 'nav-pill-inactive'
                }`}
              >
                <span>{common.nav.about}</span>
              </Link>

              {/* Services with Animated Frosted Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <Link
                  to="/services"
                  className={`px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1 ${
                    isActive('/services')
                      ? 'nav-pill-active font-bold'
                      : 'nav-pill-inactive'
                  }`}
                >
                  <span>{common.nav.services}</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-orange' : 'text-white/60'
                    }`}
                  />
                </Link>

                {/* Animated Services Mega-Dropdown (Frosted Dark Glass) */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-[340px] nav-glass-dropdown rounded-2xl p-3 mt-2 animate-slide-up z-50 shadow-2xl">
                    <div className="px-3 py-2 border-b border-white/10 mb-2 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white/70 uppercase tracking-wider flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-orange" />
                        {common.nav.allServices}
                      </span>
                      <Link
                        to="/services"
                        className="text-[11px] font-bold text-orange hover:underline inline-flex items-center gap-1"
                      >
                        <span>{common.buttons.viewAll} (10)</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="max-h-96 overflow-y-auto space-y-1 pr-1">
                      {servicesData.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          className="group/item flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-all duration-200"
                        >
                          <span className="truncate group-hover/item:translate-x-1 transition-transform duration-200">
                            {language === 'as' ? svc.titleAs : svc.titleEn}
                          </span>
                          <span className="text-[10px] text-white/60 font-medium bg-white/10 group-hover/item:bg-orange group-hover/item:text-purewhite px-2 py-0.5 rounded-md ml-2 shrink-0 transition-colors">
                            {language === 'as' ? svc.badgeAs : svc.badgeEn}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Products & Brands */}
              <Link
                to="/products"
                className={`px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive('/products')
                    ? 'nav-pill-active font-bold'
                    : 'nav-pill-inactive'
                }`}
              >
                <span>Products<span className="hidden xl:inline"> & Brands</span></span>
              </Link>

              {/* Gallery Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleGalleryEnter}
                onMouseLeave={handleGalleryLeave}
              >
                <button
                  type="button"
                  className={`px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1 ${
                    isActive('/gallery') || isActive('/videos')
                      ? 'nav-pill-active font-bold'
                      : 'nav-pill-inactive'
                  }`}
                >
                  <span>{common.nav.gallery}</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      galleryDropdownOpen ? 'rotate-180 text-orange' : 'text-white/60'
                    }`}
                  />
                </button>

                {galleryDropdownOpen && (
                  <div className="absolute top-full left-0 w-52 nav-glass-dropdown rounded-2xl p-2 mt-2 animate-slide-up z-50 shadow-2xl">
                    <Link
                      to="/gallery"
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
                    >
                      <Camera className="w-4 h-4 text-orange shrink-0" />
                      <span>{common.nav.workshopGallery}</span>
                    </Link>
                    <Link
                      to="/videos"
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
                    >
                      <Video className="w-4 h-4 text-orange shrink-0" />
                      <span>{common.nav.videoGallery}</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Testimonials */}
              <Link
                to="/testimonials"
                className={`px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive('/testimonials')
                    ? 'nav-pill-active font-bold'
                    : 'nav-pill-inactive'
                }`}
              >
                <span>{common.nav.testimonials}</span>
              </Link>

              {/* FAQs */}
              <Link
                to="/faqs"
                className={`px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive('/faqs')
                    ? 'nav-pill-active font-bold'
                    : 'nav-pill-inactive'
                }`}
              >
                <span>{common.nav.faqs}</span>
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive('/contact')
                    ? 'nav-pill-active font-bold'
                    : 'nav-pill-inactive'
                }`}
              >
                <span>{common.nav.contact}</span>
              </Link>
            </nav>

            {/* Subtle Glass Vertical Divider */}
            <div className="h-5 w-px bg-white/15 shrink-0 hidden xl:block mx-1" />

            {/* Thrifty Signature Bright Orange Pill CTA Button */}
            <Link
              to="/book-appointment"
              className="h-9 xl:h-10 px-4 xl:px-5 rounded-full bg-gradient-to-r from-orange to-[#FF7A1A] hover:from-[#E06410] hover:to-orange text-purewhite text-xs font-bold uppercase tracking-wider shadow-[0_4px_14px_rgba(244,119,33,0.35)] hover:shadow-[0_6px_20px_rgba(244,119,33,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-purewhite hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer (Frosted Dark Glass) */}
      {mobileMenuOpen && (
        <div className="lg:hidden nav-glass-dropdown border-b border-white/15 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-slide-up shadow-2xl text-white">
          <div className="space-y-1 mb-4">
            <Link
              to="/"
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
            >
              {common.nav.home}
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
            >
              {common.nav.about}
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
            >
              {common.nav.services}
            </Link>
            <div className="pl-4 space-y-1 border-l-2 border-orange/40 ml-4 py-1">
              {servicesData.slice(0, 5).map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="block py-1 text-xs text-white/70 hover:text-orange transition-colors"
                >
                  {language === 'as' ? s.titleAs : s.titleEn}
                </Link>
              ))}
              <Link to="/services" className="block py-1 text-xs font-bold text-orange">
                {common.buttons.viewAll} ({servicesData.length}) →
              </Link>
            </div>
            <Link
              to="/products"
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
            >
              {common.nav.products}
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
            >
              {common.nav.workshopGallery}
            </Link>
            <Link
              to="/videos"
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
            >
              {common.nav.videoGallery}
            </Link>
            <Link
              to="/testimonials"
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
            >
              {common.nav.testimonials}
            </Link>
            <Link
              to="/faqs"
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
            >
              {common.nav.faqs}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-orange transition-colors"
            >
              {common.nav.contact}
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="/book-appointment"
              className="w-full justify-center py-3 text-xs uppercase tracking-wider rounded-full bg-gradient-to-r from-orange to-[#FF7A1A] text-purewhite font-bold flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>{common.buttons.bookNow}</span>
            </Link>

            <div className="flex items-center justify-between pt-2 px-1 text-xs text-white/70">
              <span className="font-medium">{common.language.switcherLabel}:</span>
              <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-full">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    language === 'en'
                      ? 'bg-orange text-purewhite shadow-sm'
                      : 'text-white/80 hover:text-orange'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('as')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    language === 'as'
                      ? 'bg-orange text-purewhite shadow-sm'
                      : 'text-white/80 hover:text-orange'
                  }`}
                >
                  অসমীয়া
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
