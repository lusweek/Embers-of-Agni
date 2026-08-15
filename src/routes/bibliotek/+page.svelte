<script>
  import { mediaPage } from "$lib/seo/mediaPage";

  const imageFiles = import.meta.glob(
    ["/src/lib/images/design-reference/*.webp", "/src/lib/images/first-camp/*.webp"],
    { eager: true, import: "default" }
  );

  function img(name, folder = "design-reference") {
    return imageFiles[`/src/lib/images/${folder}/${name}.webp`];
  }

  // Kurerad lista över bilder till biblioteket. Ordningen är medvetet blandad
  // (natt/dag, olika serier om vartannat) istället för grupperad efter shoot,
  // så att grannbilder får så stor visuell kontrast som möjligt.
  const gallery = [
    { file: "lifebym-lukas-006", folder: "first-camp", alt: "Eldkonstnär kastar en eldkrona i luften" },
    { file: "7r406884", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5743", alt: "Eldkonstnär med eldredskap" },
    { file: "dubbelstav-bra-6", alt: "Duon med dubbelstav" },
    { file: "lifebym-lukas-044", folder: "first-camp", alt: "Eldkonstnär med eldkedjor i solnedgång" },
    { file: "img-8529", alt: "Eldshow bild" },
    { file: "sa106044", alt: "Eldshow på scen" },
    { file: "7r406899", alt: "Eldkonstnär med eldredskap" },
    { file: "lifebym-lukas-087", folder: "first-camp", alt: "Eldkonstnär med eldring i rörelse" },
    { file: "010a5913", alt: "Eldkonstnär med eldredskap" },
    { file: "dubbelstaw", alt: "Duon med dubbelstav" },
    { file: "lukas-1", alt: "Lukas med eldredskap" },
    { file: "lifebym-lukas-009", folder: "first-camp", alt: "Duo krönd med eldkrona på stranden" },
    { file: "sa106163", alt: "Eldshow på scen" },
    { file: "7r406925", alt: "Eldkonstnär med eldredskap" },
    { file: "lifebym-lukas-060", folder: "first-camp", alt: "Eldkonstnär med turbostav vid vattnet" },
    { file: "010a5936-8061093d", alt: "Eldkonstnär med eldredskap" },
    { file: "duoshow", alt: "Duon Vilda Flammor eldshow" },
    { file: "lukas-karna-spin", alt: "Lukas med eldredskap" },
    { file: "lifebym-lukas-095", folder: "first-camp", alt: "Eldkonstnär balanserar eldstav" },
    { file: "sa106203", alt: "Eldshow på scen" },
    { file: "7r407255", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5966", alt: "Eldkonstnär med eldredskap" },
    { file: "lifebym-lukas-012", folder: "first-camp", alt: "Eldkonstnär med eldkrona vid vattnet" },
    { file: "duoshow-med-tema", alt: "Duon Vilda Flammor eldshow" },
    { file: "messenger-creation-cfcfee6e-04f6-4829-8cee-eb6c810bc84a", alt: "Eldshow bild" },
    { file: "lifebym-lukas-067", folder: "first-camp", alt: "Eldkonstnär med eldstav mot himlen" },
    { file: "sa106223", alt: "Eldshow på scen" },
    { file: "7r407277", alt: "Eldkonstnär med eldredskap" },
    { file: "010a5977", alt: "Eldkonstnär med eldredskap" },
    { file: "lifebym-lukas-098", folder: "first-camp", alt: "Eldkonstnär med eldstavar i vinklat kryss" },
    { file: "eldshower", alt: "Eldshow" },
    { file: "oss-1", alt: "Vilda Flammor porträtt" },
    { file: "se-mer-2", alt: "Eldshow closeup" },
    { file: "lifebym-lukas-013", folder: "first-camp", alt: "Eldkonstnär med eldkrona i solnedgång" },
    { file: "7r407395", alt: "Eldkonstnär med eldredskap" },
    { file: "010a6001", alt: "Eldkonstnär med eldredskap" },
    { file: "lifebym-lukas-076", folder: "first-camp", alt: "Eldkonstnär med eldkedjor och publik" },
    { file: "elin-1", alt: "Elin med eldredskap" },
    { file: "oss-2", alt: "Vilda Flammor porträtt" },
    { file: "se-mer-3", alt: "Eldshow closeup" },
    { file: "lifebym-lukas-103", folder: "first-camp", alt: "Eldkonstnär med eldstavar högt över huvudet" },
    { file: "7r407493", alt: "Eldkonstnär med eldredskap" },
    { file: "010a6080", alt: "Eldkonstnär med eldredskap" },
    { file: "elin-3", alt: "Elin med eldredskap" },
    { file: "lifebym-lukas-015", folder: "first-camp", alt: "Eldkonstnär med eldkrona i rörelse" },
    { file: "oss-3", alt: "Vilda Flammor porträtt" },
    { file: "turbostav-bra-1", alt: "Eldkonstnär med turbostav" },
    { file: "010a5580", alt: "Eldkonstnär med eldredskap" },
    { file: "lifebym-lukas-079", folder: "first-camp", alt: "Eldkonstnär med kryssade eldstavar" },
    { file: "010a6180", alt: "Eldkonstnär med eldredskap" },
    { file: "elin-4", alt: "Elin med eldredskap" },
    { file: "lifebym-lukas-104", folder: "first-camp", alt: "Vilda Flammor minglar med publik" },
    { file: "pxl-20260215-183824216", alt: "Eldshow bild" },
    { file: "turbostav-bra-2", alt: "Eldkonstnär med turbostav" },
    { file: "010a5625", alt: "Eldkonstnär med eldredskap" },
    { file: "lifebym-lukas-020", folder: "first-camp", alt: "Eldkonstnär med eldfläkt vid vattnet" },
    { file: "att-tm-43zde44nan2aiy9zeg-xlhfjqap2dcfeakv6c4z0", alt: "Eldshow bild" },
    { file: "image00001", alt: "Eldshow bild" },
    { file: "pxl-20260215-183825067", alt: "Eldshow bild" },
    { file: "lifebym-lukas-081", folder: "first-camp", alt: "Eldkonstnär med eldring runt halsen" },
    { file: "turbostav-bra-4", alt: "Eldkonstnär med turbostav" },
    { file: "010a5677", alt: "Eldkonstnär med eldredskap" },
    { file: "lifebym-lukas-105", folder: "first-camp", alt: "Vilda Flammor med glada gäster" },
    { file: "dubbelstav-bra-1-a1fe5e49", alt: "Duon med dubbelstav" },
    { file: "img-1913", alt: "Eldshow bild" },
    { file: "pxl-20260215-183826396", alt: "Eldshow bild" },
    { file: "lifebym-lukas-039", folder: "first-camp", alt: "Eldkonstnär med eldkedjor framför publik" },
    { file: "turbostav-bra-5", alt: "Eldkonstnär med turbostav" },
    { file: "010a5717", alt: "Eldkonstnär med eldredskap" },
    { file: "dubbelstav-bra-5", alt: "Duon med dubbelstav" },
    { file: "lifebym-lukas-082", folder: "first-camp", alt: "Eldkonstnär blåser eld" },
    { file: "img-8300", alt: "Eldshow bild" },
    { file: "pxl-20260215-183919821", alt: "Eldshow bild" }
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

<section style="padding:0 0 36px;text-align:center;">
  <div class="wrap">
    <p style="color:var(--ink-dim);font-size:16px;margin-bottom:16px;">Fler bilder och klipp hittar du på vårt Instagram.</p>
    <a href="https://www.instagram.com/vildaflammor/" target="_blank" rel="noopener" class="btn-primary">Följ oss på Instagram →</a>
  </div>
</section>

<div class="wrap">
  <div class="masonry">
    {#each gallery as item}
      <figure on:click={() => openLightbox(item)}>
        <img src={img(item.file, item.folder)} alt={item.alt} loading="lazy" />
      </figure>
    {/each}
  </div>
</div>

{#if lightboxItem}
  <div class="lightbox open" on:click={closeLightbox}>
    <div class="lightbox-close" on:click|stopPropagation={closeLightbox}>✕</div>
    <img src={img(lightboxItem.file, lightboxItem.folder)} alt={lightboxItem.alt} on:click|stopPropagation />
  </div>
{/if}

<svelte:window on:keydown={(e) => { if (e.key === "Escape") closeLightbox(); }} />
