import { notFound } from "next/navigation";
import { DogBreed } from "@/types/DogBreeds";
import Link from "next/link";
import "@/app/globals.css";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

export type SearchPageprops = {
  searchParams: Promise<{
    q: string | undefined;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageprops) {
  const { q = "" } = await searchParams;
  const response = await fetch(`https://dogapi.dog/api/v2/breeds?page[size]=283`);
  if (!response.ok) {
    notFound();
  }
  const { data }: { data: DogBreed[] } = await response.json();
  const breed = data.filter((breed) => breed.attributes.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <section className="search-result">
      <Link href={"/dogview"}><ArrowLeftIcon size={22}/>Tilbake til hundekatalogen</Link>
      
      <h1>Søk etter {q}</h1>
      {breed.length === 0 ? (
        <p>Fant ingen hunderaser som passer {q}</p>
      ) : (
        breed.map((breed) => (
          <p key={breed.id}>
            <Link className="Link-button" href={`/dogview/${breed.id}`}>
              {breed.attributes.name}
            </Link>
          </p>
        ))
      )}
    </section>
  );
}
