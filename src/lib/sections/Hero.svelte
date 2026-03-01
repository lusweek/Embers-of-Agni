<script>
  import { t } from '$lib/i18n.svelte.js';
  import heroImg from '$lib/images/home/hero.webp';

  const videoId = 'yyTSYqBIXRQ';
</script>

<section id="hero" class="hero">
  <!-- Background video -->
  <div class="video-bg" aria-hidden="true">
    <iframe
      src="https://www.youtube.com/embed/{videoId}?autoplay=1&mute=1&loop=1&playlist={videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3"
      title=""
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </div>

  <!-- Fallback image -->
  <img
    src={heroImg}
    alt=""
    class="hero-fallback"
    aria-hidden="true"
  />

  <!-- Cinematic vignette overlays -->
  <div class="vignette-radial" aria-hidden="true"></div>
  <div class="vignette-bottom" aria-hidden="true"></div>

  <!-- Content: bottom-aligned -->
  <div class="hero-content">
    <h1 class="text-glow">{t('hero.title')}</h1>
    <p class="hero-subtitle">{t('hero.subtitle')}</p>
  </div>
</section>

<style>
  .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .video-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .video-bg iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120vw;
    height: 120vh;
    min-width: 177.78vh;
    min-height: 56.25vw;
    transform: translate(-50%, -50%);
    border: 0;
  }

  .hero-fallback {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .vignette-radial {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, transparent 30%, rgba(8,6,4,0.7) 100%);
    pointer-events: none;
  }

  .vignette-bottom {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, rgba(8,6,4,0.85) 90%, var(--bg-deep) 100%);
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 0 1.5rem 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .hero-subtitle {
    font-family: 'Cinzel', serif;
    font-size: clamp(1rem, 2vw, 1.4rem);
    color: var(--text-accent);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 400;
  }
</style>
