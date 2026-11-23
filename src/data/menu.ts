import { MenuItem, CustomOptionGroup } from '../types';
import { SITE_PHOTOS, CATEGORY_PHOTOS, getProductPhoto } from './photos';

const souvlakiImg = CATEGORY_PHOTOS.suflaqe;
const pizzaImg = CATEGORY_PHOTOS.pizzaClassic;
const skepastiImg = CATEGORY_PHOTOS.skepasti;
const crepesImg = CATEGORY_PHOTOS.krepaEmbla;
const restaurantImg = SITE_PHOTOS.restaurantHero;
const tedysExteriorImg = SITE_PHOTOS.exteriorMain;
const googleMapsPhotoImg = SITE_PHOTOS.googleMapsPhoto;
const homepageBgImg = SITE_PHOTOS.homepageBackground;

const donerPanineImg = CATEGORY_PHOTOS.doner;
const calzoneImg = CATEGORY_PHOTOS.calzone;
const clubSandwichImg = CATEGORY_PHOTOS.clubSandwich;
const breakfastImg = CATEGORY_PHOTOS.mengjesore;
const bruschettaImg = CATEGORY_PHOTOS.bruscheta;
const savoryCrepeImg = CATEGORY_PHOTOS.krepaKripura;
const saladSidesImg = CATEGORY_PHOTOS.sallataSides;
const mixGrillImg = CATEGORY_PHOTOS.mixGrill;
const gyrosPlatterImg = CATEGORY_PHOTOS.racioneGiro;
const burgerHotdogImg = CATEGORY_PHOTOS.burger;
const coldDrinksImg = CATEGORY_PHOTOS.pijeFreskuese;
const beerWineRakiImg = CATEGORY_PHOTOS.birraVereRaki;
const pizzaMargheritaBiancaImg = CATEGORY_PHOTOS.pizzaBiancaMargherita;
const pizzaDiavolaProsciuttoImg = CATEGORY_PHOTOS.pizzaDiavolaProsciutto;
const racioneZgareImg = CATEGORY_PHOTOS.racioneZgare;
const produkteZgareImg = CATEGORY_PHOTOS.produkteZgare;
const hotdogImg = CATEGORY_PHOTOS.hotdog;
const caesarVeggiesImg = CATEGORY_PHOTOS.caesarVeggies;

export { restaurantImg, tedysExteriorImg, googleMapsPhotoImg, homepageBgImg };

const pizzaTwoSizeOption = (normalPrice: number, familyPrice: number): CustomOptionGroup[] => [
  {
    id: 'pizza-size',
    titleEn: 'Choose Pizza Size',
    titleSq: 'Zgjidhni Madhësinë',
    required: true,
    type: 'radio',
    choices: [
      { id: 'normal', nameEn: 'Normal', nameSq: 'Normale', priceModifier: 0 },
      { id: 'family', nameEn: 'Family / Large', nameSq: 'Familjare', priceModifier: familyPrice - normalPrice }
    ]
  }
];

const BASE_MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. DONER (9 items)
  // ==========================================
  {
    id: 'doner-giro-derri',
    category: 'doner',
    nameEn: 'DONER ME GIRO DERRI',
    nameSq: 'DONER ME GIRO DERRI',
    descriptionEn: 'Pork gyros, Panine bread, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: 'Gjiro derri, Panine, Patate, Domate, Xaxiki, Qepë',
    price: 280,
    image: donerPanineImg,
    isPopular: true,
    prepTimeMinutes: 7
  },
  {
    id: 'doner-giro-pule',
    category: 'doner',
    nameEn: 'DONER ME GIRO PULE',
    nameSq: 'DONER ME GIRO PULE',
    descriptionEn: 'Chicken gyros, Panine bread, Fries, Tomato, Sauce, Green salad',
    descriptionSq: 'Gjiro pule, Panine, Patate, Domate, Salcë, Sallatë jeshile',
    price: 280,
    image: donerPanineImg,
    isPopular: true,
    prepTimeMinutes: 7
  },
  {
    id: 'doner-shishqebap-derri',
    category: 'doner',
    nameEn: 'DONER ME SHISHQEBAP DERRI',
    nameSq: 'DONER ME SHISHQEBAP DERRI',
    descriptionEn: 'Pork shishkebab, Panine bread, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: 'Shishqebap derri, Panine, Patate, Domate, Xaxiki, Qepë',
    price: 300,
    image: donerPanineImg,
    prepTimeMinutes: 8
  },
  {
    id: 'doner-shishqebap-pule',
    category: 'doner',
    nameEn: 'DONER ME SHISHQEBAP PULE',
    nameSq: 'DONER ME SHISHQEBAP PULE',
    descriptionEn: 'Chicken shishkebab, Panine bread, Fries, Tomato, Sauce, Green salad',
    descriptionSq: 'Shishqebap pule, Panine, Patate, Domate, Salcë, Sallatë jeshile',
    price: 300,
    image: donerPanineImg,
    prepTimeMinutes: 8
  },
  {
    id: 'doner-llukanik-derri',
    category: 'doner',
    nameEn: 'DONER ME LLUKANIK DERRI',
    nameSq: 'DONER ME LLUKANIK DERRI',
    descriptionEn: '1 pork sausage (llukanik), Panine bread, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: '1 llukanik derri, Panine, Patate, Domate, Xaxiki, Qepë',
    price: 300,
    image: donerPanineImg,
    prepTimeMinutes: 8
  },
  {
    id: 'doner-llukanik-pule',
    category: 'doner',
    nameEn: 'DONER ME LLUKANIK PULE',
    nameSq: 'DONER ME LLUKANIK PULE',
    descriptionEn: '1 chicken sausage (llukanik), Panine bread, Fries, Tomato, Sauce, Green salad',
    descriptionSq: '1 llukanik pule, Panine, Patate, Domate, Salcë, Sallatë jeshile',
    price: 300,
    image: donerPanineImg,
    prepTimeMinutes: 8
  },
  {
    id: 'doner-giro-derri-special',
    category: 'doner',
    nameEn: 'DONER GIRO DERRI "SPECIAL"',
    nameSq: 'DONER GIRO DERRI "SPECIAL"',
    descriptionEn: 'Pork gyros, Panine bread, Fries, Gouda cheese, Tomato, Tzatziki, Onion',
    descriptionSq: 'Gjiro derri, Panine, Patate, Djathë Gouda, Domate, Xaxiki, Qepë',
    price: 300,
    image: donerPanineImg,
    isHouseSpecial: true,
    prepTimeMinutes: 8
  },
  {
    id: 'doner-giro-pule-special',
    category: 'doner',
    nameEn: 'DONER GIRO PULE "SPECIAL"',
    nameSq: 'DONER GIRO PULE "SPECIAL"',
    descriptionEn: 'Chicken gyros, Panine bread, Fries, Gouda cheese, Mayonnaise, Green salad',
    descriptionSq: 'Gjiro pule, Panine, Patate, Djathë Gouda, Majonezë, Sallatë jeshile',
    price: 300,
    image: donerPanineImg,
    isHouseSpecial: true,
    prepTimeMinutes: 8
  },
  {
    id: 'doner-vegetarian',
    category: 'doner',
    nameEn: 'DONER VEGETARIAN',
    nameSq: 'DONER VEGETARIAN',
    descriptionEn: 'Pita, Sauce, Grilled & fresh vegetables',
    descriptionSq: 'Pita, Salcë, Perime',
    price: 290,
    image: donerPanineImg,
    isVegetarian: true,
    prepTimeMinutes: 6
  },

  // ==========================================
  // 2. SUFLAQE (10 items)
  // ==========================================
  {
    id: 'suflaqe-pite-giro-derri',
    category: 'suflaqe',
    nameEn: 'PITE ME GIRO DERRI',
    nameSq: 'PITE ME GIRO DERRI',
    descriptionEn: 'Pork gyros, Pita, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: 'Giro derri, Pite, patate, domate, xaxiki, qepë',
    price: 280,
    image: souvlakiImg,
    isPopular: true,
    prepTimeMinutes: 7
  },
  {
    id: 'suflaqe-pite-giro-derri-dopio',
    category: 'suflaqe',
    nameEn: 'PITE ME GIRO DERRI "DOPIO"',
    nameSq: 'PITE ME GIRO DERRI "DOPIO"',
    descriptionEn: 'Pork gyros, 2 Pitas, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: 'Giro derri, 2 pite, patate, domate, xaxiki, qepë',
    price: 310,
    image: souvlakiImg,
    isHouseSpecial: true,
    prepTimeMinutes: 8
  },
  {
    id: 'suflaqe-pite-giro-pule',
    category: 'suflaqe',
    nameEn: 'PITE ME GIRO PULE',
    nameSq: 'PITE ME GIRO PULE',
    descriptionEn: 'Chicken gyros, Pita, Fries, Tomato, Sauce, Green salad',
    descriptionSq: 'Giro pule, pite, patate, domate, salcë, sallatë jeshile',
    price: 280,
    image: souvlakiImg,
    isPopular: true,
    prepTimeMinutes: 7
  },
  {
    id: 'suflaqe-pite-giro-pule-dopio',
    category: 'suflaqe',
    nameEn: 'PITE ME GIRO PULE "DOPIO"',
    nameSq: 'PITE ME GIRO PULE "DOPIO"',
    descriptionEn: 'Chicken gyros, 2 Pitas, Fries, Tomato, Sauce, Green salad',
    descriptionSq: 'Giro pule, 2 pite, patate, domate, salcë, sallatë jeshile',
    price: 310,
    image: souvlakiImg,
    isHouseSpecial: true,
    prepTimeMinutes: 8
  },
  {
    id: 'suflaqe-pite-shishqebap-derri',
    category: 'suflaqe',
    nameEn: 'PITE ME SHISHQEBAP DERRI',
    nameSq: 'PITE ME SHISHQEBAP DERRI',
    descriptionEn: 'Pork shishkebab, Pita, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: 'Shishqebap derri, Pite, Patate, Domate, Xaxiki, Qepë',
    price: 300,
    image: souvlakiImg,
    prepTimeMinutes: 8
  },
  {
    id: 'suflaqe-pite-shishqebap-pule',
    category: 'suflaqe',
    nameEn: 'PITE ME SHISHQEBAP PULE',
    nameSq: 'PITE ME SHISHQEBAP PULE',
    descriptionEn: 'Chicken shishkebab, Pita, Fries, Tomato, Sauce, Green salad',
    descriptionSq: 'Shishqebap pule, Pite, Patate, Domate, Salcë, Sallatë jeshile',
    price: 300,
    image: souvlakiImg,
    prepTimeMinutes: 8
  },
  {
    id: 'suflaqe-pite-llukanik-derri',
    category: 'suflaqe',
    nameEn: 'PITE ME LLUKANIK DERRI',
    nameSq: 'PITE ME LLUKANIK DERRI',
    descriptionEn: '1 pork sausage (llukanik), Pita, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: '1 llukanik derri, Pite, Patate, Domate, Xaxiki, Qepë',
    price: 300,
    image: souvlakiImg,
    prepTimeMinutes: 8
  },
  {
    id: 'suflaqe-pite-llukanik-pule',
    category: 'suflaqe',
    nameEn: 'PITE ME LLUKANIK PULE',
    nameSq: 'PITE ME LLUKANIK PULE',
    descriptionEn: '1 chicken sausage (llukanik), Pita, Fries, Tomato, Sauce, Green salad',
    descriptionSq: '1 llukanik pule, Pite, Patate, Domate, Salcë, Sallatë jeshile',
    price: 300,
    image: souvlakiImg,
    prepTimeMinutes: 8
  },
  {
    id: 'suflaqe-pita-club',
    category: 'suflaqe',
    nameEn: 'PITA CLUB',
    nameSq: 'PITA CLUB',
    descriptionEn: '3 Pitas, mayonnaise, lettuce, tomato, fries, pork or chicken gyros',
    descriptionSq: '3 pite, majonezë, marule, domate, patate, giro derri ose pule',
    price: 600,
    image: souvlakiImg,
    isHouseSpecial: true,
    prepTimeMinutes: 12
  },
  {
    id: 'suflaqe-vegetariane',
    category: 'suflaqe',
    nameEn: 'SUFLAQE VEGETARIANE',
    nameSq: 'SUFLAQE VEGETARIANE',
    descriptionEn: 'Pita, Sauce, Vegetables',
    descriptionSq: 'Pite, Salcë, Perime',
    price: 490,
    image: souvlakiImg,
    isVegetarian: true,
    prepTimeMinutes: 7
  },

  // ==========================================
  // 3. PIZZA MENU (22 items — all with 2 prices)
  // ==========================================
  {
    id: 'pizza-bianca',
    category: 'pizzas',
    nameEn: 'BIANCA',
    nameSq: 'BIANCA',
    descriptionEn: 'Gouda cheese, Mozzarella',
    descriptionSq: 'Djathë Gouda, Macarela',
    price: 350,
    image: pizzaMargheritaBiancaImg,
    isVegetarian: true,
    prepTimeMinutes: 11,
    optionGroups: pizzaTwoSizeOption(350, 550)
  },
  {
    id: 'pizza-margarita',
    category: 'pizzas',
    nameEn: 'MARGARITA',
    nameSq: 'MARGARITA',
    descriptionEn: 'Gouda, Mozzarella, Tomato sauce',
    descriptionSq: 'Gouda, Macarela, Salcë',
    price: 400,
    image: pizzaMargheritaBiancaImg,
    isVegetarian: true,
    isPopular: true,
    prepTimeMinutes: 11,
    optionGroups: pizzaTwoSizeOption(400, 650)
  },
  {
    id: 'pizza-proshute',
    category: 'pizzas',
    nameEn: 'PROSHUTË',
    nameSq: 'PROSHUTË',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Ham (Prosciutto)',
    descriptionSq: 'Gouda, Macarela, Salcë, Proshutë',
    price: 500,
    image: pizzaDiavolaProsciuttoImg,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(500, 750)
  },
  {
    id: 'pizza-beicon',
    category: 'pizzas',
    nameEn: 'BEICON',
    nameSq: 'BEICON',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Bacon',
    descriptionSq: 'Gouda, Macarela, Salcë, Beicon',
    price: 600,
    image: pizzaImg,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(600, 900)
  },
  {
    id: 'pizza-sallam',
    category: 'pizzas',
    nameEn: 'SALLAM',
    nameSq: 'SALLAM',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Milanese Salami',
    descriptionSq: 'Gouda, Macarela, Salcë, Sallam Milanez',
    price: 500,
    image: pizzaDiavolaProsciuttoImg,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(500, 750)
  },
  {
    id: 'pizza-proshute-sallam',
    category: 'pizzas',
    nameEn: 'PROSHUTË & SALLAM',
    nameSq: 'PROSHUTË & SALLAM',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Ham & Salami',
    descriptionSq: 'Gouda, Macarela, Salcë, Proshutë & Sallam',
    price: 550,
    image: pizzaDiavolaProsciuttoImg,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(550, 800)
  },
  {
    id: 'pizza-proshute-kerpudhe',
    category: 'pizzas',
    nameEn: 'PROSHUTË & KËRPUDHË',
    nameSq: 'PROSHUTË & KËRPUDHË',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Ham & Mushrooms',
    descriptionSq: 'Gouda, Macarela, Salcë, Proshutë & Kërpudhë',
    price: 550,
    image: pizzaImg,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(550, 850)
  },
  {
    id: 'pizza-kapricioze',
    category: 'pizzas',
    nameEn: 'KAPRICIOZE',
    nameSq: 'KAPRICIOZE',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Ham, Mushrooms, Peppers, Olives',
    descriptionSq: 'Gouda, Macarela, Salcë, Proshutë, Kërpudhë, Speca, Ullinj',
    price: 550,
    image: pizzaImg,
    isPopular: true,
    prepTimeMinutes: 13,
    optionGroups: pizzaTwoSizeOption(550, 850)
  },
  {
    id: 'pizza-kater-stinet',
    category: 'pizzas',
    nameEn: 'KATËR STINËT',
    nameSq: 'KATËR STINËT',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Ham, Mushrooms, Tuna',
    descriptionSq: 'Gouda, Macarela, Salcë, Proshutë, Kërpudhë, Ton',
    price: 550,
    image: pizzaImg,
    prepTimeMinutes: 13,
    optionGroups: pizzaTwoSizeOption(550, 850)
  },
  {
    id: 'pizza-giro',
    category: 'pizzas',
    nameEn: 'PICA GIRO',
    nameSq: 'PICA GIRO',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Gyros meat',
    descriptionSq: 'Gouda, Macarela, Salcë, Giro',
    price: 600,
    image: pizzaImg,
    isHouseSpecial: true,
    prepTimeMinutes: 13,
    optionGroups: pizzaTwoSizeOption(600, 1000)
  },
  {
    id: 'pizza-beicon-pikant',
    category: 'pizzas',
    nameEn: 'BEICON PIKANT',
    nameSq: 'BEICON PIKANT',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Bacon, Spicy chili',
    descriptionSq: 'Gouda, Macarela, Salcë, Beicon, Pikanto',
    price: 550,
    image: pizzaDiavolaProsciuttoImg,
    isSpicy: true,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(550, 900)
  },
  {
    id: 'pizza-proshute-krudo',
    category: 'pizzas',
    nameEn: 'PROSHUTË KRUDO',
    nameSq: 'PROSHUTË KRUDO',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Prosciutto Crudo',
    descriptionSq: 'Gouda, Macarela, Salcë, Proshutë Crudo',
    price: 600,
    image: pizzaDiavolaProsciuttoImg,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(600, 1000)
  },
  {
    id: 'pizza-vegjetariane',
    category: 'pizzas',
    nameEn: 'VEGJETARIANE',
    nameSq: 'VEGJETARIANE',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Mixed vegetables, Mushrooms',
    descriptionSq: 'Gouda, Macarela, Salcë, Perime, Kërpudhë',
    price: 450,
    image: pizzaImg,
    isVegetarian: true,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(450, 700)
  },
  {
    id: 'pizza-fshati',
    category: 'pizzas',
    nameEn: 'FSHATI',
    nameSq: 'FSHATI',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Peppers, Olives, Onion, White Feta cheese',
    descriptionSq: 'Gouda, Macarela, Salcë, Speca, Ullinj, Qepë, Djathë i bardhë',
    price: 450,
    image: pizzaImg,
    isVegetarian: true,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(450, 700)
  },
  {
    id: 'pizza-kerpudhe',
    category: 'pizzas',
    nameEn: 'KËRPUDHË',
    nameSq: 'KËRPUDHË',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Fresh Mushrooms',
    descriptionSq: 'Gouda, Macarela, Salcë, Kërpudhë',
    price: 450,
    image: pizzaMargheritaBiancaImg,
    isVegetarian: true,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(450, 700)
  },
  {
    id: 'pizza-ton-kerpudhe',
    category: 'pizzas',
    nameEn: 'TON & KËRPUDHË',
    nameSq: 'TON & KËRPUDHË',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Mushrooms, Tuna',
    descriptionSq: 'Gouda, Macarela, Salcë, Kërpudhë, Ton',
    price: 650,
    image: pizzaImg,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(650, 1000)
  },
  {
    id: 'pizza-kater-djatherat',
    category: 'pizzas',
    nameEn: 'KATËR DJATHËRAT',
    nameSq: 'KATËR DJATHËRAT',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Parmesan, Gorgonzola',
    descriptionSq: 'Gouda, Macarela, Salcë, Parmixhano, Gorgonzola',
    price: 550,
    image: pizzaMargheritaBiancaImg,
    isVegetarian: true,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(550, 950)
  },
  {
    id: 'pizza-kater-djatherat-pikant',
    category: 'pizzas',
    nameEn: 'KATËR DJATHËRAT & PIKANT',
    nameSq: 'KATËR DJATHËRAT & PIKANT',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Parmesan, Gorgonzola, Spicy salami',
    descriptionSq: 'Gouda, Macarela, Salcë, Parmixhano, Gorgonzola, Sallam pikant',
    price: 600,
    image: pizzaDiavolaProsciuttoImg,
    isSpicy: true,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(600, 1000)
  },
  {
    id: 'pizza-ton',
    category: 'pizzas',
    nameEn: 'TON',
    nameSq: 'TON',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Tuna',
    descriptionSq: 'Gouda, Macarela, Salcë, Ton',
    price: 550,
    image: pizzaImg,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(550, 800)
  },
  {
    id: 'pizza-diavola',
    category: 'pizzas',
    nameEn: 'DIAVOLA',
    nameSq: 'DIAVOLA',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Spicy salami',
    descriptionSq: 'Gouda, Macarela, Salcë, Sallam pikant',
    price: 550,
    image: pizzaDiavolaProsciuttoImg,
    isSpicy: true,
    isPopular: true,
    prepTimeMinutes: 12,
    optionGroups: pizzaTwoSizeOption(550, 900)
  },
  {
    id: 'pizza-mikse',
    category: 'pizzas',
    nameEn: 'PIZZA MIKSE',
    nameSq: 'PIZZA MIKSE',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Ham, Mushrooms, Bacon, Salami, Cream',
    descriptionSq: 'Djathë Gouda, Macarela, Salcë, Proshutë, Kërpudhë, Beicon, Sallam, Panë',
    price: 600,
    image: pizzaImg,
    isHouseSpecial: true,
    prepTimeMinutes: 13,
    optionGroups: pizzaTwoSizeOption(600, 1000)
  },
  {
    id: 'pizza-speciale-tedys',
    category: 'pizzas',
    nameEn: 'PIZZA SPECIALE TEDY\'S',
    nameSq: 'PIZZA SPECIALE TEDY\'S',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Prosciutto Crudo, Mushrooms, Bacon, Parmesan',
    descriptionSq: 'Gouda, Macarela, Salcë, Proshutë Crudo, Kërpudhë, Beicon, Parmixhano',
    price: 600,
    image: pizzaDiavolaProsciuttoImg,
    isHouseSpecial: true,
    isPopular: true,
    prepTimeMinutes: 14,
    optionGroups: pizzaTwoSizeOption(600, 1000)
  },

  // ==========================================
  // 4. MËNGJESORE (3 items)
  // ==========================================
  {
    id: 'mengjes-omlete-proshute',
    category: 'mengjesore',
    nameEn: 'OMLETË ME PROSHUTË',
    nameSq: 'OMLETË ME PROSHUTË',
    descriptionEn: 'Fresh farm egg omelet cooked with ham and melted cheese',
    descriptionSq: 'Omletë e ngrohtë me vezë të freskëta dhe proshutë',
    price: 300,
    image: breakfastImg,
    prepTimeMinutes: 8
  },
  {
    id: 'mengjes-tost',
    category: 'mengjesore',
    nameEn: 'TOST',
    nameSq: 'TOST',
    descriptionEn: 'Classic toasted sandwich with ham and melted cheese',
    descriptionSq: 'Tost klasik me proshutë dhe djathë të shkrirë',
    price: 150,
    image: breakfastImg,
    prepTimeMinutes: 5
  },
  {
    id: 'mengjes-tost-patate',
    category: 'mengjesore',
    nameEn: 'TOST PATATE',
    nameSq: 'TOST PATATE',
    descriptionEn: 'Toasted ham & cheese sandwich served with crispy french fries',
    descriptionSq: 'Tost me proshutë, djathë dhe patate të skuqura',
    price: 180,
    image: breakfastImg,
    prepTimeMinutes: 6
  },

  // ==========================================
  // 5. RACIONE PJATË GIRO (4 items)
  // ==========================================
  {
    id: 'racione-giro-derri-vogel',
    category: 'racione-giro',
    nameEn: 'GIRO DERRI (E VOGËL)',
    nameSq: 'GIRO DERRI (E VOGËL)',
    descriptionEn: 'Pork gyros, Pita, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: 'Giro derri, Pite, Patate, Domate, Xaxiki, Qepë',
    price: 600,
    image: gyrosPlatterImg,
    isPopular: true,
    prepTimeMinutes: 10
  },
  {
    id: 'racione-giro-derri-madhe',
    category: 'racione-giro',
    nameEn: 'GIRO DERRI (E MADHE)',
    nameSq: 'GIRO DERRI (E MADHE)',
    descriptionEn: 'Large pork gyros platter, Pita, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: 'Giro derri, Pite, Patate, Domate, Xaxiki, Qepë',
    price: 700,
    image: gyrosPlatterImg,
    isHouseSpecial: true,
    prepTimeMinutes: 12
  },
  {
    id: 'racione-giro-pule-vogel',
    category: 'racione-giro',
    nameEn: 'GIRO PULE (E VOGËL)',
    nameSq: 'GIRO PULE (E VOGËL)',
    descriptionEn: 'Chicken gyros, Pita, Fries, Tomato, Green salad, Sauce',
    descriptionSq: 'Giro pule, Pite, Patate, Domate, Sallatë jeshile, Sos',
    price: 600,
    image: gyrosPlatterImg,
    isPopular: true,
    prepTimeMinutes: 10
  },
  {
    id: 'racione-giro-pule-madhe',
    category: 'racione-giro',
    nameEn: 'GIRO PULE (E MADHE)',
    nameSq: 'GIRO PULE (E MADHE)',
    descriptionEn: 'Large chicken gyros platter, Pita, Fries, Tomato, Green salad, Sauce',
    descriptionSq: 'Giro pule, Pite, Patate, Domate, Sallatë jeshile, Sos',
    price: 700,
    image: gyrosPlatterImg,
    isHouseSpecial: true,
    prepTimeMinutes: 12
  },

  // ==========================================
  // 6. RACIONE PJATË ZGARE (13 items)
  // ==========================================
  {
    id: 'zgare-shishqebap-derri',
    category: 'racione-zgare',
    nameEn: 'SHISHQEBAP DERRI',
    nameSq: 'SHISHQEBAP DERRI',
    descriptionEn: '2 pork shishkebabs, Pita, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: '2 shishqebap derri, Pite, Patate, Domate, Xaxiki, Qepë',
    price: 600,
    image: racioneZgareImg,
    prepTimeMinutes: 12
  },
  {
    id: 'zgare-shishqebap-pule',
    category: 'racione-zgare',
    nameEn: 'SHISHQEBAP PULE',
    nameSq: 'SHISHQEBAP PULE',
    descriptionEn: '2 chicken shishkebabs, Pita, Fries, Sauce, Green salad',
    descriptionSq: '2 shishqebap pule, Pite, Patate, Salcë, Sallatë jeshile',
    price: 600,
    image: racioneZgareImg,
    prepTimeMinutes: 12
  },
  {
    id: 'zgare-llukanik-derri',
    category: 'racione-zgare',
    nameEn: 'LLUKANIK DERRI',
    nameSq: 'LLUKANIK DERRI',
    descriptionEn: '2 pork sausages (llukanik), Pita, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: '2 llukanik derri, Pite, Patate, Domate, Xaxiki, Qepë',
    price: 600,
    image: racioneZgareImg,
    prepTimeMinutes: 12
  },
  {
    id: 'zgare-llukanik-pule',
    category: 'racione-zgare',
    nameEn: 'LLUKANIK PULE',
    nameSq: 'LLUKANIK PULE',
    descriptionEn: '2 chicken sausages (llukanik), Pita, Fries, Sauce, Green salad',
    descriptionSq: '2 llukanik pule, Pite, Patate, Salcë, Sallatë jeshile',
    price: 600,
    image: racioneZgareImg,
    prepTimeMinutes: 12
  },
  {
    id: 'zgare-qofte-vici',
    category: 'racione-zgare',
    nameEn: 'QOFTE VIÇI',
    nameSq: 'QOFTE VIÇI',
    descriptionEn: '3 beef meatballs (qofte), Pita, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: '3 qofte viçi, Pite, Patate, Domate, Xaxiki, Qepë',
    price: 500,
    image: racioneZgareImg,
    prepTimeMinutes: 11
  },
  {
    id: 'zgare-kernace-racion',
    category: 'racione-zgare',
    nameEn: 'KËRNACE (RACION)',
    nameSq: 'KËRNACE (RACION)',
    descriptionEn: '3 grilled traditional kérnace, Pita, Fries, Tomato, Tzatziki, Onion',
    descriptionSq: '3 kërnace, Pite, Patate, Domate, Xaxiki, Qepë',
    price: 350,
    image: racioneZgareImg,
    prepTimeMinutes: 10
  },
  {
    id: 'zgare-paidhaqe',
    category: 'racione-zgare',
    nameEn: 'PAIDHAQE',
    nameSq: 'PAIDHAQE',
    descriptionEn: '300g grilled chops (paidhaqe), Fries, Green salad, Lemon',
    descriptionSq: '300g paidhaqe, Patate, Sallatë jeshile, Limon',
    price: 700,
    image: racioneZgareImg,
    isPopular: true,
    prepTimeMinutes: 15
  },
  {
    id: 'zgare-paidhaqe-gici-1kg',
    category: 'racione-zgare',
    nameEn: 'PAIDHAQE GICI 1KG',
    nameSq: 'PAIDHAQE GICI 1KG',
    descriptionEn: '1kg pork chops (paidhaqe), Fries, Green salad, Lemon',
    descriptionSq: '1kg paidhaqe, Patate, Sallatë jeshile, Limon',
    price: 1400,
    image: racioneZgareImg,
    isHouseSpecial: true,
    prepTimeMinutes: 20
  },
  {
    id: 'zgare-fileto-pule',
    category: 'racione-zgare',
    nameEn: 'FILETO PULE',
    nameSq: 'FILETO PULE',
    descriptionEn: '300g grilled chicken fillet, Pita, Fries, Green salad, Sauce, Lemon',
    descriptionSq: '300g fileto pule, Pite, Patate, Sallatë jeshile, Sos, Limon',
    price: 600,
    image: racioneZgareImg,
    prepTimeMinutes: 12
  },
  {
    id: 'zgare-mix-grill',
    category: 'racione-zgare',
    nameEn: 'MIX GRILL (2 PERSONA)',
    nameSq: 'MIX GRILL (2 PERSONA)',
    descriptionEn: '2 pitas, 2 pork & 2 chicken shishkebabs, 4 kérnaca, fries, onion, lemon, 2 pork sausages, 2 beef qofte',
    descriptionSq: '2 pite, 2 shishqebap derri, 2 shishqebap pule, 4 kërnaca, patate, qepë, limon, 2 llukanik derri, 2 qofte viçi',
    price: 1600,
    image: mixGrillImg,
    isHouseSpecial: true,
    isPopular: true,
    prepTimeMinutes: 20
  },
  {
    id: 'zgare-krahe-pule',
    category: 'racione-zgare',
    nameEn: 'KRAHË PULE (ZGARE)',
    nameSq: 'KRAHË PULE (ZGARE)',
    descriptionEn: '300g grilled chicken wings, Fries, Green salad, Sauce, Lemon',
    descriptionSq: '300g krahë pule, Patate, Sallatë jeshile, Sos, Limon',
    price: 450,
    image: racioneZgareImg,
    prepTimeMinutes: 13
  },
  {
    id: 'zgare-pule-zgare',
    category: 'racione-zgare',
    nameEn: 'PULE ZGARE',
    nameSq: 'PULE ZGARE',
    descriptionEn: '1 whole grilled chicken, Lemon',
    descriptionSq: '1 pulë zgare, Limon',
    price: 700,
    image: racioneZgareImg,
    isPopular: true,
    prepTimeMinutes: 18
  },
  {
    id: 'zgare-pule-me-patate',
    category: 'racione-zgare',
    nameEn: 'PULE ME PATATE',
    nameSq: 'PULE ME PATATE',
    descriptionEn: '1 whole grilled chicken, Fries, Lemon',
    descriptionSq: '1 pulë zgare, patate, Limon',
    price: 800,
    image: racioneZgareImg,
    isHouseSpecial: true,
    prepTimeMinutes: 18
  },

  // ==========================================
  // 7. PRODUKTE ZGARE (6 items)
  // ==========================================
  {
    id: 'prod-kernace',
    category: 'produkte-zgare',
    nameEn: 'KËRNACE',
    nameSq: 'KËRNACE',
    descriptionEn: 'Grilled Balkan kérnace portion',
    descriptionSq: 'Kërnace të pjekura në zgarë',
    price: 450,
    image: produkteZgareImg,
    prepTimeMinutes: 10
  },
  {
    id: 'prod-llukanik-derri-pule',
    category: 'produkte-zgare',
    nameEn: 'LLUKANIK ME MISH DERRI/PULE',
    nameSq: 'LLUKANIK ME MISH DERRI/PULE',
    descriptionEn: 'Grilled pork or chicken sausage (llukanik)',
    descriptionSq: 'Llukanik me mish derri ose pule në zgarë',
    price: 350,
    image: produkteZgareImg,
    prepTimeMinutes: 10
  },
  {
    id: 'prod-shishqebap-derri',
    category: 'produkte-zgare',
    nameEn: 'SHISHQEBAP DERRI',
    nameSq: 'SHISHQEBAP DERRI',
    descriptionEn: 'Grilled pork shishkebab skewers',
    descriptionSq: 'Shishqebap derri në zgarë',
    price: 350,
    image: produkteZgareImg,
    prepTimeMinutes: 10
  },
  {
    id: 'prod-shishqebap-pule',
    category: 'produkte-zgare',
    nameEn: 'SHISHQEBAP PULE',
    nameSq: 'SHISHQEBAP PULE',
    descriptionEn: 'Grilled chicken shishkebab skewers',
    descriptionSq: 'Shishqebap pule në zgarë',
    price: 350,
    image: produkteZgareImg,
    prepTimeMinutes: 10
  },
  {
    id: 'prod-qofte-vici-pule',
    category: 'produkte-zgare',
    nameEn: 'QOFTE VIÇI/PULE',
    nameSq: 'QOFTE VIÇI/PULE',
    descriptionEn: 'Single grilled beef or chicken qofte meatball (per piece)',
    descriptionSq: 'Qofte viçi ose pule në zgarë (copë)',
    price: 60,
    image: produkteZgareImg,
    prepTimeMinutes: 6
  },
  {
    id: 'prod-krahe-pule-1kg',
    category: 'produkte-zgare',
    nameEn: 'KRAHË PULE (1KG) & PATATE',
    nameSq: 'KRAHË PULE (1KG) & PATATE',
    descriptionEn: '1 kg grilled chicken wings served with crispy fries',
    descriptionSq: '1 kg krahë pule në zgarë dhe patate të skuqura',
    price: 700,
    image: produkteZgareImg,
    isPopular: true,
    prepTimeMinutes: 18
  },

  // ==========================================
  // 8. BURGER (9 items)
  // ==========================================
  {
    id: 'burger-tedys',
    category: 'burger',
    nameEn: 'TEDY\'S BURGER',
    nameSq: 'TEDY\'S BURGER',
    descriptionEn: '2 beef burger patties, Bacon, Cheddar, Fries, Tomato, Sauce',
    descriptionSq: '2 qofte burger viçi, Beicon, Ceddar, Patate, Domate, Sos',
    price: 600,
    image: burgerHotdogImg,
    isHouseSpecial: true,
    isPopular: true,
    prepTimeMinutes: 12
  },
  {
    id: 'burger-chicken',
    category: 'burger',
    nameEn: 'CHICKEN BURGER',
    nameSq: 'CHICKEN BURGER',
    descriptionEn: 'Chicken fillet, Bacon, Corn, Peppers, Gouda, Lettuce, Cucumber, Salad, Sauce',
    descriptionSq: 'Fileto pule, Bacon, Misër, Speca, Gouda, Marule, Kastravec, Sallatë, Sos',
    price: 600,
    image: burgerHotdogImg,
    prepTimeMinutes: 11
  },
  {
    id: 'burger-hamburger',
    category: 'burger',
    nameEn: 'HAMBURGER',
    nameSq: 'HAMBURGER',
    descriptionEn: 'Beef patty, Gouda cheese, Salad, Fries, Vegetables',
    descriptionSq: 'Qofte viçi, Gouda, Sallatë, Patate, Perime',
    price: 350,
    image: burgerHotdogImg,
    isPopular: true,
    prepTimeMinutes: 9
  },
  {
    id: 'burger-club-sandwich',
    category: 'burger',
    nameEn: 'CLUB SANDWICH',
    nameSq: 'CLUB SANDWICH',
    descriptionEn: 'Ham, Fries, Cucumber, Green salad, Mayonnaise',
    descriptionSq: 'Proshutë, Patate, Kastravec, Sallatë jeshile, Majonezë',
    price: 400,
    image: clubSandwichImg,
    prepTimeMinutes: 9
  },
  {
    id: 'burger-sandwich',
    category: 'burger',
    nameEn: 'SANDWICH',
    nameSq: 'SANDWICH',
    descriptionEn: 'Ham, Fries, Cucumber, Tomato',
    descriptionSq: 'Proshutë, Patate, Kastravec, Domate, Kastravec',
    price: 200,
    image: clubSandwichImg,
    prepTimeMinutes: 6
  },
  {
    id: 'burger-hotdog',
    category: 'burger',
    nameEn: 'HOT-DOG',
    nameSq: 'HOT-DOG',
    descriptionEn: 'Würst sausage, Fries, Vegetables, Sauce',
    descriptionSq: 'Würst, Patate, Perime, Salcë',
    price: 200,
    image: hotdogImg,
    prepTimeMinutes: 6
  },
  {
    id: 'burger-skebasti-vogel',
    category: 'burger',
    nameEn: 'SKEBASTI E VOGËL',
    nameSq: 'SKEBASTI E VOGËL',
    descriptionEn: 'Small toasted double-pita Skepasti filled with gyro, melted cheese, fries & sauce',
    descriptionSq: 'Skepasti e vogël me pitë të pjekur, mish giro, djathë të shkrirë, patate dhe salcë',
    price: 600,
    image: skepastiImg,
    isPopular: true,
    prepTimeMinutes: 11
  },
  {
    id: 'burger-skebasti-madhe',
    category: 'burger',
    nameEn: 'SKEBASTI E MADHE',
    nameSq: 'SKEBASTI E MADHE',
    descriptionEn: 'Large house Skepasti platter stacked with gyro, double cheese, fries & sauce',
    descriptionSq: 'Skepasti e madhe speciale me pitë të pjekur, mish giro, dyfish djathë, patate dhe salcë',
    price: 800,
    image: skepastiImg,
    isHouseSpecial: true,
    prepTimeMinutes: 13
  },
  {
    id: 'burger-pita-arabe',
    category: 'burger',
    nameEn: 'PITA ARABE',
    nameSq: 'PITA ARABE',
    descriptionEn: 'Warm rolled Arab pita stuffed with seasoned grilled meat, fries and house sauce',
    descriptionSq: 'Pitë arabe e mbushur me mish të pjekur, patate të skuqura dhe salcë speciale',
    price: 350,
    image: souvlakiImg,
    prepTimeMinutes: 9
  },

  // ==========================================
  // 9. CALZONE MENU (6 items)
  // ==========================================
  {
    id: 'calzone-sallam',
    category: 'calzone',
    nameEn: 'SALLAM',
    nameSq: 'SALLAM',
    descriptionEn: 'Gouda, Mozzarella, Tomato sauce, Salami',
    descriptionSq: 'Gouda, Macarela, Salcë, Sallam',
    price: 280,
    image: calzoneImg,
    prepTimeMinutes: 11
  },
  {
    id: 'calzone-proshute',
    category: 'calzone',
    nameEn: 'PROSHUTË',
    nameSq: 'PROSHUTË',
    descriptionEn: 'Gouda, Mozzarella, Tomato sauce, Ham',
    descriptionSq: 'Gouda, Macarela, Salcë, Proshutë',
    price: 280,
    image: calzoneImg,
    isPopular: true,
    prepTimeMinutes: 11
  },
  {
    id: 'calzone-proshute-kerpudhe',
    category: 'calzone',
    nameEn: 'PROSHUTË KËRPUDHË',
    nameSq: 'PROSHUTË KËRPUDHË',
    descriptionEn: 'Gouda, Mozzarella, Tomato sauce, Ham, Mushrooms',
    descriptionSq: 'Gouda, Macarela, Salcë, Proshutë, Kërpudhë',
    price: 300,
    image: calzoneImg,
    prepTimeMinutes: 11
  },
  {
    id: 'calzone-kater-djatherat',
    category: 'calzone',
    nameEn: 'KATËR DJATHËRAT',
    nameSq: 'KATËR DJATHËRAT',
    descriptionEn: 'Gouda, Mozzarella, Sauce, Parmesan, Gorgonzola',
    descriptionSq: 'Gouda, Macarela, Salcë, Parmixhano, Gorgonzola',
    price: 300,
    image: calzoneImg,
    isVegetarian: true,
    prepTimeMinutes: 11
  },
  {
    id: 'calzone-beicon',
    category: 'calzone',
    nameEn: 'BEICON',
    nameSq: 'BEICON',
    descriptionEn: 'Gouda, Mozzarella, Tomato sauce, Bacon',
    descriptionSq: 'Gouda, Macarela, Salcë, Beicon',
    price: 300,
    image: calzoneImg,
    prepTimeMinutes: 11
  },
  {
    id: 'calzone-ton',
    category: 'calzone',
    nameEn: 'TON',
    nameSq: 'TON',
    descriptionEn: 'Gouda, Mozzarella, Tomato sauce, Tuna',
    descriptionSq: 'Gouda, Macarela, Salcë, Ton',
    price: 300,
    image: calzoneImg,
    prepTimeMinutes: 11
  },

  // ==========================================
  // 10. SANDWICH MENU (10 items)
  // ==========================================
  {
    id: 'sandwich-fshati-special',
    category: 'sandwich',
    nameEn: 'FSHATI SPECIAL',
    nameSq: 'FSHATI SPECIAL',
    descriptionEn: 'Mayonnaise, Peppers, Tomato, Olives, Gouda, Ham, Egg',
    descriptionSq: 'Majonezë, Speca, Domate, Ullinj, Gouda, Proshutë, Vezë',
    price: 270,
    image: clubSandwichImg,
    isHouseSpecial: true,
    prepTimeMinutes: 8
  },
  {
    id: 'sandwich-fshati',
    category: 'sandwich',
    nameEn: 'FSHATI',
    nameSq: 'FSHATI',
    descriptionEn: 'Mayonnaise, Sauce, Tomato, Olives, Gouda, Bacon',
    descriptionSq: 'Majonezë, Salcë, Domate, Ullinj, Gouda, Beicon',
    price: 250,
    image: clubSandwichImg,
    prepTimeMinutes: 7
  },
  {
    id: 'sandwich-sallam-perime',
    category: 'sandwich',
    nameEn: 'SALLAM PERIME',
    nameSq: 'SALLAM PERIME',
    descriptionEn: 'Mayonnaise, Peppers, Tomato, Olives, Gouda, Salami',
    descriptionSq: 'Majonezë, Speca, Domate, Ullinj, Gouda, Sallam',
    price: 250,
    image: clubSandwichImg,
    prepTimeMinutes: 7
  },
  {
    id: 'sandwich-beicon',
    category: 'sandwich',
    nameEn: 'BEICON',
    nameSq: 'BEICON',
    descriptionEn: 'Mayonnaise, Peppers, Tomato, Olives, Gouda, Bacon',
    descriptionSq: 'Majonezë, Speca, Domate, Ullinj, Gouda, Beicon',
    price: 280,
    image: clubSandwichImg,
    prepTimeMinutes: 7
  },
  {
    id: 'sandwich-proshute-perime',
    category: 'sandwich',
    nameEn: 'PROSHUTË PERIME',
    nameSq: 'PROSHUTË PERIME',
    descriptionEn: 'Mayonnaise, Peppers, Tomato, Olives, Gouda, Ham',
    descriptionSq: 'Majonezë, Speca, Domate, Ullinj, Gouda, Proshutë',
    price: 250,
    image: clubSandwichImg,
    prepTimeMinutes: 7
  },
  {
    id: 'sandwich-proshute-kerpudhe',
    category: 'sandwich',
    nameEn: 'PROSHUTË KËRPUDHË',
    nameSq: 'PROSHUTË KËRPUDHË',
    descriptionEn: 'Mayonnaise, Peppers, Tomato, Olives, Gouda, Ham, Mushrooms',
    descriptionSq: 'Majonezë, Speca, Domate, Ullinj, Gouda, Proshutë, Kërpudhë',
    price: 300,
    image: clubSandwichImg,
    prepTimeMinutes: 8
  },
  {
    id: 'sandwich-sallam-pikant',
    category: 'sandwich',
    nameEn: 'SALLAM PIKANT',
    nameSq: 'SALLAM PIKANT',
    descriptionEn: 'Mayonnaise, Peppers, Tomato, Olives, Gouda, Ham, Spicy salami',
    descriptionSq: 'Majonezë, Speca, Domate, Ullinj, Gouda, Proshutë, Sallam pikant',
    price: 270,
    image: clubSandwichImg,
    isSpicy: true,
    prepTimeMinutes: 7
  },
  {
    id: 'sandwich-ton',
    category: 'sandwich',
    nameEn: 'TON',
    nameSq: 'TON',
    descriptionEn: 'Mayonnaise, Peppers, Tomato, Olives, Gouda, Tuna',
    descriptionSq: 'Majonezë, Speca, Domate, Ullinj, Gouda, Ton',
    price: 280,
    image: clubSandwichImg,
    prepTimeMinutes: 7
  },
  {
    id: 'sandwich-ton-kerpudhe',
    category: 'sandwich',
    nameEn: 'TON KËRPUDHË',
    nameSq: 'TON KËRPUDHË',
    descriptionEn: 'Mayonnaise, Peppers, Tomato, Olives, Gouda, Tuna, Mushrooms',
    descriptionSq: 'Majonezë, Speca, Domate, Ullinj, Gouda, Ton, Kërpudhë',
    price: 300,
    image: clubSandwichImg,
    prepTimeMinutes: 8
  },
  {
    id: 'sandwich-pana-proshute',
    category: 'sandwich',
    nameEn: 'PANA PROSHUTË',
    nameSq: 'PANA PROSHUTË',
    descriptionEn: 'Cooking cream, Ham, Gouda cheese',
    descriptionSq: 'Pana, Proshutë, Gouda',
    price: 250,
    image: clubSandwichImg,
    prepTimeMinutes: 7
  },

  // ==========================================
  // 11. KREPA TË ËMBLA (8 items)
  // ==========================================
  {
    id: 'krepe-cokonero',
    category: 'krepa-embla',
    nameEn: 'ÇOKONERO',
    nameSq: 'ÇOKONERO',
    descriptionEn: 'Warm sweet crepe filled with rich dark chocolate spread',
    descriptionSq: 'Krepë e ngrohtë me çokollatë të zezë Çokonero',
    price: 190,
    image: crepesImg,
    prepTimeMinutes: 5
  },
  {
    id: 'krepe-cokobanco',
    category: 'krepa-embla',
    nameEn: 'ÇOKOBANCO',
    nameSq: 'ÇOKOBANCO',
    descriptionEn: 'Warm sweet crepe filled with creamy white chocolate spread',
    descriptionSq: 'Krepë e ngrohtë me çokollatë të bardhë Çokobanco',
    price: 190,
    image: crepesImg,
    prepTimeMinutes: 5
  },
  {
    id: 'krepe-nutella',
    category: 'krepa-embla',
    nameEn: 'NUTELLA',
    nameSq: 'NUTELLA',
    descriptionEn: 'Classic fresh crepe spread generously with Nutella',
    descriptionSq: 'Krepë klasike me çokollatë origjinale Nutella',
    price: 190,
    image: crepesImg,
    isPopular: true,
    prepTimeMinutes: 5
  },
  {
    id: 'krepe-ludia',
    category: 'krepa-embla',
    nameEn: 'LUDIA',
    nameSq: 'LUDIA',
    descriptionEn: 'Banana, Crushed biscuit, Chocolate',
    descriptionSq: 'Banane, Biskotë, Çokollatë',
    price: 250,
    image: crepesImg,
    prepTimeMinutes: 6
  },
  {
    id: 'krepe-ludia-nutella',
    category: 'krepa-embla',
    nameEn: 'LUDIA NUTELLA',
    nameSq: 'LUDIA NUTELLA',
    descriptionEn: 'Banana, Crushed biscuit, Nutella',
    descriptionSq: 'Banane, Biskotë, Nutella',
    price: 250,
    image: crepesImg,
    isPopular: true,
    prepTimeMinutes: 6
  },
  {
    id: 'krepe-nocelo',
    category: 'krepa-embla',
    nameEn: 'NOCELO',
    nameSq: 'NOCELO',
    descriptionEn: 'Nutella, Walnuts, Raisins',
    descriptionSq: 'Nutella, Arra, Rrush i thatë',
    price: 250,
    image: crepesImg,
    prepTimeMinutes: 6
  },
  {
    id: 'krepe-tutti-frutti',
    category: 'krepa-embla',
    nameEn: 'TUTTI FRUTTI',
    nameSq: 'TUTTI FRUTTI',
    descriptionEn: 'Fresh mixed seasonal fruits & sweet glaze',
    descriptionSq: 'Mix frutash të freskëta',
    price: 300,
    image: crepesImg,
    isHouseSpecial: true,
    prepTimeMinutes: 7
  },
  {
    id: 'krepe-pistakio',
    category: 'krepa-embla',
    nameEn: 'PISTAKIO',
    nameSq: 'PISTAKIO',
    descriptionEn: 'Warm crepe layered with velvety pistachio cream',
    descriptionSq: 'Krepë e ngrohtë me krem fëstëku (Pistakio)',
    price: 230,
    image: crepesImg,
    isPopular: true,
    prepTimeMinutes: 6
  },

  // ==========================================
  // 12. KREPA TË KRIPURA (6 items)
  // ==========================================
  {
    id: 'krepe-kripur-biadina',
    category: 'krepa-kripura',
    nameEn: 'BIADINA',
    nameSq: 'BIADINA',
    descriptionEn: 'Cheese, Salami, Mayonnaise, Tomato',
    descriptionSq: 'Djathë, Sallam, Majonezë, Domate',
    price: 230,
    image: savoryCrepeImg,
    prepTimeMinutes: 7
  },
  {
    id: 'krepe-kripur-berlin',
    category: 'krepa-kripura',
    nameEn: 'BERLIN',
    nameSq: 'BERLIN',
    descriptionEn: 'Würst sausage, Cheese, Tomato, Mayonnaise',
    descriptionSq: 'Würst, Djathë, Domate, Majonezë',
    price: 230,
    image: savoryCrepeImg,
    prepTimeMinutes: 7
  },
  {
    id: 'krepe-kripur-chicken-fries',
    category: 'krepa-kripura',
    nameEn: 'CHICKEN FRIES',
    nameSq: 'CHICKEN FRIES',
    descriptionEn: 'Ham, Gouda, Fries, Cucumber, Mushrooms',
    descriptionSq: 'Proshutë, Gouda, Patate, Kastravec, Kërpudhë',
    price: 250,
    image: savoryCrepeImg,
    prepTimeMinutes: 8
  },
  {
    id: 'krepe-kripur-vegetariane',
    category: 'krepa-kripura',
    nameEn: 'VEGETARIANE',
    nameSq: 'VEGETARIANE',
    descriptionEn: 'Gouda, Mozzarella, Mushrooms, Peppers, Olives, Tomato',
    descriptionSq: 'Gouda, Mocarela, Kërpudhë, Speca, Ullinj, Domate',
    price: 200,
    image: savoryCrepeImg,
    isVegetarian: true,
    prepTimeMinutes: 7
  },
  {
    id: 'krepe-kripur-nany',
    category: 'krepa-kripura',
    nameEn: 'NANY',
    nameSq: 'NANY',
    descriptionEn: 'Ham, Cheese, White Feta cheese',
    descriptionSq: 'Proshutë, Djathë, Djathë i bardhë',
    price: 250,
    image: savoryCrepeImg,
    prepTimeMinutes: 7
  },
  {
    id: 'krepe-kripur-speciale-tedys',
    category: 'krepa-kripura',
    nameEn: 'SPECIALE TEDY\'S',
    nameSq: 'SPECIALE TEDY\'S',
    descriptionEn: 'Mayonnaise, Mushrooms, Tomato, Ham, Salami, Peppers',
    descriptionSq: 'Majonezë, Kërpudhë, Domate, Proshutë, Sallam, Speca',
    price: 350,
    image: savoryCrepeImg,
    isHouseSpecial: true,
    prepTimeMinutes: 9
  },

  // ==========================================
  // 13. BRUSCHETA (6 items)
  // ==========================================
  {
    id: 'bruscheta-klasike',
    category: 'bruscheta',
    nameEn: 'BRUSCHETA',
    nameSq: 'BRUSCHETA',
    descriptionEn: 'Fresh tomatoes, white cheese, garlic on toasted artisan bread',
    descriptionSq: 'Domate, djathë i bardhë, hudhra',
    price: 300,
    image: bruschettaImg,
    isVegetarian: true,
    prepTimeMinutes: 8
  },
  {
    id: 'bruscheta-giro-pule',
    category: 'bruscheta',
    nameEn: 'BRUSCHETA GIRO PULE',
    nameSq: 'BRUSCHETA GIRO PULE',
    descriptionEn: 'Tomatoes, white cheese, garlic, chicken gyros',
    descriptionSq: 'Domate, djathë i bardhë, hudhra, giro pule',
    price: 400,
    image: bruschettaImg,
    isPopular: true,
    prepTimeMinutes: 9
  },
  {
    id: 'bruscheta-giro-derri',
    category: 'bruscheta',
    nameEn: 'BRUSCHETA GIRO DERRI',
    nameSq: 'BRUSCHETA GIRO DERRI',
    descriptionEn: 'Tomatoes, white cheese, garlic, pork gyros',
    descriptionSq: 'Domate, djathë i bardhë, hudhra, giro derri',
    price: 400,
    image: bruschettaImg,
    prepTimeMinutes: 9
  },
  {
    id: 'bruscheta-kerpudha',
    category: 'bruscheta',
    nameEn: 'BRUSCHETA KËRPUDHA',
    nameSq: 'BRUSCHETA KËRPUDHA',
    descriptionEn: 'Tomatoes, white cheese, garlic, mushrooms',
    descriptionSq: 'Domate, djathë i bardhë, hudhra, kërpudha',
    price: 300,
    image: bruschettaImg,
    isVegetarian: true,
    prepTimeMinutes: 8
  },
  {
    id: 'bruscheta-ton',
    category: 'bruscheta',
    nameEn: 'BRUSCHETA TON',
    nameSq: 'BRUSCHETA TON',
    descriptionEn: 'Tomatoes, white cheese, garlic, tuna',
    descriptionSq: 'Domate, djathë i bardhë, hudhra, ton',
    price: 350,
    image: bruschettaImg,
    prepTimeMinutes: 8
  },
  {
    id: 'bruscheta-fokace',
    category: 'bruscheta',
    nameEn: 'FOKACE',
    nameSq: 'FOKACE',
    descriptionEn: 'Warm crispy focaccia flatbread with olive oil & herbs',
    descriptionSq: 'Fokace e ngrohtë krokante me vaj ulliri dhe erëza',
    price: 200,
    image: bruschettaImg,
    isVegetarian: true,
    prepTimeMinutes: 7
  },

  // ==========================================
  // 14. SALLATA & SHOQËRUESE (10 items)
  // ==========================================
  {
    id: 'sallate-fshati-madhe',
    category: 'sallata',
    nameEn: 'SALLATE FSHATI (E MADHE)',
    nameSq: 'SALLATE FSHATI (E MADHE)',
    descriptionEn: 'Large village Greek salad with tomatoes, cucumber, olives, peppers & feta cheese',
    descriptionSq: 'Sallatë fshati e madhe me domate, kastravec, ullinj, speca dhe djathë të bardhë',
    price: 350,
    image: saladSidesImg,
    isVegetarian: true,
    isPopular: true,
    prepTimeMinutes: 6
  },
  {
    id: 'sallate-jeshile',
    category: 'sallata',
    nameEn: 'SALLATE JESHILE',
    nameSq: 'SALLATE JESHILE',
    descriptionEn: 'Fresh crisp seasonal green lettuce salad with olive oil and lemon dressing',
    descriptionSq: 'Sallatë jeshile e freskët me vaj ulliri dhe limon',
    price: 250,
    image: saladSidesImg,
    isVegetarian: true,
    prepTimeMinutes: 5
  },
  {
    id: 'sallate-perime-zgare',
    category: 'sallata',
    nameEn: 'PERIME ZGARE',
    nameSq: 'PERIME ZGARE',
    descriptionEn: 'Assorted grilled peppers, zucchini and eggplant with olive oil',
    descriptionSq: 'Perime të freskëta të pjekura në zgarë',
    price: 300,
    image: caesarVeggiesImg,
    isVegetarian: true,
    prepTimeMinutes: 9
  },
  {
    id: 'sallate-cezar',
    category: 'sallata',
    nameEn: 'SALLATE CEZAR',
    nameSq: 'SALLATE CEZAR',
    descriptionEn: 'Crisp romaine lettuce, grilled chicken strips, parmesan shavings, croutons & Caesar sauce',
    descriptionSq: 'Sallatë Cezar me pulë zgare, parmixhano, krutonë dhe salcë Cezar',
    price: 350,
    image: caesarVeggiesImg,
    isPopular: true,
    prepTimeMinutes: 8
  },
  {
    id: 'shoqeruese-patate-skuqura',
    category: 'sallata',
    nameEn: 'PATATE TË SKUQURA',
    nameSq: 'PATATE TË SKUQURA',
    descriptionEn: 'Golden crispy french fries bowl',
    descriptionSq: 'Pjatë me patate të skuqura krokante',
    price: 200,
    image: saladSidesImg,
    isVegetarian: true,
    prepTimeMinutes: 5
  },
  {
    id: 'shoqeruese-xaxiki',
    category: 'sallata',
    nameEn: 'XAXIKI',
    nameSq: 'XAXIKI',
    descriptionEn: 'Traditional creamy cucumber, garlic and strained yogurt tzatziki dip',
    descriptionSq: 'Xaxiq tradicional i përgatitur me kos, kastravec dhe hudhër',
    price: 180,
    image: saladSidesImg,
    isVegetarian: true,
    prepTimeMinutes: 2
  },
  {
    id: 'shoqeruese-salce-djegese',
    category: 'sallata',
    nameEn: 'SALCË DJEGËSE',
    nameSq: 'SALCË DJEGËSE',
    descriptionEn: 'House spicy chili & feta/pepper dip',
    descriptionSq: 'Salcë djegëse shtëpie',
    price: 180,
    image: saladSidesImg,
    isSpicy: true,
    isVegetarian: true,
    prepTimeMinutes: 2
  },
  {
    id: 'shoqeruese-salce-kosi',
    category: 'sallata',
    nameEn: 'SALCË KOSI',
    nameSq: 'SALCË KOSI',
    descriptionEn: 'Creamy sour yogurt herb sauce',
    descriptionSq: 'Salcë kosi e freskët',
    price: 180,
    image: saladSidesImg,
    isVegetarian: true,
    prepTimeMinutes: 2
  },
  {
    id: 'shoqeruese-djathe-bardhe',
    category: 'sallata',
    nameEn: 'DJATHË I BARDHË',
    nameSq: 'DJATHË I BARDHË',
    descriptionEn: 'Portion of traditional white feta cheese with olive oil and oregano',
    descriptionSq: 'Porcion djathë i bardhë me vaj ulliri dhe rigon',
    price: 200,
    image: saladSidesImg,
    isVegetarian: true,
    prepTimeMinutes: 2
  },
  {
    id: 'shoqeruese-patate-salce',
    category: 'sallata',
    nameEn: 'PATATE & SALCË',
    nameSq: 'PATATE & SALCË',
    descriptionEn: 'Crispy golden french fries served with dipping sauce',
    descriptionSq: 'Patate të skuqura me salcë shoqëruese',
    price: 220,
    image: saladSidesImg,
    isVegetarian: true,
    prepTimeMinutes: 5
  },

  // ==========================================
  // 15. PIJE (12 items — Wine includes 0.5 / 1 L selector)
  // ==========================================
  {
    id: 'pije-freskuese',
    category: 'pije',
    nameEn: 'PIJE FRESKUESE',
    nameSq: 'PIJE FRESKUESE',
    descriptionEn: 'Chilled carbonated soft drinks (Cola, Fanta, Sprite, Schweppes)',
    descriptionSq: 'Pije të ftohta freskuese (Coca-Cola, Fanta, Sprite, etj.)',
    price: 150,
    image: coldDrinksImg,
    prepTimeMinutes: 1
  },
  {
    id: 'pije-uje-05',
    category: 'pije',
    nameEn: 'UJË 0.5 L',
    nameSq: 'UJË 0.5 L',
    descriptionEn: 'Cold still natural spring water 0.5 L',
    descriptionSq: 'Ujë natyral i ftohtë 0.5 L',
    price: 70,
    image: coldDrinksImg,
    prepTimeMinutes: 1
  },
  {
    id: 'pije-uje-gazuar-05',
    category: 'pije',
    nameEn: 'UJË I GAZUAR 0.5 L',
    nameSq: 'UJË I GAZUAR 0.5 L',
    descriptionEn: 'Cold sparkling mineral water 0.5 L',
    descriptionSq: 'Ujë i gazuar i ftohtë 0.5 L',
    price: 80,
    image: coldDrinksImg,
    prepTimeMinutes: 1
  },
  {
    id: 'pije-vere-hapur-italiane',
    category: 'pije',
    nameEn: 'VERË E HAPUR ITALIANE 0.5 / 1 L',
    nameSq: 'VERË E HAPUR ITALIANE 0.5 / 1 L',
    descriptionEn: 'Italian house carafe wine — choose 0.5 L or 1 L',
    descriptionSq: 'Verë e hapur italiane në karafë — zgjidhni 0.5 L ose 1 L',
    price: 500,
    image: beerWineRakiImg,
    prepTimeMinutes: 2,
    optionGroups: [
      {
        id: 'wine-volume',
        titleEn: 'Select Volume',
        titleSq: 'Zgjidhni Sasinë',
        required: true,
        type: 'radio',
        choices: [
          { id: 'half-liter', nameEn: '0.5 Liter', nameSq: '0.5 Litër', priceModifier: 0 },
          { id: 'one-liter', nameEn: '1 Liter', nameSq: '1 Litër', priceModifier: 500 }
        ]
      }
    ]
  },
  {
    id: 'pije-gote-vere-italiane',
    category: 'pije',
    nameEn: 'GOTË VERË ITALIANE',
    nameSq: 'GOTË VERË ITALIANE',
    descriptionEn: 'Single glass of Italian house wine',
    descriptionSq: 'Një gotë verë e hapur italiane',
    price: 200,
    image: beerWineRakiImg,
    prepTimeMinutes: 1
  },
  {
    id: 'pije-amstel-033',
    category: 'pije',
    nameEn: 'AMSTEL 0.33 L',
    nameSq: 'AMSTEL 0.33 L',
    descriptionEn: 'Ice-cold Amstel lager beer 0.33 L',
    descriptionSq: 'Birrë Amstel e ftohtë 0.33 L',
    price: 250,
    image: beerWineRakiImg,
    prepTimeMinutes: 1
  },
  {
    id: 'pije-amstel-05',
    category: 'pije',
    nameEn: 'AMSTEL 0.5 L',
    nameSq: 'AMSTEL 0.5 L',
    descriptionEn: 'Ice-cold Amstel lager beer 0.5 L',
    descriptionSq: 'Birrë Amstel e ftohtë 0.5 L',
    price: 250,
    image: beerWineRakiImg,
    prepTimeMinutes: 1
  },
  {
    id: 'pije-heineken-033',
    category: 'pije',
    nameEn: 'HAINEKEN 0.33 L',
    nameSq: 'HAINEKEN 0.33 L',
    descriptionEn: 'Ice-cold Heineken lager beer 0.33 L',
    descriptionSq: 'Birrë Heineken e ftohtë 0.33 L',
    price: 300,
    image: beerWineRakiImg,
    prepTimeMinutes: 1
  },
  {
    id: 'pije-heineken-05',
    category: 'pije',
    nameEn: 'HAINEKEN 0.5 L',
    nameSq: 'HAINEKEN 0.5 L',
    descriptionEn: 'Ice-cold Heineken lager beer 0.5 L',
    descriptionSq: 'Birrë Heineken e ftohtë 0.5 L',
    price: 350,
    image: beerWineRakiImg,
    prepTimeMinutes: 1
  },
  {
    id: 'pije-elbar-033',
    category: 'pije',
    nameEn: 'ELBAR 0.33 L',
    nameSq: 'ELBAR 0.33 L',
    descriptionEn: 'Ice-cold Elbar beer 0.33 L',
    descriptionSq: 'Birrë Elbar e ftohtë 0.33 L',
    price: 150,
    image: beerWineRakiImg,
    prepTimeMinutes: 1
  },
  {
    id: 'pije-elbar-05',
    category: 'pije',
    nameEn: 'ELBAR 0.5 L',
    nameSq: 'ELBAR 0.5 L',
    descriptionEn: 'Ice-cold Elbar beer 0.5 L',
    descriptionSq: 'Birrë Elbar e ftohtë 0.5 L',
    price: 200,
    image: beerWineRakiImg,
    prepTimeMinutes: 1
  },
  {
    id: 'pije-raki-rrushi',
    category: 'pije',
    nameEn: 'RAKI RRUSHI',
    nameSq: 'RAKI RRUSHI',
    descriptionEn: 'Traditional Albanian grape raki shot',
    descriptionSq: 'Raki tradicionale rrushi',
    price: 70,
    image: beerWineRakiImg,
    prepTimeMinutes: 1
  }
];

export const MENU_ITEMS: MenuItem[] = BASE_MENU_ITEMS.map(item => ({
  ...item,
  image: getProductPhoto(item.id, item.image)
}));

export const CATEGORIES = [
  { id: 'all', nameEn: 'Full Menu', nameSq: 'Të Gjitha', count: MENU_ITEMS.length },
  { id: 'doner', nameEn: 'Doner', nameSq: 'DONER', count: MENU_ITEMS.filter(i => i.category === 'doner').length },
  { id: 'suflaqe', nameEn: 'Suflaqe', nameSq: 'SUFLAQE', count: MENU_ITEMS.filter(i => i.category === 'suflaqe').length },
  { id: 'pizzas', nameEn: 'Pizza Menu', nameSq: 'PIZZA MENU', count: MENU_ITEMS.filter(i => i.category === 'pizzas').length },
  { id: 'mengjesore', nameEn: 'Breakfast', nameSq: 'MËNGJESORE', count: MENU_ITEMS.filter(i => i.category === 'mengjesore').length },
  { id: 'racione-giro', nameEn: 'Gyros Plates', nameSq: 'RACIONE PJATË GIRO', count: MENU_ITEMS.filter(i => i.category === 'racione-giro').length },
  { id: 'racione-zgare', nameEn: 'Grill Plates', nameSq: 'RACIONE PJATË ZGARE', count: MENU_ITEMS.filter(i => i.category === 'racione-zgare').length },
  { id: 'produkte-zgare', nameEn: 'Grill Items', nameSq: 'PRODUKTE ZGARE', count: MENU_ITEMS.filter(i => i.category === 'produkte-zgare').length },
  { id: 'burger', nameEn: 'Burgers & Club', nameSq: 'BURGER', count: MENU_ITEMS.filter(i => i.category === 'burger').length },
  { id: 'calzone', nameEn: 'Calzone Menu', nameSq: 'CALZONE MENU', count: MENU_ITEMS.filter(i => i.category === 'calzone').length },
  { id: 'sandwich', nameEn: 'Sandwich Menu', nameSq: 'SANDWICH MENU', count: MENU_ITEMS.filter(i => i.category === 'sandwich').length },
  { id: 'krepa-embla', nameEn: 'Sweet Crepes', nameSq: 'KREPA TË ËMBLA', count: MENU_ITEMS.filter(i => i.category === 'krepa-embla').length },
  { id: 'krepa-kripura', nameEn: 'Savory Crepes', nameSq: 'KREPA TË KRIPURA', count: MENU_ITEMS.filter(i => i.category === 'krepa-kripura').length },
  { id: 'bruscheta', nameEn: 'Bruschetta', nameSq: 'BRUSCHETA', count: MENU_ITEMS.filter(i => i.category === 'bruscheta').length },
  { id: 'sallata', nameEn: 'Salads & Sides', nameSq: 'SALLATA & SHOQËRUESE', count: MENU_ITEMS.filter(i => i.category === 'sallata').length },
  { id: 'pije', nameEn: 'Drinks', nameSq: 'PIJE', count: MENU_ITEMS.filter(i => i.category === 'pije').length }
];
