import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/hero_img.png"
import "@/app/globals.css"

export default function Header() {
  return (
    <header>
    <Image className="hero-img" src={heroImg} alt="Bilde av søte hunder" /> 
      <nav>
        <Link href={"/"}>Hjem</Link>
        <Link href={"/API"}>Hunderaser</Link>
      </nav>
    </header>
  );
}
