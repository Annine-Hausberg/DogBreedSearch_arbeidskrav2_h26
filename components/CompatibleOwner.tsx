import { type DogTraits } from "@/types/DogBreeds";

type props = {
  traits: DogTraits;
};

export default function CompatibleOwner({ traits }: props) {
  const suitableFor: string[] = [];

  if (traits.energy === 5) {
    suitableFor.push(`Rasen passer for deg som lever et aktivt liv og vil ha en turkamerat hver eneste dag. 
        I gjennomsnitt burde man sette av minimum ${traits.exercise_minutes} minutter med trening hver dag. `);
  } else if (traits.energy === 4) {
    suitableFor.push(`Rasen passer for deg som er aktiv og liker lange turer flere ganger i uken. 
        I gjennomsnitt burde man sette av minimum  ${traits.exercise_minutes} minutter med trening hver dag. `);
  } else if (traits.energy === 3) {
    suitableFor.push(`Rasen passer for deg som liker å komme deg ut på faste turer i skog og mark, uten at det må bli for krevende.
        I gjennomsnitt burde man sette av minimum  ${traits.exercise_minutes} minutter med trening hver dag. `);
  } else if (traits.energy === 2) {
    suitableFor.push(`Rasen passer for deg som liker en avslappet hverdag med daglige, rolige turer.
        I gjennomsnitt burde man sette av minimum  ${traits.exercise_minutes} minutter med trening hver dag. `);
  } else {
    suitableFor.push(`Rasen passer for deg som ønsker en rolig følgesvenn, og som er fornøyd med korte turer i nærmiljøet.
       I gjennomsnitt burde man sette av minimum  ${traits.exercise_minutes} minutter med trening hver dag. `);
  }

  if (traits.apartment_friendly >= 4) {
    suitableFor.push("Rasen er svært egnet for å bo i leilighet. ");
  } else if (traits.apartment_friendly === 3) {
    suitableFor.push("Rasen fungerer fint i leilighet. ");
  } else {
    suitableFor.push("Rasen trenger mye areal, og fungerer ikke godt i leilighet. ");
  }

  if (traits.barking >= 4) {
    suitableFor.push("Denne rasen er kjent for å bjeffe mye. ");
  } else if (traits.barking === 3) {
    suitableFor.push("Denne rasen er kjent for moderat bjeffing. ");
  } else {
    suitableFor.push("Denne rasen bjeffer lite. ");
  }

  if (traits.grooming >= 4) {
    suitableFor.push("Krever svært mye pelsstell. ");
  } else if (traits.grooming === 3) {
    suitableFor.push("Krever moderat pelsstell. ");
  } else {
    suitableFor.push("Krever lite pelsstell. ");
  }

  return suitableFor;
}
