export type DogImage = {
  id: string;
  url: string;
  thumb: string;
  medium: string;
  large: string;
};

export type DogBreed = {
  id: string;

  attributes: {
    name: string;
    description: string;
    hypoallergenic: boolean;
    other_names: string[];
    images: DogImage[];
  };
};
export type DogBreeds = DogBreed[];
