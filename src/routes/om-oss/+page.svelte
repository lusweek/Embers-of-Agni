<script>
  import { about } from "$lib/seo/about";

  import storyImg1 from "$lib/images/design-reference/embers-of-agni.webp";
  import storyImg2 from "$lib/images/design-reference/010a5936-8061093d.webp";
</script>

<!-- SEO -->
<svelte:head>
  <title>Om oss – Eldartister & Flowartsinstruktörer – Vilda Flammor</title>
  <meta name="description" content="Lär känna Vilda Flammor. Eldkonstnärer som bygger varje show kring musiken och elden vi själva brinner för, med säkerhet som högsta prioritet." />
  <script type="application/ld+json">
    {JSON.stringify(about)}
  </script>
</svelte:head>

<section class="hero-simple">
  <div class="wrap">
    <span class="eyebrow">Om oss</span>
    <h1>Duon Vilda Flammor</h1>
    <p class="lead">Eldkonstnärer som bygger varje show kring musiken och elden vi själva brinner för.</p>
  </div>
</section>

<section class="section">
  <div class="wrap-wide">
    <div class="story-grid">
      <div class="story-img"><img src={storyImg1} alt="Eldkonstnär formar ett eldmoln med två eldstavar" /></div>
      <div class="story-text">
        <span class="eyebrow">Vår historia</span>
        <h2 style="font-size:34px;margin-bottom:20px;">Elden som blev ett hantverk</h2>
        <p>Vilda Flammor började som en fascination för elden själv — det farliga, vackra elementet som få vågar komma nära. Det som en gång var lek och nyfikenhet har blivit ett hantverk vi tränat och förfinat, show efter show.</p>
        <p>Idag väver vi ihop eldkonst med <b>musik från olika kulturer och tempon</b> — musik vi själva älskar att uppträda till. Varje koreografi byggs med samma noggrannhet oavsett om scenen är en bröllopsfest eller ett stort företagsevent.</p>
      </div>
    </div>
  </div>
</section>

<section class="section values">
  <div class="wrap">
    <div style="text-align:center;max-width:600px;margin:0 auto 48px;">
      <span class="eyebrow">Vad som driver oss</span>
      <h2 style="font-size:34px;">Tre saker vi aldrig kompromissar med</h2>
    </div>
    <div class="values-grid">
      <div class="value-card">
        <div class="value-head"><span class="value-mark">*</span><h3>Säkerheten</h3></div>
        <p>Eld är oförlåtande om man slarvar. Säkerhet för både artister och publik är alltid vår högsta prioritet.</p>
      </div>
      <div class="value-card">
        <div class="value-head"><span class="value-mark">*</span><h3>Hantverket</h3></div>
        <p>Varje rörelse är tränad, upprepad och förfinad. Det som ser farligt och fritt ut på scen är i grunden noggrant kontrollerat.</p>
      </div>
      <div class="value-card">
        <div class="value-head"><span class="value-mark">*</span><h3>Musiken</h3></div>
        <p>Vi bygger showerna kring musik vi själva brinner för — men anpassar alltid känsla och tempo efter ert tillfälle.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap-wide">
    <div class="story-grid reverse">
      <div class="story-img"><img src={storyImg2} alt="Duo dansar med eldkedjor" /></div>
      <div class="story-text">
        <span class="eyebrow">Var vi passar in</span>
        <h2 style="font-size:34px;margin-bottom:20px;">Från intima fester till stora scener</h2>
        <p>Vi har uppträtt på allt från bröllop och födelsedagskalas till festivaler och stora företagsevent. Varje uppdrag är olika, och det är precis så vi vill ha det — vi är flexibla med tema, musik och kostym, men aldrig med kvaliteten.</p>
        <div class="taglist">
          <span>Bröllop</span><span>Företagsevent</span><span>Festival</span><span>Kulturevenemang</span><span>Kalas</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="ctaband">
      <div>
        <h2>Vill ni ha oss på ert event?</h2>
        <p>Berätta om tillfället så hjälper vi er hitta rätt show.</p>
      </div>
      <a class="btn-dark" href="/boka">Boka oss</a>
    </div>
  </div>
</section>
