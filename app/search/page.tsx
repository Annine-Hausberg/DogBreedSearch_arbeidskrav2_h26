import { notFound } from "next/navigation";
import { DogBreed } from "@/types/DogBreeds";
import Link from "next/link";

export type SearchPageprops = {
  searchParams: Promise<{
    q: string | undefined;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageprops) {
  const { q = "" } = await searchParams;
  const response = await fetch(`https://dogapi.dog/api/v2/breeds`);
  const { data }: { data: DogBreed[] } = await response.json();

  const breed = data.filter((breed) => breed.attributes.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <h1>Søk etter {q}</h1>
      {breed.map((breed) => (
        <p key={breed.id}>
          <Link href={`/API/${breed.id}`}>{breed.attributes.name}</Link>
        </p>
      ))}
    </>
  );
}
