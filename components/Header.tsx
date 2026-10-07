import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/hero_img.png";
import "@/app/globals.css";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>logo</h1>
        <Link href={"/"}>Hjem</Link>
        <Link href={"/API"}>Hunderaser</Link>
        <Link href={"/About"}>Om siden</Link>
      </nav>
      <section className="hero-section">
        <div className="hero-section-text">
          <p className="hero-section-slogan">En god start på et langt vennskap</p>
          <p>
            Trenger du en turkompis, en rolig liten krabat som elsker å ligge på sofaen, eller en ivrig fulejeger? I
            rasekatalogen kan du finne den hunderasen som passer best til dine behov.
          </p>

          <button className="CTA">Gå til hundekatalogen</button>
        </div>

        <Image className="hero-img" src={heroImg} alt="Bilde av søte hunder" />
      </section>
    </header>
  );
}
