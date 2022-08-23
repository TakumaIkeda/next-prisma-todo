type Props = {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, placeholder, onChange }: Props) => {
  return (
    <input
      type="text"
      className="input input-bordered focus:input-primary"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
