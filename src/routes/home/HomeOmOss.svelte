<script>

    import bådaBurnoff from '$lib/images/home/båda_burnoff.jpg'

</script>

<div class="wrapper w-[90vw] flex items-center" aria-hidden={bådaBurnoff === "" ? "true" : "false"}>
  <img src={bådaBurnoff} alt="Elin gör en burnoff" />

  <div class="overlay w-70%" role="region" aria-label="AgniShowArts - info">
    <h1>AgniShowArts:
      <span class="sub">Lukas och Elin</span>
    </h1>

    <p>
      Med 7 års gemensam erfarenhet av att uppträda på event, firmafester och födelsedagar vet vi, Lukas och Elin, vad som krävs för att väcka känslor hos en publik. Vi älskar att visa upp eldens skönhet samt spänningen i att hantera och dansa med det destruktiva elementet.
    </p>
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    display: block;
  }

  .wrapper img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* Overlay (grå textruta) */
  .overlay {
    position: absolute;
    left: 90%;               /* börjar 90% in från vänster */
    bottom: 0;               /* sitter i nederkant */
    width: 10%;              /* täcker 10% i sidled (100% - 90%) */
    height: 10%;             /* täcker 10% av bildens höjd uppifrån nederkanten */
    background: rgba(128,128,128,0.85); /* grå, lite genomskinlig */
    color: white;
    padding: 0.6rem;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
  }

  .overlay h1 {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1;
    font-weight: 700;
  }

  .overlay h1 .sub {
    display: block;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .overlay p {
    margin: 0;
    font-size: 0.65rem;
    line-height: 1;
  }

  /* Små justeringar för mycket små overlays: minska textförskjutning */
  @media (max-width: 600px) {
    .wrapper { width: 90vw; }
    .overlay { font-size: 0.8rem; }
  }
</style>
