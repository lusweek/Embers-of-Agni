# Vilda Flammor – underlag för bygget av vildaflammor.se

Den här mappen innehåller den **färdiga sajten**: vanliga HTML-filer, bilder och CSS. Den behöver inte byggas om från grunden. Den ska kopplas, laddas upp och testas.

Ge den här filen till Claude Code tillsammans med mappen och skriv till exempel: *"Läs LASMIG-BYGGE.md och hjälp mig publicera sajten."*

---

## 1. Vad mappen innehåller

| Fil / mapp | Vad det är |
|---|---|
| `index.html` | Startsidan |
| `signaturshowen.html`, `soloshowen.html`, `festens-klimax.html`, `att-overvinna-radsla.html` | Eldshowerna (Gnistan ligger på Signaturshowen-sidan, `#gnistan`) |
| `styltmingel.html`, `eldmingel.html`, `prova-pa-flowarts.html`, `for-foretag.html` | Mingel, prova på och företag |
| `skapande-skola.html`, `om-oss.html`, `bibliotek.html`, `info-innan-bokning.html`, `boka.html`, `integritetspolicy.html`, `404.html` | Övriga sidor |
| `stil/` | CSS (`site.css`) och lokala typsnitt. CSS:en finns även inbakad i varje sida. |
| `bilder/` | Optimerade bilder (webp), samt `bilder/dela/` för delningsbilder på sociala medier |
| `installningar.js` | **Den enda filen som behöver ändras** för att koppla formulär och Instagram |
| `sitemap.xml`, `robots.txt` | För Google |
| `_redirects` | Omdirigeringar från gamla adresser (fungerar på Netlify och Cloudflare Pages, se nedan) |

Sajten har redan titel, beskrivning, delningsbilder och strukturerad data (JSON-LD) på varje sida, plus sajtkarta och en 404-sida.

---

## 2. Kvar att göra

### Innan bygget (innehåll – ditt ansvar)
- [ ] Elin ser över hela sidan
- [ ] Bilder på Jonas och Lisen
- [ ] Texten om Kompani Error
- [ ] Vänta in feedback från de som testat sidan
- [ ] Lisen och Jonas godkänner texterna om sig själva
- [ ] Kolla att priserna på Skapande skola stämmer (12 000 kr föreställning + workshop, 6 000 kr redskap, plus resa)
- [ ] Bestäm var sajten ska ligga (webbhotell) och hur vildaflammor.se flyttas dit
- [ ] Bilder till Skapande skola
- [ ] Fler referenser och loggor
- [ ] Uppdatera utrustningen på Prova på flowarts (antal rockringar, poi, långa stavar, dubbelstavar, jongleringsbollar)

### Vid bygget (tekniskt)
- [ ] **Bokningsformuläret → e-post.** Skapa en nyckel på web3forms.com och klistra in den i `installningar.js` (`formularNyckel`).
- [ ] **Flera bilder i formuläret** kräver betald Web3Forms-plan. Sätt då `bilagor: true`.
- [ ] **Instagram i Bibliotek.** Skapa ett JSON-flöde på behold.so och klistra in adressen i `installningar.js` (`instagramFlode`).
- [ ] Kolla att "Innehar F-skatt" i sidfoten stämmer
- [ ] Ladda upp sajten och peka vildaflammor.se dit
- [ ] Testa på riktig iPhone: menyn (scroll på första svepet, animation), formuläret och alla länkar
- [ ] Lägg in sajten i Google Search Console och skicka in `sitemap.xml`

---

## 3. Var sajten kan ligga

Sajten är statisk, så den behöver ingen server, databas eller WordPress.

- **Enklast och gratis:** Netlify eller Cloudflare Pages. Dra in mappen, koppla domänen, klart. `_redirects` fungerar direkt där.
- **Vanligt svenskt webbhotell** (t.ex. one.com, Loopia): ladda upp innehållet i mappen till webbroten. `_redirects` fungerar inte där, så omdirigeringarna behöver göras i webbhotellets inställningar eller i en `.htaccess`.

Sidorna länkar till varandra som `signaturshowen.html` osv., så de fungerar både lokalt och på webbhotell.

---

## 4. Saker som inte får ändras eller sägas fel

- **Fotografer krediteras** på bilderna: Helena Erngård (länk till LinkedIn), Henrik Andersson (instagram.com/henrikandersson), Madelene Westberg (instagram.com/madelenewestberg).
- **Henrik Anderssons bilder får inte bearbetas eller redigeras mer.**
- **Originalbiblioteket** ("Bilbliotek Vilda Flammor (ORGINAL)") får aldrig ändras. Bara bilder i "Bilder till hemsida 2" får redigeras.
- **Elin ska aldrig kallas delägare.**
- **Lova ingen svarstid** (t.ex. "inom 24–48 timmar").
- **Nämn bara orter där ni faktiskt uppträtt.** Hittills Kalmar. Upptagningsområdet är "södra Sverige".
- Stavning: **flowarts** (ett ord).

---

## 5. Tekniska anteckningar

- **Mobilmenyn:** När menyn är öppen fryses sidan bakom (main/footer blir `position:fixed`) och menyn ligger i sidans vanliga flöde, så att det är sidan själv som scrollar. Det löste ett iPhone-fel där första svepet inte scrollade menyn. Ändra inte tillbaka till en egen scrollruta (`overflow:auto`) i menyn.
- **Menyraden** glider upp när man scrollar nedåt och tillbaka när man scrollar uppåt.
- **Bildspel/bibliotek:** Lightbox med miniatyrer (två före och två efter), tydliga pilar och kant-till-kant-bild på mobil. Bilderna har bredd/höjd satta så att inget hoppar när de laddas. Startsidan och Bibliotek laddar alla bilder direkt; övriga sidor laddar dem när man scrollar.
- **Typsnitt** (Bebas Neue, Work Sans) ligger lokalt i `stil/fonter/`, så sajten hämtar inget från Google Fonts.
