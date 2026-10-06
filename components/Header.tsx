import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href={"/"}>Hjem</Link>
        <Link href={"/API"}>Hunderaser</Link>
      </nav>
    </header>
  );
}
