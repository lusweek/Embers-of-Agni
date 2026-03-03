<script>
  import { t } from '$lib/i18n.svelte.js';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';

  const services = [
    { key: 'duoshow', slug: 'duoshow' },
    { key: 'soloshow', slug: 'soloshow' },
    { key: 'workshop', slug: 'workshop' },
  ];
</script>

<section id="services" class="section-padding">
  <ScrollReveal>
    <h2 class="section-title">{t('services.title')}</h2>
  </ScrollReveal>

  <div class="rites-list">
    {#each services as service}
      <ScrollReveal>
        <a href="/rites/{service.slug}" class="rite-link">
          <div class="rite-row">
            <span class="rite-symbol">{t(`services.${service.key}.symbol`)}</span>
            <span class="rite-title">{t(`services.${service.key}.title`)}</span>
            <span class="rite-tag">{t(`services.${service.key}.tag`)}</span>
          </div>
          <p class="rite-desc">{t(`services.${service.key}.description`)}</p>
          <span class="rite-read-more">{t('nav.lasMore')} →</span>
        </a>
      </ScrollReveal>
    {/each}
  </div>

  <!-- Flame sigil ornament -->
  <div class="flame-sigil" aria-hidden="true">
    <svg viewBox="0 0 60 80" width="30" height="40">
      <path d="M30 0 C30 0 50 30 50 50 C50 65 41 75 30 80 C19 75 10 65 10 50 C10 30 30 0 30 0Z" fill="none" stroke="var(--flame)" stroke-width="1" opacity="0.4"/>
      <path d="M30 20 C30 20 40 38 40 50 C40 58 35 65 30 68 C25 65 20 58 20 50 C20 38 30 20 30 20Z" fill="none" stroke="var(--flame)" stroke-width="0.5" opacity="0.25"/>
    </svg>
  </div>
</section>

<style>
  .rites-list {
    max-width: 56rem;
    margin: 3rem auto 0;
  }

  .rite-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  .rite-row {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--border-subtle);
    transition: padding-left 0.3s ease, border-color 0.3s ease;
  }

  .rite-link:hover .rite-row {
    padding-left: 1rem;
    border-color: var(--flame);
  }

  .rite-symbol {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem;
    color: var(--flame);
    letter-spacing: 0.2em;
    min-width: 2rem;
  }

  .rite-title {
    font-family: 'Cinzel', serif;
    font-size: clamp(1rem, 2vw, 1.3rem);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--bone);
    flex: 1;
  }

  .rite-tag {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: 0.95rem;
    color: var(--stone);
  }

  .rite-desc {
    max-width: 40rem;
    margin: 0.5rem 0 0 3.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .rite-read-more {
    display: inline-block;
    margin-left: 3.5rem;
    padding-bottom: 1.5rem;
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--stone);
    transition: color 0.2s ease;
  }

  .rite-link:hover .rite-read-more {
    color: var(--flame);
  }

  .flame-sigil {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    .rite-row {
      flex-wrap: wrap;
      gap: 0.5rem 1rem;
    }

    .rite-tag {
      width: 100%;
      padding-left: 3.5rem;
    }

    .rite-desc {
      margin-left: 0;
    }

    .rite-read-more {
      margin-left: 0;
    }
  }
</style>
