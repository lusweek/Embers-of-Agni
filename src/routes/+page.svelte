<script>
  import { homePage } from "$lib/seo/homePage.js";

  import heroImg from "$lib/images/home/hero.webp";
  import eldshowTicket from "$lib/images/eldshower/duoshow.webp";
  import workshopTicket from "$lib/images/Prova på flowarts/prova_pa_flowarts.webp";
  import aboutImg from "$lib/images/home/embers_of_agni_small.webp";

  import film1 from "$lib/images/home/se_mer_1.webp";
  import film2 from "$lib/images/eldshower/soloshow.webp";
  import film3 from "$lib/images/bilder/d311_small.webp";
  import film4 from "$lib/images/eldshower/duoshow_med_tema_small.webp";
  import film5 from "$lib/images/home/se_mer_4.webp";
</script>

<!-- SEO -->
<svelte:head>
  <title>Eldshow, workshops & elduppträdanden – Vilda Flammor</title>
  <meta name="description" content="Vilda Flammor bjuder på koreograferad elddans till folkmusik och workshops i flowarts. Eldshow och upplevelser för bröllop, företagsevent och festivaler." />
  <script type="application/ld+json">
    {JSON.stringify(homePage)}
  </script>
</svelte:head>

<section class="hero-full">
  <div class="hero-bg ph">
    <img src={heroImg} alt="Vilda Flammor - elddans i skymning" fetchpriority="high" />
  </div>
  <div class="wrap hero-content">
    <span class="eyebrow">Eldshow · workshops · styltgång</span>
    <h1>Släpp elden lös</h1>
    <p class="lead">15 minuter koreograferad elddans till folkmusik från hela världen — byggd för scenen, festen och festivalen.</p>
    <div class="hero-ctas">
      <a class="btn-primary" href="/boka">Boka vår show</a>
      <a class="btn-ghost" href="/bibliotek">Se biblioteket</a>
    </div>
  </div>
</section>

<section class="filmstrip">
  <div class="wrap">
    <div class="filmstrip-head">
      <span>Från våra shower</span>
      <a href="/bibliotek">Se hela biblioteket →</a>
    </div>
    <div class="filmrow">
      <figure><img src={film1} alt="Elddans i skymning" loading="lazy" /></figure>
      <figure><img src={film2} alt="Lukas burnoff" loading="lazy" /></figure>
      <figure><img src={film3} alt="Elddans med stav" loading="lazy" /></figure>
      <figure><img src={film4} alt="Duoshow med tema" loading="lazy" /></figure>
      <figure><img src={film5} alt="Elddans, stämningsbild" loading="lazy" /></figure>
    </div>
  </div>
</section>

<section class="proof">
  <div class="wrap">
    <div class="section-head center" style="margin:0 auto 48px;">
      <span class="eyebrow">Socialt bevis</span>
      <h2>Vad kunderna säger</h2>
      <p>Klistra in era bästa omdömen här — tre korta rader räcker för att bygga förtroende hos nya kunder.</p>
    </div>
    <div class="proof-quotes">
      <div class="quote">
        <span class="quote-mark">"</span>
        <p>Klistra in ett kundcitat här — gärna en mening om känslan showen gav på eventet.</p>
        <div class="quote-name">Namn Efternamn</div>
        <div class="quote-role">Roll, företag eller typ av event</div>
      </div>
      <div class="quote">
        <span class="quote-mark">"</span>
        <p>Klistra in ett andra citat här — t.ex. från en företagskund om professionalism och leverans.</p>
        <div class="quote-name">Namn Efternamn</div>
        <div class="quote-role">Roll, företag eller typ av event</div>
      </div>
      <div class="quote">
        <span class="quote-mark">"</span>
        <p>Klistra in ett tredje citat här — gärna från ett bröllop, kalas eller festival.</p>
        <div class="quote-name">Namn Efternamn</div>
        <div class="quote-role">Roll, företag eller typ av event</div>
      </div>
    </div>
    <div class="proof-strip">
      <div class="proof-strip-label">Har synts på</div>
      <div class="logos">
        <div class="logo-slot">Logotyp</div>
        <div class="logo-slot">Logotyp</div>
        <div class="logo-slot">Logotyp</div>
        <div class="logo-slot">Logotyp</div>
        <div class="logo-slot">Logotyp</div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Boka in oss</span>
      <h2>Vad vi erbjuder</h2>
      <p>Byggt kring samma hantverk och känsla.</p>
    </div>
    <div class="cards cards-2">
      <div class="ticket">
        <div class="ticket-img"><img src={eldshowTicket} alt="Elddans med stav i rörelse" /></div>
        <div class="ticket-body">
          <h3>Eldshow</h3>
          <p>15 min elddans, koreograferad till folkmusik i olika tempon. Musik, kostym och känsla skräddarsys efter eventet.</p>
          <a href="/eldshow">Läs mer om eldshow →</a>
        </div>
      </div>
      <div class="ticket">
        <div class="ticket-img"><img src={workshopTicket} alt="Workshop med ring, dagtid" /></div>
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
    <div class="about-img"><img src={aboutImg} alt="Duon Vilda Flammor dansar med eld tillsammans" /></div>
    <div class="about-text">
      <span class="eyebrow">Vilka vi är</span>
      <h2>Duon Vilda Flammor</h2>
      <p>Vi bygger varje show kring musiken och elden vi själva brinner för — sen formar vi om den för scenen ni ger oss, från intim bröllopsfest till stor festivalscen.</p>
      <div class="taglist">
        <span>Bröllop</span><span>Företagsevent</span><span>Festival</span><span>Kulturevenemang</span><span>Kalas</span>
      </div>
    </div>
  </div>
</section>
