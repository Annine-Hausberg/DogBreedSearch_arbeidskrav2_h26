export type DogBreed = {
    id: string;
    attributes: {
        name: string;
        description: string;
    };
};
export type DogBreeds = DogBreed[];