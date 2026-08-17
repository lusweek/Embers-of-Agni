<script>
    import Seo from "$lib/components/Seo.svelte";
    import { innanBokning } from "$lib/seo/innanBokning";

	import Devider from "$lib/assets/Devider.svelte";
</script>

<Seo
    title="Info inför bokning av Eldshow – Vilda Flammor"
    description="All viktig information inför bokning av eldshow: säkerhet, platskrav, förberedelser och vad du behöver tänka på innan eventet."
    path="/info-innan-bokning"
    image="/og/boka.jpg"
    jsonLd={innanBokning}
/>

<h1 class="h1-title">Info innan bokning</h1>
<Devider />

<section class="wrap booking-section">
    <div class="info-card">
        <h2>Var och när passar eldshower?</h2>
        <p>Eld är som mest magiskt i mörker, därför passar det bäst med en eldshow i skymning eller när det mörknat. Vi kan även göra show på dagen om ni ändå önskar det.</p>
        <p>Vi gör våra shower utomhus, helst på en plan yta. Det bästa underlaget för oss är grus, asfalt, sten eller jord. För oss går även trä och gräs jättebra men träet kan få fläckar av lampoljan vi använder som bränsle och gräs kan ta skada av värmen och oljan.</p>
        <p>För att vi ska kunna ha säkerhetsavstånd, uttrycka oss i dansen och på ett säkert sätt kunna göra alla våra tricks kräver soloshowen ca 6x6 m och duoshowen 7x7 m. Mindre yta är eventuellt möjligt i utbyte mot mindre dans, färre tricks och kast.</p>
    </div>

    <div class="info-card">
        <h2>Eldvakt</h2>
        <p>Vi önskar att en av er är ansvarig eldvakt åt oss. Ett enkelt men viktigt jobb utan krav på förkunskaper. Vi ger all information på plats eller över telefon om ni önskar. Det handlar om att stå med brandfilt, vattenhink eller brandsläckare och vara beredd ifall något skulle hända.</p>
    </div>

    <div class="info-card">
        <h2>Ljud</h2>
        <p>Vi har en högtalare av mindre sort, för ökad effekt använder vi gärna en större om ni har tillgängligt.</p>
    </div>

    <div class="ctaband" style="margin-top:48px;">
      <div>
        <h2>Redo att boka?</h2>
        <p>Nu vet ni vad som gäller-skicka in er förfrågan.</p>
      </div>
      <a class="btn-dark" href="/boka">Boka nu</a>
    </div>
</section>

<Devider />

<style>
    .booking-section{
        max-width: 700px;
        margin: 60px auto;
    }
</style>
