import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AppointmentForm } from '../components/AppointmentForm';
import { servicesData } from '../data/servicesData';
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
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
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

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, services, common } = useLanguage();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = iconMap[service.iconName] || Wrench;
  const title = language === 'as' ? service.titleAs : service.titleEn;
  const whatItIs = language === 'as' ? service.whatItIsAs : service.whatItIsEn;
  const whoNeedsIt = language === 'as' ? service.whoNeedsItAs : service.whoNeedsItEn;
  const processSteps = language === 'as' ? service.processStepsAs : service.processStepsEn;
  const considerations = language === 'as' ? service.considerationsAs : service.considerationsEn;
  const technicalHighlights = language === 'as' ? service.technicalHighlightsAs : service.technicalHighlightsEn;
  const badge = language === 'as' ? service.badgeAs : service.badgeEn;

  // Schema for Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.titleEn,
    provider: {
      '@type': 'AutomotiveBusiness',
      name: "Car's Energy Co.",
      telephone: '+919212218180',
    },
    description: service.shortDescEn,
    areaServed: 'Delhi-NCR, India',
  };

  return (
    <>
      <SEO
        title={title}
        description={service.shortDescEn}
        canonicalPath={`/services/${service.slug}`}
        schema={serviceSchema}
      />

      {/* Header Banner (Approved Light & Dark Theme) */}
      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 border-b border-lightgrey dark:border-darkborder overflow-hidden">
        <div className="section-container relative z-10 space-y-4">
          <Breadcrumbs
            items={[
              { label: common.nav.services, path: '/services' },
              { label: title },
            ]}
          />

          <div className="max-w-3xl space-y-3 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>{badge} • RFC CODE NO. 261</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-charcoal dark:text-purewhite tracking-tight">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-secondary dark:text-darkmuted leading-relaxed max-w-2xl">
              {language === 'as' ? service.shortDescAs : service.shortDescEn}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 bg-purewhite dark:bg-darksurface">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-7 space-y-12">
              {/* Technical Dedicated Photograph */}
              <div className="relative rounded-2xl overflow-hidden border border-lightgrey dark:border-darkborder shadow-subtle aspect-[16/9] bg-charcoaldark">
                <img
                  src={service.imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoaldark/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-purewhite text-xs">
                  <span className="font-bold tracking-wide">{title}</span>
                  <span className="text-[11px] opacity-80 font-medium">Car's Energy Co. Workshop Documentation</span>
                </div>
              </div>

              {/* 1. What the Service Is */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-purewhite flex items-center gap-2">
                  <span className="w-2 h-2 rounded bg-orange"></span>
                  {services.serviceOverview.whatItIs}
                </h2>
                <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted leading-relaxed">
                  {whatItIs}
                </p>
              </div>

              {/* 2. Technical Specifications / Highlights Table */}
              <div className="space-y-4">
                <h3 className="text-base font-heading font-bold text-charcoal dark:text-purewhite">
                  {language === 'as' ? 'কাৰিকৰী বৈশিষ্ট্য আৰু মানদণ্ড' : 'Technical Specifications & Standards'}
                </h3>
                <div className="overflow-hidden rounded-xl border border-lightgrey dark:border-darkborder">
                  <table className="w-full text-xs text-left">
                    <tbody className="divide-y divide-lightgrey dark:divide-darkborder">
                      {technicalHighlights.map((th, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-offwhite/40 dark:bg-darkcard' : 'bg-purewhite dark:bg-darksurface'}>
                          <th className="py-3 px-4 font-semibold text-charcoal dark:text-purewhite w-1/3">
                            {th.label}
                          </th>
                          <td className="py-3 px-4 text-secondary dark:text-darkmuted font-medium">
                            {th.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Who May Need It */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-purewhite flex items-center gap-2">
                  <span className="w-2 h-2 rounded bg-orange"></span>
                  {services.serviceOverview.whoNeedsIt}
                </h2>
                <div className="space-y-2">
                  {whoNeedsIt.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-lightgrey dark:border-darkborder bg-offwhite/30 dark:bg-darkcard flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                      <p className="text-xs text-charcoal dark:text-purewhite leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Technical Workflow / Process */}
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-purewhite flex items-center gap-2">
                  <span className="w-2 h-2 rounded bg-orange"></span>
                  {services.serviceOverview.process}
                </h2>
                <div className="space-y-4">
                  {processSteps.map((st, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl border border-lightgrey dark:border-darkborder bg-purewhite dark:bg-darkcard shadow-subtle flex flex-col sm:flex-row items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center font-bold text-xs shrink-0">
                        {st.step}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-heading font-bold text-sm text-charcoal dark:text-purewhite">
                          {st.title}
                        </h4>
                        <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                          {st.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Key Considerations */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-purewhite flex items-center gap-2">
                  <span className="w-2 h-2 rounded bg-orange"></span>
                  {services.serviceOverview.considerations}
                </h2>
                <div className="p-5 bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-200">
                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Important Customer Notice</span>
                  </div>
                  <ul className="space-y-2 text-xs text-amber-900/90 dark:text-amber-200/90 list-disc list-inside">
                    {considerations.map((c, i) => (
                      <li key={i} className="leading-relaxed">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Other Services Navigation */}
              <div className="pt-8 border-t border-lightgrey dark:border-darkborder">
                <h3 className="text-xs font-bold text-secondary dark:text-darkmuted uppercase tracking-wider mb-4">
                  Explore Related Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicesData
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((other) => (
                      <Link
                        key={other.slug}
                        to={`/services/${other.slug}`}
                        className="p-3 rounded-lg border border-lightgrey dark:border-darkborder hover:border-orange hover:bg-orange-subtle dark:hover:bg-orange/10 transition-colors flex items-center justify-between text-xs font-semibold text-charcoal dark:text-purewhite"
                      >
                        <span className="truncate">
                          {language === 'as' ? other.titleAs : other.titleEn}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-orange shrink-0 ml-2" />
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar (5 cols): Appointment Booking Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <AppointmentForm defaultService={service.titleEn} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
