type Props = {
  value: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, name, placeholder, onChange }: Props) => {
  return (
    <input
      type="text"
      className="input input-bordered focus:input-primary"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
