import Image from "next/image";

import "@/app/globals.css";
export default function Home() {
  return (
    <>
      <h1 className="index-header">Velkommen til hundekatalogen</h1>
      <main className="index-container">
        <section className="home-section">
          <h2>Hva er hundekatalogen?</h2>
          <p>
            Hundekatalogen er en nettside for deg som bare er nysgjerrig på ulike hunderaser, og deg som søker en ny
            bestevenn. På denne siden kan du både søke informasjon om de rasene som interesserer deg, eller filtrere for
            å finne en perfekt match. Per dags dato består hundekatalogen av hele 283 raser.
          </p>
        </section>

        <section className="home-section">
          <h2>Betydningen av gode undersøkelser</h2>
          <p>
            Trenger du en turkompis, en rolig liten krabat som elsker å ligge på sofaen, eller en ivrig fulejeger? I
            rasekatalogen kan du finne den hunderasen som passer best til dine behov. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Laboriosam voluptates ipsum quam ex quasi laborum accusamus exercitationem
            facere praesentium, cum atque numquam ut in eius laudantium doloribus quas nesciunt assumenda?
          </p>
        </section>
        <p></p>
      </main>
    </>
  );
}
