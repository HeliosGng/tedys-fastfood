import React, { useState } from 'react';
import { AppSection, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ShoppingBag, Phone, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  cartCount: number;
  onOpenCart: () => void;
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  cartCount,
  onOpenCart,
  activeSection,
  onNavigate
}) => {
  const t = TRANSLATIONS[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: AppSection; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'menu', label: t.nav.menu },
    { id: 'reserve', label: t.nav.reserve },
    { id: 'reviews', label: t.nav.reviews },
    { id: 'location', label: t.nav.location },
  ];

  const handleSelectSection = (section: AppSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-12 sm:h-16 flex items-center justify-between gap-2">
        
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelectSection('home')}
          className="text-sm sm:text-xl font-bold sm:font-extrabold tracking-tight text-white font-display whitespace-nowrap shrink-0 hover:text-orange-400 transition-colors cursor-pointer text-left"
        >
          <span className="text-orange-500">Tedy's</span> Fast Food & Grill
        </button>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs lg:text-sm font-medium text-neutral-300">
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectSection(item.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 border-b-2 ${
                  isActive
                    ? 'text-orange-400 border-orange-500 font-semibold'
                    : 'text-neutral-300 border-transparent hover:text-orange-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language, Call & Cart */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Dual Language Switcher */}
          <button
            type="button"
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] sm:text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-700 transition-all cursor-pointer whitespace-nowrap"
            title={lang === 'en' ? 'Ndërro në Shqip' : 'Switch to English'}
          >
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />
            <span>{lang === 'en' ? 'SQ' : 'EN'}</span>
          </button>

          {/* Quick Call Direct */}
          <a
            href="tel:+355686073000"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-200 transition-colors whitespace-nowrap"
            title="+355 68 607 3000"
          >
            <Phone className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-mono">+355 68 607 3000</span>
          </a>

          {/* Cart Basket Button */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-[11px] sm:text-xs font-bold transition-all shadow-md shadow-orange-950 cursor-pointer whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">{t.nav.order}</span>
            {cartCount > 0 && (
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white text-neutral-950 text-[10px] sm:text-[11px] font-bold flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-neutral-900 text-neutral-300 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-3 py-3 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <nav className="grid grid-cols-2 gap-1.5 text-xs font-medium text-neutral-300">
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-orange-500/40 text-orange-400 font-semibold'
                      : 'bg-neutral-900/60 hover:bg-neutral-900 hover:text-orange-400'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-neutral-850 flex items-center justify-between">
            <a
              href="tel:+355686073000"
              className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-200"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>+355 68 607 3000</span>
            </a>
            <span className="text-[10px] text-emerald-400 font-medium">
              {t.nav.openUntil}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
