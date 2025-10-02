<script>
	import elinSerUpp from '$lib/images/home/elin_karna_serupp.jpg';
	import lukasFans from '$lib/images/home/lukas_roots_fans.jpeg';
	import elinBurnoff from '$lib/images/om_oss/elin_burnoff.jpeg';
    import Button from '$lib/assets/button.svelte';
</script>

<section class="flex w-full flex-col items-center px-4 py-16 md:px-0">
	<!-- Bild nr 1 -->
	<div class="m-3 w-[90%] max-w-[400px] shadow-sm">
		<img src={elinSerUpp} alt="Elin gör en pose med eldfacklor" class="rounded" />
	</div>

	<!-- bild nr 1 slut -->
	<!-- Wrappar de 2 små Bilderna -->
	<div class="max-w-400px flex w-[95%] flex-wrap justify-between">
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
		<Button href="/om_oss" label="Se fler bilder och videos" />
	</div>
</section>
