import { useState } from 'react';
import './App.css';
import Form from './Form';
import Results from './Results';
import { fetchImages, useBreeds } from './api/dog';
import { ZodValidator } from './lib/validate';

export type SearchParams = {
  selectedBreed: string;
  selectedSubBreed?: string;
  selectedNumber: string;
};

export type DogImage = {
  image: string;
  alt: string;
};

function App() {
  const [images, setImages] = useState<DogImage[] | null>(null);

  const { isLoading, error, data } = useBreeds();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data, please try again later</div>;
  }

  const handleFormSubmit = async (parameters: SearchParams) => {
    setImages([]);
    const data = await fetchImages(parameters);
    if (data.status === 'success') {
      setImages(data.message.map((image) => ({ image, alt: parameters.selectedBreed })));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-4">
      <div className="flex flex-col items-center w-full max-w-4xl gap-4 p-8">
        <Form breedsData={data.message} onSubmit={handleFormSubmit} />
      </div>
      <Results images={images} />
    </div>
  );
}

export default App;
