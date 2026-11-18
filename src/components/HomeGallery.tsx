import React, { useState } from 'react';
import { AppSection, Language } from '../types';
import { GALLERY_PHOTOS } from '../data/photos';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface HomeGalleryProps {
  lang: Language;
  onNavigate: (section: AppSection) => void;
}

export const HomeGallery: React.FC<HomeGalleryProps> = ({ lang, onNavigate }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activePhoto = lightboxIndex !== null ? GALLERY_PHOTOS[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_PHOTOS.length);
  };

  return (
    <section className="py-5 sm:py-10 px-3 sm:px-6 lg:px-8 border-t border-neutral-800/70 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        {/* Clean Minimal Gallery Header */}
        <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-orange-400 mb-0.5">
              <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-500" />
              <span>{lang === 'en' ? 'Gallery' : 'Galeria'}</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight text-white font-display">
              {lang === 'en' ? "Our Place & Food" : "Lokali & Ushqimet"}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('menu')}
            className="text-[11px] sm:text-xs text-orange-400 hover:text-orange-300 font-semibold transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'View Menu →' : 'Shiko Menunë →'}
          </button>
        </div>

        {/* 12 Photos · Strictly 2 Photos Per Row · Zero Text Labels */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`Photo ${idx + 1}`}
              className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 hover:border-orange-500/50 transition-all cursor-pointer shadow-md"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Minimal Photo Lightbox (No Labels) */}
      {activePhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-black border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="relative aspect-[4/3] w-full bg-black">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />

              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-orange-600 text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-orange-600 text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
