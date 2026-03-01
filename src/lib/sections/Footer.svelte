<script>
  import { t } from '$lib/i18n.svelte.js';
  import SectionDivider from '$lib/components/SectionDivider.svelte';

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer class="footer">
  <SectionDivider />

  <div class="footer-inner">
    <!-- Brand -->
    <span class="footer-brand">Embers of Agni</span>

    <!-- Instagram -->
    <a
      href="https://www.instagram.com/embersofagni"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-instagram"
      aria-label="Instagram"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>

    <!-- Copyright + Back to top -->
    <div class="footer-bottom">
      <p class="footer-copyright">{t('footer.copyright')}</p>
      <button class="back-to-top" onclick={scrollToTop}>
        {t('footer.backToTop')} ↑
      </button>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--bg-elevated);
    border-top: 1px solid var(--border-subtle);
    padding: 0 1.5rem 2rem;
  }

  .footer-inner {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .footer-brand {
    font-family: 'Cinzel', serif;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-primary);
  }

  .footer-instagram {
    color: var(--text-secondary);
    transition: color 0.2s ease;
  }

  .footer-instagram:hover {
    color: var(--ember);
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .footer-copyright {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .back-to-top {
    font-family: 'Crimson Pro', serif;
    font-size: 0.75rem;
    color: var(--text-secondary);
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .back-to-top:hover {
    color: var(--ember);
  }
</style>
