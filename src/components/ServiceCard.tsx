import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ServiceDetail } from '../data/servicesData';
import {
  Wrench,
  PackageCheck,
  Cpu,
  FileCheck2,
  Settings,
  ShieldAlert,
  CalendarCheck,
  Filter,
  Gauge,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  PackageCheck,
  Cpu,
  FileCheck2,
  Settings,
  ShieldAlert,
  CalendarCheck,
  Filter,
  Gauge,
  RefreshCw,
};

interface ServiceCardProps {
  service: ServiceDetail;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { language, common } = useLanguage();
  const IconComponent = iconMap[service.iconName] || Wrench;

  const title = language === 'as' ? service.titleAs : service.titleEn;
  const shortDesc = language === 'as' ? service.shortDescAs : service.shortDescEn;
  const badge = language === 'as' ? service.badgeAs : service.badgeEn;

  return (
    <div className="card-premium flex flex-col justify-between group relative overflow-hidden border border-lightgrey hover:border-orange/40 transition-all duration-300">
      {/* Top Image Banner */}
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoaldark">
        <img
          src={service.imageUrl}
          alt={service.titleEn}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoaldark/70 via-charcoaldark/20 to-transparent" />
        
        {/* Floating Category Badge */}
        <span className="absolute top-3 left-3 bg-charcoaldark/85 text-purewhite text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm shadow-subtle border border-purewhite/10">
          {badge}
        </span>

        {/* Technical Icon Inset */}
        <div className="absolute -bottom-4 right-4 w-10 h-10 rounded-xl bg-purewhite dark:bg-darksurface border border-lightgrey dark:border-darkborder shadow-md flex items-center justify-center text-charcoal dark:text-purewhite group-hover:bg-orange group-hover:text-purewhite transition-colors duration-300">
          <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-heading font-bold text-base text-charcoal dark:text-purewhite group-hover:text-orange transition-colors mb-2 mt-1">
            {title}
          </h3>

          <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed mb-6">
            {shortDesc}
          </p>
        </div>

        <div className="pt-4 border-t border-lightgrey/70 dark:border-darkborder flex items-center justify-between">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal dark:text-darktext group-hover:text-orange transition-colors"
          >
            <span>{common.buttons.viewDetails}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-orange" />
          </Link>
        </div>
      </div>
    </div>
  );
};
