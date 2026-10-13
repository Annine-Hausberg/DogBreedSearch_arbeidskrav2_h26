export const energyTexts: Record<number, string> = {
  1: "Denne hunderasen er veldig rolig, ",
  2: "Denne hunderasen er nokså rolig, ",
  3: "Denne hunderasen har moderat energinivå, ",
  4: "Denne hunderasen er nokså aktiv, ",
  5: "Denne hunderasen har høyt energinivå, ",
};

export const energyText = (value: number) => energyTexts[value] ?? "Ingen informasjon om energinivået";

export const apartmentFriendlyTexts: Record<number, string> = {
  1: "Bor du i leilighet, er ikke dette rasen for deg.",
  2: "Bor du i leilighet, kan denne rasen by på utfordringer.",
  3: "Bor du i leilighet, kan denne rasen fungere om du er flink til å aktivisere daglig.",
  4: "Dette er en rase som fungerer like godt i leilighet som i større boliger.",
  5: "Dette er en rase som ikke krever stor plass, og som kan trives svært godt i leilighet.",
};

export const apartmentFriendlyText = (value: number) =>
  apartmentFriendlyTexts[value] ?? "Ingen informasjon om boligtilpasning";

export const groomingTexts: Record<number, string> = {
  1: "Rasen krever svært lite pelsstell",
  2: "Rasen krever lite pelsstell",
  3: "Rasen krever moderat pelsstell",
  4: "Rasen krever  mye pelsstell",
  5: "Rasen krever svært mye pelsstell",
};

export const groomingText = (value: number) => groomingTexts[value] ?? "ingen informasjon om pelsstell";

export const barkingTexts: Record<number, string> = {
  1: "Bjeffer svært lite",
  2: "Bjeffer lite",
  3: "Bjeffer moderat",
  4: "Bjeffer nokså mye",
  5: "Bjeffer mye",
};
export const barkingText = (value: number) => barkingTexts[value] ?? "ingen informasjon om bjeffing";

export const temperamentTexts: Record<string, string> = {
  confident: "selvikker",
  curious: "nysgjerrig",
  stubborn: "sta",
  playful: "leken",
  alert: "våken",
  mischievous: "tøysete",
  friendly: "vennlig",
  joyful: "glad",
  social: "sosial",
  loyal: "lojal",
  cheerful: "munter",
  dignified: "verdig",
  aloof: "reservert",
  independent: "selvstendig",
  aristocratic: "aristokratisk",
  gentle: "forsiktig",
  clownish: "skøyeraktig",
  courageous: "modig",
  "reserved with strangers": "usikker på fremmede",
  "friendly but conservative": "vennlig, men reservert",
  "protective watchdog": "vakthund",
  "eager to please": "hengiven",
  determined: "bestemt",
  "sweet-tempered": "mildt gemytt",
  amiable: "vennlig",
  "easy-going": "lettvidt",
  "self-confident": "selvsikker",
  active: "aktiv",
  intelligent: "intelligent",
  outgoing: "utadvendt",
  affectionate: "kjærlig",
  devoted: "hengiven",
};
export const temperamentText = (word: string) => temperamentTexts[word] ?? word;
