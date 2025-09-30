<script>
  import { onMount, onDestroy } from "svelte";

  let headlines = [
    "Firmafesten?",
    "Barnkalaset?",
    "50-års festen?",
    "Kulturevenemanget?"
  ];

  function duplicateList(list, times) {
    let result = [];
    for (let i = 0; i < times; i++) {
      result = result.concat(list);
    }
    return result;
  }

  let duplicatedHeadlines = duplicateList(headlines, 20)

  let current = 0;
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      current = (current + 1) % duplicatedHeadlines.length;
    }, 2500); // Byt rubrik var 2 sekunder
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<section class="relative w-full h-[90vh] overflow-hidden">
  <!-- Video background -->
  <!-- <video
    class="absolute top-0 left-0 w-full h-full object-cover"
    src="/path-to-your-video.mp4"
    autoplay
    loop
    muted
    playsinline
  ></video> -->

  <!-- Video temp bakgrund -->
  <div class="absolute top-0 left-0 w-full h-full object-cover bg-red-100">

  </div>


  <!-- Overlay -->
  <div class="absolute inset-0 flex flex-col justify-between items-center text-white px-4">
    <!-- Top heading -->
    <div class="mt-12 text-center">
      <h1 class="text-4xl md:text-6xl font-bold">Underhållning till</h1>

      <div class="relative w-screen h-16 overflow-hidden mt-4">
        {#each duplicatedHeadlines as text, index}
          <h1
            class="absolute w-full text-3xl md:text-5xl font-semibold transition-transform duration-500"
            class:translate-x-0={index === current}
            class:-translate-x-full={index < current}
            class:translate-x-full={index > current}
          >
            {text}
          </h1>
        {/each}
      </div>
    </div>

    <!-- Bottom heading -->
    <div class="mb-12 text-center">
      <h2 class="text-3xl md:text-5xl font-bold">
        Vi fixar showen!
      </h2>
    </div>
  </div>
</section>

<style>
/* Tailwind klasser används för det mesta, men du kan lägga till extra fade-effekt om du vill */
</style>

