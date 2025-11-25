<script>
	import eldshowImg from '$lib/images/home/eldshower.webp';
	import provaPaFlowartsImg from '$lib/images/home/prova_pa_flowarts.webp';


	import Button from '$lib/assets/button.svelte';
</script>

<section class="flex w-full flex-col items-center px-4 py-16 md:px-0">
	<!-- Semerubrik / bold text -->
	<p class="mb-8 max-w-2xl text-center text-xl md:text-3xl">
		Proffsiga och välkoreograferade eldshower med dans och teknik med känsla av kraft, lek och flow
	</p>

	<!-- Kort nr 1 -->
	<div class="card card-bg m-3 w-[90%] max-w-[400px] shadow-sm">
	<figure>
		<img
			src={eldshowImg}
			alt="Elin gör en pose med eldfacklor" 
			loading="lazy"
		/>
	</figure>
	<div class="card-body flex items-center">
		<h2 class="card-title">Eldshower</h2>
		<p>Det som skiljer våra eldshower från andra är hur vi implementerar musiken i showen</p>
		<div class="card-actions justify-end">
			<Button 
				href="/eldshower"
				label="Läs mer"
			/>
		</div>
	</div>
	</div>

		<!-- Kort nr 1 slut -->
         <!-- Kort nummer 2 start -->

        <div class="card card-bg m-3 w-[90%] max-w-[400px] shadow-sm">
	<figure>
		<img
			src={provaPaFlowartsImg}
			alt="Elin gör en pose med eldfacklor" 
			loading="lazy"
		/>
	</figure>
	<div class="card-body flex items-center">
		<h2 class="card-title">Prova på flowarts</h2>
		<p>Upplev känslan av flow med stav, poi och rockring</p>
		<div class="card-actions justify-end">
			<Button 
				href="/eldshower"
				label="Läs mer"
			/>
		</div>
	</div>
	</div>
	
		<!-- Kort nr 2 slut -->

</section>

<style>

	.card-bg {
	background: linear-gradient(97deg, rgb(122 95 90) 0%, rgb(115 38 38) 100%);
	}
</style>