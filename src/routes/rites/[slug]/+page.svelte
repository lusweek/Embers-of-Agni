<script>
  import { t } from '$lib/i18n.svelte.js';
  import RuneBand from '$lib/components/RuneBand.svelte';
  import Footer from '$lib/sections/Footer.svelte';

  let { data } = $props();
  let rite = $derived(data.rite);
  let prefix = $derived(`services.${rite.translationKey}`);
</script>

<svelte:head>
  <title>{t(`${prefix}.seo.title`)}</title>
  <meta name="description" content={t(`${prefix}.seo.description`)} />
</svelte:head>

<!-- Hero -->
<section class="hero" style="background-image: url({rite.heroImage})">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="hero-symbol">{rite.symbol}</span>
    <h1 class="hero-title">{t(`${prefix}.title`)}</h1>
    <p class="hero-tagline">{t(`${prefix}.heroTagline`)}</p>
  </div>
</section>

<RuneBand text={t('runeBand.text')} />

<!-- Description -->
<section class="section-padding description-section">
  <div class="description-content">
    <p class="full-description">{t(`${prefix}.fullDescription`)}</p>
  </div>
</section>

<RuneBand text={t('runeBand.text')} reverse={true} />

<!-- Practical Info Grid -->
<section class="section-padding">
  <div class="practical-wrapper">
    <h2 class="section-title">{t(`${prefix}.practical.title`)}</h2>
    <div class="practical-grid">
      <div class="practical-cell">
        <h3 class="practical-label">{t(`${prefix}.practical.area`)}</h3>
        <p class="practical-value">{t(`${prefix}.practical.areaValue`)}</p>
      </div>
      <div class="practical-cell">
        <h3 class="practical-label">{t(`${prefix}.practical.duration`)}</h3>
        <p class="practical-value">{t(`${prefix}.practical.durationValue`)}</p>
      </div>
      <div class="practical-cell">
        <h3 class="practical-label">{t(`${prefix}.practical.safety`)}</h3>
        <p class="practical-value">{t(`${prefix}.practical.safetyValue`)}</p>
      </div>
      <div class="practical-cell">
        <h3 class="practical-label">{t(`${prefix}.practical.sound`)}</h3>
        <p class="practical-value">{t(`${prefix}.practical.soundValue`)}</p>
      </div>
    </div>
    <!-- Travel row spanning full width -->
    <div class="practical-grid practical-grid-single">
      <div class="practical-cell">
        <h3 class="practical-label">{t(`${prefix}.practical.travel`)}</h3>
        <p class="practical-value">{t(`${prefix}.practical.travelValue`)}</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <a href="/#contact" class="btn-summon">{t(`${prefix}.cta`)}</a>
</section>

<RuneBand text={t('runeBand.text')} reverse={true} />
<Footer />

<style>
  /* Hero */
  .hero {
    position: relative;
    height: 70vh;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(8, 6, 4, 0.7);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 0 2rem;
  }

  .hero-symbol {
    display: block;
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    color: var(--flame);
    letter-spacing: 0.3em;
    margin-bottom: 1.5rem;
  }

  .hero-title {
    font-size: clamp(2rem, 6vw, 4.5rem);
    font-weight: 400;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    animation: gentle-glow 4s ease-in-out infinite;
  }

  .hero-tagline {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: clamp(1rem, 2vw, 1.4rem);
    color: var(--stone);
    margin: 0;
  }

  /* Description */
  .description-section {
    display: flex;
    justify-content: center;
  }

  .description-content {
    max-width: 48rem;
  }

  .full-description {
    font-size: clamp(1.05rem, 1.5vw, 1.2rem);
    line-height: 1.8;
    color: var(--bone);
  }

  /* Practical grid */
  .practical-wrapper {
    max-width: 56rem;
    margin: 0 auto;
  }

  .practical-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border-subtle);
    margin-top: 2rem;
  }

  .practical-grid-single {
    grid-template-columns: 1fr;
    margin-top: 1px;
  }

  .practical-cell {
    background: var(--bg-deep);
    padding: 2rem;
  }

  .practical-label {
    font-family: 'Cinzel', serif;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--flame);
    margin-bottom: 0.75rem;
  }

  .practical-value {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--bone);
    margin: 0;
  }

  /* CTA */
  .cta-section {
    display: flex;
    justify-content: center;
    padding: clamp(4rem, 8vw, 8rem) 2rem;
  }

  @media (max-width: 640px) {
    .practical-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
