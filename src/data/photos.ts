/**
 * ============================================================================
 * TEDY'S FAST FOOD & GRILL — QENDRA E FOTOVE (PHOTO MANAGER)
 * ============================================================================
 * SI TË ZËVENDËSONI ÇDO FOTO ME "COPY IMAGE ADDRESS":
 * 1. Gjeni foton që dëshironi (në Google, Instagram, Facebook, etj.).
 * 2. Klikoni me të djathtën mbi foto -> zgjidhni "Copy image address" (Kopjo adresën e imazhit).
 * 3. Ngjiteni (Paste) linkun "https://..." brenda thonjëzave '' të elementit përkatës më poshtë.
 * 4. Nëse lihet bosh (''), faqja përdor automatikisht foton standarde të ngarkuar.
 * ============================================================================
 */

import souvlakiImg from '../assets/images/tedys_souvlaki_gyros_1791391614895.jpg';
import pizzaImg from '../assets/images/tedys_woodfired_pizza_1791391631079.jpg';
import skepastiImg from '../assets/images/tedys_skepasti_burger_1791391642483.jpg';
import crepesImg from '../assets/images/tedys_sweet_crepes_1791391653045.jpg';
import restaurantImg from '../assets/images/tedys_restaurant_hero_1791391601156.jpg';
import tedysExteriorImg from '../assets/images/tedys_exterior_main.jpg';
import googleMapsPhotoImg from '../assets/images/google_maps_photo.jpg';
import homepageBgImg from '../assets/images/homepage_bg.jpg';

import placeCharcoalStationImg from '../assets/images/place_charcoal_station_1794951158780.jpg';
import placeDiningInteriorImg from '../assets/images/place_dining_interior_1794951174782.jpg';
import placeStreetTerraceImg from '../assets/images/place_street_terrace_1794951158898.jpg';
import placeCozyTablesImg from '../assets/images/place_cozy_tables_1794951174571.jpg';

import donerPanineImg from '../assets/images/doner_panine_1794946245653.jpg';
import calzoneImg from '../assets/images/calzone_baked_1794946245936.jpg';
import clubSandwichImg from '../assets/images/club_sandwich_1794946245502.jpg';
import breakfastImg from '../assets/images/breakfast_toast_omelet_1794946246823.jpg';
import bruschettaImg from '../assets/images/bruschetta_focaccia_1794946246468.jpg';
import savoryCrepeImg from '../assets/images/savory_crepe_1794946247777.jpg';
import saladSidesImg from '../assets/images/greek_salad_sides_1794946260410.jpg';
import mixGrillImg from '../assets/images/mix_grill_platter_1794946261183.jpg';
import gyrosPlatterImg from '../assets/images/gyros_platter_1794946261502.jpg';
import burgerHotdogImg from '../assets/images/smash_burger_hotdog_1794946262291.jpg';
import coldDrinksImg from '../assets/images/cold_drinks_sodas_1794946262766.jpg';
import beerWineRakiImg from '../assets/images/beer_wine_raki_1794946262195.jpg';
import pizzaMargheritaBiancaImg from '../assets/images/pizza_margherita_bianca_1794946277599.jpg';
import pizzaDiavolaProsciuttoImg from '../assets/images/pizza_diavola_prosciutto_1794946278862.jpg';
import grillChopsImg from '../assets/images/grill_paidhaqe_chops_1794946278559.jpg';
import grillWholeChickenImg from '../assets/images/grill_whole_chicken_1794946278991.jpg';
import hotdogImg from '../assets/images/hotdog_classic_1794946279363.jpg';
import caesarVeggiesImg from '../assets/images/caesar_grilled_veggies_1794946279449.jpg';

const resolveUrl = (customUrl: string | undefined, fallback: string): string => {
  const trimmed = customUrl?.trim();
  return trimmed ? trimmed : fallback;
};

// ============================================================================
// 1. FOTOT E FAQES KRYESORE & LOKALIT (Ngjit linkun brenda '')
// ============================================================================
export const SITE_PHOTO_URLS = {
  homepageBackground: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/915546962_2510175596173562_3933718590060650042_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=3tfnGwpR8VYQ7kNvwGEI2bj&_nc_oc=Adqt84H2lof_oohZo8Dezpt1ivO6G4mQpqubdBIlPj2zwiTtP_nGvJv3m9Jsv2Jq35o&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wG7WM1cK-7029n6QJzz23pJHZjSQr_ipde2pn4lobcI6g&oe=6B2565AE', // Fotoja e sfondit në Kreu (Hero)
  googleMapsPhoto: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/915546962_2510175596173562_3933718590060650042_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=3tfnGwpR8VYQ7kNvwGEI2bj&_nc_oc=Adqt84H2lof_oohZo8Dezpt1ivO6G4mQpqubdBIlPj2zwiTtP_nGvJv3m9Jsv2Jq35o&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wG7WM1cK-7029n6QJzz23pJHZjSQr_ipde2pn4lobcI6g&oe=6B2565AE',    // Fotoja kryesore e Google Maps
  exteriorMain: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/915546962_2510175596173562_3933718590060650042_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=3tfnGwpR8VYQ7kNvwGEI2bj&_nc_oc=Adqt84H2lof_oohZo8Dezpt1ivO6G4mQpqubdBIlPj2zwiTtP_nGvJv3m9Jsv2Jq35o&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wG7WM1cK-7029n6QJzz23pJHZjSQr_ipde2pn4lobcI6g&oe=6B2565AE',       // Fotoja e jashtme e lokalit
  restaurantHero: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/915546962_2510175596173562_3933718590060650042_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=3tfnGwpR8VYQ7kNvwGEI2bj&_nc_oc=Adqt84H2lof_oohZo8Dezpt1ivO6G4mQpqubdBIlPj2zwiTtP_nGvJv3m9Jsv2Jq35o&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wG7WM1cK-7029n6QJzz23pJHZjSQr_ipde2pn4lobcI6g&oe=6B2565AE',     // Fotoja e zgarës / lokalit
};

export const SITE_PHOTOS = {
  homepageBackground: resolveUrl(SITE_PHOTO_URLS.homepageBackground, homepageBgImg),
  googleMapsPhoto: resolveUrl(SITE_PHOTO_URLS.googleMapsPhoto, googleMapsPhotoImg),
  exteriorMain: resolveUrl(SITE_PHOTO_URLS.exteriorMain, tedysExteriorImg),
  restaurantHero: resolveUrl(SITE_PHOTO_URLS.restaurantHero, restaurantImg),
};

// ============================================================================
// 2. GALERIA NË KREU (14 FOTO)
// ============================================================================
export const GALLERY_PHOTO_URLS = {
  photo1_place: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/914056720_1638215574435958_6414909820023318752_n.jpg?_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=0VhH5dsagf8Q7kNvwHc7nYP&_nc_oc=AdqopNZjlnzxYtCd6VJ-JnueRDApB4TLIxnDavWd3n1p3H0jeazD5iDUwflugjR5zBE&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wGK2Uf0ef4Inn5O1B_s9FvcGJ_JxzxP4R_QOqw9dQtvLQ&oe=6B257F43',  // Vendi 1 (Rreshti 1 - Majtas)
  photo2_place: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/913531968_1002736742882399_3677114403284794763_n.jpg?_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=dyh26SIO0vcQ7kNvwE_bkD6&_nc_oc=AdoQeal20ESATw9RZXPdV55NxCd6t1sFjlIu5pbrp7pW0zGos6oH_-hREHU12ZEhbAw&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wGFGkgxWlT1Fsi0XKalEPvqB_1Z7vlNepXSRHOx88zihA&oe=6B2584FD',  // Vendi 2 (Rreshti 1 - Djathtas)
  photo3_place: 'https://scontent.ftia5-1.fna.fbcdn.net/v/t1.15752-9/916725074_1146798994552739_8093737697766617569_n.jpg?_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=1vD0sU9qIPoQ7kNvwGAmtXY&_nc_oc=Ado9fCxbSsEcsyZeLq6yDJ2cSVV0UOxmxyf4ubkdXlJqSCgEoXRSAURA9OWS-y1p4o8&_nc_zt=23&_nc_ht=scontent.ftia5-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wHzJav5Ho58saXRyahreEIVGwnUsSsRDZW2jqRuOrDy7A&oe=6B25734B',  // Vendi 3 (Rreshti 2 - Majtas)
  photo4_place: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/914689999_2284189515646855_3640811927367376655_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=kU6dlI1rFd0Q7kNvwFvN4Lk&_nc_oc=AdqbVUyf_xxlf7eTdfCSjhlt53RU6Ds59pwENm55dcMoIdF3WmfW8T44wK_Pgn8m-KM&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wGKrfgNpkgDD7x7jQBhmQZ-OQ5ubrei-ao1JBJeI4TAmA&oe=6B2572BF',  // Vendi 4 (Rreshti 2 - Djathtas)
  photo5_food: 'https://scontent.ftia5-1.fna.fbcdn.net/v/t1.15752-9/915720822_1148822474502841_2513198151169373875_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=8cA1d7sWg4IQ7kNvwH474QM&_nc_oc=Adrl6UWy-uI6q5fA4PQynl2umTRh1MHbuQihxCxSj7-f_vPIQfFA8LGJhv3-QwErjsc&_nc_zt=23&_nc_ht=scontent.ftia5-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wHOXVZQMMiKeLs8GV0dtH1G-lPhznnwcT2Yb0BP32u-8A&oe=6B2594E6',   // Ushqim 1 (Rreshti 3 - Majtas)
  photo6_place: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/915546962_2510175596173562_3933718590060650042_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=3tfnGwpR8VYQ7kNvwGEI2bj&_nc_oc=Adqt84H2lof_oohZo8Dezpt1ivO6G4mQpqubdBIlPj2zwiTtP_nGvJv3m9Jsv2Jq35o&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wG7WM1cK-7029n6QJzz23pJHZjSQr_ipde2pn4lobcI6g&oe=6B2565AE',  // Vendi 5 (Rreshti 3 - Djathtas)
  photo7_place: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/912401574_1134067306048250_4272516157960101842_n.jpg?_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=fg6L1_YBe_gQ7kNvwF2XQN0&_nc_oc=AdoNHNnIftEgWBM6enL6EQJka4NkZHbnRkEgSBSXebcVVw_yuEKTA_8yQC9qJsH4ags&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7a22e&oh=03_Q7cD6wHyuBkOkO43zOTbpUTbNTPy3vI5VvCZec0EU4nv0jyfQQ&oe=6B256034',  // Vendi 6 (Rreshti 4 - Majtas)
  photo8_food: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/918724033_1195528609678145_934416144504093814_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=b_PB5-O_U-4Q7kNvwGIgKt9&_nc_oc=AdrIEC1n5DrYkJQvfVhANG9EiUKx2ydgnAXCLbdrsMQxtipozPUhzjM7Mxr7OX3j35g&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wF_mVypbkdg5OHpSDiUlO2wpKIRqwm0WG8XXRcwxwvZRg&oe=6B258D2A',   // Ushqim 2 (Rreshti 4 - Djathtas)
  photo9_place: 'https://scontent.ftia5-1.fna.fbcdn.net/v/t1.15752-9/916317915_1821694275431612_9007002277692233020_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=Dptov1m_J2YQ7kNvwHBUYSt&_nc_oc=AdqKi9KtTvnioGqpPpRfoTLwxDyZPN01E1DhliB2b4Sz-mRkhj50PflRORB4OLjai2k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.ftia5-1.fna&_nc_ss=7a22e&oh=03_Q7cD6wG5-2zIuw2hxDF6MdgWbVzpgkUExsJnf6rGUZFf3n101w&oe=6B258D16',  // Vendi 7 (Rreshti 5 - Majtas)
  photo10_place: 'https://scontent.ftia5-1.fna.fbcdn.net/v/t1.15752-9/912538203_1399877682221385_9093311085034811325_n.jpg?_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=VEuvvinpyloQ7kNvwFpgGmr&_nc_oc=Adp4PXrcvVip9bsSvLJBZvBrwuEvbFLvmpyTSpZ5ch8vbvnRLpDbhn53dtfd-rWB0Ho&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.ftia5-1.fna&_nc_ss=7a22e&oh=03_Q7cD6wFWSZP88g-kUStOAaJq42ImCiyB2d7YXla_GuNsEmtatQ&oe=6B256F98', // Vendi 8 (Rreshti 5 - Djathtas)
  photo11_food: 'https://scontent.ftia5-1.fna.fbcdn.net/v/t1.15752-9/914760250_2061185654411877_8697184677776571231_n.jpg?_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=bP9JPCaEGMUQ7kNvwFlkgJX&_nc_oc=Adqz3klQqsaV8H2Pu_t7PqAzC8vxVrHaKzeRidsLcgMSJAihE5ox_Lj4GTG4t_doqLY&_nc_zt=23&_nc_ht=scontent.ftia5-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wH-P9vgnlhadcfRm6eBlWPO6JkHNSvQo9W4qVZogX2gMw&oe=6B2582BF',  // Ushqim 3 (Rreshti 6 - Majtas)
  photo12_food: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t1.15752-9/912823654_1488969806439926_2208114933225865169_n.jpg?_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=fc17b8&_nc_ohc=PI0JNyqjTJ8Q7kNvwEzPmR-&_nc_oc=Ado4_oqDHFDoXoQ8xW2llmIZ2kjqu49nHl3VE10aruxbUR7cY-MDpqnE33otteI8NrM&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_ss=7baaf&oh=03_Q7cD6wFmKwHSZ7RKvo8gYvGa81Vgf_IC5NruAzf4hALRsaN4SA&oe=6B2566B5',  // Ushqim 4 (Rreshti 6 - Djathtas)
  photo13_place: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t39.30808-6/923468657_4523601911235182_8159174831408738107_n.avif?stp=dst-jpg_tt6&cstp=mx1440x1152&ctp=s1440x1152&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=l_4em992Yx0Q7kNvwH4kkLd&_nc_oc=AdrRqnarhpYbtL63WxeHF1FVfwDVa0ZjKwcEA8cYAmez6kh6TTtx77EoB-1pnl0ue00&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_gid=oo1OFBzigBGM14pYzD5S-g&_nc_ss=7b289&oh=00_AQSeBDPvcUH0HO1eyPhEjj0yn50mTDCzeZe1sAvLZihc2Q&oe=6B0A1C2A', // Foto 13 (Rreshti 7 - Majtas)
  photo14_place: 'https://scontent.ftia4-1.fna.fbcdn.net/v/t39.30808-6/914362812_4523601881235185_4132134855053492962_n.avif?stp=dst-jpg_tt6&cstp=mx1440x1152&ctp=s1440x1152&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=M3ZPD3h8a_QQ7kNvwFkWuqF&_nc_oc=AdpTv55PB7aplS6DcGdY3o9bSofndNOKJKFf76luuecWNQvekG0rSAY7aOQSHVd0XC0&_nc_zt=23&_nc_ht=scontent.ftia4-1.fna&_nc_gid=WaILq3aiNxrB8vYI4P1y8w&_nc_ss=7b289&oh=00_AQTc2s6nbZwQry4b0IacWSHSM2DkPxb3tQzlO-TZzjThvg&oe=6B0A244D', // Foto 14 (Rreshti 7 - Djathtas)
};

export const GALLERY_PHOTOS: { id: string; src: string; alt: string }[] = [
  { id: 'g1', src: resolveUrl(GALLERY_PHOTO_URLS.photo1_place, SITE_PHOTOS.googleMapsPhoto), alt: "Tedy's Fast Food & Grill" },
  { id: 'g2', src: resolveUrl(GALLERY_PHOTO_URLS.photo2_place, SITE_PHOTOS.homepageBackground), alt: "Tedy's Fast Food & Grill" },
  { id: 'g3', src: resolveUrl(GALLERY_PHOTO_URLS.photo3_place, SITE_PHOTOS.exteriorMain), alt: "Tedy's Fast Food & Grill" },
  { id: 'g4', src: resolveUrl(GALLERY_PHOTO_URLS.photo4_place, placeDiningInteriorImg), alt: "Tedy's Fast Food & Grill" },
  { id: 'g5', src: resolveUrl(GALLERY_PHOTO_URLS.photo5_food, souvlakiImg), alt: "Tedy's Fast Food & Grill" },
  { id: 'g6', src: resolveUrl(GALLERY_PHOTO_URLS.photo6_place, placeCharcoalStationImg), alt: "Tedy's Fast Food & Grill" },
  { id: 'g7', src: resolveUrl(GALLERY_PHOTO_URLS.photo7_place, placeStreetTerraceImg), alt: "Tedy's Fast Food & Grill" },
  { id: 'g8', src: resolveUrl(GALLERY_PHOTO_URLS.photo8_food, mixGrillImg), alt: "Tedy's Fast Food & Grill" },
  { id: 'g9', src: resolveUrl(GALLERY_PHOTO_URLS.photo9_place, placeCozyTablesImg), alt: "Tedy's Fast Food & Grill" },
  { id: 'g10', src: resolveUrl(GALLERY_PHOTO_URLS.photo10_place, SITE_PHOTOS.restaurantHero), alt: "Tedy's Fast Food & Grill" },
  { id: 'g11', src: resolveUrl(GALLERY_PHOTO_URLS.photo11_food, pizzaImg), alt: "Tedy's Fast Food & Grill" },
  { id: 'g12', src: resolveUrl(GALLERY_PHOTO_URLS.photo12_food, skepastiImg), alt: "Tedy's Fast Food & Grill" },
  { id: 'g13', src: resolveUrl(GALLERY_PHOTO_URLS.photo13_place, SITE_PHOTOS.exteriorMain), alt: "Tedy's Fast Food & Grill" },
  { id: 'g14', src: resolveUrl(GALLERY_PHOTO_URLS.photo14_place, SITE_PHOTOS.restaurantHero), alt: "Tedy's Fast Food & Grill" },
];

// ============================================================================
// 3. FOTOT BAZË SIPAS KATEGORIVE (Ndryshon të gjithë kategorinë njëherësh)
// ============================================================================
export const CATEGORY_PHOTO_URLS = {
  doner: 'https://imageproxy.wolt.com/assets/679214352139d63e1eda0fd3?w=600',
  donerShishLlukanik: 'https://lh3.googleusercontent.com/z-_YDb71VMCiky96_4D6VFCVxBxZ0oCjmNMxuaw_6a65xdkChcEke3JhpgZ8lmjZPrzcSDhjQpzPMIxtPJJVekEyvaI1U3QHH6E',
  suflaqe: 'https://lh3.googleusercontent.com/wQWf66vNdSQKIRsd-YZzhgJImsekV6fWSb7-j-G1bkkUIW7q6ikx7bqbJWejUxgd6_pylSytAsV0-N8-APSdOEwPk4zWYHtCgZQ',
  pizzaClassic: '',
  pizzaBiancaMargherita: '',
  pizzaDiavolaProsciutto: '',
  calzone: 'https://imageproxy.wolt.com/assets/67fcb64e24bfc8a04be560a2',
  mengjesore: '',
  racioneGiro: 'https://lh3.googleusercontent.com/yfgUuJV0YrDOdCmhq3TLSW3IyHnSr0b1x0y8X8ekTAg8gsQmgToDsRmsWyl-LyPo54vXH_BfK7xWztC6AepW2q6W0hcRd_ruskVW',
  racioneZgare: 'https://lh3.googleusercontent.com/3wHLAXAqesForpLSlz3a5OhZcGC4ohy-Dj9Vnmu5B9Ba_L-kocL74ItDt5FqFthiFPl33h5GfjuFMPBI16918R5UnlK2dpy9Px7y',
  produkteZgare: 'https://lh3.googleusercontent.com/26pT-utIbKmO8A6yiJFiwSPBkI6cLMrVPuuYpO8q6XMxWS1pg0_q8crRrlhwH7YPM6-MUlguonRvS7cfzvfepavWMPsZHUDoQuDL9g',
  mixGrill: 'https://lh3.googleusercontent.com/9jSoWVPUITdvJwI8WNn5AWAEjWAqDQUVg0gRpnH3DO_r-vrZpJ-eATEU3yLFEgKc8VatvJqlWs43pPP5pwPNUVADnPCWOubNxZCmgQ',
  paidhaqeQofte: 'https://lh3.googleusercontent.com/3wHLAXAqesForpLSlz3a5OhZcGC4ohy-Dj9Vnmu5B9Ba_L-kocL74ItDt5FqFthiFPl33h5GfjuFMPBI16918R5UnlK2dpy9Px7y',
  puleZgare: 'https://lh3.googleusercontent.com/3wHLAXAqesForpLSlz3a5OhZcGC4ohy-Dj9Vnmu5B9Ba_L-kocL74ItDt5FqFthiFPl33h5GfjuFMPBI16918R5UnlK2dpy9Px7y',
  burger: 'https://imageproxy.wolt.com/assets/679202ccdb1fd457dbd44d15?w=600',
  hotdog: 'https://lh3.googleusercontent.com/mrDRkYIJIsM9-scem0XK15YNP9oPw_UxdfeTVROfHgtpHIg5L6D4nE66-oAvhIBQvcKUWuFLcT__nl77uM138rGD-DGZEJ6dDQ4m1w',
  clubSandwich: 'https://imageproxy.wolt.com/assets/679214e82139d63e1eda0fef?w=600',
  skepasti: 'https://imageproxy.wolt.com/assets/679202cedb1fd457dbd44d18?w=600',
  krepaEmbla: 'https://lh3.googleusercontent.com/OAeFt_pQTCNxIFJvngn5ZVlB0g1mMggaLnafby63aBLnXrapdRhA_8tlPY-s9p4jXniAGToDep0kCwf799jh3dpWfw6Ehwn7IcY',
  krepaKripura: 'https://lh3.googleusercontent.com/SIF8a6Sn7HsKN30LWCEfVkI3Eu5N8Yq9u5L2kz9wAAMJvTqaJYnIZYUmIydyMMNDmybBmpvm7pKvSoSM2PWkyL0OLB_FVWOoczhU',
  bruscheta: 'https://imageproxy.wolt.com/assets/6a57612d07d981ab44b845cc',
  sallataSides: 'https://lh3.googleusercontent.com/6qq3zTzg3I7OT-erhZ2I3jEVwf6hgA1vAoJI_EtN6o4bc1R95MSJmrG0oaBnIjkLvtDdoE8FSQt11Syxow4NH2I7kkRNi9sPgM0',
  caesarVeggies: 'https://lh3.googleusercontent.com/6qq3zTzg3I7OT-erhZ2I3jEVwf6hgA1vAoJI_EtN6o4bc1R95MSJmrG0oaBnIjkLvtDdoE8FSQt11Syxow4NH2I7kkRNi9sPgM0',
  patateSkuqura: 'https://lh3.googleusercontent.com/GObqC8WUj9dKF9LU7nK9WCdAjCtdqlf_Q9BQ4YKkqC6J1x5qpchsDSpa-16aXhZfPhv1tWe0q48XB1iJf1XPqkBXga0PddJf0TuH',
  salcat: 'https://lh3.googleusercontent.com/433M22-rUmnFIUoityqJkEBRt8uYlSolcTArpHQQNC1LiFZ-GjRUPaOKSK4us4o1CKV8gukdpIs-Rcks8zox0Q2Z7ZfgeAahR4H2',
  pijeFreskuese: '',
  birraVereRaki: '',
};

export const CATEGORY_PHOTOS = {
  doner: resolveUrl(CATEGORY_PHOTO_URLS.doner, donerPanineImg),
  donerShishLlukanik: resolveUrl(CATEGORY_PHOTO_URLS.donerShishLlukanik, donerPanineImg),
  suflaqe: resolveUrl(CATEGORY_PHOTO_URLS.suflaqe, souvlakiImg),
  pizzaClassic: resolveUrl(CATEGORY_PHOTO_URLS.pizzaClassic, pizzaImg),
  pizzaBiancaMargherita: resolveUrl(CATEGORY_PHOTO_URLS.pizzaBiancaMargherita, pizzaMargheritaBiancaImg),
  pizzaDiavolaProsciutto: resolveUrl(CATEGORY_PHOTO_URLS.pizzaDiavolaProsciutto, pizzaDiavolaProsciuttoImg),
  calzone: resolveUrl(CATEGORY_PHOTO_URLS.calzone, calzoneImg),
  mengjesore: resolveUrl(CATEGORY_PHOTO_URLS.mengjesore, breakfastImg),
  racioneGiro: resolveUrl(CATEGORY_PHOTO_URLS.racioneGiro, gyrosPlatterImg),
  racioneZgare: resolveUrl(CATEGORY_PHOTO_URLS.racioneZgare, grillChopsImg),
  produkteZgare: resolveUrl(CATEGORY_PHOTO_URLS.produkteZgare, grillChopsImg),
  mixGrill: resolveUrl(CATEGORY_PHOTO_URLS.mixGrill, mixGrillImg),
  paidhaqeQofte: resolveUrl(CATEGORY_PHOTO_URLS.paidhaqeQofte, grillChopsImg),
  puleZgare: resolveUrl(CATEGORY_PHOTO_URLS.puleZgare, grillWholeChickenImg),
  burger: resolveUrl(CATEGORY_PHOTO_URLS.burger, burgerHotdogImg),
  hotdog: resolveUrl(CATEGORY_PHOTO_URLS.hotdog, hotdogImg),
  clubSandwich: resolveUrl(CATEGORY_PHOTO_URLS.clubSandwich, clubSandwichImg),
  skepasti: resolveUrl(CATEGORY_PHOTO_URLS.skepasti, skepastiImg),
  krepaEmbla: resolveUrl(CATEGORY_PHOTO_URLS.krepaEmbla, crepesImg),
  krepaKripura: resolveUrl(CATEGORY_PHOTO_URLS.krepaKripura, savoryCrepeImg),
  bruscheta: resolveUrl(CATEGORY_PHOTO_URLS.bruscheta, bruschettaImg),
  sallataSides: resolveUrl(CATEGORY_PHOTO_URLS.sallataSides, saladSidesImg),
  caesarVeggies: resolveUrl(CATEGORY_PHOTO_URLS.caesarVeggies, caesarVeggiesImg),
  patateSkuqura: resolveUrl(CATEGORY_PHOTO_URLS.patateSkuqura, saladSidesImg),
  salcat: resolveUrl(CATEGORY_PHOTO_URLS.salcat, saladSidesImg),
  pijeFreskuese: resolveUrl(CATEGORY_PHOTO_URLS.pijeFreskuese, coldDrinksImg),
  birraVereRaki: resolveUrl(CATEGORY_PHOTO_URLS.birraVereRaki, beerWineRakiImg),
};

const DONER_SHISH_LLUKANIK = CATEGORY_PHOTOS.donerShishLlukanik;
const RACIO_ZGARE = CATEGORY_PHOTOS.racioneZgare;
const PROD_ZGARE = CATEGORY_PHOTOS.produkteZgare;
const MIX_GRILL_2P = CATEGORY_PHOTOS.mixGrill;
const PATATE_URL = CATEGORY_PHOTOS.patateSkuqura;
const SALCAT_URL = CATEGORY_PHOTOS.salcat;
const SALLATAT_URL = CATEGORY_PHOTOS.sallataSides;

// ============================================================================
// 4. FOTO INDIVIDUALE PËR ÇDO PRODUKT (Ngjit "Copy image address" brenda '')
// ============================================================================
export const PRODUCT_PHOTO_URLS: Record<string, string> = {
  // --- 1. DONER ---
  'doner-giro-derri': 'https://imageproxy.wolt.com/assets/679202d0db1fd457dbd44d1b?w=600',
  'doner-giro-pule': 'https://imageproxy.wolt.com/assets/679202d0db1fd457dbd44d1b?w=600',
  'doner-shishqebap-derri': 'https://imageproxy.wolt.com/assets/679202cedb1fd457dbd44d19?w=600',
  'doner-shishqebap-pule': 'https://imageproxy.wolt.com/assets/679202d0db1fd457dbd44d1e?w=600',
  'doner-llukanik-derri': 'https://imageproxy.wolt.com/assets/67920330fce7b0711960b557?w=600',
  'doner-llukanik-pule': 'https://imageproxy.wolt.com/assets/67920330fce7b0711960b557?w=600',
  'doner-giro-derri-special': 'https://imageproxy.wolt.com/assets/679202d0db1fd457dbd44d1b?w=600',
  'doner-giro-pule-special': 'https://imageproxy.wolt.com/assets/679202d0db1fd457dbd44d1b?w=600',
  'doner-vegetarian': '',

  // --- 2. SUFLAQE ---
  'suflaqe-pite-giro-derri': '',
  'suflaqe-pite-giro-derri-dopio': 'https://imageproxy.wolt.com/assets/679212da2139d63e1eda0f6c?w=600',
  'suflaqe-pite-giro-pule': '',
  'suflaqe-pite-giro-pule-dopio': 'https://imageproxy.wolt.com/assets/679212da2139d63e1eda0f6c?w=600',
  'suflaqe-pite-shishqebap-derri': 'https://imageproxy.wolt.com/assets/6792137f2139d63e1eda0fb9?w=600',
  'suflaqe-pite-shishqebap-pule': 'https://imageproxy.wolt.com/assets/6792137c2139d63e1eda0fb7?w=600',
  'suflaqe-pite-llukanik-derri': 'https://imageproxy.wolt.com/assets/679202ccdb1fd457dbd44d13?w=600',
  'suflaqe-pite-llukanik-pule': 'https://imageproxy.wolt.com/assets/679202ccdb1fd457dbd44d13?w=600',
  'suflaqe-pita-club': '',
  'suflaqe-vegetariane': '',

  // --- 3. PIZZA MENU ---
  'pizza-bianca': 'https://imageproxy.wolt.com/menu/menu-images/shared/abf89900-e758-11ee-b64d-525fdae15875_5._kids_pizza.jpg',
  'pizza-margarita': 'https://lh3.googleusercontent.com/Ccr3QlOFqqUdHeIzRu5qxP2dOakpXSvnltvRN_fq_6iE3baHmQrH-ec9Q3wUxoqLkPBZRvOxt2eQaxI43QZRFhfERNw6WT90-Ioa',
  'pizza-proshute': 'https://lh3.googleusercontent.com/fAHVX0THd8AQUxwMXYiE50JC7u6cSAgwoTDjwiV3o0n3ovYckH1G1OsIVp2vyhck-iLyyTVGglj_TowLGpc0aAue94S9hBQUCBPa',
  'pizza-beicon': 'https://lh3.googleusercontent.com/tqVGESY3HV-hFbqRKFXdCukOZKCgGvgYmrAPebtMoH8Fs4ptmznx_wQFdF99aK3wdqktrEml6DkWHQFKzLSWUn5Wsg3JnfbdpxU',
  'pizza-sallam': 'https://lh3.googleusercontent.com/GUbPtldsyMpcWoJkj1SjFFv2TfbnRY9J5KFDVa_PNPeywVLSSu4nmcQMOQUTfG31VTVFBkPmyqMfuXQbej1HaKICiNBAtlDMm_2F',
  'pizza-proshute-sallam': 'https://lh3.googleusercontent.com/fAHVX0THd8AQUxwMXYiE50JC7u6cSAgwoTDjwiV3o0n3ovYckH1G1OsIVp2vyhck-iLyyTVGglj_TowLGpc0aAue94S9hBQUCBPa',
  'pizza-proshute-kerpudhe': 'https://lh3.googleusercontent.com/6EB84o6VjWR4umXSPzhXa7ovtfo583hc37U3zRXP6MgvlPemghvEak2rjSLoLj7Btd0k8-mP3tiLn06cRbThoqOKEHHQopdTH_B3',
  'pizza-kapricioze': 'https://lh3.googleusercontent.com/d80ZLsxWU_Z1zX7p6a3mfb4GghSy6Fjo6QnXybMcQ3b-WCnFs3hFnrf0fcJi5xW2G2BP0aY7Bfht9BACK5_o50A21tsEShOhlbiPfw',
  'pizza-kater-stinet': 'https://lh3.googleusercontent.com/9uBZDVDOyDH7qwEnbhyW1btT7F06nj1nMGq14Q0ZI4eoMHq9_ssRWLg-Wj3HdHiDJcAe4I27zBYntS-MvQzvbkBlsrCkPoebx0-3',
  'pizza-giro': 'https://lh3.googleusercontent.com/1wDT3zqQBoln0wPULbjne8MgQZC31cFKkYNnvetHqu-K4pGwy-Gv3j1Va8M5PWZF7o1zPGIu4WbPcWADIzd7qJg3tDyr32pHcdbm',
  'pizza-beicon-pikant': 'https://lh3.googleusercontent.com/tqVGESY3HV-hFbqRKFXdCukOZKCgGvgYmrAPebtMoH8Fs4ptmznx_wQFdF99aK3wdqktrEml6DkWHQFKzLSWUn5Wsg3JnfbdpxU',
  'pizza-proshute-krudo': 'https://lh3.googleusercontent.com/fAHVX0THd8AQUxwMXYiE50JC7u6cSAgwoTDjwiV3o0n3ovYckH1G1OsIVp2vyhck-iLyyTVGglj_TowLGpc0aAue94S9hBQUCBPa',
  'pizza-vegjetariane': 'https://imageproxy.wolt.com/assets/679202d0db1fd457dbd44d1c?w=600',
  'pizza-fshati': 'https://lh3.googleusercontent.com/qass6bvRRxhLgO-F9q_mLo5W8dA1pkmV59HeJtzJolEWbQ4y0UnHrMEZQc279rPocGfWBUnK0OzZ_J0t458TIPZp7p-kuKTvtDBz',
  'pizza-kerpudhe': 'https://lh3.googleusercontent.com/6EB84o6VjWR4umXSPzhXa7ovtfo583hc37U3zRXP6MgvlPemghvEak2rjSLoLj7Btd0k8-mP3tiLn06cRbThoqOKEHHQopdTH_B3',
  'pizza-ton-kerpudhe': 'https://lh3.googleusercontent.com/18EpeUUPF-xHx_DD1cXYbg1-wmyCr_C92EF15R2_sNd4APvUX2ukhak606YkLkOGHvt08sqgg8ntU9nNJ2QvsTKUiYwSXnmTFrAYCw',
  'pizza-kater-djatherat': 'https://lh3.googleusercontent.com/VLbU_gjlzVc3MIyhF_OgSWwdV-L22dk52fLuxYgo7DIZJ9ZAW4vb-1lmCaRiWs8ORFTkTsIlHwwCPMa6GtAzM6czVXUBL1Ld_Wy8',
  'pizza-kater-djatherat-pikant': 'https://lh3.googleusercontent.com/j6Jl0QtGb0aeC6j_tYEYx4qU2d4K-2-NJIeFjRPK9T-G9REt6ZNIIP9HYe9NB5bBZ_0wc7cNM9JwXtlt4PuXXtpbwY5GEA3rUoHKUg',
  'pizza-ton': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehq4NhQh7uhNdP0brq-KOIdxgl1WYyMf1bT9-G_fUIowBNFs1QI62Uwc&s=10',
  'pizza-diavola': 'https://lh3.googleusercontent.com/j6Jl0QtGb0aeC6j_tYEYx4qU2d4K-2-NJIeFjRPK9T-G9REt6ZNIIP9HYe9NB5bBZ_0wc7cNM9JwXtlt4PuXXtpbwY5GEA3rUoHKUg',
  'pizza-mikse': 'https://lh3.googleusercontent.com/ojZkE6NXTLbB5fcw4eLw1tbXrwSXZUbGGHzdF2BR1_kwft-xsd69ZhmyjjOpUbz5MedVHLTR99Zc-6hl5nxrq_XDKy_TYrV5pFY',
  'pizza-speciale-tedys': 'https://lh3.googleusercontent.com/ojZkE6NXTLbB5fcw4eLw1tbXrwSXZUbGGHzdF2BR1_kwft-xsd69ZhmyjjOpUbz5MedVHLTR99Zc-6hl5nxrq_XDKy_TYrV5pFY',

  // --- 4. MËNGJESORE ---
  'mengjes-omlete-proshute': 'https://imageproxy.wolt.com/assets/67921ce4db1fd457dbd45208?w=600',
  'mengjes-tost': 'https://imageproxy.wolt.com/assets/679202d9db1fd457dbd44d37?w=600',
  'mengjes-tost-patate': 'https://imageproxy.wolt.com/assets/679202d9db1fd457dbd44d37?w=600',

  // --- 5. RACIONE PJATË GIRO ---
  'racione-giro-derri-vogel': 'https://imageproxy.wolt.com/assets/679202d6db1fd457dbd44d31?w=600',
  'racione-giro-derri-madhe': 'https://imageproxy.wolt.com/assets/679202d4db1fd457dbd44d29?w=600',
  'racione-giro-pule-vogel': 'https://imageproxy.wolt.com/assets/679202d6db1fd457dbd44d31?w=600',
  'racione-giro-pule-madhe': 'https://imageproxy.wolt.com/assets/679202d4db1fd457dbd44d29?w=600',

  // --- 6. RACIONE PJATË ZGARE ---
  'zgare-shishqebap-derri': 'https://imageproxy.wolt.com/assets/6afac758df917809ec592c08',
  'zgare-shishqebap-pule': 'https://imageproxy.wolt.com/assets/6afac758df917809ec592c08',
  'zgare-llukanik-derri': 'https://imageproxy.wolt.com/assets/6afac6fedf917809ec592bc5',
  'zgare-llukanik-pule': 'https://imageproxy.wolt.com/assets/6afac6fedf917809ec592bc5',
  'zgare-qofte-vici': 'https://imageproxy.wolt.com/assets/67921d9ddb1fd457dbd45236?w=600',
  'zgare-kernace-racion': 'https://imageproxy.wolt.com/assets/679202d5db1fd457dbd44d2c?w=600',
  'zgare-paidhaqe': 'https://imageproxy.wolt.com/assets/679202d6db1fd457dbd44d2f?w=600',
  'zgare-paidhaqe-gici-1kg': 'https://imageproxy.wolt.com/assets/679202d6db1fd457dbd44d2f?w=600',
  'zgare-fileto-pule': 'https://imageproxy.wolt.com/assets/6ac74d33b6edba93a445f679',
  'zgare-mix-grill': MIX_GRILL_2P,
  'zgare-krahe-pule': 'https://imageproxy.wolt.com/assets/679202d6db1fd457dbd44d30?w=600',
  'zgare-pule-zgare': 'https://imageproxy.wolt.com/assets/69ae9754f86278773c621a15',
  'zgare-pule-me-patate': 'https://imageproxy.wolt.com/assets/69ae9754f86278773c621a15',

  // --- 7. PRODUKTE ZGARE ---
  'prod-kernace': PROD_ZGARE,
  'prod-llukanik-derri-pule': 'https://imageproxy.wolt.com/assets/6afac6fedf917809ec592bc5',
  'prod-shishqebap-derri': 'https://imageproxy.wolt.com/assets/6afac758df917809ec592c08',
  'prod-shishqebap-pule': 'https://imageproxy.wolt.com/assets/6afac758df917809ec592c08',
  'prod-qofte-vici-pule': PROD_ZGARE,
  'prod-krahe-pule-1kg': PROD_ZGARE,

  // --- 8. BURGER ---
  'burger-tedys': 'https://imageproxy.wolt.com/assets/679202ccdb1fd457dbd44d14?w=600',
  'burger-chicken': 'https://imageproxy.wolt.com/assets/679202ccdb1fd457dbd44d12?w=600',
  'burger-hamburger': 'https://imageproxy.wolt.com/assets/679202ccdb1fd457dbd44d11?w=600',
  'burger-club-sandwich': '',
  'burger-sandwich': '',
  'burger-hotdog': '',
  'burger-skebasti-vogel': 'https://imageproxy.wolt.com/assets/679202cedb1fd457dbd44d18?w=600',
  'burger-skebasti-madhe': 'https://imageproxy.wolt.com/assets/679202cedb1fd457dbd44d16?w=600',
  'burger-pita-arabe': 'https://imageproxy.wolt.com/assets/6b04223472b6a8be16e8f6c5?w=600',

  // --- 9. CALZONE MENU ---
  'calzone-sallam': '',
  'calzone-proshute': '',
  'calzone-proshute-kerpudhe': '',
  'calzone-kater-djatherat': '',
  'calzone-beicon': '',
  'calzone-ton': '',

  // --- 10. SANDWICH MENU ---
  'sandwich-fshati-special': '',
  'sandwich-fshati': '',
  'sandwich-sallam-perime': '',
  'sandwich-beicon': '',
  'sandwich-proshute-perime': '',
  'sandwich-proshute-kerpudhe': '',
  'sandwich-sallam-pikant': '',
  'sandwich-ton': '',
  'sandwich-ton-kerpudhe': '',
  'sandwich-pana-proshute': '',

  // --- 11. KREPA TË ËMBLA ---
  'krepe-cokonero': '',
  'krepe-cokobanco': '',
  'krepe-nutella': '',
  'krepe-ludia': '',
  'krepe-ludia-nutella': '',
  'krepe-nocelo': '',
  'krepe-tutti-frutti': '',
  'krepe-pistakio': '',

  // --- 12. KREPA TË KRIPURA ---
  'krepe-kripur-biadina': '',
  'krepe-kripur-berlin': '',
  'krepe-kripur-chicken-fries': '',
  'krepe-kripur-vegetariane': '',
  'krepe-kripur-nany': '',
  'krepe-kripur-speciale-tedys': '',

  // --- 13. BRUSCHETA ---
  'bruscheta-klasike': '',
  'bruscheta-giro-pule': '',
  'bruscheta-giro-derri': '',
  'bruscheta-kerpudha': '',
  'bruscheta-ton': '',
  'bruscheta-fokace': '',

  // --- 14. SALLATA & SHOQËRUESE ---
  'sallate-fshati-madhe': SALLATAT_URL,
  'sallate-jeshile': SALLATAT_URL,
  'sallate-perime-zgare': SALLATAT_URL,
  'sallate-cezar': 'https://imageproxy.wolt.com/assets/679202d5db1fd457dbd44d2d?w=600',
  'shoqeruese-patate-skuqura': PATATE_URL,
  'shoqeruese-xaxiki': SALCAT_URL,
  'shoqeruese-salce-djegese': SALCAT_URL,
  'shoqeruese-salce-kosi': SALCAT_URL,
  'shoqeruese-djathe-bardhe': SALLATAT_URL,
  'shoqeruese-patate-salce': PATATE_URL,

  // --- 15. PIJE ---
  'pije-freskuese': 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/shape/cover/sport/iStock-487787108-3f77e523663f73c106cbcb81834a4248.jpg',
  'pije-uje-05': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNr4PDZ0A2moYO-JnmtzGmbno1jAiH8ga71lvC_dlWOQ&s=10',
  'pije-uje-gazuar-05': 'https://shop.spar.al/wp-content/uploads/2021/10/5900.jpg',
  'pije-vere-hapur-italiane': 'https://mapocity.al/cdn/shop/files/802653000017623.jpg?v=1773064524&width=480',
  'pije-gote-vere-italiane': 'https://lifecarenannys.al/wp-content/uploads/2022/07/Untitled-design-1-6.png',
  'pije-amstel-033': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvLIkgbh9wfBBxVwsrXIoPp4-Rcz_jUxbCfLGUvV4XVVuqajFcCsJVME&s=10',
  'pije-amstel-05': 'https://shop.spar.al/wp-content/uploads/2022/10/5973.jpg',
  'pije-heineken-033': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrioH2TDNWOG2xAJVgK7Om1-Z1v5WcCYoI4zyccWCv3POZ71fxz6IEkto&s=10',
  'pije-heineken-05': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrioH2TDNWOG2xAJVgK7Om1-Z1v5WcCYoI4zyccWCv3POZ71fxz6IEkto&s=10',
  'pije-elbar-033': 'https://shop.spar.al/wp-content/uploads/2020/03/Imb22.jpg',
  'pije-elbar-05': 'https://shop.spar.al/wp-content/uploads/2020/03/Imb22.jpg',
  'pije-raki-rrushi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsb6XbYD8W9QQ9Xkseh_wcp5sjQrOMjck9b0086QZbPolcRPVdh4rL76k&s=10',
};

export const getProductPhoto = (productId: string, categoryFallback: string): string => {
  return resolveUrl(PRODUCT_PHOTO_URLS[productId], categoryFallback);
};
