<script>
  import { fireshowOffer } from "$lib/seo/fireshowOfferPage";

  import heroImg from "$lib/images/design-reference/eldshow-hero.webp";
  import storaImg from "$lib/images/design-reference/sparcle-blurred-faces.webp";
  import lillaImg from "$lib/images/first-camp/lifebym-lukas-060.webp";
  import adaptImg from "$lib/images/design-reference/kansla.webp";

  import g1 from "$lib/images/design-reference/soloshow-7a2f2d1d.webp";
  import g2 from "$lib/images/design-reference/lukas-3.webp";
  import g3 from "$lib/images/design-reference/010a5573.webp";
  import g4 from "$lib/images/design-reference/010a6100.webp";
  import g5 from "$lib/images/design-reference/elin-karna-serupp.webp";
</script>

<!-- SEO -->
<svelte:head>
  <title>Eldshow för Event & Festivaler – Vilda Flammor</title>
  <meta name="description" content="Koreograferad elddans till musik. Läs om stora showen och lilla showen och boka en eldshow för event, bröllop, festivaler och företagsevent." />
  <script type="application/ld+json">
    {JSON.stringify(fireshowOffer)}
  </script>
</svelte:head>

<section class="hero-full">
  <div class="hero-bg">
    <img src={heroImg} alt="Duon Vilda Flammor dansar med eldkedjor" fetchpriority="high" />
  </div>
  <div class="wrap hero-content">
    <span class="eyebrow">Eldshow</span>
    <h1>Elden dansar till musiken</h1>
    <p class="lead">Koreograferad elddans, byggd kring folk- och elektronisk musik med rytmer vi själva brinner för. Musik, tempo och känsla kan alltid anpassas efter ert tillfälle.</p>
    <div class="hero-ctas">
      <a class="btn-primary" href="/boka">Boka vår eldshow</a>
      <a class="btn-ghost" href="/bibliotek">Se bibliotek</a>
    </div>
  </div>
</section>

<section class="section section-xl">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Två format</span>
      <h2>Stora och lilla showen</h2>
      <p>Samma hantverk, samma känsla — skalat efter hur mycket scen och tid ni har.</p>
    </div>
    <div class="shows">
      <div class="show-card">
        <div class="show-img"><img src={storaImg} alt="Eldkonstnär med gnistregn" /></div>
        <div class="show-body">
          <span class="show-tag">Huvudakt</span>
          <h3>Stora showen</h3>
          <span class="show-meta">15 minuter</span>
          <p>Vår signaturshow — en fullständig koreograferad elddans till musik i olika tempon. Kvällens klimax, byggd för scen och stor publik. Passar företagsevent, bröllop och festivaler där showen ska vara huvudnumret.</p>
          <a href="/eldshow/stora-showen">Läs mer om stora showen →</a>
        </div>
      </div>
      <div class="show-card">
        <div class="show-img"><img src={lillaImg} alt="Eldkonstnär med turbostav vid vattnet" /></div>
        <div class="show-body">
          <span class="show-tag">Kompakt akt</span>
          <h3>Lilla showen</h3>
          <span class="show-meta">8 minuter</span>
          <p>En kortare, mer intim version av vår elddans — perfekt när tidsschemat är tightare eller platsen mindre. Samma känsla och kvalitet, komprimerad till en stark, minnesvärd stund.</p>
          <a href="/eldshow/lilla-showen">Läs mer om lilla showen →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-xl adapt">
  <div class="wrap adapt-grid">
    <div class="adapt-img"><img src={adaptImg} alt="Elin snöar eldstavar själv" /></div>
    <div>
      <span class="eyebrow">Skräddarsytt för tillfället</span>
      <h2 style="font-size:36px;">Anpassat efter er känsla</h2>
      <ul class="adapt-list">
        <li><span class="adapt-num">*</span><p><b>Musik</b> — vi väljer eller kombinerar spår efter eventets stämning, från lugnt och stämningsfullt till högtempo.</p></li>
        <li><span class="adapt-num">*</span><p><b>Känsla</b> — samma koreografi kan kännas högtidlig, lekfull eller dramatisk beroende på vad tillfället kräver.</p></li>
        <li><span class="adapt-num">*</span><p><b>Kostym</b> — vi anpassar kostym och uttryck så att showen passar in i eventets helhet.</p></li>
      </ul>
    </div>
  </div>
</section>

<section class="section section-xl">
  <div class="wrap">
    <div class="section-head center">
      <span class="eyebrow">Passar för</span>
      <h2>Byggt för många sorters tillfällen</h2>
    </div>
    <div class="taglist center">
      <span>Företagsfest</span><span>Bröllop</span><span>Kulturevent</span><span>Festival</span><span>Födelsedagsfest</span><span>Högtider</span>
    </div>
  </div>
</section>

<section class="section section-xl">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Bibliotek</span>
      <h2>Bilder från showerna</h2>
    </div>
    <div class="gallery-masonry">
      <figure><img src={g1} alt="Eldkonstnär med eldstav framför trumslagare" loading="lazy" /></figure>
      <figure><img src={g2} alt="Eldjonglör med eldpoi framför publik" loading="lazy" /></figure>
      <figure><img src={g3} alt="Eldshow framför Sandra Event-skylten" loading="lazy" /></figure>
      <figure><img src={g4} alt="Duo med eldpoi utomhus" loading="lazy" /></figure>
      <figure><img src={g5} alt="Eldkonstnär med eld i klippgrotta" loading="lazy" /></figure>
    </div>
  </div>
</section>

<section class="section section-xl">
  <div class="wrap">
    <div class="ctaband">
      <div>
        <h2>Redo att boka elden?</h2>
        <p>Berätta om ert event så hittar vi bästa lösningen tillsammans.</p>
      </div>
      <a class="btn-dark" href="/boka">Boka eldshow</a>
    </div>
  </div>
</section>
