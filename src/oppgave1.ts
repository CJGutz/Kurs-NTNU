/**
 * Velkommen til første oppgave.
 * Her skal vi få applikasjonen til å hente og vise frem en liste med tilsyn.
 *
 *
 * I Del 1 av workshoppen brukte du postman til å hente ut en hel liste med tilsyn. Finn frem URL'en du brukte for å hente listen og bytt ut innholdet i url-variablen.
 *
 * Om du fant riktig url kommer applikasjonen til å vise frem en liste med tilbud når du trykker på knappen "Hent tilsyn"
 */
export function fetchTilsynList(): Promise<Response> {
  const url = "http://localhost:3003/";

  return fetch(url);
}
