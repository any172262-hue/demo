import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="floating-control fixed bottom-20 right-4 sm:right-6 z-40 w-10 h-10 rounded-lg bg-purewhite dark:bg-darksurface text-charcoal dark:text-darktext border border-lightgrey dark:border-darkborder shadow-premium hover:border-orange hover:text-orange focus:outline-none focus:ring-2 focus:ring-orange/40 active:scale-95 transition-all duration-200 flex items-center justify-center animate-fade-in"
    >
      <ArrowUp className="w-4 h-4 text-orange" />
    </button>
  );
};
