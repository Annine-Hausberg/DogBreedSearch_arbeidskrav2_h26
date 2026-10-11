import { type DogBreed } from "@/types/DogBreeds";
import { notFound } from "next/navigation";
import "@/app/API/dogbreeds.css";
import "@/app/globals.css";
import Image from "next/image";
import SearchInput from "@/components/Search";
import Link from "next/link";

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
      <section className="dog-page-container">
        <SearchInput />
        <aside>
          <h3>Her kommer filtreringsfunksjonene</h3>
          <hr />
          <form action="" className="size-choices">
            <h4 className="size-choices-header">Størrelse</h4>
            <input type="checkbox" name="dogsize-small" id="dogsize-small" />
            <label htmlFor="dogsize-small">Liten</label>
            <input type="checkbox" name="dogsize-medium" id="dogsize-medium" />
            <label htmlFor="dogsize-medium">Mellomstor</label>
            <input type="checkbox" name="dogsize-big" id="dogsize-big" />
            <label htmlFor="dogsize-big">Stor</label>
            <input type="checkbox" name="dogsize-huge" id="dogsize-huge" />
            <label htmlFor="dogsize-huge">Ekstra stor</label>
          </form>
          <hr />
          <section>
            <h4>Aktivitetsnivå</h4>
            <form action="" className="activity-choices">
              <input type="checkbox" name="activity-calm" id="activity-calm" />
              <label htmlFor="activity-calm">Rolig</label>
              <input type="checkbox" name="activity-normal" id="activity-calm" />
              <label htmlFor="activity-normal">Moderat</label>
              <input type="checkbox" name="activity-high" id="activity-calm" />
              <label htmlFor="activity-high">Høyt</label>
            </form>
          </section>
          <hr />
          <section>
            <h4>Pelsstell</h4>
            <form action="">
              <form action="" className="coatCare-choices">
                <input type="checkbox" name="coatCare-low" id="activity-calm" />
                <label htmlFor="coatCare-low">Lite pelsstell</label>
                <input type="checkbox" name="coatCare-normal" id="activity-calm" />
                <label htmlFor="coatCare-normal">Moderat pelsstell</label>
                <input type="checkbox" name="coatCare-much" id="activity-calm" />
                <label htmlFor="coatCare-much">Mye pelsstell</label>
              </form>
            </form>
          </section>
          <hr />
          <section>
            <h4>Erfaring med hund</h4>
            <form action="" className="experience-choices">
              <input type="checkbox" name="experience-none" id="activity-calm" />
              <label htmlFor="experience-none">Førstegangseier</label>
              <input type="checkbox" name="experience-some" id="activity-calm" />
              <label htmlFor="experience-some">Erfaren hundeeier</label>
            </form>
          </section>
        </aside>
        <section className="dogBreed-section">
          {breeds.map((breed) => (
            <article className="dogBreed-card" key={breed.id}>
              <Image alt="test" src={breed.attributes.images[0].thumb} width={200} height={200} />
              <h3>Sted</h3>
              <h2>{breed.attributes.name}</h2>
              <h3>kort beskrivelse av lynnet</h3>
              <p>
                <strong>Kalles også:</strong> {breed.attributes.other_names.join(", ")}{" "}
              </p>
              <Link href={`/API/${breed.id}`}>Utforsk rasen</Link>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}
