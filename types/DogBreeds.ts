export type DogImage = {
  id: string;
  url: string;
  thumb: string;
  medium: string;
  large: string;
};

export type DogTraits = {
  energy: number;
  barking: number;
  grooming: number;
  temperament: string[];
  exercise_minutes: number;
  apartment_friendly: number;
};
export type DogBreed = {
  id: string;

  attributes: {
    name: string;
    description: string;
    hypoallergenic: boolean;
    other_names: string[];
    images: DogImage[];
    traits: DogTraits;
    
  };
};
export type DogBreeds = DogBreed[];
