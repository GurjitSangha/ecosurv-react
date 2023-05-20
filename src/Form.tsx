import React from 'react';
import SelectInput from './SelectInput';

interface Props {
  breeds: string[];
  selectedBreed: string;
  onBreedChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  subBreeds: string[];
  selectedSubBreed: string;
  onSubBreedChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedNumber: string;
  onNumberChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  invalidFields: string[];
  onSubmit: (event: React.FormEvent) => void;
}

const Form = ({
  breeds,
  selectedBreed,
  onBreedChange,
  subBreeds,
  selectedSubBreed,
  onSubBreedChange,
  selectedNumber,
  onNumberChange,
  invalidFields,
  onSubmit,
}: Props) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex gap-4">
          <SelectInput
            name="Breeds"
            options={breeds}
            selected={selectedBreed}
            isInvalid={invalidFields.includes('selectedBreed')}
            onChange={onBreedChange}
          />
          {subBreeds.length > 0 && (
            <SelectInput
              name="Sub-breeds"
              options={subBreeds}
              selected={selectedSubBreed}
              isInvalid={invalidFields.includes('selectedSubBreed')}
              onChange={onSubBreedChange}
            />
          )}
          <SelectInput
            name="Number of Images"
            options={Array.from({ length: 10 }, (_, i) => `${i + 1}`)}
            selected={selectedNumber}
            isInvalid={invalidFields.includes('selectedNumber')}
            onChange={onNumberChange}
          />
        </div>

        <input type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" />
      </form>
    </>
  );
};

export default Form;
