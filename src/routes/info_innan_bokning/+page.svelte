<script>
    import { innanBokning } from "$lib/seo/innanBokning";

	import Devider from "$lib/assets/Devider.svelte";
</script>

<!-- SEO -->
<svelte:head>
    <title>Info inför bokning av Eldshow – Embers of Agni</title>
    <meta name="description" content="All viktig information inför bokning av eldshow: säkerhet, platskrav, förberedelser och vad du behöver tänka på innan eventet." />
    <script type="application/ld+json">
        {JSON.stringify(innanBokning)}
    </script>
</svelte:head>

<h1 class="h1-title">Info innan bokning</h1>
<Devider />

<section class="booking-section">
    <div class="booking-info-container">   
        <h2 class="h2-title">Var och när passar eldshower?</h2>
        <p class="paragraf">Eld är som mest magiskt i mörker, därför passar det bäst med en eldshow i skymning eller när det mörknat. Vi kan även göra show på dagen om ni ändå önskar det.</p>
        <p class="paragraf">Vi gör våra shower utomhus, helst på en plan yta. Det bästa underlaget för oss är grus, asfalt, sten eller jord. För oss går även trä och gräs jättebra men träet kan få fläckar av lampoljan vi använder som bränsle och gräs kan ta skada av värmen och oljan.</p>
        <p class="paragraf">För att vi ska kunna ha säkerhetsavstånd, uttrycka oss i dansen och på ett säkert sätt kunna göra alla våra tricks kräver soloshowen ca 6x6 m och duoshowen 7x7 m. Mindre yta är eventuellt möjligt i utbyte mot mindre dans, färre tricks och kast.</p>
    </div>

    <div class="booking-info-container">
        <h2 class="h2-title">Eldvakt</h2>
        <p class="paragraf">Vi önskar att en av er är ansvarig eldvakt åt oss. Ett enkelt men viktigt jobb utan krav på förkunskaper. Vi ger all information på plats eller över telefon om ni önskar. Det handlar om att stå med brandfilt, vattenhink eller brandsläckare och vara beredd ifall något skulle hända.</p>
    </div>

    <div class="booking-info-container">
        <h2 class="h2-title">Ljud</h2>
        <p class="paragraf">Vi har en högtalare av mindre sort, för ökad effekt använder vi gärna en större om ni har tillgängligt.</p>
    </div>

</section>

<Devider />


<style>
    .booking-section{
        width: 500px;
        max-width: 90vw;
        margin: auto;
    }

    .booking-info-container{
        margin: 100px 0;
    }

    .booking-info-container p{
        text-align: justify;
    }

</style>