import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const Footer: React.FC = () => {
  const { language, common } = useLanguage();

  return (
    <footer className="bg-charcoaldark text-offwhite border-t border-charcoallight pt-14 pb-8">
      <div className="section-container">
        {/* Upper 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-charcoallight/60">
          {/* Col 1: About & Authorization */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-charcoal flex items-center justify-center text-orange border border-charcoallight">
                <span className="font-heading font-black text-lg text-orange">D</span>
                <span className="font-heading font-bold text-xs text-purewhite -ml-0.5">P</span>
              </div>
              <span className="font-heading font-extrabold text-lg text-purewhite tracking-tight">
                DEMO <span className="text-orange">PAGE</span>
              </span>
            </div>

            <p className="text-xs text-secondary leading-relaxed">
              {common.footer.aboutText}
            </p>

            <div className="p-3 bg-charcoal rounded-lg border border-charcoallight/50 space-y-2">
              <div className="flex items-center gap-2 text-xs text-orange font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{common.rfcCode}</span>
              </div>
              <p className="text-[11px] text-offwhite/70">
                {language === 'as'
                  ? 'কেন্দ্ৰীয় মটৰ বাহন নিয়ম (CMVR) আৰু PESO নীতিৰ অধীনত স্বীকৃতিপ্ৰাপ্ত।'
                  : 'Certified under CMVR Rule 115 & Petroleum & Explosives Safety Organization.'}
              </p>
            </div>
          </div>

          {/* Col 2: Specialized Services */}
          <div>
            <h3 className="font-heading font-bold text-sm text-purewhite uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-orange"></span>
              {common.footer.servicesTitle}
            </h3>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-secondary hover:text-orange hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <ChevronRight className="w-3 h-3 text-orange/60" />
                    <span>{language === 'as' ? s.titleAs : s.titleEn}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-orange font-semibold hover:underline inline-flex items-center gap-1 text-xs pt-1"
                >
                  {common.buttons.viewAll} ({servicesData.length}) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="font-heading font-bold text-sm text-purewhite uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-orange"></span>
              {common.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="text-secondary hover:text-orange transition-colors">
                  {common.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-secondary hover:text-orange transition-colors">
                  {common.nav.products}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-secondary hover:text-orange transition-colors">
                  {common.nav.workshopGallery}
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-secondary hover:text-orange transition-colors">
                  {common.nav.videoGallery}
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-secondary hover:text-orange transition-colors">
                  {common.nav.testimonials}
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-secondary hover:text-orange transition-colors">
                  {common.nav.faqs}
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-orange font-semibold hover:underline">
                  {common.nav.bookAppointment}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary hover:text-orange transition-colors">
                  {common.nav.contact}
                </Link>
              </li>
              <li>
                <Link to="/get-in-touch" className="text-secondary hover:text-orange transition-colors">
                  {language === 'as' ? 'যোগাযোগ (Get In Touch)' : 'Get In Touch'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Facility Locations & Contacts */}
          <div className="space-y-4 text-xs">
            <h3 className="font-heading font-bold text-sm text-purewhite uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-orange"></span>
              {common.footer.contactInfo}
            </h3>

            {/* Mundka Facility */}
            <div className="p-3 bg-charcoal/60 rounded-lg border border-charcoallight/40 space-y-1">
              <span className="font-semibold text-purewhite text-xs block">
                {language === 'as' ? '১. মুণ্ডকা প্ৰধান কৰ্মশালা' : '1. Mundka Main Facility'}
              </span>
              <p className="text-secondary text-[11px] leading-relaxed flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange shrink-0 mt-0.5" />
                <span>{common.contactBar.mundkaAddress}</span>
              </p>
            </div>

            {/* Paschim Vihar Facility */}
            <div className="p-3 bg-charcoal/60 rounded-lg border border-charcoallight/40 space-y-1">
              <span className="font-semibold text-purewhite text-xs block">
                {language === 'as' ? '২. পশ্চিম বিহাৰ এক্সপ্ৰেছ কেন্দ্ৰ' : '2. Paschim Vihar Express Center'}
              </span>
              <p className="text-secondary text-[11px] leading-relaxed flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange shrink-0 mt-0.5" />
                <span>{common.contactBar.paschimViharAddress}</span>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919212218180"
                className="inline-flex items-center gap-2 text-purewhite hover:text-orange transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-orange" />
                <span className="font-bold">+91 92122 18180</span>
              </a>
              <a
                href="https://wa.me/917982824255"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purewhite hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold">+91 79828 24255 (WhatsApp)</span>
              </a>
              <a
                href="mailto:carsenergyco@gmail.com"
                className="inline-flex items-center gap-2 text-secondary hover:text-purewhite transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <span>carsenergyco@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <p>
            © {new Date().getFullYear()} Car's Energy Co. {common.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/privacy-policy" className="hover:text-purewhite transition-colors">
              {common.footer.privacy}
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-purewhite transition-colors">
              {common.footer.terms}
            </Link>
            <span>•</span>
            <Link to="/sitemap" className="hover:text-purewhite transition-colors">
              {common.footer.sitemap}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
