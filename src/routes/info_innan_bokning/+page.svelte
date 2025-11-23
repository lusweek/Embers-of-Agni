<script>
	import Devider from "$lib/assets/Devider.svelte";


</script>

<h1 class="h1-title">Info innan boking</h1>
<Devider />

<section class="booking-section">
    <div class="booking-info-container">
        <h2 class="h2-title">Musik</h2>
        <p class="paragraf">Vi har en högtalare av mindre sort, för ökad effekt använder vi gärna en större om ni har tillgängligt.</p>
    </div>

    <div class="booking-info-container">
        <h2 class="h2-title">Eldvakt</h2>
        <p class="paragraf">Vi önskar att en av er är ansvarig eldvakt åt oss. Ett enkelt men viktigt jobb utan krav på förkunskaper. Vi ger all information på plats eller över telefon om ni önskar. Det handlar om att stå vid brandfilt, vattenhink eller brandsläckare och vara beredd ifall något skulle hända.</p>
    </div>
        
    <div class="booking-info-container">
        <h2 class="h2-title">Vart och när passar eldshower?</h2>
        <p class="paragraf">Eldshower är som mest effektfulla på skymning eller när det blivit mörkt. Det går absolut att göra eldshower på dagen också, då har vi dessutom möjlighet att göra fler kast då kast generellt är svårt i mörker</p>
        <p class="paragraf">Att showa utomhus på grus eller sten är föredraget. Det går även utmärkt att showa på gräs eller trä men droppar från lampoljan samt värmen från machallerna kan skada gräset. Droppar från ampoljan kan lämna oljefläckar på trät.  </p>
        <p class="paragraf">Soloshowen kräver minst 5x6 m2 yta och duoshowen 8x8 m2 yta</p>
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