import React from 'react';
import { AppSection, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SITE_PHOTOS, CATEGORY_PHOTOS, GALLERY_PHOTOS, getProductPhoto } from '../data/photos';

const heroCardImg = GALLERY_PHOTOS[0]?.src || SITE_PHOTOS.googleMapsPhoto;
const homepageBgImg = SITE_PHOTOS.homepageBackground;
const souvlakiImg = getProductPhoto('suflaqe-pite-giro-pule', CATEGORY_PHOTOS.suflaqe);
const pizzaImg = getProductPhoto('pizza-speciale-tedys', CATEGORY_PHOTOS.pizzaDiavolaProsciutto);
const skepastiImg = getProductPhoto('burger-skebasti-vogel', CATEGORY_PHOTOS.skepasti);
import { Card3DTilt } from './Card3DTilt';
import {
  Flame,
  MapPin,
  Phone,
  Send,
  Navigation,
  Star,
  Clock,
  Utensils,
  Instagram,
  Facebook,
  ShoppingBag,
  UtensilsCrossed,
  Calendar,
  MessageSquare,
  Compass,
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenCart: () => void;
  onNavigate: (section: AppSection) => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenCart,
  onNavigate
}) => {
  const t = TRANSLATIONS[lang];

  const sectionCards: {
    id: AppSection;
    title: string;
    desc: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'menu',
      title: t.nav.menu,
      desc: lang === 'en' ? '3D & Full Menu' : 'Menu 3D & e Plotë',
      icon: <UtensilsCrossed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
    },
    {
      id: 'reserve',
      title: t.nav.reserve,
      desc: lang === 'en' ? 'Inside or Outside' : 'Brenda ose Jashtë',
      icon: <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
    },
    {
      id: 'reviews',
      title: t.nav.reviews,
      desc: lang === 'en' ? '4.0 ★ (76 Reviews)' : '4.0 ★ (76 Vlerësime)',
      icon: <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
    },
    {
      id: 'location',
      title: t.nav.location,
      desc: lang === 'en' ? 'Map & Hours' : 'Harta & Orari',
      icon: <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
    }
  ];

  return (
    <section className="relative pt-3 pb-8 sm:pt-8 sm:pb-14 md:pt-12 md:pb-16 overflow-hidden">
      {/* Home Page Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src={homepageBgImg}
          alt="Tedy's Fast Food & Grill restaurant background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-60 md:opacity-55 scale-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/65 via-neutral-950/50 to-neutral-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/35 to-neutral-950/75" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[480px] bg-gradient-to-b from-orange-600/15 via-red-600/10 to-transparent blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unboxed Metadata Trust Line */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs text-neutral-400 mb-2.5 sm:mb-4">
          <div className="flex items-center gap-1 text-amber-400 font-semibold">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
            <span>4.0</span>
            <span className="text-neutral-400 font-normal">(76 {lang === 'en' ? 'Google Reviews' : 'vlerësime në Google'})</span>
          </div>
          <span aria-hidden="true" className="text-neutral-600 hidden xs:inline">·</span>
          <span className="font-mono text-neutral-300">ALL 1–500 {lang === 'en' ? 'per person' : 'për person'}</span>
          <span aria-hidden="true" className="text-neutral-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-1 text-emerald-400">
            <Clock className="w-3 h-3" />
            <span>{lang === 'en' ? 'Open · Closes 12 AM' : 'Hapur · Mbyllet në 12 AM'}</span>
          </div>
          <span aria-hidden="true" className="text-neutral-600 hidden md:inline">·</span>
          <div className="hidden md:flex items-center gap-1 text-neutral-400">
            <MapPin className="w-3 h-3 text-orange-500" />
            <span>Rruga Tom Plezha 1001, Tiranë</span>
          </div>
        </div>

        {/* Hero Grid: Left Content / Right Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-5">
            
            <div className="space-y-1.5 sm:space-y-2.5">
              <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-orange-500">
                <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-500" />
                <span>{lang === 'en' ? "Tirana's Beloved Street Grill & Fast Food" : "Zgara & Fast-Foodi i Preferuar në Tiranë"}</span>
              </div>

              <h1 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-extrabold sm:font-black tracking-tight text-white font-display leading-[1.12] text-balance">
                {lang === 'en' ? (
                  <>
                    Fast-Food, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">Grill, Pizzeria</span>, Creperie
                  </>
                ) : (
                  <>
                    Fast-Food, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">Zgarë, Pizzeri</span>, Kreperi
                  </>
                )}
              </h1>
            </div>

            <p className="text-[11px] sm:text-sm md:text-base text-neutral-300 leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Service Capabilities */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs text-neutral-300">
              <div className="flex items-center gap-1 bg-neutral-900/80 border border-neutral-800 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg">
                <Utensils className="w-3 h-3 text-orange-400" />
                <span>{t.hero.highlights.dineIn}</span>
              </div>
              <div className="flex items-center gap-1 bg-neutral-900/80 border border-neutral-800 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg">
                <Clock className="w-3 h-3 text-red-400" />
                <span>{t.hero.highlights.delivery}</span>
              </div>
              <div className="flex items-center gap-1 bg-neutral-900/80 border border-neutral-800 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg">
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>{t.hero.highlights.driveThrough}</span>
              </div>
            </div>

            {/* Primary Hero CTAs */}
            <div className="pt-0.5 grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5 sm:gap-3">
              {/* 1. Explore Menu Section */}
              <button
                type="button"
                onClick={() => onNavigate('menu')}
                className="py-2 px-2.5 sm:py-3 sm:px-5 rounded-xl bg-gradient-to-r from-red-600 via-orange-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-[11px] sm:text-sm shadow-lg shadow-orange-950/60 transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="truncate">{t.hero.viewMenu}</span>
              </button>

              {/* 2. Order Online / WhatsApp */}
              <button
                type="button"
                onClick={onOpenCart}
                className="py-2 px-2.5 sm:py-3 sm:px-5 rounded-xl bg-neutral-900 border border-orange-500/40 hover:border-orange-500 text-white font-semibold text-[11px] sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:bg-neutral-850"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                <span className="truncate">{t.hero.orderNow}</span>
              </button>

              {/* 3. Direct Call */}
              <a
                href="tel:+355686073000"
                className="py-2 px-2.5 sm:py-3 sm:px-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white font-semibold text-[11px] sm:text-sm transition-all flex items-center justify-center gap-1.5 hover:bg-neutral-850"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                <span className="truncate">{t.hero.callOrder}</span>
              </a>

              {/* 4. Directions */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=41.3293205,19.7827167"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2.5 sm:py-3 sm:px-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white font-medium text-[11px] sm:text-sm transition-all flex items-center justify-center gap-1.5"
                title="Get Directions on Google Maps"
              >
                <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                <span className="truncate">{t.hero.getDirections}</span>
              </a>
            </div>

            {/* Social & Delivery Platforms: Wolt, Instagram, Facebook */}
            <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-1.5 sm:gap-2.5">
              <a
                href="https://wolt.com/en/alb/tirana/restaurant/tedys-grill-80381"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 sm:py-2.5 sm:px-4 rounded-xl bg-neutral-900 border border-sky-500/35 hover:border-sky-400 text-neutral-200 hover:text-white font-semibold text-[11px] sm:text-xs transition-all flex items-center justify-center gap-1.5"
                title="Order Tedy's Grill on Wolt"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
                <span className="truncate">Wolt</span>
              </a>

              <a
                href="https://www.instagram.com/tedysgrill/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 sm:py-2.5 sm:px-4 rounded-xl bg-neutral-900 border border-pink-500/30 hover:border-pink-500/70 text-neutral-200 hover:text-white font-semibold text-[11px] sm:text-xs transition-all flex items-center justify-center gap-1.5"
                title="Follow @tedysgrill on Instagram"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500 shrink-0" />
                <span className="truncate">Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/tedysgrill/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 sm:py-2.5 sm:px-4 rounded-xl bg-neutral-900 border border-blue-500/30 hover:border-blue-500/70 text-neutral-200 hover:text-white font-semibold text-[11px] sm:text-xs transition-all flex items-center justify-center gap-1.5"
                title="Follow Tedy's Grill on Facebook"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 shrink-0" />
                <span className="truncate">Facebook</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Feature Photo Card */}
          <div className="lg:col-span-5 relative mt-1 lg:mt-0">
            <Card3DTilt maxTilt={6} className="relative z-10">
              
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl group">
                <div className="aspect-[16/9] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-950 relative">
                  <img
                    src={heroCardImg}
                    alt="Tedy's Fast Food & Grill Tirana"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  <a
                    href="https://maps.app.goo.gl/HGXrTNv8GFjSo7uB6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[9px] sm:text-[11px] bg-black/70 hover:bg-black text-white/90 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-white/10 transition-colors flex items-center gap-1"
                  >
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-400" />
                    <span>Google Maps</span>
                  </a>

                  <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <div className="text-[9px] sm:text-xs uppercase font-bold tracking-wider text-orange-400">
                      Rruga Tom Plezha 1001, Tiranë
                    </div>
                    <div className="text-xs sm:text-lg font-bold text-white font-display">
                      Tedy's Fast Food & Grill
                    </div>
                    <div className="text-[10px] sm:text-xs text-neutral-300 mt-0.5 truncate">
                      {lang === 'en' ? 'Grill, Sufllaqe & Indoor/Outdoor Seating' : 'Zgarë, Sufllaqe & Ambient Brenda/Jashtë'}
                    </div>
                  </div>
                </div>

                {/* Micro Thumbnail Food Strip - Clickable to open Menu */}
                <div className="p-1.5 sm:p-3 bg-neutral-950 border-t border-neutral-800/80 grid grid-cols-3 gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('menu')}
                    className="cursor-pointer group/item flex flex-col items-center text-center p-1 sm:p-2 rounded-lg sm:rounded-xl bg-neutral-900/60 hover:bg-neutral-850 border border-neutral-800/60 transition-all"
                  >
                    <img 
                      src={souvlakiImg} 
                      alt="Sufllaqe Pule" 
                      referrerPolicy="no-referrer" 
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-md sm:rounded-lg object-cover mb-1 shadow"
                    />
                    <span className="text-[9px] sm:text-[11px] font-semibold text-neutral-200 group-hover/item:text-orange-400 truncate w-full">
                      Pite me Giro Pule
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-neutral-400 font-mono">280 ALL</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('menu')}
                    className="cursor-pointer group/item flex flex-col items-center text-center p-1 sm:p-2 rounded-lg sm:rounded-xl bg-neutral-900/60 hover:bg-neutral-850 border border-neutral-800/60 transition-all"
                  >
                    <img 
                      src={skepastiImg} 
                      alt="Skebasti" 
                      referrerPolicy="no-referrer" 
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-md sm:rounded-lg object-cover mb-1 shadow"
                    />
                    <span className="text-[9px] sm:text-[11px] font-semibold text-neutral-200 group-hover/item:text-orange-400 truncate w-full">
                      Skebasti e Vogël
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-neutral-400 font-mono">600 ALL</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('menu')}
                    className="cursor-pointer group/item flex flex-col items-center text-center p-1 sm:p-2 rounded-lg sm:rounded-xl bg-neutral-900/60 hover:bg-neutral-850 border border-neutral-800/60 transition-all"
                  >
                    <img 
                      src={pizzaImg} 
                      alt="Pizza Speciale Tedy's" 
                      referrerPolicy="no-referrer" 
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-md sm:rounded-lg object-cover mb-1 shadow"
                    />
                    <span className="text-[9px] sm:text-[11px] font-semibold text-neutral-200 group-hover/item:text-orange-400 truncate w-full">
                      Pizza Speciale Tedy's
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-neutral-400 font-mono">600/1000 ALL</span>
                  </button>
                </div>

              </div>

            </Card3DTilt>
          </div>

        </div>

        {/* Dedicated Section Hub Cards inside Hero: Click to open each separate section */}
        <div className="mt-5 sm:mt-10 pt-4 sm:pt-7 border-t border-neutral-800/70">
          <div className="flex items-center justify-between mb-2.5 sm:mb-3">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400">
              {lang === 'en' ? 'Explore Sections' : 'Eksploro Seksionet'}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3">
            {sectionCards.map(card => (
              <button
                key={card.id}
                type="button"
                onClick={() => onNavigate(card.id)}
                className="group p-2 sm:p-3.5 rounded-xl bg-neutral-900/85 hover:bg-neutral-850 border border-neutral-800 hover:border-orange-500/50 text-left transition-all cursor-pointer flex flex-col justify-between gap-1.5 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-600 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div>
                  <div className="font-bold text-white text-[10px] sm:text-sm group-hover:text-orange-400 transition-colors truncate">
                    {card.title}
                  </div>
                  <div className="text-[9px] sm:text-[11px] text-neutral-400 truncate">
                    {card.desc}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
