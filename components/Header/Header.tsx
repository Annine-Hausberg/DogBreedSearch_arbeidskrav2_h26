import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/hero_img3.png";
import "@/components/Header/Header.css";
import SearchInput from "../Search/Search";

export default function Header() {
  return (
    <header>
      <nav aria-label="Navigasjonsmeny">
        <Link href={"/"}>Hjem</Link>
        <Link href={"/dogview/page/1"}>Hunderaser</Link>
        <Link href={"/about"}>Om siden</Link>
      </nav>
      <section className="hero-section">
        <Image className="hero-img" src={heroImg} alt="AI generert bilde av søte hunder" />
        <SearchInput />
      </section>
    </header>
  );
}
