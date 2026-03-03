<script>
  import { fade } from 'svelte/transition';

  let { images, index = 0, onclose } = $props();
  let currentIndex = $state(0);

  $effect(() => {
    currentIndex = index;
  });

  $effect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onclose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function handleBackdrop(e) {
    if (e.target === e.currentTarget) onclose();
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="lightbox-backdrop"
  transition:fade={{ duration: 200 }}
  onclick={handleBackdrop}
>
  <!-- Close button -->
  <button
    class="lightbox-close"
    onclick={onclose}
    aria-label="Close"
  >
    <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  </button>

  <!-- Prev button -->
  {#if images.length > 1}
    <button
      class="lightbox-nav lightbox-prev"
      onclick={prev}
      aria-label="Previous"
    >
      <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <!-- Next button -->
    <button
      class="lightbox-nav lightbox-next"
      onclick={next}
      aria-label="Next"
    >
      <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  {/if}

  <!-- Image -->
  <img
    src={images[currentIndex].src}
    alt={images[currentIndex].alt}
    class="lightbox-image"
  />
</div>

<style>
  .lightbox-backdrop {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(8,6,4,0.95);
  }

  .lightbox-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    color: rgba(240,230,214,0.7);
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .lightbox-close:hover {
    color: var(--text-primary);
  }

  .lightbox-nav {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 5rem;
    display: flex;
    align-items: center;
    z-index: 10;
    color: rgba(240,230,214,0.5);
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .lightbox-nav:hover {
    color: var(--text-primary);
  }

  .lightbox-prev {
    left: 0;
    justify-content: flex-start;
    padding-left: 1rem;
  }

  .lightbox-next {
    right: 0;
    justify-content: flex-end;
    padding-right: 1rem;
  }

  .lightbox-image {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 2px;
  }
</style>
