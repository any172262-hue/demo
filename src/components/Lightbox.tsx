import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoaldark/90 backdrop-blur-sm p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-purewhite rounded-2xl overflow-hidden shadow-2xl border border-charcoallight"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-charcoal/70 text-purewhite hover:bg-orange transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Prev & Next Controls */}
        {onPrev && (
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-lg bg-charcoal/70 text-purewhite hover:bg-orange transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {onNext && (
          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-lg bg-charcoal/70 text-purewhite hover:bg-orange transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image Display */}
        <div className="relative aspect-[16/10] bg-charcoaldark w-full flex items-center justify-center overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover select-none"
            loading="lazy"
          />
        </div>

        {/* Details Footer */}
        <div className="p-6 bg-purewhite border-t border-lightgrey">
          <h3 className="font-heading font-bold text-base text-charcoal mb-1">
            {title}
          </h3>
          <p className="text-xs text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
