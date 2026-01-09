<script>
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { fly, slide, fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  // UI-state
  let isDropdownOpen = false;         // desktop dropdown (Erbjudanden)
  let isMobileMenuOpen = false;       // off-canvas mobile menu
  let openMobileDropdown = null;      // vilket mobile dropdown (label) är öppet, eller null

  // Menydata (ändra här i framtiden)
  const menuItems = [
    { label: "Hem", href: "/" },
    {
      label: "Erbjudanden",
      children: [
        { label: "Eldshower", href: "/eldshower" },
        // { label: "LED show", href: "/LED-shower" },
        { label: "Prova på flowarts", href: "/prova_pa_flowarts" }
      ]
    },
    { label: "Vi är Embers of Agni", href: "/om_oss" },
    { label: "Bilder", href: "/Media" },
    { label: "Info innan bokning", href: "/info_innan_bokning" },
    // { label: "Priser & bokning", href: "/priser" },
    { label: "Kontakta oss", href: "/kontakta_oss" }
  ];

  // Prenumerera på page-store och spara aktuell path i en vanlig variabel
  let currentPath = "";
  const unsubscribePage = page.subscribe(p => {
    // p kan finnas även under SSR, men pathname är vanligtvis definierad i SvelteKit
    currentPath = p?.url?.pathname ?? "";
  });

  // helper: hitta parent-label om någon child matchar path
  function parentLabelForPath(path) {
    const parent = menuItems.find(i => i.children?.some(child => child.href === path));
    return parent ? parent.label : null;
  }

  // stäng allt vid navigation
  afterNavigate(() => {
    isDropdownOpen = false;
    isMobileMenuOpen = false;
    // uppdatera vilken dropdown som ska vara öppen efter navigation
    openMobileDropdown = parentLabelForPath(currentPath);
  });

  // Klick-utanför öppen navbar logik
  function handleClickOutside(e) {
    if (!e.target.closest(".dropdown")) {
      isDropdownOpen = false;
    }
  }

  onMount(() => {
    // initial state på klienten (efter hydration)
    openMobileDropdown = parentLabelForPath(currentPath);

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleDesktopScroll);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleDesktopScroll);
    };
  });

  onDestroy(() => {
    unsubscribePage();
  });

  // helper för att stänga mobilen när en länk klickas
  function closeMobileMenu() {
    isMobileMenuOpen = false;
    openMobileDropdown = null;
  }

  /* ====== NYTT: scroll-logik för mobilmenyns navbar ====== */
  let mobileMenuContent;
  let lastScrollTop = 0;
  let hideMobileNavbar = false;

  function handleMobileMenuScroll() {
    const currentScroll = mobileMenuContent.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 20) {
      hideMobileNavbar = true;
    } else {
      hideMobileNavbar = false;
    }

    lastScrollTop = currentScroll;
  }

  /* ====== NYTT: scroll-logik för DESKTOP navbar ====== */
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


<nav class="navbar bg-base-200 desktop-navbar glass-effect {hideDesktopNavbar ? 'is-hidden' : ''}">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">Embers of Agni</a>
  </div>

  <!-- Desktop: visas från md och upp -->
  <div class="hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#each menuItems as item}
        {#if item.children}
          <li class="dropdown relative cursor-pointer"
              on:mouseenter={() => (isDropdownOpen = true)}
              on:mouseleave={() => (isDropdownOpen = false)}>
            <button class="flex items-center gap-5 cursor-pointer">
              {item.label}
              <svg class="w-4 h-4 transition-transform {isDropdownOpen ? 'rotate-180' : ''}"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {#if isDropdownOpen}
              <ul class="desktop-dropdown rund-kant"
                in:slide={{ x: 300, duration: 500, easing: cubicOut }}
                out:slide={{ x: 300, duration: 500, easing: cubicOut }}>
                {#each item.children as child}
                  <li class="my-[10px]">
                    <a href={child.href}
                       on:click={() => (isDropdownOpen = false)}
                       class:active={currentPath === child.href}>
                      {child.label}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {:else}
          <li>
            <a href={item.href} class:active={currentPath === item.href}>
              {item.label}
            </a>
          </li>
        {/if}
      {/each}
    </ul>
  </div>

  <!-- Mobile hamburger -->
  <div class="lg:hidden">
    <button on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)} class="btn btn-ghost" aria-label="Öppna meny">
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
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
    on:click={() => (isMobileMenuOpen = false)}
    on:keydown={(e) => (e.key === "Enter" || e.key === " ") && (isMobileMenuOpen = false)}
    in:fade={{ duration: 200, easing: cubicOut }}
    out:fade={{ duration: 200, easing: cubicOut }}>
  </div>
{/if}

<!-- mobilmeny -->
{#if isMobileMenuOpen}
  <aside 
    class="mobile-aside glass-effect "
    in:fly={{ x: 300, duration: 500, easing: cubicOut }}
    out:fly={{ x: 300, duration: 500, easing: cubicOut }}>

  <div class="mobile-navbar {hideMobileNavbar ? 'is-hidden' : ''}">
      <button 
        on:click={() => (isMobileMenuOpen = false)} 
        class="btn btn-sm btn-ghost" 
        aria-label="Stäng meny">✕
      </button>
    </div>

    <div 
      class="mobile-menu-content"
      bind:this={mobileMenuContent}
      on:scroll={handleMobileMenuScroll}
      role="presentation" 
      tabindex="-1" 
      on:click|stopPropagation
    >
      <nav class="space-y-4 mt-8">
        {#each menuItems as item}
          {#if item.children}
            <div>
              <button
                class="flex items-center justify-between w-full text-left py-2 cursor-pointer"
                on:click={() => openMobileDropdown = openMobileDropdown === item.label ? null : item.label}
                aria-expanded={openMobileDropdown === item.label}
                aria-controls={item.label.replace(/\s+/g, "-") + "-submenu"}>
                <span>{item.label}</span>
                <svg class="w-4 h-4 transition-transform {openMobileDropdown === item.label ? 'rotate-180' : ''}"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {#if openMobileDropdown === item.label}
                <ul id={item.label.replace(/\s+/g, "-") + "-submenu"}
                    class="pl-4 mt-2 space-y-2"
                    in:slide={{ duration: 400, easing: cubicOut }}
                    out:slide={{ duration: 300, easing: cubicOut }}>
                  {#each item.children as child}
                    <li class="my-[20px]">
                      <a href={child.href}
                         on:click={() => closeMobileMenu()}
                         class:active={currentPath === child.href}>
                        {child.label}
                      </a>
                    </li>
                  {/each}
                </ul>
              {/if}
            </div>
          {:else}
            <a href={item.href}
               on:click={() => closeMobileMenu()}
               class="block py-2"
               class:active={currentPath === item.href}>
              {item.label}
            </a>
          {/if}
        {/each}
      </nav>
    </div>
  </aside>
{/if}

<style>
  /* Om du vill kan du justera .active, t.ex.: */
  :global(.active) {
    font-weight: 600;
    color: var(--your-accent-color, #e14304);
  }


  .mobile-aside{
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    max-width: 60vw;
    width: 300px;
    background-color: #ffffff; 
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    z-index: 50;
    display: flex;
    flex-direction: column;
  }

  .mobile-menu-content {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
  }


  /* ====== NYTT: Gemensam glas-effekt för navbarer ====== */

.glass-effect{
  background: rgba(255, 255, 255, 0.6);      
  backdrop-filter: blur(10px);             
  -webkit-backdrop-filter: blur(10px);    
}

.glass-effect-strong{
  background: rgba(255, 255, 255, 0.9);      
  backdrop-filter: blur(20px);             
  -webkit-backdrop-filter: blur(20px);
}

.desktop-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  z-index: 50;
  transition: transform 0.3s ease;
}

.mobile-navbar {
  position: sticky;
  top: 0;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  transition: transform 0.3s ease;
}

/* Scroll-hidden state */
.desktop-navbar.is-hidden,
.mobile-navbar.is-hidden {
  transform: translateY(-100%);
}

.desktop-dropdown{
   position: absolute;
  background-color: #b9b0ac; /* halvtransparent vit */
  padding: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px); /* Safari */
}

</style>
