<script>
  import { fireshowOffer } from "$lib/seo/fireshowOfferPage";

  import heroImg from "$lib/images/eldshower/duoshow.webp";
  import storaImg from "$lib/images/eldshower/duoshow.webp";
  import lillaImg from "$lib/images/eldshower/duoshow_med_tema_small.webp";
  import adaptImg from "$lib/images/bilder/elin_karna_pose_galen_small.webp";

  import g1 from "$lib/images/bilder/d2_small.webp";
  import g2 from "$lib/images/bilder/d311_small.webp";
  import g3 from "$lib/images/bilder/d312_small.webp";
  import g4 from "$lib/images/bilder/d6_small.webp";
  import g5 from "$lib/images/eldshower/soloshow.webp";
</script>

<!-- SEO -->
<svelte:head>
  <title>Eldshow för Event & Festivaler – Vilda Flammor</title>
  <meta name="description" content="Koreograferad elddans till folkmusik. Läs om stora showen och lilla showen och boka en eldshow för event, bröllop, festivaler och företagsevent." />
  <script type="application/ld+json">
    {JSON.stringify(fireshowOffer)}
  </script>
</svelte:head>

<section class="hero-full">
  <div class="hero-bg ph">
    <img src={heroImg} alt="Eldshow vid skymning" fetchpriority="high" />
  </div>
  <div class="wrap hero-content">
    <span class="eyebrow">Eldshow</span>
    <h1>Elden dansar till er musik</h1>
    <p class="lead">Koreograferad elddans, byggd kring folkmusik och rytmer vi själva brinner för. Musik, tempo och känsla anpassas alltid efter ert tillfälle.</p>
    <div class="hero-ctas">
      <a class="btn-primary" href="/boka">Boka vår eldshow</a>
      <a class="btn-ghost" href="/bibliotek">Se bibliotek</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Två format</span>
      <h2>Stora showen eller lilla showen</h2>
      <p>Samma hantverk, samma känsla — skalat efter hur mycket scen och tid ni har.</p>
    </div>
    <div class="shows">
      <div class="show-card">
        <div class="show-img"><img src={storaImg} alt="Stora showen - eldshow med facklor" /></div>
        <div class="show-body">
          <span class="show-tag">Huvudakt</span>
          <h3>Stora showen</h3>
          <span class="show-meta">15 minuter</span>
          <p>Vår signaturshow — en fullständig koreograferad elddans till folkmusik i flera tempon. Kvällens klimax, byggd för scen och stor publik. Passar företagsevent, bröllop och festivaler där showen ska vara huvudnumret.</p>
          <a href="/eldshow/stora-showen">Läs mer om stora showen →</a>
        </div>
      </div>
      <div class="show-card">
        <div class="show-img"><img src={lillaImg} alt="Lilla showen - intim eldshow" /></div>
        <div class="show-body">
          <span class="show-tag">Kompakt akt</span>
          <h3>Lilla showen</h3>
          <span class="show-meta">8 minuter</span>
          <p>En kortare, mer intim version av vår elddans — perfekt när tidsschemat är tightare eller platsen mindre. Samma känsla och kvalitet, komprimerad till en stark, minnesvärd stund.</p>
          <a href="/eldshow/lilla-showen">Läs mer om lilla showen →</a>
        </div>
      </div>
    </div>
    <p style="color:var(--ink-dim);font-size:14.5px;margin-top:24px;max-width:600px;">Oavsett längd är målet detsamma: en känsla gästerna minns långt efter att elden har slocknat. Antalet minuter är sällan det som avgör.</p>
  </div>
</section>

<section class="section adapt">
  <div class="wrap adapt-grid">
    <div class="adapt-img"><img src={adaptImg} alt="Närbild kostym och eldredskap" /></div>
    <div>
      <span class="eyebrow">Skräddarsytt för tillfället</span>
      <h2 style="font-size:36px;">Anpassat efter er känsla</h2>
      <ul class="adapt-list">
        <li><span class="adapt-num">*</span><p><b>Musik</b> — vi väljer eller kombinerar spår efter eventets stämning, från lugnt och stämningsfullt till högtempo.</p></li>
        <li><span class="adapt-num">*</span><p><b>Känsla</b> — samma koreografi kan kännas högtidlig, lekfull eller dramatisk beroende på vad tillfället kräver.</p></li>
        <li><span class="adapt-num">*</span><p><b>Kostym</b> — vi anpassar kostym och uttryck så att showen passar in i eventets helhet, från tema till tribal känsla.</p></li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head center">
      <span class="eyebrow">Passar för</span>
      <h2>Byggt för många sorters tillfällen</h2>
    </div>
    <div class="taglist center">
      <span>Företagsfest</span><span>Bröllop</span><span>Kulturevent</span><span>Festival</span><span>Födelsedagsfest</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Bibliotek</span>
      <h2>Bilder från showerna</h2>
      <p>Bilder från våra tidigare eldshower.</p>
    </div>
    <div class="gallery">
      <div class="ph wide"><img src={g1} alt="Elddans i skymning" /></div>
      <div class="ph"><img src={g2} alt="Porträtt under eldshow" /></div>
      <div class="ph"><img src={g3} alt="Eldshow, silhuett" /></div>
      <div class="ph"><img src={g4} alt="Elddans med stav" /></div>
      <div class="ph wide"><img src={g5} alt="Elddans, stämningsbild" /></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="ctaband">
      <div>
        <h2>Redo att boka elden?</h2>
        <p>Berätta om ert event så föreslår vi stora eller lilla showen.</p>
      </div>
      <a class="btn-dark" href="/boka">Boka eldshow</a>
    </div>
  </div>
</section>
