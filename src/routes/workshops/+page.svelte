<script>
  import { provaPaFlowarts } from "$lib/seo/provaPaFlowartsPage";

  import heroImg from "$lib/images/design-reference/workshop-blured.webp";
</script>

<!-- SEO -->
<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(provaPaFlowarts)}
  </script>
  <title>Workshops – Prova på Flowarts – Vilda Flammor</title>
  <meta name="description" content="Vi tar med stavar, poi och rockringar och låter era gäster testa på — fritt som mingel-aktivitet eller styrt som workshop. Passar barn, vuxna och team-building." />
</svelte:head>

<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow">Workshops</span>
      <h1>Prova på flowarts</h1>
      <p class="lead">Vi tar med oss stavar, poi och rockringar och låter era gäster testa på — antingen fritt som en mingel-aktivitet, eller mer styrt som en workshop.</p>
      <a class="btn-primary" href="/boka">Boka workshop</a>
    </div>
    <div class="hero-img"><img src={heroImg} alt="Workshop med rockring, dagtid" /></div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Två sätt att köra det</span>
      <h2>Fritt prova-på eller styrd workshop</h2>
      <p>Vi anpassar upplägget efter vad som passar ert event bäst.</p>
    </div>
    <div class="formats">
      <div class="format-card">
        <h3>Prova-på</h3>
        <p>Vi finns på plats med utrustningen och låter gästerna testa i sin egen takt — en avslappnad, lekfull mingel-aktivitet som passar in var som helst under kvällen.</p>
      </div>
      <div class="format-card">
        <h3>Workshop</h3>
        <p>Ett mer strukturerat pass där vi guidar gruppen igenom grunderna. För barn blir det lekfull kroppskontroll, för vuxna handlar det om att lära sig grunderna i flowarts och/eller team-building.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Se det i rörelse</span>
      <h2>Fyra redskap, fyra korta klipp</h2>
    </div>
    <div class="videos">
      <div class="video-card">
        <h3>Stav</h3>
        <div class="video-frame">
          <span class="play-icon">▶</span>
          <span class="ph-label">VIDEO: Stav — grundflow</span>
        </div>
      </div>
      <div class="video-card">
        <h3>Dubbelstav</h3>
        <div class="video-frame">
          <span class="play-icon">▶</span>
          <span class="ph-label">VIDEO: Dubbelstav — grundflow</span>
        </div>
      </div>
      <div class="video-card">
        <h3>Rockring</h3>
        <div class="video-frame">
          <span class="play-icon">▶</span>
          <span class="ph-label">VIDEO: Rockring — grundflow</span>
        </div>
      </div>
      <div class="video-card">
        <h3>Poi</h3>
        <div class="video-frame">
          <span class="play-icon">▶</span>
          <span class="ph-label">VIDEO: Poi — grundflow</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Utrustning</span>
      <h2>Detta är träningsutrustningen vi besitter</h2>
    </div>
    <div class="equip">
      <div class="equip-grid">
        <div><div class="equip-num">15</div><div class="equip-label">Långa stavar</div></div>
        <div><div class="equip-num">15</div><div class="equip-label">Dubbelstavar</div></div>
        <div><div class="equip-num">20</div><div class="equip-label">Rockringar</div></div>
        <div><div class="equip-num">20</div><div class="equip-label">Par poi</div></div>
      </div>
      <p class="equip-note">Gott om utrustning för större grupper — hör av er så hjälper vi er räkna ut vad som passar ert antal gäster.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Passar för</span>
      <h2>En annorlunda mingel-aktivitet</h2>
    </div>
    <div class="taglist">
      <span>Barn</span><span>Vuxna</span><span>Team-building</span><span>Företagsevent</span><span>Kalas</span><span>Festival</span><span>Kulturevent</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="ctaband">
      <div>
        <h2>Vill ni prova?</h2>
        <p>Berätta om ert event så föreslår vi ett upplägg.</p>
      </div>
      <a class="btn-dark" href="/boka">Boka workshop</a>
    </div>
  </div>
</section>
