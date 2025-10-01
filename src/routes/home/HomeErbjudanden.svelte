<script>
	import elinSerUpp from '$lib/images/home/elin_karna_serupp.jpg';
	import lukasFans from '$lib/images/home/lukas_roots_fans.jpeg';
	import elinBurnoff from '$lib/images/om_oss/elin_burnoff.jpeg';

	import Button from '$lib/assets/button.svelte';
</script>

<section class="flex w-full flex-col items-center px-4 py-16 md:px-0">
	<!-- Semerubrik / bold text -->
	<h2 class="mb-8 max-w-3xl text-center text-xl font-bold md:text-3xl">
		Proffsiga och välkoreograferade eldshower med dans och teknik med känsla av kraft, lek och flow
	</h2>

	<!-- Kort nr 1 -->
<div class="card card-bg w-[95%] max-w-[300px] shadow-sm">
  <figure>
    <img
      src={elinSerUpp}
      alt="Elin gör en pose med eldfacklor" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Eldshower</h2>
    <p>Det som skiljer våra eldshower från andra är hur vi implementerar musiken i showen</p>
    <div class="card-actions justify-end">
	  	<Button 
			href="/"
			label="Se eldshower"
		/>
    </div>
  </div>
</div>

	<!-- Kort nr 1 slut -->


	<!-- Enstaka bild under texten -->
	<img src={elinSerUpp} alt="Eldshow 1" class="mb-6 w-full max-w-3xl rounded-lg object-cover" />

	<!-- Två bilder bredvid varandra -->
	<div class="flex w-full max-w-3xl flex-wrap justify-between gap-4">
		<img src={lukasFans} alt="Eldshow 2" class="w-[45%] rounded-lg object-cover" />
		<!-- Istället för bild -->
		<img src={elinBurnoff} alt="Eldshow 3" class="w-[45%] rounded-lg object-cover" />
	</div>
	
</section>


<style>
	.card-bg {
		background: linear-gradient(97deg,rgba(13, 9, 47, 1) 0%, rgba(9, 6, 31, 1) 100%);
	}
</style>