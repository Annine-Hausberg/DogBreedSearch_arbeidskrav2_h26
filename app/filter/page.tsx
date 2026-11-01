import { DOGBREED_API_ENDPOINT } from "@/constants/dogbreed-api";
import { DogBreed } from "@/types/DogBreeds";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import "@/app/dogview/dogbreeds.css";
import "@/app/globals.css";
import FilterAside from "@/components/Aside/Aside";

export default async function Filterpage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  // const checkedSize = [params.male_weight ?? []].flat();
  const checkedActivity = [params.activity ?? []].flat();
  const checkedCoatCare = [params.coatCare ?? []].flat();
  const checkedHypoallergenic = params.hypoallergenic === "true";

  const response = await fetch("https://dogapi.dog/api/v2/breeds?page[size]=283");
  const { data: allDogBreeds }: { data: DogBreed[] } = await response.json();

  function activityDefinition(energy: number) {
    if (energy <= 2) return "calm";
    if (energy === 3) return "moderate";
    return "high";
  }

  function groomingDefinition(grooming: number) {
    if (grooming <= 2) return "low";
    if (grooming === 3) return "normal";
    return "much";
  }

  const filtered = allDogBreeds.filter((breed) => {
    const traits = breed.attributes.traits;

    const activityChoice = checkedActivity.length === 0 || checkedActivity.includes(activityDefinition(traits.energy));
    const coatCareChoice =
      checkedCoatCare.length === 0 || checkedCoatCare.includes(groomingDefinition(traits.grooming));
    const hypoallergenicChoice = !checkedHypoallergenic || breed.attributes.hypoallergenic;

    return activityChoice && coatCareChoice && hypoallergenicChoice;
  });

  return (
    <>
      <section className="dog-page-container">
        <FilterAside />
        <section className="dogBreed-section">
          {filtered.map((breed) => (
            <article className="dogBreed-card" key={breed.id}>
              <Image alt={breed.attributes.name} src={breed.attributes.images[0].large} width={368} height={368} />
              <h2>{breed.attributes.name}</h2>
              <hr className="divider" />
              <div className="bottom-line-card">
                <ArrowRightIcon size={22} />
                <Link className="explore-breed-link" href={`/dogview/${breed.id}`}>
                  Utforsk rasen
                </Link>
              </div>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}
