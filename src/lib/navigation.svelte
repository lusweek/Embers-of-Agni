<script>
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { fly, fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  // UI-state
  let isMobileMenuOpen = false;

  // Menydata (ändra här i framtiden)
  const menuItems = [
    { label: "Eldshow", href: "/eldshow" },
    { label: "Workshops", href: "/workshops" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Bibliotek", href: "/bibliotek" }
  ];

  // Prenumerera på page-store och spara aktuell path i en vanlig variabel
  let currentPath = "";
  const unsubscribePage = page.subscribe(p => {
    currentPath = p?.url?.pathname ?? "";
  });

  afterNavigate(() => {
    isMobileMenuOpen = false;
  });

  onMount(() => {
    window.addEventListener("scroll", handleDesktopScroll);
    return () => {
      window.removeEventListener("scroll", handleDesktopScroll);
    };
  });

  onDestroy(() => {
    unsubscribePage();
  });

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }

  function isActive(href) {
    return currentPath === href || currentPath.startsWith(href + "/");
  }

  /* scroll-logik för desktop navbar */
  let lastWindowScroll = 0;
  let hideDesktopNavbar = false;

  function handleDesktopScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > lastWindowScroll && currentScroll > 40) {
      hideDesktopNavbar = true;
    } else {
      hideDesktopNavbar = false;
    }

    lastWindowScroll = currentScroll;
  }
</script>

<nav class="vf-nav {hideDesktopNavbar ? 'is-hidden' : ''}">
  <div class="wrap vf-nav-inner">
    <a class="brand" href="/">Vilda<span>Flammor</span></a>

    <ul class="navlinks hidden lg:flex">
      {#each menuItems as item}
        <li>
          <a href={item.href} class:active={isActive(item.href)}>
            {item.label}
          </a>
        </li>
      {/each}
    </ul>

    <a class="nav-cta hidden lg:inline-block" href="/boka">Boka show</a>

    <!-- Mobile hamburger -->
    <button
      class="hamburger lg:hidden"
      on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
      aria-label="Öppna meny"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>

<!-- Overlay (bakom menyn) -->
{#if isMobileMenuOpen}
  <div
    role="button"
    tabindex="0"
    aria-label="Stäng mobilmenyn"
    class="mobile-overlay"
    on:click={() => (isMobileMenuOpen = false)}
    on:keydown={(e) => (e.key === "Enter" || e.key === " ") && (isMobileMenuOpen = false)}
    in:fade={{ duration: 200, easing: cubicOut }}
    out:fade={{ duration: 200, easing: cubicOut }}>
  </div>
{/if}

<!-- mobilmeny -->
{#if isMobileMenuOpen}
  <aside
    class="mobile-aside"
    in:fly={{ x: 300, duration: 400, easing: cubicOut }}
    out:fly={{ x: 300, duration: 400, easing: cubicOut }}>

    <div class="mobile-aside-head">
      <a class="brand" href="/" on:click={closeMobileMenu}>Vilda<span>Flammor</span></a>
      <button on:click={closeMobileMenu} class="mobile-close" aria-label="Stäng meny">✕</button>
    </div>

    <nav class="mobile-menu-content">
      {#each menuItems as item}
        <a href={item.href}
           on:click={closeMobileMenu}
           class:active={isActive(item.href)}>
          {item.label}
        </a>
      {/each}
      <a class="nav-cta mobile-cta" href="/boka" on:click={closeMobileMenu}>Boka show</a>
    </nav>
  </aside>
{/if}

<style>
  .vf-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: rgba(13, 8, 6, 0.82);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 201, 74, 0.12);
    transition: transform 0.3s ease;
  }

  .vf-nav.is-hidden {
    transform: translateY(-100%);
  }

  .vf-nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 32px;
    gap: 24px;
  }

  .navlinks {
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14.5px;
  }

  .navlinks a {
    text-decoration: none;
    color: var(--ink-dim);
    transition: color 0.2s ease;
  }

  .navlinks a:hover,
  .navlinks a.active,
  .mobile-menu-content a.active {
    color: var(--gold);
  }

  .hamburger {
    background: transparent;
    border: none;
    color: var(--ink);
    cursor: pointer;
    padding: 6px;
  }

  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 40;
  }

  .mobile-aside {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 78vw;
    width: 320px;
    background: var(--bg-alt);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.4);
    z-index: 50;
    display: flex;
    flex-direction: column;
    border-left: 1px solid rgba(255, 201, 74, 0.15);
  }

  .mobile-aside-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid rgba(255, 201, 74, 0.12);
  }

  .mobile-close {
    background: transparent;
    border: none;
    color: var(--ink);
    font-size: 18px;
    cursor: pointer;
    padding: 4px 8px;
  }

  .mobile-menu-content {
    flex: 1;
    overflow-y: auto;
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .mobile-menu-content a {
    text-decoration: none;
    color: var(--ink);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
    letter-spacing: 0.02em;
  }

  .mobile-cta {
    text-align: center;
    font-family: 'Work Sans', sans-serif;
    margin-top: 12px;
  }

  :global(main.padding-top) {
    padding-top: 78px;
  }
</style>
