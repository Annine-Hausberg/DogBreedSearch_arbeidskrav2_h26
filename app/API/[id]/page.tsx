import { DogBreed } from "@/types/DogBreeds";
import { notFound } from "next/navigation";

type props = {
  params: Promise<{ id: string }>;
};

export default async function DogBreedPage({ params }: props) {
  const { id } = await params;

  const response = await fetch("https://dogapi.dog/api/v2/breeds");
  const dogBreed: DogBreed = await response.json();

  if (!response.ok) {
    notFound();
  }

  return (
    <>
      <h1>{dogBreed.id}</h1>
    </>
  );
}
