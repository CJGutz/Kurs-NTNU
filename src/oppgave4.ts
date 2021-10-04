/**
 * Oppgave 4:
 *
 * Nå har vi fått til å både hente en liste med tilsyn og detaljer om et tilsyn, men om du har forsøkt å hente ut tilsyn som har resultert i et surt smilefjes
 * får vi bare en tom liste. Dette er fordi de er "passordbeskyttet".
 *
 * For å få tak i disse må legge til header-parameteret "accessToken" med verdi "superduperhemmeligpassord".
 */

/**
 * Start med å endre verdien av variablen shouldUseAccessToken fra false til true
 *
 * Vi skal bruke nøyaktig samme url som i oppgave 2, men også legge til det nye parameteret i headeren.
 *
 * Om du står fast kan du sjekke "💡Tips" i oppgavebeskrivelsen her https://github.com/bekk/api-workshop/#oppgave-4
 */

import { QueryParams } from "./types";

export const shouldUseAccessToken = true;

export function fetchTilsynListWitHeaderParam(
  queryParams?: QueryParams
): Promise<Response> {
  const postnummer = queryParams?.postnummer;
  const poststed = queryParams?.poststed;
  const smilefjes = queryParams?.smilefjes;

  const url = "http://localhost:3003/tilsyn?postnummer=" + postnummer + "&poststed=" + poststed + "&smilefjes=" + smilefjes;

  return fetch(url, {
    headers: {
      // Her må vi legge til et parameter
      'accessToken' : 'superduperhemmeligpassord',
    },
  });
}
