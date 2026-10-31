import Image from "next/image";

import "@/app/globals.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="page-container">
        <h1>Velkommen til hundekatalogen</h1>
        <section className="page-section">
          <h2>Hva er hundekatalogen?</h2>
          <p>
            Hundekatalogen er et verktøy for deg som bare er nysgjerrig på ulike hunderaser, eller deg som søker en ny
            bestevenn. På denne siden kan du både søke informasjon om de rasene som interesserer deg, eller filtrere for
            å finne en perfekt match. Per dags dato består hundekatalogen av hele 283 raser.
          </p>
        </section>
        <Link className="Link-button-2" href={"/dogview"}>
          Trykk her for å utforske katalogen
        </Link>
      </main>
    </>
  );
}
