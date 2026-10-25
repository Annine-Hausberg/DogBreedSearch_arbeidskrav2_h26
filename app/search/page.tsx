import { notFound } from "next/navigation";
import { DogBreed } from "@/types/DogBreeds";
import Link from "next/link";
import "@/app/globals.css"

export type SearchPageprops = {
  searchParams: Promise<{
    q: string | undefined;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageprops) {
  const { q = "" } = await searchParams;
  const response = await fetch(`https://dogapi.dog/api/v2/breeds?page[size]=283`);
  const { data }: { data: DogBreed[] } = await response.json();
  const breed = data.filter((breed) => breed.attributes.name.toLowerCase().includes(q.toLowerCase()));
  if (!response.ok) {
    notFound();
  }

  return (
    <section className="search-result">
      <h1>Søk etter {q}</h1>
      {breed.map((breed) => (
        <p key={breed.id}>
          <Link href={`/dogview/${breed.id}`}>{breed.attributes.name}</Link>
        </p>
      ))}
    </section>
  );
}
