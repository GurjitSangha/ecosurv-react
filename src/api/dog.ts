import { useQuery } from '@tanstack/react-query';
import { SearchParams } from '../App';

type DogAPIResponse = { message: string[]; status: string };

export const useBreeds = () => {
  return useQuery({
    queryKey: ['allBreeds'],
    queryFn: () => fetch('https://dog.ceo/api/breeds/list/all').then((res) => res.json()),
    staleTime: 60 * 60 * 1000,
  });
};

export const fetchImages = async ({
  selectedBreed,
  selectedSubBreed,
  selectedNumber,
}: SearchParams): Promise<DogAPIResponse> => {
  const url = `https://dog.ceo/api/breed/${selectedBreed}${
    selectedSubBreed ? '/' + selectedSubBreed : ''
  }/images/random/${selectedNumber}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
