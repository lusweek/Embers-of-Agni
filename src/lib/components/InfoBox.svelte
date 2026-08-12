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
   margin: 40px auto;
   width: 90%;
   max-width: 460px;
   background: var(--bg-alt);
   border: 1px solid rgba(255, 201, 74, 0.15);
   border-radius: var(--radius);
   padding: 32px 34px 36px;
   text-align: center;
}

.image{
  margin: 0 auto 20px auto;
  border-radius: 14px;
  max-width: 100%;
}

</style>