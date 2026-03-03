<script>
  import { t } from '$lib/i18n.svelte.js';
  import RuneBand from '$lib/components/RuneBand.svelte';
  import Footer from '$lib/sections/Footer.svelte';

  import heroImg from '$lib/images/om_oss/oss_1.webp';
  import lukas1 from '$lib/images/om_oss/lukas_1_small.webp';
  import lukas2 from '$lib/images/om_oss/lukas_2_small.webp';
  import elin1 from '$lib/images/om_oss/elin_1_small.webp';
  import elin2 from '$lib/images/om_oss/elin_2_small.webp';
  import oss2 from '$lib/images/om_oss/oss_2_small.webp';
  import oss3 from '$lib/images/om_oss/oss_3_small.webp';
  import oss4 from '$lib/images/om_oss/oss_4.webp';
  import oss5 from '$lib/images/om_oss/oss_5.webp';
</script>

<svelte:head>
  <title>{t('tribe.seo.title')}</title>
  <meta name="description" content={t('tribe.seo.description')} />
</svelte:head>

<!-- Hero -->
<section class="hero" style="background-image: url({heroImg})">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">{t('tribe.title')}</h1>
    <p class="hero-subtitle">{t('tribe.subtitle')}</p>
  </div>
</section>

<RuneBand text={t('runeBand.text')} />

<!-- Stats -->
<section class="stats-bar">
  <div class="stat">
    <span class="stat-value">{t('tribe.stats.years')}</span>
    <span class="stat-label">{t('tribe.stats.yearsLabel')}</span>
  </div>
  <div class="stat-divider"></div>
  <div class="stat">
    <span class="stat-value">{t('tribe.stats.shows')}</span>
    <span class="stat-label">{t('tribe.stats.showsLabel')}</span>
  </div>
  <div class="stat-divider"></div>
  <div class="stat">
    <span class="stat-value">{t('tribe.stats.coverage')}</span>
    <span class="stat-label">{t('tribe.stats.coverageLabel')}</span>
  </div>
</section>

<RuneBand text={t('runeBand.text')} reverse={true} />

<!-- Manifesto -->
<section class="section-padding manifesto-section">
  <blockquote class="manifesto">
    <p>{t('tribe.manifesto')}</p>
  </blockquote>
</section>

<!-- Lukas -->
<section class="section-padding performer-section">
  <div class="performer performer-left">
    <div class="performer-images">
      <img src={lukas1} alt={t('tribe.lukas.name')} class="performer-img" />
      <img src={lukas2} alt={t('tribe.lukas.name')} class="performer-img" />
    </div>
    <div class="performer-text">
      <h2 class="performer-name">{t('tribe.lukas.name')}</h2>
      <span class="performer-role">{t('tribe.lukas.role')}</span>
      <p class="performer-bio">{t('tribe.lukas.bio')}</p>
    </div>
  </div>
</section>

<!-- Elin -->
<section class="section-padding performer-section">
  <div class="performer performer-right">
    <div class="performer-text">
      <h2 class="performer-name">{t('tribe.elin.name')}</h2>
      <span class="performer-role">{t('tribe.elin.role')}</span>
      <p class="performer-bio">{t('tribe.elin.bio')}</p>
    </div>
    <div class="performer-images">
      <img src={elin1} alt={t('tribe.elin.name')} class="performer-img" />
      <img src={elin2} alt={t('tribe.elin.name')} class="performer-img" />
    </div>
  </div>
</section>

<RuneBand text={t('runeBand.text')} />

<!-- Group photos -->
<section class="section-padding">
  <h2 class="section-title">{t('tribe.groupSection')}</h2>
  <div class="group-strip">
    <img src={oss2} alt={t('tribe.groupSection')} />
    <img src={oss3} alt={t('tribe.groupSection')} />
    <img src={oss4} alt={t('tribe.groupSection')} />
    <img src={oss5} alt={t('tribe.groupSection')} />
  </div>
</section>

<RuneBand text={t('runeBand.text')} reverse={true} />

<!-- Testimonials -->
<section class="section-padding">
  <h2 class="section-title">{t('tribe.testimonialsTitle')}</h2>
  <div class="testimonials-list">
    {#each t('testimonials.items') as testimonial}
      <blockquote class="testimonial">
        <p>"{testimonial.quote}"</p>
        <cite>— {testimonial.name}, {testimonial.event}</cite>
      </blockquote>
    {/each}
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <a href="/#contact" class="btn-summon">{t('tribe.cta')}</a>
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
    background: rgba(8, 6, 4, 0.65);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 0 2rem;
  }

  .hero-title {
    font-size: clamp(2rem, 6vw, 4.5rem);
    font-weight: 400;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    animation: gentle-glow 4s ease-in-out infinite;
  }

  .hero-subtitle {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: clamp(1rem, 2vw, 1.4rem);
    color: var(--stone);
    margin: 0;
  }

  /* Stats */
  .stats-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: clamp(2.5rem, 5vw, 4rem) 2rem;
  }

  .stat {
    text-align: center;
  }

  .stat-value {
    display: block;
    font-family: 'Cinzel', serif;
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--bone);
  }

  .stat-label {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: 0.9rem;
    color: var(--stone);
  }

  .stat-divider {
    width: 1px;
    height: 2.5rem;
    background: var(--border-subtle);
  }

  /* Manifesto */
  .manifesto-section {
    display: flex;
    justify-content: center;
  }

  .manifesto {
    max-width: 48rem;
    margin: 0;
    padding: 0;
    border: none;
    text-align: center;
  }

  .manifesto p {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    line-height: 1.6;
    color: var(--bone);
  }

  /* Performers */
  .performer-section {
    padding-top: clamp(2rem, 4vw, 4rem);
    padding-bottom: clamp(2rem, 4vw, 4rem);
  }

  .performer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 4vw, 4rem);
    max-width: 60rem;
    margin: 0 auto;
    align-items: center;
  }

  .performer-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
  }

  .performer-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 3/4;
  }

  .performer-name {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 400;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  }

  .performer-role {
    display: block;
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--flame);
    margin-bottom: 1.5rem;
  }

  .performer-bio {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--bone);
  }

  /* Group photos */
  .group-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    margin-top: 2rem;
  }

  .group-strip img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  /* Testimonials */
  .testimonials-list {
    max-width: 48rem;
    margin: 2rem auto 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .testimonial {
    border-left: 2px solid var(--flame);
    padding-left: 2rem;
    margin: 0;
  }

  .testimonial p {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--bone);
    margin: 0 0 0.75rem;
  }

  .testimonial cite {
    font-style: normal;
    font-size: 0.85rem;
    color: var(--stone);
  }

  /* CTA */
  .cta-section {
    display: flex;
    justify-content: center;
    padding: clamp(4rem, 8vw, 8rem) 2rem;
  }

  @media (max-width: 768px) {
    .stats-bar {
      gap: 1.5rem;
    }

    .performer {
      grid-template-columns: 1fr;
    }

    .performer-right {
      direction: ltr;
    }

    .performer-right .performer-text {
      order: -1;
    }

    .group-strip {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
