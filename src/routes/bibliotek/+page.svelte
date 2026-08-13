<script>
  import { mediaPage } from "$lib/seo/mediaPage";

  const imageFiles = import.meta.glob("/src/lib/images/design-reference/*.webp", {
    eager: true,
    import: "default"
  });

  function img(name) {
    return imageFiles[`/src/lib/images/design-reference/${name}.webp`];
  }

  // Kurerad lista över bilder till biblioteket (samma urval som i designen)
  const gallery = [
    { file: "7r406884", alt: "Eldkonstnär med eldredskap" },
    { file: "7r406899", alt: "Eldkonstnär med eldredskap" },
    { file: "7r406925", alt: "Eldkonstnär med eldredskap" },
    { file: "7r407255", alt: "Eldkonstnär med eldredskap" },
    { file: "7r407277", alt: "Eldkonstnär med eldredskap" },
    { file: "7r407395", alt: "Eldkonstnär med eldredskap" },
    { file: "7r407493", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5580", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5625", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5677", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5717", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5743", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5913", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5936-8061093d", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5966", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5977", alt: "Eldkonstnär med eldredskap" },
    { file: "010a6001", alt: "Eldkonstnär med eldredskap" },
    { file: "010a6080", alt: "Eldkonstnär med eldredskap" },
    { file: "010a6180", alt: "Eldkonstnär med eldredskap" },
    { file: "att-tm-43zde44nan2aiy9zeg-xlhfjqap2dcfeakv6c4z0", alt: "Eldshow bild" },
    { file: "dubbelstav-bra-1-a1fe5e49", alt: "Duon med dubbelstav" },
    { file: "dubbelstav-bra-5", alt: "Duon med dubbelstav" },
    { file: "dubbelstav-bra-6", alt: "Duon med dubbelstav" },
    { file: "dubbelstaw", alt: "Duon med dubbelstav" },
    { file: "duoshow", alt: "Duon Vilda Flammor eldshow" },
    { file: "duoshow-med-tema", alt: "Duon Vilda Flammor eldshow" },
    { file: "eldshower", alt: "Eldshow" },
    { file: "elin-1", alt: "Elin med eldredskap" },
    { file: "elin-3", alt: "Elin med eldredskap" },
    { file: "elin-4", alt: "Elin med eldredskap" },
    { file: "image00001", alt: "Eldshow bild" },
    { file: "img-1913", alt: "Eldshow bild" },
    { file: "img-8300", alt: "Eldshow bild" },
    { file: "img-8529", alt: "Eldshow bild" },
    { file: "lukas-1", alt: "Lukas med eldredskap" },
    { file: "lukas-karna-spin", alt: "Lukas med eldredskap" },
    { file: "messenger-creation-cfcfee6e-04f6-4829-8cee-eb6c810bc84a", alt: "Eldshow bild" },
    { file: "oss-1", alt: "Vilda Flammor porträtt" },
    { file: "oss-2", alt: "Vilda Flammor porträtt" },
    { file: "oss-3", alt: "Vilda Flammor porträtt" },
    { file: "pxl-20260215-183824216", alt: "Eldshow bild" },
    { file: "pxl-20260215-183825067", alt: "Eldshow bild" },
    { file: "pxl-20260215-183826396", alt: "Eldshow bild" },
    { file: "pxl-20260215-183919821", alt: "Eldshow bild" },
    { file: "sa106044", alt: "Eldshow på scen" },
    { file: "sa106163", alt: "Eldshow på scen" },
    { file: "sa106203", alt: "Eldshow på scen" },
    { file: "sa106223", alt: "Eldshow på scen" },
    { file: "se-mer-2", alt: "Eldshow closeup" },
    { file: "se-mer-3", alt: "Eldshow closeup" },
    { file: "till-mail-2", alt: "Eldshow bild" },
    { file: "turbostav-bra-1", alt: "Eldkonstnär med turbostav" },
    { file: "turbostav-bra-2", alt: "Eldkonstnär med turbostav" },
    { file: "turbostav-bra-4", alt: "Eldkonstnär med turbostav" },
    { file: "turbostav-bra-5", alt: "Eldkonstnär med turbostav" }
  ];

  let lightboxItem = null;

  function openLightbox(item) {
    lightboxItem = item;
  }

  function closeLightbox() {
    lightboxItem = null;
  }
</script>

<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(mediaPage)}
  </script>
  <title>Bibliotek – Bilder från tidigare shower – Vilda Flammor</title>
  <meta name="description" content="Se bilder från våra eldshower och eldartister i action. Biblioteket visar upp eldperformance, flowarts och spektakulära shower från olika event." />
</svelte:head>

<section class="hero-simple">
  <div class="wrap">
    <span class="eyebrow">Bibliotek</span>
    <h1>Bilder från tidigare shower</h1>
    <p class="lead">Klicka på en bild för att se den i större format. Fler bilder fylls på allt eftersom.</p>
  </div>
</section>

<div class="wrap">
  <div class="masonry">
    {#each gallery as item}
      <figure on:click={() => openLightbox(item)}>
        <img src={img(item.file)} alt={item.alt} loading="lazy" />
      </figure>
    {/each}
  </div>
</div>

<section style="padding:20px 0 70px;text-align:center;">
  <div class="wrap">
    <p style="color:var(--ink-dim);font-size:16px;margin-bottom:16px;">Fler bilder och klipp hittar du på vårt Instagram.</p>
    <a href="https://www.instagram.com/vildaflammor/" target="_blank" rel="noopener" class="btn-primary">Följ oss på Instagram →</a>
  </div>
</section>

{#if lightboxItem}
  <div class="lightbox open" on:click={closeLightbox}>
    <div class="lightbox-close" on:click|stopPropagation={closeLightbox}>✕</div>
    <img src={img(lightboxItem.file)} alt={lightboxItem.alt} on:click|stopPropagation />
  </div>
{/if}

<svelte:window on:keydown={(e) => { if (e.key === "Escape") closeLightbox(); }} />
