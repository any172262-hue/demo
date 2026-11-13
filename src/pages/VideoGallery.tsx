import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { videoGalleryData, VideoItem } from '../data/galleryData';
import {
  Youtube,
  Play,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const VideoGallery: React.FC = () => {
  const { language, pages, common } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(videoGalleryData[0]);

  return (
    <>
      <SEO
        title={pages.videos.title}
        description={pages.videos.subtitle}
        canonicalPath="/videos"
      />

      {/* Hero / Header Section (Approved Light Theme & Dark Theme) */}
      <section className="relative bg-[#F5F5F2] dark:bg-darkbg text-charcoal dark:text-darktext pt-8 pb-14 sm:pb-16 border-b border-lightgrey dark:border-darkborder overflow-hidden">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: pages.videos.title }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <Youtube className="w-4 h-4 text-orange" />
              <span>TECHNICAL DEMONSTRATIONS • WORKSHOP VIDEO ARCHIVE</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal dark:text-purewhite leading-tight tracking-tight">
              {pages.videos.title}
            </h1>

            <p className="text-secondary dark:text-darkmuted text-sm sm:text-base leading-relaxed max-w-2xl">
              {pages.videos.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Full HD</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Workshop Demonstrations</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">330 Bar</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Hydro-Test Footage</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Live Dyno</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">OBD-II Fuel Mapping</span>
            </div>
            <div className="bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal dark:text-purewhite">Calibration</span>
              <span className="text-[11px] text-secondary dark:text-darkmuted">Sequential Performance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Video Stage */}
      <section className="py-12 bg-purewhite dark:bg-darksurface border-b border-lightgrey dark:border-darkborder">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Featured Video Player Box */}
            <div className="lg:col-span-8 space-y-4">
              <div className="relative aspect-video bg-charcoaldark rounded-2xl overflow-hidden shadow-subtle border border-lightgrey dark:border-darkborder">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?rel=0`}
                  title={selectedVideo.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <div className="p-6 bg-offwhite dark:bg-darkcard rounded-xl border border-lightgrey dark:border-darkborder space-y-2">
                <div className="flex items-center justify-between text-xs text-secondary dark:text-darkmuted">
                  <span className="inline-flex items-center gap-1 font-semibold text-orange">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedVideo.duration}
                  </span>
                  <span className="badge-tech text-[10px]">Guwahati Technical Bay</span>
                </div>
                <h2 className="font-heading font-bold text-lg text-charcoal dark:text-purewhite">
                  {language === 'as' ? selectedVideo.titleAs : selectedVideo.titleEn}
                </h2>
                <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
                  {language === 'as' ? selectedVideo.descriptionAs : selectedVideo.descriptionEn}
                </p>
              </div>
            </div>

            {/* Video Playlist Column */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-heading font-bold text-sm text-charcoal dark:text-purewhite mb-4 uppercase tracking-wider">
                Video Library
              </h3>

              {videoGalleryData.map((vid) => {
                const isCurrent = vid.id === selectedVideo.id;
                return (
                  <div
                    key={vid.id}
                    onClick={() => setSelectedVideo(vid)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 flex items-start gap-3 ${
                      isCurrent
                        ? 'bg-orange-subtle dark:bg-orange/10 border-orange shadow-subtle'
                        : 'bg-purewhite dark:bg-darkcard border-lightgrey dark:border-darkborder hover:border-orange/40 hover:bg-offwhite/50 dark:hover:bg-darkcard/80'
                    }`}
                  >
                    <div className="relative w-28 aspect-video rounded-lg overflow-hidden shrink-0 bg-charcoaldark">
                      <img
                        src={vid.thumbnailUrl}
                        alt={vid.titleEn}
                        className="w-full h-full object-cover opacity-80"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-md bg-orange text-purewhite flex items-center justify-center">
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1 overflow-hidden">
                      <h4 className="font-heading font-bold text-xs text-charcoal dark:text-purewhite line-clamp-2 leading-snug">
                        {language === 'as' ? vid.titleAs : vid.titleEn}
                      </h4>
                      <span className="text-[10px] text-secondary dark:text-darkmuted font-mono block">
                        {vid.duration}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Video Disclaimer */}
      <section className="py-10 bg-offwhite dark:bg-darkbg">
        <div className="section-container">
          <div className="p-6 rounded-xl bg-purewhite dark:bg-darkcard border border-lightgrey dark:border-darkborder text-xs text-secondary dark:text-darkmuted leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-orange shrink-0 mt-0.5" />
            <p>{pages.videos.videoNote}</p>
          </div>
        </div>
      </section>
    </>
  );
};
