<script>
  // Innehållet här måste spegla src/lib/seo/faq.js (samma frågor/svar) så att
  // det matchar FAQPage-schemat och kan visas som rich result i Google.
  const faqs = [
    {
      q: "Var håller ni till och vart reser ni för eldshower?",
      a: "Vi är baserade i Kalmar/Öland men reser i hela Sverige. Vi bokas regelbundet för eldshow i Kalmar, på Öland, i Göteborg, Stockholm och övriga landet — hör av er oavsett var ni håller till."
    },
    {
      q: "Kan man boka en eldshow i Göteborg?",
      a: "Ja. Vi bokar eldshower i Göteborg och övriga Västsverige lika ofta som i Kalmar-trakten. Hör av er så löser vi resa och logistik."
    },
    {
      q: "Har ni aktiviteter som passar för skapande skola?",
      a: "Ja! Våra flowarts-workshops med stav, poi och rockring är populära som skapande skola-aktivitet — lekfullt, fysiskt och kravlöst för barn och unga, med utrustning för större grupper."
    },
    {
      q: "Passar en eldshow som underhållning på firmafest?",
      a: "Absolut. En koreograferad eldshow är ett omtyckt inslag på firmafester och andra företagsevent — som kvällens höjdpunkt eller som uppvärmning inför festen. Vi kan även köra en workshop som teambuilding-aktivitet."
    },
    {
      q: "Hur långt i förväg bör vi boka en eldshow?",
      a: "Så snart datumet är satt är det bra att höra av sig, särskilt under sommarhalvåret då efterfrågan är som störst. Men fråga gärna även med kort varsel — vi löser det ofta."
    }
  ];
</script>

<section class="section faq-section">
  <div class="wrap">
    <div class="section-head center" style="margin:0 auto 40px;text-align:center;">
      <span class="eyebrow">Vanliga frågor</span>
      <h2>Bra att veta innan ni bokar</h2>
    </div>
    <div class="faq-list">
      {#each faqs as item}
        <details class="faq-item">
          <summary>
            <span>{item.q}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="faq-chevron"><path d="M6 9l6 6 6-6"/></svg>
          </summary>
          <p>{item.a}</p>
        </details>
      {/each}
    </div>
  </div>
</section>
