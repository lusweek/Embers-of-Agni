<script>
  import { t } from '$lib/i18n.svelte.js';
</script>

<footer class="footer">
  <div class="footer-inner">
    <span class="footer-brand">Embers of Agni · MMXXVI</span>
    <span class="footer-tagline">{t('footer.tagline')}</span>
    <a href="mailto:embersofagni@gmail.com" class="footer-contact">{t('contact.info.email')}</a>
  </div>
</footer>

<style>
  .footer {
    padding: 1.5rem clamp(1.5rem, 5vw, 6rem);
    border-top: 1px solid var(--border-subtle);
  }

  .footer-inner {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-brand {
    font-family: 'Cinzel', serif;
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--stone);
  }

  .footer-tagline {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: 0.85rem;
    color: var(--smoke);
  }

  .footer-contact {
    font-family: 'EB Garamond', serif;
    font-size: 0.85rem;
    color: var(--stone);
    transition: color 0.2s ease;
  }

  .footer-contact:hover {
    color: var(--flame);
  }

  @media (max-width: 640px) {
    .footer-inner {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
