import React, { useState } from 'react';
import SelectInput from './SelectInput';
import { ZodValidator } from './lib/validate';
import { SearchParams } from './App';

interface Props {
  breedsData: Record<string, string[]>;
  onSubmit: (params: SearchParams) => void;
}

const Form = ({ breedsData, onSubmit }: Props) => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [subBreeds, setSubBreeds] = useState<string[]>([]);
  const [selectedSubBreed, setSelectedSubBreed] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('1');
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const breed = e.target.value;
    setSelectedSubBreed('');
    setSelectedBreed(breed);
    const subBreeds = breedsData[`${breed}`];
    setSubBreeds(subBreeds);
  };

  const handleSubBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subBreed = e.target.value;
    setSelectedSubBreed(subBreed);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNumber(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parameters = { selectedBreed, selectedSubBreed, selectedNumber };
    const result = new ZodValidator().validate(parameters);
    if (!result.success) {
      setInvalidFields(result.error || []);
    } else {
      setInvalidFields([]);
      onSubmit(parameters);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="flex gap-4">
          <SelectInput
            name="Breeds"
            options={Object.keys(breedsData)}
            selected={selectedBreed}
            isInvalid={invalidFields.includes('selectedBreed')}
            onChange={handleBreedChange}
          />
          {subBreeds.length > 0 && (
            <SelectInput
              name="Sub-breeds"
              options={subBreeds}
              selected={selectedSubBreed}
              isInvalid={invalidFields.includes('selectedSubBreed')}
              onChange={handleSubBreedChange}
            />
          )}
          <SelectInput
            name="Number of Images"
            options={Array.from({ length: 10 }, (_, i) => `${i + 1}`)}
            selected={selectedNumber}
            isInvalid={invalidFields.includes('selectedNumber')}
            onChange={handleNumberChange}
          />
          <input type="submit" className="px-4 py-1 text-white bg-blue-500 rounded" />
        </div>
      </form>
    </>
  );
};

export default Form;
