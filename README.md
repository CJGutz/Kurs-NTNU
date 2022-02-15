# Velkommen til API-workshop! 🤓

## Emoji-guide

Du kommer til å se noen emojis i oppgavene. De betyr ca det her:

- 🏆 Oppgave: Her er hva du skal gjøre
- 💡 Tips: Litt ekstra info som kan være greit å lære for å løse en oppgave
- 🚨 Løsningsforslag: Her finner du en komplett gjennomgang av hvordan du _kan_ løse oppgaven
- 🧠 Dypdykk: Lenker og tips til hva man kan lese mer om for å få en dypere forståelse.

# DEL 1

I denne delen skal vi lære oss å konstruere requester og bruke disse for å hente ut data fra et åpent API som eies av Digitaliseringsdirektoratet ved hjelp av verktøyet Postman.

## Oppsett

Dersom du ikke allerede har lastet ned Postman, gjør det nå: https://www.postman.com/downloads/. Det er alt du trenger til denne delen!

## Oppgaver

### Oppgave 1

Vi starter veldig enkelt og skal bare hente ut restaurantene i listen fra https://smilefjes.herokuapp.com/tilsyn.
Dokumentasjonen på dette finner du på https://smilefjes.herokuapp.com/api-docs/.

Ta en titt på all dataen du får ut. Denne skal vi i senere oppgaver vise i vår egen tjeneste 💥

<details><summary>🚨 Løsningsforslag</summary>
Pass på at du gjør en GET-request og legg inn URLen under

```
https://smilefjes.herokuapp.com/tilsyn
```

</details>

### Oppgave 2

Nå skal vi ikke hente ut alle de 100 første restaurantene. I stedet skal vi hente ut alle restauranter som oppfyller et krav. Forslaget vårt er å velge et postnummer, f. eks. 7030 i Trondheim. Får du det til med en variabel må du gjerne legge til flere.

<details><summary>💡 Tips</summary>
Vi må huske på å ha med `?` før våre parametere
</details>

<details><summary>🚨 Løsningsforslag</summary>
Bytt ut URLen i oppgave 1 med den under:

```ts
https://smilefjes.herokuapp.com/tilsyn?postnummer=7030
```

</details>

### Konklusjon

Godt jobbet! Nå er du ferdig med del 1 og har lært deg å gjøre enkle kall til et åpent API 💯

# DEL 2

I denne delen skal vi ta det et hakk videre. Nå skal vi se på hvordan vi kan konsumere data fra et eksisterende API inn vår egen frontend-applikasjon. Vi skal jobbe med en nesten ferdig frontend applikasjon. Applikasjonen lar brukerne se data om mattilsynets tilsyn på spisesteder i Oslo, Bergen og Trondheim. Det som gjenstår på applikasjonen er å koble den opp mot API'et vi brukte i første oppgave.

## Oppsett

Om du ikke har gjort det allerede må du klone dette repoet før vi starter.

Om du ikke har jobbet med git og github kan du lese mer om [git](https://git-scm.com/book/en/v2), og hvordan man kloner repoer fra [GitHub](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository). Om du bare vil komme i gang kan [Github Desktop](https://desktop.github.com/) være en fin løsning.

Når du har fått klonet repoet åpner du det i en egnet editor. Om du ikke har en installert en fra før er [Visual Studio Code](https://code.visualstudio.com/) en av de mest populære.

Åpne en terminal og naviger til rotmappen av repoet. Her må du kjøre to kommandoer for å få applikasjonen til å starte.
Først må vi laste ned alle pakker applikasjonen trenger for å starte. Dette gjøres ved å kjøre denne kommandoen:

```Shell
npm install
```

Deretter skal vi starte opp applikasjonen med:

```bash
npm run start
```

Når applikasjonen starter skal nettleseren din automatisk åpnes med applikasjonen. Om den ikke gjør det kan du gå inn på nettadressen [http://localhost:3000/](http://localhost:3000/).

## Oppgaver

Når du trykker på "Hent tilsyn" i appen skjer det ingenting. Dette er fordi vi må koble sammen frontend med backend 🤓
Oppgaveteksten til hver oppgave finner du i oppgavefilene. Vi skal bruke API'et fra del 1. Dokumentasjonen på dette finner du på https://smilefjes.herokuapp.com/api-docs/.

### Oppgave 1

Finn filen `oppgave1.ts`. Her skal vi gjøre applikasjonen i stand til å hente en liste med tilsyn.

<details><summary>🚨 Løsningsforslag</summary>
Bytt ut innholdet i url-variablen til dette:

```ts
const url = "https://smilefjes.herokuapp.com/tilsyn";
```

</details>

Når du har fått løst oppgaven skal appen vise en liste med tilsyn. Det betyr at vi har klart å koble sammen vår frontend-applikasjon med et eksternt API. Nå henter vi ut alle tilsyn. I neste oppgave skal vi se på hvordan vi kan hente ut kun de tilsynene vi er interessert i.

<details><summary>🧠 Dypdykk</summary>
Om du så litt etter la du merke til at vi brukte `fetch()` til å hente data. Om du har lyst til å lage flere webapplikasjoner som henter data fra web kommer du garantert til å ha nytte av å kunne mer om dette. MDN har en fin guide: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API.

```ts
fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

</details>

### Oppgave 2

Finn filen `oppgave2.ts`. Her skal vi gjøre applikasjonen i stand til å hente ut kun de tilsynene vi har lyst på ved å bruke query-parametere, også kjent som query params.

<details><summary>💡 Tips</summary>

#### Query params

Husk at query params legges til på slutten av URLen på følgende format: `?variabel1=verdiPåVariabel1&variabel2=verdiPåvariabel2`.

En hel URL vil da bli seende ut som dette:

```ts
"http://example.com/movies?year=2021&genre=thriller";
```

#### String/tekststreng i JavaScript

Det finnes mange måter å håndtere tekststrenger med variabler i JavaScript. Den letteste er kanskje å bare plusse alle de ulike strengene sammen på denne måten:

```js
const year = "2021";
const genre = "thriller";

const url =
  "http://example.com/movies?" + "year=" + year + "&" + "genre=" + genre;
```

Men JavaScript har også noe som heter template literals. Dette pleier ofte å bli ganske mye lettere å lese når det blir flere variabler. Her er akkurat samme tekststreng ved bruk template literals. Legg merke til bruk av backtikcs: `

```js
const year = "2021";
const genre = "thriller";

const url = `http://example.com/movies?year=${year}&genre=${genre}`;
```

</details>

<details><summary>🚨 Løsningsforslag</summary>
Bytt ut innholdet i url-variablen til dette:

```ts
const url = `https://smilefjes.herokuapp.com/tilsyn?postnummer=${postnummer}&poststed=${poststed}&smilefjes=${smilefjes}`;
```

</details>

Når du har fått løst oppgave 2 har vi laget muligheten til å hente ut en liste med tilsyn basert på de ulike parameterne vi sender inn. Du kan verifisere at du har fått til oppgaven ved å sette Trondheim som poststed og nøytral som smilefjes. Om du har fått løst oppgaven skal listen nå kun inneholde restauranter med nøytralt smilefjes.

<details><summary>🧠 Dypdykk</summary>
Du kan gjøre ganske mye kult med template literals. Ta en titt [her](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) for flere eksempler.
</details>

### Oppgave 3

Nå har vi gjort applikasjonen i stand til ikke bare å hente tilsyn, men også hente de tilsynene vi har lyst på basert på query-parameterne vi sender inn. Nå skal vi se på hvordan vi kan gå frem for å hente ut detaljer om et tilsyn. Finn filen `oppgave3.ts` for å løse dette.

<details><summary>💡 Tips</summary>
For å løse oppgaven må du ta i bruke et stiparameter (path-params). Stiparametre brukes ofte ved at man sender inn id'en til ressursen man har lyst til å hente. Sti parametre legges til på slutten av stien på følgende format: `/stiParameter`.

En hel URL vil da bli seende ut som dette:

```ts
"http://example.com/movie/123";
```

</details>

<details><summary>🚨 Løsningsforslag</summary>
Bytt ut innholdet i url-variablen til dette:

```ts
const url = `https://smilefjes.herokuapp.com/tilsyn/${tilsynId}`;
```

</details>

### Oppgave 4

Nå har vi gjort applikasjonen i stand til å hente en liste med tilsyn, samt vise detaljer om et enkelt tilsyn. Problemet er at vi enda ikke får hentet ut de tilsynene som har resultert i et surt smilefjes. Om vi prøver å hente disse får vi bare en tom liste tilbake. Dette skal vi løse ved å bruke header-parametre. Finn filen `oppgave4.ts` og fortsett der.

<details><summary>💡 Tips</summary>
For å løse oppgaven må du ta i bruke et header-paramtre og sende inn det superduperhemmeligepassordet der. MDN har en fin beskrivelse av hva HTTP-headeren er for noe her: https://developer.mozilla.org/en-US/docs/Glossary/Request_header.

I frontendapplikasjonen vår bruker vi [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) til å hente data fra backenden. I tillegg til selve URL'en kan vi også sende inn et javascript-objekt inn som parameter til fetch. Du kan se dokumentasjon og eksempeler på det på https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options.

I eksempelet under bruker vi en header-parameter for å styre hvilket format vi ønsker å få data tilbake fra backend.

```ts
return fetch(url, {
  headers: {
    "Content-Type": "application/json",
  },
});
```

</details>

<details><summary>🚨 Løsningsforslag</summary>

```ts
return fetch(url, {
  headers: {
    accessToken: "superduperhemmeligpassord",
  },
});
```

</details>

### Konklusjon

Gratulerer! 🎉 Du har nå fått koblet sammen frontend med et eksisterende API, og er nå ferdig med del to av workshopen.

# DEL 3

I del 3 skal vi se på hvordan en backend kan fungere. Vi kommer til å kjøre vår egen backend lokalt på maskinen.

## Oppgaver

På samme måte som i del 2 må vi laste ned, installere og kjøre opp backend. Kildekoden til backend finner du på [https://github.com/bekk/api-workshop-backend](https://github.com/bekk/api-workshop-backend).

Klon repoet og installer programvaren på [samme måte som i del 2](https://github.com/bekk/api-workshop#oppsett). Husk å bytt URL!

Etter at prosjektet er lastet ned, naviger til backend-mappen og kjør "npm install" for å installere programvaren, og "npm run dev" for å starte backend.

```bash
npm install
npm run dev
```

Når man kjører "npm run dev" vil backend vil starte opp lokalt på http://localhost:3003
Verifisert at backend kjører ved å se at meldingen "Cannot GET /" dukker opp når du åpner http://localhost:3003 i nettleseren.

### Oppgave 1

I del 1 brukte vi Postman for å kjøre requests mot en tjeneste ute på internett. Nå skal vi bruke bruke postman for å hente data fra vår backend som kjører lokalt på maskinen. Bytt ut URL fra del 1 til å gå mot vår lokale backend.

<details><summary>💡 Tips</summary>
Husk at vår lokale backend kjører på http og ikke https.
</details>

<details><summary>🚨 Løsningsforslag</summary>
Sett endepunkt-URL i postman til å være: http://localhost:3003/tilsyn

</details>

### Oppgave 2

Bytt ut endepunktene i frontend-løsningen til å gå mot den lokale backend-tjenesten.

<details><summary>🚨 Løsningsforslag</summary>

I filen `oppgave1.ts` i frontend-prosjektet sett url-variabelen til å være:

```ts
const url = "http://localhost:3003/tilsyn";
```

I filen `oppgave2.ts` i frontend-prosjektet sett url-variabelen til å være:

```ts
const url = `http://localhost:3003/tilsyn?postnummer=${postnummer}&poststed=${poststed}&smilefjes=${smilefjes}`;
```

I filen `oppgave3.ts` i frontend-prosjektet sett url-variabelen til å være:

```ts
const url = `http://localhost:3003/tilsyn/${tilsynId}`;
```

</details>

For å teste at endringene fungerer må både frontenden og backenden kjøre. Etter vi har startet både frontend og backend kan vi gå til http://localhost:3000 for å sjekke at ting fungerer som før.

### Oppgave 3

Lag et nytt endepunkt i backend `/hei` som returnerer `"hei"`. Verifiser at det fungerer med å bruke postman.

</details>

<details><summary>🧠 Dypdykk</summary>
 
Det finnes veldig mange forskjellige språk og teknologier man kan bruke for å lage en backend. I denne workshopen har vi brukt node express som rammeverk og javascript som programmeringsspråk. Du kan lese mer om node express [her](https://expressjs.com/en/starter/hello-world.html).

I dette endepunktet returnerer vi en tekst, mens vanligvis for API som gir data som skal vises på en nettside blir dataformat [JSON](https://en.wikipedia.org/wiki/JSON) brukt.

</details>

<details><summary>🚨 Løsningsforslag</summary>
  
I `app.js` filen legg til:

```js
app.get("/hei", (req, res) => {
  res.send("hei");
});
```

og test endepunktet med postman mot http://localhost:3003/hei og sjekk at reponsen er "hei". Hvis ting fungerer som før har vi akkurat koblet sammen frontend og backend som begge kjører lokalt på maskinen!

</details>

### Oppgave 4 (bonus)

Lag et endepunkt som gir tilbake et smilefjes :), / :|, :( basert på tilsyns-id `/tilsyn/{tilsynsId}/fjes`. Test det med postman.

<details><summary>💡 Tips</summary>
  
Hvis du sitter fast kan det være en god idé å kopiere endepunktet til `tilsynsId` og endre det.

Du finner tre statuskoder i `smilefjes`-feltet til et tilsyn: BLID, NØYTRAL og SUR

</details>

<details><summary>🚨 Løsningsforslag</summary>
  
I `app.js` filen legg til:

```js
app.get("/tilsyn/:tilsynsId/fjes", (req, res) => {
  const tilsyn = tilsynsListe.find((tilsyn) => {
    return tilsyn.tilsynsId.toString() == req.params.tilsynsId;
  });

  var fjes;
  if (tilsyn.smilefjes === "BLID") {
    fjes = ":)";
  } else if (tilsyn.smilefjes === "NØYTRAL") {
    fjes = ":|";
  } else {
    fjes = ":(";
  }

  res.send(fjes);
});
```

og test endepunktet med postman mot `http://localhost:3003/tilsyn/935d9947-2304-4e72-a57c-7f9f03081a1d/fjes`

</details>

### Oppgave 5 (bonus)

En restaurant kan ha hatt flere tilsyn. Lag et endepunkt som returnerer en liste med alle tilsyn for en restaurant.
Dette endepunktet kan for eksempel ta inn navnet på restaurant.

</details>
