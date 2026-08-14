<script>
  import { storaShowenPage } from "$lib/seo/storaShowenPage";

  import heroImg from "$lib/images/design-reference/sparcle-blurred-faces.webp";
  import g1 from "$lib/images/design-reference/010a5795.webp";
  import g2 from "$lib/images/design-reference/7r407477.webp";
  import g3 from "$lib/images/design-reference/7r408184.webp";
</script>

<!-- SEO -->
<svelte:head>
  <title>Stora showen – 15 min Eldshow – Vilda Flammor</title>
  <meta name="description" content="Stora showen är vår signaturupplevelse: 15 minuter fullständigt koreograferad elddans till musik. Kvällens klimax för event, bröllop och festivaler." />
  <script type="application/ld+json">
    {JSON.stringify(storaShowenPage)}
  </script>
</svelte:head>

<p class="wrap"><span class="breadcrumb"><a href="/eldshow">Eldshow</a> / <span>Stora showen</span></span></p>

<section class="hero-inline">
  <div class="hero-bg">
    <img src={heroImg} alt="Eldkonstnär med gnistregn" fetchpriority="high" />
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
    <p>Stora showen är vår signaturupplevelse — <b>15 minuter</b> fullständigt koreograferad elddans till musik i olika tempon. Det här är showen vi rekommenderar när ni vill att elden ska vara kvällens huvudnummer.</p>
    <p>Dessa 15 minuter tillåter oss att använda ett stort antal av våra eldredskap på scen vilket skapar en dynamisk upplevelse för publiken. Man vet aldrig vad som kan komma ut på scen härnäst. Vårt mål är att leverera en upplevelse gästerna minns långt efter att elden har slocknat.</p>
    <p>Musik, tempo och kostym anpassas efter stämningen ni önskar. Showen fungerar lika bra till en invigning som ett dramatiskt avbrott mitt i festen eller en tydlig final mot slutet av kvällen.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Bibliotek</span>
      <h2>Från tidigare framträdanden</h2>
    </div>
    <div class="gallery-masonry">
      <figure><img src={g1} alt="Eldkonstnär med eldstavar framför träd" loading="lazy" /></figure>
      <figure><img src={g2} alt="Duo med eldstavar i stenvalv" loading="lazy" /></figure>
      <figure><img src={g3} alt="Eldkonstnär med eldpoi utomhus" loading="lazy" /></figure>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Så funkar bokningen</span>
      <h2>Det här behöver ni veta</h2>
    </div>

    <div class="logistics">
      <div class="logistics-grid">
        <div class="logistics-col weown">
          <h3>Det här sköter vi</h3>
          <ul class="logi-list">
            <li><span class="logi-mark">✓</span><p><b>Säkerhet.</b> Lukas är utbildad brandman och pyrotekniker. Vi har båda stor erfarenhet av eldshower — säkerhet är alltid vår högsta prioritet, för artister, publik och omgivningen.</p></li>
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
        <p><b>Bra att veta:</b> mörker är inget krav — elden syns bara som allra bäst efter mörkrets inbrott. Vi har gjort uppskattade shower i dagsljus, så vi hittar en lösning oavsett tid på dygnet. Läs mer i <a class="link-decoration" href="/info-innan-bokning">info innan bokning</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="ctaband">
      <div>
        <h2>Redo att boka stora showen?</h2>
        <p>Berätta om ert event så återkommer vi med förslag.</p>
      </div>
      <a class="btn-dark" href="/boka">Boka stora showen</a>
    </div>
  </div>
</section>
