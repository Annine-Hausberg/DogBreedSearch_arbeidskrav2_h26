import Link from "next/link";
import { PawPrintIcon } from "@phosphor-icons/react/dist/ssr";
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
            å finne en perfekt match.
          </p>
          <p>
            <PawPrintIcon size={20} />
            283 raser å utforske
          </p>
          <Link className="explore-btn" href={"/dogview"}>
            Trykk her for å utforske katalogen
          </Link>
        </section>
      </main>
    </>
  );
}
