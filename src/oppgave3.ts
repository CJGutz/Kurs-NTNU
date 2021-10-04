/**
 * Oppgave 3:
 *
 * Nå har vi fått applikasjonen til å hente ut en liste med tilsyn. Nå vil vi gjøre applikasjonen i stand til å hente detaljer
 * om et unikt tilsyn.
 *
 *
 */

/**
 * Start med å endre verdien av variablen enableDetailsLink fra false til true
 * Nå skal det dukke opp en knapp med "Se detaljer" på hvert tilsyn i listen. Denne knappen tar deg videre til en detaljeside for hvert tilsyn.
 *
 * Du skal nå bytte url slik at applikasjonen er i stand til å hente data for å fylle ut data om den nye siden.
 *
 * Om du står fast kan du sjekke "💡Tips" i oppgavebeskrivelsen her https://github.com/bekk/api-workshop/#oppgave-2
 */

export const enableDetailsLink = true;

export function fetchTilsynDetails(tilsynId: string): Promise<Response> {
  const url = "http://localhost:3003/tilsyn/" + tilsynId;

  return fetch(url);
}
