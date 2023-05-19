import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import './App.css';
import Results from './Results';
import Form from './Form';

function App() {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [subBreeds, setSubBreeds] = useState([]);
  const [selectedSubBreed, setSelectedSubBreed] = useState('');
  const [images, setImages] = useState<string[] | null>(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ['allBreeds'],
    queryFn: () => fetch('https://dog.ceo/api/breeds/list/all').then((res) => res.json()),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const breed = e.target.value;
    console.log(breed);
    setSelectedBreed(breed);
    // const subBreeds = data.message[`${mainBreed}`];
    // setSubBreeds(subBreeds);
    // if (subBreeds.length > 0) {
    // setSelectedSubBreed(subBreeds[0]);
    // }
  };

  // const handleSubBreedSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedSubBreed(e.target.value);
  // };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setImages([]);
    console.log(selectedBreed);
    const res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/3`);
    const data = await res.json();
    console.log(data);
    setImages(data.message);
  };

  // console.log(data);
  return (
    <div className="w-full flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-4xl flex justify-center border p-8 gap-4">
        <Form
          options={Object.keys(data.message)}
          selectedBreed={selectedBreed}
          onBreedChange={handleBreedChange}
          onSubmit={handleFormSubmit}
        />
      </div>
      <Results images={images} />
    </div>
  );
}

export default App;
