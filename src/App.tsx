import { useState } from 'react';
import './App.css';
import Form from './Form';
import Results from './Results';
import { fetchImages, useBreeds } from './api/dog';

function App() {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [subBreeds, setSubBreeds] = useState([]);
  const [selectedSubBreed, setSelectedSubBreed] = useState('');
  const [images, setImages] = useState<string[] | null>(null);

  const { isLoading, error, data } = useBreeds();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data, please try again later</div>;
  }

  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const breed = e.target.value;
    setSelectedSubBreed('');
    setSelectedBreed(breed);
    const subBreeds = data.message[`${breed}`];
    setSubBreeds(subBreeds);
  };

  const handleSubBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subBreed = e.target.value;
    setSelectedSubBreed(subBreed);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setImages([]);
    const data = await fetchImages({ selectedBreed, selectedSubBreed });
    if (data.status === 'success') {
      setImages(data.message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-4">
      <div className="w-full max-w-4xl flex justify-center border p-8 gap-4">
        <Form
          breeds={Object.keys(data.message)}
          selectedBreed={selectedBreed}
          onBreedChange={handleBreedChange}
          subBreeds={subBreeds}
          selectedSubBreed={selectedSubBreed}
          onSubBreedChange={handleSubBreedChange}
          onSubmit={handleFormSubmit}
        />
      </div>
      <Results images={images} />
    </div>
  );
}

export default App;
