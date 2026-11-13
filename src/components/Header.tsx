import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  MapPin,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { headerServiceOptions } from '../data/statutoryData';

export const Header: React.FC = () => {
  const { language, setLanguage, common } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const galleryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;
    const SCROLL_THRESHOLD = 50; // Transforms smoothly when user scrolls down ~50px

    const updateScrollState = () => {
      const isScrolled = window.scrollY > SCROLL_THRESHOLD;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    // Run once on mount to handle reloads / deep links
    updateScrollState();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcuts: (Ctrl+K or Cmd+K) to open search, Escape to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      } else if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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
      {/* 1. Top Industrial Announcement & Hotline Bar (Natural page flow, scrolls away cleanly without layout shifts) */}
      <div className="w-full bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext text-[11px] font-medium py-1.5 px-4 border-b border-lightgrey dark:border-darkborder transition-colors">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 flex items-center justify-between gap-2">
            {/* Left: Working Hours & Workshop Location (Tablet & Desktop) */}
            <div className="hidden sm:flex items-center gap-3 sm:gap-4 overflow-hidden min-w-0">
              <span className="inline-flex items-center gap-1.5 text-charcoal dark:text-darktext font-medium tracking-wide whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-orange shrink-0" />
                <span>{common.contactBar.timing}</span>
              </span>
              <span className="hidden md:inline text-secondary/40 dark:text-darkmuted/40">•</span>
              <Link
                to="/map"
                className="hidden md:inline-flex items-center gap-1.5 text-secondary dark:text-darkmuted hover:text-orange transition-colors whitespace-nowrap group"
                title="Workshop Location on NH-37, Garchuk"
              >
                <MapPin className="w-3.5 h-3.5 text-orange shrink-0 group-hover:scale-110 transition-transform" />
                <span>Garchuk, NH-37 (Live Map)</span>
              </Link>
            </div>

            {/* Right: Phone, WhatsApp, and Language Switcher */}
            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3 sm:gap-5 shrink-0 text-charcoal dark:text-darktext">
              <a
                href="tel:+919678******"
                className="inline-flex items-center gap-1.5 hover:text-orange transition-colors group whitespace-nowrap"
                title="Call Maa Kamakhya Auto Gas Workshop"
              >
                <Phone className="w-3 h-3 text-orange transition-transform duration-200 group-hover:scale-110" />
                <span className="font-semibold text-charcoal dark:text-darktext group-hover:text-orange text-xs sm:text-[11px]">
                  +91 9678******
                </span>
              </a>

              <a
                href="https://wa.me/919678******"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 hover:text-emerald-600 transition-colors whitespace-nowrap font-semibold text-xs sm:text-[11px]"
                title="WhatsApp Direct Consultation"
              >
                <MessageSquare className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Bilingual Switcher */}
              <div className="pl-2 sm:pl-3 border-l border-lightgrey dark:border-darkborder flex items-center">
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

        {/* 2. Main Sticky Two-State Navigation Bar */}
        <header
          className={`sticky top-0 z-50 w-full transition-all duration-350 ease-in-out ${
            scrolled
              ? 'pt-2 sm:pt-2.5 pb-2 px-3 sm:px-5 lg:px-6 pointer-events-none'
              : 'pt-0 pb-0 px-0 pointer-events-auto'
          }`}
        >
          <div
            className={`navbar w-full transition-all duration-350 ease-in-out pointer-events-auto ${
              scrolled
                ? 'scrolled nav-light-scrolled max-w-[1440px] mx-auto rounded-2xl py-2 px-3 sm:px-5 lg:px-6'
                : 'nav-light rounded-none py-2.5 sm:py-3.5 px-3 sm:px-6 xl:px-8'
            }`}
          >
            <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">
              {/* Logo Branding */}
              <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group select-none">
                <div
                  className={`rounded-lg bg-orange-light text-orange flex items-center justify-center border border-orange/20 group-hover:border-orange transition-all duration-350 shadow-sm shrink-0 ${
                    scrolled ? 'w-8 h-8 sm:w-8.5 sm:h-8.5' : 'w-9.5 h-9.5 sm:w-10 sm:h-10'
                  }`}
                >
                  <span
                    className={`font-heading font-black text-orange tracking-tight transition-all duration-350 ${
                      scrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
                    }`}
                  >
                    M
                  </span>
                  <span className="font-heading font-bold text-xs text-charcoal dark:text-purewhite -ml-0.5">K</span>
                </div>
                <div className="shrink-0">
                  <span
                    className={`block font-heading font-extrabold text-charcoal dark:text-purewhite tracking-tight leading-none whitespace-nowrap transition-all duration-350 ${
                      scrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg'
                    }`}
                  >
                    MAA KAMAKHYA <span className="text-orange">AUTO GAS</span>
                  </span>
                  {!scrolled && (
                    <span className="text-[10px] text-secondary dark:text-darkmuted font-medium tracking-wide mt-1 whitespace-nowrap hidden 2xl:block transition-all duration-350">
                      {common.companyTagline}
                    </span>
                  )}
                </div>
              </Link>

            {/* Desktop Navigation Links + Search + Theme Toggle + CTA */}
            <div className="hidden lg:flex items-center justify-end gap-2 xl:gap-3 shrink-0">
              <nav className="flex items-center gap-0.5 xl:gap-1">
                {/* Home */}
                <Link
                  to="/"
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
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
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
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
                    to="/#services-specialisations"
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        const el = document.getElementById('services-specialisations') || document.getElementById('statutory-details');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                          window.history.pushState(null, '', '#services-specialisations');
                        }
                      }
                    }}
                    className={`px-2 lg:px-2 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${
                      isActive('/services') || location.hash === '#services-specialisations'
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
                    <div className="absolute top-full left-0 w-[380px] nav-dropdown-light dark:bg-darksurface dark:border-darkborder rounded-xl p-3 mt-1.5 z-50 animate-slide-up shadow-premium">
                      <div className="px-3 py-2 border-b border-lightgrey dark:border-darkborder mb-2 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-secondary dark:text-darkmuted uppercase tracking-wider flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5 text-orange" />
                          <span>{language === 'as' ? 'অনুমোদিত সেৱা বিকল্প' : 'Trade & Service Options'}</span>
                        </span>
                        <Link
                          to="/#services-specialisations"
                          onClick={(e) => {
                            setServicesDropdownOpen(false);
                            if (location.pathname === '/') {
                              e.preventDefault();
                              const el = document.getElementById('services-specialisations') || document.getElementById('statutory-details');
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                                window.history.pushState(null, '', '#services-specialisations');
                              }
                            }
                          }}
                          className="text-[11px] font-bold text-orange hover:underline inline-flex items-center gap-1"
                        >
                          <span>{common.buttons.viewAll} ({headerServiceOptions.length})</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="max-h-96 overflow-y-auto space-y-1 pr-1">
                        {headerServiceOptions.map((svc) => (
                          <Link
                            key={svc.id}
                            to="/#services-specialisations"
                            onClick={(e) => {
                              setServicesDropdownOpen(false);
                              if (location.pathname === '/') {
                                e.preventDefault();
                                const el = document.getElementById('services-specialisations') || document.getElementById('statutory-details');
                                if (el) {
                                  el.scrollIntoView({ behavior: 'smooth' });
                                  window.history.pushState(null, '', '#services-specialisations');
                                }
                              }
                            }}
                            className="group/item flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
                          >
                            <span className="truncate group-hover/item:translate-x-0.5 transition-transform">
                              {language === 'as' ? svc.nameAs : svc.nameEn}
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

                {/* Products */}
                <Link
                  to="/products"
                  className={`px-2 lg:px-2 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    isActive('/products')
                      ? 'nav-link-active font-bold'
                      : 'nav-link-inactive'
                  }`}
                >
                  <span>{common.nav.products}</span>
                </Link>

                {/* Gallery */}
                <Link
                  to="/gallery"
                  className={`px-2 lg:px-2 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    isActive('/gallery')
                      ? 'nav-link-active font-bold'
                      : 'nav-link-inactive'
                  }`}
                >
                  <span>{common.nav.gallery}</span>
                </Link>

                {/* Testimonials */}
                <Link
                  to="/testimonials"
                  className={`px-2 lg:px-2 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
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
                  className={`px-2 lg:px-2 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
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
                  className={`px-2 lg:px-2 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    isActive('/contact')
                      ? 'nav-link-active font-bold'
                      : 'nav-link-inactive'
                  }`}
                >
                  <span>{common.nav.contact}</span>
                </Link>
              </nav>

              {/* Desktop Right Toolbar: Search + Theme + Workshop Live Map */}
              <div className="flex items-center gap-1 xl:gap-1.5 pl-2 border-l border-lightgrey dark:border-darkborder shrink-0">
                <button
                  type="button"
                  onClick={() => setSearchModalOpen(true)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkborder hover:text-orange transition-colors"
                  title="Search website (Ctrl+K)"
                  aria-label="Open site search"
                >
                  <Search className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkborder hover:text-orange transition-colors"
                  title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-orange" />
                  ) : (
                    <Moon className="w-4 h-4 text-secondary" />
                  )}
                </button>

                {/* WORKSHOP MAP BUTTON - Cleanly Aligned & Animated Direct Navigation to /map */}
                <Link
                  to="/map"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-purewhite bg-orange hover:bg-orange-hover hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-orange/25 whitespace-nowrap cursor-pointer shrink-0 group ml-0.5"
                  title={language === 'as' ? 'কৰ্মশালাৰ লাইভ মানচিত্ৰ খোলক' : 'Open Workshop Live Map'}
                >
                  <MapPin className="w-3.5 h-3.5 text-purewhite group-hover:scale-125 group-hover:-translate-y-0.5 transition-all duration-300" />
                  <span>{language === 'as' ? 'মানচিত্ৰ' : 'Map'}</span>
                </Link>
              </div>
            </div>

            {/* Mobile Controls: Search + Map + Hamburger (Three-line button) */}
            <div className="lg:hidden flex items-center gap-1 xs:gap-1.5 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="p-1 sm:p-2 rounded-lg text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkborder transition-colors"
                aria-label="Search"
                title="Search website"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-secondary dark:text-darkmuted" />
              </button>

              {/* Mobile Map Button - Always visible on mobile navbar, direct navigation to /map with animation */}
              <Link
                to="/map"
                className="inline-flex items-center gap-1 p-1 xs:px-2.5 xs:py-1.5 rounded-lg text-xs font-bold text-purewhite bg-orange hover:bg-orange-hover hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm whitespace-nowrap cursor-pointer shrink-0"
                title={language === 'as' ? 'কৰ্মশালাৰ লাইভ মানচিত্ৰ খোলক' : 'Open Workshop Live Map'}
                aria-label="Open Workshop Live Map"
              >
                <MapPin className="w-3.5 h-3.5 text-purewhite" />
                <span className="hidden xs:inline text-[11px] font-bold">{language === 'as' ? 'মানচিত্ৰ' : 'Map'}</span>
              </Link>

              {/* Three-line Menu Button (Hamburger) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 sm:p-2 rounded-lg text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkborder transition-colors focus:outline-none shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-purewhite dark:bg-darksurface border border-lightgrey dark:border-darkborder rounded-2xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-slide-up shadow-premium text-charcoal dark:text-darktext transition-colors pointer-events-auto">
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
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.home}
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.about}
              </Link>
              <Link
                to="/#services-specialisations"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (location.pathname === '/') {
                    const el = document.getElementById('services-specialisations') || document.getElementById('statutory-details');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.services}
              </Link>
              <div className="pl-4 space-y-1 border-l-2 border-orange/40 ml-4 py-1">
                {headerServiceOptions.map((s) => (
                  <Link
                    key={s.id}
                    to="/#services-specialisations"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (location.pathname === '/') {
                        const el = document.getElementById('services-specialisations') || document.getElementById('statutory-details');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block py-1 text-xs text-secondary dark:text-darkmuted hover:text-orange transition-colors"
                  >
                    {language === 'as' ? s.nameAs : s.nameEn}
                  </Link>
                ))}
                <Link
                  to="/#services-specialisations"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname === '/') {
                      const el = document.getElementById('services-specialisations') || document.getElementById('statutory-details');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block py-1 text-xs font-bold text-orange"
                >
                  {common.buttons.viewAll} ({headerServiceOptions.length}) →
                </Link>
              </div>
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.products}
              </Link>
              <Link
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.gallery}
              </Link>
              <Link
                to="/testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.testimonials}
              </Link>
              <Link
                to="/faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.faqs}
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-charcoal dark:text-darktext hover:bg-orange-light dark:hover:bg-orange/15 hover:text-orange transition-colors"
              >
                {common.nav.contact}
              </Link>
            </div>

            <div className="pt-4 border-t border-lightgrey dark:border-darkborder flex flex-col gap-3">
              <Link
                to="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full justify-center text-xs uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>{common.buttons.bookNow}</span>
              </Link>

              {/* Mobile Settings: Dark Mode Button (Transferred to Three-Line Section) & Language Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-lightgrey dark:border-darkborder text-xs">
                {/* Transferred Dark Mode Toggle Button */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-lightgrey dark:border-darkborder bg-offwhite dark:bg-darkbg text-charcoal dark:text-darktext hover:text-orange hover:border-orange/40 transition-colors font-semibold text-xs shadow-sm active:scale-95"
                  aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-4 h-4 text-orange" />
                      <span>{language === 'as' ? 'লাইট ম’ড' : 'Light Mode'}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-secondary dark:text-darkmuted" />
                      <span>{language === 'as' ? 'ডাৰ্ক ম’ড' : 'Dark Mode'}</span>
                    </>
                  )}
                </button>

                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-1 bg-lightgrey dark:bg-darkborder p-1 rounded-md shadow-sm">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      language === 'en'
                        ? 'bg-orange text-purewhite shadow-sm'
                        : 'text-secondary dark:text-darkmuted hover:text-orange'
                    }`}
                  >
                    EN
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
