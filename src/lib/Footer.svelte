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
    <div class="foot-top">
      <div class="foot-brand">
        <a class="brand" href="/">Vilda<span>Flammor</span></a>
        <p class="foot-tagline">Eldshow & workshops i Kalmar, Göteborg och i hela Sverige.</p>
      </div>

      <nav class="foot-links" aria-label="Sidfotsnavigering">
        {#each links as link}
          <a href={link.href}>{link.label}</a>
        {/each}
      </nav>
    </div>

    <div class="foot-bottom">
      <div class="foot-contact">
        <a href="tel:+46738546407">
          <Phone size="15" />
          <span>073 854 64 07</span>
        </a>
        <a href="https://www.instagram.com/vildaflammor" title="Vilda Flammor" target="_blank" rel="noopener noreferrer">
          <Instagram size="15" />
          <span>Instagram</span>
        </a>
        <a href="mailto:vildaflammor@gmail.com">
          <Mail size="15" />
          <span>vildaflammor@gmail.com</span>
        </a>
      </div>

      <p class="foot-note">© Vilda Flammor AB {new Date().getFullYear()}</p>
    </div>
  </div>
</footer>
