<script>
  import { t } from '$lib/i18n.svelte.js';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SectionDivider from '$lib/components/SectionDivider.svelte';
  import duoshowImg from '$lib/images/eldshower/duoshow.webp';
  import soloshowImg from '$lib/images/eldshower/soloshow.webp';
  import workshopImg from '$lib/images/Prova på flowarts/prova_pa_flowarts.webp';

  const services = [
    { imgGetter: () => duoshowImg, titleKey: 'services.duoshow.title', descKey: 'services.duoshow.description', detailsKey: 'services.duoshow.details' },
    { imgGetter: () => soloshowImg, titleKey: 'services.soloshow.title', descKey: 'services.soloshow.description', detailsKey: 'services.soloshow.details' },
    { imgGetter: () => workshopImg, titleKey: 'services.workshop.title', descKey: 'services.workshop.description', detailsKey: 'services.workshop.details' },
  ];
</script>

<section id="services" class="section-padding">
  <ScrollReveal>
    <h2 class="section-title">{t('services.title')}</h2>
  </ScrollReveal>

  <SectionDivider />

  <div class="services-list">
    {#each services as service, i}
      <ScrollReveal>
        <div class="service-row" class:reverse={i % 2 !== 0}>
          <div class="service-image">
            <img src={service.imgGetter()} alt={t(service.titleKey)} loading="lazy" />
          </div>
          <div class="service-text">
            <h3>{t(service.titleKey)}</h3>
            <p class="service-desc">{t(service.descKey)}</p>
            <p class="service-details">{t(service.detailsKey)}</p>
          </div>
        </div>
      </ScrollReveal>
    {/each}
  </div>

  <!-- Practical info row -->
  <ScrollReveal>
    <div class="practical-row">
      {#each t('practicalInfo.items') as item}
        <div class="practical-item">
          <h3 class="practical-title">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      {/each}
    </div>
  </ScrollReveal>
</section>

<style>
  .services-list {
    max-width: 72rem;
    margin: 2rem auto 0;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .service-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .service-row.reverse {
    direction: rtl;
  }

  .service-row.reverse > * {
    direction: ltr;
  }

  .service-image {
    overflow: hidden;
    border-radius: 2px;
  }

  .service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 4/3;
  }

  .service-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .service-text h3 {
    color: var(--text-accent);
  }

  .service-desc {
    color: var(--text-primary);
    font-size: 1.1rem;
    line-height: 1.7;
  }

  .service-details {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .practical-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    max-width: 72rem;
    margin: 5rem auto 0;
    padding-top: 3rem;
    border-top: 1px solid var(--border-subtle);
  }

  .practical-item {
    text-align: center;
  }

  .practical-title {
    font-size: 0.8rem;
    color: var(--text-accent);
    margin-bottom: 0.5rem;
    letter-spacing: 0.12em;
  }

  .practical-item p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .service-row {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .service-row.reverse {
      direction: ltr;
    }

    .practical-row {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
  }
</style>
