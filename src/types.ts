export type Tilsyn = {
  navn: string;
  poststed: string;
  postnummer: string;
  dato: string;
  smilefjes: string;
  tilsynsId: string;
};

export type TilsynDetailsType = {
  navn: string;
  poststed: string;
  postnummer: string;
  dato: string;
  smilefjes: string;
  tilsynsId: string;
  rutinerOgLedelse: number;
  lokalerOgUtstyr: number;
  mathåndteringOgTilberedning: number;
  merkingOgSporbarhet: number;
  adresse: string;
  tilsynshistorikkId: string;
};

export type QueryParams = {
  postnummer?: string;
  poststed?: string;
  smilefjes?: string;
};
