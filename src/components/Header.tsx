import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SearchModal } from './SearchModal';
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
  Search,
  Sun,
  Moon,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const Header: React.FC = () => {
  const { language, setLanguage, common } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
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

  // Keyboard shortcut (Ctrl+K or Cmd+K) to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300">
        {/* 1. Top Industrial Announcement & Hotline Bar */}
        <div className="bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext text-[11px] font-medium py-1.5 px-4 border-b border-lightgrey dark:border-darkborder transition-colors">
          <div className="section-container flex items-center justify-between gap-2">
            {/* Left: Certification & Working Hours */}
            <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
              <span className="inline-flex items-center gap-1.5 text-charcoal dark:text-darktext font-semibold tracking-wide whitespace-nowrap">
                <span className="w-2 h-2 rounded-sm bg-emerald-600 shrink-0" />
                <ShieldCheck className="w-3.5 h-3.5 text-orange shrink-0" />
                <span className="truncate">{common.rfcCode}</span>
              </span>
              <span className="hidden md:inline text-secondary/40 dark:text-darkmuted/40">•</span>
              <span className="hidden md:inline-flex items-center gap-1.5 text-secondary dark:text-darkmuted whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-orange shrink-0" />
                <span>{common.contactBar.timing}</span>
              </span>
            </div>

            {/* Right: Phone, WhatsApp, and Language Switcher */}
            <div className="flex items-center gap-3 sm:gap-5 shrink-0 text-charcoal dark:text-darktext">
              <a
                href="tel:+919212218180"
                className="inline-flex items-center gap-1.5 hover:text-orange transition-colors group whitespace-nowrap"
                title="Call Car's Energy Workshop"
              >
                <Phone className="w-3 h-3 text-orange transition-transform duration-200 group-hover:scale-110" />
                <span className="font-semibold text-charcoal dark:text-darktext group-hover:text-orange">
                  +91 92122 18180
                </span>
              </a>

              <span className="text-secondary/40 dark:text-darkmuted/40 hidden sm:inline">|</span>

              <a
                href="https://wa.me/917982824255"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 hover:text-emerald-600 transition-colors whitespace-nowrap font-semibold"
                title="WhatsApp Direct Consultation"
              >
                <MessageSquare className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Bilingual Switcher */}
              <div className="ml-1 pl-2 sm:pl-3 border-l border-lightgrey dark:border-darkborder flex items-center">
                <div className="bg-purewhite dark:bg-darksurface rounded-md p-0.5 border border-bordergrey dark:border-darkborder flex items-center shadow-subtle">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase transition-all duration-200 ${
                      language === 'en'
                        ? 'bg-orange text-purewhite shadow-sm'
                        : 'text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-darktext'
                    }`}
                    aria-label="Switch to English"
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('as')}
                    className={`px-3 py-0.5 rounded-md text-[10px] font-bold transition-all duration-200 ${
                      language === 'as'
                        ? 'bg-orange text-purewhite shadow-sm'
                        : 'text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-darktext'
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

        {/* 2. Main Navigation Bar */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? 'nav-light-scrolled dark:bg-darksurface/95 py-2'
              : 'nav-light dark:bg-darksurface py-3'
          }`}
        >
          <div className="section-container flex items-center justify-between gap-3 xl:gap-6">
            {/* Logo Branding */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group select-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-light text-orange flex items-center justify-center border border-orange/20 group-hover:border-orange transition-all duration-200 shadow-sm shrink-0">
                <span className="font-heading font-black text-lg sm:text-xl text-orange tracking-tight">C</span>
                <span className="font-heading font-bold text-xs text-charcoal dark:text-purewhite -ml-0.5">E</span>
              </div>
              <div className="shrink-0">
                <span className="block font-heading font-extrabold text-base sm:text-lg text-charcoal dark:text-purewhite tracking-tight leading-none whitespace-nowrap">
                  CAR'S ENERGY <span className="text-orange">CO.</span>
                </span>
                <span className="text-[10px] text-secondary dark:text-darkmuted font-medium tracking-wide mt-1 whitespace-nowrap hidden xl:block">
                  {common.companyTagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links + Search + Theme Toggle + CTA */}
            <div className="hidden lg:flex items-center justify-end gap-1.5 xl:gap-3 shrink-0">
              <nav className="flex items-center gap-0.5 xl:gap-1">
                {/* Home */}
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    isActive('/') && location.pathname === '/'
                      ? 'nav-link-active font-bold'
                      : 'nav-link-inactive'
                  }`}
                >
                  <span>{common.nav.home}</span>
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  className={`px-3 py-2 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    isActive('/about')
                      ? 'nav-link-active font-bold'
                      : 'nav-link-inactive'
                  }`}
                >
                  <span>{common.nav.about}</span>
                </Link>

                {/* Services with Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <Link
                    to="/services"
                    className={`px-3 py-2 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${
                      isActive('/services')
                        ? 'nav-link-active font-bold'
                        : 'nav-link-inactive'
                    }`}
                  >
                    <span>{common.nav.services}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-orange' : 'text-secondary dark:text-darkmuted'
                      }`}
                    />
                  </Link>

                  {/* Animated Services Mega-Dropdown */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-[340px] nav-dropdown-light dark:bg-darksurface dark:border-darkborder rounded-xl p-3 mt-1.5 z-50 animate-slide-up shadow-premium">
                      <div className="px-3 py-2 border-b border-lightgrey dark:border-darkborder mb-2 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-secondary dark:text-darkmuted uppercase tracking-wider flex items-center gap-1.5">
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
                            className="group/item flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
                          >
                            <span className="truncate group-hover/item:translate-x-0.5 transition-transform">
                              {language === 'as' ? svc.titleAs : svc.titleEn}
                            </span>
                            <span className="text-[10px] text-secondary dark:text-darkmuted font-medium bg-lightgrey dark:bg-darkborder group-hover/item:bg-orange group-hover/item:text-purewhite px-2 py-0.5 rounded-md ml-2 shrink-0 transition-colors">
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
                  className={`px-3 py-2 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    isActive('/products')
                      ? 'nav-link-active font-bold'
                      : 'nav-link-inactive'
                  }`}
                >
                  <span>
                    Products<span className="hidden xl:inline"> & Brands</span>
                  </span>
                </Link>

                {/* Gallery Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleGalleryEnter}
                  onMouseLeave={handleGalleryLeave}
                >
                  <button
                    type="button"
                    className={`px-3 py-2 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer ${
                      isActive('/gallery') || isActive('/videos')
                        ? 'nav-link-active font-bold'
                        : 'nav-link-inactive'
                    }`}
                  >
                    <span>{common.nav.gallery}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        galleryDropdownOpen ? 'rotate-180 text-orange' : 'text-secondary dark:text-darkmuted'
                      }`}
                    />
                  </button>

                  {galleryDropdownOpen && (
                    <div className="absolute top-full left-0 w-52 nav-dropdown-light dark:bg-darksurface dark:border-darkborder rounded-xl p-2 mt-1.5 z-50 animate-slide-up shadow-premium">
                      <Link
                        to="/gallery"
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
                      >
                        <Camera className="w-4 h-4 text-orange shrink-0" />
                        <span>{common.nav.workshopGallery}</span>
                      </Link>
                      <Link
                        to="/videos"
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
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
                  className={`px-3 py-2 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    isActive('/testimonials')
                      ? 'nav-link-active font-bold'
                      : 'nav-link-inactive'
                  }`}
                >
                  <span>{common.nav.testimonials}</span>
                </Link>

                {/* FAQs */}
                <Link
                  to="/faqs"
                  className={`px-3 py-2 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    isActive('/faqs')
                      ? 'nav-link-active font-bold'
                      : 'nav-link-inactive'
                  }`}
                >
                  <span>{common.nav.faqs}</span>
                </Link>

                {/* Contact */}
                <Link
                  to="/contact"
                  className={`px-3 py-2 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    isActive('/contact')
                      ? 'nav-link-active font-bold'
                      : 'nav-link-inactive'
                  }`}
                >
                  <span>{common.nav.contact}</span>
                </Link>
              </nav>

              {/* SEARCH TRIGGER BUTTON (Section 2) */}
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="p-2 rounded-lg text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkborder hover:text-orange transition-colors"
                title="Search website (Ctrl+K)"
                aria-label="Open site search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* THEME TOGGLE BUTTON (Section 1) */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkborder hover:text-orange transition-colors"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-orange" />
                ) : (
                  <Moon className="w-4 h-4 text-secondary" />
                )}
              </button>

              {/* Subtle Divider */}
              <div className="h-5 w-px bg-lightgrey dark:bg-darkborder shrink-0 hidden xl:block mx-1" />

              {/* Rectangular Button CTA */}
              <Link
                to="/book-appointment"
                className="btn-primary text-xs uppercase tracking-wider whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Book Appointment</span>
              </Link>
            </div>

            {/* Mobile Controls: Search + Theme + Hamburger */}
            <div className="lg:hidden flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="p-2 rounded-lg text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkborder transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-secondary dark:text-darkmuted" />
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkborder transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-orange" />
                ) : (
                  <Moon className="w-5 h-5 text-secondary dark:text-darkmuted" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkborder transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-purewhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-slide-up shadow-premium text-charcoal dark:text-darktext transition-colors">
            {/* Mobile Search Bar Trigger */}
            <div className="mb-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchModalOpen(true);
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder bg-offwhite dark:bg-darkbg text-xs text-secondary dark:text-darkmuted text-left"
              >
                <Search className="w-4 h-4 text-secondary dark:text-darkmuted" />
                <span>
                  {language === 'as' ? 'ৱেবছাইটত সন্ধান কৰক...' : 'Search website...'}
                </span>
              </button>
            </div>

            <div className="space-y-1 mb-4">
              <Link
                to="/"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.home}
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.about}
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.services}
              </Link>
              <div className="pl-4 space-y-1 border-l-2 border-orange/40 ml-4 py-1">
                {servicesData.slice(0, 5).map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="block py-1 text-xs text-secondary dark:text-darkmuted hover:text-orange transition-colors"
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
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.products}
              </Link>
              <Link
                to="/gallery"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.workshopGallery}
              </Link>
              <Link
                to="/videos"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.videoGallery}
              </Link>
              <Link
                to="/testimonials"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.testimonials}
              </Link>
              <Link
                to="/faqs"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.faqs}
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.contact}
              </Link>
              <Link
                to="/get-in-touch"
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {language === 'as' ? 'যোগাযোগ (Get In Touch)' : 'Get In Touch'}
              </Link>
            </div>

            <div className="pt-4 border-t border-lightgrey dark:border-darkborder flex flex-col gap-3">
              <Link
                to="/book-appointment"
                className="btn-primary w-full justify-center text-xs uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>{common.buttons.bookNow}</span>
              </Link>

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-between pt-2 px-1 text-xs text-secondary dark:text-darkmuted">
                <span className="font-medium">{common.language.switcherLabel}:</span>
                <div className="flex items-center gap-1.5 bg-lightgrey dark:bg-darkborder p-1 rounded-md">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      language === 'en'
                        ? 'bg-orange text-purewhite shadow-sm'
                        : 'text-secondary dark:text-darkmuted hover:text-orange'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('as')}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      language === 'as'
                        ? 'bg-orange text-purewhite shadow-sm'
                        : 'text-secondary dark:text-darkmuted hover:text-orange'
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

      {/* Global Site Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
};
