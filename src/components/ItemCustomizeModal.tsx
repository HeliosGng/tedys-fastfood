import React, { useState, useEffect } from 'react';
import { MenuItem, SelectedOption, Language } from '../types';
import { CATEGORIES } from '../data/menu';
import { TRANSLATIONS } from '../data/translations';
import { X, Plus, Minus, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ItemCustomizeModalProps {
  item: MenuItem | null;
  lang: Language;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    quantity: number,
    selectedOptions: SelectedOption[],
    specialInstructions: string
  ) => void;
}

export const ItemCustomizeModal: React.FC<ItemCustomizeModalProps> = ({
  item,
  lang,
  onClose,
  onAddToCart
}) => {
  const t = TRANSLATIONS[lang];
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [radioSelections, setRadioSelections] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!item) return;
    setQuantity(1);
    setSpecialInstructions('');
    const initial: Record<string, string> = {};
    if (item.optionGroups) {
      item.optionGroups.forEach(grp => {
        if (grp.choices.length > 0) {
          initial[grp.id] = grp.choices[0].id;
        }
      });
    }
    setRadioSelections(initial);
  }, [item]);

  if (!item) return null;

  const hasTwoPriceOptions = Boolean(item.optionGroups && item.optionGroups.length > 0);

  // Calculate total price with selected option modifier
  let extraCostPerUnit = 0;
  const compiledSelectedOptions: SelectedOption[] = [];

  if (hasTwoPriceOptions && item.optionGroups) {
    item.optionGroups.forEach(grp => {
      const selectedId = radioSelections[grp.id] || grp.choices[0]?.id;
      const choice = grp.choices.find(c => c.id === selectedId);
      if (choice) {
        const mod = choice.priceModifier || 0;
        extraCostPerUnit += mod;
        compiledSelectedOptions.push({
          groupId: grp.id,
          groupTitleEn: grp.titleEn,
          groupTitleSq: grp.titleSq,
          choiceId: choice.id,
          choiceNameEn: choice.nameEn,
          choiceNameSq: choice.nameSq,
          priceModifier: mod
        });
      }
    });
  }

  const unitTotal = item.price + extraCostPerUnit;
  const grandTotal = unitTotal * quantity;

  const handleConfirm = () => {
    onAddToCart(item, quantity, compiledSelectedOptions, specialInstructions.trim());
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl w-full max-w-md sm:max-w-lg max-h-[88vh] flex flex-col overflow-hidden shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-28 sm:h-44 shrink-0 overflow-hidden bg-neutral-950">
          <img
            src={item.image}
            alt={lang === 'en' ? item.nameEn : item.nameSq}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/65 hover:bg-black text-white backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-2 left-3.5 right-3.5 sm:bottom-3 sm:left-5 sm:right-5">
            <span className="text-[9px] sm:text-[11px] uppercase font-bold tracking-wider text-orange-400">
              {(() => {
                const cat = CATEGORIES.find(c => c.id === item.category);
                return cat ? (lang === 'en' ? cat.nameEn : cat.nameSq) : item.category;
              })()}
            </span>
            <h3 className="text-sm sm:text-xl font-bold text-white font-display truncate">
              {lang === 'en' ? item.nameEn : item.nameSq}
            </h3>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-3.5 sm:space-y-4 text-xs sm:text-sm">
          <p className="text-neutral-300 leading-relaxed text-[11px] sm:text-xs">
            {lang === 'en' ? item.descriptionEn : item.descriptionSq}
          </p>

          {/* Products with Two Prices (Pizzas & Wine): Two Options Selector */}
          {hasTwoPriceOptions && item.optionGroups && (
            <div className="space-y-2 pt-1">
              {item.optionGroups.map(grp => (
                <div key={grp.id}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white text-xs sm:text-sm">
                      {lang === 'en' ? grp.titleEn : grp.titleSq}
                    </h4>
                    <span className="text-[10px] sm:text-[11px] text-orange-400 font-medium">
                      {lang === 'en' ? 'Select 1 of 2' : 'Zgjidh 1 nga 2'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {grp.choices.slice(0, 2).map(choice => {
                      const isSelected = (radioSelections[grp.id] || grp.choices[0]?.id) === choice.id;
                      const choicePrice = item.price + (choice.priceModifier || 0);
                      return (
                        <button
                          key={choice.id}
                          type="button"
                          onClick={() => setRadioSelections(prev => ({ ...prev, [grp.id]: choice.id }))}
                          className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 ${
                            isSelected
                              ? 'bg-orange-500/15 border-orange-500 text-white shadow-sm'
                              : 'bg-neutral-950/70 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="font-semibold text-[11px] sm:text-xs leading-tight">
                              {lang === 'en' ? choice.nameEn : choice.nameSq}
                            </span>
                            <CheckCircle2
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isSelected ? 'text-orange-400' : 'text-neutral-700'
                              }`}
                            />
                          </div>
                          <span className="text-[11px] sm:text-xs font-mono font-bold text-orange-400">
                            {choicePrice} ALL
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Comment box for how the customer wants the product */}
          <div>
            <label className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
              <span>
                {lang === 'en'
                  ? 'How do you want it? (Comment)'
                  : 'Si e dëshironi? (Koment / Udhëzime)'}
              </span>
            </label>
            <textarea
              value={specialInstructions}
              onChange={e => setSpecialInstructions(e.target.value)}
              placeholder={
                lang === 'en'
                  ? 'Write any preference: e.g. no onions, extra sauce, fries on the side, well done...'
                  : 'Shkruani si e dëshironi: p.sh. pa qepë, më shumë salcë, patate veç, e pjekur mirë...'
              }
              rows={3}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Footer with quantity and submit */}
        <div className="p-3 sm:p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between gap-2.5 sm:gap-4">
          {/* Quantity Stepper */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 bg-neutral-900 border border-neutral-800 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              disabled={quantity <= 1}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-neutral-300 hover:bg-neutral-800 disabled:opacity-30 cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-6 text-center font-bold font-mono text-white text-xs sm:text-sm">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(prev => prev + 1)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-neutral-300 hover:bg-neutral-800 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add Button */}
          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl bg-gradient-to-r from-red-600 via-orange-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-950 transition-all flex items-center justify-between cursor-pointer"
          >
            <span>{t.menu.quickAdd}</span>
            <span className="font-mono text-xs sm:text-sm tabular-nums">
              {grandTotal} ALL
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
