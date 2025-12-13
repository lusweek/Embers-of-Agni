<script>

// DENNA FIL ANVÄNDS INTE. HomeErbjudandenUtanLED ANVÄNDS ISTÄLLET. 
// SKILLNADEN ÄR HUR KORTEN ÄR BYGGDA SAMT UPPDATERINGAR SOM EJ ÄR GJORDA HÄR

	import elinSerUpp from '$lib/images/home/elin_karna_serupp.webp';
	import lukasFans from '$lib/images/home/lukas_roots_fans.webp';
	import elinBurnoff from '$lib/images/om_oss/elin_burnoff.webp';

	import Button from '$lib/assets/button.svelte';
</script>

<section class="marginal-bott flex w-full flex-col items-center md:px-0">
	<!-- Semerubrik / bold text -->
	<p class="undertitle">
		Proffsiga och välkoreograferade eldshower med dans och teknik med känsla av kraft, lek och flow
	</p>

	<!-- Kort nr 1 -->
	<div class="card card-bg m-3 w-[90%] max-w-[400px] shadow-sm">
	<figure>
		<img
		src={elinSerUpp}
		alt="Elin gör en pose med eldfacklor" />
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
	<!-- Wrappar de 2 små korten -->
	<div class="flex flex-wrap justify-between w-[95%] max-w-400px">
		<!-- Kort nr 2 start -->
		<div class="card card-bg m-3 w-[42%] max-w-[300px] shadow-sm">
		<figure>
			<img
			src={elinBurnoff}
			alt="Elin gör en pose med eldfacklor" />
		</figure>
		<div class="card-body p-2 flex items-center text-center">
			<h2 class="card-title flex items-center">LED-show</h2>
			<p>Effektfull färgglad dans som lyser i mörkret</p>
			<div class="card-actions justify-end">
				<Button 
					href="/LED-shower"
					label="Läs mer"
				/>
			</div>
		</div>
		</div>

		<!-- Kort nr 2 slut -->
		<!-- Kort nr 3 start  -->

		<div class="card card-bg m-3 w-[42%] max-w-[300px] shadow-sm">
		<figure>
			<img
			src={lukasFans}
			alt="Elin gör en pose med eldfacklor" />
		</figure>
		<div class="card-body p-2 flex items-center text-center">
			<h2 class="card-title flex items-center">Prova på flowarts</h2>
			<p>Upplev känslan av flow med stav, poi och rockring</p>
			<div class="card-actions justify-end">
				<Button 
					href="/prova_pa_flowarts"
					label="Läs mer"
				/>
			</div>
		</div>
		</div>

		<!-- Kort nr 3 slut -->
	<!-- Stänger kort-wrappen -->
	</div>

</section>

<style>

	.card-bg {
	background: linear-gradient(97deg, rgb(122 95 90) 0%, rgb(115 38 38) 100%);
	}

	.marginal-bott{
		/* margin-bottom: 50px; */
	}
</style>