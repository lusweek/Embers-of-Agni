<script>
  import { t } from '$lib/i18n.svelte.js';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';

  let ctaState = $state('idle'); // 'idle' | 'confirm' | 'open'

  function handleCta() {
    if (ctaState === 'idle') {
      ctaState = 'confirm';
    } else if (ctaState === 'confirm') {
      ctaState = 'open';
    }
  }
</script>

<section id="contact" class="section-padding">
  <ScrollReveal>
    <h2 class="section-title">{t('contact.title')}</h2>
  </ScrollReveal>

  <div class="contact-layout">
    {#if ctaState !== 'open'}
      <div class="cta-zone">
        <button class="btn-summon" onclick={handleCta}>
          {ctaState === 'idle' ? t('contact.cta') : t('contact.ctaConfirm')}
        </button>
      </div>
    {:else}
      <ScrollReveal>
        <div class="form-zone">
          <p class="contact-subtitle">{t('contact.subtitle')}</p>
          <ContactForm />
        </div>
      </ScrollReveal>
    {/if}

    <ScrollReveal>
      <div class="contact-info">
        <a href="mailto:embersofagni@gmail.com" class="info-link">{t('contact.info.email')}</a>
        <span class="info-sep">·</span>
        <a href="tel:+46738546407" class="info-link">{t('contact.info.phone')}</a>
        <span class="info-sep">·</span>
        <a href="https://www.instagram.com/embersofagni" target="_blank" rel="noopener noreferrer" class="info-link">{t('contact.info.instagram')}</a>
        <span class="info-sep">·</span>
        <span class="info-coverage">{t('contact.info.coverage')}</span>
      </div>
    </ScrollReveal>
  </div>
</section>

<style>
  .contact-layout {
    max-width: 40rem;
    margin: 2rem auto 0;
  }

  .cta-zone {
    display: flex;
    justify-content: center;
    padding: 4rem 0;
  }

  .form-zone {
    margin-bottom: 3rem;
  }

  .contact-subtitle {
    text-align: center;
    margin-bottom: 2rem;
    font-style: italic;
  }

  .contact-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-subtle);
  }

  .info-link {
    font-family: 'EB Garamond', serif;
    font-size: 0.9rem;
    color: var(--stone);
    transition: color 0.2s ease;
  }

  .info-link:hover {
    color: var(--flame);
  }

  .info-sep {
    color: var(--smoke);
    font-size: 0.8rem;
  }

  .info-coverage {
    font-family: 'EB Garamond', serif;
    font-size: 0.9rem;
    color: var(--stone);
  }
</style>
