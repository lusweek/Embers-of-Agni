<script>
    import { fade } from "svelte/transition";
	import Button from '$lib/assets/button.svelte';

	import seMer1 from '$lib/images/home/se_mer_1.webp';
	import seMer2 from '$lib/images/home/se_mer_2_small.webp';
	import seMer3 from '$lib/images/home/se_mer_3_small.webp';
	import seMer4 from '$lib/images/home/se_mer_4.webp';

	// öppna bild när man klickar på den 
    let active = null;

	function openImage(img) {
        active = img;
    }

    function closeImage() {
        active = null;
    }
</script>

<section class="home-bilder-section">
	<img src={seMer1} alt="Elin gör en pose med eldfacklor" loading="lazy" on:click={() => openImage(seMer1)} />

	<img src={seMer2} alt="Elin gör en pose med eldfacklor" loading="lazy" on:click={() => openImage(seMer2)} />

	<img src={seMer3} alt="Elin gör en pose med eldfacklor" loading="lazy" on:click={() => openImage(seMer3)} />

	<img src={seMer4} alt="Elin gör en pose med eldfacklor" loading="lazy" on:click={() => openImage(seMer4)} />

	<div class="button">
		<Button href="/Media" label="Se fler bilder och videos" />
	</div>
</section>


<!-- Modal + fade animation -->
{#if active}
    <div class="backdrop" on:click={closeImage} transition:fade></div>

    <img 
        src={active} 
        alt=""
        class="modal-img"
        transition:fade
        on:click={closeImage}
    >
{/if}

<style>
	.home-bilder-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		align-items: center;
		max-width: 90vw;
		width: 400px;
		margin: 50px auto;
	}

	.home-bilder-section img{
		border-radius: 2px;
		cursor: pointer;
		transition-duration: 0.2s;
	}

	.home-bilder-section img:hover {
		transform: scale(1.03);
		box-shadow:
		0 12px 28px rgba(0, 0, 0, 0.506);
	}

	.button{
		grid-column: 1 / -1;
		justify-self: center;
	}

	  /* Modal backdrop */
    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10;
    }

    .modal-img {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 80vw;
        max-height: 80vh;
        z-index: 20;
        border-radius: 4px;
        cursor: pointer;
    }

</style>
