import { type DogBreed } from "@/types/DogBreeds";
import { notFound } from "next/navigation";
import "@/app/API/dogbreeds.css";

type props = {
  params: Promise<{ id: string }>;
};

export default async function DogBreedPage({ params }: props) {
  const { id } = await params;

  const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);

  if (!response.ok) {
    notFound();
  }

  const json = await response.json();
  const breed: DogBreed = json.data;

  return (
    <>
      <section className="dog-page-container">
        <aside>
          <h3> Om {breed.attributes.name}</h3>
          <hr />
          <section>
            <h3>Andre navn på rase:</h3>
            <p>{breed.attributes.other_names.join(", ")}</p>
          </section>
          <hr />
          <section>
            <h3>Allergistatus</h3>
            <p>{breed.attributes.hypoallergenic ? "Allergivennlig" : "Ikke allergivennlig"}</p>
          </section>
          <hr />
          <section>
            <h4>Pelsstell</h4>
            <p>{breed.attributes.traits.grooming}</p>
          </section>
          <hr />

          <section>
            <h4>Bjeffing</h4>
            <p>{breed.attributes.traits.barking}</p>
          </section>
          <hr />
          <section>
            <h4>Energi</h4>
            <p>{breed.attributes.traits.energy}</p>
          </section>
          <hr />
          <section>
            <h4>Lynne</h4>
            <p>{breed.attributes.traits.temperament.join(", ")}</p>

          </section>
        </aside>
        <section className="individualBreed-section">
          <article key={breed.id}>
            <h1>{breed.attributes.name}</h1>
            <h2>{breed.attributes.description}</h2>
          </article>
        </section>
      </section>
    </>
  );
}
