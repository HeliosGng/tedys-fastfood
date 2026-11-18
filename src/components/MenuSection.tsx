import React, { useState, useMemo } from 'react';
import { MenuItem, MenuCategoryId, Language } from '../types';
import { CATEGORIES } from '../data/menu';
import { TRANSLATIONS } from '../data/translations';
import { Card3DTilt } from './Card3DTilt';
import { Search, Flame, Plus, Sparkles, Clock } from 'lucide-react';

interface MenuSectionProps {
  items: MenuItem[];
  lang: Language;
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  lang,
  onSelectItem
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      const name = (lang === 'en' ? item.nameEn : item.nameSq).toLowerCase();
      const desc = (lang === 'en' ? item.descriptionEn : item.descriptionSq).toLowerCase();
      return name.includes(query) || desc.includes(query) || item.category.toLowerCase().includes(query);
    });
  }, [items, selectedCategory, searchQuery, lang]);

  return (
    <section id="menu" className="py-5 sm:py-12 px-2.5 sm:px-6 md:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-5 mb-4 sm:mb-8">
        <div>
          <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-orange-500 mb-1">
            <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-500" />
            <span>{lang === 'en' ? 'Fresh Every Day' : 'E Freskët Çdo Ditë'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white font-display">
            {t.menu.title}
          </h2>
          <p className="text-neutral-400 mt-0.5 sm:mt-1.5 text-[11px] sm:text-sm max-w-xl">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={t.menu.searchPlaceholder}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-8 pr-7 py-1.5 sm:py-2 text-[11px] sm:text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] text-neutral-400 hover:text-white cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center sm:flex-wrap gap-1 sm:gap-2 overflow-x-auto sm:overflow-visible pb-2 mb-4 sm:mb-7 scrollbar-none">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id as MenuCategoryId)}
            className={`px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-md shadow-orange-950/60'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
            }`}
          >
            <span>{lang === 'en' ? cat.nameEn : cat.nameSq}</span>
            <span className={`text-[9px] sm:text-[10px] font-mono px-1 py-0.5 rounded ${
              selectedCategory === cat.id ? 'bg-black/20 text-white' : 'bg-neutral-800 text-neutral-400'
            }`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Product Cards Grid: Strictly 3 Products Per Row */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-10 sm:py-16 bg-neutral-900/40 rounded-2xl border border-neutral-800">
          <p className="text-neutral-400 text-xs sm:text-sm">
            {lang === 'en' ? 'No dishes found matching your search.' : 'Nuk u gjet asnjë gatim për këtë kërkim.'}
          </p>
          <button
            type="button"
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="mt-3 px-3.5 py-1.5 rounded-xl bg-neutral-800 text-xs text-neutral-200 hover:text-white cursor-pointer"
          >
            {lang === 'en' ? 'Reset Filters' : 'Pastro Filtrat'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-1.5 sm:gap-4 md:gap-5">
          {filteredItems.map(dish => (
            <Card3DTilt
              key={dish.id}
              maxTilt={5}
              className="h-full"
            >
              <div 
                onClick={() => onSelectItem(dish)}
                className="group relative h-full flex flex-col justify-between rounded-lg sm:rounded-2xl bg-neutral-900 border border-neutral-800/90 hover:border-orange-500/40 transition-all duration-300 overflow-hidden cursor-pointer shadow-md hover:shadow-orange-950/20"
              >
                {/* Image Presentation */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={dish.image}
                    alt={lang === 'en' ? dish.nameEn : dish.nameSq}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/10 to-transparent" />

                  {/* Highlights badge */}
                  {dish.isHouseSpecial && (
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-red-600/95 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold px-1 py-0.5 sm:px-2 sm:py-0.5 rounded sm:rounded-md shadow flex items-center gap-0.5 sm:gap-1">
                      <Flame className="w-2 h-2 sm:w-3 sm:h-3 text-amber-300" />
                      <span className="hidden sm:inline">{t.menu.special}</span>
                    </div>
                  )}

                  {dish.isPopular && !dish.isHouseSpecial && (
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-orange-600/95 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold px-1 py-0.5 sm:px-2 sm:py-0.5 rounded sm:rounded-md shadow flex items-center gap-0.5 sm:gap-1">
                      <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-amber-200" />
                      <span className="hidden sm:inline">{t.menu.popular}</span>
                    </div>
                  )}

                  {/* Prep time */}
                  <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-black/75 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-md border border-white/10 hidden sm:flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-neutral-400" />
                    <span>~{dish.prepTimeMinutes || 10}m</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-1.5 sm:p-3 md:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-neutral-500 mb-0.5 uppercase font-medium tracking-wider">
                      <span className="truncate">
                        {(() => {
                          const cat = CATEGORIES.find(c => c.id === dish.category);
                          return cat ? (lang === 'en' ? cat.nameEn : cat.nameSq) : dish.category;
                        })()}
                      </span>
                      {dish.rating && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-amber-400 flex items-center gap-0.5">
                            ★ {dish.rating}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="text-[10px] sm:text-sm md:text-base font-bold text-white group-hover:text-orange-400 transition-colors font-display leading-tight line-clamp-2">
                      {lang === 'en' ? dish.nameEn : dish.nameSq}
                    </h3>

                    <p className="hidden md:block text-[11px] text-neutral-400 leading-relaxed line-clamp-2 mt-1">
                      {lang === 'en' ? dish.descriptionEn : dish.descriptionSq}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-1.5 sm:pt-2.5 mt-1.5 sm:mt-2.5 border-t border-neutral-800/80 flex items-center justify-between gap-1">
                    <div className="min-w-0">
                      {dish.optionGroups && dish.optionGroups[0]?.choices.length >= 2 ? (
                        <span className="text-[9px] sm:text-xs md:text-sm font-black text-white font-mono tabular-nums whitespace-nowrap">
                          {dish.price + (dish.optionGroups[0].choices[0].priceModifier || 0)}/{dish.price + (dish.optionGroups[0].choices[1].priceModifier || 0)}{' '}
                          <span className="text-[8px] sm:text-[10px] text-orange-400 font-medium">ALL</span>
                        </span>
                      ) : (
                        <span className="text-[10px] sm:text-sm md:text-base font-black text-white font-mono tabular-nums whitespace-nowrap">
                          {dish.price} <span className="text-[8px] sm:text-[11px] text-orange-400 font-medium">ALL</span>
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectItem(dish);
                      }}
                      className="shrink-0 p-1 sm:px-2.5 sm:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer bg-neutral-800 hover:bg-orange-600 text-neutral-200 hover:text-white"
                      title={t.menu.quickAdd}
                    >
                      <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400 group-hover:text-white" />
                      <span className="hidden lg:inline">{t.menu.quickAdd}</span>
                    </button>
                  </div>
                </div>

              </div>
            </Card3DTilt>
          ))}
        </div>
      )}

    </section>
  );
};
