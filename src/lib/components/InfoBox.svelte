<script>
  export let title = "";
  export let image = "";
  export let fetchpriority = ""
  export let loading = ""
  export let imageAlt = "";
  export let imageHeight = ""
</script>

<div class="info-container">
  <h2 class="h2-title">{title}</h2>

  {#if image}
    <img 
      src={image} 
      alt={imageAlt}
      fetchpriority = {fetchpriority}
      loading={loading}
      class="image mb-8" 
      style={`height: ${imageHeight};`}   
    />
  {/if}

   <slot></slot>
</div>

<style>
    .info-container {
   margin: auto;
   width: 90%;
   max-width: 400px;
   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.image{
  margin: auto;
}

</style>