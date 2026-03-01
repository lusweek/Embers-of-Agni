<script>
  import { t } from '$lib/i18n.svelte.js';
  import LanguageToggle from './LanguageToggle.svelte';
  import MobileMenu from './MobileMenu.svelte';

  let scrolled = $state(false);
  let mobileMenuOpen = $state(false);

  const navItems = [
    { key: 'nav.hem', href: '#hero' },
    { key: 'nav.erbjudanden', href: '#services' },
    { key: 'nav.galleri', href: '#gallery' },
    { key: 'nav.omOss', href: '#about' },
    { key: 'nav.kontakt', href: '#contact' },
  ];

  $effect(() => {
    function onScroll() {
      scrolled = window.scrollY > 50;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<header class="navbar" class:scrolled>
  <nav class="navbar-inner">
    <!-- Brand -->
    <a href="#hero" class="brand">Embers of Agni</a>

    <!-- Desktop nav -->
    <div class="nav-links">
      {#each navItems as item}
        <a href={item.href} class="nav-link">{t(item.key)}</a>
      {/each}
    </div>

    <!-- Right side -->
    <div class="nav-right">
      <LanguageToggle />
    </div>

    <!-- Hamburger (mobile) -->
    <button
      class="hamburger"
      onclick={() => mobileMenuOpen = true}
      aria-label="Open menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  </nav>
</header>

<MobileMenu open={mobileMenuOpen} onclose={() => mobileMenuOpen = false} />

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 40;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    background: transparent;
    border-bottom: 1px solid transparent;
  }

  .navbar.scrolled {
    background: var(--bg-elevated);
    border-bottom-color: var(--border-subtle);
  }

  .navbar-inner {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: var(--text-primary);
    text-transform: uppercase;
  }

  .nav-links {
    display: none;
    align-items: center;
    gap: 2.5rem;
  }

  .nav-link {
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--text-secondary);
    transition: color 0.2s ease;
  }

  .nav-link:hover {
    color: var(--ember);
  }

  .nav-right {
    display: none;
    align-items: center;
  }

  .hamburger {
    display: flex;
    color: var(--text-primary);
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .hamburger:hover {
    color: var(--ember);
  }

  @media (min-width: 1024px) {
    .nav-links {
      display: flex;
    }

    .nav-right {
      display: flex;
    }

    .hamburger {
      display: none;
    }
  }
</style>
