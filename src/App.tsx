/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppSection, Language, MenuItem, CartItem, SelectedOption } from './types';
import { MENU_ITEMS } from './data/menu';
import { TRANSLATIONS } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeGallery } from './components/HomeGallery';
import { Dish3DShowcase } from './components/Dish3DShowcase';
import { MenuSection } from './components/MenuSection';
import { ItemCustomizeModal } from './components/ItemCustomizeModal';
import { CartDrawer } from './components/CartDrawer';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationAndHours } from './components/LocationAndHours';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

const VALID_SECTIONS: AppSection[] = ['home', 'menu', 'reviews', 'reserve', 'location'];

export default function App() {
  const [lang, setLang] = useState<Language>('sq');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [addedToastName, setAddedToastName] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<AppSection>(() => {
    const hash = window.location.hash.replace('#', '') as AppSection;
    return VALID_SECTIONS.includes(hash) ? hash : 'home';
  });

  // Restore language or cart if saved
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('tedys_lang') as Language;
      if (savedLang === 'en' || savedLang === 'sq') {
        setLang(savedLang);
      }
      const savedCart = localStorage.getItem('tedys_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Sync URL hash for back/forward browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as AppSection;
      if (VALID_SECTIONS.includes(hash)) {
        setActiveSection(hash);
      } else if (!hash) {
        setActiveSection('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Save cart changes
  useEffect(() => {
    try {
      localStorage.setItem('tedys_cart', JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  const navigateToSection = (section: AppSection) => {
    setActiveSection(section);
    if (window.location.hash !== `#${section}`) {
      window.history.pushState(null, '', section === 'home' ? '#' : `#${section}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLang(prev => {
      const next = prev === 'en' ? 'sq' : 'en';
      try {
        localStorage.setItem('tedys_lang', next);
      } catch {
        // Ignore
      }
      return next;
    });
  };

  // Add customized item to cart
  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    selectedOptions: SelectedOption[],
    specialInstructions: string
  ) => {
    const extraPerUnit = selectedOptions.reduce((sum, opt) => sum + (opt.priceModifier || 0), 0);
    const unitPrice = item.price + extraPerUnit;
    const totalPrice = unitPrice * quantity;

    const cartItemId = `${item.id}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;

    const newItem: CartItem = {
      cartItemId,
      menuItem: item,
      quantity,
      selectedOptions,
      specialInstructions,
      unitPrice,
      totalPrice
    };

    setCart(prev => [...prev, newItem]);
    const label = lang === 'en' ? item.nameEn : item.nameSq;
    setAddedToastName(label);
    setTimeout(() => {
      setAddedToastName(prev => (prev === label ? null : prev));
    }, 2200);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(it => {
        if (it.cartItemId === cartItemId) {
          return {
            ...it,
            quantity: newQty,
            totalPrice: it.unitPrice * newQty
          };
        }
        return it;
      })
    );
  };

  const handleRemoveFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(it => it.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalCartAmount = cart.reduce((sum, i) => sum + i.totalPrice, 0);

  // Filter 5 signature items for 3D showcase
  const showcaseDishes = MENU_ITEMS.filter(item =>
    [
      'suflaqe-pite-giro-pule',
      'burger-skebasti-madhe',
      'pizza-speciale-tedys',
      'zgare-mix-grill',
      'krepe-ludia-nutella'
    ].includes(item.id)
  );

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-orange-600 selection:text-white">
      
      {/* Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />

      {/* Main Content: Render Only the Active Section */}
      <main className="flex-1">
        {activeSection !== 'home' && (
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-5">
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-neutral-800/70">
              <button
                type="button"
                onClick={() => navigateToSection('home')}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-neutral-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Back to Home' : 'Kthehu në Kreu'}</span>
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
                {(['menu', 'reserve', 'reviews', 'location'] as AppSection[]).map(sec => (
                  <button
                    key={sec}
                    type="button"
                    onClick={() => navigateToSection(sec)}
                    className={`px-2 py-1 rounded-lg text-[10px] sm:text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      activeSection === sec
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40 font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {sec === 'menu' && t.nav.menu}
                    {sec === 'reserve' && t.nav.reserve}
                    {sec === 'reviews' && t.nav.reviews}
                    {sec === 'location' && t.nav.location}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'home' && (
          <>
            <Hero
              lang={lang}
              onOpenCart={() => setIsCartOpen(true)}
              onNavigate={navigateToSection}
            />
            <HomeGallery lang={lang} onNavigate={navigateToSection} />
          </>
        )}

        {activeSection === 'menu' && (
          <>
            <div id="showcase">
              <Dish3DShowcase
                items={showcaseDishes.length > 0 ? showcaseDishes : MENU_ITEMS.slice(0, 5)}
                lang={lang}
                onSelectCustomize={setCustomizingItem}
              />
            </div>
            <MenuSection
              items={MENU_ITEMS}
              lang={lang}
              onSelectItem={setCustomizingItem}
            />
          </>
        )}

        {activeSection === 'reviews' && (
          <>
            <ReviewsSection lang={lang} />
            <InstagramSection lang={lang} />
          </>
        )}

        {activeSection === 'reserve' && (
          <ReservationSection lang={lang} />
        )}

        {activeSection === 'location' && (
          <LocationAndHours lang={lang} />
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={navigateToSection}
      />

      {/* Item Comment & Pizza Options Modal */}
      <ItemCustomizeModal
        key={customizingItem?.id || 'none'}
        item={customizingItem}
        lang={lang}
        onClose={() => setCustomizingItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart & WhatsApp Ordering Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        lang={lang}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Brief Added-to-Cart confirmation above Floating Cart Button */}
      {!isCartOpen && addedToastName && (
        <div className="fixed bottom-16 right-4 sm:bottom-20 sm:right-6 z-40 px-3 py-1.5 rounded-xl bg-emerald-950/95 border border-emerald-500/40 text-emerald-300 text-[11px] sm:text-xs font-semibold shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200 max-w-[230px] truncate">
          ✓ {addedToastName} — {lang === 'en' ? 'Added to cart' : 'U shtua në shportë'}
        </div>
      )}

      {/* Persistent Floating Cart Button (Visible on all screens when CartDrawer is closed) */}
      {!isCartOpen && (
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          aria-label={t.cart.title}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 sm:gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm shadow-2xl shadow-orange-950/80 border border-orange-300/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            {totalCartCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[16px] h-4 px-1 rounded-full bg-white text-neutral-950 text-[10px] font-extrabold font-mono flex items-center justify-center shadow">
                {totalCartCount}
              </span>
            )}
          </div>
          <span>{lang === 'en' ? 'Cart' : 'Shporta'}</span>
          {totalCartCount > 0 && (
            <span className="pl-1.5 border-l border-white/30 font-mono text-[11px] sm:text-xs tabular-nums">
              {totalCartAmount} ALL
            </span>
          )}
        </button>
      )}

    </div>
  );
}
