<script>
  import { getLocale, setLocale } from '$lib/i18n.svelte.js';

  let locale = $derived(getLocale());
</script>

<div class="lang-toggle">
  <button
    class="lang-btn"
    class:active={locale === 'sv'}
    onclick={() => setLocale('sv')}
    aria-pressed={locale === 'sv'}
  >
    SV
  </button>
  <button
    class="lang-btn"
    class:active={locale === 'en'}
    onclick={() => setLocale('en')}
    aria-pressed={locale === 'en'}
  >
    EN
  </button>
</div>

<style>
  .lang-toggle {
    display: inline-flex;
    border: 1px solid var(--border-subtle);
    border-radius: 2px;
    overflow: hidden;
  }

  .lang-btn {
    padding: 0.3rem 0.6rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
    background: transparent;
    color: var(--text-secondary);
  }

  .lang-btn:hover {
    color: var(--text-primary);
  }

  .lang-btn.active {
    background: var(--ember);
    color: var(--text-primary);
  }
</style>
