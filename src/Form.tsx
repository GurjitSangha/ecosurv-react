import React from 'react';

interface Props {
  options: string[];
  selectedBreed: string;
  onBreedChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}
const Form = ({ options, selectedBreed, onBreedChange, onSubmit }: Props) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="breeds">Breed:</label>
        <select id="breeds" onChange={onBreedChange} defaultValue={selectedBreed}>
          <option value="">Please Select...</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <input type="submit" className="mx-4 px-4 py-2 bg-blue-500 text-white rounded" />
      </form>
    </>
  );
};

export default Form;
