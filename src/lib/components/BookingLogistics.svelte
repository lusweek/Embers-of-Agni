<script>
  // Delad sektion för "Så funkar bokningen-Det här behöver ni veta".
  // Används på både stora showen och lilla showen så innehållet bara
  // behöver ändras på ett ställe.
  export let intro = "";
</script>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow">Så funkar bokningen</span>
      <h2>Det här behöver ni veta</h2>
      {#if intro}
        <p>{intro}</p>
      {/if}
    </div>

    <div class="logistics">
      <div class="logistics-grid">
        <div class="logistics-col weown">
          <h3>Det här sköter vi</h3>
          <ul class="logi-list">
            <li><span class="logi-mark">✓</span><p><b>Säkerhet.</b> Lukas är utbildad brandman och pyrotekniker. Vi har båda stor erfarenhet av eldshower - säkerhet är alltid vår högsta prioritet, för artister, publik och omgivningen.</p></li>
            <li><span class="logi-mark">✓</span><p><b>Ljud.</b> Vi tar med eget ljudsystem, så ni behöver inte ordna det själva.</p></li>
          </ul>
        </div>
        <div class="logistics-col youbring">
          <h3>Det här behöver vi från er</h3>
          <ul class="logi-list">
            <li><span class="logi-mark">→</span><p><b>En bild på scenen/platsen.</b> Så vi kan planera showen utifrån ytan ni har.</p></li>
            <li><span class="logi-mark">→</span><p><b>Förväntat antal i publiken.</b> Hjälper oss anpassa placering och säkerhetsavstånd.</p></li>
            <li><span class="logi-mark">→</span><p><b>En eldvakt.</b> En frivillig person från er sida som håller en brandsläckare redo under showen.</p></li>
          </ul>
        </div>
      </div>
      <div class="note-strip">
        <span class="icon">*</span>
        <p><b>Bra att veta:</b> mörker är inget krav - elden syns bara som allra bäst efter mörkrets inbrott. Vi har gjort uppskattade shower i dagsljus också, så vi hittar en lösning oavsett tid på dygnet. Läs mer i <a class="link-decoration" href="/info-innan-bokning">info innan bokning</a>.</p>
      </div>
    </div>
  </div>
</section>
