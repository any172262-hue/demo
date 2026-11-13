import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, variant = 'light' }) => {
  const { common } = useLanguage();

  if (variant === 'dark') {
    return (
      <nav aria-label="Breadcrumb" className="py-2.5">
        <ol className="flex items-center gap-2 text-xs text-white/60 flex-wrap">
          <li className="inline-flex items-center gap-1.5">
            <Link
              to="/"
              className="hover:text-orange text-white/70 transition-colors inline-flex items-center gap-1 font-medium"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{common.nav.home}</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="inline-flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-white/40 shrink-0" />
                {isLast || !item.path ? (
                  <span className="font-semibold text-purewhite truncate max-w-xs" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-orange text-white/80 transition-colors font-medium truncate max-w-xs"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-lightgrey/50 border-b border-lightgrey">
      <div className="section-container">
        <ol className="flex items-center gap-2 text-xs text-secondary flex-wrap">
          <li className="inline-flex items-center gap-1">
            <Link
              to="/"
              className="hover:text-orange transition-colors inline-flex items-center gap-1 font-medium"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{common.nav.home}</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="inline-flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-secondary/60 shrink-0" />
                {isLast || !item.path ? (
                  <span className="font-semibold text-charcoal truncate max-w-xs" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-orange transition-colors font-medium truncate max-w-xs"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
