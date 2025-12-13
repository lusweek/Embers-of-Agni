<script>
    import { priser } from "$lib/seo/priser";

	import Devider from "$lib/assets/Devider.svelte";
    import MessageForm from "$lib/components/MessageForm.svelte";


</script>

<!-- SEO -->
<svelte:head>
    <script type="application/ld+json">
        {JSON.stringify(priser)}
    </script>
    <title>Priser på Eldshow och workshops samt Bokning – Embers of Agni</title>
    <meta name="description" content="Se priser på våra eldshower och gör en bokningsförfrågan. Anpassade paket för event, festivaler och privata tillställningar." />
</svelte:head>

<!-- Titel + undertitel -->
<h1 class="h1-title">Priser & bokning</h1>

<p class="undertitle"></p>

<Devider />

<h2 class="h2-title">Priser</h2>

<div class="price-container">
    <p><span>Duoshow eld med tema</span><span>10 000 kr</span></p>
    <Devider width="100%" margin = "0" />
    
    <p><span>Duoshow eld</span><span>6 000 kr</span></p>
    <Devider width="100%" margin = "0" />
    
    <!-- <p><span>Duoshow LED</span><span>4 000 kr</span></p>
    <Devider width="100%" margin = "0" /> -->
    
    <p><span>Soloshow eld</span><span>4 000 kr</span></p>
    <Devider width="100%" margin = "0" />
    
    <p><span>Prova på flowarts</span><span>3 000 kr</span></p>
    <Devider width="100%" margin="0" />

</div>



<h2 class="h2-title">Paketpriser</h2>

<p class="undertitle">Nedan är exempel på paket. <br> Andra kan skapas vid förfrågan</p>

<div class="price-container">
    <p><span>Duoshow + <br> Prova på flowarts</span><span>11 000 kr</span></p>
    <Devider width="100%" margin="0" />

    <p><span>Duoshow med tema + <br> Prova på flowarts</span><span>12 000 kr</span></p>
    <Devider width="100%" margin="0" />

    <p><span>2 duoshower</span><span>10 000 kr</span></p>
    <Devider width="100%" margin="0" />

    <p><span>3 duoshower</span><span>13 000 kr</span></p>
    <Devider width="100%" margin="0" />

    <p><span>5 duoshower</span><span>17 000 kr</span></p>
    <Devider width="100%" margin="0" />

    <p><span>2 Duoshower + <br> 2 Prova på flowarts</span><span>20 000 kr</span></p>
    <Devider width="100%" margin="0" />

    <p><span>3 Duoshower + <br> 3 Prova på flowarts</span><span>29 000 kr</span></p>
    <Devider width="100%" margin="0" />

    <p><span>5 Duoshower + <br> 5 Prova på flowarts</span><span>35 000 kr</span></p>
    <Devider width="100%" margin="0" />

</div>

<h2 class="h2-title w-[400px]">Boka här</h2>
<p class="undertitle">Skicka ett meddelande, vi hör vi av oss inom kort. 
<br><br>
Läs gärna igenom <a class="link-decoration" href="/info_innan_bokning">info innan bokning</a> först.
</p>

<MessageForm />

<style>

    .price-container{
        width: 300px;
        max-width: 90vw;
        margin: 60px auto 100px auto;
    }

    .price-container p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

</style>