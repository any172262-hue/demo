import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Info, X } from 'lucide-react';

const STORAGE_KEY = 'mk_demo_notice_dismissed';

export const DemoNoticeModal: React.FC = () => {
  const { language } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Check if dismissed in this session
    try {
      const isDismissed = sessionStorage.getItem(STORAGE_KEY);
      if (!isDismissed) {
        // Small delay so entrance animation executes smoothly after initial paint
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 350);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if sessionStorage is restricted
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore storage errors
    }
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 280);
  };

  // Keyboard accessibility: Escape key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus close button on open for accessibility
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      aria-describedby="demo-modal-desc"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      {/* Background Overlay */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-charcoal/60 dark:bg-black/75 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-2xl shadow-2xl p-6 sm:p-8 text-charcoal dark:text-darktext transition-all duration-300 ease-out transform ${
          isClosing
            ? 'scale-95 opacity-0 -translate-y-2'
            : 'scale-100 opacity-100 translate-y-0'
        }`}
      >
        {/* Top-Right Close (X) Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-purewhite hover:bg-lightgrey dark:hover:bg-darkborder/80 transition-colors focus:outline-none focus:ring-2 focus:ring-orange/40"
          aria-label="Close demo notice"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Body */}
        <div className="space-y-4 pt-1">
          {/* Information Badge Icon */}
          <div className="w-12 h-12 rounded-xl bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center font-bold shadow-sm border border-orange/20">
            <Info className="w-6 h-6 text-orange" />
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h2
              id="demo-modal-title"
              className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal dark:text-purewhite tracking-tight"
            >
              {language === 'as' ? 'এইখন এক ডেম’ ৱেবছাইট' : 'This Is a Demo Website'}
            </h2>
            <div className="w-10 h-1 bg-orange rounded" />
          </div>

          {/* Exact Message Body */}
          <p
            id="demo-modal-desc"
            className="text-sm text-secondary dark:text-darkmuted leading-relaxed"
          >
            {language === 'as' ? (
              <>
                এই ৱেবছাইটটো বৰ্তমান ডেম’ সংস্কৰণ হিচাপে উপলব্ধ। যদি আপুনি কোনো ধৰণৰ পৰিৱৰ্তন, নবীকৰণ বা সংশোধন কৰিব বিচাৰে, অনুগ্ৰহ কৰি{' '}
                <Link to="/contact" onClick={handleClose} className="text-orange font-semibold hover:underline">
                  আমাৰ সৈতে যোগাযোগ কৰক
                </Link>
                ।
              </>
            ) : (
              <>
                This website is currently available as a demo version. If you would like to make any changes, updates or modifications,{' '}
                <Link to="/contact" onClick={handleClose} className="text-orange font-semibold hover:underline">
                  please contact us
                </Link>
                .
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
