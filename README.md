# Vilda Flammor – ny hemsida (designunderlag)

Det här är den färdiga designen för vildaflammor.se, exporterad från Claude Design som vanliga HTML-filer.
Varje sida fungerar fristående: öppna `index.html` i en webbläsare och klicka runt.

Målet är att bygga om detta till en riktig sajt (t.ex. Astro, Next.js eller SvelteKit) med **exakt samma utseende,
texter, bilder och animationer**. Behandla HTML-filerna som facit.

---

## Mappstruktur

```
vildaflammor/
├── index.html …                14 sidor (se tabellen nedan)
├── bilder/                     alla foton, logotyp, och bakgrunder (eld + silver + gnisttextur)
├── stil/site.css               den gemensamma stilmallen (identisk med <style> i varje sida)
└── verktyg/
    ├── firegen.py              genererar eldbakgrunderna
    ├── silvergen.py            genererar silverbakgrunderna (gerb/silverfontän)
    └── gnistor.py              genererar de animerade gnistorna i bakgrunderna
```

## Sidor

| Fil | Föreslagen URL | Tema | Innehåll |
|---|---|---|---|
| index.html | / | Eld | Startsida: hero, alla shower, Mingel & prova på, företagsband (silver), Skapande skola, bildremsa, recensioner, "Det här ingår", artister, Vanliga frågor |
| signaturshowen.html | /eldshow/signaturshowen | Eld | Huvudakt med pyroteknik + kompakt version "Gnistan" |
| festens-klimax.html | /eldshow/festens-klimax | **Silver** | Kort och intensiv företagsshow |
| soloshowen.html | /eldshow/soloshowen | Eld | En artist, mest prisvärd |
| att-overvinna-radsla.html | /eldshow/att-overvinna-radsla | Eld | 25 min föreställning med 4 artister (Lisen och Jonas från Kompani Error) |
| styltmingel.html | /styltmingel | Eld | Styltor, jonglering, rockring – gästerna får prova |
| eldmingel.html | /eldmingel | Eld | Eld när gästerna anländer |
| prova-pa-flowarts.html | /prova-pa-flowarts | Eld | Aktivitet för vuxna/företag |
| for-foretag.html | /for-foretag | **Silver** | "Företagsdagen" – hur alla delar hänger ihop |
| skapande-skola.html | /workshops | **Ljust** | Skapande skola, priser för skolor |
| om-oss.html | /om-oss | Eld | Om företaget och artisterna |
| bibliotek.html | /bibliotek | Eld | Bildgalleri med lightbox |
| info-innan-bokning.html | /info-innan-bokning | Eld | Praktisk info |
| boka.html | /boka | Eld | Bokningsformulär |

**Meny:** Eldshow ▾ (4 shower) · Mingel & prova på ▾ (Styltmingel, Eldmingel, Prova på flowarts) · För företag · Skapande skola · Om oss · Bibliotek · knappen "Boka show".
`/eldshow` ska peka på startsidans showsektion (`/#shower`) – det finns ingen separat eldshowsida.
**Mobilmeny:** panel som glider in från höger, full höjd under menyraden, 40 % av bredden (min 320 px) och 95 % på telefon (≤ 640 px).

## Designsystem

- **Typsnitt:** Bebas Neue (rubriker) och Work Sans (brödtext), från Google Fonts.
- **Färger (eld):** bakgrund `#0d0806`, text `#f5eee3`, brödtext `#d6cbbd`, guld `#ffc94a` / `#d9a441`, knappgradient orange→guld.
- **Ljusa sektioner** (`.light-sec`): kräm `#f4ece0` med mörkbrun text.
- **Silvertema** (`.vf-root.silver` och `.corp-band.silver`): bakgrund `#0b0f15`, brödtext `#d3dae3`, silvervita gnistor och silverlinjer. Knapparna är fortfarande guld/orange (varumärket).
- **Ljust tema** (`.vf-root.theme-light`, bara Skapande skola): krämvit med petrol `#1d3433` och orange/teal.
- Små hörnradier (3–4 px) överallt. Sektioner skiljs åt med en tunn guldlinje (silver i silvertemat), aldrig snedklippta kanter.

## Bakgrunder

Bakgrunderna sätts med klasser på sektionerna. Alla bilder finns i `bilder/`.

| Klass | Bild (eldtema) | Bild (silvertema) |
|---|---|---|
| `.bg-eld` (höga ytor, t.ex. showlistan och `.lower-fire`) | rok-och-glod-liggande-utan-mitt-2160x4200.webp | silver-tall.webp |
| `.bg-rok2`, `.bg-barn` | rok-och-glod-liggande-utan-mitt-2400x1500.webp | silver-wide.webp |
| `.bg-rok`, `.bg-eld2` | barnstensglod-staende-utan-mitt-2400x1500.webp | silver-wide.webp |
| `.lead-block`, `.gnistan-sec` (mörkare variant) | samma men med mörkare överlägg | silver-wide2.webp |
| Bildremsan på startsidan | remsa-eld-2880x1000.webp (lågor längs nederkanten) | – |

- "Det här ingår" och "Vanliga frågor" på startsidan använder samma lugna bild som showsektionen (2160x4200), förstorad 142 % så att de stora lågorna i kanterna klipps bort.
- `.lower-fire` omsluter de nedre sektionerna på en sida så att bakgrunden blir **en** sammanhängande bild utan skarvar.
- Eldshowsidorna (`.show-page`) har ett extra mörkt lager över bakgrunden och textskugga för läsbarhet – men **ingen** textskugga i den orange bokningsrutan (`.ctaband`).

## Animerade gnistor

Varje bakgrundssektion innehåller ett `<div class="sparkfield">` med små `<span>`:
- `.spk` (r1–r4) stiger och tonar ut, 8–14 s per varv.
- `.tw` blinkar på plats, 6–11 s. `.tw.star` har ett litet korsformat sken.

Positionerna är slumpade i förväg och ligger direkt i HTML:en. `verktyg/gnistor.py` visar logiken och de antal som används. Gör gärna en komponent av det. Respektera `prefers-reduced-motion` (finns redan i CSS:en).

## Interaktivitet att återskapa

- Mobilmeny (hamburgare) och dropdowns i menyn.
- Bildremsa på startsidan som scrollar oändligt och öppnar en lightbox.
- Lightbox i Bibliotek (pilar, stäng, fotokredit under bilden).
- Vanliga frågor: `<details name="faq">` – bara en öppen åt gången, mjuk öppningsanimation.
- Bokningsformuläret på /boka: **skickar inget i dag**, utan visar bara en tackruta. Det behöver kopplas till e-post eller en formulärtjänst.
- Knapp för att kopiera e-post/telefon.

## Regler för innehållet (viktigt)

- **Företagsdagen:** eldmingel ligger *alltid först* (när gästerna anländer) om det är med. Styltmingel och prova på kan ligga i valfri ordning. **Eldshowen är alltid sist**, det sista som händer innan gästerna går hem.
- Priser för Skapande skola anges **ex moms**. Mingel och prova på har inga publicerade priser (offert).
- Signaturshowens pris med pyroteknik visas inte på sajten.
- Vi tar uppdrag i **södra Sverige**. Påstå inte att vi har uppträtt på platser där vi inte har varit.
- **Fotokredit:** bilder av fotografen Helena Erngård ska alltid visas med texten "Foto: Helena Erngård" (klassen `.photo-credit` ovanpå bilden, och under bilden i lightboxen). Det gäller filerna `n-klimax`, `n-gnistan`, `n-solo` och alla `h-*`. Hon vill bli taggad när bilderna används.

## Bilder

- `n-*` = huvudbilder för shower, mingel, Om oss och porträtt (`n-lukas`, `n-elin`).
- `b-*` = biblioteksbilder. `h-*` = Helena Erngårds bilder (kräver fotokredit).
- `styltmingel.webp` är beskuren så att bara Lukas och Elin syns.
- Skapande skola har ännu inga nya bilder – `workshop-blured.webp` är kvar tills vidare.

## Kvar att fixa

- Jens kort är tillfälligt borttaget (startsidan och Om oss). Texten finns sparad hos designern.
- Texter med hakparenteser, t.ex. "[favoritredskap]" på artistkorten och texterna om Lisen, Jonas och Kompani Error.
- Porträtt för Lisen och Jonas.
- Nya bilder för Skapande skola.

## Skapa nya bakgrunder

Kräver Python 3 med `numpy`, `scipy` och `pillow`. Bilderna sparas i `bilder/genererade/`.

```bash
cd verktyg
# eld (samma som på sajten)
python3 firegen.py rok-och-glod-liggande-utan-mitt:2160x4200 rok-och-glod-liggande-utan-mitt:2400x1500 barnstensglod-staende-utan-mitt:2400x1500
# silver (namn:BREDDxHÖJD:seed)
python3 silvergen.py silver-tall:2160x4200:3 silver-wide:2400x1500:7 silver-wide2:2400x1500:11
```

Byt seed-numret för att få en ny variant i samma stil.

---

### Förslag på första instruktion till Claude Code

> Läs README.md. Bygg om sajten i mappen som en Astro-sajt (eller annat ramverk du föreslår) med exakt samma utseende som HTML-filerna. Bryt ut den gemensamma menyn, sidfoten, gnistfälten och bakgrundssektionerna till komponenter, använd stil/site.css som grund och flytta bilderna till public/. Jämför sida för sida mot originalen när du är klar.


## Koppla formulär och Instagram

Allt ställs in i **installningar.js**. Inget annat behöver ändras.

**Bokningsformuläret.** Registrera bokningsadressen på web3forms.com (gratis). Klistra in nyckeln du får som `formularNyckel`. Varje förfrågan kommer då som ett mejl. Om ni svarar på mejlet går svaret direkt till kunden. Gratisplanen tar inte emot bilagor, så bildfältet är dolt tills `bilagor` sätts till `true` med en betald plan. Skicka gärna ett testformulär efter att sajten är uppe.

**Instagram.** Skapa ett JSON-flöde på behold.so, inloggad som @vildaflammor. Gratisplanen räcker. Klistra in flödets adress som `instagramFlode`. De sex senaste inläggen ersätter då platshållarbilderna, med er egen design. Om flödet inte svarar ligger platshållarna kvar.

Sidorna är vanliga statiska filer. De kan ligga på samma ställe som vildaflammor.se i dag (bakom Cloudflare), till exempel Cloudflare Pages. Ladda upp hela mappen.

## SEO, GDPR och vidarekopplingar

- **Varje sida** har titel, beskrivning, delningsbild (`bilder/dela/`) och kanonisk adress. Startsidan har även företagsdata för Google (organisationsnummer, telefon, Instagram).
- **sitemap.xml** och **robots.txt** ligger i roten. Lägg in sajten i Google Search Console och skicka in `https://vildaflammor.se/sitemap.xml` när den är uppe.
- **_redirects** (Cloudflare Pages) skickar gamla adresser vidare, t.ex. `/workshops` → `/skapande-skola`. Lägg till fler rader om ni hittar gamla länkar.
- **404.html** visas automatiskt för adresser som inte finns.
- **Typsnitten** ligger i `stil/fonter/` i stället för att hämtas från Google, så inga besökar-IP skickas dit.
- **integritetspolicy.html** beskriver hur formuläruppgifter hanteras. Uppdatera den om ni byter formulär- eller e-posttjänst.
- **Bilder** finns i två storlekar: full (max 1800 px) och `-1200` för mobiler. Webbläsaren väljer själv.
