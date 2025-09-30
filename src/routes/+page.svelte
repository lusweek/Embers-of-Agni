<script>
    import '../app.css';
    import VideoSection from './home/VideoSection.svelte';

</script>

<VideoSection />

<section class="w-full flex flex-col items-center py-16 px-4 md:px-0">
  <!-- Semerubrik / bold text -->
  <h2 class="text-xl md:text-3xl font-bold text-center max-w-3xl mb-8">
    Proffsiga och välkoreograferade eldshower med dans och teknik med känsla av kraft, lek och flow
  </h2>

  <!-- Enstaka bild under texten -->
  <img 
    src="/path-to-your-image-1.jpg" 
    alt="Eldshow 1" 
    class="w-full max-w-3xl mb-6 object-cover rounded-lg"
  />

  <!-- Två bilder bredvid varandra -->
  <div class="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
    <img 
      src="/path-to-your-image-2.jpg" 
      alt="Eldshow 2" 
      class="w-full md:w-1/2 object-cover rounded-lg"
    />
    <img 
      src="/path-to-your-image-3.jpg" 
      alt="Eldshow 3" 
      class="w-full md:w-1/2 object-cover rounded-lg"
    />
  </div>
</section>


