<script>
  export let title = "";
  export let image = "";
  export let imageAlt = "";
</script>

<div class="info-container">
  <h2 class="h2-title">{title}</h2>

  {#if image}
    <img src={image} alt={imageAlt} class="mb-8" />
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



</style>