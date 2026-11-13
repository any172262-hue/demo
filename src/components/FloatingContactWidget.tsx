import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  MessageSquare,
  Phone,
  Calendar,
  X,
  Headphones,
  ChevronUp,
} from 'lucide-react';

export const FloatingContactWidget: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div
      ref={widgetRef}
      className="floating-control fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end"
      aria-label="Direct Workshop Contact Options"
    >
      {/* Expandable Menu Options */}
      {isOpen && (
        <div className="mb-3 w-64 bg-purewhite dark:bg-darksurface rounded-2xl shadow-2xl border border-lightgrey dark:border-darkborder p-3 space-y-2 animate-slide-up">
          <div className="px-2 py-1 border-b border-lightgrey dark:border-darkborder flex items-center justify-between">
            <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-charcoal dark:text-darktext">
              {language === 'as' ? 'কাৰিকৰী সহায়তা' : 'Technical Support'}
            </span>
            <span className="text-[10px] text-orange font-semibold">RFC #261</span>
          </div>

          {/* Option 1: WhatsApp */}
          <a
            href="https://wa.me/917982824255"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-charcoal dark:text-darktext group transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-purewhite flex items-center justify-center shrink-0 shadow-sm">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block font-heading font-bold text-xs text-charcoal dark:text-darktext group-hover:text-emerald-600 transition-colors">
                WhatsApp Direct
              </span>
              <span className="block text-[11px] text-secondary dark:text-darkmuted truncate">
                +91 79828 24255
              </span>
            </div>
          </a>

          {/* Option 2: Phone Hotline */}
          <a
            href="tel:+919212218180"
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-subtle dark:hover:bg-orange/10 text-charcoal dark:text-darktext group transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-charcoal dark:bg-darkcard text-purewhite flex items-center justify-center shrink-0 shadow-sm border border-charcoallight">
              <Phone className="w-4 h-4 text-orange" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block font-heading font-bold text-xs text-charcoal dark:text-darktext group-hover:text-orange transition-colors">
                {language === 'as' ? 'ফোন কৰক' : 'Call Workshop'}
              </span>
              <span className="block text-[11px] text-secondary dark:text-darkmuted truncate">
                +91 92122 18180
              </span>
            </div>
          </a>

          {/* Option 3: Book Appointment */}
          <Link
            to="/book-appointment"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-subtle dark:hover:bg-orange/10 text-charcoal dark:text-darktext group transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-orange text-purewhite flex items-center justify-center shrink-0 shadow-sm">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block font-heading font-bold text-xs text-charcoal dark:text-darktext group-hover:text-orange transition-colors">
                {language === 'as' ? 'বুকিং কৰক' : 'Book Inspection'}
              </span>
              <span className="block text-[11px] text-secondary dark:text-darkmuted truncate">
                {language === 'as' ? 'মুণ্ডকা আৰু পশ্চিম বিহাৰ' : 'Mundka & Paschim Vihar'}
              </span>
            </div>
          </Link>
        </div>
      )}

      {/* Main Trigger Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
        className="h-12 px-4 rounded-xl bg-orange hover:bg-orange-hover text-purewhite shadow-premium flex items-center gap-2.5 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange/40"
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="text-xs font-heading font-bold uppercase tracking-wider">
              {language === 'as' ? 'বন্ধ কৰক' : 'Close'}
            </span>
          </>
        ) : (
          <>
            <Headphones className="w-5 h-5" />
            <span className="text-xs font-heading font-bold uppercase tracking-wider hidden sm:inline">
              {language === 'as' ? 'সহায়তা' : 'Support'}
            </span>
          </>
        )}
      </button>
    </div>
  );
};
