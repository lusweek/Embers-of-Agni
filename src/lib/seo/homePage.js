export const homePage = {
  "@context": "https://schema.org",
  "@type": "PerformingGroup",
  "name": "Embers of Agni",
  "url": "https://embersofagni.se/",
  "description": "Professionella eldartister som erbjuder eldshower, flowarts-uppträdanden och workshops i hela Sverige. Perfekt för bröllop, företagsevent och festivaler.",
  "image": ["https://embersofagni.se/images/home/hero.webp"],
  "areaServed": {
    "@type": "Country",
    "name": "Sweden"
  },
  "sameAs": ["https://www.instagram.com/embersofagni"],
  "founder": [
    {
      "@type": "Person",
      "name": "Lukas",
      "description": "Eldartist specialiserad på stavar och poi."
    },
    {
      "@type": "Person",
      "name": "Elin",
      "description": "Eldartist specialiserad på poi och rockring."
    }
  ],
  "knowsAbout": ["Eldshow", "Flowarts", "Poi", "Stav", "Rockring", "Workshop", "Elddans"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Eldshower och workshops",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Duoshow",
          "description": "Synkroniserad eldshow med två artister."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Soloshow",
          "description": "Intim eldshow med en artist."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Prova på Flowarts",
          "description": "Interaktiv workshop i poi, stavar och ringar."
        }
      }
    ]
  }
};
