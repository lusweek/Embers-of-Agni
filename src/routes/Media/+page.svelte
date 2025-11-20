<script>
    import Devider from "$lib/assets/Devider.svelte";
    import { fade } from "svelte/transition";

    // Hämta alla bilder i mappen
    const imageFiles = import.meta.glob('/src/lib/images/bilder/*.{jpg,jpeg,png,webp,JPG}', {
        eager: true,
        as: 'url'
    });

    const images = Object.values(imageFiles);

    // 🔥 PRELOAD ALLA BILDER (fixar klick-laggen)
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Modal state
    let active = null;

    function openImage(img) {
        active = img;
    }

    function closeImage() {
        active = null;
    }
</script>

<h1 class="h1-title">Bilder och Filmer</h1>

<p class="undertitle">
    Här kan du se bilder och videor på vår eldkonst.<br>
    Glöm inte kolla in vår 
    <a href="https://www.instagram.com/embersofagni" class="instagram-link" target="_blank">instagram!</a>
</p>

<Devider />

<!-- Grid med alla bilder -->
<div class="images-grid">
    {#each images as img}
        <img 
            src={img} 
            alt=""
            on:click={() => openImage(img)}
        >
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
    .instagram-link {
        text-decoration: underline;
    }

    .images-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        width: 700px;
        max-width: 80vw;
        margin: auto;
    }

    .images-grid img {
        width: 100%;
        border-radius: 2px;
        cursor: pointer;
        transition: opacity 0.1s ease;
    }

    .images-grid img:hover {
        opacity: 0.8;
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
        max-width: 90vw;
        max-height: 90vh;
        z-index: 20;
        border-radius: 4px;
        cursor: pointer;
    }
</style>
