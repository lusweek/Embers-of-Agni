<script>
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SectionDivider from '$lib/components/SectionDivider.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import { t } from '$lib/i18n.svelte.js';
</script>

<section id="contact" class="section-padding">
  <ScrollReveal>
    <h2 class="section-title">{t('contact.title')}</h2>
    <p class="contact-subtitle">{t('contact.subtitle')}</p>
  </ScrollReveal>

  <SectionDivider />

  <div class="contact-layout">
    <ScrollReveal>
      <ContactForm />
    </ScrollReveal>

    <ScrollReveal>
      <div class="contact-info">
        <div class="info-item">
          <span class="info-label">{t('contact.form.phone')}</span>
          <span class="info-value">{t('contact.info.phone')}</span>
        </div>
        <div class="info-item">
          <span class="info-label">{t('contact.form.email')}</span>
          <a href="mailto:embersofagni@gmail.com" class="info-value">{t('contact.info.email')}</a>
        </div>
        <div class="info-item">
          <span class="info-label">Instagram</span>
          <a href="https://www.instagram.com/embersofagni" target="_blank" rel="noopener noreferrer" class="info-value">{t('contact.info.instagram')}</a>
        </div>
        <div class="info-item">
          <span class="info-label">{t('about.stats.coverage').split(' ')[0]}</span>
          <span class="info-value">{t('contact.info.coverage')}</span>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>

<style>
  .contact-subtitle {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 64rem;
    margin: 1rem auto 0;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-top: 1rem;
  }

  .info-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .info-label {
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-accent);
  }

  .info-value {
    color: var(--text-primary);
    font-size: 1.05rem;
  }

  a.info-value:hover {
    color: var(--ember-glow);
  }

  @media (max-width: 768px) {
    .contact-layout {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
</style>
