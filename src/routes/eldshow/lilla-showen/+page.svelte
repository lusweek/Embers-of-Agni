<script>
  import { lillaShowenPage } from "$lib/seo/lillaShowenPage";

  import heroImg from "$lib/images/design-reference/010a5936.webp";
  import g1 from "$lib/images/design-reference/010a5683.webp";
  import g2 from "$lib/images/design-reference/d6.webp";
  import g3 from "$lib/images/design-reference/010a6120.webp";
</script>

<!-- SEO -->
<svelte:head>
  <title>Lilla showen – 8 min Eldshow – Vilda Flammor</title>
  <meta name="description" content="Lilla showen är en kortare, mer intim version av vår elddans: 8 minuter koreograferad elddans till musik. Perfekt när tid eller yta är begränsad." />
  <script type="application/ld+json">
    {JSON.stringify(lillaShowenPage)}
  </script>
</svelte:head>

<p class="wrap"><span class="breadcrumb"><a href="/eldshow">Eldshow</a> / <span>Lilla showen</span></span></p>

<section class="hero-split">
  <div class="hero-split-grid">
    <div>
      <span class="eyebrow">Eldshow · Kompakt akt</span>
      <h1>Lilla showen</h1>
      <div class="hero-meta"><span><b>8 min</b> · scenlängd</span><span><b>Ser bäst ut</b> i mörker</span><span><b>2 artister</b></span></div>
      <p class="lead">En kortare, mer intim version av vår elddans — samma hantverk, samma känsla, komprimerad till en stark stund. Perfekt när tidsschemat är tight eller ytan mindre.</p>
      <a class="btn-primary" href="/boka">Boka lilla showen</a>
    </div>
    <div class="hero-photo ph"><img src={heroImg} alt="Duo dansar med eldkedjor" /></div>
  </div>
</section>

<section class="section lead-block">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Om showen</span>
      <h2>Kort, koncentrerad, minnesvärd</h2>
    </div>
    <p>Lilla showen är stora showens kompakta syskon — <b>8 minuter</b> koreograferad elddans till musik, med samma kvalitet och närvaro som vår signaturshow. Den passar perfekt när ni vill ha eld som en stark del av kvällen utan att bygga hela schemat kring den.</p>
    <p>Här används färre minuter och färre eldredskap. Det viktiga är dock inte antalet minuter — det är känslan som stannar kvar. Åtta minuter räcker gott för att gästerna ska minnas showen långt efteråt.</p>
    <p>Musik, tempo och kostym anpassas efter er stämning, precis som i stora showen.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Bibliotek</span>
      <h2>Från tidigare framträdanden</h2>
    </div>
    <div class="gallery">
      <div class="ph"><img src={g1} alt="Eldkonstnär med eldpoi i profil" /></div>
      <div class="ph"><img src={g2} alt="Eldkonstnär med eldfans i rörelse" /></div>
      <div class="ph"><img src={g3} alt="Eldkonstnär med eldhoop bakifrån" /></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Så funkar bokningen</span>
      <h2>Det här behöver ni veta</h2>
      <p>Detaljerna ni behöver veta innan ni bokar — vad vi tar hand om, och vad vi behöver av er.</p>
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
        <p><b>Bra att veta:</b> mörker är inget krav — elden syns bara som allra bäst efter mörkrets inbrott. Vi har gjort uppskattade shower i dagsljus också, så vi hittar en lösning oavsett tid på dygnet. Läs mer i <a class="link-decoration" href="/info-innan-bokning">info innan bokning</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="ctaband">
      <div>
        <h2>Redo att boka lilla showen?</h2>
        <p>Skicka en bild på platsen och ert förväntade antal gäster, så återkommer vi med förslag.</p>
      </div>
      <a class="btn-dark" href="/boka">Boka lilla showen</a>
    </div>
  </div>
</section>
