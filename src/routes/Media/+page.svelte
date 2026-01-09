<script>
    import { mediaPage } from "$lib/seo/mediaPage";

    import Devider from "$lib/assets/Devider.svelte";
    import { fade } from "svelte/transition";

    // Hämta alla bilder i mappen
    const imageFiles = import.meta.glob('/src/lib/images/bilder/*.webp', {
        eager: true,
        as: 'url'
    });

    const images = Object.values(imageFiles);

    // Modal state
    let active = null;

    function openImage(img) {
        active = img;
    }

    function closeImage() {
        active = null;
    }
</script>

<!-- SEO -->
<svelte:head>
    <script type="application/ld+json">
        {JSON.stringify(mediaPage)}
    </script>
    <title>Bilder på Eldshower & elduppträdanden – Embers of Agni</title>
    <meta name="description" content="Se bilder från våra eldshower och eldartister i action. Galleriet visar upp eldperformance, flowarts och spektakulära shower från olika event." />
</svelte:head>

<h1 class="h1-title">Bilder</h1>

<p class="undertitle">
    Här kan du se bilder på vår eldkonst.<br>
    Glöm inte kolla in vår 
    <a href="https://www.instagram.com/embersofagni" class="link-decoration" target="_blank">instagram!</a>
</p>

<Devider />

<p class="my-8 text-center">Klicka för att förstora</p>

<!-- Grid med alla bilder -->
<div class="images-grid">
    {#each images as img }
        {#if img}
            <img 
                src={img} 
                alt="bild"
                on:click={() => openImage(img)}
            >
        {/if}
    {/each}
</div>

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

<Devider />

<style>

    .images-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 20px;
        max-width: 80vw;
        margin: auto;
    }

    .images-grid img {
       	border-radius: 2px;
		cursor: pointer;
		transition-duration: 0.2s;
    }

    .images-grid img:hover {
        transform: scale(1.03);
		box-shadow:
		0 12px 28px rgba(0, 0, 0, 0.506);
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
