import React from 'react';
import SelectInput from './SelectInput';

interface Props {
  breeds: string[];
  selectedBreed: string;
  onBreedChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  subBreeds: string[];
  selectedSubBreed: string;
  onSubBreedChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
}

const Form = ({
  breeds,
  selectedBreed,
  onBreedChange,
  subBreeds,
  selectedSubBreed,
  onSubBreedChange,
  onSubmit,
}: Props) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex gap-4">
          <SelectInput
            name="breeds"
            options={breeds}
            selected={selectedBreed}
            onChange={onBreedChange}
          />
          {subBreeds.length > 0 && (
            <SelectInput
              name="sub-breeds"
              options={subBreeds}
              selected={selectedSubBreed}
              onChange={onSubBreedChange}
            />
          )}
        </div>

        <input type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" />
      </form>
    </>
  );
};

export default Form;
