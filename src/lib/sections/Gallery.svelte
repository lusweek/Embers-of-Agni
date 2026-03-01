<script>
  import { t } from '$lib/i18n.svelte.js';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import Lightbox from '$lib/components/Lightbox.svelte';

  const allModules = import.meta.glob('$lib/images/bilder/*.webp', { eager: true });
  const allImages = Object.entries(allModules).map(([path, mod]) => ({
    src: mod.default,
    alt: 'Embers of Agni',
  }));

  const step = Math.max(1, Math.floor(allImages.length / 12));
  const images = allImages.filter((_, i) => i % step === 0).slice(0, 12);

  let lightboxOpen = $state(false);
  let lightboxIndex = $state(0);

  function openLightbox(i) {
    lightboxIndex = i;
    lightboxOpen = true;
  }
</script>

<section id="gallery" class="section-padding">
  <ScrollReveal>
    <h2 class="section-title">{t('gallery.title')}</h2>
  </ScrollReveal>

  <ScrollReveal>
    <div class="gallery-grid">
      {#each images as image, i}
        <button
          class="gallery-item"
          onclick={() => openLightbox(i)}
          aria-label="View image {i + 1}"
        >
          <img src={image.src} alt={image.alt} loading="lazy" />
        </button>
      {/each}
    </div>
  </ScrollReveal>
</section>

{#if lightboxOpen}
  <Lightbox {images} index={lightboxIndex} onclose={() => (lightboxOpen = false)} />
{/if}

<style>
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    max-width: 80rem;
    margin: 2rem auto 0;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    border-radius: 0;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 3/2;
    display: block;
    transition: transform 0.4s ease, filter 0.4s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.03);
    filter: brightness(1.1);
  }

  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
