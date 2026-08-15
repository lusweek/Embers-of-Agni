<script>
  import { homePage } from "$lib/seo/homePage.js";

  import heroVideo from "$lib/videos/hero-loop.mp4";
  import heroPoster from "$lib/videos/hero-loop-poster.jpg";
  import eldshowTicket from "$lib/images/design-reference/hero.webp";
  import workshopTicket from "$lib/images/design-reference/workshop-blured.webp";
  import aboutImg from "$lib/images/design-reference/010a5607.webp";

  import logoSandra from "$lib/images/logos/sandra.jpeg";
  import logoOldergarden from "$lib/images/logos/oldergarden.png";
  import logoFirstCamp from "$lib/images/logos/first-camp.png";
  import logoKalmarCity from "$lib/images/logos/kalmar-city.png";

  import film1 from "$lib/images/design-reference/till-mail-2.webp";
  import film2 from "$lib/images/design-reference/sa106203.webp";
  import film3 from "$lib/images/design-reference/turbostav-bra-5.webp";
  import film4 from "$lib/images/design-reference/7r406884.webp";
  import film5 from "$lib/images/design-reference/7r407277.webp";
  import film6 from "$lib/images/design-reference/010a5625.webp";
  import film7 from "$lib/images/design-reference/010a5913.webp";
  import film8 from "$lib/images/design-reference/010a5977.webp";
  import film9 from "$lib/images/design-reference/att-tm-43zde44nan2aiy9zeg-xlhfjqap2dcfeakv6c4z0.webp";
  import film10 from "$lib/images/design-reference/dubbelstaw.webp";
  import film11 from "$lib/images/design-reference/elin-1.webp";
  import film12 from "$lib/images/design-reference/img-1913.webp";
  import film13 from "$lib/images/design-reference/lukas-karna-spin.webp";
  import film14 from "$lib/images/design-reference/oss-3.webp";
  import film15 from "$lib/images/design-reference/pxl-20260215-183826396.webp";

  import film16 from "$lib/images/first-camp/lifebym-lukas-009.webp";
  import film17 from "$lib/images/first-camp/lifebym-lukas-039.webp";
  import film18 from "$lib/images/first-camp/lifebym-lukas-044.webp";
  import film19 from "$lib/images/first-camp/lifebym-lukas-076.webp";
  import film20 from "$lib/images/first-camp/lifebym-lukas-079.webp";
  import film21 from "$lib/images/first-camp/lifebym-lukas-087.webp";
  import film22 from "$lib/images/first-camp/lifebym-lukas-095.webp";
  import film23 from "$lib/images/first-camp/lifebym-lukas-098.webp";

  const filmImages = [
    { src: film1, alt: "Eldshow bild" },
    { src: film2, alt: "Eldshow på scen" },
    { src: film3, alt: "Eldkonstnär med turbostav" },
    { src: film4, alt: "Eldkonstnär med eldredskap" },
    { src: film5, alt: "Eldkonstnär med eldredskap" },
    { src: film6, alt: "Eldkonstnär med eldredskap" },
    { src: film7, alt: "Eldkonstnär med eldredskap" },
    { src: film8, alt: "Eldkonstnär med eldredskap" },
    { src: film9, alt: "Eldshow bild" },
    { src: film10, alt: "Duon med dubbelstav" },
    { src: film11, alt: "Elin med eldredskap" },
    { src: film12, alt: "Eldshow bild" },
    { src: film13, alt: "Lukas med eldredskap" },
    { src: film14, alt: "Vilda Flammor porträtt" },
    { src: film15, alt: "Eldshow bild" },
    { src: film16, alt: "Duo krönd med eldkrona på stranden" },
    { src: film17, alt: "Eldkonstnär med eldkedjor framför publik" },
    { src: film18, alt: "Eldkonstnär med eldkedjor i solnedgång" },
    { src: film19, alt: "Eldkonstnär med eldkedjor och publik" },
    { src: film20, alt: "Eldkonstnär med kryssade eldstavar" },
    { src: film21, alt: "Eldkonstnär med eldring i rörelse" },
    { src: film22, alt: "Eldkonstnär balanserar eldstav" },
    { src: film23, alt: "Eldkonstnär med eldstavar i vinklat kryss" }
  ];

  let lightboxImg = null;

  function openLightbox(img) {
    lightboxImg = img;
  }

  function closeLightbox() {
    lightboxImg = null;
  }
</script>

<!-- SEO -->
<svelte:head>
  <title>Eldshow, workshops & elduppträdanden – Vilda Flammor</title>
  <meta name="description" content="Vilda Flammor bjuder på koreograferad elddans till musik och workshops i flowarts. Eldshow och upplevelser för bröllop, företagsevent och festivaler." />
  <script type="application/ld+json">
    {JSON.stringify(homePage)}
  </script>
</svelte:head>

<section class="hero-full hero-home">
  <div class="hero-bg">
    <video
      src={heroVideo}
      poster={heroPoster}
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      aria-hidden="true"
    ></video>
  </div>
  <div class="wrap hero-content">
    <span class="eyebrow">Eldshow · workshops</span>
    <h1>Vi sätter scenen i brand</h1>
    <p class="lead">15 minuter koreograferad elddans — byggd för scenen, festen och festivalen.</p>
    <div class="hero-ctas">
      <a class="btn-primary" href="/boka">Boka vår show</a>
      <a class="btn-ghost" href="/bibliotek">Se biblioteket</a>
    </div>
  </div>
</section>

<section class="filmstrip">
  <div class="filmstrip-viewport">
    <div class="filmrow animate">
      {#each [...filmImages, ...filmImages] as img}
        <figure on:click={() => openLightbox(img)}>
          <img src={img.src} alt={img.alt} loading="lazy" />
        </figure>
      {/each}
    </div>
  </div>
  <div class="wrap filmstrip-cta">
    <a href="/bibliotek">Se hela biblioteket →</a>
  </div>
</section>

<section class="proof">
  <div class="wrap">
    <div class="section-head center" style="margin:0 auto 48px;text-align:center;">
      <span class="eyebrow">Recensioner</span>
      <h2>Vad kunderna säger</h2>
    </div>
    <div class="proof-quotes">
      <div class="quote">
        <span class="quote-mark">"</span>
        <p>En udda och mycket magisk eldshow av mycket hög kvalite med oerhört skickliga aktörer.</p>
        <div class="quote-name">Robert Oldergarden</div>
        <div class="quote-role">Glaskonstnär samt ägare av Oldergaard GlasHytta &amp; Atelje</div>
      </div>
      <div class="quote">
        <span class="quote-mark">"</span>
        <p>Fler recensioner kommer</p>
        <div class="quote-name"></div>
        <div class="quote-role"></div>
      </div>
      <div class="quote">
        <span class="quote-mark">"</span>
        <p>Fler recensioner kommer</p>
        <div class="quote-name"></div>
        <div class="quote-role"></div>
      </div>
    </div>
    <div class="proof-strip">
      <div class="proof-strip-label">Har synts på</div>
      <div class="logos">
        <a class="logo-slot" href="https://sandraevent.se/" target="_blank" rel="noopener noreferrer">
          <img src={logoSandra} alt="Sandra Event, Kalmar" />
        </a>
        <a class="logo-slot" href="https://oldergaard.se/" target="_blank" rel="noopener noreferrer">
          <img src={logoOldergarden} alt="Robert Oldergårdens Glashytta, Öland" />
        </a>
        <a class="logo-slot" href="https://firstcamp.se/" target="_blank" rel="noopener noreferrer">
          <img src={logoFirstCamp} alt="First Camp" />
        </a>
        <!-- <a class="logo-slot" href="https://kalmarcity.com/" target="_blank" rel="noopener noreferrer">
          <img src={logoKalmarCity} alt="Kalmar City" />
        </a> -->
      </div>
    </div>
  </div>
</section>

<section class="section section-xl">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Boka in oss</span>
      <h2>Vad vi erbjuder</h2>
      <p>Upplev konsten som publik eller prova själv.</p>
    </div>
    <div class="cards cards-2">
      <div class="ticket">
        <div class="ticket-img"><img src={eldshowTicket} alt="Duon Vilda Flammor med eldmålade ansikten och eldredskap" /></div>
        <div class="ticket-body">
          <h3>Eldshow</h3>
          <p>15 min elddans, koreograferad till musik i olika tempon. Musik, kostym och känsla skräddarsys efter eventet.</p>
          <a href="/eldshow">Läs mer om eldshow →</a>
        </div>
      </div>
      <div class="ticket">
        <div class="ticket-img"><img src={workshopTicket} alt="Elin håller hula-hoop-workshop med barn" /></div>
        <div class="ticket-body">
          <h3>Workshops</h3>
          <p>Lek för barn, koordination och team-building för vuxna. Perfekt uppvärmning eller mingel-aktivitet.</p>
          <a href="/workshops">Läs mer om workshops →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="about-clip">
  <div class="wrap about-grid">
    <div class="about-img"><img src={aboutImg} alt="Eldkonstnär jonglerar med eldstav i stenvalv" /></div>
    <div class="about-text">
      <span class="eyebrow">Vilka vi är</span>
      <h2>Duon Vilda Flammor</h2>
      <p>Vi bygger varje show kring musiken och elden vi själva brinner för — sen formar vi den för scenen ni ger oss, från intim bröllopsfest till stor festivalscen.</p>
      <div class="taglist">
        <span>Bröllop</span><span>Företagsevent</span><span>Festival</span><span>Kulturevenemang</span><span>Kalas</span>
      </div>
      <a class="btn-primary" href="/om-oss" style="display:inline-block;margin-top:26px;">Läs mer om oss</a>
    </div>
  </div>
</section>

{#if lightboxImg}
  <div class="film-lightbox open" on:click={closeLightbox}>
    <div class="film-lightbox-close" on:click|stopPropagation={closeLightbox}>✕</div>
    <img src={lightboxImg.src} alt={lightboxImg.alt} on:click|stopPropagation />
  </div>
{/if}

<svelte:window on:keydown={(e) => { if (e.key === "Escape") closeLightbox(); }} />
