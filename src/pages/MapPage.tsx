import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  MapPin,
  Navigation,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  Compass,
  Car,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Layers,
  Building2,
} from 'lucide-react';

export const MapPage: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'jalukbari' | 'khanapara' | 'airport' | 'lokhra'>('all');

  // Exact Coordinates: 26°07'12.1"N 91°41'47.5"E (26.1200128, 91.6965264)
  const googleMapsPinUrl = "https://www.google.com/maps/place/26%C2%B007'12.1%22N+91%C2%B041'47.5%22E/@26.1200128,91.6965264,17z";
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=26.1200128,91.6965264";
  const whatsappLocationUrl = "https://wa.me/919678******?text=Hello%20Maa%20Kamakhya%20Auto%20Gas,%20please%20send%20your%20workshop%20location%20pin.";

  const routes = [
    {
      id: 'jalukbari',
      nameEn: 'From Jalukbari Rotary',
      nameAs: 'জালুকবাৰী ৰ' + "'" + 'টাৰীৰ পৰা',
      dist: '4.5 km',
      time: '~8 mins',
      via: 'NH-37 Southbound',
      descEn: 'Take NH-37 towards Garchuk. Continue straight past Boragaon Flyover. Workshop is located on the right opposite Nezone Steel, adjacent to Indian Oil Petrol Pump.',
      descAs: '৩৭ নং ৰাষ্ট্ৰীয় ঘাইপথেৰে গড়চুক অভিমুখে আগবাঢ়ক। বৰাগাঁও ফ্লাইঅভাৰ পাৰ হৈ নেজন ষ্টীলৰ বিপৰীতে আৰু ইণ্ডিয়ান অইল পেট্ৰ’ল পাম্পৰ কাষতে কৰ্মশালাখন পাব।',
    },
    {
      id: 'lokhra',
      nameEn: 'From Lokhra / ISBT Betkuchi',
      nameAs: 'লোকৰা / ISBT বেতকুছিৰ পৰা',
      dist: '3.8 km',
      time: '~6 mins',
      via: 'NH-37 Northbound',
      descEn: 'Drive on NH-37 North towards Jalukbari. Pass Garchuk Chariali junction. Workshop is located on the service lane opposite Nezone Steel.',
      descAs: '৩৭ নং ঘাইপথেৰে উত্তৰ দিশত জালুকবাৰী অভিমুখে যাওক। গড়চুক চাৰিআলি পাৰ হৈ নেজন ষ্টীলৰ বিপৰীতে চাৰ্ভিচ লেনত অৱস্থিত।',
    },
    {
      id: 'khanapara',
      nameEn: 'From Khanapara / Dispur',
      nameAs: 'খানাপাৰা / দিছপুৰৰ পৰা',
      dist: '14.2 km',
      time: '~22 mins',
      via: 'Guwahati Bypass NH-37',
      descEn: 'Take the Guwahati Bypass (NH-37) westward passing Six Mile, Basistha, and Lokhra. Continue straight to Garchuk; facility is on the left service corridor opposite Nezone Steel.',
      descAs: 'গুৱাহাটী বাইপাছ (NH-37) হৈ পশ্চিম দিশত বশিষ্ঠ আৰু লোকৰা পাৰ হৈ আহক। গড়চুকৰ নেজন ষ্টীলৰ বিপৰীতে মূল পথৰ কাষতে পাব।',
    },
    {
      id: 'airport',
      nameEn: 'From LGBI Airport, Borjhar',
      nameAs: 'বৰঝাৰ বিমান বন্দৰৰ পৰা',
      dist: '18.5 km',
      time: '~25 mins',
      via: 'VIP Road & NH-37',
      descEn: 'Head via Airport Road to Jalukbari Rotary, then merge onto NH-37 South towards Garchuk. Drive 4.5 km; workshop will be on your right near IOC pump.',
      descAs: 'বিমান বন্দৰ পথ হৈ জালুকবাৰী ৰ’টাৰীলৈ আহি ৩৭ নং ঘাইপথত প্ৰৱেশ কৰক। গড়চুক দিশত ৪.৫ কিমি আগবাঢ়িলে পেট্ৰ’ল পাম্পৰ ওচৰতে পাব।',
    },
  ];

  const amenities = [
    { titleEn: 'Dedicated CNG & LPG Installation Bays', titleAs: 'চিএনজি আৰু এলপিজি সংস্থাপন বে’' },
    { titleEn: 'In-House 330-Bar Hydro-Testing Chamber', titleAs: 'ইন-হাউচ ৩৩০-বাৰ হাইড্ৰ’-টেষ্টিং চেম্বাৰ' },
    { titleEn: 'Computerized OBD-II Tuning Station', titleAs: 'কম্পিউটাৰাইজড OBD-II টিউনিং ষ্টেচন' },
    { titleEn: 'Wide Highway Drive-In & Customer Parking', titleAs: 'সহজ ঘাইপথ প্ৰৱেশ আৰু গাড়ী পাৰ্কিং' },
  ];

  return (
    <>
      <SEO
        title={language === 'as' ? 'কৰ্মশালাৰ লাইভ মানচিত্ৰ আৰু ঠিকনা | মা কামাখ্যা অটো গেছ' : 'Workshop Location & Live Map | Maa Kamakhya Auto Gas Guwahati'}
        description={language === 'as' ? 'গুৱাহাটীৰ গড়চুকৰ ৩৭ নং ৰাষ্ট্ৰীয় ঘাইপথত অৱস্থিত মা কামাখ্যা অটো গেছৰ লাইভ মানচিত্ৰ, দিশ-নিৰ্দেশনা আৰু যোগাযোগৰ ঠিকনা।' : 'Interactive map, live GPS directions, and contact details for Maa Kamakhya Auto Gas on NH-37, Garchuk, Guwahati, Assam.'}
        canonicalPath="/map"
      />

      <div className="animate-fade-in transition-colors">
        {/* Page Hero Header */}
        <section className="bg-charcoaldark text-purewhite pt-10 pb-12 sm:pb-16 border-b border-charcoallight/60 relative overflow-hidden">
          {/* Subtle Background Glow Animation */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="section-container relative z-10">
            <Breadcrumbs items={[{ label: language === 'as' ? 'কৰ্মশালাৰ মানচিত্ৰ' : 'Workshop Location & Live Map' }]} />

            <div className="max-w-3xl space-y-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/15 border border-orange/30 text-orange text-xs font-bold uppercase tracking-wider animate-slide-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
                </span>
                <span>{language === 'as' ? 'লাইভ জিপিএছ মানচিত্ৰ • গড়চুক হাব' : 'LIVE GPS MAP • GARCHUK HIGHWAY HUB'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-purewhite tracking-tight leading-tight animate-slide-up">
                {language === 'as' ? (
                  <>কৰ্মশালাৰ অৱস্থান আৰু <span className="text-orange">লাইভ মানচিত্ৰ</span></>
                ) : (
                  <>Workshop Location & <span className="text-orange">Live Map</span></>
                )}
              </h1>

              <p className="text-sm sm:text-base text-offwhite/80 leading-relaxed max-w-2xl animate-slide-up">
                {language === 'as'
                  ? 'গুৱাহাটীৰ গড়চুকৰ ৩৭ নং ৰাষ্ট্ৰীয় ঘাইপথত অৱস্থিত চৰকাৰী অনুমোদিত অট’ম’বাইল গেছ ৰেট্ৰ’ফিটমেণ্ট আৰু চিলিণ্ডাৰ হাইড্ৰ’-টেষ্টিং কেন্দ্ৰ।'
                  : 'Visit our government-approved automotive gas conversion and certified cylinder testing facility, directly accessible on National Highway 37 in Garchuk, Guwahati.'}
              </p>
            </div>

            {/* Quick Actions Action Bar */}
            <div className="mt-8 pt-6 border-t border-charcoallight/70 flex flex-wrap items-center gap-3 sm:gap-4 animate-slide-up">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center bg-orange hover:bg-orange-hover text-purewhite font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                <span>{language === 'as' ? 'পথৰ নিৰ্দেশনা লওক' : 'Get Driving Directions'}</span>
              </a>

              <a
                href={googleMapsPinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center bg-purewhite/10 hover:bg-purewhite/20 text-purewhite border border-purewhite/20 font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-orange" />
                <span>{language === 'as' ? 'Google Maps ত খোলক' : 'Open in Google Maps'}</span>
              </a>

              <a
                href="tel:+919678******"
                className="w-full sm:w-auto justify-center bg-purewhite/10 hover:bg-purewhite/20 text-purewhite border border-purewhite/20 font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange" />
                <span>+91 9678******</span>
              </a>

              <a
                href={whatsappLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center sm:ml-auto bg-emerald-600 hover:bg-emerald-700 text-purewhite font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-xl shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'as' ? 'হোৱাটছএপত লাইভ অৱস্থান লওক' : 'WhatsApp Live Location'}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Main Content: Interactive Map & Detailed Workshop Information */}
        <section className="py-12 sm:py-16 bg-offwhite dark:bg-darkbg transition-colors">
          <div className="section-container space-y-12">
            {/* Embedded Google Map Frame */}
            <div className="bg-purewhite dark:bg-darkcard rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-lightgrey dark:border-darkborder shadow-premium overflow-hidden transition-all duration-300 hover:shadow-hover">
              <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 mb-3 border-b border-lightgrey dark:border-darkborder text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-heading font-bold text-charcoal dark:text-purewhite">
                    {language === 'as' ? 'প্ৰত্যক্ষ উপগ্ৰহ মানচিত্ৰ' : 'Interactive Satellite & Terrain View'}
                  </span>
                  <span className="text-secondary dark:text-darkmuted text-[11px] hidden sm:inline">
                    (26°07'12.1"N 91°41'47.5"E)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-secondary dark:text-darkmuted">
                    <Clock className="w-3.5 h-3.5 text-orange" />
                    <span>09:00 AM - 07:30 PM (All 7 Days)</span>
                  </span>
                  <a
                    href={googleMapsPinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Full Screen</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-[400px] sm:h-[520px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden border border-lightgrey dark:border-darkborder relative bg-lightgrey dark:bg-darkborder">
                <iframe
                  title="Maa Kamakhya Auto Gas Live Location Map"
                  src="https://maps.google.com/maps?q=26.1200128,91.6965264&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-[1.02] dark:contrast-[1.1] transition-all"
                />
              </div>
            </div>

            {/* Address & Facility Specifications Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Statutory Address & Contact Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-purewhite dark:bg-darkcard rounded-2xl p-6 sm:p-7 border border-lightgrey dark:border-darkborder shadow-subtle space-y-5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-orange-light dark:bg-orange/20 text-orange flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <h2 className="font-heading font-extrabold text-lg text-charcoal dark:text-purewhite">
                        {language === 'as' ? 'মুখ্য কৰ্মশালাৰ ঠিকনা' : 'Workshop Facility Address'}
                      </h2>
                      <span className="text-[11px] text-secondary dark:text-darkmuted">
                        Maa Kamakhya Auto Gas, Garchuk Hub
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 text-sm text-secondary dark:text-darkmuted">
                    <p className="font-medium text-charcoal dark:text-darktext leading-relaxed">
                      Shop No. 7, Opposite Nezone Steel, Near Indian Oil Petrol Pump & Kumar Resorts, NH-37, Paschim Boragaon, Garchuk, Guwahati, Assam - 781035
                    </p>

                    <div className="p-3.5 rounded-xl bg-offwhite dark:bg-darksurface border border-lightgrey dark:border-darkborder text-xs space-y-1.5">
                      <div className="flex items-center gap-1.5 font-bold text-charcoal dark:text-purewhite">
                        <Building2 className="w-4 h-4 text-orange" />
                        <span>{language === 'as' ? 'প্ৰধান স্থান নিৰ্দেশক (Landmark):' : 'Key Landmark:'}</span>
                      </div>
                      <p className="text-secondary dark:text-darkmuted">
                        Opposite Nezone Steel factory, directly on the NH-37 highway service corridor, 100 meters from Indian Oil Petrol Pump.
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-lightgrey dark:border-darkborder text-xs">
                      <span className="text-secondary dark:text-darkmuted">{language === 'as' ? 'কাৰ্যালয় সময়:' : 'Operating Hours:'}</span>
                      <span className="font-bold text-charcoal dark:text-purewhite">9:00 AM - 7:30 PM (7 Days Open)</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-secondary dark:text-darkmuted">{language === 'as' ? 'হটলাইন:' : 'Support Hotline:'}</span>
                      <span className="font-bold text-orange">+91 9678******</span>
                    </div>
                  </div>
                </div>

                {/* Facility Technical Amenities */}
                <div className="bg-purewhite dark:bg-darkcard rounded-2xl p-6 sm:p-7 border border-lightgrey dark:border-darkborder shadow-subtle space-y-4">
                  <h3 className="font-heading font-bold text-base text-charcoal dark:text-purewhite flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-orange" />
                    <span>{language === 'as' ? 'কৰ্মশালাৰ সুবিধা আৰু সঁজুলি' : 'On-Site Workshop Capabilities'}</span>
                  </h3>

                  <div className="space-y-2.5 pt-1">
                    {amenities.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-offwhite dark:bg-darksurface border border-lightgrey dark:border-darkborder text-xs text-charcoal dark:text-darktext"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium">
                          {language === 'as' ? item.titleAs : item.titleEn}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Directional Route Guides from Major Guwahati Hubs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-purewhite dark:bg-darkcard rounded-2xl p-6 sm:p-8 border border-lightgrey dark:border-darkborder shadow-subtle space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange">
                      {language === 'as' ? 'পথ নিৰ্দেশনা' : 'DRIVING DIRECTIONS'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal dark:text-purewhite mt-1">
                      {language === 'as' ? 'প্ৰধান স্থানৰ পৰা কেনেকৈ আহিব' : 'How to Reach Us from Major Junctions'}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary dark:text-darkmuted mt-1">
                      Select your starting point for clear, step-by-step navigation instructions.
                    </p>
                  </div>

                  {/* Route Selector Tabs */}
                  <div className="flex flex-wrap gap-2 pt-2 border-b border-lightgrey dark:border-darkborder pb-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab('all')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        activeTab === 'all'
                          ? 'bg-orange text-purewhite shadow-sm'
                          : 'bg-offwhite dark:bg-darksurface text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-darktext'
                      }`}
                    >
                      {language === 'as' ? 'সকলো পথ' : 'All Routes'}
                    </button>
                    {routes.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setActiveTab(r.id as any)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          activeTab === r.id
                            ? 'bg-orange text-purewhite shadow-sm'
                            : 'bg-offwhite dark:bg-darksurface text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-darktext'
                        }`}
                      >
                        {language === 'as' ? r.nameAs : r.nameEn}
                      </button>
                    ))}
                  </div>

                  {/* Route Cards */}
                  <div className="space-y-4">
                    {routes
                      .filter((r) => activeTab === 'all' || activeTab === r.id)
                      .map((route, i) => (
                        <div
                          key={route.id}
                          className="p-5 rounded-2xl bg-offwhite dark:bg-darksurface border border-lightgrey dark:border-darkborder hover:border-orange/40 transition-all duration-300 space-y-3"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-orange/15 text-orange flex items-center justify-center font-bold text-xs">
                                {i + 1}
                              </span>
                              <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal dark:text-purewhite">
                                {language === 'as' ? route.nameAs : route.nameEn}
                              </h4>
                            </div>
                            <div className="flex items-center gap-2 text-[11px] font-bold">
                              <span className="px-2.5 py-0.5 rounded-md bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder text-orange">
                                {route.dist}
                              </span>
                              <span className="px-2.5 py-0.5 rounded-md bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder text-emerald-600">
                                {route.time}
                              </span>
                            </div>
                          </div>

                          <div className="text-xs text-secondary dark:text-darkmuted flex items-center gap-1.5 font-medium">
                            <Car className="w-3.5 h-3.5 text-orange shrink-0" />
                            <span>Via {route.via}</span>
                          </div>

                          <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                            {language === 'as' ? route.descAs : route.descEn}
                          </p>

                          <div className="pt-2 flex justify-end">
                            <a
                              href={googleMapsDirectionsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-bold text-orange hover:underline inline-flex items-center gap-1"
                            >
                              <span>Navigate from this route</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
