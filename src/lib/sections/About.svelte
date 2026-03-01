<script>
  import { t } from '$lib/i18n.svelte.js';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';

  const performers = [
    { key: 'lukas' },
    { key: 'elin' },
  ];
</script>

<section id="about" class="section-padding">
  <ScrollReveal>
    <h2 class="section-title">{t('about.title')}</h2>
  </ScrollReveal>

  <div class="about-layout">
    <!-- Manifesto -->
    <ScrollReveal>
      <blockquote class="manifesto">
        <p>{t('about.manifesto')}</p>
      </blockquote>
    </ScrollReveal>

    <!-- Tribe grid -->
    <ScrollReveal>
      <div class="tribe-grid">
        {#each performers as performer}
          <div class="tribe-member">
            <h3 class="member-name">{t(`about.${performer.key}.name`)}</h3>
            <span class="member-craft">{t(`about.${performer.key}.specialty`)}</span>
          </div>
        {/each}
      </div>
    </ScrollReveal>

    <!-- Testimonial saga -->
    <ScrollReveal>
      <blockquote class="saga">
        <p>"{t('testimonials.items')[0].quote}"</p>
        <cite>— {t('testimonials.items')[0].name}, {t('testimonials.items')[0].event}</cite>
      </blockquote>
    </ScrollReveal>
  </div>
</section>

<style>
  .about-layout {
    max-width: 56rem;
    margin: 2rem auto 0;
  }

  .manifesto {
    margin: 0 0 4rem;
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

  .tribe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1px;
    margin-bottom: 4rem;
  }

  .tribe-member {
    background: var(--ash);
    padding: 2.5rem 2rem;
    text-align: center;
    transition: background 0.3s ease;
    cursor: default;
  }

  .tribe-member:hover {
    background: var(--iron);
  }

  .tribe-member:hover .member-name {
    color: var(--flame);
  }

  .tribe-member:hover::after {
    content: '';
    display: block;
    height: 2px;
    margin-top: 1.5rem;
    background: linear-gradient(90deg, transparent, var(--flame), transparent);
  }

  .member-name {
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--bone);
    transition: color 0.3s ease;
    margin-bottom: 0.5rem;
  }

  .member-craft {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: 0.95rem;
    color: var(--stone);
  }

  .saga {
    border-left: 2px solid var(--flame);
    padding-left: 2rem;
    margin: 0;
  }

  .saga p {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--bone);
    margin: 0 0 0.75rem;
  }

  .saga cite {
    font-style: normal;
    font-size: 0.85rem;
    color: var(--stone);
  }
</style>
