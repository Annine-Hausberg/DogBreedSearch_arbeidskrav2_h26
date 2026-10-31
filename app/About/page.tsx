export default function About() {
  return (
    <>
      <h1 className="header-txt">Om siden</h1>
      <section className="page-container">
        <section className="page-section">
          <h2>Målgruppe</h2>

          <p>
            Hundekatalogen er laget for deg som er glad i hund. Kanskje vurderer du å skaffe deg din første hund, eller
            du vil lære mer om rasene du er nysgjerrig på. Her kan du søke etter raser og filtrere på det som er viktig
            for deg.
          </p>
        </section>
        <section className="page-section">
          <h2>Datakilde</h2>

          <p>
            Til denne siden er det benyttet et engelsk API fra dogapi.dog. For å forenkle det for norske brukere har jeg
            oversatt det meste til norsk. Du vil likevel oppleve at hunderasene har engelske navn, og at enkelte ord
            ikke oversettes. Dette er viktig å huske på om du leter etter en spesifikk rase.
          </p>
        </section>
        <section className="page-section">
          <h2>Om utvikler</h2>

          <p>
            Denne siden er utviklet av meg Annine H. Gundersen. Jeg studerer front-end utvikling, og stadig igang med
            nye prosjekter. Hundekatalogen er en av dem.
          </p>
        </section>
      </section>
    </>
  );
}
