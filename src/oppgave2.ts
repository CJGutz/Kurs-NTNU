/**
 * Oppgave 2:
 *
 * Her skal vi få applikasjonen til å hente ut et subsett av alle tilsyn basert på hvilke parametre vi legger ved i spørringen.
 * Det ble nevnt query-parametre i et av foredragene. Nå skal vi benytte oss av disse.
 */

/**
 * Start med å endre verdien av variablen shouldUseInputFields fra false til true
 * Sjekk forsiden av appen. Endret denne seg nå?
 *
 * Det skal ha dukket opp noen nye inputfelter, men det som også dessverre har skjedd er at "Hent tilsyn" ikke lenger fungerer.
 * Det skal vi nå fikse, og på en bedre måte enn det vi gjorde i oppgave 1.
 *
 * Vi skal nå konstruere en ny url som også tar i bruke queryparams.
 * URL'en vi trenger for å løse oppgave 2 blir på følgende format:
 *  - "URL FRA OPPGAVE 1" + "QUERYPARAMETRE"
 *
 * Om du står fast kan du sjekke "💡Tips" i oppgavebeskrivelsen her https://github.com/bekk/api-workshop/#oppgave-2
 */

import { QueryParams } from "./types";

export const shouldUseInputFields = true;

export function fetchTilsynListWithQueryParams(
  queryParams?: QueryParams
): Promise<Response> {
  const postnummer = queryParams?.postnummer;
  const poststed = queryParams?.poststed;
  const smilefjes = queryParams?.smilefjes;

  const url = "http://localhost:3003/tilsyn?postnummer=" + postnummer + "&poststed=" + poststed + "&smilefjes=" + smilefjes;

  return fetch(url);
}
