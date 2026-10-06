import { type DogBreed } from "@/types/DogBreeds";
import { notFound } from "next/navigation";

type DogBreeds = DogBreed[];
export default async function DogPage() {
  const response = await fetch("https://dogapi.dog/api/v2/breeds");

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();
  const breeds: DogBreeds = data.data;

  return (
    <>
      <h1>Her kommer alle hundene</h1>
      <section>
        {breeds.map((breed) => (
          <article key={breed.id}>
            {" "}
            <h1>{breed.attributes.name}</h1>
            <h2>{breed.attributes.description}</h2>
          </article>
        ))}
      </section>
    </>
  );
}
