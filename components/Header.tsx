import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/hero_img3.png";
import logo from "@/assets/logo.png";
import "@/app/globals.css";
import SearchInput from "./Search";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href={"/"}>
          <Image className="logo" src={logo} alt="Logo for hundekatalogen" />
        </Link>

        <div className="nav-right-section">
          <Link href={"/"}>Hjem</Link>
          <Link href={"/dogview/page/1"}>Hunderaser</Link>
          <Link href={"/About"}>Om siden</Link>
        </div>
      </nav>
      <section className="hero-section">
        <Image className="hero-img" src={heroImg} alt="AI generert bilde av søte hunder" />
        <SearchInput />
      </section>
    </header>
  );
}
