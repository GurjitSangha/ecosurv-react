import { useQuery } from '@tanstack/react-query';

type DogAPIResponse = { message: string[]; status: string };

export const useBreeds = () => {
  return useQuery({
    queryKey: ['allBreeds'],
    queryFn: () => fetch('https://dog.ceo/api/breeds/list/all').then((res) => res.json()),
    staleTime: 5 * 60 * 1000,
  });
};

interface FetchImagesArgs {
  selectedBreed: string;
  selectedSubBreed: string;
  selectedNumber: string;
}
export const fetchImages = async ({
  selectedBreed,
  selectedSubBreed,
  selectedNumber,
}: FetchImagesArgs): Promise<DogAPIResponse> => {
  const url = `https://dog.ceo/api/breed/${selectedBreed}${
    selectedSubBreed ? '/' + selectedSubBreed : ''
  }/images/random/${selectedNumber}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
