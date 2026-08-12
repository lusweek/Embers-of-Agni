<script>
  import { storaShowenPage } from "$lib/seo/storaShowenPage";

  import heroImg from "$lib/images/eldshower/duoshow.webp";
  import g1 from "$lib/images/bilder/IMG_8523.webp";
  import g2 from "$lib/images/bilder/IMG_8501.webp";
  import g3 from "$lib/images/bilder/IMG_8479.webp";
  import g4 from "$lib/images/bilder/IMG_8536.webp";
  import g5 from "$lib/images/bilder/IMG_8586.webp";
</script>

<!-- SEO -->
<svelte:head>
  <title>Stora showen – 15 min Eldshow – Vilda Flammor</title>
  <meta name="description" content="Stora showen är vår signaturupplevelse: 15 minuter fullständigt koreograferad elddans till folkmusik. Kvällens klimax för event, bröllop och festivaler." />
  <script type="application/ld+json">
    {JSON.stringify(storaShowenPage)}
  </script>
</svelte:head>

<p class="wrap"><span class="breadcrumb"><a href="/eldshow">Eldshow</a> / <span>Stora showen</span></span></p>

<section class="hero-inline">
  <div class="hero-bg ph">
    <img src={heroImg} alt="Stora showen - eldshow i skymning" fetchpriority="high" />
  </div>
  <div class="hero-content">
    <span class="eyebrow">Eldshow · Huvudakt</span>
    <h1>Stora showen</h1>
    <div class="hero-meta"><span><b>15 min</b> · scenlängd</span><span><b>Ser bäst ut</b> i mörker</span><span><b>2 artister</b></span></div>
    <a class="btn-primary" href="/boka">Boka stora showen</a>
  </div>
</section>

<section class="section lead-block">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Om showen</span>
      <h2>Kvällens klimax</h2>
    </div>
    <p>Stora showen är vår signaturupplevelse — <b>15 minuter</b> fullständigt koreograferad elddans till folkmusik i olika tempon. Det är den show vi bygger allt kring, och den vi rekommenderar när ni vill att elden ska vara kvällens huvudnummer.</p>
    <p>Men det viktiga är inte antalet minuter — det är känslan som stannar kvar. Vårt mål är att leverera en upplevelse gästerna minns långt efter att elden har slocknat.</p>
    <p>Musik, tempo och kostym anpassas efter er stämning. Showen fungerar lika bra som ett dramatiskt avbrott mitt i festen som en tydlig final mot slutet av kvällen.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Bibliotek</span>
      <h2>Från tidigare framträdanden</h2>
      <p>Bilder från stora showen.</p>
    </div>
    <div class="gallery">
      <div class="ph wide"><img src={g1} alt="Stora showen - eldshow med facklor" /></div>
      <div class="ph"><img src={g2} alt="Elddans, korsade facklor" /></div>
      <div class="ph"><img src={g3} alt="Porträtt/kostym under showen" /></div>
      <div class="ph"><img src={g4} alt="Stämningsbild från stora showen" /></div>
      <div class="ph wide"><img src={g5} alt="Final, elddans i skymning" /></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Passar för</span>
      <h2>Rätt val när ni vill imponera</h2>
    </div>
    <div class="taglist">
      <span>Företagsfest</span><span>Bröllop</span><span>Kulturevent</span><span>Festival</span><span>Födelsedagsfest</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Så funkar bokningen</span>
      <h2>Det här behöver ni veta</h2>
      <p>Allt du behöver känna dig trygg med innan ni bokar — vad vi tar hand om, och vad vi behöver av er.</p>
    </div>

    <div class="logistics">
      <div class="logistics-grid">
        <div class="logistics-col weown">
          <h3>Det här sköter vi</h3>
          <ul class="logi-list">
            <li><span class="logi-mark">✓</span><p><b>Säkerhet.</b> Vi är utbildade i och erfarna av eldshower — säkerhet är alltid vår högsta prioritet, för både artister och publik.</p></li>
            <li><span class="logi-mark">✓</span><p><b>Ljud.</b> Vi tar med eget ljudsystem, så ni behöver inte ordna det själva.</p></li>
          </ul>
        </div>
        <div class="logistics-col youbring">
          <h3>Det här behöver vi från er</h3>
          <ul class="logi-list">
            <li><span class="logi-mark">→</span><p><b>En bild på scenen/platsen.</b> Så vi kan planera showen utifrån ytan ni har.</p></li>
            <li><span class="logi-mark">→</span><p><b>Förväntat antal i publiken.</b> Hjälper oss anpassa placering och säkerhetsavstånd.</p></li>
            <li><span class="logi-mark">→</span><p><b>En eldvakt.</b> En frivillig person från er sida som håller en brandsläckare redo under showen.</p></li>
          </ul>
        </div>
      </div>
      <div class="note-strip">
        <span class="icon">*</span>
        <p><b>Bra att veta:</b> mörker är inget krav — elden syns bara som allra bäst efter mörkrets inbrott. Vi har gjort uppskattade shower i dagsljus också, så vi hittar en lösning oavsett tid på dygnet. Läs mer i <a class="link-decoration" href="/info-innan-bokning">info innan bokning</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="ctaband">
      <div>
        <h2>Redo att boka stora showen?</h2>
        <p>Skicka en bild på platsen och ert förväntade antal gäster, så återkommer vi med förslag.</p>
      </div>
      <a class="btn-dark" href="/boka">Boka stora showen</a>
    </div>
  </div>
</section>
