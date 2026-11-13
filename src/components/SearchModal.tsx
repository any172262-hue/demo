import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  buildSearchIndex,
  searchContent,
  SearchResultItem,
  SearchCategory,
} from '../data/searchIndex';
import {
  Search,
  X,
  FileText,
  Wrench,
  Package,
  HelpCircle,
  MapPin,
  ArrowRight,
  CornerDownLeft,
  Loader2,
} from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoryIcons: Record<SearchCategory, React.ElementType> = {
  page: FileText,
  service: Wrench,
  product: Package,
  faq: HelpCircle,
  contact: MapPin,
};

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsListRef = useRef<HTMLDivElement>(null);

  // Memoize search index
  const index = useMemo(() => buildSearchIndex(), []);

  // Filter results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchContent(query, language, index);
  }, [query, language, index]);

  // Focus management on open/close
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Handle escape & keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleSelect = (item: SearchResultItem) => {
    onClose();
    navigate(item.url);
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  if (!isOpen) return null;

  // Helper to highlight matching terms safely
  const highlightMatches = (text: string, searchTerms: string) => {
    if (!searchTerms.trim()) return text;
    const words = searchTerms.trim().split(/\s+/).filter(Boolean);
    const regex = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-orange/20 text-orange font-bold rounded-sm px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Search"
      className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4 bg-charcoaldark/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-purewhite dark:bg-darksurface rounded-2xl shadow-2xl border border-lightgrey dark:border-darkborder overflow-hidden flex flex-col max-h-[80vh] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-lightgrey dark:border-darkborder bg-offwhite/50 dark:bg-darkbg/50">
          <Search className="w-5 h-5 text-secondary dark:text-darkmuted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              language === 'as'
                ? 'ৱেবছাইটৰ সেৱা, কিট, ব্ৰেণ্ড বা প্ৰশ্ন সন্ধান কৰক...'
                : 'Search services, kits, brands, FAQs, or workshop info...'
            }
            className="w-full px-3 py-1 text-sm bg-transparent text-charcoal dark:text-darktext placeholder:text-secondary dark:placeholder:text-darkmuted outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-secondary hover:text-charcoal dark:hover:text-darktext transition-colors mr-1"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono bg-lightgrey dark:bg-darkborder text-secondary dark:text-darkmuted rounded-md border border-bordergrey dark:border-darkborder hover:text-charcoal dark:hover:text-darktext transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div
          ref={resultsListRef}
          className="flex-1 overflow-y-auto p-3 space-y-1 divide-y divide-lightgrey/40 dark:divide-darkborder/40"
        >
          {/* Empty Query State */}
          {!query.trim() && (
            <div className="py-10 px-4 text-center space-y-3">
              <div className="w-10 h-10 rounded-lg bg-orange-light text-orange mx-auto flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <p className="text-xs text-secondary dark:text-darkmuted max-w-sm mx-auto">
                {language === 'as'
                  ? 'কাৰ্ছ এনাৰ্জী কো.-ৰ সেৱা, ছিকুৱেনচিয়েল কিট, চিলিণ্ডাৰ টেষ্টিং বা কৰ্মশালাৰ ঠিকনা বিচাৰিবলৈ ওপৰত টাইপ কৰক।'
                  : "Type to search Car's Energy Co. specialized services, sequential kits, hydro testing, partner brands, or workshop locations."}
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['ECU Tuning', 'Lovato', 'Hydro-Testing', 'Mundka', 'Mileage', 'RC Endorsement'].map(
                  (sug) => (
                    <button
                      key={sug}
                      type="button"
                      onClick={() => setQuery(sug)}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-offwhite dark:bg-darkbg text-charcoal dark:text-darktext border border-lightgrey dark:border-darkborder hover:border-orange transition-colors"
                    >
                      {sug}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* No Results Found */}
          {query.trim() && results.length === 0 && (
            <div className="py-12 px-4 text-center space-y-3">
              <p className="font-heading font-bold text-sm text-charcoal dark:text-darktext">
                {language === 'as' ? 'কোনো ফলাফল পোৱা নগ’ল' : 'No results found'}
              </p>
              <p className="text-xs text-secondary dark:text-darkmuted max-w-sm mx-auto">
                {language === 'as'
                  ? `"${query}" ৰ বাবে কোনো মিল বিচাৰি পোৱা নগ’ল। অনুগ্ৰহ কৰি অন্য শব্দৰে চেষ্টা কৰক।`
                  : `No matching records found for "${query}". Try searching for terms like "tuning", "hydro", "kit", or "Mundka".`}
              </p>
            </div>
          )}

          {/* Results List */}
          {results.map((item, index) => {
            const Icon = categoryIcons[item.category] || FileText;
            const isSelected = index === selectedIndex;
            const title = language === 'as' ? item.titleAs : item.titleEn;
            const snippet = language === 'as' ? item.snippetAs : item.snippetEn;
            const badge = language === 'as' ? item.badgeAs : item.badgeEn;

            return (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`p-3 rounded-xl cursor-pointer transition-all flex items-start gap-3 group ${
                  isSelected
                    ? 'bg-orange-light/50 dark:bg-orange/15 border border-orange/30'
                    : 'hover:bg-offwhite dark:hover:bg-darkbg/70 border border-transparent'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isSelected
                      ? 'bg-orange text-purewhite'
                      : 'bg-lightgrey dark:bg-darkborder text-secondary dark:text-darkmuted group-hover:text-orange'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-charcoal dark:text-darktext line-clamp-1">
                      {highlightMatches(title, query)}
                    </h4>
                    {badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-lightgrey dark:bg-darkborder text-secondary dark:text-darkmuted shrink-0">
                        {badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-secondary dark:text-darkmuted line-clamp-2 mt-0.5 leading-relaxed">
                    {highlightMatches(snippet, query)}
                  </p>
                </div>

                <ArrowRight
                  className={`w-4 h-4 shrink-0 mt-2 transition-transform ${
                    isSelected ? 'text-orange translate-x-0.5' : 'text-transparent'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Footer Navigation Hints */}
        <div className="px-4 py-2.5 border-t border-lightgrey dark:border-darkborder bg-offwhite/50 dark:bg-darkbg/50 flex items-center justify-between text-[11px] text-secondary dark:text-darkmuted">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded text-[10px]">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded text-[10px]">
                ↓
              </kbd>{' '}
              {language === 'as' ? 'নেভিগেট' : 'Navigate'}
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded text-[10px]">
                ↵
              </kbd>{' '}
              {language === 'as' ? 'নিৰ্বাচন' : 'Select'}
            </span>
          </div>
          {results.length > 0 && (
            <span>
              {results.length} {language === 'as' ? 'ফলাফল' : 'results'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
