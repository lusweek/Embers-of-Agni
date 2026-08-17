// FAQPage-schema för startsidans FAQ-sektion. Innehållet i "text" måste
// matcha det som faktiskt visas på sidan (FaqSection.svelte) för att Google
// ska godkänna det för rich results.
export const faqSchema =
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Var håller Vilda Flammor till och vart reser ni för eldshower?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vi är baserade i Kalmar/Öland men reser i hela Sverige. Vi bokas regelbundet för eldshow i Kalmar, på Öland, i Göteborg, Stockholm och övriga landet – hör av er oavsett var ni håller till."
      }
    },
    {
      "@type": "Question",
      "name": "Kan man boka en eldshow i Göteborg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Vi bokar eldshower i Göteborg och övriga Västsverige lika ofta som i Kalmar-trakten. Hör av er så löser vi resa och logistik."
      }
    },
    {
      "@type": "Question",
      "name": "Har ni aktiviteter som passar för skapande skola?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja! Våra flowarts-workshops med stav, poi och rockring är populära som skapande skola-aktivitet – lekfullt, fysiskt och kravlöst för barn och unga, med utrustning för större grupper."
      }
    },
    {
      "@type": "Question",
      "name": "Passar en eldshow som underhållning på firmafest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolut. En koreograferad eldshow är ett omtyckt inslag på firmafester och andra företagsevent – som kvällens höjdpunkt eller som uppvärmning inför festen. Vi kan även köra en workshop som teambuilding-aktivitet."
      }
    },
    {
      "@type": "Question",
      "name": "Hur långt i förväg bör vi boka en eldshow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Så snart datumet är satt är det bra att höra av sig, särskilt under sommarhalvåret då efterfrågan är som störst. Men fråga gärna även med kort varsel – vi löser det ofta."
      }
    }
  ]
}
