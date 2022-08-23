type Props = {
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options, value, onChange }: Props) => {
  <select
    className="select select-bordered focus:select-primary"
    onChange={onChange}
    value={value}
  >
    {options.map((option, index) => (
      <option value={option.value} key={index}>
        {option.label}
      </option>
    ))}
  </select>;
};

export default Select;
