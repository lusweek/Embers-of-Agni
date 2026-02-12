<script>
    import { mediaPage } from "$lib/seo/mediaPage";

    import Devider from "$lib/assets/Devider.svelte";
    import { fade } from "svelte/transition";

    const imageFiles = import.meta.glob('/src/lib/images/bilder/*.webp', {
        eager: true,
        as: 'url'
    });

    const images = Object.values(imageFiles);

    let active = null;

    function openImage(img) {
        active = img;
    }

    function closeImage() {
        active = null;
    }

    function nextImage(e) {
        e?.stopPropagation();
        const index = images.indexOf(active);
        active = images[(index + 1) % images.length];
    }

    function prevImage(e) {
        e?.stopPropagation();
        const index = images.indexOf(active);
        active = images[(index - 1 + images.length) % images.length];
    }
</script>

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

{#if active}
    <div class="backdrop" on:click={closeImage} transition:fade></div>

    <!-- 🔹 ADDED (större klickyta) -->
    <div class="arrow left" on:click={prevImage} transition:fade>
        <span>❮</span>
    </div>

    <img 
        src={active} 
        alt=""
        class="modal-img"
        transition:fade
        on:click={closeImage}
    >

    <!-- 🔹 ADDED (större klickyta) -->
    <div class="arrow right" on:click={nextImage} transition:fade>
        <span>❯</span>
    </div>

    <!-- 🔹 ADDED (kryss) -->
    <div class="close-btn" on:click|stopPropagation={closeImage} transition:fade>
        <span>✕</span>
    </div>
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

    @media (max-width: 768px) {
        .images-grid {
            grid-template-columns: 1fr;
        }
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

    /* 🔹 ADDED — STOR klickyta */
    .arrow {
        position: fixed;
        top: 0;
        width: 20vw;              /* STOR klickyta */
        height: 100vh;            /* Hela höjden */
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        z-index: 30;
        user-select: none;
        transition: 0.2s;
    }

    /* 🔹 ADDED */
    .arrow span {
        pointer-events: none;
    }

    /* 🔹 ADDED */
    .arrow:hover {
        color: rgba(255, 255, 255, 1);
        background: rgba(0, 0, 0, 0.15);
    }

    /* 🔹 ADDED */
    .arrow.left {
        left: 0;
    }

    /* 🔹 ADDED */
    .arrow.right {
        right: 0;
    }

    /* 🔹 ADDED — KRYSS */
    .close-btn {
        position: fixed;
        top: 25px;
        right: 25px;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        z-index: 40;
        user-select: none;
        transition: 0.2s;
    }

    /* 🔹 ADDED */
    .close-btn:hover {
        color: rgba(255, 255, 255, 1);
        background: rgba(0, 0, 0, 0.15);
        border-radius: 50%;
    }

</style>
