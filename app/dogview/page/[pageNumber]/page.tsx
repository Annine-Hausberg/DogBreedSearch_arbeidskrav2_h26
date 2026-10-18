import { type DogBreed } from "@/types/DogBreeds";
import { notFound } from "next/navigation";
import "@/app/dogview/dogbreeds.css";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { DOGBREED_API_ENDPOINT } from "@/constants/dogbreed-api";

export type PagniatedDogPageProps = {
  params: Promise<{ pageNumber: string }>;
};

type DogBreeds = DogBreed[];
export default async function PagniatedDogPage({ params }: PagniatedDogPageProps) {
  const { pageNumber } = await params;
  const page = Math.max(1, Number(pageNumber) || 1)
  const response = await fetch(`${DOGBREED_API_ENDPOINT}?page[number]=${pageNumber}&page[size]=30`);

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();
  const breeds: DogBreeds = data.data;

  return (
    <>
      <section className="dog-page-container">
        <aside>
          <h3>Side {pageNumber}</h3>
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
              <Image alt="test" src={breed.attributes.images[0].large} width={368} height={368} />
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
        <div className="page-navigation">
          {page > 1 && <Link href={`/dogview/page/${page - 1}`}>Forrige</Link>}
          <span>Side {pageNumber}</span>
          <Link href={`/dogview/page/${page + 1}`}>Neste</Link>
        </div>
      </section>
    </>
  );
}
