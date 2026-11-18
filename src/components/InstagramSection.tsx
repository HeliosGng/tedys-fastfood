import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SITE_PHOTOS, CATEGORY_PHOTOS } from '../data/photos';

const restaurantImg = SITE_PHOTOS.restaurantHero;
const souvlakiImg = CATEGORY_PHOTOS.suflaqe;
const pizzaImg = CATEGORY_PHOTOS.pizzaClassic;
const skepastiImg = CATEGORY_PHOTOS.skepasti;
const crepesImg = CATEGORY_PHOTOS.krepaEmbla;
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

interface InstagramSectionProps {
  lang: Language;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const posts = [
    {
      id: 'ig-1',
      image: souvlakiImg,
      captionEn: 'Warm pita, tender rotisserie chicken & golden fries inside! 🔥 #sufllaqe #tiranafood',
      captionSq: 'Pitë e butë, mish pule në hell dhe patate të skuqura brenda! 🔥 #sufllaqe #tirana',
      likes: 248,
      comments: 18
    },
    {
      id: 'ig-2',
      image: pizzaImg,
      captionEn: 'Bubbly melted mozzarella and blistered crust straight from our oven 🍕 #woodfiredpizza',
      captionSq: 'Mocarelë e shkrirë dhe kore kërcitëse sapo dalë nga furra 🍕 #pica #tirana',
      likes: 312,
      comments: 24
    },
    {
      id: 'ig-3',
      image: skepastiImg,
      captionEn: 'Skepasti loaded with gyro meat, melted gouda and house dressing. Hungry yet? 🤤',
      captionSq: 'Skepasti speciale me dyfeqe mishi e djathë kaçkavall të shkrirë! Ju erdhi uria? 🤤',
      likes: 295,
      comments: 15
    },
    {
      id: 'ig-4',
      image: restaurantImg,
      captionEn: 'Fresh charcoal grill fired up daily with cozy indoor & outdoor seating 🔥',
      captionSq: 'Zgara me qymyr ndizet çdo ditë, me ambient të rehatshëm brenda dhe jashtë 🔥',
      likes: 184,
      comments: 12
    },
    {
      id: 'ig-5',
      image: crepesImg,
      captionEn: 'Sweet finish: warm Nutella, banana & biscuit crepe! 🍓🍫 #crepes #dessert',
      captionSq: 'Mbyllje e ëmbël: krepë e ngrohtë me Nutella, banane & biskotë! 🍓🍫 #krepa',
      likes: 420,
      comments: 31
    }
  ];

  return (
    <section className="py-6 sm:py-12 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-neutral-800">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-5 mb-5 sm:mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-pink-500 mb-1">
            <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-500" />
            <span>@tedysgrill on Instagram</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
            {t.instagram.title}
          </h2>
          <p className="text-neutral-400 mt-0.5 sm:mt-1 text-[11px] sm:text-sm">
            {t.instagram.subtitle}
          </p>
        </div>

        <a
          href="https://www.instagram.com/tedysgrill/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-rose-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-rose-950 transition-all shrink-0 hover:scale-[1.02]"
        >
          <Instagram className="w-3.5 h-3.5" />
          <span>{t.instagram.followBtn}</span>
        </a>
      </div>

      {/* Grid of 5 Posts */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
        {posts.map(post => (
          <a
            key={post.id}
            href="https://www.instagram.com/tedysgrill/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 block shadow-md"
          >
            <img
              src={post.image}
              alt="Tedy's grill instagram food"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Hover scrim overlay */}
            <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white">
              <div className="flex justify-end">
                <ExternalLink className="w-4 h-4 text-pink-400" />
              </div>

              <div>
                <p className="text-[11px] text-neutral-200 line-clamp-3 mb-3 leading-snug">
                  {lang === 'en' ? post.captionEn : post.captionSq}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono font-medium text-neutral-300">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};
