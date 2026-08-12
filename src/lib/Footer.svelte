<script>
  import { Phone, Instagram, Mail } from "lucide-svelte";

  const links = [
    { label: "Eldshow", href: "/eldshow" },
    { label: "Workshops", href: "/workshops" },
    { label: "Bibliotek", href: "/bibliotek" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Kontakt", href: "/boka" }
  ];
</script>

<footer class="vf-footer">
  <div class="wrap">
    <div class="foot-grid">
      <a class="brand" href="/">Vilda<span>Flammor</span></a>

      <ul class="foot-links">
        {#each links as link}
          <li><a href={link.href}>{link.label}</a></li>
        {/each}
      </ul>

      <div class="foot-contact">
        <a href="tel:+46738546407">
          <Phone size="16" />
          <span>073 854 64 07</span>
        </a>
        <a href="https://www.instagram.com/vildaflammor" title="Vilda Flammor" target="_blank" rel="noopener noreferrer">
          <Instagram size="16" />
          <span>Vilda Flammor</span>
        </a>
        <a href="mailto:vildaflammor@gmail.com">
          <Mail size="16" />
          <span>vildaflammor@gmail.com</span>
        </a>
      </div>
    </div>

    <p class="foot-note">© Vilda Flammor {new Date().getFullYear()} — Eldshow, workshops & elduppträdanden i hela Sverige.</p>
  </div>
</footer>
