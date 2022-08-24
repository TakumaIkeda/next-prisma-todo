type Props = {
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options, value, name, onChange }: Props): JSX.Element => {
  return (
    <select
      className="select select-bordered focus:select-primary"
      name={name}
      onChange={onChange}
      value={value}
    >
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
