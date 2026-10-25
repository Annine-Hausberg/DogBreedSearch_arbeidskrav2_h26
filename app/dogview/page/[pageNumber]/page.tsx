import { type DogBreed } from "@/types/DogBreeds";
import { notFound } from "next/navigation";
import "@/app/dogview/dogbreeds.css";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { DOGBREED_API_ENDPOINT } from "@/constants/dogbreed-api";
import FilterAside from "@/components/Aside/Aside";

export type PagniatedDogPageProps = {
  params: Promise<{ pageNumber: string }>;
};

type DogBreeds = DogBreed[];
export default async function PagniatedDogPage({ params }: PagniatedDogPageProps) {
  const { pageNumber } = await params;
  const page = Math.max(1, Number(pageNumber) || 1);
  const response = await fetch(`${DOGBREED_API_ENDPOINT}?page[number]=${page}&page[size]=30`);

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();
  const breeds: DogBreeds = data.data;

  return (
    <>
      <section className="dog-page-container">
        <FilterAside />
        <section className="dogBreed-section">
          {breeds.map((breed) => (
            <article className="dogBreed-card" key={breed.id}>
              <Image alt={breed.attributes.name} src={breed.attributes.images[0].large} width={368} height={368} />
              <h2>{breed.attributes.name}</h2>
              <hr className="divider" />
              <div className="bottom-line-card">
                <ArrowRightIcon size={22} />
                <Link className="Link-button" id="explore-breed-link" href={`/dogview/${breed.id}`}>
                  Utforsk rasen
                </Link>
              </div>
            </article>
          ))}
        </section>
        <div className="page-navigation">
          {page > 1 && <Link href={`/dogview/page/${page - 1}`}>Forrige</Link>}
          <span>Side {pageNumber}</span>
          <Link href={`/dogview/page/${page + 1}`}>Neste</Link>
        </div>
      </section>
    </>
  );
}
