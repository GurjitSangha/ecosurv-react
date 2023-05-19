interface Props {
  name: string;
  options: string[];
  selected: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({ name, options, selected, onChange }: Props) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name}>{name}</label>
    <select
      name={name}
      onChange={onChange}
      defaultValue={selected}
      className="border px-2 py-1 rounded"
    >
      <option value="">Please Select...</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
