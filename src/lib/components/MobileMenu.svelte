<script>
  import { fade } from 'svelte/transition';
  import { t } from '$lib/i18n.svelte.js';
  import LanguageToggle from './LanguageToggle.svelte';

  let { open, onclose } = $props();

  const navItems = [
    { key: 'nav.hem', href: '#hero' },
    { key: 'nav.erbjudanden', href: '#services' },
    { key: 'nav.galleri', href: '#gallery' },
    { key: 'nav.omOss', href: '#about' },
    { key: 'nav.kontakt', href: '#contact' },
  ];

  function handleKeydown(e) {
    if (e.key === 'Escape') onclose();
  }

  function handleNavClick() {
    onclose();
  }
</script>

{#if open}
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <!-- svelte-ignore a11y_interactive_supports_focus -->
  <div
    class="mobile-menu"
    transition:fade={{ duration: 200 }}
    role="dialog"
    aria-modal="true"
    aria-label="Navigation menu"
    tabindex="-1"
    onkeydown={handleKeydown}
  >
    <!-- Close button -->
    <button
      class="close-btn"
      onclick={onclose}
      aria-label="Close menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <!-- Nav links -->
    <nav class="menu-nav">
      {#each navItems as item}
        <a href={item.href} class="menu-link" onclick={handleNavClick}>
          {t(item.key)}
        </a>
      {/each}

      <div class="menu-lang">
        <LanguageToggle />
      </div>
    </nav>
  </div>
{/if}

<style>
  .mobile-menu {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg-deep);
  }

  .close-btn {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    color: var(--text-primary);
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .close-btn:hover {
    color: var(--ember);
  }

  .menu-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  .menu-link {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-primary);
    transition: color 0.2s ease;
  }

  .menu-link:hover {
    color: var(--ember);
  }

  .menu-lang {
    margin-top: 1rem;
  }
</style>
