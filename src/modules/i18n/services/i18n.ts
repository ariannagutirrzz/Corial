import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const LANGUAGE_STORAGE_KEY = 'preferred-language';
const fallbackLanguage = 'en';
const persistedLanguage: string | null = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
const initialLanguage = persistedLanguage === 'es' || persistedLanguage === 'en' ? persistedLanguage : fallbackLanguage;

void i18n.use(initReactI18next).init({
  lng: initialLanguage,
  fallbackLng: fallbackLanguage,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        nav: {
          home: 'HOME',
          about: 'About',
          services: 'Services',
          contact: 'Contact',
          shopNow: 'SHOP NOW',
          shopCollection: 'SHOP COLLECTION',
        },
        footer: {
          brand: 'Corial is a jewelry brand in Maracaibo focused on timeless pieces in Stainless Steel and 925 Silver.',
          explore: 'Explore',
          story: 'Our Story',
          expertise: 'Expertise',
          collections: 'Collections',
          contactUs: 'Contact Us',
          shipping: 'Mcbo Delivery + National & International Shipping 📦',
          rights: 'All rights reserved.',
        },
      },
    },
    es: {
      translation: {
        nav: {
          home: 'HOME',
          about: 'Nosotros',
          services: 'Colecciones',
          contact: 'Contacto',
          shopNow: 'COMPRAR',
          shopCollection: 'VER COLECCION',
        },
        footer: {
          brand: 'Corial es una marca de joyeria en Maracaibo enfocada en piezas atemporales de Acero Inoxidable y Plata 925.',
          explore: 'Explorar',
          story: 'Nuestra Historia',
          expertise: 'Colecciones',
          collections: 'Colecciones',
          contactUs: 'Contactanos',
          shipping: 'Delivery en Mcbo + Envios Nacionales e Internacionales 📦',
          rights: 'Todos los derechos reservados.',
        },
      },
    },
  },
});

i18n.on('languageChanged', (language: string) => {
  if (language === 'es' || language === 'en') {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }
});

export { i18n };
