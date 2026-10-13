import { type DogBreed } from "@/types/DogBreeds";
import { notFound } from "next/navigation";
import "@/app/API/dogbreeds.css";
import Image from "next/image";
import { barkingText, energyText, temperamentText } from "@/Data/Texts";
import { apartmentFriendlyText } from "@/Data/Texts";
import { groomingText } from "@/Data/Texts";
import CompatibleOwner from "@/components/CompatibleOwner";

type props = {
  params: Promise<{ id: string }>;
};

export default async function DogBreedPage({ params }: props) {
  const { id } = await params;

  const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();
  const breed: DogBreed = data.data;

  return (
    <>
      <section className="dog-page-container">
        <button>trykk her</button>
        <aside>
          <h3> Om {breed.attributes.name}</h3>
          <hr />
          <section>
            <h4>Andre navn på rase:</h4>
            <p>{breed.attributes.other_names.join(", ")}</p>
          </section>
          <hr />
          <section>
            <h4>Allergistatus</h4>
            <p>{breed.attributes.hypoallergenic ? "Allergivennlig" : "Ikke allergivennlig"}</p>
          </section>
          <hr />
          <section>
            <h4>Pelsstell</h4>
            <p>{groomingText(breed.attributes.traits.grooming)}</p>
          </section>
          <hr />

          <section>
            <h4>Bjeffing</h4>
            <p>{barkingText(breed.attributes.traits.barking)}</p>
          </section>
          <hr />
          <section>
            <h4>Energi</h4>
            <p>{energyText(breed.attributes.traits.energy)}</p>
          </section>
          <hr />
          <section>
            <h4>Lynne</h4>
            <p>{breed.attributes.traits.temperament.map(temperamentText).join(", ").toLowerCase()}</p>
          </section>
        </aside>
        <section className="individualBreed-section">
          <Image
            className="IndividualBreed-image"
            key={breed.id}
            alt="test"
            src={breed.attributes.images[0].thumb}
            width={300}
            height={300}
          />
          <div className="individualBreed-firstColumn">
            <h1 className="IndividualBreed-header">{breed.attributes.name}</h1>
            <p className="IndividualBreed-p">{breed.attributes.description}</p>
            <br />
            <p>
              <CompatibleOwner traits={breed.attributes.traits} />
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
