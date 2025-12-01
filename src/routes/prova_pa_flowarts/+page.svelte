<svelte:head>
	<title>Prova på Flowarts – Workshops & Eldkonst – Embers of Agni</title>
	<meta name="description" content="Prova på flowarts! Lär dig poi, stav, rockring och kreativ rörelse på ett tryggt och roligt sätt. Passar grupper, skolor, event och alla nivåer." />
</svelte:head>

<script>
	import Devider from '$lib/assets/Devider.svelte';
	import InfoBox from '$lib/components/InfoBox.svelte';

	import prova_pa_flowartsImg from '$lib/images/Prova på flowarts/prova_pa_flowarts.webp'

</script>

<!-- Titel + undertitel -->
<h1 class="h1-title">Prova på flowarts</h1>

<p class="undertitle">Visst ser det roligt ut! Vi lär gärna dig, dina vänner, kollegor, barn och ungdomar. Läs mer här under.</p>

<Devider />

<!-- Duowhow med tema -->

<InfoBox
title = "Prova på flowarts"
image = {prova_pa_flowartsImg}
fetchpriority = "high"
imageAlt = "Bild på Elin under workshop"
>
<p class="paragraf">Vi tar med rockringar, pois och stavar och lär ut hur man kan använda och leka med dessa redskap. Ser vi att någon har bra kontroll kan den personen dessutom få testa med eld (sjävklart i nyktert tillstånd). Passande antal deltagare till detta är upp till 25 personer.</p>
<p class="paragraf">Vi lär ut i 90 min och anpassar strukturen efter deltagarna.</p>
</InfoBox>

<Devider />