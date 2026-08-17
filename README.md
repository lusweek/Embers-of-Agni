# EGNA ANTECKNINGAR

Rebrand "Vilda Flammor" (branch: vilda-flammor)-Embers of Agni har fått en ny, komplett design.

Nytt sedan rebranden:

- Nya URL:er (/eldshow, /eldshow/stora-showen, /eldshow/lilla-showen, /workshops, /om-oss, /bibliotek, /info-innan-bokning, /boka). Gamla URL:er redirectar automatiskt.
- Nytt designsystem i `src/app.css` (Bebas Neue + Work Sans, mörk kolsvart/vinröd/orange/guld-palett).
- Kontakt/bokning slås ihop till en sida: /boka.

Kvar att göra:

- Byt ut platshållar-citaten och "Har synts på"-loggorna på startsidan mot riktiga kundomdömen/loggor.
- LED-show-sidan (/led-show) är fortfarande ett minimalt utkast, inte länkad i menyn.
- Bekräfta domän (vildaflammor.se är en platshållare i SEO/sitemap tills riktig domän finns) och Instagram-handle (@vildaflammor antaget).


# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Developing

npm run dev

# or start the server and open the app in a new browser tab
```sh
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.



# INSTRUKTIONER BYTA VIDEO WORKSHOPS & HERO 

<!-- Byt ut video i workshops -->
Så byter du ut workshopvideorna själv i framtiden

Videorna ligger i src/lib/videos/workshops/ och heter stav.mp4, dubbelstav.mp4, rockring.mp4, poi.mp4 (plus en -poster.jpg var, som är förhandsbilden innan videon startar).

Enklaste sättet (ingen kod, ingen komprimering):

Döp din nya video till exakt samma namn som den du vill byta ut, t.ex. stav.mp4
Ersätt filen i src/lib/videos/workshops/-mappen
Klart-koden pekar redan på filnamnet, ingen annan ändring behövs

Att tänka på:

Håll klippen korta (10–20 sek) och filstorleken nere (helst under ~20MB)-annars laddar sidan långsamt. Dina telefonklipp var ~70–90MB råa; jag komprimerade dem till 15–19MB.
Om du vill byta till en ny video med annat namn, säg bara till mig vad den heter så uppdaterar jag koden (en rad per video).
Vill du komprimera själv innan du lägger in filen: gratisverktyg som Handbrake funkar bra-sikta på ca 2 Mbps bitrate, ingen ljudspår behövs (videon är ändå mutad).

<!-- Byta video till hero section -->

Samma princip som workshopvideorna-filen ligger i src/lib/videos/ och heter hero-loop.mp4 (plus hero-loop-poster.jpg som är förhandsbilden innan videon startar spelas).

Enklaste sättet:

Döp din nya video till exakt hero-loop.mp4
Lägg den i mappen src/lib/videos/-ersätt den gamla filen
Klart, ingen kod behöver ändras

Att tänka på för just hero-videon:

Den syns direkt när sidan laddar och ligger bakom rubriktexten "Vi sätter scenen i brand"-välj gärna ett klipp där viktiga detaljer inte hamnar precis i nedre vänstra hörnet, eftersom texten ligger där.
Håll den kort och komprimerad (min var ~6MB, 15 sekunder, 1280px bred)-den laddas direkt vid sidbesök så för stor fil gör att startsidan känns långsam.
Uppdatera gärna hero-loop-poster.jpg också (en stillbild från videon)-annars visas den gamla bilden som en blixtbild innan videon hinner starta.