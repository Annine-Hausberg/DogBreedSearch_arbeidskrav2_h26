import { type DogBreed } from "@/types/DogBreeds";
import { notFound } from "next/navigation";
import "@/app/API/dogbreeds.css";
import "@/app/globals.css";
import Image from "next/image";

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
      <section className="dogBreed-section">
        {breeds.map((breed) => (
          <article className="dogBreed-card" key={breed.id}>
            <Image alt="test" src={breed.attributes.images[0].thumb} width={200} height={200}/>
            <h2>{breed.attributes.name}</h2>
            <p>
              <strong>Kalles også:</strong> {breed.attributes.other_names.join(", ")}{" "}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
