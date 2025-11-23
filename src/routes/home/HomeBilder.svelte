<script>
	import elinSerUpp from '$lib/images/home/elin_karna_serupp.webp';
	import lukasFans from '$lib/images/home/lukas_roots_fans.webp';
	import elinBurnoff from '$lib/images/om_oss/elin_burnoff.webp';
    import Button from '$lib/assets/button.svelte';
</script>

<section class="home-bilder-section">
	<!-- Bild nr 1 -->
	<div class="m-3 max-w-[400px] shadow-sm">
		<img src={elinSerUpp} alt="Elin gör en pose med eldfacklor" class="rounded" />
	</div>

	<!-- bild nr 1 slut -->
	<!-- Wrappar de 2 små Bilderna -->
	<div class="max-w-400px flex justify-between items-center">
		<!-- bild nr 2 start -->
		<div class="m-3 w-[42%] max-w-[300px] shadow-sm">
			<img src={elinBurnoff} alt="Elin gör en pose med eldfacklor" class="rounded" />
		</div>

		<!-- bild nr 2 slut -->
		<!-- bild nr 3 start  -->

		<div class="m-3 w-[42%] max-w-[300px] shadow-sm">
			<img src={lukasFans} alt="Elin gör en pose med eldfacklor" class="rounded" />
		</div>

		<!-- bild nr 3 slut -->
		<!-- Stänger bild-wrappen -->
	</div>

	<div class="my-3 flex w-[100%] justify-center">
		<Button href="/Media" label="Se fler bilder och videos" />
	</div>
</section>


<style>
	.home-bilder-section{
		width: 100%;
		max-width: 400px;
		width: 80vw;
		margin: 50px auto;

	}

	@media (min-width: 768px) {
  		.home-bilder-section {
			padding-left: 0;
			padding-right: 0;   /* md:px-0 */
		}
}

</style>