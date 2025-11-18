<script>
  export let status = ""; // "", "loading", "success", "error"
</script>

{#if status}
  <div class="loader-overlay">
    {#if status === "loading"}
    <div class="flex flex-col items-center">
        <h2 class="text-lg">Skickar meddelande...</h2>
        <span class="text-white w-[40px] loading loading-infinity loading-xl">skickar meddelande</span>
    </div>
    {:else if status === "success"}
      <span class="text-green-500 text-2xl font-[500] text-center">Ditt meddelande har skickats<br><br>✔</span>
    {:else if status === "error"}
      <span class="text-red-500 text-2xl font-[500] text-center">Något gick snett<br><br>❌<br><br>Prova igen</span>
    {/if}
  </div>
{/if}

<style>
  .loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.7); /* grå genomskinlig */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* ovanpå allt */
  }
</style>
