<script>
  import { t } from '$lib/i18n.svelte.js';
  import heroImg from '$lib/images/home/hero.webp';
</script>

<section id="hero" class="hero">
  <img src={heroImg} alt="" class="hero-bg" aria-hidden="true" />
  <div class="hero-border" aria-hidden="true"></div>

  <div class="hero-content">
    <h1 class="hero-title"><span class="first-letter">E</span>mbers<br/>of Agni</h1>
    <p class="hero-subtitle">{t('hero.subtitle')}</p>
  </div>

  <div class="hero-descend" aria-hidden="true">↓</div>
</section>

<style>
  .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.15;
    z-index: 0;
  }

  .hero-border {
    position: absolute;
    inset: 1.5rem;
    border: 1px solid rgba(196,84,26,0.15);
    pointer-events: none;
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .hero-title {
    font-size: clamp(3rem, 12vw, 10rem);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: 0.04em;
  }

  .first-letter {
    color: var(--flame);
    animation: gentle-glow 4s ease-in-out infinite;
  }

  .hero-subtitle {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: clamp(1rem, 2vw, 1.4rem);
    color: var(--stone);
    letter-spacing: 0.08em;
    margin: 0;
  }

  .hero-descend {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    color: var(--stone);
    animation: breathe 3s ease-in-out infinite;
    z-index: 2;
  }
</style>
