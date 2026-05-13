import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        pricing: 'Pricing',
        features: 'Features',
        faq: 'FAQ',
        contact: 'Contact Us',
      },
      hero: {
        title: 'Experience The Future of Entertainment with Premium IPTV',
        subtitle: 'Over 15,000 live channels and 100,000+ VODs in 4K/8K quality. Fast, stable, and secure.',
        cta_order: 'Order Now',
        cta_whatsapp: 'WhatsApp Support',
        badge: 'Top Rated Provider 2024',
      },
      pricing: {
        title: 'Choose Your Perfect Plan',
        subtitle: 'Select the number of connections and your term',
        connections: 'Connections',
        month: 'Month',
        months: 'Months',
        year: 'Year',
        order_now: 'Order Now',
        features: {
          channels: '15,000+ Channels',
          vod: '100,000+ Movies & Series',
          quality: '4K / 8K / UHD Quality',
          catchup: '7 Days Catch-up',
          support: '24/7 Premium Support',
          antifreeze: 'Anti-Freeze Technology',
        }
      },
      features: {
        title: 'Why Choose Our IPTV Service?',
        f1_title: 'Unmatched Stability',
        f1_desc: '99.9% uptime with dedicated servers located globally for zero lag.',
        f2_title: 'Crystal Clear 4K',
        f2_desc: 'Stream your favorite movies and sports in stunning 4K and 8K resolution.',
        f3_title: 'Instant Delivery',
        f3_desc: 'Get your credentials instantly after payment and start watching.',
        f4_title: 'Multi-Device Support',
        f4_desc: 'Compatible with Smart TVs, Android, iOS, Windows, and MAG devices.',
      },
      faq: {
        title: 'Frequently Asked Questions',
        q1: 'How do I install the service?',
        a1: 'After ordering, you will receive an email with step-by-step instructions for your specific device. We support all major IPTV apps.',
        q2: 'What is your uptime guarantee?',
        a2: 'We guarantee 99.9% uptime. Our servers are monitored 24/7 to ensure a smooth viewing experience.',
        q3: 'Can I use it on multiple devices?',
        a3: 'Yes, depending on the plan you choose. We offer plans with 1, 2, or 3 simultaneous connections.',
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        pricing: 'Tarifs',
        features: 'Avantages',
        faq: 'FAQ',
        contact: 'Contactez-nous',
      },
      hero: {
        title: "Découvrez l'Avenir du Divertissement avec l'IPTV Premium",
        subtitle: 'Plus de 15 000 chaînes en direct et 100 000+ VOD en qualité 4K/8K. Rapide, stable et sécurisé.',
        cta_order: 'Commander',
        cta_whatsapp: 'Support WhatsApp',
        badge: 'Premier Fournisseur 2024',
      },
      pricing: {
        title: 'Choisissez Votre Forfait Idéal',
        subtitle: 'Sélectionnez le nombre de connexions et votre durée',
        connections: 'Connexions',
        month: 'Mois',
        months: 'Mois',
        year: 'An',
        order_now: 'Commander Maintenant',
        features: {
          channels: '15 000+ Chaînes',
          vod: '100 000+ Films & Séries',
          quality: 'Qualité 4K / 8K / UHD',
          catchup: '7 Jours de Replay',
          support: 'Support Premium 24/7',
          antifreeze: 'Technologie Anti-Freeze',
        }
      },
      features: {
        title: 'Pourquoi Choisir Notre Service IPTV ?',
        f1_title: 'Stabilité Inégalée',
        f1_desc: "Uptime de 99,9 % avec des serveurs dédiés situés mondialement pour zéro décalage.",
        f2_title: '4K Éclatante',
        f2_desc: 'Diffusez vos films et sports préférés en résolution 4K et 8K époustouflante.',
        f3_title: 'Livraison Instannée',
        f3_desc: 'Obtenez vos identifiants instantanément après le paiement et commencez à regarder.',
        f4_title: 'Multi-Appareils',
        f4_desc: 'Compatible avec Smart TV, Android, iOS, Windows et les boîtiers MAG.',
      },
      faq: {
        title: 'Questions Fréquentes',
        q1: 'Comment installer le service ?',
        a1: "Après votre commande, vous recevrez un email avec des instructions étape par étape pour votre appareil spécifique.",
        q2: "Quelle est votre garantie de disponibilité ?",
        a2: "Nous garantissons un temps de disponibilité de 99,9 %. Nos serveurs sont surveillés 24/7.",
        q3: 'Puis-je l\'utiliser sur plusieurs appareils ?',
        a3: 'Oui, selon le forfait choisi. Nous proposons des forfaits avec 1, 2 ou 3 connexions simultanées.',
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        pricing: 'Precios',
        features: 'Características',
        faq: 'Preguntas',
        contact: 'Contacto',
      },
      hero: {
        title: 'Experimenta el Futuro del Entretenimiento con IPTV Premium',
        subtitle: 'Más de 15,000 canales en vivo y 100,000+ VOD en calidad 4K/8K. Rápido, estable y seguro.',
        cta_order: 'Pedir Ahora',
        cta_whatsapp: 'Soporte WhatsApp',
        badge: 'Proveedor Mejor Valorado 2024',
      },
      pricing: {
        title: 'Elige tu Plan Perfecto',
        subtitle: 'Selecciona el número de conexiones y tu plazo',
        connections: 'Conexiones',
        month: 'Mes',
        months: 'Meses',
        year: 'Año',
        order_now: 'Pedir Ahora',
        features: {
          channels: '15,000+ Canales',
          vod: '100,000+ Películas y Series',
          quality: 'Calidad 4K / 8K / UHD',
          catchup: '7 Días de Replay',
          support: 'Soporte Premium 24/7',
          antifreeze: 'Tecnología Anti-Freeze',
        }
      },
      features: {
        title: '¿Por qué elegir nuestro servicio IPTV?',
        f1_title: 'Estabilidad Inigualable',
        f1_desc: '99.9% de tiempo de actividad con servidores dedicados a nivel mundial.',
        f2_title: '4K Cristalino',
        f2_desc: 'Transmite tus películas y deportes favoritos en impresionante 4K y 8K.',
        f3_title: 'Entrega Instantánea',
        f3_desc: 'Recibe tus credenciales al instante después del pago.',
        f4_title: 'Soporte Multidispositivo',
        f4_desc: 'Compatible con Smart TV, Android, iOS, Windows y MAG.',
      },
      faq: {
        title: 'Preguntas Frecuentes',
        q1: '¿Cómo instalo el servicio?',
        a1: 'Después de realizar el pedido, recibirás un correo con instrucciones paso a paso.',
        q2: '¿Cuál es su garantía de uptime?',
        a2: 'Garantizamos un 99.9% de disponibilidad, monitoreado 24/7.',
        q3: '¿Puedo usarlo en varios dispositivos?',
        a3: 'Sí, dependiendo del plan elegido (1, 2 o 3 conexiones simultáneas).',
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
